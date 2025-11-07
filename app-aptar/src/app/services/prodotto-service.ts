import { Injectable } from '@angular/core';
import { Prodotto } from '../classes/prodotto';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {

  async Lista(): Promise<Prodotto[]> {
    let risultato : Data = await(await fetch("https://northwind-api.miloudi.dev/v1/products?page=1&pageSize=100")).json();
    if(Array.isArray(risultato.data))
      return risultato.data;
    
    else
      console.log(risultato.data);

    return [];
  }

  // async dettaglio(varCodice: number): Promise<Prodotto | null> {
  //   let risultato : Data = await(await fetch(`https://northwind-api.miloudi.dev/v1/products/${varCodice}`)).json();
    
  // }
}
