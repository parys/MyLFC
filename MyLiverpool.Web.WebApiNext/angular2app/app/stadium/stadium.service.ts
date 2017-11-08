import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper, Pageable } from "@app/shared";
import { Stadium } from "./stadium.model";

@Injectable()
export class StadiumService {
    private actionUrl: string = "stadium/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(page: number): Observable<Pageable<Stadium>> {
        return this.http.get<Pageable<Stadium>>(this.actionUrl + `list?page=${page}`);
    };
    
    public getListByName(typed: string): Observable<Stadium[]> {
        return this.http.get<Stadium[]>(this.actionUrl + `getListByName?typed=${typed}`);
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