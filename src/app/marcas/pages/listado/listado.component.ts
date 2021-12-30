import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Marca } from '../../../Interfaces/marca.interface';
import { MarcasService } from '../../services/marcas.service';
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
               private servicio: MarcasService ) { }

  ngOnInit(): void {
    this.servicio.get()
      .subscribe ( resp => {
        this.objetos = resp;
      })
  }

  objeto!: Marca;
  objetos: Marca[] = [];

  agregar(){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px'
    });
  }

  editar( x: Marca ){
    const dialog = this.dialog.open( EditarComponent, {
      width: '250px',
      data: x
    });
  }

}