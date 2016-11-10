import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
import { ForumSection } from "./forumSection.model";

@Injectable()
export class ForumSectionService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "forumSection/";
    }

    getAll = (): Observable<ForumSection[]> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());
     };

    // public GetSingle = (id: number): Observable<News> => {
    //    return this.http.get(this.actionUrl + id).map(res => res.json());
    // };

  //  create = (item: ForumSection): Observable<Signup> => {
  //      return this.http.post(this.actionUrl + "register/", JSON.stringify(item)).map(res => res.json());
 //   };

    // confirmEmail = (userId: number, code: string): Observable<boolean> => {
    //    return this.http.get(this.actionUrl + `confirmEmail?userId=${userId}&code=${code}`).map(res => res.json());
    // };
}