import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper, Pageable } from "../shared/index";
import { Club } from "./club.model";

@Injectable()
export class ClubService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "club/";
    }

    getAll = (page): Observable<Pageable<Club>> => {
        return this.http.get(this.actionUrl + `list/${page}`).map((res: Response) => res.json());
    };

    getSingle = (id: number): Observable<Club> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    create = (item: Club): Observable<Club> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    update = (id: number, itemToUpdate: Club): Observable<Club> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };

    getByName = (typed: string): Observable<Club[]> => {
        return this.http.get(this.actionUrl + `/getClubsByName/${typed}`).map((res: Response) => res.json());
    };
}