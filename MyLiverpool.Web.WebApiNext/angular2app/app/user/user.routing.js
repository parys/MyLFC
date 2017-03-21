"use strict";
var user_detail_component_1 = require("./user-detail.component");
var user_list_component_1 = require("./user-list.component");
exports.userRoutes = [
    {
        path: "user",
        children: [
            { path: "", component: user_list_component_1.UserListComponent, data: { title: "Пользователи" } },
            { path: ":id", component: user_detail_component_1.UserDetailComponent, data: { title: "Пользователь" } }
        ]
    }
];
//# sourceMappingURL=user.routing.js.map