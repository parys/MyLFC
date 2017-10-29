import { Routes } from "@angular/router";
import { MaxiChatComponent } from "@app/chat/maxiChat.component";

export const chatRoutes: Routes = [
    { path: "chat", component: MaxiChatComponent, data: { title: "Чат-флудилка" } },
];