import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';
import { MatchFilters, Match, MatchType } from '@domain/models';

@Injectable()
export class MatchService extends BaseRestService<Match, MatchFilters> {
    private actionUrl: string = MATCHES_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, MATCHES_ROUTE + '/');
    }

    public pin(id?: number): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + id + '/setAsHeader', '');
    }

    public getTypes(): Observable<MatchType[]> {
        return this.http.get<MatchType[]>(this.actionUrl + 'getTypes/');
    }
}
