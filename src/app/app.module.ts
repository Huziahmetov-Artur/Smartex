import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FacebookModule.forRoot(),
    CoreModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
