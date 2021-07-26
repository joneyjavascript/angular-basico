import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';

import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationComponent, ReversePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
