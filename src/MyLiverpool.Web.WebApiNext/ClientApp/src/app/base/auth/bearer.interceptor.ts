import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpEvent,
    HttpHandler
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isUnauthorizedError } from '@network/static';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {

    public static readonly AuthHeader: string = 'Authorization';

    constructor(private authService: AuthService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const params = { headers: request.headers.set(AuthHeadersInterceptor.AuthHeader, this.authService.authorizationHeader) };

        return next.handle(request.clone(params)).pipe(
            tap(
                (event: HttpEvent<any>) => { },
                (err: any) => {
                    if (isUnauthorizedError(err)) {
                       this.authService.refreshTokens();
                    }
                }
            )
        );
    }
}