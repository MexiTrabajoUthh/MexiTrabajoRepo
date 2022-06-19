import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro = new FormGroup({
    id: new FormControl(1),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    roles: new FormControl(["Empleado"]),
    intIdTipoUsuario: new FormControl(2)
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

}
