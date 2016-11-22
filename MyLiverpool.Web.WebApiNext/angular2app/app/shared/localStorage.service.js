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
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (!localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
    }
    LocalStorageService.prototype.hasAccessToken = function () {
        return this.get("access_token") !== null;
    };
    LocalStorageService.prototype.getAccessTokenWithType = function () {
        return this.get("token_type") + " " + this.get("access_token");
    };
    LocalStorageService.prototype.getRoles = function () {
        return this.getObject("roles");
    };
    LocalStorageService.prototype.getUserId = function () {
        return +this.get("userId");
    };
    LocalStorageService.prototype.removeRoles = function () {
        this.remove("roles");
    };
    LocalStorageService.prototype.removeAuthTokens = function () {
        this.remove("token_type");
        this.remove("access_token");
        this.remove("expires_in");
        this.remove("refresh_token");
        this.remove("roles");
        this.remove("userId");
    };
    LocalStorageService.prototype.setAuthTokens = function (item) {
        var response = JSON.parse(item._body);
        this.set("token_type", response.token_type);
        this.set("access_token", response.access_token);
        this.set("expires_in", response.expires_in);
        this.set("refresh_token", response.refresh_token);
        return true;
    };
    LocalStorageService.prototype.setRoles = function (roles) {
        this.setObject("roles", roles);
    };
    LocalStorageService.prototype.setUserId = function (id) {
        this.setObject("userId", id);
    };
    LocalStorageService.prototype.tryAddViewForNews = function (id) {
        if (!this.get("material" + id)) {
            this.set("material" + id, "1");
            return true;
        }
        return false;
    };
    LocalStorageService.prototype.set = function (key, value) {
        localStorage[key] = value;
    };
    LocalStorageService.prototype.get = function (key) {
        return localStorage[key] || false;
    };
    LocalStorageService.prototype.setObject = function (key, value) {
        localStorage[key] = JSON.stringify(value);
    };
    LocalStorageService.prototype.getObject = function (key) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return null;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localStorage.service.js.map