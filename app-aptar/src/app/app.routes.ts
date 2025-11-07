import { Routes } from '@angular/router';
import { ElencaProdotti } from './components/elenca-prodotti/elenca-prodotti';
import { RicercaProdotti } from './components/ricerca-prodotti/ricerca-prodotti';

export const routes: Routes = [
     {
        path: "",
        redirectTo: "elenca",
        pathMatch: "full"
    },
    {
        path:'elenca',
        component: ElencaProdotti
    },
    {
        path:'dettaglio/:codice',
        component: RicercaProdotti
    }
];
