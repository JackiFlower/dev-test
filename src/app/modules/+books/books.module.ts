import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutesModule } from './books.routes.module';
import { PageBooksComponent } from './page-books/page-books.component';

@NgModule({
  declarations: [
    PageBooksComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BooksRoutesModule
  ]
})
export class BooksModule {
}
