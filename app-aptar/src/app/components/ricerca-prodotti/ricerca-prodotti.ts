import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ricerca-prodotti',
  imports: [],
  templateUrl: './ricerca-prodotti.html',
  styleUrl: './ricerca-prodotti.css',
})
export class RicercaProdotti {

  constructor(private rottAttiva: ActivatedRoute){}
  
  ngOnInit(){
    this.rottAttiva.params.subscribe((risultato) =>{
      const codice = risultato['codice'];
      console.log(codice);
    });
  }

}
