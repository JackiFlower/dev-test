import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageArticlesComponent } from './page-articles/page-articles.component';

const articlesRoutes: Routes = [{
  path: '',
  component: PageArticlesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutesModule {
}
