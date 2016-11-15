"use strict";
var index_1 = require("./index");
exports.newsRoutes = [
    { path: "news", component: index_1.NewsListComponent },
    { path: "news/list", component: index_1.NewsListComponent },
    { path: "news/list/:page", component: index_1.NewsListComponent },
    { path: "news/list/:page/:categoryId", component: index_1.NewsListComponent },
    { path: "news/:id", component: index_1.NewsDetailComponent },
    { path: "news/:id/edit", component: index_1.NewsEditComponent }
];
//# sourceMappingURL=news.routing.js.map