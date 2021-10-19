import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const rutas: Routes = [
  {
    path: '',
    children: [
      { path:'listado',
        component: ListadoComponent
      },
      {
        path:'agregar',
        component: AgregarComponent
      }
      ,
      {
        path:'editar/:id',
        component: AgregarComponent
      },
      {
        path:':id',
        component: UsuarioComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports:[
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
