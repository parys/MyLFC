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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_1 = require("../shared/index");
var app_constants_1 = require("../app.constants");
var AuthService = (function () {
    function AuthService(http, http1, localStorage, rolesCheckedService, router, configuration) {
        this.http = http;
        this.http1 = http1;
        this.localStorage = localStorage;
        this.rolesCheckedService = rolesCheckedService;
        this.router = router;
        this.configuration = configuration;
        this.roles = [];
        this.isUserLogined();
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        var perams = "grant_type=password&username=" + username + "&password=" + password + "&client_id=client_id3";
        this.http1.post(this.configuration.server + "connect/token", perams, {
            headers: headers
        })
            .subscribe(function (data) { return _this.parseLoginAnswer(data); }, function (error) {
            if (error._body === "unconfirmed_email") {
                _this.router.navigate(["/unconfirmedEmail"]);
                return;
            }
            console.log(error);
        }, function () { return _this.getUserId(); });
        return true;
    };
    AuthService.prototype.logout = function () {
        this.localStorage.removeAuthTokens();
        this.rolesCheckedService.checkRoles();
    };
    AuthService.prototype.isUserInRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    AuthService.prototype.isUserLogined = function () {
        var _this = this;
        var result = false;
        this.http.get(this.configuration.serverWithApiUrl + "account/isSignedIn")
            .subscribe(function (data) { return result = true; }, function (error) { return _this.localStorage.removeAllData(); }, function () {
            if (result && _this.localStorage.hasAccessToken()) {
                _this.roles = _this.localStorage.getRoles();
                _this.id = _this.localStorage.getUserId();
            }
            else {
                _this.localStorage.removeAllData();
            }
        });
    };
    AuthService.prototype.parseLoginAnswer = function (item) {
        this.localStorage.setAuthTokens(item);
    };
    AuthService.prototype.parseRoles = function (item) {
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
    };
    AuthService.prototype.getRoles = function () {
        var _this = this;
        this.http.get(this.configuration.serverWithApiUrl + "role")
            .subscribe(function (data) { return _this.parseRoles(data); }, function (error) { return console.log(error); }, function () { return _this.rolesCheckedService.checkRoles(); });
    };
    AuthService.prototype.getUserId = function () {
        var _this = this;
        this.http.get(this.configuration.serverWithApiUrl + "user/getId")
            .subscribe(function (data) { return _this.id = +JSON.parse(data.text()); }, function (error) { return console.log(error); }, function () {
            _this.localStorage.setUserId(_this.id);
            _this.getRoles();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper,
        http_1.Http,
        index_1.LocalStorageService,
        index_1.RolesCheckedService,
        router_1.Router,
        app_constants_1.Configuration])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map