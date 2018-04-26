import { Injectable } from '@angular/core';
import { ListaItem } from '../_clases/listas';


@Injectable()
export class ListaDeseosService {
    listas: ListaItem[] = []
        
    constructor() {
        console.log('servicio incializado');
        this.listas.push( new ListaItem('Compra supermercado'));
        this.listas.push( new ListaItem('Juego que deseo'));
        this.listas.push( new ListaItem('Cosas de la Universidad'));

    }
}

