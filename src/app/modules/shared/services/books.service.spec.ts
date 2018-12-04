import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HelpersService } from './helpers.service';
import { RequestsService } from './requests.service';

describe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService, RequestsService, HelpersService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));
});
