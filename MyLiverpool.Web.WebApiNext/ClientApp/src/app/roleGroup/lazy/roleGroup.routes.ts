import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { RoleGroupListComponent } from "./roleGroup-list";

export const roleGroupRoutes: Routes = [
    {
        path: "",
        component: RoleGroupListComponent,
        data: { title: "Группы и роли", roles: ["adminStart"] },
        canActivate: [RoleGuard]
    }
];