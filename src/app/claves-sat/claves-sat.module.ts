import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClavesSatRoutingModule } from './claves-sat-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListadoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    ClavesSatRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class ClavesSATModule { }