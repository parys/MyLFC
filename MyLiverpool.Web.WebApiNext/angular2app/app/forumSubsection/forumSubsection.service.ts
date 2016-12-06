import { Injectable } from "@angular/core";  
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
import { ForumSubsection } from "./forumSubsection.model";

@Injectable()
export class ForumSubsectionService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "forumSubsection/";
    }

    getAll = (): Observable<ForumSubsection[]> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());
    };

    getSingle = (id: number): Observable<ForumSubsection> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    getSingleWithThemes = (id: number, page: number): Observable<ForumSubsection> => {
        return this.http.get(`${this.actionUrl}/${id}/${page})`).map(res => res.json());
    };

    create = (item: ForumSubsection): Observable<ForumSubsection> => {
          return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: ForumSubsection): Observable<ForumSubsection> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };
}