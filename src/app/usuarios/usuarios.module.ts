import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    ListadoComponent,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UsuariosRoutingModule,
  ]
})
export class UsuariosModule { }
