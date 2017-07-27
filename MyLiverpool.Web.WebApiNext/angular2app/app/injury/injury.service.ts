import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpWrapper, Pageable } from "../shared/index";
import { Injury } from "./injury.model";

@Injectable()
export class InjuryService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "injury/";
    }

    public getAll = (page: number): Observable<Pageable<Injury>> => {
        return this.http.get(this.actionUrl + `list/${page}`).map((res: Response) => res.json());
    };

    public getSingle = (id: number): Observable<Injury> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    public create = (item: Injury): Observable<Injury> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    public update = (id: number, itemToUpdate: Injury): Observable<Injury> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    public delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };

    public getCurrentAll = (): Observable<Injury[]> => {
        return this.http.get(this.actionUrl + `current`).map((res: Response) => res.json());
    };
}