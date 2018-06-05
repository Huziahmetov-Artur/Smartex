import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  id: number;
  variable;
  oneGame;
  subscription;
  constructor(private activateRoute: ActivatedRoute,public GetService : GetService) {
    this.subscription = this.activateRoute.params.subscribe(params=> {
      this.id=params['id'];
    });
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      console.log('refresh');
      this.oneGame = this.variable.filter(a => a.app_short.toLowerCase().indexOf(this.id) >= 0)[0];
    });

  }

}
