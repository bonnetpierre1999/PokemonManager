import {Injectable} from '@angular/core';
import {Pokemon} from '../pokemon';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  pokemons = [{
    id: 1,
    generation: 1,
    nom: 'Bulbizarre',
    categorie: 'graine',
    type: ['Plante', 'Poison'],
    taille: 0.7,
    poids: 6.9,
  },

    {
      id: 2,
      generation: 1,
      nom: 'Herbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 1.0,
      poids: 13.0,
    }];

  constructor(private monHttp: HttpClient) {
  }

  public getPokemon(): Array<Pokemon> {
    return this.pokemons;
  }

  cpt(): number {
    return this.pokemons.length;
  }

  public getPokemonFiltrer(nomPoke): Array<Pokemon> {
    const regex = new RegExp(nomPoke, 'gi');
    return this.pokemons.filter(p => p.nom.match(regex));
  }

  appelAUneAPIGeneration() {
    return this.monHttp.get('https://pokeapi.co/api/v2/generation/');
  }

}
