import { Routes } from "@angular/router";
import { MaterialCategoryListComponent } from "./materialCategory-list";
import { MaterialCategoryEditComponent } from "./materialCategory-edit";
import { RoleGuard } from "@app/shared";

export const materialCategoryRoutes: Routes = [
    //{
    //    path: "newsCategories",
    //    children: [
            { path: "", component: MaterialCategoryListComponent },
            {
                path: ":id/edit",
                component: MaterialCategoryEditComponent,
                data: { roles: ["newsFull", "blogFull"]},
                canActivate: [RoleGuard]
            }

    //{
    //    path: "blogCategories",
    //    children: [
    //        { path: "", component: MaterialCategoryListComponent },
    //        {
    //            path: ":id/edit",
    //            component: MaterialCategoryEditComponent,
    //            data: { title: "Создание категории блогов", roles: [], type: "Blog" },
    //            canActivate: [RoleGuard]
    //        }
    //    ]
    //}
];