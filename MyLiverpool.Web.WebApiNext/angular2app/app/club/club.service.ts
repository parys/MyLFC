import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper, Pageable } from "../shared/index";
import { Club } from "./club.model";

@Injectable()
export class ClubService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "club/";
    }

    public getAll = (page: number): Observable<Pageable<Club>> => {
        return this.http.get<Pageable<Club>>(this.actionUrl + `list/${page}`);
    };

    public getSingle = (id: number): Observable<Club> => {
        return this.http.get<Club>(this.actionUrl + id);
    };

    public create = (item: Club): Observable<Club> => {
        return this.http.post<Club>(this.actionUrl, JSON.stringify(item));
    };

    public update = (id: number, itemToUpdate: Club): Observable<Club> => {
        return this.http
            .put<Club>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete = (id: number): Observable<boolean> => {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public getByName = (typed: string): Observable<Club[]> => {
        return this.http.get<Club[]>(`${this.actionUrl}getClubsByName/${typed}`);
    };

    public uploadLogo = (file: File, fileName: string): Observable<Object> => {
        let formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post<Object>(`${this.actionUrl}logo/${fileName}`, formData, true);
    };
}