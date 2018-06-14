import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ListComponent} from './list/list.component';
import {GameTypeComponent} from './game-type/game-type.component';
import {AppPageComponent} from './app-page/app-page.component';
import {ButtonComponent} from './button/button.component';
import {AuthGuard} from './auth.guard';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [ListComponent, GameTypeComponent, AppPageComponent, ButtonComponent]
})
export class DashboardModule { }
