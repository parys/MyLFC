import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../../app.constants";
import { HttpWrapper } from "../../shared/index";
import { ForumMessage } from "./forumMessage.model";

@Injectable()
export class ForumMessageService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "forumMessage/";
    }

    // getAll = (): Observable<ForumMessage[]> => {
    //    return this.http.get(this.actionUrl + "list/").map((res: Response) => res.json());
    // };

    // getSingle = (id: number): Observable<ForumMessage> => {
    //    return this.http.get(this.actionUrl + id).map((res: Response) => res.json());
    // };

    // getSingleWithMessages = (id: number, page: number): Observable<ForumMessage> => {
    //    return this.http.get(`${this.actionUrl}${id}/${page}`).map((res: Response) => res.json());
    // };

    create = (item: ForumMessage): Observable<ForumMessage> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map((res: Response) => res.json());
    };

     update = (id: number, itemToUpdate: ForumMessage): Observable<ForumMessage> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map((res: Response) => res.json());
    };

     delete = (id: number): Observable<boolean> => {
         return this.http.delete(`${this.actionUrl}/${id}`).map((res: Response) => res.json());
     };
}