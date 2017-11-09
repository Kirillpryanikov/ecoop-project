import { Routes } from '@angular/router';
import { PreisrechnerComponent } from './preisrechner/preisrechner';
import { VertrageComponent } from './vertrage/vertrage';

export const ROUTES: Routes = [
  { path: '', component: PreisrechnerComponent },
  { path: 'preisrechner', component: PreisrechnerComponent },
  { path: 'vertrage', component: VertrageComponent },
];
