import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { BreadcrumbService } from '@app/shared/breadcrumb';
import { NOTIFICATIONS_ROUTE } from '@app/+constants';

import { notificationRoutes } from './notification.routes';
import { NotificationListComponent } from './pages/notification-list';
import { NotificationService } from './notification.service';
import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(notificationRoutes),
        SharedModule,
        PipesModule
    ],
    declarations: [
        NotificationListComponent
    ],
    providers: [
        NotificationService
    ]
})
export class NotificationModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRoute(`/${NOTIFICATIONS_ROUTE}`, 'Уведомления');
    }
}
