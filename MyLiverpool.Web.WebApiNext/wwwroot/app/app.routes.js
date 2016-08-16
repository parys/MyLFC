"use strict";
const router_1 = require('@angular/router');
const news_detail_component_1 = require('./news/news-detail/news-detail.component');
const news_list_component_1 = require('./news/news-list/news-list.component');
//import { AboutComponent } from './about/about.component';
exports.routes = [
    { path: '', component: news_list_component_1.NewsListComponent },
    {
        path: 'news', component: news_list_component_1.NewsListComponent, children: [
            {
                path: ':id', component: news_detail_component_1.NewsDetailComponent, children: []
            }
        ]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map