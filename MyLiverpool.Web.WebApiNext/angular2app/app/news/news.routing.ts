import { Routes }         from "@angular/router";
import { NewsListComponent, NewsDetailComponent, NewsEditComponent } from "./index";

export const newsRoutes: Routes = [
    { path: "news", component: NewsListComponent, data: { title: "Новости" } },
    { path: "news/list", component: NewsListComponent, data: { title: "Новости" } },
    { path: "news/list/:page", component: NewsListComponent, data: { title: "Новости" } },
    { path: "news/:id", component: NewsDetailComponent, data: { title: "Новость" } },
    { path: "news/:id/edit", component: NewsEditComponent, data: { title: "Создание новости" } }
];