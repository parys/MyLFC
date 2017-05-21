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
                data: { title: "Новости", type: "News" }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: MaterialDetailComponent,
                        data: { title: "Новость", type: "News" }
                    },
                    {
                        path: "edit",
                        component: MaterialEditComponent,
                        data: {
                            title: "Редактирование новости",
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
        path: "blogs",
        children: [
            { path: "", component: MaterialListComponent, data: { title: "Блоги", type: "Blog" } },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: MaterialDetailComponent,
                        data: { title: "Блог", type: "Blog" }
                    },
                    {
                        path: "edit",
                        component: MaterialEditComponent,
                        data: {
                            title: "Редактирование блога",
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