import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Result } from "../models/result.model";
import { AjaxService } from "./ajax.service";
import { environment } from "src/environments/environment";
import { ClienteConfig } from "../models/userportal.models";
import { getCache, saveCache } from "../extensions/cache";
@Injectable()
export class UsuarioPortalService {
    url: string = environment.api + "/Account/";

    constructor(private ajax: AjaxService
    ) { }

    async changePassword(passwords: any): Promise<Result<any>> {
        let res: Result<any>;
        try {
            res = await this.ajax.post(this.url + 'changePassword', passwords);
        } catch (e: any) {
            res = new Result<any>(e, false, e.message);
        }
        return res;
    }
    async passwordChangeRequest(email: any): Promise<any> {
        let res: Result<string>;
        try {
            res = await this.ajax.post(this.url + 'requestPasswordReset', email);
        } catch (e: any) {
            res = new Result<any>(e, false, e.message);
        }
        return res;
    }

    async sendCodeTwoStep(email: any): Promise<any> {
        let res: Result<string>;
        try {
            res = await this.ajax.post(this.url + 'sendCodeTwoStep', email);
        } catch (e: any) {
            res = new Result<any>(e, false, e.message);
        }
        return res;
    }
    public async login(model: any): Promise<any> {

        let res: any;
        try {
            res = this.ajax.post(this.url + 'login', model);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }

    public async registrar(model: any): Promise<any> {
        let res: any;
        try {
            res = this.ajax.post(this.url + 'registro', model);
        }
        catch (e: any) {
            res = e;
        }
        return res;
    }

    async cliente(): Promise<ClienteConfig> {
        let res: Result<ClienteConfig> = { data: getCache('cliente'), result: true, message: '' };

        try {
            if (!res.data) {
                res = await this.ajax.get(this.url + `cliente`);

                if (res.result && res.data) {
                    saveCache('cliente', res.data, 30);
                }
            }

        } catch (e: any) {
            res = new Result<ClienteConfig>(new ClienteConfig(), false, e.message);
        }
        return res.data;
    }

    async validateSecondStep(dospasos: any): Promise<any> {
        let res: Result<string>;
        try {
            res = await this.ajax.post(this.url + 'validateSecondStep', dospasos);
        } catch (e: any) {
            res = new Result<any>(e, false, e.message);
        }
        return res;
    }

}