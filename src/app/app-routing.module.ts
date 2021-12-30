import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const rutas: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
  },
  {
    path: 'fabricantes',
    loadChildren: () => import('./fabricantes/fabricantes.module').then(m => m.FabricantesModule)
  },
  {
    path: 'clavesSat',
    loadChildren: () => import('./claves-sat/claves-sat.module').then(m => m.ClavesSATModule)
  },
  {
    path: 'impuestos',
    loadChildren: () => import('./impuestos/impuestos.module').then(m => m.ImpuestosModule)
  },
  {
    path: 'lineas',
    loadChildren: () => import('./lineas/lineas.module').then(m => m.LineasModule)
  },
  {
    path: 'tiposMovimientos',
    loadChildren: () => import('./tipos-movimientos/tipos-movimientos.module').then(m => m.TiposMovimientosModule)
  },
  {
    path: 'marcas',
    loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule)
  },
  {
    path: 'tiposProductos',
    loadChildren: () => import('./prods-tipos/prods-tipos.module').then(m => m.ProdsTiposModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  } 
]

@NgModule({
  imports: [
    RouterModule.forRoot( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
