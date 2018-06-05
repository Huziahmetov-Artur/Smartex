import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../store/ListMas";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  user = listOfApp;

  constructor() { }

  ngOnInit() {
  }

}
