import { Routes } from "@angular/router";
import { WishListComponent, WishEditComponent } from "./index";

export const wishRoutes: Routes = [
    { path: "wish", component: WishListComponent },
    { path: "wish/:id/edit", component: WishEditComponent }
];