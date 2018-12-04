import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing/shared-testing.module';

import { ElementErrorComponent } from './element-error.component';

describe('ElementErrorComponent', () => {
  let component: ElementErrorComponent;
  let fixture: ComponentFixture<ElementErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementErrorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
