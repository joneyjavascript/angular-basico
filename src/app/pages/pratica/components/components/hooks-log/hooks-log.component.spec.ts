import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksLogComponent } from './hooks-log.component';

describe('HooksLogComponent', () => {
  let component: HooksLogComponent;
  let fixture: ComponentFixture<HooksLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
