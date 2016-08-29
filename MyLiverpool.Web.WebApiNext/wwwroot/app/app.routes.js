"use strict";
const router_1 = require('@angular/router');
const news_detail_component_1 = require('./news/news-detail/news-detail.component');
const news_list_component_1 = require('./news/news-list/news-list.component');
const account_signup_component_1 = require("./account/account-signup.component");
const news_edit_component_1 = require("./news/news-edit/news-edit.component");
const auth_routing_1 = require("./auth/auth.routing");
const auth_guard_service_1 = require("./auth/auth-guard.service");
const routes = [
    { path: 'signup', component: account_signup_component_1.AccountSignupComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'news', component: news_list_component_1.NewsListComponent },
    { path: 'news/:id', component: news_detail_component_1.NewsDetailComponent },
    { path: 'news/:id/edit', component: news_edit_component_1.NewsEditComponent },
    { path: '', component: news_list_component_1.NewsListComponent },
    ...auth_routing_1.authRoutes
];
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map