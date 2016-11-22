import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { LocalStorageService } from "./localStorage.service";

@Injectable()
export class HttpWrapper {

    constructor(private http: Http
        , private localStorage: LocalStorageService
    ) { }

    updateHeaders(): Headers {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        if (this.localStorage.hasAccessToken()) {
            headers.append("Authorization",
                this.localStorage.getAccessTokenWithType());
        }
        return headers;
    }

    get(url) {
        let result = this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
        return result;
    }

    post(url, data) {
        let headers = this.updateHeaders();
        return this.http.post(url, data, {
            headers: headers
        });
    }

    put(url, data) {
        let headers = this.updateHeaders();
        return this.http.put(url, data, {
            headers: headers
        });
    }

    delete(url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }
}