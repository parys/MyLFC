"use strict";
const router_1 = require('@angular/router');
const news_list_component_1 = require('./news/news-list/news-list.component');
const auth_routing_1 = require("./auth/auth.routing");
const newsCategory_routing_1 = require("./newsCategory/newsCategory.routing");
const news_routing_1 = require("./news/news.routing");
const routes = [
    // { path: 'signup', component: AccountSignupComponent, canActivate: [AuthGuard] },
    ...auth_routing_1.authRoutes,
    ...newsCategory_routing_1.newsCategoryRoutes,
    ...news_routing_1.newsRoutes,
    { path: '', component: news_list_component_1.NewsListComponent }
];
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map