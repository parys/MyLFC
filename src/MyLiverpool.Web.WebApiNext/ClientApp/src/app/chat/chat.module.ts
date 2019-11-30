import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { EditorModule } from '@editor/index';
import { PipesModule } from '@base/pipes';
import { LayoutModule } from '@layout/layout.module';

import { MiniChatComponent } from '@chat/miniChat';
import { MaxiChatComponent } from '@chat/maxiChat';
import { ChatWindowComponent } from '@chat/chat-window';
import { chatRoutes } from '@chat/chat.routes';
import { ChatMessageService } from '@chat/chat-message.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(chatRoutes),
        EditorModule,
        PipesModule,
        LayoutModule // todo needed for users-online
        , MatButtonModule
    ],
    declarations: [
        MiniChatComponent,
        MaxiChatComponent,
        ChatWindowComponent
    ],
    exports: [
        MiniChatComponent,
        MaxiChatComponent,
        ChatWindowComponent
    ],
    providers: [
        ChatMessageService
    ]
})
export class ChatModule { }
