"use strict";
const news_list_component_1 = require("./news-list/news-list.component");
const news_detail_component_1 = require("./news-detail/news-detail.component");
const news_edit_component_1 = require("./news-edit/news-edit.component");
//module News {
exports.newsRoutes = [
    { path: 'news', component: news_list_component_1.NewsListComponent },
    { path: 'news/list', component: news_list_component_1.NewsListComponent },
    { path: 'news/list/:page', component: news_list_component_1.NewsListComponent },
    { path: 'news/list/:page/:categoryId', component: news_list_component_1.NewsListComponent },
    { path: 'news/:id', component: news_detail_component_1.NewsDetailComponent },
    { path: 'news/:id/edit', component: news_edit_component_1.NewsEditComponent }
];
//} 
//# sourceMappingURL=news.routing.js.map