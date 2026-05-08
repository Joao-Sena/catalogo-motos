import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)},
  {path: 'about/:name', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)},
  { path: 'admin-area', loadComponent: () => import('./pages/admin-area/admin-area').then(m => m.AdminAreaComponent), canActivate: [authGuard]}
];
