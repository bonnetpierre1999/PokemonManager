import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  private tabGenerations = ['Génération I', 'Génération II', 'Génération III', 'Génération IV', 'Génération V',
                            'Génération VI', 'Génération VII', 'Génération VIII'];

  constructor() { }

  ngOnInit() {
  }

}
