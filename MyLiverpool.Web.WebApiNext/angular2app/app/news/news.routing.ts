import { Routes } from "@angular/router";
import { NewsListComponent, NewsDetailComponent, NewsEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const newsRoutes: Routes = [
    { path: "news", children: [
            { path: "", component: NewsListComponent, data: { title: "Новости", breadcrumb: "Новости" } },
            { path: "list", children: [
                    { path: "", component: NewsListComponent, data: { title: "Новости", breadcrumb: "Новости" } },
                    { path: ":page", component: NewsListComponent, data: { title: "Новости", breadcrumb: "Новости"} }
                ]
            },
            { path: ":id", children: [
                    { path: "", component: NewsDetailComponent, data: { title: "Новость", breadcrumb: "Новость" } },
                    { path: "edit", component: NewsEditComponent, data: { title: "Создание новости", breadcrumb: "Создание новости", roles: ["newsStart", "blogStart"] }, canActivate: [RoleGuard] }
                ]
            }
        ]
    }
];