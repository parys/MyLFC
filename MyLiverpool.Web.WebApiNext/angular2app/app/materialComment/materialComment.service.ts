import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Comment as MaterialComment } from "./materialComment.model";
import { CommentVote } from "./commentVote.model";
import { MaterialCommentFilter } from "./materialCommentFilter.model";
import { Pageable } from "../shared/pageable.model";
import { HttpWrapper } from "../shared/httpWrapper";

@Injectable()
export class MaterialCommentService {

    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "materialComment/";
    }

    public getAll(filters: MaterialCommentFilter): Observable<Pageable<MaterialComment>> {
        return this.http.get<Pageable<MaterialComment>>(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)));
    };

    public getLastList(): Observable<MaterialComment[]> {
        return this.http.get<MaterialComment[]>(this.actionUrl + "list/last");
    };

    public getAllByMaterial(page: number, id: number): Observable<Pageable<MaterialComment>> {
        return this.http.get<Pageable<MaterialComment>>(`${this.actionUrl}material/${id}/list/${page}`);
    };

    public getAllByMatch(page: number, id: number): Observable<Pageable<MaterialComment>> {
        return this.http.get<Pageable<MaterialComment>>(`${this.actionUrl}match/${id}/list/${page}`);
    };

    public getSingle(id: number): Observable<MaterialComment> {
        return this.http.get<MaterialComment>(this.actionUrl + id);
    };

    public create(item: MaterialComment): Observable<MaterialComment> {
        return this.http.post<MaterialComment>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: MaterialComment): Observable<MaterialComment> {
        return this.http.put<MaterialComment>(this.actionUrl + id, JSON.stringify(itemToUpdate));
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