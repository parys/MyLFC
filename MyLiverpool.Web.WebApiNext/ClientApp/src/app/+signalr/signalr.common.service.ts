//import { Injectable, Inject } from "@angular/core";
//import { Subject } from "rxjs";
//import { StorageService } from "@app/shared";
//import { ChatMessage } from "@app/+common-models";
//import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

//@Injectable()
//export class SignalRService {
//    private hubConnection: HubConnection;
//    public chatSubject: Subject<ChatMessage>;
//    public onlineSubject: Subject<ChatMessage>;

//    constructor(
//        private storage: StorageService,
//        @Inject("BASE_URL") private baseUrl: string) {
//        this.initConnection();
//        this.initSubs();
//    }

//    public initConnection(): void {
//        let hubUrl = "anonym";

//        const token = this.storage.getAccessToken();
//        if (token) {
//            hubUrl = "auth";
//        }
//        const options = {
//            accessTokenFactory() { return token; }
//        };

//        this.hubConnection = new HubConnectionBuilder().withUrl(`${this.baseUrl}hubs/${hubUrl}`, options).build();
//        this.hubConnection.on("updateChat", (data: ChatMessage) => {
//            this.chatSubject.next(data);
//        });
//        this.hubConnection.on("updateOnline", (data: any) => {
//            this.onlineSubject.next(data);
//        });

//        this.hubConnection.start()
//            .then(() => {
//            })
//            .catch(err => {
//                alert("ошибка хаба чата");
//            });
//    }

//    private initSubs(): void {
//        this.chatSubject = new Subject<ChatMessage>();
//        this.onlineSubject = new Subject<any>();
//    }
//}