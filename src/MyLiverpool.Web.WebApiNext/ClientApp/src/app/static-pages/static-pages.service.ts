import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { HELPERS_ROUTE } from '@constants/routes.constants';

@Injectable()
export class StaticPagesService {
    private actionHelperUrl: string = HELPERS_ROUTE + '/';

    constructor(private http: HttpWrapper) {
    }
    // duplicates in admin service
    public getValue(id: number): Observable<string> {
        return this.http.get(`${this.actionHelperUrl}${id}`);
    }
}
