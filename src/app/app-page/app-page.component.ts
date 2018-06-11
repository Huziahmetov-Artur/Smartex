import { Component, OnInit } from '@angular/core';
import { InfoService} from '../service/get.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  paramsId: number;
  oneApp: any;
  constructor(private activateRoute: ActivatedRoute, public infoService: InfoService) {
    // get params for search the app
    this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
    });
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.infoService.getAll().subscribe(data => {
      this.oneApp = data.filter(a => a.app_short && a.app_short.toLowerCase().indexOf(this.paramsId) >= 0)[0];

    });
  }
}
