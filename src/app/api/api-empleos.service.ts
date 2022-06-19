import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../shared/services/ajax.service';
import { Result } from '../shared/models/result.model';
import { Chat, ChatMensajes } from '../shared/models/chat.model';
import { BuzonMensaje } from '../shared/models/buzon.model';

@Injectable({
    providedIn: 'root'
})
export class ApiEmpleosService {

    url = environment.api + '/Empleos/';

    constructor(private ajax: AjaxService) {

    }

    async getEmpleos(id: number): Promise<any> {
        let res: any;
        try {
            res = this.ajax.get(this.url + 'Mensajes/' + id);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }
}