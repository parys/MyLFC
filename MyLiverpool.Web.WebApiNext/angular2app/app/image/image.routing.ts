import { Routes } from "@angular/router";
import { ImageListComponent, ImageAdditionComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const imageRoutes: Routes = [
    {
        path: "image/add",
        component: ImageAdditionComponent,
        data: { title: "Загрузка изображений", roles: ["newsStart", "blogStart"] },
        canActivate: [RoleGuard]
    },
    {
        path: "image",
        component: ImageListComponent,
        data: { title: "Изображения", roles: ["newsStart", "blogStart"] },
        canActivate: [RoleGuard]
    }
];