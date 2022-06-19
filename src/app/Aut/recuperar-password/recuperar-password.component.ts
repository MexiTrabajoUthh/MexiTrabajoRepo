import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    token: new FormControl()
  });

  constructor(
    private routeActiv: ActivatedRoute,
    private router: Router,
    private notify: NotificationService,
    private api: UsuarioPortalService
  ) { }

  ngOnInit(): void {
    this.routeActiv.queryParams.subscribe(params => {
      if (params.token) {
        // leer token de la url y borrarlo para cargarlo desde session
        sessionStorage.token = params.token;
        this.router.navigate(['/nuevopassword']);
      } else if (sessionStorage.token) {
        this.form.get('token')?.setValue(sessionStorage.token);
      } else {
        this.notify.showError('Algo salio mal... por favor de clic al enlace que se le envió por correo electrónico');
        this.router.navigate(['/']);
      }
    });
  }

  async change() {
    if (this.form.valid) {
      const res = await this.api.changePassword(this.form.value);
      if (res.result) {
        this.notify.showSuccess('Se ha establecido su nueva contraseña. Por favor ingrese sus nuevas credenciales para iniciar sesión');
        this.router.navigate(['/login'])
      } else {
        this.notify.showError(res.message);
      }
    }
  }
 
}
