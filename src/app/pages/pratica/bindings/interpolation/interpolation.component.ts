import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  valor = "Valor interpolado";

  inputType = "text";
  inputValue = "Valor interpolado";

  nome = "joney js";
  nascimento = new Date("05/11/1991");
  saldoNaConta = 9_999_999.99
  texto = "era uma vez um treinamento de angular"

  resultado(){
    return "Valor interpolado via método";
  }

  getWidth(){
    return 10;
  }

}
