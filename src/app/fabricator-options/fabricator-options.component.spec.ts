import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricatorOptionsComponent } from './fabricator-options.component';

describe('FabricatorOptionsComponent', () => {
  let component: FabricatorOptionsComponent;
  let fixture: ComponentFixture<FabricatorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricatorOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricatorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
