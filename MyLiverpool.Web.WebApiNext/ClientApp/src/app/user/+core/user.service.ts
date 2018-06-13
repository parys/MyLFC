import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper, Pageable } from "@app/shared";
import { UserFilters } from "../userFilters.model";
import { User } from "../user.model";
import { UsersOnline } from "@app/+common-models";
import { UserConfig } from "../user-config.model";

@Injectable()
export class UserService {
    private actionUrl: string = "user/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(filters: UserFilters): Observable<Pageable<User>> {
        return this.http.get<Pageable<User>>(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)));
    };

    public getSingle(id: number): Observable<User> {
        return this.http.get<User>(this.actionUrl + id);
    };

    public getListByUserName(typed: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.actionUrl}getUserNames?typed=${typed}`);
    };

    public update(itemToUpdate: User): Observable<User>;
    update(): any;
    public update(itemToUpdate?: User): Observable<User> {
        return this.http.put<User>(this.actionUrl, JSON.stringify(itemToUpdate));
    };

    public updateRoleGroup(id: number, roleGroupId: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.actionUrl}updateRoleGroup/${id}/${roleGroupId}`, "");
    };

    public ban(id: number, banDaysCount: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.actionUrl}ban/${id}/${banDaysCount}`, "");
    };

    public unban(id: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.actionUrl}unban/${id}`, "");
    };

    public resetAvatar(id: number): Observable<Object> {
        return this.http.put<Object>(`${this.actionUrl}avatar/${id}/reset`, "");
    };

    public updateAvatar(file: File): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post<Object>(`${this.actionUrl}avatar/`, formData, true);
    };

    public getConfig(): Observable<UserConfig> {
        return this.http.get<UserConfig>(`${this.actionUrl}config`);
    };

    public getBirthdays(): Observable<User[]> {
        return this.http.get<User[]>(`${this.actionUrl}birthdays`);
    };

    public getOnlineCount(): Observable<UsersOnline> {
        return this.http.get<UsersOnline>(`${this.actionUrl}online`);
    };

    public updateConfig (itemToUpdate: UserConfig): Observable<UserConfig> {
        return this.http.put<UserConfig>(`${this.actionUrl}config`, JSON.stringify(itemToUpdate));
    };
}