import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Linea } from '../../Interfaces/linea.interface';

@Injectable({
  providedIn: 'root'
})
export class LineasService {

  api: string = 'https://192.168.10.2/lineas/';


  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get<Linea[]>( this.api );
  }

  agregar( x:Linea ): Observable<Linea>{
    return this.http.post<Linea>(this.api, x);
  }

  actualizar( x:Linea ): Observable<Linea>{
    return this.http.put<Linea>(this.api , x);
  }

  borrar( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.api }/${ id }`);
  }

}
