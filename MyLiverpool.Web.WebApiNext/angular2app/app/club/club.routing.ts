import { Routes } from "@angular/router";
import { ClubListComponent, ClubEditComponent } from "./index";

export const clubRoutes: Routes = [
    { path: "club/:id/edit", component: ClubEditComponent, data: { title: "Создание клуба" } },
    { path: "club", component: ClubListComponent, data: { title: "Клубы" } }
];