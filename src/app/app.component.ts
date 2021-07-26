import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(
    private user: UserService
  ){

  }

  logout(){
    this.user.logout();
  }

  isLogged(){
    return this.user.isLogged();
  }
}
