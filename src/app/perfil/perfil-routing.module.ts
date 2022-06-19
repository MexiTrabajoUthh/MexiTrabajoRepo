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
import { ChatComponent } from './mi-perfil/chat/chat.component';
import { BuzonComponent } from './mi-perfil/buzon/buzon.component';


const routes: Routes = [
  {
    path: 'perfil', component: MiPerfilComponent, data: {
      title: 'Perfil',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Mi Perfil',
          url: ''
        }
      ]
    }
    
  },
  {
    path: 'PreguntaSecreta', component: RegistrodetalleempleadoComponent, data: {
      title: 'PreguntaSecreta',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Mi Perfi',
          url: 'perfil'
        },
        {
        label: 'Pregunta Secreta',
        url: ''
        }
      ]
    }
    
  },
  {
    path: 'chat', component: ChatComponent, data: {
      title: 'Chat',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Chat',
          url: ''
        }
      ]
    }
    
  },
  {
    path: 'buzon', component: BuzonComponent, data: {
      title: 'Buzón',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Buzón',
          url: ''
        }
      ]
    }
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
