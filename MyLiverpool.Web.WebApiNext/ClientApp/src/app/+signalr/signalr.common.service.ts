import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpWrapper } from "@app/shared";
import { ChatMessage } from "./chatMessage.model";

@Injectable()
export class ChatMessageService {
    private actionUrl: string = "chatMessage/";

    constructor(private http: HttpWrapper) {
    }

}