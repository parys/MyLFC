import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { SeasonListComponent } from "./season-list";
import { SeasonEditComponent } from "./season-edit";
import { SeasonCalendarComponent } from "./season-calendar";
import { RoleGuard } from "@app/shared/";
import { SeasonStatisticsComponent } from "./season-statistics";

const seasonRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forChild(seasonRoutes);