import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper, Pageable } from "../shared/index";
import { ChatMessage } from "./chatMessage.model";

@Injectable()
export class ChatMessageService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + "chatMessage/";
    }

    getAll = (): Observable<ChatMessage[]> => {
        return this.http.get(this.actionUrl + `list/`).map(res => res.json());
    };

    getSingle = (id: number): Observable<ChatMessage> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    create = (item: ChatMessage): Observable<ChatMessage> => {
        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: ChatMessage): Observable<ChatMessage> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };
}