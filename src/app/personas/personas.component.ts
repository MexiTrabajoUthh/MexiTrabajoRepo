import { getLocaleDateTimeFormat } from '@angular/common';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api-servicios.service';
import { getCache } from '../shared/extensions/cache';
import { ServiceModel, ServiceResult } from '../shared/models/servicios.models';
interface Options {
  id: number;
  viewValue: string;
}
interface Sex{
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit {
  options: Options[] = [
    {id: 0, viewValue: 'Todos'},
    {id: 1, viewValue: 'Oficio'},
    {id: 2, viewValue: 'Profesion'},
  ];
  sexo: Sex[] =[
    {id: 0, viewValue: 'Todos'},
    {id: 1, viewValue: 'Masculino'},
    {id: 2, viewValue: 'Femenino'}
  ]
  form = new FormGroup({
    varNombreTrabahjo: new FormControl(''),
    intTipoTrabajo: new FormControl(this.options[0].id),
    intSexo: new FormControl(this.sexo[0].id) 
  });
  mostrarServicios: boolean;
  listServices: ServiceResult[]=[];
  constructor(
    private api: ApiService
  ) { 
    this.mostrarServicios = true;
  }
 
 

   
  ngOnInit(): void {
    
    
    this.getServicios();
    var user = getCache('usr');
    if(user == undefined){
      this.mostrarServicios = true;
    }
    else{
      if (user.intIdTipoUsuario ==2){
        this.mostrarServicios = true;
      }
      else{
        this.mostrarServicios = false;
      }
    }
    
  }
  onChange(value: number){
    this.form.value.intTipoServicio = value;
  }
  onChangeS(value: number){
    this.form.value.intSexo = value;
  }
  mostrarDetalle(servicio: ServiceResult){
    servicio.mostrar = !servicio.mostrar;
  }
  async getServicios() {
    var servicios = await this.api.getServiciosBusqueda(this.form.value.varNombreTrabahjo ,   this.form.value.intTipoTrabajo, this.form.value.intSexo);
    if (servicios.result) {
      this.listServices = servicios.data;
    }
  }

  consultar()
  {
    this.getServicios();
  }
}
