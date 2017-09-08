import { Routes } from "@angular/router";
import { MatchEventListComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const matchEventRoutes: Routes = [
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
            },
            //{
            //    path: ":id/edit",
            //    component: MatchEventEditComponent,
            //    data: {
            //         title: "Создание события",
            //         roles: ["infoStart"]
            //    },
            //    canActivate: [RoleGuard]
            //}
        ]
    }
];