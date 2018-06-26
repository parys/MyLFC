import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { PmListComponent } from "./pm-list";
import { PmDetailComponent } from "./pm-detail";
import { PmEditComponent } from "./pm-edit";

export const pmRoutes: Routes = [
    { path: "", component: PmListComponent, data: { title: "Личные сообщения" }, canActivate: [RoleGuard] },
    {
        path: ":id",
        children: [
            { path: "", component: PmDetailComponent, data: { title: "Cообщение" }, canActivate: [RoleGuard] },
            {
                path: "edit",
                component: PmEditComponent,
                data: { title: "Написание личного сообщения" },
                canActivate: [RoleGuard]
            }
        ]
    }
];