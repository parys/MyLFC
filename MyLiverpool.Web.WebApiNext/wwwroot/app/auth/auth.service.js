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
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var index_1 = require("../shared/index");
var AuthService = (function () {
    function AuthService(http, http1, localStorage, rolesCheckedService) {
        this.http = http;
        this.http1 = http1;
        this.localStorage = localStorage;
        this.rolesCheckedService = rolesCheckedService;
        this.isLoggedIn = false;
        this.roles = [];
        // console.log(this.localStorage.get('access_token'));
        if (this.localStorage.get("access_token")) {
            console.log("auth at start");
            this.isLoggedIn = true;
            //   console.log(this.localStorage.getObject("roles"));
            this.roles = this.localStorage.getObject("roles");
            this.id = +this.localStorage.get("userId");
        }
        else {
            this.localStorage.remove("roles");
        }
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        // headers.append('client_id', 'client_id3');
        // headers.append('client_secret', 'client_secret44');
        //   this.createAuthorizationHeader(headers);
        //  let perams = { grant_type: "password", userName: username, password: password };
        var perams = "grant_type=password&username=" + username + "&password=" + password + "&client_id=client_id3";
        var result = this.http1.post("connect/token", perams, {
            headers: headers
        });
        result.subscribe(function (data) { return _this.parseLoginAnswer(data); }, function (error) { return console.log(error); }, function () { return _this.getUserId(); });
        return true;
    };
    AuthService.prototype.getRoles = function () {
        var _this = this;
        this.http.get("api/role")
            .subscribe(function (data) { return _this.parseRoles(data); }, function (error) { return console.log(error); }, function () { return _this.rolesCheckedService.checkRoles(); });
    };
    AuthService.prototype.logout = function () {
        this.localStorage.remove("token_type");
        this.localStorage.remove("access_token");
        this.localStorage.remove("expires_in");
        this.localStorage.remove("refresh_token");
        this.localStorage.remove("roles");
        this.localStorage.remove("userId");
        this.isLoggedIn = false;
        this.rolesCheckedService.checkRoles();
    };
    AuthService.prototype.parseLoginAnswer = function (item) {
        var response = JSON.parse(item._body); // todo migrate to es6 storage
        this.localStorage.setObject("token_type", response.token_type);
        this.localStorage.setObject("access_token", response.access_token);
        this.localStorage.setObject("expires_in", response.expires_in);
        this.localStorage.setObject("refresh_token", response.refresh_token);
        this.isLoggedIn = true;
    };
    AuthService.prototype.parseRoles = function (item) {
        this.roles = item._body.split(", ");
        this.localStorage.setObject("roles", this.roles);
    };
    AuthService.prototype.getUserId = function () {
        var _this = this;
        this.http.get("api/user/getId")
            .subscribe(function (data) { return _this.id = +JSON.parse(data._body); }, function (error) { return console.log(error); }, function () {
            _this.localStorage.set("userId", _this.id.toString());
            _this.getRoles();
        });
    };
    AuthService.prototype.isUserInRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, http_1.Http, index_1.LocalStorageMine, index_1.RolesCheckedService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map