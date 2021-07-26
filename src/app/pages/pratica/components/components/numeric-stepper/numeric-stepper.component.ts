import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-numeric-stepper',
  templateUrl: './numeric-stepper.component.html',
  styleUrls: ['./numeric-stepper.component.css']
})
export class NumericStepperComponent  {

  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  add(){
    if(this.value >= this.max) return;
    this.value += this.step;
    if(this.value >= this.max) this.value = this.max;
    this.change.emit(this.value);
  }

  subtract(){
    if(this.value <= this.min) return;
    this.value -= this.step;
    if(this.value <= this.min) this.value = this.min;
    this.change.emit(this.value);
  }
}
