import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestsService } from './requests.service';

@Injectable()
export class ProductsService {

  private pathApiBase = 'https://fakerestapi.azurewebsites.net/api/';
  private pathApiProducts = `${this.pathApiBase}Books`;

  constructor(
    private requestsService: RequestsService
  ) {
  }

  getProducts(): Observable<any> {
    const url = `${this.pathApiProducts}`;

    return this.requestsService.getRequest(url);
  }

}
