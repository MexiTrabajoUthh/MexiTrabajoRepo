import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';

interface Cuestions {
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-recuperacion-preguntasecreta',
  templateUrl: './recuperacion-preguntasecreta.component.html',
  styleUrls: ['./recuperacion-preguntasecreta.component.css']
})
export class RecuperacionPreguntasecretaComponent implements OnInit {
  cuestions: Cuestions [] = [
    {id: 1, viewValue: '¿Cómo se llamaba tu primer mascota?'},
    {id: 2, viewValue: '¿Cúal es tu comida favorita?'},
    {id: 3, viewValue: '¿Equipo de futból favorito?'},
    {id: 4, viewValue: '¿Película preferida?'},
    {id: 5, viewValue: '¿animal favorito?'}
  ];
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RecuperacionPreguntasecretaComponent>,
    private notify: NotificationService
  ) { 
    this.form = new FormGroup({
      varEmail: new FormControl(''),
      intIdPregunta: new FormControl(this.cuestions[0].id),
      varRespuesta: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  Recuperar(){}

  onChange(value: number){
    this.form.value.intIdPregunta = value;
  }
  cancelar() {
    this.dialogRef.close();
  }
}
