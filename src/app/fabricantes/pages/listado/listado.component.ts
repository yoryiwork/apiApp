import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Fabricante } from '../../../Interfaces/fabricante.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { FabricantesService } from '../../services/fabricantes.service';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  table {
  width: 100%;
  }`
  ]
})
export class ListadoComponent implements OnInit {

  constructor( public dialog: MatDialog,
               private fabricantesService: FabricantesService ) { }

  ngOnInit(): void {
    this.fabricantesService.getFabricantes()
      .subscribe ( resp => {
        this.fabricantes = resp;
      })
  }

  fabricante!: Fabricante;
  fabricantes: Fabricante[] = [];

  agregarFabricante(){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px'
    });
  }

  editarFabricante( f: Fabricante ){
    const dialog = this.dialog.open( EditarComponent, {
      width: '250px',
      data: f
    });
  }

}