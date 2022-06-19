import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/shared/models/apartados.models';
import { OfertasLaborales } from 'src/app/shared/models/ofertaslaborales.models';

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.css']
})
export class OfertasLaboralesComponent implements OnInit {

  @Input() data = new OfertasLaborales();
  constructor() { }

  ngOnInit(): void {
  }

}
