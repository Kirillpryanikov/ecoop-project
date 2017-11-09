import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  '@angular/router'

@Component({
  selector: 'side-menu-directive',
  templateUrl: 'side.menu.component.html',
  styleUrls: ['/side.menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public navCtrl: NavController) {
    console.log('Side Menu ');
  }


  ngOnInit() {}
}
