﻿import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { Pm, User } from '@domain/models';
import { PMS_ROUTE } from '@constants/routes.constants';

@Injectable()
export class PmService {
    private actionUrl: string = PMS_ROUTE + '/';

    constructor(private http: HttpWrapper) {
    }

    public getAll(): Observable<Pm[]> {
        return this.http.get<Pm[]>(this.actionUrl );
    }

    public getSingle(id: number): Observable<Pm> {
        return this.http.get<Pm>(this.actionUrl + id);
    }

    public create(item: Pm): Observable<Pm> {
        return this.http.post<Pm>(this.actionUrl, JSON.stringify(item));
    }

    public update(id: number, itemToUpdate: Pm): Observable<Pm> {
        return this.http.put<Pm>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    }

    public getListByUserName(typed: string): Observable<User[]> { // bug temp workaround
        return this.http.get<User[]>(`user/getUserNames?typed=${typed}`);
    }
}