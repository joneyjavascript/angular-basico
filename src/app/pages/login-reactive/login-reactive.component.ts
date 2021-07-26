import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  loading: boolean = false;

  form: FormGroup;
  get login(){ return this.form && this.form.get("login") }
  get password(){ return this.form && this.form.get("password") }
  
  constructor(
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl("", [ 
        Validators.required, 
        Validators.minLength(3) 
      ]),
      password: new FormControl("", [ 
        Validators.required, 
        Validators.minLength(3), 
        Validators.pattern(/[0-9]/) 
      ])
    });
  }

  createSession(){
    if(!this.form.valid) {
      alert("Formulário inválido!");
      return;
    }

    if(!this.login || !this.password){
      return;
    }

    this.loading = true;
    this.user.createSession(this.login.value, this.password.value).subscribe((dados: any) => {
      this.loading = false;
      localStorage.setItem("token", dados.token);
      this.router.navigateByUrl("/profile");
    }, error => {
      this.loading = false;
      if(error && error.errorMessage){
        alert(error.errorMessage);
      } else {
        alert("Erro inesperado.");
      }
    });
  }

}
