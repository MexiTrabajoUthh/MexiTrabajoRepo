import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { getCache } from 'src/app/shared/extensions/cache';
import { IdentityService } from 'src/app/shared/services/identity.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';

@Component({
    selector: 'app-segundopaso',
    templateUrl: './segundopaso.component.html',
    styleUrls: ['./segundopaso.component.css']
})
export class SegundoPasoComponent implements OnInit {
    form: FormGroup;
    constructor(
        private identity: IdentityService,
        public router: Router,
        private apiUser: UsuarioPortalService,
        private notifyService: NotificationService
    ) {
        this.form = new FormGroup({
            codigo: new FormControl(undefined, { validators: [Validators.required] }),
            email: new FormControl(null, [Validators.required, Validators.email]),
        });
    }
    ngOnInit(): void {

    }

    async enviar() {
        var user = getCache('usr');
        var codigo: number;
        codigo = this.form.value.codigo;
        this.form.patchValue({
            email: user.email,
            codigo: codigo
        });
        var result = await this.apiUser.validateSecondStep(this.form.value);
        if (result.result) {
            if (result.data !== undefined && result.data !== null) {
                this.identity.setSecondStep('true');
                window.location.href = '/perfil';
                this.notifyService.showSuccess("Bienvenido");
            }
            else {
                this.notifyService.showError("El código es invalido, por favor intente de nuevo");
                this.router.navigate(['/login']);
            }
        }
        else {
            this.notifyService.showError(result.message);
        }
    }
}