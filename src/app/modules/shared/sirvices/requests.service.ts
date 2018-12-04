import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HelpersService } from './helpers.service';

@Injectable()
export class RequestsService {

  private tempFirstLoad = true;
  private tempFailAttempts = 1;

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService
  ) {
  }

  getRequest(url: string) {

    const randomResponseDelay = this.helpersService.getRandomNumber(1000, 3000);
    const randomHttpStatusCode = this.helpersService.getRandomNumber(400, 527);

    let randomResponseStrategy = this.helpersService.getRandomNumber(0, 2);

    // temp: improve random UI
    if (this.tempFirstLoad) {
      randomResponseStrategy = 1;
      this.tempFirstLoad = false;
    }

    // temp: improve random UI
    if (this.tempFailAttempts < 0) {
      randomResponseStrategy = 0;
      this.tempFailAttempts = 1;
    }

    // temp: fake request states
    switch (randomResponseStrategy) {

      // Request: Ok
      case 0: {

        console.log('Request: Success; Delay: ', randomResponseDelay);

        return this.http.get(url)
          .pipe(
            delay(randomResponseDelay)
          );
      }

      // Request: Failed
      case 1: {

        console.log('Request: Error; Delay: ', randomResponseDelay);
        this.tempFailAttempts--;

        return of(null).pipe(
          delay(randomResponseDelay),
          tap(() => {
            throw new HttpErrorResponse({
              error: 'Some Random Error',
              headers: null,
              status: randomHttpStatusCode,
              statusText: 'Some Random Status Text',
              url: url || undefined
            });
          })
        );
      }

      default:
        return of([]);
    }
  }

  // ToDo: request types

  postRequest(url: string, data: any) {
    return of(true);
  }

  deleteRequest(url: string, data: any) {
    return of(true);
  }

  putRequest(url: string, data: any) {
    return of({});
  }

}
