import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {listOfApp} from "../store/ListMas";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchVar;

  constructor(public GetService: GetService,private router : Router) { }

  ngOnInit() {
    this.GetService.getApi().subscribe(res => {
      listOfApp.push(...res);
    });
  }
  search() {
    this.searchVar = this.searchVar.replace(/\s/g,'').toLowerCase();
    this.router.navigate([`/app_name/${this.searchVar}`]);
    this.searchVar = '';
  }

}
