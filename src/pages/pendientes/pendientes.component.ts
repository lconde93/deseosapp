import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/_services/lista-deseos.service';
import { NavController } from 'ionic-angular'
import { AgregarComponent } from '../../pages/agregar/agregar.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'    
})
export class PendientesComponent implements OnInit {    
    constructor(
        private _listaDesosService: ListaDeseosService,
        private _navController: NavController
    ) { }

    ngOnInit(): void { }

    irAgregar():void {
        this._navController.push(AgregarComponent);
    }
}
