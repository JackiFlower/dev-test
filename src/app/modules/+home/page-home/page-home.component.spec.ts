import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../testing/shared-testing.module';
import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
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
