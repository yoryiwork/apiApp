import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Linea } from 'src/app/Interfaces/linea.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { LineasService } from '../../services/lineas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Linea,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private servicio: LineasService,
              private router: Router ) { }

  ngOnInit(): void { this.linea = this.data }

  editando: boolean = false;
  color: string = 'accent';

  linea: Linea = {
    linea: '',
    descrip: '',
    usuario: '',
    clasificacion: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  editar(){
    this.servicio.actualizar( this.linea )
        .subscribe( resp =>  {
          this.mostrarSnakbar( ' Linea actualizada! ' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.linea
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.servicio.borrar( this.linea.linea! )
            .subscribe( resp => {
              this.router.navigate(['/lineas']);
              this.mostrarSnakbar( ' Linea eliminada! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}
