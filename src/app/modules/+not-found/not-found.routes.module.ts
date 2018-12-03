import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './404/page-404.component';

const notFoundRoutes: Routes = [{
  path: '',
  component: Page404Component
}];

@NgModule({
  imports: [RouterModule.forChild(notFoundRoutes)],
  exports: [RouterModule]
})
export class NotFoundRoutesModule {
}
