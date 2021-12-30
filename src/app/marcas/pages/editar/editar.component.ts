import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MarcasService } from '../../services/marcas.service';
import { Marca } from '../../../Interfaces/marca.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Marca,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private servicio: MarcasService,
              private router: Router ) { }

  ngOnInit(): void { this.objeto = this.data }

  editando: boolean = false;
  color: string = 'accent';

  objeto: Marca = {
    Descrip: '',
    Usuario: '',
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  editar(){
    this.servicio.actualizar( this.objeto )
        .subscribe( resp =>  {
          this.mostrarSnakbar( ' Marca actualizada! ' );
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
          this.servicio.borrar( this.objeto.Marca! )
            .subscribe( resp => {
              this.router.navigate(['/marcas']);
              this.mostrarSnakbar( ' Marca eliminada! ' )
              window.location.reload();
            });
        }
      }
    )
  }

}