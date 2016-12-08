import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
import { ForumTheme } from "./forumTheme.model";

@Injectable()
export class ForumThemeService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "forumTheme/";
    }

    getAll = (): Observable<ForumTheme[]> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());
    };

    getSingle = (id: number): Observable<ForumTheme> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    getSingleWithMessages = (id: number, page: number): Observable<ForumTheme> => {
        return this.http.get(`${this.actionUrl}${id}/${page}`).map(res => res.json());
    };

    create = (item: ForumTheme): Observable<ForumTheme> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: ForumTheme): Observable<ForumTheme> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };
}