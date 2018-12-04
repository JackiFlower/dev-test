import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardsComponent } from './section-cards.component';

describe('SectionCardsComponent', () => {
  let component: SectionCardsComponent;
  let fixture: ComponentFixture<SectionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCardsComponent ]
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
