import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { StorageService } from "./storage.service";
import { ChatMessage } from "@app/+common-models";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

@Injectable()
export class SignalRService {
    private hubConnection: HubConnection;
    private alreadyStarted: boolean = false;
    public chatSubject: Subject<ChatMessage>;
    public onlineSubject: Subject<ChatMessage>;

    constructor(
        private storage: StorageService,
        @Inject("BASE_URL") private baseUrl: string) {
        this.initializeHub();
        this.initSubs();
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

        this.hubConnection.start()
            .then(() => {
                this.alreadyStarted = true;
            })
            .catch((err: Error) => {
                console.error(err);
            });
    }

    private initSubs(): void {
        this.chatSubject = new Subject<ChatMessage>();
        this.onlineSubject = new Subject<any>();
    }
}