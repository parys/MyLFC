import { Routes } from "@angular/router";
import { WishListComponent } from "./wish-list";
import { WishEditComponent } from "./wish-edit";

export const wishRoutes: Routes = [
    { path: "", component: WishListComponent, data: { title: "Пожелания" } },
    { path: ":id/edit", component: WishEditComponent, data: { title: "Создание пожелания" } }
];