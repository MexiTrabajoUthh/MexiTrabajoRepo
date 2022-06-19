import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';
import { RecuperacionPreguntasecretaComponent } from '../recuperacion-preguntasecreta/recuperacion-preguntasecreta.component'; 
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-obtener-recuperacion',
  templateUrl: './obtener-recuperacion.component.html',
  styleUrls: ['./obtener-recuperacion.component.css']
})
export class ObtenerRecuperacionComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  constructor(
    private dialog: MatDialog,
    private notify: NotificationService,
    private router: Router,
    private api: UsuarioPortalService
  ) { }

  ngOnInit(): void {
  }

  async request() {
    if (this.form.valid) {
      // this.processing = true;
      // this.loadingService.show();


      const res = await this.api.passwordChangeRequest(this.form.value);
      if (res.result) {
        this.notify.showSuccess('Se enviarán las instrucciones para recuperar la contraseña al Correo Electrónico proporcionado.' +
          ' Verifique su Bandeja de Entrada o su Bandeja de SPAM');
        this.router.navigate(['/']);
        //     this.notify.success('Se enviarán las instrucciones para recuperar la contraseña al Correo Electrónico proporcionado.' +
        //     ' Verifique su Bandeja de Entrada o su Bandeja de SPAM', {
        //       timeout: 10000,
        //       closeOnClick: false,
        //       buttons: [
        //         {
        //           text: 'Aceptar', action: (t) => {
        //             this.notify.snotifyService.remove(t.id);
        //             this.router.navigate(['/']);
        //           }, bold: true
        //         },
        //       ]
        //     });
        //     timer(10000).subscribe(() => this.router.navigate(['/']));
      } else {
        // this.notify.showError(res.message);
      }
      // this.processing = false;
      // this.loadingService.hide();
    }

  }
  RecuperarPorPreguntaSecreta() {
    this.dialog.open(RecuperacionPreguntasecretaComponent, {
      width: '500px',
      //disableClose: true
    });
  }
}
