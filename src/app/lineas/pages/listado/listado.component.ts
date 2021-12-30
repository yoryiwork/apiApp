import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LineasService } from '../../services/lineas.service';
import { Linea } from '../../../Interfaces/linea.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  table {
    width: 100%;
    overflow-x: auto;
  }`
  ]
})
export class ListadoComponent implements OnInit {

  constructor( public dialog: MatDialog,
               private servicio: LineasService ) { }

  ngOnInit(): void {
    this.servicio.get()
      .subscribe ( resp => {
        this.lineas = resp;
      })
  }

  linea!: Linea;
  lineas: Linea[] = [];

  agregar(){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px'
    });
  }

  editar( x: Linea ){
    const dialog = this.dialog.open( EditarComponent, {
      width: '250px',
      data: x
    });
  }

}