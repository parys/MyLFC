import { Routes } from "@angular/router";
import { RoleGuard } from "@app/shared";
import { ImageAdditionComponent } from "../core";
import { ImageListComponent } from "./image-list";

export const imageRoutes: Routes = [
    {
        path: "",
        component: ImageListComponent,
        data: { title: "Изображения", roles: ["newsStart", "blogStart"] },
        canActivate: [RoleGuard]
    },
    {
        path: "add",
        component: ImageAdditionComponent,
        data: { title: "Загрузка изображений", roles: ["newsStart", "blogStart"] },
        canActivate: [RoleGuard]
    }
];