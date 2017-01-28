import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper, Pageable } from "../shared/index";
import { Person } from "./person.model";
import { PersonType } from "./personType.model";

@Injectable()
export class PersonService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "person/";
    }

    getAll = (page: number): Observable<Pageable<Person>> => {
        return this.http.get(this.actionUrl + `list/${page}`).map((res: Response) => res.json());
    };

    getSingle = (id: number): Observable<Person> => {
        return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    };

    create = (item: Person): Observable<Person> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

    update = (id: number, itemToUpdate: Person): Observable<Person> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map((res: Response) => res.json());
    };

    getTypes = (): Observable<PersonType[]> => {
        return this.http.get(this.actionUrl + "types/").map((res: Response) => res.json());
    };

    updatePhoto = (name: string, file: File): Observable<string> => {
        let formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        return this.http.post(`${this.actionUrl}photo/${name}`, formData, true).map((response: Response) => response.text());
    };
}