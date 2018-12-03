import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutesModule } from './home.routes.module';
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutesModule
  ]
})
export class HomeModule {
}
