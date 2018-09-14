import { Routes } from "@angular/router";
import { PageEditorComponent } from "./page-editor";
import { RoleGuard, RolesEnum } from "@app/+auth";

export const helperRoutes: Routes = [
    {
        path: "editPage",
        children: [
            { path: "", pathMatch: "full", redirectTo: "/" },
            {
                path: ":id",
                component: PageEditorComponent,
                data: {
                    title: "Редактирование страницы",
                    roles: [RolesEnum[RolesEnum.AdminStart], RolesEnum[RolesEnum.InfoStart]]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];