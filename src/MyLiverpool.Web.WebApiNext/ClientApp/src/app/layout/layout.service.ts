import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE, PERSONS_ROUTE, USERS_ROUTE, COMMENTS_ROUTE, INJURIES_ROUTE, HELPERS_ROUTE } from '@constants/routes.constants';
import { Comment, MatchCalendar, Person, User, UsersOnline, Injury } from '@domain/models';

@Injectable()
export class LayoutService {
    constructor(private http: HttpWrapper) {
    }
    public getForCalendar(): Observable<MatchCalendar> {
        return this.http.get<MatchCalendar>(MATCHES_ROUTE + '/getForCalendar');
    }

    public getBestPlayer(): Observable<Person> {
        return this.http.get<Person>(PERSONS_ROUTE + '/bestPlayer/');
    }

    public getBirthdays(): Observable<Person[]> {
        return this.http.get<Person[]>(`${PERSONS_ROUTE}/birthdays`);
    }

    public getUsersBirthdays(): Observable<User[]> {
        return this.http.get<User[]>(`${USERS_ROUTE}/birthdays`);
    }

    public getOnlineCount(): Observable<UsersOnline> {
        return this.http.get<UsersOnline>(`${USERS_ROUTE}/online`);
    }

    public getLastComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(COMMENTS_ROUTE + '/last');
    }

    public getCurrentInjuries(): Observable<Injury[]> {
        return this.http.get<Injury[]>(INJURIES_ROUTE + `/current`);
    }

    public updateEplTable(): Observable<string> {
        return this.http.get<string>('admin/updateTable/');
    }

    // todo duplicates in static page service
    public getValue(id: number): Observable<string> {
        return this.http.get(`${HELPERS_ROUTE}/${id}`);
    }
}
