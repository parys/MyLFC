import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./localStorage.service";

@Injectable()
export class HttpWrapper {

    constructor(private http: Http
        , private localStorage: LocalStorageService
    ) { }

    updateHeaders(withFiles: boolean = false): Headers {
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

    get(url: string): Observable<Response> {
        return this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }

    post(url: string, data: any, withFiles: boolean = false): Observable<Response> {
        return this.http.post(url, data, {
            headers: this.updateHeaders(withFiles)
        });
    }

    put(url: string, data: any): Observable<Response> {
        return this.http.put(url, data, {
            headers: this.updateHeaders()
        });
    }

    delete(url: string): Observable<Response> {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }
}