import { Routes } from "@angular/router";
import { SeasonListComponent } from "./season-list";
import { SeasonEditComponent } from "./season-edit";
import { SeasonCalendarComponent } from "./season-calendar";
import { RoleGuard } from "@app/shared/";
import { SeasonStatisticsComponent } from "./season-statistics";

export const seasonRoutes: Routes = [
    {
        path: "seasons",
        children: [
            { path: "", component: SeasonListComponent, data: { title: "Список сезонов" } },
            {
                path: ":id",
                children: [
                    {
                        path: "edit",
                        component: SeasonEditComponent,
                        data: {
                            title: "Редактирование сезона",
                            roles: ["infoStart"]
                        },
                        canActivate: [RoleGuard]
                    },
                    { path: "calendar", component: SeasonCalendarComponent, data: { title: "Календарь" } },
                    { path: "statistics", component: SeasonStatisticsComponent, data: { title: "Статистика" } },
                ]
            },
        ]
    }
];