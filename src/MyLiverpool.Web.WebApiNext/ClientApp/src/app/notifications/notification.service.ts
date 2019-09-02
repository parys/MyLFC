import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { Notification } from '@domain/models';
import { NOTIFICATIONS_ROUTE } from '@constants/routes.constants';

@Injectable()
export class NotificationService {
    private actionUrl: string = NOTIFICATIONS_ROUTE + '/';

    constructor(private http: HttpWrapper) {
    }

    public getAll(): Observable<Notification[]> {
        return this.http.get<Notification[]>(this.actionUrl);
    }

    public read(ids: number[]): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + 'read/', { ids });
    }

    public getUnreadCount(): Observable<number> {
        return this.http.get<number>(this.actionUrl + 'unread/');
    }
}
