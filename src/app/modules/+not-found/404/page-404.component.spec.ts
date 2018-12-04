import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../testing/shared-testing.module';
import { Page404Component } from './page-404.component';

describe('Page404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404Component ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
