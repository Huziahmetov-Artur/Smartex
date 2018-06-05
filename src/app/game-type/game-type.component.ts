import { Component, OnInit } from '@angular/core';
import {GetService} from "../service/get.service";
import {ActivatedRoute, Router} from "@angular/router";
import {listOfApp} from "../store/ListMas";

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit {

  infoMas;
  variable;
  id;
  type;
  subscription;
  constructor(public GetService : GetService,private activateRoute: ActivatedRoute,private router : Router) {
    this.subscription = this.activateRoute.params.subscribe(params=> {
      this.id=params['id'];
      this.type=params['type'];
      console.log(this.type)
      this.infoMas = listOfApp.filter(a => a[this.type].toLowerCase().indexOf(this.id) >= 0);
    });
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.infoMas = listOfApp.filter(a => a[this.type].toLowerCase().indexOf(this.id) >= 0);
      if ( this.infoMas[0] ) {
      }
      else
      {
        this.router.navigate([`/noapp`]);
      }
    });
  }
}
