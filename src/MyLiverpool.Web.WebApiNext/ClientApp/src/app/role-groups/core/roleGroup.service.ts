import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleGroup } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { ROLE_GROUPS_ROUTE } from '@constants/routes.constants';

@Injectable()
export class RoleGroupService {
    private actionUrl: string = ROLE_GROUPS_ROUTE + '/';

    constructor(private http: HttpWrapper) {
    }

    public getAllWithRoles(): Observable<RoleGroup[]> {
        return this.http.get<RoleGroup[]> (this.actionUrl + '?includeRoles=true');
    }

    public getAll(): Observable<RoleGroup[]> {
        return this.http.get<RoleGroup[]> (this.actionUrl);
    }
}
