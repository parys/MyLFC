import { Routes } from "@angular/router";
import { ClubHistoryComponent, RulesComponent } from "./index";

export const homeRoutes: Routes = [
    { path: "clubHistory", component: ClubHistoryComponent },
    { path: "rules", component: RulesComponent }
];