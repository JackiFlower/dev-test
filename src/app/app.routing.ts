import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: 'articles',
    loadChildren: './modules/+articles/articles.module#ArticlesModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    loadChildren: './modules/+not-found/not-found.module#NotFoundModule'
  }];
