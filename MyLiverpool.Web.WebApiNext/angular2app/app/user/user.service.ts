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
        return this.http.get(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)))
            .map((response: Response) => response.json());
    };

    getSingle = (id: number): Observable<User> => {
        return this.http.get(this.actionUrl + id).map((response: Response) => response.json());
    };

    updateRoleGroup = (id: number, roleGroupId: number): Observable<boolean> => {
        return this.http.put(`${this.actionUrl}updateRoleGroup/${id}/${roleGroupId}`, "").map((response: Response) => response.json());
    };

    ban = (id: number, banDaysCount: number): Observable<boolean> => {
        return this.http.put(`${this.actionUrl}ban/${id}/${banDaysCount}`, "").map((response: Response) => response.json());
    };

    unban = (id: number): Observable<boolean> => {
        return this.http.put(`${this.actionUrl}unban/${id}`, "").map((response: Response) => response.json());
    };

    resetAvatar = (id: number): Observable<string> => {
        return this.http.put(`${this.actionUrl}avatar/${id}/reset`, "").map((response: Response) => response.text());
    };

    updateAvatar = (file: File): Observable<string> => {
        let formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post(`${this.actionUrl}avatar/`, formData, true).map((response: Response) => response.text());
    };
}