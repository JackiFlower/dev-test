import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing/shared-testing.module';

import { ElementNavigationComponent } from './element-navigation.component';

describe('ElementNavigationComponent', () => {
  let component: ElementNavigationComponent;
  let fixture: ComponentFixture<ElementNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementNavigationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
