import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";

@Injectable()
export class AdminService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "admin/";
    }

    // public GetAll = (): Observable<Pageable<News>> => {
    //    return this.http.get(this.actionUrl + "list/").map(res => res.json());
    // };

    // public GetSingle = (id: number): Observable<News> => {
    //    return this.http.get(this.actionUrl + id).map(res => res.json());
    // };

    updateEplTable = (): Observable<boolean> => {
        return this.http.get(this.actionUrl + "updateTable/").map(res => res.json());
    };
}