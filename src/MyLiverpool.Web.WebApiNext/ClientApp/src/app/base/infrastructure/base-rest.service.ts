import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedList } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { PagedQueryBase } from '@base/infrastructure';

@Injectable()
export class BaseRestService<T, TF extends PagedQueryBase> {
    constructor(public http: HttpWrapper,
                @Inject('baseActionUrl') public baseActionUrl: string) {
    }

    public getAll(filters: TF): Observable<PagedList<T>> {
        return this.http.getWithParams<PagedList<T>>(this.baseActionUrl, filters);
    }

    public getSingle(id: number): Observable<T> {
        return this.http.get<T>(this.baseActionUrl + id);
    }

    public createOrUpdate(id: number, item: T): Observable<T> {
        const stringify = JSON.stringify(item);
        if (+id > 0) {
            return this.http.put<T>(this.baseActionUrl + id, stringify);
        } else {
            return this.http.post<T>(this.baseActionUrl, stringify);
        }
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.baseActionUrl + id);
    }
}
