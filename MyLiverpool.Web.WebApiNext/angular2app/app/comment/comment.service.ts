import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Comment } from "./comment.model";
import { CommentVote } from "./commentVote.model";
import { CommentFilter } from "./commentFilter.model";
import { HttpWrapper, Pageable } from "@app/shared";

@Injectable()
export class CommentService {
    private actionUrl: string = "comment/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(filters: CommentFilter): Observable<Pageable<Comment>> {
        return this.http.get<Pageable<Comment>>(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)));
    };

    public getLastList(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.actionUrl + "list/last");
    };

    public getAllByMaterial(page: number, id: number): Observable<Pageable<Comment>> {
        return this.http.get<Pageable<Comment>>(`${this.actionUrl}material/${id}/list/${page}`);
    };

    public getAllByMatch(page: number, id: number): Observable<Pageable<Comment>> {
        return this.http.get<Pageable<Comment>>(`${this.actionUrl}match/${id}/list/${page}`);
    };

    public getSingle(id: number): Observable<Comment> {
        return this.http.get<Comment>(this.actionUrl + id);
    };

    public create(item: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Comment): Observable<Comment> {
        return this.http.put<Comment>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public verify(id: number): Observable<boolean> {
        return this.http.get<boolean>(this.actionUrl + "verify/" + id);
    };

    public vote(vote: CommentVote): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + "vote/", JSON.stringify(vote));
    };
}