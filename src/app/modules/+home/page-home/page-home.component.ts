import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnDestroy {

  // template

  viewBooksContentLoading = true;
  viewBooksContentLoadingError = false;

  // data

  books: any[] = [];
  booksSubscription: Subscription = new Subscription();

  constructor(
    private booksService: BooksService
  ) {
  }

  ngOnInit() {
    this.loadBooksData();
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  loadBooksData() {

    this.viewBooksContentLoading = true;
    this.viewBooksContentLoadingError = false;

    this.booksSubscription = this.booksService.getBooks()
      .subscribe((requestData: any[]) => {

        this.books = requestData.slice(0, 20);
        this.viewBooksContentLoading = false;

      }, (error: HttpErrorResponse) => {
        this.viewBooksContentLoadingError = true;
        console.error(`Handle Books Request Error: ${error.status}, ${error.statusText})`, error);
      });
  }

}
