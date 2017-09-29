import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/httpWrapper";
import { Notification } from "./notification.model";

@Injectable()
export class NotificationService {
    private actionUrl: string = "notification/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(): Observable<Notification[]> {
        return this.http.get<Notification[]>(this.actionUrl );
    };

    //public getSingle = (id: number): Observable<Notification> => {
    //    return this.http.get<Notification>(this.actionUrl + id);
    //};

    //public create = (item: Notification): Observable<Notification> => {
    //    return this.http.post<Notification>(this.actionUrl, JSON.stringify(item));
    //};

    //public update = (id: number, itemToUpdate: Notification): Observable<Notification> => {
    //    return this.http.put<Notification>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    //};

    //public delete = (id: number): Observable<boolean> => {
    //    return this.http.delete<boolean>(this.actionUrl + id);
    //};

    public getUnreadCount(): Observable<string> {
        return this.http.getString(this.actionUrl + "unread/");
    };
}