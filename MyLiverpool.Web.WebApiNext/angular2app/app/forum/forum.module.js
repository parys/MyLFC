"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var index_1 = require("./forumSection/index");
var forumSubsection = require("./forumSubsection/index");
var forumMessage = require("./forumMessage/index");
var forumTheme = require("./forumTheme/index");
var forum_routes_1 = require("./forum.routes");
var index_2 = require("../editor/index");
var index_3 = require("../shared/index");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ForumModule = (function () {
    function ForumModule() {
    }
    return ForumModule;
}());
ForumModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            index_2.EditorModule,
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_bootstrap_1.PaginationModule.forRoot(),
            router_1.RouterModule.forRoot(forum_routes_1.forumRoutes),
            index_3.SharedModule
        ],
        declarations: [
            forumMessage.ForumMessageAdditionComponent,
            forumSubsection.ForumSubsectionEditComponent,
            forumSubsection.ForumSubsectionListComponent,
            forumTheme.ForumThemeEditComponent,
            forumTheme.ForumThemeListComponent,
            index_1.ForumSectionListComponent
        ],
        exports: [],
        providers: [
            forumMessage.ForumMessageService,
            forumSubsection.ForumSubsectionService,
            forumTheme.ForumThemeService,
            index_1.ForumSectionService
        ]
    })
], ForumModule);
exports.ForumModule = ForumModule;
//# sourceMappingURL=forum.module.js.map