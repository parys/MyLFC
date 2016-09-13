import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthService} from "../auth/auth.service";
import { LocalStorageMine } from "./localStorage";

@Injectable()
export class HttpWrapper {

    constructor(private http: Http, private localStorage: LocalStorageMine) {}

    updateHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log("upd hdrs" + this.localStorage.get('token_type'));
        if (this.localStorage.get('token_type')) {
            headers.append('Authorization',
                this.localStorage.getObject('token_type') + ' ' + this.localStorage.getObject('access_token'));
        }
        //console.log("update headers");
        //console.log(headers);
        return headers;
    }

    get(url) {
        console.log("httpWrapper get");
        let result = this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
        //console.log(result);
        return result;
    }

    post(url, data) {
        console.log("httpWrapper post");
        this.updateHeaders();
        return this.http.post(url, data, {
            headers: this.updateHeaders()
        });
    }

    put(url, data) {
        console.log("httpWrapper put");
        this.updateHeaders();
        return this.http.put(url, data, {
            headers: this.updateHeaders()
        });
    }

    delete(url) {
        console.log("httpWrapper delete");
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }
}