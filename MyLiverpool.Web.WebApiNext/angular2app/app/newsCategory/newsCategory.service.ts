import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { NewsCategory } from "./NewsCategory.model";
import { HttpWrapper } from "../shared/httpWrapper";

@Injectable()
export class NewsCategoryService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "newsCategory/";
    }

    getAll = (): Observable<NewsCategory[]> => {
        return this.http.get(this.actionUrl).map((response: Response) => response.json());
    };

    getSingle = (id: number): Observable<NewsCategory> => {
        return this.http.get(this.actionUrl + id).map((response: Response) => response.json());
    };

    create = (item: NewsCategory): Observable<NewsCategory> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((response: Response) => response.json());
    };

    update = (id: number, itemToUpdate: NewsCategory): Observable<NewsCategory> => {
        return this.http.put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((response: Response) => response.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((response: Response) => response.json());
    };
}