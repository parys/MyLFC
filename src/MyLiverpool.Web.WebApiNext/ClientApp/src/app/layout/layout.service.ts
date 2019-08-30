import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@app/+httpWrapper';
import { NOTIFICATIONS_ROUTE, MATCHES_ROUTE, PERSONS_ROUTE, USERS_ROUTE, PMS_ROUTE } from '@app/+constants';
import { Match, MatchCalendar, Person, User, UsersOnline } from '@domain/models';

@Injectable()
export class LayoutService {
    constructor(private http: HttpWrapper) {
    }

    public getUnreadNotificationsCount(): Observable<number> {
        return this.http.get<number>(NOTIFICATIONS_ROUTE + '/unread/');
    }

    public read(ids: number[]): Observable<boolean> {
        return this.http.put<boolean>(NOTIFICATIONS_ROUTE + '/read/', { ids });
    }

    public getForCalendar(): Observable<MatchCalendar> {
        return this.http.get<MatchCalendar>(MATCHES_ROUTE + '/getForCalendar');
    }

    public getHeaderMatch(): Observable<Match> {
        return this.http.get<Match>(MATCHES_ROUTE + '/header');
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

    public getUnreadPmsCount(): Observable<number> {
        return this.http.get<number>(PMS_ROUTE + '/unread/');
    }
}
