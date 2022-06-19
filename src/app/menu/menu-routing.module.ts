import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { LoginComponent } from '../Aut/login/login.component';
import { RegistroComponent } from '../Aut/registro/registro.component';
import { RegistroEmpresaComponent } from '../Aut/registro-empresa/registro-empresa.component';
import { RegistrodetalleempleadoComponent } from '../Aut/registrodetalleempleado/registropregunta.componet';
import { EmpresasComponent } from '../empresas/empresas.component';
import { PersonasComponent } from '../personas/personas.component';
import { MenuregistroComponent } from '../Aut/menuregistro/menuregistro.component';
import { MiPerfilComponent } from '../perfil/mi-perfil/mi-perfil.component';
import { RecuperarPasswordComponent } from '../Aut/recuperar-password/recuperar-password.component';
import { ObtenerRecuperacionComponent } from '../Aut/obtener-recuperacion/obtener-recuperacion.component';
import { AyudaComponent } from '../ayuda/ayuda.component';
import { SegundoPasoComponent } from '../Aut/login/segundopaso/segundopaso.component';

const routes: Routes = [
  {
    path: 'nosotros', component: NosotrosComponent, data: {
      title: 'Nosotros',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Nosotros',
          url: ''
        }
      ]
    },
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'registro', component: RegistroComponent, data: {
      title: 'Registro',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Registro',
          url: ''
        }
      ]
    },
  },
  {
    path: 'registroempresa', component: RegistroEmpresaComponent, data: {
      title: 'Registro empresa',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Registro Empresa',
          url: ''
        }
      ]
    },
  },
  {
    path: 'validation',component: SegundoPasoComponent
  },
  {
    path: 'empresas', component: EmpresasComponent, data: {
      title: 'Empresas',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Empresas',
          url: ''
        }
      ]
    }

  },
  {
    path: 'personas', component: PersonasComponent, data: {
      title: 'Personas',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Personas',
          url: ''
        }
      ]
    }
  },
  {
    path: 'menuregistro', component: MenuregistroComponent, data: {
      title: 'Registro',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Registro',
          url: ''
        }
      ]
    },
  },
  {
    path: 'recuperar', component: ObtenerRecuperacionComponent, data: {
      title: 'Personas',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Recuperar Contraseña',
          url: ''
        }
      ]
    },
  },
  {
    path: 'nuevopassword', component: RecuperarPasswordComponent, data: {
      title: 'Personas',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Recuperar Contraseña',
          url: ''
        }
      ]
    },
  }
  ,
  {
    path: 'help', component: AyudaComponent, data: {
      title: 'Ayuda',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Ayuda',
          url: ''
        }
      ]
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
