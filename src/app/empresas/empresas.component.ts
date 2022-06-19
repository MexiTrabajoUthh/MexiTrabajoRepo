import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiOfertasLaborales } from '../api/api-ofertaslaborales.services';
import { getCache } from '../shared/extensions/cache';
import { OfertasLaboralesResult } from '../shared/models/ofertaslaborales.models';

interface Options {
  id: number;
  viewValue: string;
}

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  options: Options[] = [
    {id: 0, viewValue: 'Todos'},
    {id: 1, viewValue: 'Oficio'},
    {id: 2, viewValue: 'Profesion'},
  ];
  form = new FormGroup({
    varCargo:  new FormControl('', [Validators.max(15)]),
    intTipoTrabajo: new FormControl(this.options[0].id)
  });
  mostrartrabajos: boolean;
  listOfertasLaborales: OfertasLaboralesResult[] = [];
  constructor(
    private api: ApiOfertasLaborales
  ) {
    this.mostrartrabajos = true;
  }


  ngOnInit(): void {
    this.getOfertas();
    var user = getCache('usr');
    if (user == undefined) {
      this.mostrartrabajos = true;
    }
    else {
      if (user.intIdTipoUsuario == 2) {
        this.mostrartrabajos = true;
      }
      else {
        this.mostrartrabajos = false;
      }
    }
  }
  onChange(value: number){
    this.form.value.intTipoServicio = value;
  }
  mostrarDetalle(oferta: OfertasLaboralesResult) {
    oferta.mostrar = !oferta.mostrar;
  }

  async getOfertas() {
    var ofertas = await this.api.getOfertasLaboralesBusqueda(this.form.value.varCargo, this.form.value.intTipoTrabajo);
    if (ofertas.result) {
      this.listOfertasLaborales = ofertas.data;
    }
  }

  consultar()
  {
    this.getOfertas();
  }

}
