import { Routes } from "@angular/router";
import { ZComponent } from "./z.component";

export const zRoutes: Routes = [
    {
        path: "z", component: ZComponent, data: { title: "Пожелания" } }//,
      //      { path: ":id/edit", component: WishEditComponent, data: { title: "Создание пожелания" } }
       // ]
    //}
];