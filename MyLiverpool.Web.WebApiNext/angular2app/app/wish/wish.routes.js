"use strict";
var wish_list_component_1 = require("./wish-list.component");
var wish_edit_component_1 = require("./wish-edit.component");
exports.wishRoutes = [
    {
        path: "wish", children: [
            { path: "", component: wish_list_component_1.WishListComponent, data: { title: "Пожелания" } },
            { path: ":id/edit", component: wish_edit_component_1.WishEditComponent, data: { title: "Создание пожелания" } }
        ]
    }
];
//# sourceMappingURL=wish.routes.js.map