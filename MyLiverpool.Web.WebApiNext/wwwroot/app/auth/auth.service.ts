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
    roles: string[] = [];

    constructor(private http: HttpWrapper, private http1: Http, private localStorage: LocalStorageMine) {
        console.log(this.localStorage.get('access_token'));
        if (this.localStorage.get('access_token')) {
            console.log("auth at start");
            this.isLoggedIn = true;
            console.log(this.localStorage.getObject('roles'));
            this.roles = this.localStorage.getObject('roles');
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
            () => this.getRoles());
        
        
        return true;
    }

    getRoles() {
        this.http.get('api/role')
            .subscribe(data => this.parseRoles(data),
            error => console.log(error),
            () => console.log("success get roles"));
    }

    logout() {
        this.localStorage.remove('token_type');
        this.localStorage.remove('access_token');
        this.localStorage.remove('expires_in');
        this.localStorage.remove('refresh_token');
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

    private parseRoles(item: any) {
        console.log();
        this.roles = item._body.split(', ');
        this.localStorage.setObject('roles', this.roles);
    }

    isUserInRole(role: string) {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }
}