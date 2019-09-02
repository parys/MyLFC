import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { FaqItem } from '@domain/models';

@Injectable()
export class FaqItemService {
    private actionUrl = 'faqItems/';

    constructor(public http: HttpWrapper) {
    }

    public getAll(): Observable<FaqItem[]> {
        return this.http.get<FaqItem[]>(this.actionUrl);
    }

    public getSingle(id: number): Observable<FaqItem> {
        return this.http.get<FaqItem>(this.actionUrl + id);
    }

    public createOrUpdate(id: number, item: FaqItem): Observable<number> {
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
