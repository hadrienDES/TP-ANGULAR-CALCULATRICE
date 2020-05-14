import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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
    historique : Array(),
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
    if(this.calculette.ecran && !this.calculette.valeurCachee)
      {
          this.calculette.ecran = ""
      }
    if(isNaN(valeur)) {

      if(!this.calculette.valeurCachee)
      {
        if(Array("+","*","-").includes(valeur))
        {
        this.calculette.valeurCachee = "0";
        }
        else
        {
        this.calculette.valeurCachee = "1";
        }
      }
        this.calculette.ecran = "";
    }
    else {
        this.calculette.ecran += valeur;
    }
    this.calculette.valeurCachee += valeur;
  }

  reset(){
    if(this.calculette.valeurCachee)
    {
      this.calculette.historique.unshift(this.calculette.valeurCachee + "=" + eval(this.calculette.valeurCachee));
    }
      this.calculette.ecran = this.calculette.valeurCachee = "";
  } 

  calcul(){  
    this.calculette.historique.unshift(this.calculette.valeurCachee + "=" + eval(this.calculette.valeurCachee));
    this.calculette.ecran = this.calculette.valeurCachee = eval(this.calculette.valeurCachee);
  }

}

//eval() javascript evalue l'équation