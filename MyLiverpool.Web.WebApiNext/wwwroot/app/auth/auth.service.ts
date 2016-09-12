import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpWrapper } from "../shared/httpWrapper";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { LocalStorageMine } from "../shared/localStorage";

@Injectable()
export class AuthService {
    public isLoggedIn: boolean = false;
    roles: string[] = [ 'newsmaker', 'user'];

    constructor(private http: HttpWrapper, private http1: Http, private localStorage: LocalStorageMine) {
       // this.roles =   'newsmaker',  }
        if (this.localStorage.getObject('access_token')) {
            console.log("auth at start");
            this.isLoggedIn = true;
        }
    }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
       // headers.append('client_id', 'client_id3');
       // headers.append('client_secret', 'client_secret44');
     //   this.createAuthorizationHeader(headers);
      //  let perams = { grant_type: "password", userName: username, password: password };
        let perams = `grant_type=password&username=${username}&password=${password}&client_id=client_id3`;

        var result = this.http1.post('connect/token', perams, {
            headers: headers
        });
        result.subscribe(data => this.parseLoginAnswer(data),
            error => console.log(error),
            () => console.log("success login"));
        return true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    private parseLoginAnswer(item: any) {
        let response = JSON.parse(item._body); //todo migrate to es6 storage
        this.localStorage.setObject('token_type', response.token_type);
        this.localStorage.setObject('access_token', response.access_token);
        this.localStorage.setObject('expires_in', response.expires_in);
        this.localStorage.setObject('refresh_token', response.refresh_token);
        this.isLoggedIn = true;
    }

    isUserInRole(role: string) {
        if (this.roles.find(x => x === role)) {
            return true;
        }
        return false;
    }
}