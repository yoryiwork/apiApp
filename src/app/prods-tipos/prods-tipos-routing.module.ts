import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { RouterModule, Routes } from '@angular/router';

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
export class ProdsTiposRoutingModule { }