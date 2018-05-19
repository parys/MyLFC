import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/shared";
import { ChatMessage } from "./chatMessage.model";

@Injectable()
export class ChatMessageService {
    private actionUrl: string = "chatMessage/";

    constructor(private http: HttpWrapper) {
    }

    public getAll(lastId: number, typeId: number): Observable<ChatMessage[]> {
        return this.http.get<ChatMessage[]>(this.actionUrl + `list/`+ lastId + "/" + typeId);
    };

    public getSingle(id: number): Observable<ChatMessage> {
        return this.http.get<ChatMessage>(this.actionUrl + id);
    };

    public create(item: ChatMessage): Observable<ChatMessage> {
        return this.http.post<ChatMessage>(this.actionUrl, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: ChatMessage): Observable<ChatMessage> {
        return this.http
            .put<ChatMessage>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete = (id: number): Observable<boolean> => {
        return this.http.delete<boolean>(this.actionUrl + id);
    };
}