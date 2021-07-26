import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginReactiveComponent } from './login-reactive.component';

describe('LoginReactiveComponent', () => {
  let component: LoginReactiveComponent;
  let fixture: ComponentFixture<LoginReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      providers: [
        { provide: Router, useValue: ({} as Router) }
      ],
      declarations: [ LoginReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
