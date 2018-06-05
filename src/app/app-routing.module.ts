import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent} from "./list/list.component";
import {GameTypeComponent} from "./game-type/game-type.component";


const routes : Routes = [
  {path : '', component : ListComponent},
  {path : ':type/:id', pathMatch: 'full', component : GameTypeComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
