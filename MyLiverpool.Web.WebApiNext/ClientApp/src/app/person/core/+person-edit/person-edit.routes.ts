import { Routes } from "@angular/router";
import { RoleGuard } from "@app/+auth";
import { PersonEditComponent } from "./person-edit.component";

export const personEditRoutes: Routes = [
    { path: "",
        component: PersonEditComponent,
        data: {
            title: "Редактирование человека",
            roles: ["infoStart"]
        },
        canActivate: [RoleGuard]
    }
];