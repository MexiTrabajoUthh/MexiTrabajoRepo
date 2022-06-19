import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/shared/models/experiencialaboral.models';

@Component({
  selector: 'app-experiencia-detalle',
  templateUrl: './experiencia-detalle.component.html',
  styleUrls: ['./experiencia-detalle.component.css']
})
export class ExperienciaDetalleComponent implements OnInit {

  @Input() data = new ExperienciaLaboral();
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
