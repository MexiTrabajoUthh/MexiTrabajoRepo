import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Cuestions {
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-registrodetalleempleado',
  templateUrl: './registropregunta.component.html',
  styleUrls: ['./registropregunta.component.css']
})
export class RegistrodetalleempleadoComponent implements OnInit {
  cuestions: Cuestions [] = [
    {id: 1, viewValue: '¿Cómo se llamaba tu primer mascota?'},
    {id: 2, viewValue: '¿Cúal es tu comida favorita?'},
    {id: 3, viewValue: '¿Equipo de futból favorito?'},
    {id: 4, viewValue: '¿Película preferida?'},
    {id: 5, viewValue: '¿animal favorito?'}
  ];
  form: FormGroup;
  constructor(
    private router: Router,
    

  ) { 
    
      this.form = new FormGroup({
        varEmail: new FormControl(''),
        intIdPregunta: new FormControl(this.cuestions[0].id),
        varRespuesta: new FormControl(''),
      })
  }
  onChange(value: number){
    this.form.value.intIdPregunta = value;
  }
  ngOnInit(): void {
  }
  Error400() {
    this.router.navigate(["Error400"]);
  }
}
