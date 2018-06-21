import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper, Pageable } from "@app/shared";
import { Injury } from "../model";

@Injectable()
export class InjuryService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "injury/";
    }

    public getAll(page: number): Observable<Pageable<Injury>> {
        return this.http.get<Pageable<Injury>>(this.actionUrl + `list/${page}`);
    };

    public getSingle(id: number): Observable<Injury> {
        return this.http.get<Injury>(this.actionUrl + id);
    };

    public create(item: Injury): Observable<Injury> {
        return this.http.post<Injury>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Injury): Observable<Injury> {
        return this.http.put<Injury>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public getCurrentAll(): Observable<Injury[]> {
        return this.http.get<Injury[]>(this.actionUrl + `current`);
    };
}