import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY,  } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
import * as _rollupMoment from 'moment';
import { Moment } from 'moment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiExperienciaLaboral } from 'src/app/api/api-experiencialaboral.serrvice';
import { ApiDetalleService } from 'src/app/api/api-detalle.service';
import { getCache } from 'src/app/shared/extensions/cache';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { validateBasis } from '@angular/flex-layout';
interface Sex{
  id: number;
  viewValue: string;
}
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-registrodetalle',
  templateUrl: './registrodetalle.component.html',
  styleUrls: ['./registrodetalle.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class RegistrodetalleComponent implements OnInit {
  dateNac = new FormControl(moment());
  dateFun = new FormControl(moment());
  // dateMaxDate = new Date();
  // dateMinDate = new Date('12.12.1940');
  sexo: Sex[] =[
    {id: 1, viewValue: 'Masculino'},
    {id: 2, viewValue: 'Femenino'}
  ];
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateNac.value;
    ctrlValue.year(normalizedYear.year());
    this.dateNac.setValue(ctrlValue);
  }
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateNac.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateNac.setValue(ctrlValue);
    datepicker.close();
  }
  chosenYearHandlerF(normalizedYear: Moment) {
    const ctrlValue = this.dateFun.value;
    ctrlValue.year(normalizedYear.year());
    this.dateFun.setValue(ctrlValue);
  }
  chosenMonthHandlerF(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateFun.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateFun.setValue(ctrlValue);
    datepicker.close();
  }
  onChangeS(value: number){
    this.form.value.intSexo = value;
  }
  form: FormGroup;
  iduser: number;
  tipoUser: number;
  constructor(
    private dialogRef: MatDialogRef<RegistrodetalleComponent>,
    private api: ApiExperienciaLaboral,
    private apiDetalle: ApiDetalleService,
    private notify: NotificationService
  ) {
    this.form = new FormGroup({
      IntIdDetalle: new FormControl(0),
      IntIdUser: new FormControl(0),
      varNombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      varAPatern: new FormControl('', [Validators.required, Validators.minLength(3)]),
      varAMatern: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dtFechaNac: new FormControl(undefined, Validators.required),
      dtFechaFund: new FormControl(undefined),
      varCurp: new FormControl('', [Validators.required, Validators.minLength(18)]),
      varRfc: new FormControl('', [Validators.required, Validators.minLength(13)]),
      intgenero: new FormControl(this.sexo[0].id),
      varCp: new FormControl('43000', [Validators.required, Validators.min(10000)]),
      varEstado: new FormControl('', [Validators.required, Validators.minLength(3)]),
      varMunicipio: new FormControl('', [Validators.required, Validators.minLength(5)]),
      varCalle: new FormControl('', [Validators.required, Validators.minLength(5)]),
      varColonia: new FormControl('', [Validators.required, Validators.minLength(5)]),
      varReferencia: new FormControl('', [Validators.required, Validators.minLength(5)]),
      varNoint: new FormControl('', Validators.required),
      varNoExterior: new FormControl('', [Validators.required, Validators.minLength(1)]),
      varNoTelefono: new FormControl('', [Validators.required, Validators.min(999999999)]),
      varNoTelfR1: new FormControl('', [Validators.required, Validators.min(999999999)]),
      varNoTelfR2: new FormControl('', [Validators.required, Validators.min(999999999)]),
      varRazonSocial: new FormControl(''),
      intStatus: new FormControl(1),
    });
    this.iduser = 0;
    this.tipoUser =0;
  }

  ngOnInit(): void {
    var user = getCache('usr');
    this.iduser = user.id;
    this.tipoUser = user.intIdTipoUsuario;
    this.getData();
    console.log('tipo de usuario', this.tipoUser)
  }

  async getData() {
    var res = await this.apiDetalle.getDetalle(this.iduser);
    if(res.result)
    {
      console.log(res);      
    }
  }

   async GuardarDetalle() {
    this.form.get('IntIdUser')?.setValue(this.iduser);
    this.form.get('varCp')?.setValue(this.form.value.varCp.toString());
    this.form.get('varNoTelefono')?.setValue(this.form.value.varNoTelefono.toString());
    this.form.get('varNoTelfR1')?.setValue(this.form.value.varNoTelfR1.toString());
    this.form.get('varNoTelfR2')?.setValue(this.form.value.varNoTelfR2.toString());
    if(this.tipoUser == 4){
      this.form.get('varCurp')?.setValue('indefinidosndlknsldknlñksdnlñknsd');
      this.form.get('varAPatern')?.setValue('indefinido');
      this.form.get('varAMatern')?.setValue('indefinido');
      this.form.get('varNoTelfR1')?.setValue('1000000000');
      this.form.get('varNoTelfR2')?.setValue('1000000000');
      this.form.get('dtFechaFund')?.setValue(this.dateFun.value._d);
      this.form.get('dtFechaNac')?.setValue(this.dateFun.value._d);
    }
    if(this.tipoUser == 2 || 3){
      if(this.form.value.varRfc == ''){
        this.form.get('varRfc')?.setValue(null);
      }
    }  
      if(this.dateNac != undefined){
        this.form.get('dtFechaNac')?.setValue(this.dateNac.value._d);
        this.form.get('dtFechaFund')?.setValue(this.dateNac.value._d);
      }    
      
    
    if (this.form.valid) {
      var res = await this.apiDetalle.createDetalleUser(this.form.value);
      if(res.result)
      {
        this.notify.showSuccess("Detalle Registrado");
        
        console.log(this.form.value);
        this.cancelar();
      }
    }
  }
  cancelar() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
