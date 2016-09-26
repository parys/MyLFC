"use strict";
const user_detail_component_1 = require("./user-detail.component");
const user_list_component_1 = require("./user-list.component");
exports.userRoutes = [
    //  { path: 'news/list/:page/:categoryId', component: NewsListComponent },
    { path: 'user', component: user_list_component_1.UserListComponent },
    { path: 'user/list', component: user_list_component_1.UserListComponent },
    { path: 'user/list/:page', component: user_list_component_1.UserListComponent },
    { path: 'user/list/:page/:userName', component: user_list_component_1.UserListComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
];
//# sourceMappingURL=user.routing.js.map