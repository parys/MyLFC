import { Routes } from "@angular/router";
import { RoleGroupListComponent } from "./index";
import { RoleGuard } from "../shared/index";

export const roleGroupRoutes: Routes = [
    {
        path: "roleGroups", children: [
            {
                path: "", component: RoleGroupListComponent, data: { title: "Группы и роли", roles: ["adminStart"] },
                canActivate: [RoleGuard] }
        ]
    }
];