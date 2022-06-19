import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../shared/services/ajax.service';
import { Result } from '../shared/models/result.model';
import { Chat, ChatMensajes } from '../shared/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ApiChatService {

  url = environment.api + '/Chat/';

  constructor(private ajax: AjaxService) {

  }


  async createChat(model: Chat): Promise<any>{
    let res: any;
    try{
        res = this.ajax.post(this.url + 'RegistroChat', model);
    }
    catch(e: any){
        res = e;
    }
    return res;
  }

  async createChatMenaje(model: ChatMensajes): Promise<any>{
    let res: any;
    try{
        res = this.ajax.post(this.url + 'RegistroMensaje', model);
    }
    catch(e: any){
        res = e;
    }
    return res;
  }

  async getMensajes(id: number): Promise<any>{
    let res: any;
    try{
        res = this.ajax.get(this.url + 'Mensajes/'+ id);
    }
    catch(e: any){
        res = e;
    }
    return res;
  }

//   public async registrar(model: any): Promise<any>{
//     let res: any;
//     try{
//         res = this.ajax.post(this.url + 'registro', model);
//     }
//     catch(e: any){
//         res = e;
//     }
//     return res;
// }

// async cliente(): Promise<ClienteConfig> {
//     let res: Result<ClienteConfig> = { data: getCache('cliente'), result: true, message: ''};

//     try {
//         if (!res.data){
//             res = await this.ajax.get(this.url + `cliente`);

//             if(res.result && res.data){
//                 saveCache('cliente', res.data, 30);
//             }
//         }
        
//     } catch (e: any) {
//         res = new Result<ClienteConfig>(new ClienteConfig() , false, e.message);
//     }
//     return res.data;
//   }
}
