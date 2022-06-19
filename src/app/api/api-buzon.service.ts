import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../shared/services/ajax.service';
import { Result } from '../shared/models/result.model';
import { Chat, ChatMensajes } from '../shared/models/chat.model';
import { BuzonMensaje } from '../shared/models/buzon.model';

@Injectable({
    providedIn: 'root'
})
export class ApiBuzonService {

    url = environment.api + '/Buzon/';

    constructor(private ajax: AjaxService) {

    }


    async createMensaje(model: BuzonMensaje): Promise<any> {
        let res: any;
        try {
            res = this.ajax.post(this.url + 'RegistroChat', model);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }


    async getBuzonAdmin(id: number, empleado: string): Promise<any> {
        let res: any;
        try {
            if (empleado == undefined || empleado == null || empleado == ''){
                empleado = '----------';
            }
            res = this.ajax.get(this.url + 'BuzonAd min/' + id + "/" + empleado);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
    async getBuzonUsuario(id: number): Promise<any> {
        let res: any;
        try {
            res = this.ajax.get(this.url + 'BuzonUsuario/' + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
    async getBuzonMensaje(id: number): Promise<any> {
        let res: any;
        try {
            res = this.ajax.get(this.url + 'BuzonMensajes/' + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
}
