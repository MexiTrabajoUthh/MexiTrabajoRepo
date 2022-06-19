import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AjaxService } from "../shared/services/ajax.service";
import { OfertasLaborales } from "../shared/models/ofertaslaborales.models";

@Injectable({
    providedIn: 'root'
})
export class ApiOfertasLaborales {
    url = environment.api + '/OfertasLaborales/';
    constructor(private ajax: AjaxService) { }
    //Task for create Oferta Laboral 
    async createOfertaLaboral(model: OfertasLaborales): Promise<any> {

        let res: any;
        try {
            res = this.ajax.post(this.url + 'Crear', model);
        }
        catch (e: any) {
            res
        }
        return res;
    }
    //Task for update Oferta Laboral 
    async updateOfertaLaboral(model: OfertasLaborales): Promise<any> {
        let res: any;
        try {
            res = this.ajax.post(this.url + 'Update', model);
        }
        catch (e: any) {
            res
        }
        return res;
    }
    //Task for Get Oferta Laboral 
    async getOfertasLaborales(id: number): Promise<any> {
        let res: any;

        try {
            res = this.ajax.get(this.url + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
    //Task for search Oferta Laboral by name
    async getOfertasLaboralesBusqueda(value: string, id: string): Promise<any> {
        let res: any;

        if (value == '')
            value = '-1';
        try {
            res = this.ajax.get(this.url + 'Busqueda/' + value + "?" + 'id=' + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
}