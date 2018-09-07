import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pageable } from "@app/shared";
import { HttpWrapper } from "@app/+httpWrapper";
import { Transfer } from "@app/transfer/model";
import { TRANSFERS_ROUTE } from "@app/+constants";

@Injectable()
export class TransferService {
    private actionUrl: string = TRANSFERS_ROUTE + "/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(page: number): Observable<Pageable<Transfer>> {
        return this.http.get<Pageable<Transfer>>(this.actionUrl + `?page=${page}`);
    };

    public getCurrentAll(): Observable<Transfer[]> {
        return this.http.get<Transfer[]>(this.actionUrl + `current`);   
    };

    public getSingle(id: number): Observable<Transfer> {
        return this.http.get<Transfer>(this.actionUrl + id);
    };
    
    public create(item: Transfer): Observable<Transfer> {
        return this.http.post<Transfer>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Transfer): Observable<Transfer> {
        console.debug(itemToUpdate);
        return this.http.put<Transfer>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };
}