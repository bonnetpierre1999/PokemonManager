import {Component, OnInit} from '@angular/core';
import {AffichageService} from '../../services/affichage.service';
import {Pokemon} from '../../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  p;
  pokemons: Array<Pokemon>;
  cpteur: number;

  envoyer(nom) {
    this.pokemons =  this.pokemonsService.getPokemonFiltrer(nom);
  }

  initTableau() {
    this.pokemons = this.pokemonsService.getPokemon();
    this.cpteur = this.pokemonsService.cpt();
  }

  constructor(private pokemonsService: AffichageService) {
  }

  givePoke() {
    this.pokemons = this.pokemonsService.getPokemon();
  }

  ngOnInit(): void {
    this.givePoke();
  }

  reinitRecherche() {
    this.pokemons = this.pokemonsService.getPokemon();
  }
}
