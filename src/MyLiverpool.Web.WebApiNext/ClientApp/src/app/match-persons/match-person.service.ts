import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MatchPersonType } from '@domain/models';
import { MATCH_PERSONS_ROUTE, MATCHES_ROUTE } from '@constants/routes.constants';
import { GetMatchPersonsListQuery, UpdateMatchPersonCommand } from '@network/shared/match-persons';

@Injectable()
export class MatchPersonService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATCH_PERSONS_ROUTE + '/';
    }

    public getMatchPersons(matchId: number): Observable<GetMatchPersonsListQuery.Response> {
        return this.http.get<GetMatchPersonsListQuery.Response>(`${MATCHES_ROUTE}/${matchId}/persons`);
    }

    public createOrUpdate(item: UpdateMatchPersonCommand.Request): Observable<UpdateMatchPersonCommand.Response> {
        return this.http.put<UpdateMatchPersonCommand.Response>(this.actionUrl, JSON.stringify(item));
    }

    public getTypes(): Observable<MatchPersonType[]> {
        return this.http.get<MatchPersonType[]>(this.actionUrl + 'getTypes/');
    }

    public delete(matchId: number, personId: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + matchId + '/' + personId);
    }
}
