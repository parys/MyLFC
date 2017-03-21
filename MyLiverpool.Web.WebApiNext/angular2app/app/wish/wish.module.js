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
var forms_1 = require("@angular/forms");
var wish_list_component_1 = require("./wish-list.component");
var wish_edit_component_1 = require("./wish-edit.component");
var wish_service_1 = require("./wish.service");
var wish_routes_1 = require("./wish.routes");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var index_1 = require("../shared/index");
var WishModule = (function () {
    function WishModule() {
    }
    return WishModule;
}());
WishModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(wish_routes_1.wishRoutes),
            forms_1.ReactiveFormsModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            index_1.SharedModule
        ],
        declarations: [
            wish_edit_component_1.WishEditComponent,
            wish_list_component_1.WishListComponent
        ],
        exports: [],
        providers: [
            wish_service_1.WishService
        ]
    })
], WishModule);
exports.WishModule = WishModule;
//# sourceMappingURL=wish.module.js.map