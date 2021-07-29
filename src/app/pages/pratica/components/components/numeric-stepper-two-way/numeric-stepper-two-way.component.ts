import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-stepper-two-way',
  templateUrl: './numeric-stepper-two-way.component.html',
  styleUrls: ['./numeric-stepper-two-way.component.css']
})
export class NumericStepperTwoWayComponent {

  @Input() value: number | string = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() min: number | string = 0;
  @Input() max: number | string = 100;
  @Input() step: number | string = 1;


  add(){
    if(this.value >= +this.max) return;
    this.value = +this.value + +this.step;
    if(this.value >= +this.max) this.value = +this.max;
    this.valueChange.emit(+this.value);
  }

  subtract(){
    if(this.value <= this.min) return;
    this.value = +this.value - +this.step;
    if(this.value <= +this.min) this.value = +this.min;
    this.valueChange.emit(+this.value);
  }
}
