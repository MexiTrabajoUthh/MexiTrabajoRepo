import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioPHPService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-usuario-captura',
  templateUrl: './usuario-captura.component.html',
  styleUrls: ['./usuario-captura.component.css']
})
export class UsuarioCapturaComponent implements OnInit {
  title: string = "Agregar Usuario";
  form = new FormGroup({
    usuario: new FormControl('', Validators.required)
    , password: new FormControl('', Validators.required)
    , email: new FormControl('', [Validators.email, Validators.required])
    , rol: new FormControl([], Validators.required)
  });

  constructor(
    private dialogRef: MatDialogRef<UsuarioCapturaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private api: UsuarioPHPService
  ) { }

  ngOnInit(): void {
  }
  cancelar() {
    this.dialogRef.close();
  }
  save() {
    if (this.form.valid) {
      var res = this.api.createUsuarioGET(this.form.value).subscribe((usuario: any) => {
        if (usuario.code == 200) {
          console.log(usuario);
          this.dialogRef.close();
        }
      });
    }
  };

}
