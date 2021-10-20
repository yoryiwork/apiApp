import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../../Interfaces/usuario.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuariosService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
      .subscribe( resp => {
          this.usuarios = resp;
      })
  }

}
