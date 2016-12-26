import { Routes } from "@angular/router";
import { ImageListComponent, ImageEditComponent } from "./index";

export const imageRoutes: Routes = [
    { path: "image/add", component: ImageEditComponent, data: { title: "Загрузка изображений" } },
    { path: "image", component: ImageListComponent, data: { title: "Изображения" }}
];