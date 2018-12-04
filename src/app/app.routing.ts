import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: 'blocks',
    loadChildren: './modules/+blocks/blocks.module#BlocksModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    loadChildren: './modules/+not-found/not-found.module#NotFoundModule'
  }];
