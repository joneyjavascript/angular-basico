import { Component, OnInit } from '@angular/core';
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


    this.listaGames = this.game.getGames();
  }

}
