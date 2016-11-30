import { Routes } from "@angular/router";
import { ClubHistoryComponent, RulesComponent, AboutClubComponent, CoachTeamComponent, SquadComponent } from "./index";

export const homeRoutes: Routes = [
    { path: "clubHistory", component: ClubHistoryComponent },
    { path: "coachTeam", component: CoachTeamComponent },
    { path: "rules", component: RulesComponent },
    { path: "aboutClub", component: AboutClubComponent },
    { path: "squad", component: SquadComponent }
];