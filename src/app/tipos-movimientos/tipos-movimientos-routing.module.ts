import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';

const rutas: Routes = [
  {
    path: '',
    component: ListadoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class TiposMovimientosRoutingModule { }
