import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [LayoutComponent, NavigationComponent,SidenavListComponent],
  exports: [LayoutComponent, NavigationComponent,SidenavListComponent,FormsModule,ReactiveFormsModule],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
