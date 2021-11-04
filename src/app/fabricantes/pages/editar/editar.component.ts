import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Fabricante } from 'src/app/Interfaces/fabricante.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { FabricantesService } from '../../services/fabricantes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Fabricante,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fabricantesService: FabricantesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fabricante = this.data;
  }

  color: string = 'accent';

  fabricante: Fabricante = {
    nombre: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  editar(){
    this.fabricantesService.actualizarFabricante( this.fabricante )
        .subscribe( fabricante =>  {
          this.mostrarSnakbar( 'Registro actualizado' );
          window.location.reload();
        });
  }

  borrar(){
    const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: this.fabricante
    });
    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.fabricantesService.borrarFabricante( this.fabricante.fabricante! )
            .subscribe( resp => {
              this.router.navigate(['/fabricantes']);
              this.mostrarSnakbar( 'Registro eliminado' )
              window.location.reload();
            });
        }
      }
    )
  }


}
