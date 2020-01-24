export class Pokemon {
  // tslint:disable:variable-name
  id: number;
  generation: number;
  nom: string;
  taille: number;
  poids: number;
  type: Array<string>;
  categorie: string;


  constructor(id: number, generation: number, nom: string, taille: number, poids: number, type: Array<string>, categorie: string) {
    this.id = id;
    this.generation = generation;
    this.nom = nom;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.categorie = categorie;
  }

}
