import { Routes } from "@angular/router";
import { RoleGuard } from "../auth/index";
import { PmListComponent } from "./pm-list/index";
import { PmDetailComponent } from "./pm-detail/index";
import { PmEditComponent } from "./pm-edit/index";

export const pmRoutes: Routes = [
    { path: "pms", children: [
            { path: "", component: PmListComponent, data: { title: "Личные сообщения" }, canActivate: [RoleGuard] },
            { path: ":id", children: [
                    { path: "", component: PmDetailComponent, data: { title: "Личное сообщение" }, canActivate: [RoleGuard] },
                    { path: "edit", component: PmEditComponent, data: { title: "Написание личного сообщения" }, canActivate: [RoleGuard] }
                ]
            }
        ]
    }
];