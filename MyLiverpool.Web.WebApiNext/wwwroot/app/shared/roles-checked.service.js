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
        var _this = this;
        this.localStorage = localStorage;
        this.checkedRoles = {
            isLogined: false,
            isEditor: false,
            isNewsmaker: false,
            isModerator: false,
            isAdminAssistant: false,
            isSelf: function (userId) { return _this.isSelf(userId); }
        };
        this.checkRoles();
    }
    RolesCheckedService.prototype.checkRoles = function () {
        this.roles = this.localStorage.getObject("roles");
        if (!this.roles) {
            return;
        }
        ;
        this.checkedRoles.isLogined = true;
        this.checkEditor();
        this.checkNewsmaker();
        this.checkModerator();
        this.checkAdminAssistant();
    };
    RolesCheckedService.prototype.checkEditor = function () {
        if (this.checkRole("NewsFull")) {
            this.checkedRoles.isEditor = true;
        }
    };
    RolesCheckedService.prototype.checkNewsmaker = function () {
        if (this.checkRole("NewsStart")) {
            this.checkedRoles.isNewsmaker = true;
        }
    };
    RolesCheckedService.prototype.checkModerator = function () {
        if (this.checkRole("UserStart")) {
            this.checkedRoles.isModerator = true;
        }
    };
    RolesCheckedService.prototype.checkAdminAssistant = function () {
        if (this.checkRole("AdminStart")) {
            this.checkedRoles.isAdminAssistant = true;
        }
    };
    RolesCheckedService.prototype.checkRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    RolesCheckedService.prototype.isSelf = function (authorId) {
        var userId = +this.localStorage.get("userId");
        return (userId === authorId);
    };
    RolesCheckedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.LocalStorageMine])
    ], RolesCheckedService);
    return RolesCheckedService;
}());
exports.RolesCheckedService = RolesCheckedService;
//# sourceMappingURL=roles-checked.service.js.map