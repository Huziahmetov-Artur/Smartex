import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../core/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  isLogged: boolean;
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUserInfo().subscribe(data => {
      console.log(data);
      this.isLogged = data.name !== '';
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.isLogged) {
      // if user isn't log in go to the main page
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
