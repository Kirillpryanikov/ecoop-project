import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import '../side.menu.component/side.menu.component'

@Component({
  selector: 'main-container',
  templateUrl: 'main.container.html',
  styleUrls: ['/main.container.scss']
})
export class MainContainer implements OnInit {

  constructor(public navCtrl: NavController) {
    console.log('MainContainer ');
  }

  ngOnInit() {}
}
