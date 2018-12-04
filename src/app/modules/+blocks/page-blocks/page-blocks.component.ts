import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../../shared/sirvices/articles.service';
import { BooksService } from '../../shared/sirvices/books.service';
import { ProductsService } from '../../shared/sirvices/products.service';

@Component({
  selector: 'page-blocks',
  templateUrl: './page-blocks.component.html',
  styleUrls: ['./page-blocks.component.scss']
})
export class PageBlocksComponent implements OnInit, OnDestroy {

  // template

  viewBooksContentLoading = true;
  viewBooksContentLoadingError = false;

  viewProductsContentLoading = true;
  viewProductsContentLoadingError = false;

  viewArticlesContentLoading = true;
  viewArticlesContentLoadingError = false;

  // data

  books: any[] = [];
  booksSubscription: Subscription = new Subscription();

  products: any[] = [];
  productsSubscription: Subscription = new Subscription();

  articles: any[] = [];
  articlesSubscription: Subscription = new Subscription();

  constructor(
    private booksService: BooksService,
    private productsService: ProductsService,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit() {
    this.loadBooksData();
    this.loadProductsData();
    this.loadArticlesData();
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
    this.articlesSubscription.unsubscribe();
  }

  loadBooksData() {
    this.viewBooksContentLoading = true;
    this.viewBooksContentLoadingError = false;

    this.booksSubscription = this.booksService.getBooks()
      .subscribe((requestData: any[]) => {

        this.books = requestData.slice(0, 3);
        this.viewBooksContentLoading = false;

      }, (error: HttpErrorResponse) => {
        this.viewBooksContentLoadingError = true;
        console.error(`Handle Books Request Error: ${error.status}, ${error.statusText})`, error);
      });
  }

  loadProductsData() {
    this.viewProductsContentLoading = true;
    this.viewProductsContentLoadingError = false;

    this.productsSubscription = this.productsService.getProducts()
      .subscribe((requestData: any[]) => {

        this.products = requestData.slice(3, 6);
        this.viewProductsContentLoading = false;

      }, (error: HttpErrorResponse) => {
        this.viewProductsContentLoadingError = true;
        console.error(`Handle Products Request Error: ${error.status}, ${error.statusText})`, error);
      });
  }

  loadArticlesData() {
    this.viewArticlesContentLoading = true;
    this.viewArticlesContentLoadingError = false;

    this.articlesSubscription = this.articlesService.getArticles()
      .subscribe((requestData: any[]) => {

        this.articles = requestData.slice(6, 9);
        this.viewArticlesContentLoading = false;

      }, (error: HttpErrorResponse) => {
        this.viewArticlesContentLoadingError = true;
        console.error(`Handle Articles Request Error: ${error.status}, ${error.statusText})`, error);
      });
  }

}
