import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pageable } from "@app/shared";
import { HttpWrapper } from "@app/+httpWrapper";
import { Stadium } from "../model";
import { STADIUMS_ROUTE } from "@app/+constants";

@Injectable()
export class StadiumService {
    private actionUrl: string = STADIUMS_ROUTE + "/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(page: number): Observable<Pageable<Stadium>> {
        return this.http.get<Pageable<Stadium>>(this.actionUrl + `?page=${page}`);
    };
    
    public getListByName(typed: string): Observable<Stadium[]> {
        return this.http.get<Stadium[]>(this.actionUrl + `getListByName?typed=${typed}`);//todo combine with list
    };

    public getSingle(id: number): Observable<Stadium> {
        return this.http.get<Stadium>(this.actionUrl + id);
    };

    public create(item: Stadium): Observable<Stadium> {
        return this.http.post<Stadium>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Stadium): Observable<Stadium> {
        return this.http.put<Stadium>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };
}