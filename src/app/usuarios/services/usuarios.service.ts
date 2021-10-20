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

  getUsuarios() {
    return this.http.get<Usuario[]>( this.baseUrl );
  }

}
