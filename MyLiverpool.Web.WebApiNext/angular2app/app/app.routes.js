"use strict";
var index_1 = require("./material/index");
var account_routing_1 = require("./account/account.routing");
var club_routing_1 = require("./club/club.routing");
var materialCategory_routing_1 = require("./materialCategory/materialCategory.routing");
var material_routing_1 = require("./material/material.routing");
var user_routing_1 = require("./user/user.routing");
var pm_routing_1 = require("./pm/pm.routing");
var home_routing_1 = require("./home/home.routing");
var image_routing_1 = require("./image/image.routing");
var materialComment_routing_1 = require("./materialComment/materialComment.routing");
var match_routing_1 = require("./match/match.routing");
var season_routing_1 = require("./season/season.routing");
var roleGroup_routing_1 = require("./roleGroup/roleGroup.routing");
exports.routes = account_routing_1.accountRoutes.concat(club_routing_1.clubRoutes, home_routing_1.homeRoutes, image_routing_1.imageRoutes, match_routing_1.matchRoutes, materialComment_routing_1.materialCommentRoutes, materialCategory_routing_1.materialCategoryRoutes, material_routing_1.materialRoutes, pm_routing_1.pmRoutes, roleGroup_routing_1.roleGroupRoutes, season_routing_1.seasonRoutes, user_routing_1.userRoutes, [
    { path: "", component: index_1.MaterialListComponent, data: { title: "Главная", breadcrumb: "Главная", type: "News" } }
]);
//# sourceMappingURL=app.routes.js.map