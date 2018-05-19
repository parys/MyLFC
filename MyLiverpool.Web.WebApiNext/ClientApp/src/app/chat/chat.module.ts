import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { MiniChatComponent } from "./miniChat.component";
import { MaxiChatComponent } from "./maxiChat.component";
import { chatRoutes } from "./chat.routes";
import { UserModule } from "@app/user";
import { EditorModule } from "@app/editor";
import { ChatMessageService } from "@app/chat/chatMessage.service";


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(chatRoutes),
        EditorModule,
        UserModule
    ],
    declarations: [
        MiniChatComponent,
        MaxiChatComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MiniChatComponent,
        MaxiChatComponent
    ],
    providers: [
        ChatMessageService
    ]
})
export class ChatModule { }