"use strict";
var index_1 = require("./index");
exports.materialCommentRoutes = [
    { path: "materialComment", children: [
            { path: "", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
            { path: "list", children: [
                    { path: "", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
                    { path: ":page", children: [
                            { path: "", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
                            { path: ":categoryId", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } }
                        ]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=materialComment.routing.js.map