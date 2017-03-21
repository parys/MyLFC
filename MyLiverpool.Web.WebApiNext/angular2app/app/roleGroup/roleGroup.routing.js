"use strict";
var index_1 = require("./index");
var role_guard_service_1 = require("../auth/role-guard.service");
exports.roleGroupRoutes = [
    {
        path: "roleGroup", children: [
            {
                path: "", component: index_1.RoleGroupListComponent, data: { title: "Группы и роли", roles: ["adminStart"] },
                canActivate: [role_guard_service_1.RoleGuard]
            }
        ]
    }
];
//# sourceMappingURL=roleGroup.routing.js.map