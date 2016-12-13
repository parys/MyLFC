import { Routes } from "@angular/router";
import { WishListComponent, WishEditComponent } from "./index";

export const wishRoutes: Routes = [
    { path: "wish", component: WishListComponent, data: { title: "Пожелания" } },
    { path: "wish/:id/edit", component: WishEditComponent, data: { title: "Создание пожелания" } }
];