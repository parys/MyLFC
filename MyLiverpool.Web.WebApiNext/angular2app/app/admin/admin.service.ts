import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/index";

@Injectable()
export class AdminService {
    private actionUrl: string = "admin/";
    private actionHelperUrl: string = "helper/";

    constructor(private http: HttpWrapper) {
    }

    public updateEplTable = (): Observable<string> => {
        return this.http.get<string>(this.actionUrl + "updateTable/");
    };

    public getValue = (id: number): Observable<string> => {
        return this.http.get<string>(`${this.actionHelperUrl}value/${id}`);
    };

    public updateValue = (id: number, value: string): Observable<boolean> => {
        return this.http.put<boolean>(`${this.actionHelperUrl}value/${id}`, JSON.stringify(value));
    };
}