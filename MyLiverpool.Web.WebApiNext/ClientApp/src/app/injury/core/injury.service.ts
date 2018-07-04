import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pageable } from "@app/shared";
import { HttpWrapper } from "@app/+httpWrapper";
import { Injury, InjuryFilters } from "../model";

@Injectable()
export class InjuryService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "injuries/";
    }

    public getAll(filters: InjuryFilters): Observable<Pageable<Injury>> {
        return this.http.get<Pageable<Injury>>(this.actionUrl + `?filters=${encodeURIComponent(JSON.stringify(filters))}`);
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