import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
import { HelpersService } from './helpers.service';
import { RequestsService } from './requests.service';

describe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService, RequestsService, HelpersService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
