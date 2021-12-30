import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TipoProducto } from '../../../Interfaces/prods_tipos.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ProdsTiposService } from '../../services/prods-tipos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TipoProducto,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private servicio: ProdsTiposService,
              private router: Router ) { }

  ngOnInit(): void { this.objeto = this.data }

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

  editar(){
    this.servicio.actualizar( this.objeto )
        .subscribe( resp =>  {
          this.mostrarSnakbar( ' Tipo de producto actualizado! ' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.objeto
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.servicio.borrar( this.objeto.id_consec_sucursal! )
            .subscribe( resp => {
              this.router.navigate(['/tiposProductos']);
              this.mostrarSnakbar( ' Tipo de producto eliminado! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}
