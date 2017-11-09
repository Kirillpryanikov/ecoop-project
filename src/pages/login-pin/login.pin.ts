import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainContainer } from '../main.container/main.container';

@Component({
  selector: 'page-login-pin',
  templateUrl: 'login.pin.html',
  styleUrls: ['/login.pin.scss']

})
export class LoginPinPage implements OnInit {

  enteredNumbers: number[] = [];

  constructor(public navCtrl: NavController) {
    console.log('LoginPinPage');
  }

  ngOnInit() {}

  clickButton(num) {
    if(this.enteredNumbers.length < 5) {
      this.enteredNumbers.push(num);
    }

    if(this.enteredNumbers.length == 5) {
      this.navCtrl.push(MainContainer);
    }
  }
}
