import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/index";
import { notificationRoutes } from "./notification.routes";
import { NotificationListComponent } from "./notification-list/index";
import { NotificationCounterComponent } from "./notification-counter/index";
import { NotificationService } from "./notification.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(notificationRoutes),
        SharedModule
    ],
    declarations: [
        NotificationCounterComponent,
        NotificationListComponent
    ],
    exports: [
        NotificationCounterComponent
    ],
    providers: [
        NotificationService
    ]
})
export class NotificationModule { }