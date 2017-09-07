import { Injectable, Inject } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http/src/backend";
import { Observable } from "rxjs";
import { StorageService } from "./storage.service";

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    constructor(
        @Inject(StorageService)private storage: StorageService
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokens = this.storage.retrieveTokens();
        const authReq = req.clone({
            headers: req.headers.set("Authorization", `Bearer ${tokens ? tokens.access_token : ""}`)
        });
        return next.handle(authReq);
    }
}