"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.clubRoutes = [
    { path: "club", children: [
            { path: "", component: index_1.ClubListComponent, data: { title: "Клубы", roles: ["adminStart"] }, canActivate: [index_2.RoleGuard] },
            { path: ":id/edit", component: index_1.ClubEditComponent, data: { title: "Создание клуба", roles: ["adminStart"] }, canActivate: [index_2.RoleGuard] }
        ]
    }
];
//# sourceMappingURL=club.routing.js.map