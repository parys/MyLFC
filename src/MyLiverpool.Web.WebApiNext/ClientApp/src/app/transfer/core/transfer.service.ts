import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { Transfer, TransferFilters } from "@app/transfer/model";
import { PagedList } from "@app/shared";
import { TRANSFERS_ROUTE } from "@app/+constants";
import { BaseRestService } from "@app/+infrastructure";

@Injectable()
export class TransferService extends BaseRestService<Transfer, TransferFilters | any> {
    private actionUrl: string = TRANSFERS_ROUTE + "/";

    constructor(public http: HttpWrapper) {
        super(http, TRANSFERS_ROUTE + "/");
    }
    
    public getCurrentAll(): Observable<Transfer[]> {
        return this.http.get<Transfer[]>(this.actionUrl + "current");   
    };

    public getAllNew(filters: TransferFilters | any): Observable<PagedList<Transfer>> {
        return this.http.getWithParams<PagedList<Transfer>>(this.actionUrl, filters);
    };
}