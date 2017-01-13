import { Routes } from "@angular/router";
import { MaterialListComponent, MaterialDetailComponent, MaterialEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const materialRoutes: Routes = [
    {
        path: "news",
        children: [
            {
                path: "",
                component: MaterialListComponent,
                data: { title: "Новости", breadcrumb: "Новости", type: "News" }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: MaterialDetailComponent,
                        data: { title: "Новость", breadcrumb: "Новость", type: "News" }
                    },
                    {
                        path: "edit",
                        component: MaterialEditComponent,
                        data: {
                            title: "Создание новости",
                            breadcrumb: "Создание новости",
                            roles: ["newsStart"],
                            type: "News"
                        },
                        canActivate: [RoleGuard]
                    }
                ]
            }
        ]
    },
    {
        path: "blog",
        children: [
            { path: "", component: MaterialListComponent, data: { title: "Блоги", breadcrumb: "Блоги", type: "Blog" } },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: MaterialDetailComponent,
                        data: { title: "Блог", breadcrumb: "Блог", type: "Blog" }
                    },
                    {
                        path: "edit",
                        component: MaterialEditComponent,
                        data: {
                            title: "Создание блога",
                            breadcrumb: "Создание блога",
                            roles: ["blogStart"],
                            type: "Blog"
                        },
                        canActivate: [RoleGuard]
                    }
                ]
            }
        ]
    }
];