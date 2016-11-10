"use strict";
var newsCategory_list_component_1 = require("./newsCategory-list.component");
var newsCategory_edit_component_1 = require("./newsCategory-edit.component");
exports.newsCategoryRoutes = [
    { path: 'newsCategory', component: newsCategory_list_component_1.NewsCategoryListComponent },
    { path: 'newsCategory/:id/edit', component: newsCategory_edit_component_1.NewsCategoryEditComponent }
];
//# sourceMappingURL=newsCategory.routing.js.map