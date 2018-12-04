import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlocksComponent } from './page-blocks/page-blocks.component';

const articlesRoutes: Routes = [{
  path: '',
  component: PageBlocksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class BlocksRoutesModule {
}
