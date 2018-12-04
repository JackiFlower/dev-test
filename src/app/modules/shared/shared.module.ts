import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArticlesService } from './sirvices/articles.service';
import { BooksService } from './sirvices/books.service';
import { HelpersService } from './sirvices/helpers.service';
import { ProductsService } from './sirvices/products.service';
import { RequestsService } from './sirvices/requests.service';
import { SectionCardsComponent } from './components/section-cards/section-cards.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    SectionCardsComponent,
    CardItemComponent
  ],
  exports: [
    NavigationComponent,
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
