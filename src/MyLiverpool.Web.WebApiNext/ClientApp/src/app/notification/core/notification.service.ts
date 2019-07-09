import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { Notification } from "@app/notification/model";
import { NOTIFICATIONS_ROUTE } from "@app/+constants";
import { SingleResponse } from '@app/+common-models';
import { ManyResponse } from '@app/+common-models';

@Injectable()
export class NotificationService {
    private actionUrl: string = NOTIFICATIONS_ROUTE + "/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(): Observable<ManyResponse<Notification>> {
        return this.http.get<ManyResponse<Notification>>(this.actionUrl);
    };

    public read(ids: number[]): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + "read/", { ids: ids });
    };

    public getUnreadCount(): Observable<SingleResponse<number>> {
        return this.http.get<SingleResponse<number>>(this.actionUrl + "unread/");
    };
}