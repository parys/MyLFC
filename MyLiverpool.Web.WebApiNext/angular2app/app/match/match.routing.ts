import { Routes } from "@angular/router";
import { MatchListComponent, MatchEditComponent } from "./index";

export const matchRoutes: Routes = [
    { path: "match/:id/edit", component: MatchEditComponent },
    { path: "match", component: MatchListComponent }
];