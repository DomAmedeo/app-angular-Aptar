import { Injectable } from '@angular/core';
import { Prodotto } from '../classes/prodotto';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {

  async Lista(): Promise<Prodotto[]> {
    try{
      const risultato : Data = await(await fetch("https://northwind-api.miloudi.dev/v1/products?page=1&pageSize=100")).json();
      if(Array.isArray(risultato.data))
        return risultato.data
      else
        console.log(risultato.data);
    }catch(errore){
      console.log("ERRORE"+ errore)
    }
    return [];
  }

  async dettaglio(varCodice: number): Promise<Prodotto  | null> {
    try{
      const response = await fetch(`https://northwind-api.miloudi.dev/v1/products/${varCodice}`);
      if(!response.ok){
        return null;
      }
      const risultato : Prodotto = await response.json(); 
      console.log("risultato ricevuto ", risultato);
      return risultato
    }catch(errore){
      console.log("Errore" + errore);
    }  
    return null;    
  }
}
