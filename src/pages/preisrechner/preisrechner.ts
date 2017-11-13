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

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [
    9, 20, 30, 51, 11, 22, 19
  ];

  public pieChartType:string = 'pie';


   pieChartColor:any = [
    {
      backgroundColor: ['#8E44AD', '#E74C3C', '#E67E22', '#F1C40F', '#9B59B6', '#3498DB', '#2ECC71', '#1ABC9C'],
      borderColor: '#0E8BD1',
      borderWidth: '0'
    }];

  constructor(public navCtrl: NavController) {
    console.log('Preisrechner Component');
  }



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
