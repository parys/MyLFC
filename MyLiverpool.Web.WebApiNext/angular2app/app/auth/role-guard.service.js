"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("../shared/index");
var RoleGuard = (function () {
    function RoleGuard(rolesService, router, location) {
        this.rolesService = rolesService;
        this.router = router;
        this.location = location;
    }
    RoleGuard.prototype.canActivate = function (route, state) {
        if (!this.rolesService.checkRoles().isLogined) {
            this.location.replaceState("/");
            this.router.navigate(["/"]);
            return false;
        }
        var roles = route.data["role"];
        if (roles == null || roles.length === 0) {
            return true;
        }
        for (var i = 0; i < roles.length; i++) {
            if (this.rolesService.isUserInRole(roles[i])) {
                return true;
            }
        }
        this.location.replaceState("/");
        this.router.navigate(["/"]);
        return false;
    };
    return RoleGuard;
}());
RoleGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.RolesCheckedService,
        router_1.Router,
        common_1.Location])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role-guard.service.js.map