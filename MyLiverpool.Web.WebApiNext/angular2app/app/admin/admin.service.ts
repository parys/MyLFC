import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/index";

@Injectable()
export class AdminService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "admin/";
    }

    updateEplTable = (): Observable<string> => {
        return this.http.get(this.actionUrl + "updateTable/").map((res: Response) => res.text());
    };

    getEplTable = (): Observable<string> => {
        return this.http.get(this.actionUrl + "helper/").map((res: Response) => res.text());
    };
}