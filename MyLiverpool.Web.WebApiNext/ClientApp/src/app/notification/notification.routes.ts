import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { NotificationListComponent } from "./notification-list";

export const notificationRoutes: Routes = [
    { path: "notifications", children: [
            { path: "", component: NotificationListComponent, data: { title: "Уведомления" }, canActivate: [RoleGuard] },
      /*      { path: ":id", children: [
                    { path: "", component: PmDetailComponent, data: { title: "Личное сообщение" }, canActivate: [RoleGuard] },
                    { path: "edit", component: PmEditComponent, data: { title: "Написание личного сообщения" }, canActivate: [RoleGuard] }
                ]
            }*/
        ]
    }
];