import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .do((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    console.log('processing response', ev);
                }
            })
            .catch(response => {
                if (response instanceof HttpErrorResponse) {
                    console.log('Processing http error', response);
                }

                return Observable.throw(response);
            });
    }
}