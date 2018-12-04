import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementErrorComponent } from './element-error.component';

describe('ElementErrorComponent', () => {
  let component: ElementErrorComponent;
  let fixture: ComponentFixture<ElementErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementErrorComponent ]
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
