import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path : '', loadChildren : './dashboard/dashboard.module#DashboardModule'},
  {path : 'user', loadChildren : './account/account.module#AccountModule'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
