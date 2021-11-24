import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Impuesto } from '../../Interfaces/impuestos.interface';

@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  apiImpuestos: string = 'https://192.168.10.2/impuestos/';

  constructor( private http: HttpClient ) { }

  getImpuestos() {
    return this.http.get<Impuesto[]>( this.apiImpuestos );
  }

  agregarImpuesto( i: Impuesto ): Observable<Impuesto>{
    return this.http.post<Impuesto>(this.apiImpuestos, i);
  }

  actualizarImpuesto( i: Impuesto ): Observable<Impuesto>{
    return this.http.put<Impuesto>(this.apiImpuestos , i);
  }

  borrarImpuesto( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.apiImpuestos }/${ id }`);
  }

}
