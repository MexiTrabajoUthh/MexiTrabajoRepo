import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiOfertasLaborales } from 'src/app/api/api-ofertaslaborales.services';
import { getCache } from 'src/app/shared/extensions/cache';
import { NotificationService } from 'src/app/shared/services/notification.service';
interface Tipo {
  id: number,
  viewValue: string;
}
@Component({
  selector: 'app-ofertas-laborales-captura',
  templateUrl: './ofertas-laborales-captura.component.html',
  styleUrls: ['./ofertas-laborales-captura.component.css']
})
export class OfertasLaboralesCapturaComponent implements OnInit {
tipo : Tipo []=[ 
  {id: 1, viewValue: 'Oficio' },
  {id: 2, viewValue: 'Profesional' },
];
  form: FormGroup;
  iduser: number;
  constructor(
    private dialogRef: MatDialogRef<OfertasLaboralesCapturaComponent>,
    private api: ApiOfertasLaborales,
    private notify: NotificationService
  ) {
    this.form = new FormGroup({
      intIdOfertaLaboral: new FormControl(0),
      intIdEmpresa: new FormControl(0),
      varPuesto: new FormControl('', Validators.required),
      varDescripcion: new FormControl('', Validators.required),
      varUbicacion: new FormControl('', Validators.required),
      decSalario: new FormControl(0, Validators.required),
      status: new FormControl(0),
      intTurno: new FormControl('', Validators.required),
      varRequisitos: new FormControl('', Validators.required),
      intTipoTrabajo: new FormControl()
    });

    this.iduser = 0;
  }

  ngOnInit(): void {
    var user = getCache('usr');
    this.iduser = user.id;
    this.getData();
  }
  onChange(value: number){
    this.form.value.intTipoTrabajo = value;
  }
  async getData() {
    var res = await this.api.getOfertasLaborales(this.iduser);
    if(res.result)
    {
      console.log(res);      
    }
  }

  async agregar() {


    this.form.get('intIdEmpresa')?.setValue(this.iduser);
    if (this.form.valid) {
      console.log(this.form.value);
      var res = await this.api.createOfertaLaboral(this.form.value);
      if(res.result)
      {
        this.notify.showSuccess("Registro Exitoso");
        this.cancelar();
      }
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

}
