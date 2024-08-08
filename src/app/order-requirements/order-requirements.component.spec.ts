import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequirementsComponent } from './order-requirements.component';

describe('OrderRequirementsComponent', () => {
  let component: OrderRequirementsComponent;
  let fixture: ComponentFixture<OrderRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRequirementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
