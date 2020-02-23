import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';
import { MatchFilters, Match, MatchType } from '@domain/models';
import { GetMatchesListQuery, GetMatchDetailQuery } from '@network/shared/matches';

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

        // new approach
    public getAll2(request: GetMatchesListQuery.Request): Observable<GetMatchesListQuery.Response> {
        return this.http.getWithParams<GetMatchesListQuery.Response>(this.baseActionUrl, request);
    }

    public getSingle2(id: number): Observable<GetMatchDetailQuery.Response> {
        return this.http.get<GetMatchDetailQuery.Response>(this.baseActionUrl + id);
    }
}
