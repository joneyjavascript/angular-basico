import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/class/user';
import { GameService } from 'src/app/services/game.service';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loadingProfile = true;
  userData: User;

  loadingPokemons = true;
  pokemons: any[] = [];

  loadingGames = true;
  listaGames: any[];

  constructor(
    private user: UserService,
    private pokeapi: PokeApiService,
    private game: GameService
  ) { }

  ngOnInit(): void {
    this.user.getUserProfile().subscribe((user) => {
      this.userData = user;
      this.loadingProfile = false;
    }, error => {
      this.loadingProfile = false;
    })

    this.pokeapi.getPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons;
      this.loadingPokemons = false;
    }, error => {
      console.error(error);
      this.loadingPokemons = false;
    })


    this.loadingGames = true;
    this.game.getGames().pipe(
      finalize(() => this.loadingGames = false)
    ).subscribe(games => {
      this.listaGames = games;
    }, error => {
      console.error(error);
    });
  }

}
