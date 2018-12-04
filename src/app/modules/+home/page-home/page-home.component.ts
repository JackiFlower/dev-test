import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../../shared/sirvices/articles.service';
import { BooksService } from '../../shared/sirvices/books.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnDestroy {

  // template

  viewContentLoading = true;
  viewContentLoadingError = false;

  // data

  books: any[] = [];
  requestSubscription: Subscription | null = null;

  constructor(
    private booksService: BooksService
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    if (this.requestSubscription) {
      this.requestSubscription.unsubscribe();
    }
  }

  loadData() {

    this.viewContentLoading = true;
    this.viewContentLoadingError = false;

    this.requestSubscription = this.booksService.getBooks()
      .subscribe((requestData: any[]) => {

        this.books = requestData.slice(0, 20);
        this.viewContentLoading = false;

      }, (error: HttpErrorResponse) => {
        this.viewContentLoadingError = true;
        console.error(`Handle Error: ${error.status}, ${error.statusText})`, error);
      });
  }

}
