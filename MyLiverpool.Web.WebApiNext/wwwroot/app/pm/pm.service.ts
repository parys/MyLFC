import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/httpWrapper";
import { Pm } from "./index";


@Injectable()
export class PmService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "pm/";
    }

    public GetAll = (): Observable<Pm[]> => {
        return this.http.get(this.actionUrl ).map(res => res.json());
    };

    public GetSingle = (id: number): Observable<Pm> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    public Create = (item: Pm): Observable<Pm> => {
        var toAdd = JSON.stringify({ ItemName: item });
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    public Update = (id: number, itemToUpdate: Pm): Observable<Pm> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    public Delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}