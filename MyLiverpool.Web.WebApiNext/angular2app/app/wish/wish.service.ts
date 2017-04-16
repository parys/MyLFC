import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "../shared/httpWrapper";
import { Wish } from "./wish.model";
import { WishType } from "./wishType.model";
import { Pageable } from "../shared/pageable.model";

@Injectable()
export class WishService {
    private actionUrl: string = "wish/";

    constructor(private http: HttpWrapper) {
    }

    getAll = (page: number): Observable<Pageable<Wish>> => {
        return this.http.get(`${this.actionUrl}list?page=${page}`).map((res: Response) => res.json());
    };

    getSingle = (id: number): Observable<Wish> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    create = (item: Wish): Observable<Wish> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    update = (id: number, itemToUpdate: Wish): Observable<Wish> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };

    getTypes = (): Observable<WishType[]> => {
        return this.http.get(this.actionUrl + "types/").map((res: Response) => res.json());
    };
}