import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Impuesto } from 'src/app/Interfaces/impuestos.interface';
import { ImpuestosService } from '../../services/impuestos.service';
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

  constructor(public dialog: MatDialog,
    private impuestosService: ImpuestosService) { }

  ngOnInit(): void {
    this.impuestosService.getImpuestos()
      .subscribe(resp => {
        this.impuestos = resp;
      })
  }

  impuesto!: Impuesto;
  impuestos: Impuesto[] = [];

  agregarImpuesto() {
    const dialog = this.dialog.open(AgregarComponent, {
      width: '250px'
    });
  }

  editarImpuesto(i: Impuesto) {
    const dialog = this.dialog.open(EditarComponent, {
      width: '250px',
      data: i
    });
  }

}
