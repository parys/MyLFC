import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { StorageService } from "./storage.service";
import { Configuration } from "../app.constants";
import { Router } from "@angular/router";
import { LoaderService } from "./loader.service";

@Injectable()
export class HttpWrapper {
    constructor(private http: HttpClient,
        private storage: StorageService,
        private configuration: Configuration,
        private router: Router,
        private loaderService: LoaderService
    ) {
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

    private updateHeaders(withFiles: boolean = false): HttpHeaders {
        return new HttpHeaders().set(withFiles ? "Accept" : "Content-type", "application/json");
    }
}