import { Routes } from "@angular/router";
import { StadiumEditComponent } from "./stadium-edit"
import { StadiumListComponent } from "./stadium-list";
import { RoleGuard } from "@app/shared";

export const stadiumRoutes: Routes = [
    {
        path: "",
        component: StadiumListComponent,
        data: {
            title: "Стадионы",
            roles: ["infoStart"]
        },
        canActivate: [RoleGuard]
    },
    {
        path: ":id",
        children: [
            {
                path: "edit",
                component: StadiumEditComponent,
                data: {
                    title: "Редактирование стадиона",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];