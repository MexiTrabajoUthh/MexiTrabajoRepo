import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiProfileService } from 'src/app/api/api-profile';
import { IdentityService } from 'src/app/shared/services/identity.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });
  form: FormGroup;
  error: string;
  processing: boolean;
  return = '';
  logo: string;

  constructor(
    private api: UsuarioPortalService,
    private ApiProfileService: ApiProfileService,
    private identityService: IdentityService,
    public router: Router,
    private notifyService: NotificationService
  ) {
    this.error = "";
    this.processing = false;
    this.logo = "";
    this.form = new FormGroup({
      email: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  async login() {
    this.error = "";
    if (this.formLogin.valid) {

      this.processing = true;
      // this.loadingService.show();
      let res = await this.api.login(this.formLogin.value);
      // if (res != undefined) {
      //   this.setToken(res.data, this.formLogin.value.remember);
      // }
      // const res = await this.apiService.login(this.formLogin.value);
      if (res.result) {
        this.identityService.setToken(res.data, this.formLogin.value.remember);
        this.identityService.setSecondStep('false');
        // this.identityService.setToken("validator",false);
        //   // obtener los datos del usuario y redireccionar
        // this.notifyService.showSuccess("Bienvenido");
        this.form.patchValue({
          email: this.formLogin.value.userName
        });
        var result = await this.api.sendCodeTwoStep(this.form.value);
        this.getUser();
      }
      else {
        this.error = res.message;
        this.notifyService.showError(this.error);
      }
    }
  }
  private async getUser() {


    const res = await this.ApiProfileService.get();
    if (res.result) {
      this.identityService.login(res.data);
      // this.loadingService.hide();
      // this.processing = false;
      // this.userIdle.watch();
      this.router.navigate(['/validation']);
      // this.identityService.notify().subscribe(x => {
      // this.router.navigate(['/'])
      //   .then(() => {
      //     window.location.reload();
      //   });
      // })
    } else {
      this.error = 'No se ha podido obtener el usuario';
      this.notifyService.showError(this.error);
      this.processing = false;
      // this.loadingService.hide();
    }
  }

}
