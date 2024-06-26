import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartComponent } from './view-part.component';

describe('ViewPartComponent', () => {
  let component: ViewPartComponent;
  let fixture: ComponentFixture<ViewPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
