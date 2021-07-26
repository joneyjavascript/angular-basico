import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(){
    return [
      { nome: "Super Mario", ano: 1990 },
      { nome: "Donkey Kon", ano: 1994 },
    ]
  }

}
