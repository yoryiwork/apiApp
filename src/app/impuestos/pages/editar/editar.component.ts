import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Impuesto } from '../../../Interfaces/impuestos.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ImpuestosService } from '../../services/impuestos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Impuesto,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private impuestosService: ImpuestosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.impuesto = this.data;
  }

  color: string = 'accent';

  impuesto: Impuesto = {
    descrip: '',
    usuario: '',
    tasa: '',
    tasaCuota: '',
    tipoImpuesto: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  editar(){
    this.impuestosService.actualizarImpuesto( this.impuesto )
        .subscribe( impuesto =>  {
          this.mostrarSnakbar( ' Impuesto actualizado! ' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.impuesto
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.impuestosService.borrarImpuesto( this.impuesto.impuesto! )
            .subscribe( resp => {
              this.router.navigate(['/impuestos']);
              this.mostrarSnakbar( ' Impuesto eliminado! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}
