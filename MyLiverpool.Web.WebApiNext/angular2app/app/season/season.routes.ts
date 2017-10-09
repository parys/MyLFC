import { Routes } from "@angular/router";
import { SeasonListComponent } from "./season-list";
import { SeasonEditComponent } from "./season-edit";
import { SeasonCalendarComponent } from "./season-calendar";
import { RoleGuard } from "@app/shared/";

export const seasonRoutes: Routes = [
    {
        path: "seasons",
        children: [
            { path: "", component: SeasonListComponent, data: { title: "Список сезонов" } },
            {
                path: ":id/edit",
                component: SeasonEditComponent,
                data: {
                     title: "Редактирование сезона",
                     roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            { path: "calendar", component: SeasonCalendarComponent, data: { title: "Календарь" } }
        ]
    }
];