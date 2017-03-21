"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.materialRoutes = [
    {
        path: "news",
        children: [
            {
                path: "",
                component: index_1.MaterialListComponent,
                data: { title: "Новости", breadcrumb: "Новости", type: "News" }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: index_1.MaterialDetailComponent,
                        data: { title: "Новость", breadcrumb: "Новость", type: "News" }
                    },
                    {
                        path: "edit",
                        component: index_1.MaterialEditComponent,
                        data: {
                            title: "Создание новости",
                            breadcrumb: "Создание новости",
                            roles: ["newsStart"],
                            type: "News"
                        },
                        canActivate: [index_2.RoleGuard]
                    }
                ]
            }
        ]
    },
    {
        path: "blog",
        children: [
            { path: "", component: index_1.MaterialListComponent, data: { title: "Блоги", breadcrumb: "Блоги", type: "Blog" } },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: index_1.MaterialDetailComponent,
                        data: { title: "Блог", breadcrumb: "Блог", type: "Blog" }
                    },
                    {
                        path: "edit",
                        component: index_1.MaterialEditComponent,
                        data: {
                            title: "Создание блога",
                            breadcrumb: "Создание блога",
                            roles: ["blogStart"],
                            type: "Blog"
                        },
                        canActivate: [index_2.RoleGuard]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=material.routing.js.map