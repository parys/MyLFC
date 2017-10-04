import { Routes } from "@angular/router";
import { RoleGuard } from "../shared/index";
import { ClubListComponent } from "./club-list/club-list.component";
import { ClubEditComponent } from "./club-edit/club-edit.component";

export const clubRoutes: Routes = [
    {
        path: "clubs",
        children: [
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
        ]
    }
];