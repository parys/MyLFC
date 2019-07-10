import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/+httpWrapper";
import { Season, PersonStatistics, SeasonFilters, SeasonFiltersOld } from "../model";
import { SEASONS_ROUTE } from "@app/+constants";
import { BaseRestService } from "@app/+infrastructure";
import { PagedList } from '@app/shared';

@Injectable()
export class SeasonService extends BaseRestService<Season, SeasonFiltersOld> {
    private actionUrl: string = SEASONS_ROUTE + "/";

    constructor(public http: HttpWrapper) {
        super(http, SEASONS_ROUTE + "/");
    }

    public getAllNew(filters: SeasonFilters | any): Observable<PagedList<Season>> {
        return this.http.getWithParams<PagedList<Season>>(this.actionUrl, filters);
    };

    public getAllWithoutFilter(): Observable<PagedList<Season>> {
        return this.http.get<PagedList<Season>>(`${this.actionUrl}`);
    };
    
    public getSingleWithMatches(seasonId: number): Observable<Season> {
        return this.http.get<Season>(`${this.actionUrl}getWithMatches/${seasonId}`);
    }

    public getSingleCalendarWithMatches(seasonId: number): Observable<Season> {
        return this.http.get<Season>(`${this.actionUrl}${seasonId}/calendar`);
    }

    public getStatistics(seasonId: number): Observable<PersonStatistics[]> {
        return this.http.get<PersonStatistics[]>(`${this.actionUrl}${seasonId}/statistics`);
    }

    public setAsCurrent(id: number): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + id + "/setAsCurrent", "");
    };
}