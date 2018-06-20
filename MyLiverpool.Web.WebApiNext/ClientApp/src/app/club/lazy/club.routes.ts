import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { ClubListComponent } from "./club-list";
import { ClubEditComponent } from "./club-edit";

export const clubRoutes: Routes = [
    {
        path: "",
        component: ClubListComponent,
        data: { title: "Клубы", roles: ["adminStart"] },
        canActivate: [RoleGuard]
    },
    {
        path: ":id/edit",
        component: ClubEditComponent,
        data: { title: "Создание клуба", roles: ["adminStart"] },
        canActivate: [RoleGuard]
    }
];