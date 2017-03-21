"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.matchRoutes = [
    {
        path: "match",
        children: [
            {
                path: "",
                component: index_1.MatchListComponent,
                data: { title: "Матчи", roles: ["adminStart"] },
                canActivate: [index_2.RoleGuard]
            }, {
                path: ":id/edit",
                component: index_1.MatchEditComponent,
                data: { title: "Создание матча", roles: ["adminStart"] },
                canActivate: [index_2.RoleGuard]
            }
        ]
    },
    { path: "calendar", component: index_1.MatchCalendarComponent, data: { title: "Календарь" } }
];
//# sourceMappingURL=match.routing.js.map