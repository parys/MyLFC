"use strict";
var index_1 = require("./forumSection/index");
var index_2 = require("./forumSubsection/index");
var index_3 = require("./forumTheme/index");
var index_4 = require("../auth/index");
exports.forumRoutes = [
    {
        path: "forum",
        children: [
            { path: "", component: index_1.ForumSectionListComponent, data: { title: "Форум" } },
            {
                path: ":id",
                children: [
                    { path: "", component: index_2.ForumSubsectionListComponent, data: { title: "Раздел форума" } },
                    {
                        path: "edit",
                        component: index_2.ForumSubsectionEditComponent,
                        data: {
                            title: "Создание подраздела",
                            roles: ["newsStart", "forumStart"]
                        },
                        canActivate: [index_4.RoleGuard]
                    },
                    {
                        path: "theme/:idTheme",
                        children: [
                            { path: "", component: index_3.ForumThemeListComponent, data: { title: "Тема форума" } },
                            {
                                path: "edit",
                                component: index_3.ForumThemeEditComponent,
                                data: { title: "Создание темы", roles: ["newsStart"] },
                                canActivate: [index_4.RoleGuard]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=forum.routes.js.map