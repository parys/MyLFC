import { Routes } from "@angular/router";
import { PlayerStatisticsComponent } from "./index";

export const playerRoutes: Routes = [
    { path: "player/statistics", component: PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
  //  { path: "match", component: MatchListComponent, data: { title: "Матчи" } },
  //  { path: "calendar", component: MatchCalendarComponent, data: { title: "Календарь" } }
];