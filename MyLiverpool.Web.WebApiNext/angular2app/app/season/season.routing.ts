import { Routes } from "@angular/router";
import { SeasonEplTableComponent } from "./index";

export const seasonRoutes: Routes = [
    { path: "season/eplTable", component: SeasonEplTableComponent, data: { title: "Таблица АПЛ" } }
];