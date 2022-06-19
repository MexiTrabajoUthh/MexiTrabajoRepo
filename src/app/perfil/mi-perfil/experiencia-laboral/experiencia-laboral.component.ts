import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import * as _rollupMoment from 'moment';
import { Moment } from 'moment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiExperienciaLaboral } from 'src/app/api/api-experiencialaboral.serrvice';
import { getCache } from 'src/app/shared/extensions/cache';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
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
export class ExperienciaLaboralComponent implements OnInit {
  dateini = new FormControl(moment());
  datefin = new FormControl(moment());
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateini.value;
    ctrlValue.year(normalizedYear.year());
    this.dateini.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateini.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateini.setValue(ctrlValue);
    datepicker.close();
  }
  chosenYearHandlerfin(normalizedYear: Moment) {
    const ctrlValue = this.datefin.value;
    ctrlValue.year(normalizedYear.year());
    this.datefin.setValue(ctrlValue);
  }

  chosenMonthHandlerfin(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.datefin.value;
    ctrlValue.month(normalizedMonth.month());
    this.datefin.setValue(ctrlValue);
    datepicker.close();
  }
  form: FormGroup;
  iduser: number;
  constructor(
    private dialogRef: MatDialogRef<ExperienciaLaboralComponent>,
    private api: ApiExperienciaLaboral
  ) {
    this.form = new FormGroup({
      intIdExperienciaLabora: new FormControl(0),
      intIdEmpleado: new FormControl(0),
      varCargo: new FormControl('', Validators.required),
      varLugar: new FormControl('', Validators.required),
      varDescripcion: new FormControl('', Validators.required),
      dtFechaIngreso: new FormControl(undefined, Validators.required),
      dtFechaEgreso: new FormControl(undefined),
      btAunTrabajoAqui: new FormControl(false)
    });

    this.iduser = 0;
  }

  ngOnInit(): void {
    var user = getCache('usr');
    this.iduser = user.id;
    this.getData();
  }

  async getData() {
    var res = await this.api.getExperienciaLaboral(this.iduser);
    if(res.result)
    {
      console.log(res);      
    }
  }

  async agregar() {

    if (this.dateini != undefined) {
      this.form.get('dtFechaIngreso')?.setValue(this.dateini.value._d);
    }
    if (this.datefin != undefined) {
      this.form.get('dtFechaEgreso')?.setValue(this.datefin.value._d);
    }
    this.form.get('intIdEmpleado')?.setValue(this.iduser);
    if (this.form.valid) {
      console.log(this.form.value);
      var res = await this.api.createExperienciaLaboral(this.form.value);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
