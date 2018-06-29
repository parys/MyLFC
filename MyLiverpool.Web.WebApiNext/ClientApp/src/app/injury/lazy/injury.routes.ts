import { Routes } from "@angular/router";
import { InjuryEditComponent } from "./injury-edit";
import { InjuryListComponent } from "./injury-list";
import { RoleGuard } from "@app/+auth";

export const injuryRoutes: Routes = [
    {
        path: "",
        component: InjuryListComponent,
        data: {
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
    }
];