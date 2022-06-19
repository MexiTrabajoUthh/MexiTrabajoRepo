import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QueryStringBuilder } from '../extensions/query-string-builder';
// import { QueryStringBuilder } from '../extensions/query-string-builder';
// const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.jwt
//     })
// };
@Injectable()
export class AjaxService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.jwt
        })};
    constructor(
        private http: HttpClient
    ) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwt
            })
        };
    }


    get(url: string, params?: any): Promise<any> {
        const qs = params ? '?' + QueryStringBuilder.BuildParametersFromSearch(params) : '';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwt
            })
        };
        return this.http.get(url + qs, this.httpOptions).toPromise();
    }
    post(url: string, params?: any): Promise<any> {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwt
            })
        };
        return this.http.post(url, params, this.httpOptions).toPromise();
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }
    // postFile(url: string, params?: any): Promise<any> {
    //     return this.http.post(url, params, this.generateHeaders(true)).toPromise();
    // }

    // put(url: string, params?: any, isFile?: boolean): Promise<any> {
    //     return this.http.put(url, params, this.generateHeaders(isFile)).toPromise();
    // }

    // private fixUrl(url: string) {
    //     const frac = localStorage.getItem('frac');
    //     return url.replace('{fraccionamiento}', frac);
    // }
}
