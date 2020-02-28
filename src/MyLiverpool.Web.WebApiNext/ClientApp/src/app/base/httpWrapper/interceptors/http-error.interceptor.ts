import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngxs/store';
import { Observable, throwError, Observer, of } from 'rxjs';
import { retry, catchError, switchMap } from 'rxjs/operators';

import { ShowNotice } from '@notices/store';
import { NoticeMessage } from '@notices/shared';
import { isUnauthorizedError } from '@network/static';
import { HttpStatusCode } from '@network/enums';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private store: Store) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
           //     retry(1),

                catchError((error: HttpErrorResponse) => {

                    if (isUnauthorizedError(error) || error.error instanceof ErrorEvent || error.error instanceof ProgressEvent) {
                        return throwError(error);
                    }

                    return this.parseError(error)
                        .pipe(
                            switchMap((message) => this.store.dispatch(new ShowNotice(message))),
                            switchMap(() => throwError(error))
                        );
                })
            );
    }

    public parseError(err: HttpErrorResponse): Observable<NoticeMessage> {
        if (err.error instanceof Blob) {
            return this.parseBlobResponseError(err);
        }

        return this.parseJsonResponseError(err);
    }

    public parseJsonResponseError(err: HttpErrorResponse): Observable<NoticeMessage> {
        const errors = err.error.errors || err.error;
        let message = '';

        for (const prop in errors) {
            if (errors.hasOwnProperty(prop)) {
                message += errors[prop];
            }
        }

        const title = err.error.title || `Status Code: ${err.status || err.error.status}`;
        message = message || `Message: ${err.message}`;

        return of(NoticeMessage.error(title, message));
    }

    public parseBlobResponseError(err: HttpErrorResponse): Observable<NoticeMessage> {
        const reader: FileReader = new FileReader();

        const obs = Observable.create((observer: Observer<NoticeMessage>) => {
            reader.onloadend = (e) => {
                const error = JSON.parse(reader.result as any);
                const title = `Status Code: ${error.status || HttpStatusCode.BAD_REQUEST}`;
                const message = error.errors || error.error || error.message

                observer.next(NoticeMessage.error(title, message));
                observer.complete();
            }
        });

        reader.readAsText(err.error);

        return obs;
    }
}
