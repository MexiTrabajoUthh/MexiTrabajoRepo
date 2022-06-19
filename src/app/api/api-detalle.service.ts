import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../shared/services/ajax.service';
import { Result } from '../shared/models/result.model';
import { Chat, ChatMensajes } from '../shared/models/chat.model';
import { BuzonMensaje } from '../shared/models/buzon.model';
import { UsuarioDetalle } from '../shared/models/usuarios.model';

@Injectable({
    providedIn: 'root'
})
export class ApiDetalleService {

    url = environment.api + '/Detail/';

    constructor(private ajax: AjaxService) {

    }

    async getDetalle(id: number): Promise<any> {
        let res: any;

        try {
            res = this.ajax.get(this.url + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
    async createDetalleUser(model: UsuarioDetalle): Promise<any> {

        let res: any;
        try {
            res = this.ajax.post(this.url + 'crear', model);
        }
        catch (e: any) {
            res
        }
        return res;
    }
}