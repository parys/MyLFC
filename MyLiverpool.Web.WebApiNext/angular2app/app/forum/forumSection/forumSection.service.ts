import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpWrapper } from "@app/shared";
import { ForumSection } from "./forumSection.model";

@Injectable()
export class ForumSectionService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "forumSection/";
    }

    public getAll(): Observable<ForumSection[]> {
        return this.http.get<ForumSection[]>(this.actionUrl + "list/");
    };

    // public GetSingle = (id: number): Observable<News> => {
    //    return this.http.get(this.actionUrl + id).map(res => res.json());
    // };

  //  create = (item: ForumSection): Observable<Signup> => {
  //      return this.http.post(this.actionUrl + "register/", JSON.stringify(item)).map(res => res.json());
 //   };
}