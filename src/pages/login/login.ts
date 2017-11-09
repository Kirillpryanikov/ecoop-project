import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPinPage } from '../login-pin/login.pin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['/login.scss']

})
export class LoginPage {
  constructor(public navCtrl: NavController) {
    console.log('LoginPage');
  }

  goLoginPin(f: NgForm) {
    if(f.value.username && f.value.password) {
      this.navCtrl.push(LoginPinPage);
    }
  }
}
