import { NewsListComponent, NewsDetailComponent, NewsEditComponent } from "./index";
export var newsRoutes = [
    { path: "news", component: NewsListComponent },
    { path: "news/list", component: NewsListComponent },
    { path: "news/list/:page", component: NewsListComponent },
    { path: "news/list/:page/:categoryId", component: NewsListComponent },
    { path: "news/:id", component: NewsDetailComponent },
    { path: "news/:id/edit", component: NewsEditComponent }
];
//# sourceMappingURL=news.routing.js.map