import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Logeo, LogeoGuard } from './guard/Logeo/logeo.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate:[Logeo]
  
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./Paginas/Usuarios/usuarios/usuarios.module').then( m => m.UsuariosPageModule),
    canActivate:[LogeoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
