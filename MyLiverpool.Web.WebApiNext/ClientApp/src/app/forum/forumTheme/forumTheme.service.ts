import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { ForumTheme } from "./forumTheme.model";

@Injectable()
export class ForumThemeService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "forumTheme/";
    }

    public getAll(): Observable<ForumTheme[]> {
        return this.http.get<ForumTheme[]>(this.actionUrl + "list/");
    };

    public getSingle(id: number): Observable<ForumTheme> {
        return this.http.get<ForumTheme> (this.actionUrl + id);
    };

    public getSingleWithMessages(id: number, page: number): Observable<ForumTheme> {
        return this.http.get<ForumTheme>(`${this.actionUrl}${id}/${page}`);
    };

    public create(item: ForumTheme): Observable<ForumTheme> {
        return this.http.post<ForumTheme>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: ForumTheme): Observable<ForumTheme> {
        return this.http.put<ForumTheme> (this.actionUrl + id, JSON.stringify(itemToUpdate));
    };
}