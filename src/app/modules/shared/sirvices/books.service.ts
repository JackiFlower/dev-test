import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestsService } from './requests.service';

@Injectable()
export class BooksService {

  private pathApiBase = 'https://fakerestapi.azurewebsites.net/api/';
  private pathApiBooks = `${this.pathApiBase}Books`;

  constructor(
    private requestsService: RequestsService
  ) {
  }

  getBooks(): Observable<any> {
    const url = `${this.pathApiBooks}`;

    return this.requestsService.getRequest(url);
  }

}
