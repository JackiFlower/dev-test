import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestsService } from './requests.service';

@Injectable()
export class ArticlesService {

  private pathApiBase = 'https://fakerestapi.azurewebsites.net/api/';
  private pathApiArticles = `${this.pathApiBase}Books`;

  constructor(
    private requestsService: RequestsService
  ) {
  }

  getArticles(): Observable<any> {
    const url = `${this.pathApiArticles}`;

    return this.requestsService.getRequest(url);
  }

}
