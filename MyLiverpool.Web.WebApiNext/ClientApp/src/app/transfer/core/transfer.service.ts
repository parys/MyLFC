import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper, Pageable } from "@app/shared";
import { Transfer } from "@app/transfer/model";

@Injectable()
export class TransferService {
    private actionUrl: string = "transfer/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(page: number): Observable<Pageable<Transfer>> {
        return this.http.get<Pageable<Transfer>>(this.actionUrl + `list?page=${page}`);
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