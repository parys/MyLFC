import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/httpWrapper";
import { Wish, WishType } from "./index";
import { Pageable } from "../shared/pageable.model";

@Injectable()
export class WishService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "wish/";
    }

    public GetAll = (): Observable<Pageable<Wish>> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());
    };

    public GetSingle = (id: number): Observable<Wish> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    public Create = (item: Wish): Observable<Wish> => {
        // var toAdd = JSON.stringify({ ItemName: item });
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    public Update = (id: number, itemToUpdate: Wish): Observable<Wish> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    public Delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    public GetTypes = (): Observable<WishType[]> => {
        return this.http.get(this.actionUrl + "types/").map(res => res.json());
    };
}