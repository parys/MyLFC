import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { UserDetailComponent } from "./user-detail";
import { UserListComponent } from "./user-list";
import { UserConfigComponent } from "./user-config";
import { UserEditComponent } from "./user-edit";

export const userRoutes: Routes = [
    { path: "", component: UserListComponent, data: { title: "Пользователи" } },
    {
        path: ":id",
        children: [
            { path: "", component: UserDetailComponent, data: { title: "Пользователь" } },
            {
                path: "settings",
                component: UserConfigComponent,
                data: { title: "Настройки" },
                canActivate: [RoleGuard]
            },
            { path: "edit", component: UserEditComponent, data: { title: "Редактирование" }, canActivate: [RoleGuard] }
        ]
    }
];