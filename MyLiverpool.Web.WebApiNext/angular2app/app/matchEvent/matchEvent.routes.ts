import { Routes } from "@angular/router";
import { RoleGuard } from "../auth/index";
import { MatchEventListComponent } from "./matchEvent-list.component";

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