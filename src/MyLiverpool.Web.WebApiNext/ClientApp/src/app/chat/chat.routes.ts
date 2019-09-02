import { Routes } from '@angular/router';
import { MaxiChatComponent } from '@chat/maxiChat';

export const chatRoutes: Routes = [
    { path: 'chat', component: MaxiChatComponent, data: { title: 'Чат-флудилка' } },
];
