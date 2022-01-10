import { Injectable } from '@angular/core';
import { Fabricante } from '../../Interfaces/fabricante.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {


  private api: string = environment.baseURL + '/fabricantes/';
  // apiFabricantes: string = 'https://192.168.10.2/fabricantes/';

  constructor( private http: HttpClient ) { }

  getFabricantes() {
    return this.http.get<Fabricante[]>( this.api );
  }

  agregarFabricante( fabricante:Fabricante ): Observable<Fabricante>{
    return this.http.post<Fabricante>(this.api, fabricante);
  }

  actualizarFabricante( fabricante:Fabricante ): Observable<Fabricante>{
    return this.http.put<Fabricante>(this.api , fabricante);
  }

  borrarFabricante( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.api }/${ id }`);
  }

}
