import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper, Pageable } from "@app/shared";
import { Person } from "./person.model";
import { SquadList } from "./squad-list.model";
import { PersonType } from "./personType.model";
import { PersonFilters } from "./personFilters.model";

@Injectable()
export class PersonService {
    private actionUrl: string = "person/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(filters: PersonFilters): Observable<Pageable<Person>> {
        return this.http.get<Pageable<Person>>(this.actionUrl + `list/${encodeURIComponent(JSON.stringify(filters))}`);
    };

    public getListByName(typed: string): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.actionUrl}getPersonsByName?typed=${typed}`);
    };

    public getSingle(id: number): Observable<Person> {
        return this.http.get<Person>(this.actionUrl + id);
    };

    public getBestPlayer(): Observable<Person> {
        return this.http.get<Person>(this.actionUrl + "bestPlayer/");
    };

    public setBestPlayer(personId: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.actionUrl}bestPlayer/${personId}`, "");
    };

    public create(item: Person): Observable<Person> {
        return this.http.post<Person>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: Person): Observable<Person> {
        return this.http.put<Person>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public getBirthdays(): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.actionUrl}birthdays`);
    };

    public getTypes(): Observable<PersonType[]> {
        return this.http.get<PersonType[]>(this.actionUrl + "types/");
    };

    public getStuff(type: string): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.actionUrl}stuff?type=${type}`);
    };

    public getSquad(type:string): Observable<SquadList> {
        return this.http.get<SquadList>(`${this.actionUrl}squad?type=${type}`);
    };

    public updatePhoto(name: string, file: File): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post<Object>(`${this.actionUrl}photo/${name}`, formData, true);
    };
}