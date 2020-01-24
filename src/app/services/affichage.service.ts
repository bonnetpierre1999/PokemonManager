import {Injectable} from '@angular/core';
import {Pokemon} from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  pokemons = [{
    id: 1,
    nom: 'Bulbizarre',
    categorie: 'graine',
    type: ['Plante', 'Poison'],
    taille: 0.7,
    poids: 6.9,
  },

    {
      id: 2,
      nom: 'Herbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 1.0,
      poids: 13.0,
    },

    {
      id: 3,
      nom: 'Florizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 2.0,
      poids: 100.0,
    },

    {
      id: 4,
      nom: 'Salameche',
      categorie: 'lézard',
      type: ['Feu'],
      taille: 0.6,
      poids: 8.5,
    },

    {
      id: 5,
      nom: 'Reptincel',
      categorie: 'flamme',
      type: ['Feu'],
      taille: 1.1,
      poids: 19.0,
    },

    {
      id: 6,
      nom: 'Dracaufeu',
      categorie: 'flamme',
      type: ['Feu', 'Vol'],
      taille: 1.7,
      poids: 90.5,
    }];

  constructor() {
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

}
