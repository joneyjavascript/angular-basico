import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NameExistDirective, validateNameExist } from 'src/app/directives/name-exist.directive';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  nome = new FormControl("Joney JS", [ 
    Validators.required, 
    Validators.minLength(3) 
  ], [ validateNameExist ]);




  // Registrar alterações no campo
  alteracoes = "";
  constructor(){
    this.addParagraph(this.nome?.value);
    this.nome.valueChanges.subscribe((novoValor) => {
      this.addParagraph(novoValor);
    })
  }

  addParagraph(html: string){
    this.alteracoes = "<p>" + html + "</p>" + this.alteracoes;
  }


}
