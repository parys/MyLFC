import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { News } from "./news.model";
import { Pageable } from "../shared/pageable.model";
import { HttpWrapper } from "../shared/httpWrapper";
import { MaterialFilters } from "./newsFilters.model";

@Injectable()
export class NewsService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "material/";
    }

    GetAll = (filters:MaterialFilters): Observable<Pageable<News>> => {
        return this.http.get(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(res => res.json());
    };

    GetSingle = (id: number): Observable<News> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    Create = (item: News): Observable<News> => {
       // var toAdd = JSON.stringify({ ItemName: item });
        return this.http.post(this.actionUrl + "News/", JSON.stringify(item)).map(res => res.json());
    };

    Update = (id: number, itemToUpdate: News): Observable<News> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    Delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    addView = (id: number): Observable<boolean> => {
        return this.http.get(this.actionUrl + "addView/" + id).map(res => res.json());
    };

    activate = (id: number): Observable<boolean> => {
        return this.http.get(this.actionUrl + "activate/" + id).map(res => res.json());
    };
}