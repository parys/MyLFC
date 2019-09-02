﻿import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MatchPersonType, MatchPerson } from '@domain/models';
import { MATCH_PERSONS_ROUTE, MATCHES_ROUTE } from '@constants/routes.constants';

@Injectable()
export class MatchPersonService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATCH_PERSONS_ROUTE + '/';
    }

    public getMatchPersons(matchId: number): Observable<MatchPerson[]> {
        return this.http.get<MatchPerson[]>(`${MATCHES_ROUTE}/${matchId}/persons`);
    }

    public create(item: MatchPerson): Observable<MatchPerson> {
        return this.http.post<MatchPerson>(this.actionUrl, JSON.stringify(item));
    }

    public update( itemToUpdate: MatchPerson): Observable<MatchPerson> {
        return this.http.put<MatchPerson>(this.actionUrl, JSON.stringify(itemToUpdate));
    }

    public getTypes(): Observable<MatchPersonType[]> {
        return this.http.get<MatchPersonType[]>(this.actionUrl + 'getTypes/');
    }

    public delete(matchId: number, personId: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + matchId + '/' + personId);
    }
}
