import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/shared";
import { ForumSubsection } from "./forumSubsection.model";

@Injectable()
export class ForumSubsectionService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "forumSubsection/";
    }

    public getAll(): Observable<ForumSubsection[]> {
        return this.http.get<ForumSubsection[]>(this.actionUrl + "list/");
    };

    public getSingle(id: number): Observable<ForumSubsection> {
        return this.http.get<ForumSubsection>(this.actionUrl + id);
    };

    public getSingleWithThemes(id: number, page: number): Observable<ForumSubsection> {
        return this.http.get<ForumSubsection>(`${this.actionUrl}${id}/${page}`);
    };

    public create(item: ForumSubsection): Observable<ForumSubsection> {
        return this.http.post<ForumSubsection>(this.actionUrl, JSON.stringify(item));
    };

    public update = (id: number, itemToUpdate: ForumSubsection): Observable<ForumSubsection> => {
        return this.http.put<ForumSubsection>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };
}