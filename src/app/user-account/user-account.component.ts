import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../interface/Interface';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit, OnDestroy {

  user: User;
  subscriptionToAythService: any;
  constructor(public Auth: AuthService) {
  }

  ngOnInit() {
    this.subscriptionToAythService = this.Auth.getUserInfo().subscribe(data => this.user = data);
  }
  ngOnDestroy() {
    this.subscriptionToAythService.unsubscribe();
  }

}
