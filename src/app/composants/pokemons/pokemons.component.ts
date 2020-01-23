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
    },

    {
      id: 7,
      nom: 'Bulbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 0.7,
      poids: 6.9,
    },

    {
      id: 8,
      nom: 'Herbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 1.0,
      poids: 13.0,
    },

    {
      id: 9,
      nom: 'Florizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 2.0,
      poids: 100.0,
    },

    {
      id: 10,
      nom: 'Salameche',
      categorie: 'lézard',
      type: ['Feu'],
      taille: 0.6,
      poids: 8.5,
    },

    {
      id: 11,
      nom: 'Reptincel',
      categorie: 'flamme',
      type: ['Feu'],
      taille: 1.1,
      poids: 19.0,
    },

    {
      id: 12,
      nom: 'Dracaufeu',
      categorie: 'flamme',
      type: ['Feu', 'Vol'],
      taille: 1.7,
      poids: 90.5,
    },

    {
      id: 13,
      nom: 'Bulbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 0.7,
      poids: 6.9,
    },

    {
      id: 14,
      nom: 'Herbizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 1.0,
      poids: 13.0,
    },

    {
      id: 15,
      nom: 'Florizarre',
      categorie: 'graine',
      type: ['Plante', 'Poison'],
      taille: 2.0,
      poids: 100.0,
    },

    {
      id: 16,
      nom: 'Salameche',
      categorie: 'lézard',
      type: ['Feu'],
      taille: 0.6,
      poids: 8.5,
    },

    {
      id: 17,
      nom: 'Reptincel',
      categorie: 'flamme',
      type: ['Feu'],
      taille: 1.1,
      poids: 19.0,
    },

    {
      id: 18,
      nom: 'Dracaufeu',
      categorie: 'flamme',
      type: ['Feu', 'Vol'],
      taille: 1.7,
      poids: 90.5,
    }];

  p;

  constructor() {
  }


  ngOnInit() {
  }

}
