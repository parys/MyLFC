import { Routes } from "@angular/router";
import { MatchListComponent, MatchEditComponent } from "./index";
import { MatchDetailComponent } from "./match-detail.component";
import { RoleGuard } from "../auth/index";

export const matchRoutes: Routes = [
    {
        path: "matches",
        children: [
            {
                path: "",
                component: MatchListComponent,
                data: {
                    title: "Матчи",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            }, {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: MatchDetailComponent,
                        data: {
                            title: "Матч"
                        }
                    },
                    {
                        path: "edit",
                        component: MatchEditComponent,
                        data: {
                            title: "Редактирование",
                            roles: ["infoStart"]
                        },
                        canActivate: [RoleGuard]
                    }
                ]
            }
        ]
    }
];