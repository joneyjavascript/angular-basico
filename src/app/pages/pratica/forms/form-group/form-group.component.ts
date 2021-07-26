import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  form: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({

      
      nome : new FormControl("", [ Validators.required ]),
      receber_email: new FormControl(false),
      email : new FormControl("", [ this.customEmailValidation ]),
      endereco : new FormGroup({
        rua: new FormControl("", []),
        numero: new FormControl("", []),
        bairro: new FormControl("", []),
        estado_sigla: new FormControl("", []),
        cidade: new FormControl("", [])
      }),

    })

    this.form.get("receber_email")?.valueChanges.subscribe((newValue:any) => {
      console.log(newValue);
      this.form.get("email")?.updateValueAndValidity();
    })
  }

  customEmailValidation(control: any){
    if(control.root?.get("receber_email")?.value) {
      return Validators.required(control);
    }

    return null;
  }

}
