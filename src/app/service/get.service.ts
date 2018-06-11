import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private listOfApp: Observable<any[]>;
  private _listOfApp: BehaviorSubject<any[]>;
  private dataStore: {
    listOfApp: any[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { listOfApp : [] };
    this._listOfApp = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this.listOfApp = this._listOfApp.asObservable();
  }

  loadAll() {
    this.http.get<any[]>('./assets/info.json').subscribe(data => {
      this.dataStore.listOfApp = data;
      this._listOfApp.next(Object.assign({}, this.dataStore).listOfApp);
    });
  }
  getAll(): Observable<any[]> {
    return this.listOfApp;
  }
  sortMas(mas, typee ) {
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
