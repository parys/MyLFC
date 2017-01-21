import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";

@Injectable()
export class AdminService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "admin/";
    }

    updateEplTable = (): Observable<string> => {
        return this.http.get(this.actionUrl + "updateTable/").map((res: Response) => res.text());
    };

    getEplTable = (): Observable<string> => {
        return this.http.get(this.configuration.serverWithApiUrl + "helper/").map((res: Response) => res.text());
    };
}