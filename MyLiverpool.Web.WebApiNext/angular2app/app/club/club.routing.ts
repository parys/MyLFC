import { Routes } from "@angular/router";
import { ClubListComponent, ClubEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const clubRoutes: Routes = [
    {
        path: "club/:id/edit",
        component: ClubEditComponent,
        data: { title: "Создание клуба", roles: ["adminStart"] },
        canActivate: [RoleGuard]
    },
    {
        path: "club",
        component: ClubListComponent,
        data: { title: "Клубы", roles: ["adminStart"] },
        canActivate: [RoleGuard]
    }
];