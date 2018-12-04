import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HelpersService } from './helpers.service';
import { ProductsService } from './products.service';
import { RequestsService } from './requests.service';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService, RequestsService, HelpersService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});

