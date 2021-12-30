import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProducto } from '../../Interfaces/prods_tipos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdsTiposService {

  api: string = '';

  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get<TipoProducto[]>( this.api );
  }

  agregar( x:TipoProducto ): Observable<TipoProducto>{
    return this.http.post<TipoProducto>(this.api, x);
  }

  actualizar( x:TipoProducto ): Observable<TipoProducto>{
    return this.http.put<TipoProducto>(this.api , x);
  }

  borrar( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.api }/${ id }`);
  }
}