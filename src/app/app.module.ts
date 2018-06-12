import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './/app-routing.module';
import { GameTypeComponent } from './game-type/game-type.component';
import { AppPageComponent } from './app-page/app-page.component';
import {FormsModule} from "@angular/forms";
import { UserAccountComponent } from './user-account/user-account.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    GameTypeComponent,
    AppPageComponent,
    UserAccountComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FacebookModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
