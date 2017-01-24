import { Routes } from "@angular/router";
import { PlayerStatisticsComponent } from "./player-statistics.component";

export const playerRoutes: Routes = [
    { path: "player/statistics", component: PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
  //  { path: "match", component: MatchListComponent, data: { title: "Матчи" }, canActivate: [RoleGuard] },
  //  { path: "calendar", component: MatchCalendarComponent, data: { title: "Календарь" } }
];