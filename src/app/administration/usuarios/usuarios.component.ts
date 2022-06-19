import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { UsuarioConsulta } from 'src/app/shared/models/usuarios.model';
import { UsuarioPHPService } from 'src/app/shared/services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UsuarioCapturaComponent } from './usuario-captura/usuario-captura.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  formBusqueda = new FormGroup({
    usuario: new FormControl(),
    estatus: new FormControl()
  });
  displayedColumns = ['usuario', 'contrasena', 'correo', 'estado', 'rol', 'admin'];
  dataSource = new MatTableDataSource<UsuarioConsulta>();
  isAdmin = true;
  constructor(
    private apiUsuarios: UsuarioPHPService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (!this.isAdmin) {
      this.router.navigate(["denied-permission"]);
    }
    this.sarch();

  }

  sarch() {
    var res = this.apiUsuarios.getProductos().subscribe((personas: any) => {
      this.dataSource = personas.data;
      // console.log(personas);
    });
  }
  onFormSubmit(): void {
    if (this.formBusqueda.valid) {
      var res = this.apiUsuarios.getProductosfiltro(this.formBusqueda.value).subscribe((personas: any) => {
        this.dataSource = personas.data;
        console.log(personas);
      });
    }
  }
  agregar() {
    this.dialog.open(UsuarioCapturaComponent, {
      width: '500px',
      disableClose: true
    }).afterClosed().subscribe(res => {
      this.sarch();
    });
  }
}
