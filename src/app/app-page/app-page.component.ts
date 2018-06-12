import {Component, OnDestroy, OnInit} from '@angular/core';
import { InfoService} from '../service/get.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interface/Interface';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit, OnDestroy {

  paramsId: number;
  oneApp: User;
  subscriptionToParams: any;
  constructor(private activateRoute: ActivatedRoute, public infoService: InfoService) {
    // get params for search the app
   this.subscriptionToParams = this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
    });
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnDestroy() {
    this.subscriptionToParams.unsubscribe();
  }
  refresh() {
    this.infoService.getAll().subscribe(data => {
      this.oneApp = data.find(a => a.app_short && a.app_short.toLowerCase().indexOf(this.paramsId) >= 0);
    });
  }
}
