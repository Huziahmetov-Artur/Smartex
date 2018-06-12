import {Component, OnDestroy, OnInit} from '@angular/core';
import { InfoService} from '../service/get.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {App} from '../interface/Interface';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit, OnDestroy {

  filteredListOfApplications: App[];
  ListOfApplications: App[];
  paramsId: number;
  paramsType: string;
  sizeImg = 'normal';
  imgBackground = 'white';
  subscriptionToParams: any;
  subscriptionToInfoService: any;

  constructor(public infoService: InfoService, private activateRoute: ActivatedRoute, private router: Router, public Auth: AuthService) {
    // get params for filter the application list
    this.subscriptionToParams = this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
      this.paramsType = params['type'];
      this.filteredListOfApplications = this.ListOfApplications && this.ListOfApplications.filter(a => a[this.paramsType] && a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
    });

  }

  ngOnInit() {
    //// get the list of apps from info.json
    this.refresh();
  }
  ngOnDestroy() {
    this.subscriptionToParams.unsubscribe();
    this.subscriptionToInfoService.unsubscribe();
  }
  mainPage() {
    this.router.navigate([`/`]);
  }
  refresh() {
    this.subscriptionToInfoService = this.infoService.getAll().subscribe(data => {
      this.ListOfApplications = data;
      this.filteredListOfApplications = data.filter(a => a[this.paramsType] && a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
    });
  }
  changeStyles(params) {
    this.imgBackground = params['color'];
    this.sizeImg = params['size'];
  }
  Sort(type) {
    this.infoService.sortArray(this.filteredListOfApplications, type );
  }
}
