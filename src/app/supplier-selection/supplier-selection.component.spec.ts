import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSelectionComponent } from './supplier-selection.component';

describe('SupplierSelectionComponent', () => {
  let component: SupplierSelectionComponent;
  let fixture: ComponentFixture<SupplierSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
