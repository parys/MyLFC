import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { StorageService } from "./storage.service";
import { ChatMessage, Comment } from "@app/+common-models";
import { Pm } from "@app/pm/model"
import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { Notification } from "@app/notification/model";

@Injectable()
export class SignalRService {
    private hubConnection: HubConnection;
    private alreadyStarted: boolean = false;
    public chatSubject: Subject<ChatMessage> = new Subject<ChatMessage>();
    public onlineSubject: Subject<ChatMessage> = new Subject<any>();
    public lastCommentsSubject: Subject<Comment> = new Subject<Comment>();
    public readPm: Subject<boolean> = new Subject<boolean>();
    public newPm: Subject<Pm> = new Subject<Pm>();
    public newNotify: Subject<Notification> = new Subject<Notification>();
    public readNotify: Subject<number> = new Subject<number>();

    constructor(private storage: StorageService,
        @Inject("BASE_URL") private baseUrl: string) {
    }

    public initializeHub(): void {
        let hubUrl = "anonym";

        const token = this.storage.getAccessToken();
        if (token) {
            hubUrl = "auth";
        }
        const options = {
            accessTokenFactory() { return token; },
        };

        if (this.alreadyStarted) {
            this.alreadyStarted = false;
            this.hubConnection.stop();
        }

        this.hubConnection = new HubConnectionBuilder()
            .withUrl(`${this.baseUrl}hubs/${hubUrl}`, options)
         //   .withHubProtocol(new MessagePackHubProtocol())
            .configureLogging(LogLevel.Error)
            .build();
        this.hubConnection.on("updateChat", (data: ChatMessage) => {
            this.chatSubject.next(data);
        });
        this.hubConnection.on("updateOnline", (data: any) => {
            this.onlineSubject.next(data);
        });
        this.hubConnection.on("addComment", (data: Comment) => {
            this.lastCommentsSubject.next(data);
        });
        this.hubConnection.on("updateComment", (data: Comment) => {
            this.lastCommentsSubject.next(data);
        });
        if (token) {
            this.hubConnection.on("readPm",
                (data: boolean) => {
                    this.readPm.next(data);
                });
            this.hubConnection.on("newPm",
                (data: Pm) => {
                    this.newPm.next(data);
                });
            this.hubConnection.on("newNotify",
                (data: Notification) => {
                    this.newNotify.next(data);
                });
            this.hubConnection.on("readNotify",
                (data: number) => {
                    this.readNotify.next(data);
                });
        }

        this.hubConnection.start()
            .then(() => {
                this.alreadyStarted = true;
            })
            .catch((err: Error) => {
                console.error(err);
            });

        this.hubConnection.onclose(() => {
            this.initializeHub();
            console.warn("RECONNECT");
        });
    }
}