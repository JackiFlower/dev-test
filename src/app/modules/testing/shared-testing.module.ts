import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from '../shared/services/articles.service';
import { BooksService } from '../shared/services/books.service';
import { HelpersService } from '../shared/services/helpers.service';
import { ProductsService } from '../shared/services/products.service';
import { RequestsService } from '../shared/services/requests.service';

@NgModule({
  providers: [
    // todo: mocked services
    // { provide: XxxService, useClass: XxxServiceMock },

    // todo: create mocks (internal)
    HelpersService,
    RequestsService,
    ArticlesService,
    BooksService,
    ProductsService,

    // todo: create mocks (external)

  ],
  imports: [
    CommonModule,
    HttpClientTestingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    NgbModule
  ]
})
export class SharedTestingModule {
}
