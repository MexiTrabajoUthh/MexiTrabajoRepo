import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../shared/services/ajax.service';
import { Result } from '../shared/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProfileService {

  url = environment.api + '/profile/';

  constructor(private ajax: AjaxService) {

  }

  async changePassword(passwords: any): Promise<Result<string>> {
    let res: Result<string>;

    try {
      res = await this.ajax.post(this.url + 'changePassword', passwords);
    } catch (e: any) {
      res = new Result<string>(e, false, e.message);
    }


    return res;
  }

  async get(): Promise<Result<any>> {
    let res: Result<any>;

    try {
      res = await this.ajax.get(this.url);
    } catch (e: any) {
      res = new Result<any>(e, false, e.message);
    }
    return res;
  }


  async ping(): Promise<Result<any>> {
    let res: Result<string>;

    try {
      res = await this.ajax.get(this.url + 'ping');
    } catch (e: any) {
      res = new Result<any>(e, false, e.message);
    }
    return res;
  }

}
