import { Routes } from "@angular/router";
import { MatchListComponent, MatchEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const matchRoutes: Routes = [
    {
        path: "match",
        children: [
            {
                path: "",
                component: MatchListComponent,
                data: { title: "Матчи", roles: ["adminStart"] },
                canActivate: [RoleGuard]
            }, {
                path: ":id/edit",
                component: MatchEditComponent,
                data: { title: "Создание матча", roles: ["adminStart"] },
                canActivate: [RoleGuard]
            }
        ]
    }
];