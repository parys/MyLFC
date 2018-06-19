import { Routes } from "@angular/router";
import { MaterialListComponent } from "./material";
import { helperRoutes } from "./admin/admin.routes";
import { materialRoutes } from "./material/material.routes";
import { homeRoutes } from "./home/home.routes";
import { imageRoutes } from "./image/image.routes";

export const routes: Routes = [
    ...helperRoutes,
    ...homeRoutes,
    ...imageRoutes,
    ...materialRoutes,
    {
        path: "wishes",
        loadChildren: "./wish/wish.module#WishModule"
    },
    {
        path: "seasons",
        loadChildren: "./season/lazy/season.module#SeasonModule"
    },
    {
        path: "roleGroups",
        loadChildren: "./roleGroup/lazy/roleGroup.module#RoleGroupModule"
    },
    { path: "", component: MaterialListComponent, data: { title: "MyLFC.ru - Сайт русскоязычных болельщиков ФК \"Ливерпуль\"", type: "Both" } }
];