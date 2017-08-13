import { Routes } from "@angular/router";
import { MatchEventListComponent, MatchEventEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const matchRoutes: Routes = [
    {
        path: "matchEvents",
        children: [
            {
                path: "",
                component: MatchEventListComponent,
                data: {
                     title: "События", 
                     roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            }, {
                path: ":id/edit",
                component: MatchEventEditComponent,
                data: {
                     title: "Создание события",
                     roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];