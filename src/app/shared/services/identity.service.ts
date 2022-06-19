import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, observable } from 'rxjs';
// import { AccesoService } from './accesos/acceso.service';
// import { Router } from '@angular/router';
// import { threadId } from 'worker_threads';


@Injectable()
export class IdentityService {

    private current: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private source: Observable<boolean> = new Observable<boolean>();

    private data: any;
    private valid: any;
    constructor(
        // private accesoService: AccesoService
    ) { }

    private get(key: string): string {

        if (localStorage.remember === 'true') {
            return localStorage.getItem(key) || '';
        } else {
            return sessionStorage.getItem(key) || '';
        }
    }

    private set(key: string, value: string): void {
        if (localStorage.remember === 'true') {
            return localStorage.setItem(key, value);
        } else {
            return sessionStorage.setItem(key, value);
        }
    }

    get isAdmin(): boolean {
        return this.getData().admin;
    }

    get dependencia(): number {
        const dependencia = this.getData().dependencia;
        return dependencia === null ? undefined : dependencia;
    }

    getData(): any {
        if (!this.data) {
            const json = this.get('usr');
            if (json) {
                try {
                    this.data = JSON.parse(json);
                } catch (error) {
                    console.log('error al obtener usuario', error);
                }
            }
        }
        return this.data;
    }
    getSecondStep(): any {
        if (!this.valid) {
            const json = this.get('secondstep');
            if (json) {
                try {
                    this.valid = JSON.parse(json);
                } catch (error) {
                    console.log('error al obtener validación de dos pasos', error);
                }
            }
        }
        return this.valid;
    }
    getToken(): string {
        return this.get('jwt');
    }


    async isLogged(): Promise<boolean> {
        const logged = this.get('jwt') !== undefined && this.getData() !== undefined && this.getSecondStep();
        if (logged) {
            // await this.accesoService.getAccesos();
        }
        return logged;//=== true;
    }

    logOff() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('usr');
        localStorage.removeItem('secondstep');
        sessionStorage.removeItem('usr');
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('secondstep');
        localStorage.clear();
        this.data = undefined;
        this.valid = undefined;
        if (this.current) {
            // this.accesoService.clear();
            this.current.next(false);
        }
    }

    notify(): Observable<boolean> {
        // if (!this.source) {
        this.current = new BehaviorSubject<boolean>(false);
        this.source = this.current.asObservable();
        this.isLogged().then(logged => this.current.next(logged));
        // }
        return this.source;
    }

    setToken(token: string, store: boolean) {
        localStorage.remember = store;
        this.set('jwt', token);
    }

    login(user: any) {
        this.data = user;
        this.set('usr', JSON.stringify(user));
        if (this.current) {
            this.isLogged().then(logged => {
                this.current.next(logged);
            })
        }
    }
    setSecondStep(validator: string) {
        this.set('secondstep', validator);
    }

    updateValues(values: any): void {
        Object.assign(this.data, values);
        this.set('usr', JSON.stringify(this.data));
    }
}
