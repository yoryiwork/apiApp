import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { MarcasRoutingModule } from './marcas-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListadoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class MarcasModule { }
