import { Routes } from "@angular/router";
import { StadiumEditComponent } from "./stadium-edit"
import { StadiumListComponent } from "./stadium-list";
import { RoleGuard, RolesEnum } from "@app/+auth";

export const stadiumRoutes: Routes = [
    {
        path: "",
        component: StadiumListComponent,
        data: {
            title: "Стадионы",
            roles: [RolesEnum[RolesEnum.InfoStart]]
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
                    roles: [RolesEnum[RolesEnum.InfoStart]]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];