import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioCapturaComponent } from './usuarios/usuario-captura/usuario-captura.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogConfig } from '@angular/material/dialog';
@NgModule({
    declarations: [UsuariosComponent, UsuarioCapturaComponent],
    exports: [UsuariosComponent, UsuarioCapturaComponent],
    imports: [
        SharedModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
       UsuarioCapturaComponent
    ]
})
export class AdministrationModule { }
