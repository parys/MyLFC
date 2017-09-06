import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { StorageService } from "./storage.service";
import { Configuration } from "../app.constants";
import { Router } from "@angular/router";
import { IAuthTokenModel } from "../auth/models/auth-tokens-model";
import { LoaderService } from "./loader.service";

@Injectable()
export class HttpWrapper {// extends HttpClient {
    constructor(private http: HttpClient
        , private storage: StorageService
        , private configuration: Configuration,
        private router: Router,
        private loaderService: LoaderService
      //  defaultOptions: RequestOptions,
   // backend: XHRBackend
    ) {
     //   super(backend, defaultOptions);
 }

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.configuration.serverWithApiUrl + url, {
            headers: this.updateHeaders()
        });
    }  

    public getString(url: string): Observable<string> {
        return this.http.get(this.configuration.serverWithApiUrl + url, {
            headers: this.updateHeaders(),
            responseType: "text"
        });
    }  
    
    public post<T>(url: string, data: any, withFiles: boolean = false): Observable<T> {
        return this.http.post<T>(this.configuration.serverWithApiUrl + url, data, {
            headers: this.updateHeaders(withFiles)
        });
    }

    public put<T>(url: string, data: any): Observable<T> {
        return this.http.put<T>(this.configuration.serverWithApiUrl + url, data, {
            headers: this.updateHeaders()
        });
    }

    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(this.configuration.serverWithApiUrl + url, {
            headers: this.updateHeaders()
        });
    }

    private retrieveTokens(): IAuthTokenModel {
        const tokensString = this.storage.getAuthTokens();
        const tokensModel: IAuthTokenModel = tokensString ? JSON.parse(tokensString) : null;
        return tokensModel;
    }

    private updateHeaders(withFiles: boolean = false): HttpHeaders {
        let headers: HttpHeaders;
        const tokens = this.retrieveTokens();
        if (withFiles) {
            headers = new HttpHeaders().set("Accept", "application/json").set("Authorization", `Bearer ${tokens ? tokens.access_token : ""}`);
        } else {
            headers = new HttpHeaders().set("Content-type", "application/json").set("Authorization", `Bearer ${tokens ? tokens.access_token : ""}`);
        }
       
        return headers;
    }

    private parseLoginAnswer(item: any): void {
        this.storage.setAuthTokens(item);
    }
}