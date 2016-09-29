"use strict";
var router_1 = require("@angular/router");
var news_list_component_1 = require("./news/news-list/news-list.component");
var auth_routing_1 = require("./auth/auth.routing");
var newsCategory_routing_1 = require("./newsCategory/newsCategory.routing");
var news_routing_1 = require("./news/news.routing");
var user_routing_1 = require("./user/user.routing");
var pm_routing_1 = require("./pm/pm.routing");
var routes = auth_routing_1.authRoutes.concat(newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, pm_routing_1.pmRoutes, user_routing_1.userRoutes, [
    { path: "", component: news_list_component_1.NewsListComponent }
]);
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map