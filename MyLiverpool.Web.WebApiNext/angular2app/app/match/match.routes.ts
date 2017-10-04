import { Routes } from "@angular/router";
import { RoleGuard } from "../shared/index";
import { MatchListComponent } from "./match-list/index";
import { MatchDetailComponent } from "./match-detail/index";
import { MatchEditComponent } from "./match-edit/index";

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