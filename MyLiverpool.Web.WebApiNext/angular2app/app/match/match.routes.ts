import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { MatchListComponent } from "./match-list";
import { MatchDetailComponent } from "./match-detail";
import { MatchEditComponent } from "./match-edit";

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