import { Routes } from "@angular/router";
import { PollEditComponent } from "./poll-edit.component";
import { RoleGuard } from "@app/+auth";

export const pollEditRoutes: Routes = [
    {
        path: "",
        component: PollEditComponent,
        data: {
            title: "Редактирование",
            roles: ["newsStart", "blogStart"]
        },
        canActivate: [RoleGuard]
    }
];