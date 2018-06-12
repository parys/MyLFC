import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { MiniChatComponent } from "./miniChat";
import { MaxiChatComponent } from "./maxiChat";
import { ChatWindowComponent } from "./chat-window";
import { chatRoutes } from "./chat.routes";
import { UserModule } from "@app/user";
import { EditorModule } from "@app/editor";
import { ChatMessageService } from "./chatMessage.service";


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(chatRoutes),
        EditorModule,
        UserModule
    ],
    declarations: [
        MiniChatComponent,
        MaxiChatComponent,
        ChatWindowComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MiniChatComponent,
        MaxiChatComponent,
        ChatWindowComponent
    ],
    providers: [
        ChatMessageService
    ]
})
export class ChatModule { }