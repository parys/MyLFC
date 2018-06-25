import { Routes } from "@angular/router";
import { MaterialDetailComponent, MaterialEditComponent } from "./index";
import { RoleGuard } from "@app/shared";
import { MaterialListComponent } from "../core/material-list/";

export const materialRoutes: Routes = [
    {
        path: "",
        component: MaterialListComponent
    },
    {
        path: ":id",
        children: [
            {
                path: "",
                component: MaterialDetailComponent
            },
            {
                path: "edit",
                component: MaterialEditComponent,
                data: {
                    title: "Редактирование",
                    roles: ["newsStart", "blogStart"]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
    //{
    //    path: "blogs",
    //    children: [
    //        { path: "", component: MaterialListComponent, data: { title: "Блоги", type: "Blogs" } },
    //        {
    //            path: ":id",
    //            children: [
    //                {
    //                    path: "",
    //                    component: MaterialDetailComponent,
    //                    data: { title: "Блог", type: "Blogs" }
    //                },
    //                {
    //                    path: "edit",
    //                    component: MaterialEditComponent,
    //                    data: {
    //                        title: "Редактирование",
    //                        roles: ["blogStart"],
    //                        type: "Blogs"
    //                    },
    //                    canActivate: [RoleGuard]
    //                }
    //            ]
    //        }
    //    ]
    //}
];