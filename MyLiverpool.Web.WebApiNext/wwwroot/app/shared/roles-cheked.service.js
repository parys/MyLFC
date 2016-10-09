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
var index_1 = require("../shared/index");
var RolesCheckedService = (function () {
    function RolesCheckedService(localStorage) {
        this.localStorage = localStorage;
        this.checkedRoles = {
            isEditor: false,
            isNewsmaker: false
        };
    }
    RolesCheckedService.prototype.ngOnInit = function () {
        this.checkRoles();
    };
    RolesCheckedService.prototype.checkRoles = function () {
        this.roles = this.localStorage.getObject("roles");
        if (!this.roles) {
            return;
        }
        ;
        this.checkEditor();
        this.checkNewsmaker();
    };
    RolesCheckedService.prototype.checkEditor = function () {
        if (this.checkRole("NewsFull")) {
            this.checkedRoles.isEditor = true;
        }
    };
    RolesCheckedService.prototype.checkNewsmaker = function () {
        if (this.checkRole("NewsStart")) {
            this.checkedRoles.isEditor = true;
        }
    };
    RolesCheckedService.prototype.checkRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    RolesCheckedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.LocalStorageMine])
    ], RolesCheckedService);
    return RolesCheckedService;
}());
exports.RolesCheckedService = RolesCheckedService;
//# sourceMappingURL=roles-cheked.service.js.map