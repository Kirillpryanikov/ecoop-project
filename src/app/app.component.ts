import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPinPage } from '../pages/login-pin/login.pin';
import { LoginPage } from '../pages/login/login';
import { MainContainer } from '../pages/main.container/main.container';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this.rootPage = MainContainer;
      this.rootPage = LoginPage;
    });
  }
}

