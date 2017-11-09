import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  '@angular/router'

@Component({
  selector: 'vertrage-directive',
  templateUrl: 'vertrage.html',
  styleUrls: ['/vertrage.scss']
})
export class VertrageComponent implements OnInit {

  constructor(public navCtrl: NavController) {
    console.log('VertrageComponent ');
  }

  ngOnInit() {}
}
