import { Routes } from "@angular/router";
import { PageEditorComponent } from "./page-editor";
import { RoleGuard } from "@app/+auth";

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
                    roles: ["adminStart", "infoStart"]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];