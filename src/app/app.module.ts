import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './/app-routing.module';
import { GameTypeComponent } from './game-type/game-type.component';
import { AppPageComponent } from './app-page/app-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    GameTypeComponent,
    AppPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
