import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClavesSatService } from '../../services/claves-sat.service';
import { claveSat } from '../../../Interfaces/claveSAT.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: claveSat,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private clavesSatService: ClavesSatService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.claveSat = this.data;
  }

  color: string = 'accent';

  claveSat: claveSat = {
    descripcion: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  editar(){
    this.clavesSatService.actualizarClaveSAT( this.claveSat )
        .subscribe( clave =>  {
          this.mostrarSnakbar( ' Clave del SAT actualizada! ' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.claveSat
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.clavesSatService.borrarClaveSAT( this.claveSat.codigo! )
            .subscribe( resp => {
              this.router.navigate(['/clavesSat']);
              this.mostrarSnakbar( ' Clave del SAT eliminada! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}
