import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../../Interfaces/usuario.interface';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from '../agregar/agregar.component';

import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    table {
      width: 100%;
      overflow-x: auto;
    }`
  ]
})
export class ListadoComponent implements OnInit {
  usuario!: Usuario;
  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['IdUsuario','DocumentoIdentidad', 'Nombres', 'Telefono', 'Correo','Ciudad','FechaRegistro','UltimaModificacion','Editar'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // columnas: string[] = ['ID','DNI','Nombres','Borrar'];
  // @ViewChild(MatTable) tabla1: MatTable<Usuario> | undefined;

  agregarUsuario() {

    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px'
    } );

    // dialog.afterClosed().subscribe(
    //   ( result ) => {
    //     if ( result ) {
    //       this.heroesService.borrarHeroe( this.heroe.id! )
    //         .subscribe( resp => {
    //           this.router.navigate(['/heroes']);
    //         });
    //     }
    //   }
    // )

  }

  editarUsuario(u: Usuario){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '250px',
      data: u
    } );
  }

  constructor( private usuarioService: UsuariosService,
               public dialog: MatDialog) { }

  

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
      .subscribe( resp => {
          this.usuarios = resp;
      })
      console.log(this.usuario);
  }

}
