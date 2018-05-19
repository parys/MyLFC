import { Routes } from "@angular/router";
import { InjuryEditComponent } from "./injury-edit";
import { InjuryListComponent } from "./injury-list";
import { InjuryCurrentListComponent } from "./injury-current-list";
import { RoleGuard } from "@app/shared";

export const injuryRoutes: Routes = [
    {
        path: "injuries",
        children: [
            {
                path: "", component: InjuryListComponent, data: {
                    title: "Травмы",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            {
                path: ":id/edit",
                component: InjuryEditComponent,
                data: {
                    title: "Редактирование",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            {
                path: "current", component: InjuryCurrentListComponent,
                data: {
                    title: "Травмы"
                }
            }
        ]
    }
];