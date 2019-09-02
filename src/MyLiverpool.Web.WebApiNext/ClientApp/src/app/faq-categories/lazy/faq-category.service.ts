import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';

import { FaqCategory } from '@domain/models';

@Injectable()
export class FaqCategoryService {
    private actionUrl = 'faqCategories/';

    constructor(public http: HttpWrapper) {
    }

    public getAll(): Observable<FaqCategory[]> {
        return this.http.get<FaqCategory[]>(this.actionUrl);
    }

    public getSingle(id: number): Observable<FaqCategory> {
        return this.http.get<FaqCategory>(this.actionUrl + id);
    }

    public createOrUpdate(id: number, item: FaqCategory): Observable<number> {
        const stringify = JSON.stringify(item);
        if (+id > 0) {
            return this.http.put<number>(this.actionUrl + id, stringify);
        } else {
            return this.http.post<number>(this.actionUrl, stringify);
        }
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    }
}
