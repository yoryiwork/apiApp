import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FabricantesRoutingModule } from './fabricantes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    ConfirmarComponent,
    ListadoComponent,
    EditarComponent,
  ],
  imports: [
    CommonModule,
    FabricantesRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class FabricantesModule { }
