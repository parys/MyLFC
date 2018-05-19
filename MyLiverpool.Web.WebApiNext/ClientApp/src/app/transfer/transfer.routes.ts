import { Routes } from "@angular/router";
import { TransferEditComponent } from "./transfer-edit";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { RoleGuard } from "@app/shared";

export const transferRoutes: Routes = [
    {
        path: "transfers",
        children: [
            {
                path: "", component: TransferListComponent, data: {
                    title: "Трансферы",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard] },
            {
                path: ":id/edit",
                component: TransferEditComponent,
                data: {
                    title: "Редактирование",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            {
                path: "current", component: TransferCurrentListComponent,
                data: {
                    title: "Трансферы"
                }
            }
        ]
    }
];