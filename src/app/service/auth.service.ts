import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {userInfo} from "../store/ListMas";


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
    const adminID = 109175699979336;
    // sets the state of Facebook SDK
    FB.init({
      appId: '344244819437894',
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.7' // use graph api version 2.7
    });
    // Ask the user to authorize using the Login Dialog
    FB.login(function(response) {
      // if response contains information
      if (response.authResponse) {
        localStorage.setItem('token', JSON.stringify(response.authResponse.accessToken));
        localStorage.setItem('create_time', JSON.stringify(Number(new Date().getTime() / 1000)));
        localStorage.setItem('token_life_time', JSON.stringify(response.authResponse.expiresIn));
        // get data from Facebook Graph API
        FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
          function(result) {
            if (result && !result.error) {
              userInfo.id = result.id;
              userInfo.name = result.name;
              userInfo.first_name = result.first_name;
              userInfo.picture = result.picture;
              userInfo.admin = Number(result.id) === adminID;
            } else {
              console.log(result.error);
            }
          });
      } else  {
        document.location.reload();
      }
    });
  }
  infoByToken(): Observable<any>{
    let token = localStorage.token;
    token = token.slice(1, token.length - 1);
    return this.http.get<any>('https://graph.facebook.com/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends&access_token=' + token);
  }

}
