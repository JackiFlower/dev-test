import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './modules/+blocks/blocks.module#BlocksModule'
  },
  {
    path: 'books',
    loadChildren: './modules/+books/books.module#BooksModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    loadChildren: './modules/+not-found/not-found.module#NotFoundModule'
  }];
