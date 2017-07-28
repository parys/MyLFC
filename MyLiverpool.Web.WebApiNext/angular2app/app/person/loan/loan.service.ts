import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpWrapper, Pageable } from "../../shared/index";
import { Loan } from "./loan.model";

@Injectable()
export class LoanService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "loan/";
    }

    public getAll = (page: number): Observable<Pageable<Loan>> => {
        return this.http.get(this.actionUrl + `list/${page}`).map((res: Response) => res.json());
    };

    public getSingle = (id: number): Observable<Loan> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    public create = (item: Loan): Observable<Loan> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    public update = (id: number, itemToUpdate: Loan): Observable<Loan> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    public delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };
}