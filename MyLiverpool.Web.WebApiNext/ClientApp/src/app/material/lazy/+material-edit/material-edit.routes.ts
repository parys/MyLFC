import { Routes } from "@angular/router";
import { MaterialEditComponent } from "./material-edit.component";
import { RoleGuard } from "@app/shared";

export const materialEditRoutes: Routes = [
    {
        path: "",
        component: MaterialEditComponent,
        data: {
            title: "Редактирование",
            roles: ["newsStart", "blogStart"]
        },
        canActivate: [RoleGuard]
    }
];