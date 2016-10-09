"use strict";
var news_list_component_1 = require("./news-list/news-list.component");
var news_detail_component_1 = require("./news-detail/news-detail.component");
var news_edit_component_1 = require("./news-edit/news-edit.component");
exports.newsRoutes = [
    { path: "news", component: news_list_component_1.NewsListComponent },
    { path: "news/list", component: news_list_component_1.NewsListComponent },
    { path: "news/list/:page", component: news_list_component_1.NewsListComponent },
    { path: "news/list/:page/:categoryId", component: news_list_component_1.NewsListComponent },
    { path: "news/:id", component: news_detail_component_1.NewsDetailComponent },
    { path: "news/:id/edit", component: news_edit_component_1.NewsEditComponent }
];
//# sourceMappingURL=news.routing.js.map