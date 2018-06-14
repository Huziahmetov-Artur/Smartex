import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ButtonComponent} from './button/button.component';
import {GameTypeComponent} from './game-type/game-type.component';
import {AppPageComponent} from './app-page/app-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'game/:type/:id',
    component: GameTypeComponent
  },
  {
    path: 'game/:id',
    component: AppPageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
