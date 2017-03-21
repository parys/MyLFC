"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.imageRoutes = [
    {
        path: "image",
        children: [
            {
                path: "",
                component: index_1.ImageListComponent,
                data: { title: "Изображения", roles: ["newsStart", "blogStart"] },
                canActivate: [index_2.RoleGuard]
            },
            {
                path: "add",
                component: index_1.ImageAdditionComponent,
                data: { title: "Загрузка изображений", roles: ["newsStart", "blogStart"] },
                canActivate: [index_2.RoleGuard]
            }
        ]
    }
];
//# sourceMappingURL=image.routing.js.map