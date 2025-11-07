import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prodotto } from '../../classes/prodotto';
import { ProdottoService } from '../../services/prodotto-service';

@Component({
  selector: 'app-elenca-prodotti',
  imports: [CommonModule],
  templateUrl: './elenca-prodotti.html',
  styleUrl: './elenca-prodotti.css',
})
export class ElencaProdotti {
    elenco: Prodotto[] = new Array();
    
    constructor(private service: ProdottoService ){
      }
    ngOnInit(){
    this.service.Lista().then(ris =>{
      this.elenco = ris;
    });
  }


}
