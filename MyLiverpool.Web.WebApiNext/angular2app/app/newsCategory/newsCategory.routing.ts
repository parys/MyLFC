import { Routes } from "@angular/router";
import { NewsCategoryListComponent } from "./newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory-edit.component";
import { RoleGuard } from "../auth/index";

export const newsCategoryRoutes: Routes = [
    { path: "newsCategory", component: NewsCategoryListComponent, data: { title: "Категории новостей" } },
    {
        path: "newsCategory/:id/edit",
        component: NewsCategoryEditComponent,
        data: { title: "Создание категории", roles: ["newsFull"] },
        canActivate: [RoleGuard]
    }
];