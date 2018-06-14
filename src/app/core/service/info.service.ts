import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class InfoService {
  private listOfApp: Observable<any[]>;
  private _listOfApp: BehaviorSubject<any[]>;


  constructor(private http: HttpClient) {
    this._listOfApp = new BehaviorSubject([]);
    this.listOfApp = this._listOfApp.asObservable();
    this.loadAll();
  }

  loadAll() {
    this.http.get<any[]>('./assets/info.json').subscribe(data => {
      this._listOfApp.next(Object.assign([], data));
    });
  }
  getAll(): Observable<any[]> {
    return this.listOfApp;
  }
  sortArray(mas, typee ) {
    mas.sort(function (a, b) {
      if (a[typee] > b[typee]) {
        return 1;
      }
      if (a[typee] < b[typee]) {
        return -1;
      }
      return 0;
    });
  }
}
