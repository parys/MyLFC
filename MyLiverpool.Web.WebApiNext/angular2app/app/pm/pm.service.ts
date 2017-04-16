import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/httpWrapper";
import { Pm } from "./index";

@Injectable()
export class PmService {
    private actionUrl: string = "pm/";

    constructor(private http: HttpWrapper) {
    }

    getAll = (): Observable<Pm[]> => {
        return this.http.get(this.actionUrl ).map(res => res.json());
    };

    getSingle = (id: number): Observable<Pm> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    create = (item: Pm): Observable<Pm> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: Pm): Observable<Pm> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };
}