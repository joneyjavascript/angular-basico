import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: boolean = false;

  model: any = {};

  constructor(
    private router: Router,
    private user: UserService
  ) { }

  createSession(){
    this.loading = true;
    this.user.createSession(this.model.login, this.model.password).subscribe((dados: any) => {
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
