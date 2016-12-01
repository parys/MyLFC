import { Routes }         from "@angular/router";
import { NewsListComponent, NewsDetailComponent, NewsEditComponent } from "./index";

export const newsRoutes: Routes = [
    { path: "news", component: NewsListComponent },
    { path: "news/list", component: NewsListComponent },
    { path: "news/list/:page", component: NewsListComponent },
    { path: "news/:id", component: NewsDetailComponent },
    { path: "news/:id/edit", component: NewsEditComponent }
];