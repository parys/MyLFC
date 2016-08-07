"use strict";
const router_1 = require('@angular/router');
const news_component_1 = require('./news/news.component');
//import { AboutComponent } from './about/about.component';
exports.routes = [
    { path: '', component: news_component_1.NewsComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map