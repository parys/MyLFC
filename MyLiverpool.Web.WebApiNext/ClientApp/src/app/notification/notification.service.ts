import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/shared";
import { Notification } from "./notification.model";

@Injectable()
export class NotificationService {
    private actionUrl: string = "notification/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(): Observable<Notification[]> {
        return this.http.get<Notification[]>(this.actionUrl );
    };

    public read(ids: number[]): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + "read/", ids);
    };

    public getUnreadCount(): Observable<string> {
        return this.http.getString(this.actionUrl + "unread/");
    };
}