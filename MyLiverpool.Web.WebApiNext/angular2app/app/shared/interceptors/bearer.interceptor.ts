import { Injectable, Inject } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpErrorResponse, HttpResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "../storage.service";
import { IRefreshGrantModel } from "../auth/models/refresh-grant-model";
import { IAuthTokenModel } from "../auth/models/auth-token-model";
import { LoaderService } from "../loader/index";

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    constructor(
        @Inject(StorageService) private storage: StorageService,
        private loaderService: LoaderService
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(this.addAuth(req)).do(event => {
            if (event instanceof HttpResponse) {
                this.loaderService.hide();
            }
        })
            .catch(response => {
                if (response instanceof HttpErrorResponse && response.status === 401) {
                    return this.updateTokens(next).flatMap(() => next.handle(this.addAuth(req)));
                }
                this.loaderService.hide();
                return Observable.throw(response);
            });
    }

    private addAuth(req: HttpRequest<any>): HttpRequest<any> {
        const tokens = this.storage.retrieveTokens();
        return req.clone({
            headers: req.headers.set("Authorization", `Bearer ${tokens ? tokens.access_token : ""}`)
        });
    }

    private updateTokens(handler: HttpHandler): Observable<IAuthTokenModel> {
        const data: IRefreshGrantModel = { refresh_token: this.storage.getRefreshToken() };
        const headers = new HttpHeaders({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8;" });

        Object.assign(data, { grant_type: "refresh_token", scope: "openid offline_access" });

        const params = new URLSearchParams();
        Object.keys(data)
            .forEach(key => params.append(key, data[key]));
        const http = new HttpClient(handler);
        return http.post<IAuthTokenModel>("/connect/token", params.toString(), { headers: headers })
            .do((tokens: IAuthTokenModel) => {

                const now = new Date();
                tokens.expiration_date = new Date(now.getTime() + tokens.expires_in * 1000).getTime().toString();

                this.storage.setAuthTokens(tokens);

                console.warn("refreshed !");
            });
    }
}