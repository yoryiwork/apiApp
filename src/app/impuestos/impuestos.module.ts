import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImpuestosRoutingModule } from './impuestos-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    ConfirmarComponent,
    EditarComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImpuestosRoutingModule,
    MaterialModule,
  ]
})
export class ImpuestosModule { }