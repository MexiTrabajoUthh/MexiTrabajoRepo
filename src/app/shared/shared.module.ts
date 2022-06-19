import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UsuarioPortalService } from './services/usuarioportal.service';
import { AjaxService } from './services/ajax.service';
import { NotificationService } from './services/notification.service';
import { UsuarioPHPService } from './services/usuarios.service';
import { IdentityService } from './services/identity.service';
import { ApiProfileService } from '../api/api-profile';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    
  
    
  ],
  exports: [
    CommonModule,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatNativeDateModule 
  ],
  providers: [
    UsuarioPortalService,
    AjaxService,
    NotificationService,
    UsuarioPHPService,
    IdentityService,
    ApiProfileService
    
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
