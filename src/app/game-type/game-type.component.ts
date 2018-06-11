import { Component, OnInit } from '@angular/core';
import { InfoService} from '../service/get.service';
import {ActivatedRoute, Router} from '@angular/router';
import {listOfApp, userInfo} from '../store/ListMas';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit {

  filteredListOfApplications: any[];
  paramsId: number;
  paramsType: string;
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

  constructor(public infoService: InfoService, private activateRoute: ActivatedRoute, private router: Router) {
    // get params for filter the application list
    this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
      this.paramsType = params['type'];
      this.filteredListOfApplications = listOfApp.filter(a => a[this.paramsType] && a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
    });
  }

  ngOnInit() {
    //// get the list of apps from info.json
    this.refresh();
  }
  refresh() {
    this.infoService.getApi().subscribe(res => {
      this.filteredListOfApplications = listOfApp.filter(a => a[this.paramsType] && a[this.paramsType].toLowerCase().indexOf(this.paramsId) >= 0);
      // if no app go to the NotFoundComponent
      if ( this.filteredListOfApplications[0] ) {
      }
      else
      {
        this.router.navigate([`/noapp`]);
      }
    });
  }
  changeSizeImg(size) {
    this.sizeImg = size;
  }
  changeBackImg(color) {
    this.imgBackground = color;
  }
  sortArray(type) {
    console.log(this.user.admin);
    this.infoService.sortMas(this.filteredListOfApplications, type );
  }
}
