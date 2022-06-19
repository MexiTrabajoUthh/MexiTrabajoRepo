import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';
interface TipoPersona{
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {
  tipo: TipoPersona []=[
    {id: 3, viewValue: 'Persona Fisica'},
    {id: 4, viewValue: 'Persona Moral'}
  ];
  formRegistro = new FormGroup({
    id: new FormControl(1),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    roles: new FormControl(["Empresa"]),
    intIdTipoUsuario: new FormControl(this.tipo[0].id)
  });
  error: string;
  processing: boolean;
  return = '';
  logo: string;

  constructor(
    private api: UsuarioPortalService,
    private notifyService: NotificationService,
    private router: Router
  ) {
    this.error = "";
    this.processing = false;
    this.logo = "";
  }

  ngOnInit(): void {
  }

  async Registrar() {
    this.error = "";
    if (this.formRegistro.valid) {
      this.processing = true;
      let res = await this.api.registrar(this.formRegistro.value);
      if(res != undefined)
      {
        if(res.result){
          this.notifyService.showSuccess("RegistroExitoso");
          this.router.navigate([this.return]);
        }
        else
        {
          this.notifyService.showError(res.message)
        }
      }
    }
  }
  onChange(value: number){
    this.formRegistro.value.intIdTipoUsuario = value;
  }

}
