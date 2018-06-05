import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent} from "./list/list.component";
import {GameTypeComponent} from "./game-type/game-type.component";
import {AppPageComponent} from "./app-page/app-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UserAccountComponent} from "./user-account/user-account.component";


const routes : Routes = [
  {path : '', component : ListComponent},
  {path : 'game/:id', component : AppPageComponent},
  {path : 'user', pathMatch: 'full', component : UserAccountComponent},
  {path : ':type/:id', pathMatch: 'full', component : GameTypeComponent},
  {path : '**', component : NotFoundComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
