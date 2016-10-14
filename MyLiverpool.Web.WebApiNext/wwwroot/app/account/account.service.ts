import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
import { Signup } from "./signup.model";

@Injectable()
export class AccountService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "account/";
    }

    // public GetAll = (): Observable<Pageable<News>> => {
    //    return this.http.get(this.actionUrl + "list/").map(res => res.json());
    // };

    // public GetSingle = (id: number): Observable<News> => {
    //    return this.http.get(this.actionUrl + id).map(res => res.json());
    // };

    create = (item: Signup): Observable<Signup> => {
        return this.http.post(this.actionUrl + "register/", JSON.stringify(item)).map(res => res.json());
    };

    // public Update = (id: number, itemToUpdate: News): Observable<News> => {
    //    // var toUpdate = 
    //    return this.http
    //        .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
    //        .map(res => res.json());
    // };
}