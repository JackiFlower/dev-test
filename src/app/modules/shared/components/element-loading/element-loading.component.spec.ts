import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing/shared-testing.module';

import { ElementLoadingComponent } from './element-loading.component';

describe('ElementLoadingComponent', () => {
  let component: ElementLoadingComponent;
  let fixture: ComponentFixture<ElementLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementLoadingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
