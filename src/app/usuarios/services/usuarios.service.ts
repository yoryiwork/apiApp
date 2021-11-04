import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../Interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string = environment.baseURL;

  constructor( private http: HttpClient ) { }

  getUsuarioPorId( id: string ): Observable<Usuario>{
    return this.http.get<Usuario>(`${ this.baseUrl }/${id}`);
  }

  getUsuarios() {
    return this.http.get<Usuario[]>( this.baseUrl );
  }

  agregarUsuario( usuario:Usuario ): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  actualizarUsuario( usuario:Usuario ): Observable<Usuario>{
    return this.http.put<Usuario>(this.baseUrl , usuario);
  }

  borrarUsuario( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/${ id }`);
  }

}
