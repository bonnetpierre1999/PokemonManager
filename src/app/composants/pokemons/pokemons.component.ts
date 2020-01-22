import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons = [{
    id: 1,
    nom: 'Bulbizarre',
    categorie: 'graine',
    type1: 'Plante',
    type2: 'Poison',
    taille: 0.7,
    poids: 6.9,
  },

    {
      id: 2,
      nom: 'Herbizarre',
      categorie: 'graine',
      type1: 'Plante',
      type2: 'Poison',
      taille: 1.0,
      poids: 13.0,
    },

    {
      id: 3,
      nom: 'Florizarre',
      categorie: 'graine',
      type1: 'Plante',
      type2: 'Poison',
      taille: 2.0,
      poids: 100.0,
    },

    {
      id: 4,
      nom: 'Salameche',
      categorie: 'lézard',
      type1: 'Feu',
      type2: '',
      taille: 0.6,
      poids: 8.5,
    },

    {
      id: 5,
      nom: 'Reptincel',
      categorie: 'flamme',
      type1: 'Feu',
      type2: '',
      taille: 1.1,
      poids: 19.0,
    },

    {
      id: 6,
      nom: 'Dracaufeu',
      categorie: 'flamme',
      type1: 'Feu',
      type2: '',
      taille: 1.7,
      poids: 90.5,
    }];


  constructor() {
  }


  ngOnInit() {
  }

}
