import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TiposMovimientosService } from '../../services/tipos-movimientos.service';
import { TipoMovimiento } from '../../../Interfaces/tipoMovimiento.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TipoMovimiento,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private servicio: TiposMovimientosService,
              private router: Router ) { }

  ngOnInit(): void { this.tipo = this.data }

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

  editar(){
    this.servicio.actualizar( this.tipo )
        .subscribe( resp =>  {
          this.mostrarSnakbar( ' Tipo de movimiento actualizado! ' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.tipo
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.servicio.borrar( this.tipo.id! )
            .subscribe( resp => {
              this.router.navigate(['/lineas']);
              this.mostrarSnakbar( ' Tipo de movimiento eliminado! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}
