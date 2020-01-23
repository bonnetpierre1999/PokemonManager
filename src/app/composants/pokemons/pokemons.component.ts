import {Component, OnInit} from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  p;
  pokemons;

  constructor(private pokemonsService: AffichageService) {
  }

  givePoke() {
    this.pokemons = this.pokemonsService.getPokemon();
  }

  ngOnInit(): void {
    this.givePoke();
  }

}
