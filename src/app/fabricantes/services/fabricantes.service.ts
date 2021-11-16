import { Injectable } from '@angular/core';
import { Fabricante } from '../../Interfaces/fabricante.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  apiFabricantes: string = 'https://192.168.10.2/fabricantes/';
  // apiFabricantes: string = 'https://192.168.10.150:44348/fabricantes';

  constructor( private http: HttpClient ) { }

  getFabricantes() {
    return this.http.get<Fabricante[]>( this.apiFabricantes );
  }

  agregarFabricante( fabricante:Fabricante ): Observable<Fabricante>{
    return this.http.post<Fabricante>(this.apiFabricantes, fabricante);
  }

  actualizarFabricante( fabricante:Fabricante ): Observable<Fabricante>{
    return this.http.put<Fabricante>(this.apiFabricantes , fabricante);
  }

  borrarFabricante( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.apiFabricantes }/${ id }`);
  }

}
