import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ElementErrorComponent } from './components/element-error/element-error.component';
import { ElementLoadingComponent } from './components/element-loading/element-loading.component';
import { ElementNavigationComponent } from './components/element-navigation/element-navigation.component';
import { SectionCardsComponent } from './components/section-cards/section-cards.component';
import { ArticlesService } from './sirvices/articles.service';
import { BooksService } from './sirvices/books.service';
import { HelpersService } from './sirvices/helpers.service';
import { ProductsService } from './sirvices/products.service';
import { RequestsService } from './sirvices/requests.service';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    ElementNavigationComponent,
    ElementLoadingComponent,
    ElementErrorComponent,
    CardItemComponent,
    SectionCardsComponent
  ],
  exports: [
    ElementNavigationComponent,
    ElementLoadingComponent,
    ElementErrorComponent,
    CardItemComponent,
    SectionCardsComponent
  ],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        HelpersService,
        RequestsService,

        ArticlesService,
        BooksService,
        ProductsService
      ]
    };
  }
}
