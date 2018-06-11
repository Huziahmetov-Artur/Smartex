import { Component, OnInit } from '@angular/core';
import {userInfo} from '../store/ListMas';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user = localStorage.user  ? JSON.parse(localStorage.user) : userInfo;
  constructor() { }

  ngOnInit() {
  }

}
