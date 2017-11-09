import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicApp, IonicPageModule, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { ROUTES } from './router';

import { ChartsModule } from 'ng2-charts'

import { LoginPage } from './login/login';
import { LoginPinPage } from './login-pin/login.pin';
import { MainContainer } from './main.container/main.container';
import { SideMenuComponent } from './side.menu.component/side.menu.component';
import { PreisrechnerComponent } from './preisrechner/preisrechner';
import { VertrageComponent } from './vertrage/vertrage';

const pages = [
  LoginPage,
  LoginPinPage,
  MainContainer,
  SideMenuComponent,
  PreisrechnerComponent,
  VertrageComponent
];

@NgModule({
  declarations: pages,
  imports: [
    ChartsModule,
    IonicModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: pages,
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class PageModule {}
