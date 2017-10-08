import { Routes } from "@angular/router";
import { MaterialListComponent } from "./material/index";
import { helperRoutes } from "./admin/admin.routes";
import { chatRoutes } from "./chat/chat.routes";
import { materialRoutes } from "./material/material.routes";
import { userRoutes } from "./user/user.routes";
import { homeRoutes } from "./home/home.routes";
import { imageRoutes } from "./image/image.routes";
import { seasonRoutes } from "./season/season.routes";
import { roleGroupRoutes } from "./roleGroup/roleGroup.routes";

export const routes: Routes = [
    ...helperRoutes,
    ...chatRoutes,
    ...homeRoutes,
    ...imageRoutes,
    ...materialRoutes,
    ...roleGroupRoutes,
    ...seasonRoutes,
    ...userRoutes,
    { path: "", component: MaterialListComponent, data: { title: "MyLFC.ru - Сайт русскоязычных болельщиков ФК \"Ливерпуль\"", breadcrumbs: "Главная", type: "Both" } }
];