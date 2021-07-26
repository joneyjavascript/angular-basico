import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  form: FormGroup;
  get enderecos(): FormArray{ return (this.form.get("enderecos") as FormArray) }


  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nome : new FormControl("", [ Validators.required ]),
      receber_email: new FormControl(false),
      email : new FormControl("", [ this.customEmailValidation ]),
      enderecos : new FormArray([]),
    });

    this.form.get("receber_email")?.valueChanges.subscribe(() => {
      this.form.get("email")?.updateValueAndValidity();
    })

  }

  customEmailValidation(control: any){
    if(control.root?.get("receber_email")?.value) {
      return Validators.required(control);
    }

    return null;
  }

  adicionarEndereco(){
    const endereco = new FormGroup({
      rua: new FormControl("", []),
      numero: new FormControl("", []),
      bairro: new FormControl("", []),
      estado_sigla: new FormControl("", []),
      cidade: new FormControl("", [])
    });

    this.enderecos.push(endereco);
  }

  removerEndereco(index: number){
    this.enderecos.removeAt(index);
  }

}
