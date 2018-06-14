import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../shared/interface/Interface';
import {AuthService} from '../../core/service/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit, OnDestroy {

  user: User;
  subscriptionToAuthService: any;
  constructor(public Auth: AuthService) {
  }

  ngOnInit() {
    this.subscriptionToAuthService = this.Auth.getUserInfo().subscribe(data => this.user = data);
  }
  ngOnDestroy() {
    this.subscriptionToAuthService.unsubscribe();
  }

}
