import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AjaxService } from "../shared/services/ajax.service";
import { ExperienciaLaboral } from "../shared/models/apartados.models";

@Injectable({
    providedIn: 'root'
})
export class ApiExperienciaLaboral {
    url = environment.api + '/ExperienciaLaboral/';
    constructor(private ajax: AjaxService) { }

    async createExperienciaLaboral(model: ExperienciaLaboral): Promise<any> {

        let res: any;
        try {
            res = this.ajax.post(this.url + 'Crear', model);
        }
        catch (e: any) {
            res
        }
        return res;
    }
    async updateExperienciaLaboral(model: ExperienciaLaboral): Promise<any> {
        let res: any;
        try {
            res = this.ajax.post(this.url + 'Update', model);
        }
        catch (e: any) {
            res
        }
        return res;
    }
    async getExperienciaLaboral(id: number): Promise<any> {
        let res: any;

        try {
            res = this.ajax.get(this.url + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
}