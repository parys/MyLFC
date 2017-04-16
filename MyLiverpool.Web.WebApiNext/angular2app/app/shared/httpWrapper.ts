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

    login(username: string, password: string): boolean {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        let params = `grant_type=password&username=${username}&password=${password}&scope=offline_access`;

        this.requestForToken(params);
        return true;
    }

    checkTokenExpirationDate() : boolean {
        if (this.localStorage.isTokenExpired()) {
            this.refreshTokens();
            return true;
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

    private refreshTokens(): void {
        let refreshToken = this.localStorage.getRefreshToken();
        if (!refreshToken) {
            console.log("refreshTokens");
            this.localStorage.removeAllData();
            return;
        }
        let params = `grant_type=refresh_token&refresh_token=${refreshToken}`;
        this.requestForToken(params);

    }

    private requestForToken(params: string): void {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        this.http.post(this.configuration.server + "connect/token",
                params,
                {
                    headers: headers
                })
            .subscribe(data => this.parseLoginAnswer(data),
            error => {
                if (error._body === "unconfirmed_email") {
                    this.router.navigate(["/unconfirmedEmail"]);
                    return;
                }
                console.log("requestForToken");
                this.localStorage.removeAllData();
            },
            () => {
                });
    }

    private parseLoginAnswer(item: any): void {
        this.localStorage.setAuthTokens(item);
    }

    //private parseRoles(item: any): void {
    //    this.roles = item._body.split(", ");
    //    this.localStorage.setRoles(this.roles);
    //}

    //private getRoles(): void {
    //    this.http.get(this.configuration.serverWithApiUrl + "role")
    //        .subscribe(data => this.parseRoles(data),
    //            error => console.log(error),
    //            () => this.rolesCheckedService.checkRoles());
    //}

    //private getUserId(): void {
    //    this.http.get(this.configuration.serverWithApiUrl + "user/getId")
    //        .subscribe(data => this.id = +JSON.parse(data.text()),
    //            error => console.log(error),
    //            () => {
    //                this.localStorage.setUserId(this.id);
    //                this.getRoles();
    //            });
    //}

    //private checkForExpired
}