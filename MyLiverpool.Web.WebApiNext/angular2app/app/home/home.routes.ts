import { Routes } from "@angular/router";
import { ClubHistoryComponent, RulesComponent, AboutClubComponent, CoachTeamComponent, SquadComponent } from "./index";

export const homeRoutes: Routes = [
    { path: "clubHistory", component: ClubHistoryComponent, data: { title: "История клуба" } },
    { path: "coachTeam", component: CoachTeamComponent, data: { title: "Тренерский состав" } },
    { path: "rules", component: RulesComponent, data: { title: "Правила" } },
    { path: "aboutClub", component: AboutClubComponent, data: { title: "О клубе" } },
    { path: "squad", component: SquadComponent, data: { title: "Состав команды" } }
];