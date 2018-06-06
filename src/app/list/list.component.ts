import { Component, OnInit } from '@angular/core';
import {listOfApp, userInfo} from '../store/ListMas';
import {GetService} from '../service/get.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfApplication = listOfApp;
  sizeImg = 'normal';
  admin = userInfo;
  imgBackground = 'white'
  constructor(public getService: GetService) { }

  ngOnInit() {

  }
  changeSizeImg(size) {
  this.sizeImg = size;
  }
  changeBackImg(color) {
    this.imgBackground = color;
  }
  sortMas(type) {
    this.getService.sortMas(listOfApp, type );
  }
}
