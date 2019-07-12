import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { Wish, WishState, WishType, WishFilter, WishFilterOld } from "../model";
import { WISHES_ROUTE } from "@app/+constants";
import { BaseRestService } from "@app/+infrastructure";
import { PagedList } from '@app/shared';

@Injectable()
export class WishService extends BaseRestService<Wish, WishFilterOld | any> {
    private actionUrl: string = WISHES_ROUTE + "/";

    constructor(public http: HttpWrapper) {
        super(http, WISHES_ROUTE + "/");
    }

    public getTypes(): Observable<WishType[]> {
        return this.http.get<WishType[]>(this.actionUrl + "types/");
    };

    public getStates(): Observable<WishState[]> {
        return this.http.get<WishState[]> (this.actionUrl + "states/");
    };

    public getAllNew(filters: WishFilter | any): Observable<PagedList<Wish>> {
        return this.http.getWithParams<PagedList<Wish>>(this.actionUrl, filters);
    };
}