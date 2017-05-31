import { Routes } from "@angular/router";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { StuffListComponent } from "./stuff-list.component";

export const personRoutes: Routes = [
    { path: "players/statistics", component: PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
    {
        path: "persons",
        children: [
            { path: "", component: PersonListComponent, data: { title: "Люди" },  },
            { path: ":id/edit", component: PersonEditComponent, data: { title: "Редактирование человека" },  },
        ]
    },
    { path: "stuff", component: StuffListComponent, data: { title: "Тренерский состав" } },
    //  { path: "calendar", component: MatchCalendarComponent, data: { title: "Календарь" } }
];