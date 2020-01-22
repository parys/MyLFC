import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { Subject } from 'rxjs';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

import { StorageService } from '@base/storage';
import { ChatMessage, Comment, UsersOnline, Pm, Notification, MatchPerson, MatchEvent } from '@domain/models';
// import { MessagePackHubProtocol } from "@aspnet/signalr-protocol-msgpack";
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class SignalRService {
    private hubConnection: HubConnection;
    private alreadyStarted = false;
    public chatSubject: Subject<ChatMessage> = new Subject<ChatMessage>();
    public onlineSubject: Subject<UsersOnline> = new Subject<UsersOnline>();
    public lastCommentsSubject: Subject<Comment> = new Subject<Comment>();
    public readPm: Subject<boolean> = new Subject<boolean>();
    public newPm: Subject<Pm> = new Subject<Pm>();
    public newNotify: Subject<Notification> = new Subject<Notification>();
    public readNotify: Subject<number> = new Subject<number>();
    public newComment: Subject<Comment> = new Subject<Comment>();
    public matchPerson: Subject<MatchPerson> = new Subject<MatchPerson>();
    public matchEvent: Subject<MatchEvent> = new Subject<MatchEvent>();

    constructor(private storage: StorageService,
                @Inject(PLATFORM_ID) private platformId: object) {
    }

    public initializeHub(): void {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        let hubUrl = 'anonym';

        const token = this.storage.getAccessToken();
        if (token) {
            hubUrl = 'auth';
        }
        const options = {
            accessTokenFactory() { return token; },
        };

        if (this.alreadyStarted) {
            this.alreadyStarted = false;
            this.hubConnection.stop();
        }

        this.hubConnection = new HubConnectionBuilder()
            .withUrl(`${environment.apiUrl}hubs/${hubUrl}`, options)
          //  .withHubProtocol(new MessagePackHubProtocol())
            .configureLogging(LogLevel.Error)
            .build();
        this.hubConnection.on('updateChat', (data: ChatMessage) => {
            this.chatSubject.next(data);
        });
        this.hubConnection.on('updateOnline', (data: UsersOnline) => {
            this.onlineSubject.next(data);
        });
        this.hubConnection.on('addComment', (data: Comment) => {
            this.lastCommentsSubject.next(data);
        });
        this.hubConnection.on('updateComment', (data: Comment) => {
            this.lastCommentsSubject.next(data);
        });
        this.hubConnection.on('addMp', (data: any) => {
            this.matchPerson.next(data);
        });
        this.hubConnection.on('addMe', (data: MatchEvent) => {
            this.matchEvent.next(data);
        });
        this.hubConnection.on('newComment', (data: Comment) => {
            data.children = data.children || [];
            this.newComment.next(data);
        });
        if (token) {
            this.hubConnection.on('readPm',
                (data: boolean) => {
                    this.readPm.next(data);
                });
            this.hubConnection.on('newPm',
                (data: Pm) => {
                    this.newPm.next(data);
                });
            this.hubConnection.on('newNotify',
                (data: Notification) => {
                    this.newNotify.next(data);
                });
            this.hubConnection.on('readNotify',
                (data: number) => {
                    this.readNotify.next(data);
                });
        }

        this.hubConnection.start()
            .then(() => {
                this.alreadyStarted = true;
            })
            .catch((err: Error) => {
               // console.error(err);
            });
    }
}
