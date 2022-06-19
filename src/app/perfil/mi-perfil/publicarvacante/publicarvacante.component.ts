import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ApiService } from 'src/app/api/api-servicios.service';
import { getCache } from 'src/app/shared/extensions/cache';

interface Options {
  id: number;
  viewValue: string;
}
@Component({
  
  selector: 'app-publicarvacante',
  templateUrl: './publicarvacante.component.html',
  styleUrls: ['./publicarvacante.component.css'],

})
export class PublicarvacanteComponent implements OnInit {
  options: Options[] = [
    {id: 1, viewValue: 'Oficio'},
    {id: 2, viewValue: 'Profesion'},
  ];
  

  
  form: FormGroup; 
  iduser: number;
  constructor(
    private dialogRef: MatDialogRef<PublicarvacanteComponent>,
    private api: ApiService,
    private notify: NotificationService
  ) {
    this.form = new FormGroup({
      intIdServicio: new FormControl(0),
      intIdUser: new FormControl(0),
      varNombreTrabahjo: new FormControl('', Validators.required),
      varDescripcion: new FormControl('', Validators.required),
      varHabilidades: new FormControl('', Validators.required),
      varHorario: new FormControl('', Validators.required),
      decSalario: new FormControl(0, Validators.required),
      intStatus: new FormControl(1),
      intTipoTrabajo: new FormControl(this.options[0].id),
      intgenero: new FormControl(1)
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
    var res = await this.api.GetServicios(this.iduser);
    if(res.result)
    {
      console.log(res);      
    }
  }

  async agregar() {
    this.form.get('intIdUser')?.setValue(this.iduser);
    if (this.form.valid) {
      console.log(this.form.value);
      var res = await this.api.createService(this.form.value);
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
