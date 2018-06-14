import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from 'rxjs';
import {User} from '../../shared/interface/Interface';
import {FacebookService, InitParams, LoginResponse} from 'ngx-facebook';



@Injectable()
export class AuthService {
  private userInfo: Observable<User>;
  private _userInfo: BehaviorSubject<User>;

  constructor(private http: HttpClient, private fb: FacebookService) {

    this._userInfo = new BehaviorSubject<User>({
      'id': 0,
      'name': '',
      'first_name': '',
      'picture': {},
      'admin': false
    });
    this.userInfo = this._userInfo.asObservable();

  }

  login()  {
    // sets the state of Facebook SDK
    const initParams: InitParams = {
      appId: '344244819437894',
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.7' // use graph api version 2.7
    };

    this.fb.init(initParams);
    // Ask the user to authorize using the Login Dialog
    this.fb.login()
      .then((response: LoginResponse) => {
        // if response contains information
        if (response.authResponse) {
          localStorage.setItem('token', JSON.stringify(response.authResponse.accessToken));
          localStorage.setItem('create_time', JSON.stringify(Number(new Date().getTime() / 1000)));
          localStorage.setItem('token_life_time', JSON.stringify(response.authResponse.expiresIn));
          // get data from Facebook Graph API
          this.infoByToken(response.authResponse.accessToken);
        } else  {
          // if user close the Login Dialog.
          document.location.reload();
        }
      })
      .catch((error: any) => console.error(error));
  }
  getUserInfo(): Observable<User> {
    return this.userInfo;
  }
  infoByToken(onLoadToken) {
    const adminID = 109175699979336;

    if (!onLoadToken) {
      // if token in localStorage
      let token = localStorage.token;
      token = token.slice(1, token.length - 1);
      return this.http.get<any>('https://graph.facebook.com/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends&access_token=' + token).subscribe(data => {
        data.admin  = Number(data.id) === adminID;
        this._userInfo.next(Object.assign({}, ...data));
      } );
    } else {
      return this.http.get<any>('https://graph.facebook.com/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends&access_token=' + onLoadToken).subscribe(data => {
        data.admin  = Number(data.id) === adminID;
        this._userInfo.next(Object.assign({}, ...data));
      } );
    }
  }

}
