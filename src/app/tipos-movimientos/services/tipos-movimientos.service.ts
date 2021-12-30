import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMovimiento } from '../../Interfaces/tipoMovimiento.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposMovimientosService {

  api: string = 'https://192.168.10.2/tiposMovimientos/';
  
  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get<TipoMovimiento[]>( this.api );
  }

  agregar( x:TipoMovimiento ): Observable<TipoMovimiento>{
    return this.http.post<TipoMovimiento>(this.api, x);
  }

  actualizar( x:TipoMovimiento ): Observable<TipoMovimiento>{
    return this.http.put<TipoMovimiento>(this.api , x);
  }

  borrar( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.api }/${ id }`);
  }
}
