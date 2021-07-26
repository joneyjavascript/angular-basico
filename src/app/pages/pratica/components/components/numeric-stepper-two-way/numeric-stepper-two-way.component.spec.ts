import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericStepperTwoWayComponent } from './numeric-stepper-two-way.component';

describe('NumericStepperTwoWayComponent', () => {
  let component: NumericStepperTwoWayComponent;
  let fixture: ComponentFixture<NumericStepperTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericStepperTwoWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericStepperTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
