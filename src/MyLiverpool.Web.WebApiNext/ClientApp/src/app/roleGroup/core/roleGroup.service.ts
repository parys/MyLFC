import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RoleGroup } from "../model";
import { HttpWrapper } from "@app/+httpWrapper";
import { ROLE_GROUPS_ROUTE } from "@app/+constants";
import { ManyResponse } from '@app/+common-models';

@Injectable()
export class RoleGroupService {
    private actionUrl: string = ROLE_GROUPS_ROUTE + "/";

    constructor(private http: HttpWrapper) {
    }

    public getAllWithRoles(): Observable<ManyResponse<RoleGroup>> {
        return this.http.get<ManyResponse<RoleGroup>> (this.actionUrl + "?includeRoles=true");
    };

    public getAll(): Observable<ManyResponse<RoleGroup>> {
        return this.http.get<ManyResponse<RoleGroup>> (this.actionUrl);
    };
}