import { Routes } from "@angular/router";
import { InjuryEditComponent } from "./injury-edit.component";
import { InjuryListComponent } from "./injury-list.component";
import { InjuryCurrentListComponent } from "./injury-current-list.component";
import { RoleGuard } from "../shared/index";

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