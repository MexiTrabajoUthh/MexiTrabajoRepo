import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PersonasComponent } from './personas/personas.component';
import { LoginComponent } from './Aut/login/login.component';
import { RegistroComponent } from './Aut/registro/registro.component';
import { RegistroEmpresaComponent } from './Aut/registro-empresa/registro-empresa.component';
import { RegistrodetalleempleadoComponent } from './Aut/registrodetalleempleado/registropregunta.componet';

import { EmpresasComponent } from './empresas/empresas.component';


import { MenuregistroComponent } from './Aut/menuregistro/menuregistro.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsuariosComponent } from './administration/usuarios/usuarios.component';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { UsuarioCapturaComponent } from './administration/usuarios/usuario-captura/usuario-captura.component';
import { AdministrationModule } from './administration/administration.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { InternalServerComponent } from './errors/internal-server/internal-server.component';
import { DeniedPermissionComponent } from './errors/denied-permission/denied-permission.component';
import { MiPerfilComponent } from './perfil/mi-perfil/mi-perfil.component';
import { ExperienciaLaboralComponent } from './perfil/mi-perfil/experiencia-laboral/experiencia-laboral.component';
import { DateAdapter } from '@angular/material/core';
import { ChatComponent } from './perfil/mi-perfil/chat/chat.component';
import { RecuperarPasswordComponent } from './Aut/recuperar-password/recuperar-password.component';
import { ObtenerRecuperacionComponent } from './Aut/obtener-recuperacion/obtener-recuperacion.component';
import { BuzonComponent } from './perfil/mi-perfil/buzon/buzon.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { MaterialModule } from './shared/material.module';
import { ExperienciaLaboralCapturaComponent } from './perfil/mi-perfil/experiencia-laboral/experiencia-laboral-captura/experiencia-laboral-captura.component';
import { ExperienciaDetalleComponent } from './perfil/mi-perfil/experiencia-laboral/experiencia-detalle/experiencia-detalle.component';
import { OfertasLaboralesComponent } from './perfil/mi-perfil/ofertas-laborales/ofertas-laborales.component';
import { OfertasLaboralesCapturaComponent } from './perfil/mi-perfil/ofertas-laborales/ofertas-laborales-captura/ofertas-laborales-captura.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioDetalleComponent } from './perfil/mi-perfil/usuario-detalle/usuario-detalle.component';
import { RegistrodetalleComponent } from './perfil/mi-perfil/registrodetalle/registrodetalle.component';
import { PublicarvacanteComponent } from './perfil/mi-perfil/publicarvacante/publicarvacante.component';
import { VacantedetalleComponent } from './perfil/mi-perfil/publicarvacante/vacantedetalle/vacantedetalle.component';
import { SelectTipotrabajoComponent } from './controls/select-tipotrabajo/select-tipotrabajo.component';
import { RecuperacionPreguntasecretaComponent } from './Aut/recuperacion-preguntasecreta/recuperacion-preguntasecreta.component';
import { SegundoPasoComponent } from './Aut/login/segundopaso/segundopaso.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    PersonasComponent,
    LoginComponent,
    RegistroComponent,
    RegistroEmpresaComponent,
    RegistrodetalleempleadoComponent,
    EmpresasComponent,
    MenuregistroComponent,
    AdministrationComponent,
    NotFoundComponent,
    InternalServerComponent,
    DeniedPermissionComponent,
    MiPerfilComponent,
    ExperienciaLaboralComponent,
    ChatComponent,
    RecuperarPasswordComponent,
    ObtenerRecuperacionComponent,
    BuzonComponent,
    AyudaComponent,
    ExperienciaLaboralCapturaComponent,
    ExperienciaDetalleComponent,
    OfertasLaboralesComponent,
    OfertasLaboralesCapturaComponent,
    CarouselComponent,
    FooterComponent,
    UsuarioDetalleComponent,
    RegistrodetalleComponent,
    PublicarvacanteComponent,
    VacantedetalleComponent,
    SelectTipotrabajoComponent,
    RecuperacionPreguntasecretaComponent,
    SegundoPasoComponent
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    FlexLayoutModule,
    NgDynamicBreadcrumbModule,
    AdministrationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
