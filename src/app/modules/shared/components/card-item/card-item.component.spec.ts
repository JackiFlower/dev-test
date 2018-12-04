import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing/shared-testing.module';

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
