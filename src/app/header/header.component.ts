import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {listOfApp, userInfo} from "../store/ListMas";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchVar;
  user =  userInfo;


  constructor(public GetService: GetService,private router : Router,public Auth : AuthService) { }

  ngOnInit() {
    this.GetService.getApi().subscribe(res => {
      listOfApp.push(...res);
    });
    Number(new Date().getTime()/1000)-localStorage.create_time > localStorage.token_life_time ?
      this.Auth.loginn() : 0;

      localStorage.token ? this.Auth.infoByToken().subscribe(result => {
        userInfo.id = result.id;
        userInfo.name = result.name;
        userInfo.first_name = result.first_name;
        userInfo.picture = result.picture;
        userInfo.admin = Number(result.id) === 1606325476157343;
      }) : 0;
  }
  search() {
    this.searchVar = this.searchVar.replace(/\s/g,'').toLowerCase();
    this.router.navigate([`/app_name/${this.searchVar}`]);
    this.searchVar = '';
  }
  login(){
    this.Auth.loginn();
  }
  logout(){
    if(localStorage.token){
      localStorage.clear();
      document.location.reload();
    } else {
      this.Auth.logout();
    }
  }

}
