import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { claveSat } from '../../../Interfaces/claveSAT.interface';
import { ClavesSatService } from '../../services/claves-sat.service';
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
    private clavesSatService: ClavesSatService) { }

  ngOnInit(): void {
    this.clavesSatService.getClavesSAT()
      .subscribe(resp => {
        this.clavesSat = resp;
      })
  }

  claveSat!: claveSat;
  clavesSat: claveSat[] = [];

  agregarClaveSat() {
    const dialog = this.dialog.open(AgregarComponent, {
      width: '250px'
    });
  }

  editarClaveSat(c: claveSat) {
    const dialog = this.dialog.open(EditarComponent, {
      width: '250px',
      data: c
    });
  }
}