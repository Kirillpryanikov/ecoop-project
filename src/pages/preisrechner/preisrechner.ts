import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'preisrechner-directive',
  templateUrl: 'preisrechner.html',
  styleUrls: ['/preisrechner.rechner.scss','/preisrechner.tarifergebnis.scss']

})
export class PreisrechnerComponent {

  data = {
    energieart:'storm',
    tarifart: 'premium',
    zahlerart:'ht/nt',
    vertragslaufzeit: '12 monate',
    verbrauch: 5000,
    kundenart: 'haushalt',
    PLZ:300,
    ORT:'Regensburg 3',
    strasse: 'Halfnesteig',
    HNR: 6
  };

  constructor(public navCtrl: NavController) {
    console.log('Preisrechner Component');
  }

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [30, 50, 100, 30, 31, 11];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
