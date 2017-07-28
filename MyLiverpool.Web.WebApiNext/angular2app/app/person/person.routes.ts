import { Routes } from "@angular/router";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { StuffListComponent } from "./stuff-list.component";
import { SquadComponent } from "./squad.component";
import { RoleGuard } from "../auth/index";

export const personRoutes: Routes = [
    {
        path: "persons",
        children: [
            { path: "", component: PersonListComponent, data: { title: "Люди" }, },
            {
                path: ":id/edit",
                component: PersonEditComponent,
                data: {
                    title: "Редактирование человека",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
        ]
    },
    {
        path: "stuff",
        children: [
            { path: "", redirectTo: "/stuff/first", pathMatch: "full" },
            { path: "first", component: StuffListComponent, data: { title: "Тренерский состав", type: "First" } },
            { path: "academy", component: StuffListComponent, data: { title: "Тренерский состав", type: "Academy"} },
        ]
    },
    {
        path: "squad", children: [
            { path: "", redirectTo: "/squad/first", pathMatch: "full" },
            { path: "first", component: SquadComponent, data: { title: "Состав команды", type: "First" } },
            { path: "academy", component: SquadComponent, data: { title: "Состав академии", type: "Academy" } },
            { path: "loan", component: SquadComponent, data: { title: "В аренде", type: "Loan" } }
        ]
    }
];