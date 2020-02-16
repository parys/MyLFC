import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE, NOTIFICATIONS_ROUTE, PMS_ROUTE } from '@constants/routes.constants';
import { Match } from '@domain/models';

@Injectable()
export class MobileLayoutService {
    constructor(private http: HttpWrapper) {
    }

    public getHeaderMatch(): Observable<Match> {
        return this.http.get<Match>(MATCHES_ROUTE + '/header');
    }

    public getUnreadNotificationsCount(): Observable<number> {
        return this.http.get<number>(NOTIFICATIONS_ROUTE + '/unread/');
    }

    public read(ids: number[]): Observable<boolean> {
        return this.http.put<boolean>(NOTIFICATIONS_ROUTE + '/read/', { ids });
    }

    public getUnreadPmsCount(): Observable<number> {
        return this.http.get<number>(PMS_ROUTE + '/unread/');
    }

}
