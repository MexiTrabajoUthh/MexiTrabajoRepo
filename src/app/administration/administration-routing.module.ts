import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuzonComponent } from '../perfil/mi-perfil/buzon/buzon.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
    {
        path: 'usuarios', component: UsuariosComponent, data: {
            title: 'Usuarios',
            breadcrumb: [
                {
                    label: 'Home',
                    url: 'home'
                },
                {
                    label: 'Usuarios',
                    url: ''
                }
            ]
        },
    }
    // { path: 'nosotros', component: NosotrosComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'registro', component: RegistroComponent },
    // { path: 'registroempresa', component: RegistroEmpresaComponent},
    // { path: 'registrodetalleempleado', component: RegistrodetalleempleadoComponent},
    // { path: 'empresas', component: EmpresasComponent},
    // { path: 'personas', component: PersonasComponent},
    // { path: 'menuregistro', component: MenuregistroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }