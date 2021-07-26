import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  clicou(){
    console.log("Clicou");
  }

  clicouNoCampo(){
    console.log("Clicou no Campo");
  }
  
  saiuDoCampo(){
    console.log("SaiuDoCampo");
  }

  pressionouUmaTecla($event: any){
    console.log("Pressionou uma tecla: " + $event.key);
  }

}
