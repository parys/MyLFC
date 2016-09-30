"use strict";
var index_1 = require("./index");
exports.pmRoutes = [
    { path: "pm", component: index_1.PmListComponent },
    { path: "pm/:id", component: index_1.PmDetailComponent },
    { path: "pm/:id/edit", component: index_1.PmEditComponent }
];
//# sourceMappingURL=pm.routing.js.map