import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/httpWrapper";
import { Wish, WishType } from "./index";
import { Pageable } from "../shared/pageable.model";

@Injectable()
export class WishService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "wish/";
    }

    getAll = (): Observable<Pageable<Wish>> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());
    };

    getSingle = (id: number): Observable<Wish> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    create = (item: Wish): Observable<Wish> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: Wish): Observable<Wish> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    getTypes = (): Observable<WishType[]> => {
        return this.http.get(this.actionUrl + "types/").map(res => res.json());
    };
}