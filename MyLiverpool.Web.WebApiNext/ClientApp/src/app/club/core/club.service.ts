import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { Club, ClubFilters } from "../model";
import { CLUBS_ROUTE } from "../../routes.constants";
import { BaseRestService } from "@app/+infrastructure";

@Injectable()
export class ClubService extends BaseRestService<Club, ClubFilters> {
    private actionUrl: string = CLUBS_ROUTE + "/";

    constructor(public http: HttpWrapper) {
        super(http, CLUBS_ROUTE + "/");
    }

    public getListByName(typed: string): Observable<Club[]> {
        return this.http.get<Club[]>(`${this.actionUrl}getClubsByName?typed=${typed}`); //todo use common list with filter
    };

    public uploadLogo(file: File, fileName: string): Observable<Object> {
        let formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post<Object>(`${this.actionUrl}logo/${fileName}`, formData, true);
    };
}