import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../classes/prodotto';
import { ProdottoService } from '../../services/prodotto-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ricerca-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './ricerca-prodotti.html',
  styleUrl: './ricerca-prodotti.css',
})
export class RicercaProdotti {
  
  prod?: number;
  nome?: string;
  supp?: number;
  cate?: number;
  quan?: string;
  

  constructor(private rottAttiva: ActivatedRoute,private service: ProdottoService){}
  
  ngOnInit(){
    this.rottAttiva.params.subscribe(async (risultato) =>{
      const codice = risultato['codice'];
      if(codice !==0){
        let prod : Prodotto | null = await this.service.dettaglio(codice);
        if(prod){
          this.prod= prod.productId
          this.nome= prod.productName
          this.supp = prod.supplierId
          this.cate= prod.categoryId
          this.quan= prod.quantityPerUnit
        }
      }
    
    });
  }

}
