import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Page404Component } from './404/page-404.component';
import { NotFoundRoutesModule } from './not-found.routes.module';

@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    SharedModule,
    CommonModule,
    NotFoundRoutesModule
  ]
})
export class NotFoundModule {
}
