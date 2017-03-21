"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.pmRoutes = [
    { path: "pm", children: [
            { path: "", component: index_1.PmListComponent, data: { title: "Личные сообщения" }, canActivate: [index_2.RoleGuard] },
            { path: ":id", children: [
                    { path: "", component: index_1.PmDetailComponent, data: { title: "Личное сообщение" }, canActivate: [index_2.RoleGuard] },
                    { path: "edit", component: index_1.PmEditComponent, data: { title: "Написание личного сообщения" }, canActivate: [index_2.RoleGuard] }
                ]
            }
        ]
    }
];
//# sourceMappingURL=pm.routing.js.map