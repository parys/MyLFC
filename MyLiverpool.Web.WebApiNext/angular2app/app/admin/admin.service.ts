import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";

@Injectable()
export class AdminService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "admin/";
    }

    updateEplTable = (): Observable<boolean> => {
        return this.http.get(this.actionUrl + "updateTable/").map(res => res.json());
    };
}