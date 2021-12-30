import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoMovimiento } from 'src/app/Interfaces/tipoMovimiento.interface';
import { TiposMovimientosService } from '../../services/tipos-movimientos.service';
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
               private servicio: TiposMovimientosService ) { }

  ngOnInit(): void {
    this.servicio.get()
      .subscribe ( resp => {
        this.tipos = resp;
      })
  }

  tipo!: TipoMovimiento;
  tipos: TipoMovimiento[] = [];

  agregar(){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px'
    });
  }

  editar( x: TipoMovimiento ){
    const dialog = this.dialog.open( EditarComponent, {
      width: '250px',
      data: x
    });
  }

}
