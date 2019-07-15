import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { HELPERS_ROUTE } from "@app/+constants";
import { StaticPage } from '@app/staticPage';

@Injectable()
export class AdminService {
    private actionUrl: string = "admin/";
    private actionHelperUrl: string = HELPERS_ROUTE + "/";

    constructor(private http: HttpWrapper) {
    }

    public updateEplTable(): Observable<string> {
        return this.http.getString(this.actionUrl + "updateTable/");
    };

    //duplicates in static page service
    public getValue(id: number): Observable<StaticPage> {
        return this.http.get(`${this.actionHelperUrl}${id}`);
    };
}