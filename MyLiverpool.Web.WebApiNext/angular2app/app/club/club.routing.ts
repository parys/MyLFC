import { Routes } from "@angular/router";
import { ClubListComponent, ClubEditComponent } from "./index";

export const clubRoutes: Routes = [
    { path: "club/:id/edit", component: ClubEditComponent },
    { path: "club", component: ClubListComponent }
];