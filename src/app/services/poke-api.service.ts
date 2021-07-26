import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons():Observable<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon").pipe(
      map((response:any) => response.results)
    )
  }
}

