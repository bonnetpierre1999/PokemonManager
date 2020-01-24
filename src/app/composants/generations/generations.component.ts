import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  private tabGenerations = ['Toutes les générations', 'Génération I - 151 Pokemon', 'Génération II - 100 Pokemon', 'Génération III - 135 Pokemon', 'Génération IV - 107 Pokemon',
    // tslint:disable-next-line:max-line-length
                            'Génération V - 156 Pokemon', 'Génération VI - 72 Pokemon', 'Génération VII - 88 Pokemon', 'Génération VIII - 81 Pokemon'];

  constructor() { }

  ngOnInit() {
  }

}
