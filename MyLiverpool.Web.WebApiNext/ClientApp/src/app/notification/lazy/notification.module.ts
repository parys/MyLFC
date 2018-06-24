import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared";
import { notificationRoutes } from "./notification.routes";
import { NotificationListComponent } from "./notification-list";
import { NotificationCoreModule } from "@app/notification";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(notificationRoutes),
        SharedModule,
        NotificationCoreModule
    ],
    declarations: [
        NotificationListComponent
    ]
})
export class NotificationModule { }