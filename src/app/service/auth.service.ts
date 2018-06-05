import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {userInfo} from "../store/ListMas";


declare const FB;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logout() {
    FB.logout(function(response) {
      console.log(response);
      document.location.reload();
    });
  }

  loginn()  {
    FB.init({
      appId: '344244819437894',
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.7' // use graph api version 2.5
    });
    FB.login(function(response) {
      localStorage.setItem('token', JSON.stringify(response.authResponse.accessToken));
      localStorage.setItem('create_time', JSON.stringify(Number(new Date().getTime()/1000)));
      localStorage.setItem('token_life_time', JSON.stringify(response.authResponse.expiresIn));
      if (response.status === 'connected') {

        FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
          function(result) {
            if (result && !result.error) {
              userInfo.id = result.id;
              userInfo.name = result.name;
              userInfo.first_name = result.first_name;
              userInfo.picture = result.picture;
              userInfo.admin = Number(result.id) === 1606325476157343;

            } else {
              console.log(result.error);
            }
          });
      } else if (response.status === 'not_authorized') {
        console.log(response);
      } else {
        console.log(response);
      }
    });
  }
  infoByToken(): Observable<any>{
    let token = localStorage.token;
    token = token.slice(1, token.length - 1);
    return this.http.get<any>('https://graph.facebook.com/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends&access_token=' + token);
  }

}
