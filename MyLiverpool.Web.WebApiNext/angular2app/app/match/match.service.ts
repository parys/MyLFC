import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Match } from "./match.model";
import { MatchType } from "./matchType.model";
import { Pageable } from "../shared/pageable.model";
import { HttpWrapper } from "../shared/httpWrapper";

@Injectable()
export class MatchService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "match/";
    }

    getAll = (page: number): Observable<Pageable<Match>> => {
        return this.http.get(this.actionUrl + "list?page=" + page).map((res: Response) => res.json());
    };

    getForCalendar = (): Observable<Match[]> => {
        return this.http.get(this.actionUrl + "getForCalendar").map((res: Response) => res.json());
    };

    getSingle = (id: number): Observable<Match> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    create = (item: Match): Observable<Match> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    update = (id: number, itemToUpdate: Match): Observable<Match> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    updateScore = (id: number, score: string): Observable<Match> => {
        return this.http
            .put(`${this.actionUrl}updateScore?id=${id}&score=${score}`, null)
            .map((res: Response) => res.json());
    };

     getTypes = (): Observable<MatchType[]> => {
        return this.http.get(this.actionUrl + "getTypes/")
            .map((res: Response) => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };
}