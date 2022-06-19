import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationRoutingModule } from './administration/administration-routing.module';
import { DeniedPermissionComponent } from './errors/denied-permission/denied-permission.component';
import { InternalServerComponent } from './errors/internal-server/internal-server.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
// import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { PerfilRoutingModule } from './perfil/perfil-routing.module';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: 'Error500', component: InternalServerComponent },
  { path: 'Error400', component: DeniedPermissionComponent },
  { path: 'denied-permission', component: DeniedPermissionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MenuRoutingModule, AdministrationRoutingModule, PerfilRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
