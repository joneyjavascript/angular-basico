import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router
  ) { }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  isLogged(){
    return localStorage.getItem("token") !== null;
  }

  createSession(login: string, password: string){
    return new Observable(observer => {
      setTimeout(() => {
        if(login === "usuario" && password === "123" ) {
          observer.next({
            token: "123456789"
          });
          observer.complete();
        } else {
          observer.error({ errorMessage: "Login ou Senha inválida!" });
        }
      }, 3000);
    });
  }

  getUserProfile(): Observable<User>{
    return new Observable(observer => {
      setTimeout(() => {
        
        observer.next({
          nome: "Joney JS",
          idade: 30,
          email: "contato@fakeemail.com.br"
        } as User);
        observer.complete();
      
      }, 2000);
    })
  }

}
