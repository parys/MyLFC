import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@app/+httpWrapper';
import { HELPERS_ROUTE } from '@app/+constants';
import { StaticPage } from '@domain/models';

@Injectable()
export class StaticPageService {
    private actionHelperUrl: string = HELPERS_ROUTE + '/';

    constructor(private http: HttpWrapper) {
    }

    public updateValue(id: number, value: StaticPage): Observable<boolean> {
        return this.http.put<boolean>(`${this.actionHelperUrl}${id}`, JSON.stringify(value));
    }

    // duplicates in admin service
    public getValue(id: number): Observable<string> {
        return this.http.get(`${this.actionHelperUrl}${id}`);
    }
}
