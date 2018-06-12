import {Component, OnDestroy, OnInit} from '@angular/core';
import { EventEmitter, Output} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {color, size, sort} from '../interface/Interface';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy {
  params = {};
  admin: boolean;
  subscriptionToAuthService: any;
  sortParams = {
    NAME : sort.NAME,
    RATING: sort.RATING,
    SIZE: sort.SIZE,
    VERSION: sort.VERSION
  };
  sizeParams = {
    SMALL: size.SMALL,
    NORMAL: size.NORMAL,
    BIG: size.BIG
  };
  colorParams = {
    WHITE: color.WHITE,
    BLUE: color.BLUE,
    PURPLE: color.PURPLE
  };

  @Output() onChanged = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  constructor( public Auth: AuthService) {
    this.params = {
      'color' : this.colorParams.WHITE,
      'size' : this.sizeParams.NORMAL
    };
  }

  ngOnInit() {
    this.subscriptionToAuthService = this.Auth.getUserInfo().subscribe(data => {
      this.admin = data.admin;
    });
  }
  ngOnDestroy() {
    this.subscriptionToAuthService.unsubscribe();
  }
  sortArray(type) {
    this.onChanged.emit(type);
  }
  changeSizeImg(sizeBlock) {
    this.params['size'] = sizeBlock;
    this.onClick.emit(this.params);
  }
  changeBackImg(colorBlock) {
    this.params['color'] = colorBlock;
    this.onClick.emit(this.params);
  }

}
