import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  Vision = `Servir a la comunidad laboral por medio de herramientas que estén en constante mejora,
  brindar estabilidad y seguridad a los usuarios, mejorando sus oportunidades de crecimiento laboral 
  a través de una propuesta que no cambia, promover la visión entusiasta orientada al objetivo general
  basado en el trabajo decente y la mejora de condiciones de vida para los usuarios.`;
  
  Objetivo = `Promover la cultura del empleo, trabajo decente, promoviendo así 
  el fin de la pobreza en el mundo, y generando una vida digna para la población.`;

  Mision = `Ser una organización que promueva la cultura del empleo, trabajo decente, y que promueva
  el fin de la pobreza, que sirva como puente para generar una vida digna para la población `;
  constructor() { }

  ngOnInit(): void {
  }

}
