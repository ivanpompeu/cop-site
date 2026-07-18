import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sucesso',
    loadComponent: () => import('./pages/sucesso/sucesso.component').then(m => m.SucessoComponent)
  },
  {
    path: 'cancelado',
    loadComponent: () => import('./pages/cancelado/cancelado.component').then(m => m.CanceladoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
