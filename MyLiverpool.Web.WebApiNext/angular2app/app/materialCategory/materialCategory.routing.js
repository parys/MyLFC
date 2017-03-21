"use strict";
var materialCategory_list_component_1 = require("./materialCategory-list.component");
var materialCategory_edit_component_1 = require("./materialCategory-edit.component");
var index_1 = require("../auth/index");
exports.materialCategoryRoutes = [
    {
        path: "newsCategory",
        children: [
            { path: "", component: materialCategory_list_component_1.MaterialCategoryListComponent, data: { title: "Категории новостей", type: "News" } },
            {
                path: ":id/edit",
                component: materialCategory_edit_component_1.MaterialCategoryEditComponent,
                data: { title: "Создание категории новостей", roles: ["newsFull"], type: "News" },
                canActivate: [index_1.RoleGuard]
            }
        ]
    },
    {
        path: "blogCategory",
        children: [
            { path: "", component: materialCategory_list_component_1.MaterialCategoryListComponent, data: { title: "Категории блогов", type: "Blog" } },
            {
                path: ":id/edit",
                component: materialCategory_edit_component_1.MaterialCategoryEditComponent,
                data: { title: "Создание категории блогов", roles: ["blogFull"], type: "Blog" },
                canActivate: [index_1.RoleGuard]
            }
        ]
    }
];
//# sourceMappingURL=materialCategory.routing.js.map