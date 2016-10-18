"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./news/index");
var auth_routing_1 = require("./auth/auth.routing");
var account_routing_1 = require("./account/account.routing");
var newsCategory_routing_1 = require("./newsCategory/newsCategory.routing");
var news_routing_1 = require("./news/news.routing");
var user_routing_1 = require("./user/user.routing");
var pm_routing_1 = require("./pm/pm.routing");
var home_routing_1 = require("./home/home.routing");
var wish_routing_1 = require("./wish/wish.routing");
var materialComment_routing_1 = require("./materialComment/materialComment.routing");
var routes = account_routing_1.accountRoutes.concat(auth_routing_1.authRoutes, home_routing_1.homeRoutes, materialComment_routing_1.materialCommentRoutes, newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, pm_routing_1.pmRoutes, user_routing_1.userRoutes, wish_routing_1.wishRoutes, [
    { path: "", component: index_1.NewsListComponent }
]);
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map