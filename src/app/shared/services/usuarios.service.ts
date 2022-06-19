import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Result } from "../models/result.model";
import { AjaxService } from "./ajax.service";
import { environment } from "src/environments/environment";
import { FiltroUsuario } from "../models/usuarios.model";
@Injectable()
export class UsuarioPHPService {
    url: string = environment.apiPHP;

    constructor(private ajax: AjaxService,
        public _http: HttpClient
    ) { }
    getProductos() {
        var object = this._http.get(this.url + 'productos');
        return object;
    }

    getProductosfiltro(filtro: FiltroUsuario) {

        if (filtro.usuario == '') {
            filtro.usuario = 'null';
        }
        if(filtro.estatus == undefined || filtro.estatus == null)
        {
            filtro.estatus = -1;
        }
        var _url = this.url + 'listUsuarios/' + filtro.usuario + '&' + filtro.estatus;
        // console.log(_url);
        var object = this._http.get(_url);
        return object;
    }

    getUsuarios(filtro: FiltroUsuario) {

        if(filtro.estatus == undefined || filtro.estatus == null)
        {
            filtro.estatus = -1;
        }
       
        var _url = this.url + 'usuarios';
        var object = this._http.post(_url, filtro);
        return object;
    }

    createUsuario(model: any){
        var _url = this.url + 'usuario';
        var object = this._http.post(_url, model);
        return object;
    }

    createUsuarioGET(model: any){
        var _url = this.url + 'usuario';
        var _url = this.url + 'createUsuario/' + model.usuario + '&' + model.password + '&' + model.email + '&' + model.rol;
        var object = this._http.get(_url);
        return object;
    }

}