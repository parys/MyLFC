import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MatchPerson } from "./matchPerson.model";
import { HttpWrapper } from "@app/+httpWrapper";
import { MatchPersonType } from "./matchPersonType.model";
import { MATCH_PERSONS_ROUTE, MATCHES_ROUTE } from "@app/+constants";

@Injectable()
export class MatchPersonService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATCH_PERSONS_ROUTE + "/";
    }

    public getMatchPersons(matchId: number): Observable<MatchPerson[]> {
        return this.http.get<MatchPerson[]>(`${MATCHES_ROUTE}/${matchId}/persons`);
    };

    public create(item: MatchPerson): Observable<MatchPerson> {
        return this.http.post<MatchPerson>(this.actionUrl, JSON.stringify(item));
    };

    public update( itemToUpdate: MatchPerson): Observable<MatchPerson> {
        return this.http.put<MatchPerson>(this.actionUrl, JSON.stringify(itemToUpdate));
    };

    public getTypes(): Observable<MatchPersonType[]> {
        return this.http.get<MatchPersonType[]>(this.actionUrl + "getTypes/");
    };
    
    public delete(matchId: number, personId: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + matchId + "/" + personId);
    };
}