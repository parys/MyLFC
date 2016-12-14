import { Routes } from "@angular/router";
import { ImageListComponent } from "./index";

export const imageRoutes: Routes = [
    { path: "image", component: ImageListComponent, data: { title: "Изображения" } }
 //   { path: "match", component: MatchListComponent, data: { title: "Матчи" } }
];