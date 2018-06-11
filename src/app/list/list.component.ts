import { Component, OnInit } from '@angular/core';
import {listOfApp, userInfo} from '../store/ListMas';
import { InfoService} from '../service/get.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfApplication = listOfApp;
  sizeImg = 'normal';
  user = userInfo;
  imgBackground = 'white';
  sortEnum = {
    NAME : 'app_name',
    RATING: 'all_rating',
    SIZE: 'file_size',
    VERSION: 'version'
  };
  sizeEnum = {
    SMALL: 'small',
    NORMAL: 'normal',
    BIG: 'big'
  };
  colorEnum = {
    WHITE: 'white',
    BLUE: 'blue',
    PURPLE: 'purple'
  };
  constructor(public infoService : InfoService) { }

  ngOnInit() {

  }
  changeSizeImg(size) {
  this.sizeImg = size;
  }
  changeBackImg(color) {
    this.imgBackground = color;
  }
  sortArray(type) {
    this.infoService.sortMas(listOfApp, type );
  }
}
