import { Routes } from '@angular/router';
import { RoleGuard } from '@base/auth';
import { NotificationListComponent } from '@notifications/pages/notification-list';

export const notificationRoutes: Routes = [
    {
        path: '',
        component: NotificationListComponent,
        data: { title: 'Уведомления' },
        canActivate: [RoleGuard]
    },

];
