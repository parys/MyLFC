import { Routes } from "@angular/router";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { TransferEditComponent } from "./transfer-edit.component";
import { StuffListComponent } from "./stuff-list.component";
import { SquadComponent } from "./squad.component";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { RoleGuard } from "../auth/index";

export const personRoutes: Routes = [
    { path: "players/statistics", component: PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
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
    { path: "stuff", component: StuffListComponent, data: { title: "Тренерский состав" } },
    {
        path: "squad", children: [
            { path: "", redirectTo: "/squad/first", pathMatch: "full" },
            { path: "first", component: SquadComponent, data: { title: "Состав команды", type: "First" } },
            { path: "academy", component: SquadComponent, data: { title: "Состав академии", type: "Academy" } }
        ]
    },
    {
        path: "transfers",
        children: [
            {
                path: "", component: TransferListComponent, data: {
                    title: "Трансферы",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard] },
            {
                path: ":id/edit",
                component: TransferEditComponent,
                data: {
                    title: "Редактирование",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            {
                path: "current", component: TransferCurrentListComponent,
                data: {
                    title: "Трансферы"
                }
            }
        ]
    }
];