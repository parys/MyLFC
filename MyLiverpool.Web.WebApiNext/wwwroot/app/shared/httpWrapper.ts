import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthService} from "../auth/auth.service";
import {LocalStorage} from "./localStorage";

@Injectable()
export class HttpWrapper {

    constructor(private http: Http, private localStorage: LocalStorage) {}

    headers : Headers;

    updateHeaders(): void {
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'));
    }

    get(url) {
        this.updateHeaders();
        return this.http.get(url, {
            headers: this.headers
        });
    }

    post(url, data) {
        this.updateHeaders();
        return this.http.post(url, data, {
            headers: this.headers
        });
    }

    put(url, data) {
        this.updateHeaders();
        return this.http.put(url, data, {
            headers: this.headers
        });
    }

    delete(url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.headers
        });
    }
}