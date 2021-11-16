import { Injectable } from '@angular/core';
import { claveSat } from '../../Interfaces/claveSAT.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClavesSatService {

  apiClavesSAT: string = 'https://192.168.10.2/clavesSat/';

  constructor( private http: HttpClient ) { }

  getClavesSAT() {
    return this.http.get<claveSat[]>( this.apiClavesSAT );
  }

  agregarClaveSAT( clave:claveSat ): Observable<claveSat>{
    return this.http.post<claveSat>(this.apiClavesSAT, clave);
  }

  actualizarClaveSAT( clave:claveSat ): Observable<claveSat>{
    return this.http.put<claveSat>(this.apiClavesSAT , clave);
  }

  borrarClaveSAT( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.apiClavesSAT }/${ id }`);
  }
  
}
