import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  paramsId: number;
  oneApp; //the right app

  constructor(private activateRoute: ActivatedRoute,public GetService : GetService) {
    // get params for search the app
    this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
    });
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    //get list of applications and search the right app
    this.GetService.getApi().subscribe(res => {
      this.oneApp = res.filter(a => a.app_short.toLowerCase().indexOf(this.paramsId) >= 0)[0];
    });

  }

}
