import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../class/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]>{
    return new Observable(observer => {
      const dadosFake: Game[] = [
        { nome: "Super Mario", ano: 1990 },
        { nome: "Donkey Kong Country", ano: 1994 },
        { nome: "Super Metroid", ano: 1992 },
      ];

      setTimeout(() => {
        observer.next(dadosFake);
        observer.complete();
      }, 2000);
    })
  }

}
