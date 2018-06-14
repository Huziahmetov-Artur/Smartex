import { Component, OnInit } from '@angular/core';
import { InfoService} from '../../core/service/info.service';
import { OnDestroy } from "@angular/core";
import {App} from '../../shared/interface/Interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  listOfApplication: App[];
  sizeImg = 'normal';
  imgBackground = 'white';
  subscriptionToInfoService: any;
  constructor(public infoService: InfoService) {
  }

  ngOnInit() {
    console.log('here');
    this.subscriptionToInfoService = this.infoService.getAll().subscribe(data => {
      this.listOfApplication = data;
    });
  }
  ngOnDestroy() {
    this.subscriptionToInfoService.unsubscribe();
  }

  changeStyles(params) {
    this.imgBackground = params['color'];
    this.sizeImg = params['size'];
  }
  Sort(type) {
    this.infoService.sortArray(this.listOfApplication, type );
  }
}
