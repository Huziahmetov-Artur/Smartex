import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {listOfApp} from "../store/ListMas";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public GetService: GetService) { }

  ngOnInit() {
    this.GetService.getApi().subscribe(res => {
      listOfApp.push(...res);
    });
  }

}
