import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/httpWrapper";
import { Configuration } from "../app.constants";
import { UserFilters } from "./userFilters.model";
import { User } from "./user.model";
import { Pageable } from "../shared/pageable.model";

@Injectable()
export class UserService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "user/";
    }

    getAll = (filters: UserFilters): Observable<Pageable<User>> => {
        return this.http.get(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(res => res.json());
    };

    getSingle = (id: number): Observable<User> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    updateRoleGroup = (id: number, roleGroupId: number): Observable<boolean> => {
        return this.http.put(`${this.actionUrl}updateRoleGroup/${id}/${roleGroupId}`, "").map(response => response.json());
    };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}