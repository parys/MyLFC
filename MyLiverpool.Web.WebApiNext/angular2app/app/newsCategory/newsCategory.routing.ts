import { Routes } from "@angular/router";
import {NewsCategoryListComponent} from "./newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory-edit.component";

export const newsCategoryRoutes: Routes = [
    { path: "newsCategory", component: NewsCategoryListComponent, data: { title: "Категории новостей" } },
    { path: "newsCategory/:id/edit", component: NewsCategoryEditComponent, data: { title: "Создание категории" } }
];