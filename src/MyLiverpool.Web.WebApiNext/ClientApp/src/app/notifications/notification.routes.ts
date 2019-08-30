import { Routes } from '@angular/router';
import { RoleGuard } from '@app/+auth';
import { NotificationListComponent } from './pages/notification-list';

export const notificationRoutes: Routes = [
    {
        path: '',
        component: NotificationListComponent,
        data: { title: 'Уведомления' },
        canActivate: [RoleGuard]
    },

];
