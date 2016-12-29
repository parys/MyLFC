import { Routes } from "@angular/router";
import { ImageListComponent, ImageAdditionComponent } from "./index";

export const imageRoutes: Routes = [
    { path: "image/add", component: ImageAdditionComponent, data: { title: "Загрузка изображений" } },
    { path: "image", component: ImageListComponent, data: { title: "Изображения" }}
];