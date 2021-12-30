import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProdsTiposService } from '../../services/prods-tipos.service';
import { TipoProducto } from '../../../Interfaces/prods_tipos.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private servicio: ProdsTiposService,
              private router: Router ) { }

  ngOnInit(): void {}

  editando: boolean = false;
  color: string = 'accent';

  objeto: TipoProducto = {
    TIPO: '',
    correo: '',
    correo2: '',
    correo3: '',
    correo4: '',
    correo5: '',
    alias: '',
    sucursal: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.servicio.agregar( this.objeto )
      .subscribe( resp => {
        this.router.navigate(['tiposProductos']);
        this.mostrarSnakbar( ' Tipo de producto creado! ' )
      })
    window.location.reload();
  }

}
