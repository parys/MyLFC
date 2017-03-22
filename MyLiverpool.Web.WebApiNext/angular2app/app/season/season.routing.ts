import { Routes } from "@angular/router";
import { SeasonEplTableComponent } from "./season-eplTable.component";
import { SeasonListComponent } from "./season-list.component";

export const seasonRoutes: Routes = [
    {
        path: "season",
        component: SeasonListComponent,
        data: { title: "Список сезонов" },
        children: [
            { path: "season/eplTable", component: SeasonEplTableComponent, data: { title: "Таблица АПЛ" } }
        ]
    }
];