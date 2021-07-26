import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  valor1 = 99;
  valor2 = 7;

  valor1Alterado(newValue: any){
    this.valor1 = newValue;
  }

}
