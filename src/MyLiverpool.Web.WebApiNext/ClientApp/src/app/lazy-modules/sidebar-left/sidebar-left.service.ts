import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE, PERSONS_ROUTE, INJURIES_ROUTE, HELPERS_ROUTE } from '@constants/routes.constants';
import { MatchCalendar, Person, Injury } from '@domain/models';

@Injectable()
export class SidebarLeftService {
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
