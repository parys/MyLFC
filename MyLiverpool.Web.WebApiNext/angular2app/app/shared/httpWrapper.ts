import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./localStorage.service";
import { Configuration } from "../app.constants";
import { Router } from "@angular/router";

@Injectable()
export class HttpWrapper {

    constructor(private http: Http
        , private localStorage: LocalStorageService
        , private configuration: Configuration,
        private router: Router
    ) { }

    get(url: string): Observable<Response> {
        this.checkTokenExpirationDate();
        return this.http.get(this.configuration.serverWithApiUrl + url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }

    post(url: string, data: any, withFiles: boolean = false): Observable<Response> {
        this.checkTokenExpirationDate();
        return this.http.post(this.configuration.serverWithApiUrl + url, data, {
            headers: this.updateHeaders(withFiles)
        });
    }

    put(url: string, data: any): Observable<Response> {
        this.checkTokenExpirationDate();
        return this.http.put(this.configuration.serverWithApiUrl + url, data, {
            headers: this.updateHeaders()
        });
    }

    delete(url: string): Observable<Response> {
        this.checkTokenExpirationDate();
        return this.http.delete(this.configuration.serverWithApiUrl + url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }

    login(username: string, password: string): Observable<Response> {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        let params = `grant_type=password&username=${username}&password=${password}&scope=offline_access`;

        return this.requestForToken(params);
    }

    refreshTokens(): Observable<Response> {
        let refreshToken = this.localStorage.getRefreshToken();
        let params = `grant_type=refresh_token&refresh_token=${refreshToken}`;
        return this.requestForToken(params);
    }

    private checkTokenExpirationDate() : boolean {
        if (this.localStorage.getRefreshToken() && this.localStorage.isTokenExpired()) {
            this.refreshTokens()
                .subscribe(data => this.parseLoginAnswer(data),
                    error => console.log(error), () => {
                        return true;
                    });
        }
        return false;
    }

    private updateHeaders(withFiles: boolean = false): Headers {
        let headers: Headers = new Headers();
        if (withFiles) {
            headers.append("Accept", "application/json");
        } else {
            headers.append("Content-type", "application/json");
        }
        if (this.localStorage.hasAccessToken()) {
            headers.append("Authorization",
                this.localStorage.getAccessTokenWithType());
        }
        return headers;
    }

    private requestForToken(params: string): Observable<Response> {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        return this.http.post(this.configuration.server + "connect/token",
            params,
            {
                headers: headers
            });
    }

    private parseLoginAnswer(item: any): void {
        this.localStorage.setAuthTokens(item);
    }
}