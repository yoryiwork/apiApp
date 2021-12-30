import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TiposMovimientosService } from '../../services/tipos-movimientos.service';
import { TipoMovimiento } from '../../../Interfaces/tipoMovimiento.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private servicio: TiposMovimientosService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  editando: boolean = false;
  color: string = 'accent';

  tipo: TipoMovimiento = {
    id: '',
    tipo: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.servicio.agregar( this.tipo )
      .subscribe( resp => {
        this.router.navigate(['tiposMovimientos']);
        this.mostrarSnakbar( ' Tipo de movimiento creado! ' )
      })
    window.location.reload();
  }

}
