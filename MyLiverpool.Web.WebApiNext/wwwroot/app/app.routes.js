"use strict";
const router_1 = require('@angular/router');
const news_detail_component_1 = require('./news/news-detail/news-detail.component');
const news_list_component_1 = require('./news/news-list/news-list.component');
const account_signup_component_1 = require("./account/account-signup/account-signup.component");
const routes = [
    { path: 'signup', component: account_signup_component_1.AccountSignupComponent },
    { path: 'news', component: news_list_component_1.NewsListComponent },
    { path: 'news/:id', component: news_detail_component_1.NewsDetailComponent },
    // { path: '/edit', component: NewsEditComponent }
    { path: '', component: news_list_component_1.NewsListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map