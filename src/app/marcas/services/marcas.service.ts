import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../../Interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  api: string = 'https://192.168.10.2/marcas/';

  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get<Marca[]>( this.api );
  }

  agregar( x:Marca ): Observable<Marca>{
    return this.http.post<Marca>(this.api, x);
  }

  actualizar( x:Marca ): Observable<Marca>{
    return this.http.put<Marca>(this.api , x);
  }

  borrar( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.api }/${ id }`);
  }

}
