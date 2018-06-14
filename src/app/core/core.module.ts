import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './service/auth.service';
import {InfoService} from './service/info.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService, InfoService],
  declarations: []
})
export class CoreModule { }
