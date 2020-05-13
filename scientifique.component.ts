import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scientifique.component.html',
  styleUrls: ['./scientifique.component.css']
})
export class ScientifiqueComponent implements OnInit {

  title = "Detail sur ";

  personne = {
    nom : "Einstein",
    prenom : "Albert",
    decouverte : "E=MC²",
    description : "The scientifique"
  }

  calculette = {
    signeActif : "",
    valeurCachee : "",
    ecran: "",
    num1 : "1",
    num2 : "2",
    num3 : "3",
    num4 : "4",
    num5 : "5",
    num6 : "6",
    num7 : "7",
    num8 : "8",
    num9 : "9",
    num0 : "0",
    signeEgal : "=",
    signePlus : "+",
    signeMoins : "-",
    signeMultiplier : "*",
    signeDiviser : "/",
    signeReset : "C"
  }

  constructor() { }

  ngOnInit(): void {
  }

  ecriture(valeur){
    if(isNaN(valeur)) {
      this.calculette.signeActif = valeur;
      this.calculette.valeurCachee = (this.calculette.ecran)?this.calculette.ecran:"0";
      this.calculette.ecran = "";
    } else {
      this.calculette.ecran += valeur;
    }
  }

  reset(){
    this.calculette.ecran = "";
    this.calculette.valeurCachee = "";
    this.calculette.signeActif = "";
  } 

  calcul(){
    this.calculette.ecran = eval(this.calculette.valeurCachee + this.calculette.signeActif + this.calculette.ecran);
  }

}

//eval() javascript evalue l'équation