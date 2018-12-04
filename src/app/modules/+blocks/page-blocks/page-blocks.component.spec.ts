import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../testing/shared-testing.module';
import { PageBlocksComponent } from './page-blocks.component';

describe('PageBlocksComponent', () => {
  let component: PageBlocksComponent;
  let fixture: ComponentFixture<PageBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlocksComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
