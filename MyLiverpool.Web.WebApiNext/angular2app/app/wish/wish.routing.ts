import { Routes } from "@angular/router";
import { WishListComponent, WishEditComponent } from "./index";

export const wishRoutes: Routes = [
    {
        path: "wish", children: [
            { path: "", component: WishListComponent, data: { title: "Пожелания" } },
            { path: ":id/edit", component: WishEditComponent, data: { title: "Создание пожелания" } }
        ]
    }
];