import { Routes } from "@angular/router";
import { TransferEditComponent } from "./transfer-edit";
import { TransferListComponent } from "./transfer-list";
import { TransferCurrentListComponent } from "./transfer-current-list";
import { RoleGuard } from "@app/+auth";

export const transferRoutes: Routes = [
    {
        path: "",
        component: TransferListComponent,
        data: {
            title: "Трансферы",
            roles: ["infoStart"]
        },
        canActivate: [RoleGuard]
    },
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
        path: "current",
        component: TransferCurrentListComponent,
        data: {
            title: "Трансферы"
        }
    }
];