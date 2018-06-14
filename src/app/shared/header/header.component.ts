import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/service/auth.service';
import {User} from '../interface/Interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  valueFromInputSearch: string;
  userInformation: User;
  subscription: any;

  constructor( private router: Router, public Auth: AuthService) {
    // if accessToken lifetime is end ask for login again
    Number(new Date().getTime() / 1000) - localStorage.create_time > localStorage.token_life_time ?
      this.Auth.login() : 0 ;
    // if there is token in  localStorage get user information by accessToken
    localStorage.token ? this.Auth.infoByToken(0) : 0;
  }

  ngOnInit() {
    this.subscription = this.Auth.getUserInfo().subscribe(data => {
      this.userInformation = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  search() {
    this.valueFromInputSearch = this.valueFromInputSearch.replace(/\s/g,'').toLowerCase();
    this.router.navigate([`game/app_name/${this.valueFromInputSearch}`]);
    this.valueFromInputSearch = '';
  }
  login() {
    this.Auth.login();
  }
  logout() {
      localStorage.clear();
      document.location.reload();
  }

}
