import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HelpersService } from './helpers.service';
import { RequestsService } from './requests.service';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsService, HelpersService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
