import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon;

  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


  constructor() { }

  ngOnInit() {
  }

}
