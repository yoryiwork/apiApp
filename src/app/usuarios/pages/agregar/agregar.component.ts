import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../Interfaces/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { switchMap, delay } from 'rxjs/operators';
// import moment from 'moment';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  usuario: Usuario = {
    DocumentoIdentidad : '',
    Nombres : '',
    Telefono : '',
    Correo : '',
    Ciudad : '',
    // FechaRegistro : new Date()
    

  };

  color: string = 'accent';
  
  // usuariox!: Usuario;

  constructor( private usuariosService: UsuariosService,
                private router: Router,
                private snackBar: MatSnackBar,
                private activatedRoute: ActivatedRoute
                
                ,private dialogRef :MatDialogRef< AgregarComponent >,
                @Inject(MAT_DIALOG_DATA) public data: Usuario,
                private dialog: MatDialog) { }

  
  ngOnInit(): void {

    // if( !this.router.url.includes( 'editar' ) ) {
    //   return;
    // }
    // console.log( this.data.IdUsuario );

    // this.activatedRoute.params
    // .pipe(
    //   switchMap( ({id}) => this.usuariosService.getUsuarioPorId( id ) )
    // )
    // .subscribe( usuario => this.usuario = usuario )
    if (this.data) {
      this.usuario = this.data;
      console.log(this.data.FechaRegistro)
    }
    
  }

  guardar(){
    if (this.data) {
      console.log(this.usuario.UltimaModificacion)
      this.usuariosService  .actualizarUsuario( this.usuario )
        .subscribe( usuario => this.mostrarSnakbar( 'Registro actualizado' ));
    } else {
      this.usuariosService.agregarUsuario( this.usuario )
        .subscribe( usuario => {
          this.router.navigate(['/usuarios/listado']);
          this.mostrarSnakbar(' Fabricante eliminado! ')
        })
    }
    // window.location.reload();
  }

  // borrarUsuario(){
  //   const dialog = this.dialog.open( ConfirmarComponent, {
  //     width: '250px',
  //     data: this.usuario
  //   } );

  //   dialog.afterClosed().subscribe(
  //     ( result ) => {
  //       if ( result ) {
  //         this.usuariosService.borrarUsuario( this.usuario.IdUsuario! )
  //           .subscribe( resp => {
  //             this.router.navigate(['/usuarios/listado']);
  //           });
  //       }
  //     }
  // }

  borrarUsuario() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.usuario
    } );

    dialog.afterClosed().subscribe(
      ( result ) => {
        if ( result ) {
          this.usuariosService.borrarUsuario( this.usuario.IdUsuario! )
            .subscribe( resp => {
              this.router.navigate(['/usuarios']);
              this.mostrarSnakbar(' Registro eliminado ')
              window.location.reload();
            });
        }
      }
    )

  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

}
