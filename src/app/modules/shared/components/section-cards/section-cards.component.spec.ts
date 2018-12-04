import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing/shared-testing.module';
import { SectionCardsComponent } from './section-cards.component';

describe('SectionCardsComponent', () => {
  let component: SectionCardsComponent;
  let fixture: ComponentFixture<SectionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCardsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
