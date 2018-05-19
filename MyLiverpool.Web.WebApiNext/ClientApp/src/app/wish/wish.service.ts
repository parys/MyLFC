import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper, Pageable } from "@app/shared";
import { Wish } from "./wish.model";
import { WishType } from "./wishType.model";
import { WishState } from "./wishState.model";

@Injectable()
export class WishService {
    private actionUrl: string = "wish/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(page: number): Observable<Pageable<Wish>> {
        return this.http.get<Pageable<Wish>> (`${this.actionUrl}list?page=${page}`);
    };

    public getSingle(id: number): Observable<Wish> {
        return this.http.get<Wish>(this.actionUrl + id);
    };

    public create(item: Wish): Observable<Wish> {
        return this.http.post<Wish> (this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Wish): Observable<Wish> {
        return this.http.put<Wish> (this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public getTypes(): Observable<WishType[]> {
        return this.http.get<WishType[]>(this.actionUrl + "types/");
    };

    public getStates(): Observable<WishState[]> {
        return this.http.get<WishState[]> (this.actionUrl + "states/");
    };
}