import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { UsuarioConsulta } from 'src/app/shared/models/usuarios.model';
import { UsuarioPHPService } from 'src/app/shared/services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// import { UsuarioCapturaComponent } from './usuario-captura/usuario-captura.component';
import { Router } from '@angular/router';
import { ApiBuzonService } from 'src/app/api/api-buzon.service';
import { getCache } from 'src/app/shared/extensions/cache';
import { BuzonResult } from 'src/app/shared/models/buzon.model';
@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.css']
})
export class BuzonComponent implements OnInit {
  isAdmin: boolean = false;
  formBusqueda = new FormGroup({
    usuario: new FormControl()
  });
  displayedColumns = ['id', 'administrador', 'empleado', 'dtFechaBuzon'];
  dataSource = new MatTableDataSource<BuzonResult>();
  constructor(
    private api: ApiBuzonService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.sarch();

  }

  async sarch() {
    var user = getCache('usr');
    this.isAdmin = user.intIdTipoUsuario == 1;
    var res = user.intIdTipoUsuario == 1 ? await this.api.getBuzonAdmin(user.id, this.formBusqueda.value.usuario) : await this.api.getBuzonUsuario(user.id);
    if (res.result) {
      this.dataSource = res.data;
    }

  }
  async onFormSubmit() {
    if (this.formBusqueda.valid) {
      var user = getCache('usr');

      var res = user.intIdTipoUsuario == 1 ? await this.api.getBuzonAdmin(user.id, this.formBusqueda.value.usuario) : await this.api.getBuzonUsuario(user.id);
      if (res.result) {
        this.dataSource = res.data;
      }

    }
  }
  agregar() {
    // this.dialog.open(UsuarioCapturaComponent, {
    //   width: '500px',
    //   disableClose: true
    // }).afterClosed().subscribe(res => {
    //   this.sarch();
    // });
  }
}
