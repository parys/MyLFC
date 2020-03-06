import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { USERS_ROUTE, COMMENTS_ROUTE } from '@constants/routes.constants';
import { Comment, User, UsersOnline } from '@domain/models';

@Injectable()
export class SidebarRightService {
    constructor(private http: HttpWrapper) {
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
}
