import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GuardGuard } from './guards/guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'registro', component: RegistroUsuarioComponent, canActivate: [GuardGuard], children: [] },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },   //redireccion a otra ruta
  { path: '**', component: PageNotFoundComponent },                   //pag 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
