"use strict";
var pm_list_component_1 = require("./pm-list.component");
var pm_detail_component_1 = require("./pm-detail.component");
exports.pmRoutes = [
    { path: "pm", component: pm_list_component_1.PmListComponent },
    { path: "pm/:id", component: pm_detail_component_1.PmDetailComponent }
];
//# sourceMappingURL=pm.routing.js.map