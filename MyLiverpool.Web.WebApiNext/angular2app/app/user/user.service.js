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
var httpWrapper_1 = require("../shared/httpWrapper");
var app_constants_1 = require("../app.constants");
var UserService = (function () {
    function UserService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)))
                .map(function (response) { return response.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.updateRoleGroup = function (id, roleGroupId) {
            return _this.http.put(_this.actionUrl + "updateRoleGroup/" + id + "/" + roleGroupId, "").map(function (response) { return response.json(); });
        };
        this.ban = function (id, banDaysCount) {
            return _this.http.put(_this.actionUrl + "ban/" + id + "/" + banDaysCount, "").map(function (response) { return response.json(); });
        };
        this.unban = function (id) {
            return _this.http.put(_this.actionUrl + "unban/" + id, "").map(function (response) { return response.json(); });
        };
        this.resetAvatar = function (id) {
            return _this.http.put(_this.actionUrl + "avatar/" + id + "/reset", "").map(function (response) { return response.text(); });
        };
        this.updateAvatar = function (file) {
            var formData = new FormData();
            formData.append("uploadFile", file, file.name);
            return _this.http.post(_this.actionUrl + "avatar/", formData, true).map(function (response) { return response.text(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "user/";
    }
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map