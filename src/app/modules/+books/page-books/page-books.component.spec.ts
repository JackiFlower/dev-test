import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../testing/shared-testing.module';
import { PageBooksComponent } from './page-books.component';

describe('PageBooksComponent', () => {
  let component: PageBooksComponent;
  let fixture: ComponentFixture<PageBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBooksComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have state of loading`, () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.viewBooksContentLoading).toBeTruthy();
  });

  it(`should have state of loading error`, () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.viewBooksContentLoadingError).toBeFalsy();
  });

});
