import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';

const homeRoutes: Routes = [{
  path: '',
  component: PageHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutesModule {
}
