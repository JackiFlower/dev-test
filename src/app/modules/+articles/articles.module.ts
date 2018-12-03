import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArticlesRoutesModule } from './articles.routes.module';
import { PageArticlesComponent } from './page-articles/page-articles.component';

@NgModule({
  declarations: [
    PageArticlesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ArticlesRoutesModule
  ]
})
export class ArticlesModule {
}
