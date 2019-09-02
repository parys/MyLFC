import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { ChatMessage } from '@domain/models';
import { CHAT_MESSAGES_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';

import { ChatFilters } from '@domain/models';

@Injectable()
export class ChatMessageService extends BaseRestService<ChatMessage, ChatFilters> {
    private actionUrl: string = CHAT_MESSAGES_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, CHAT_MESSAGES_ROUTE + '/');
    }

    public getLatest(lastId: number, typeId: number): Observable<ChatMessage[]> {
        return this.http.get<ChatMessage[]>(this.actionUrl + `list/` + lastId + '/' + typeId);
    }
}
