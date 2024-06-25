import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsUnderReviewComponent } from './parts-under-review.component';

describe('PartsUnderReviewComponent', () => {
  let component: PartsUnderReviewComponent;
  let fixture: ComponentFixture<PartsUnderReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsUnderReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsUnderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
