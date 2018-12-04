import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBooksComponent } from './page-books/page-books.component';

const homeRoutes: Routes = [{
  path: '',
  component: PageBooksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class BooksRoutesModule {
}
