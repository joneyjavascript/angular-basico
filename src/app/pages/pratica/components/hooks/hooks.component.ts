import { Component } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent{

  componenteVivo = false;

  dados = "teste";

  alterarDados(){
    this.dados = this.getRandomArrayItem(["João", "Maria", "José", "Pedro", "Luisa"], this.dados);
  }

  getRandomArrayItem(items:any[], currentValue:string="") {
    const currentIndex:number = items.indexOf(currentValue);
    let randomIndex:number;
    do {
      randomIndex = Math.floor(Math.random() * items?.length);
    } while(randomIndex == currentIndex && items?.length > 1);

    const randomItem:any = items[randomIndex];
    return randomItem;
  }
}



