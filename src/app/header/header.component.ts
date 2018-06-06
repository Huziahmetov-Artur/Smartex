import { Component, OnInit } from '@angular/core';
import {GetService} from '../service/get.service';
import {listOfApp, userInfo} from '../store/ListMas';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valueFromInputSearch;
  userInformation =  userInfo;

  constructor(public getService: GetService,private router : Router,public Auth : AuthService) { }

  ngOnInit() {
    // get the list of apps from info.json and push into the listOfApp
    // in header because i need the listOfApp even after refresh
    this.getService.getApi().subscribe(res => {
      listOfApp.push(...res);
    });
    // if accessToken lifetime is end ask for login again
    Number(new Date().getTime() / 1000) - localStorage.create_time > localStorage.token_life_time ?
      this.Auth.login() : 0 ;
    // if there is token in  localStorage get user information by accessToken
      localStorage.token ? this.Auth.infoByToken().subscribe(result => {
        userInfo.id = result.id;
        userInfo.name = result.name;
        userInfo.first_name = result.first_name;
        userInfo.picture = result.picture;
        userInfo.admin = Number(result.id) === 109175699979336;
      }) : 0;
  }
  search() {
    this.valueFromInputSearch = this.valueFromInputSearch.replace(/\s/g,'').toLowerCase();
    this.router.navigate([`/app_name/${this.valueFromInputSearch}`]);
    this.valueFromInputSearch = '';
  }
  login() {
    this.Auth.login();
  }
  logout() {
      this.Auth.logout();
  }

}
