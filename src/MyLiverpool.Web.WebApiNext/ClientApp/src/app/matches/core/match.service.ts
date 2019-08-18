import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@app/+httpWrapper';
import { MATCHES_ROUTE } from '@app/+constants';
import { BaseRestService } from '@app/+infrastructure';
import { MatchFilters, MatchCalendar, Match, MatchType } from '@domain/models';

@Injectable()
export class MatchService extends BaseRestService<Match, MatchFilters> {
    private actionUrl: string = MATCHES_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, MATCHES_ROUTE + '/');
    }

    public getForCalendar(): Observable<MatchCalendar> {
        return this.http.get<MatchCalendar>(this.actionUrl + 'getForCalendar');
    }

    public getHeaderMatch(): Observable<Match> {
        return this.http.get<Match>(this.actionUrl + 'header');
    }

    public pin(id?: number): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + id + '/setAsHeader', '');
    }

    public getTypes(): Observable<MatchType[]> {
        return this.http.get<MatchType[]>(this.actionUrl + 'getTypes/');
    }
}
