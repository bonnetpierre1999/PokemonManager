import { Component, OnInit } from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  private tabGenerations;

  constructor( private service: AffichageService) {
}

  ngOnInit() {
  this.service.appelAUneAPIGeneration().subscribe(
    donnees => this.tabGenerations = donnees
  );
  }

}
