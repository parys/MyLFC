import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/httpWrapper";
import { Season } from "./season.model";

@Injectable()
export class SeasonService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "season/";
    }

    getAll = (): Observable<Season[]> => {
        return this.http.get(`${this.actionUrl}list/`).map((response: Response) => response.json());
    };
}