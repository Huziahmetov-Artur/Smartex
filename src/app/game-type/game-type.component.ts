import { Component, OnInit } from '@angular/core';
import {GetService} from '../service/get.service';
import {ActivatedRoute, Router} from '@angular/router';
import {listOfApp, userInfo} from '../store/ListMas';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit {

  filteredListOfApplications;
  paramsId;
  paramsType;
  sizeImg = 'normal';
  admin = userInfo;
  imgBackground = 'white'
  constructor(public getService: GetService, private activateRoute: ActivatedRoute, private router: Router) {
    // get params for filter the application list
    this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
      this.paramsType = params['type'];
      this.filteredListOfApplications = listOfApp.filter(a => a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
    });
  }

  ngOnInit() {
    //// get the list of apps from info.json
    this.refresh();
  }
  refresh() {
    this.getService.getApi().subscribe(res => {
      this.filteredListOfApplications = listOfApp.filter(a => a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
      // if no app go to the NotFoundComponent
      if ( this.filteredListOfApplications[0] ) {
      } else {
        this.router.navigate([`/noapp`]);
      }
    });
  }
  changeSizeImg(size) {
    // work in admin mode
    this.sizeImg = size;
  }
  changeBackImg(color) {
    // work in admin mode
    this.imgBackground = color;
  }
  sortMas(type) {
    this.getService.sortMas(this.filteredListOfApplications, type )
  }
}
