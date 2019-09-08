import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MatchEvent, MatchEventType } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { MATCH_EVENTS_ROUTE, MATCHES_ROUTE } from '@constants/routes.constants';

@Injectable()
export class MatchEventService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATCH_EVENTS_ROUTE + '/';
    }

    public getMatchEvents(matchId: number): Observable<MatchEvent[]> {
        return this.http.get<MatchEvent[]>(`${MATCHES_ROUTE}/${matchId}/events`);
    }

    public create(item: MatchEvent): Observable<number> {
        return this.http.post<number>(this.actionUrl, JSON.stringify(item));
    }

    public update(id: number, itemToUpdate: MatchEvent): Observable<number> {
        return this.http.put<number>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public getTypes(): Observable<MatchEventType[]> {
        return this.http.get<MatchEventType[]>(this.actionUrl + 'getTypes/');
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    }
}
