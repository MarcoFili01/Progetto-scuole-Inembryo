import { Routes } from '@angular/router';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard';

export const routes: Routes = [
  { path: '', component: EntitiesDashboardComponent }, // Pagina iniziale (vuota) mostra la dashboard
  { path: '**', redirectTo: '' } // Sostituisce i percorsi errati reindirizzando alla dashboard
];