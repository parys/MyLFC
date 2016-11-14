var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
export var AccountService = (function () {
    function AccountService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "register/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.confirmEmail = function (userId, code) {
            return _this.http.get(_this.actionUrl + ("confirmEmail?userId=" + userId + "&code=" + code)).map(function (res) { return res.json(); });
        };
        this.forgotPassword = function (email) {
            return _this.http.get(_this.actionUrl + ("forgotPassword?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resendConfirmEmail = function (email) {
            return _this.http.get(_this.actionUrl + ("resendConfirmEmail?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resetPassword = function (model) {
            return _this.http.put(_this.actionUrl + "resetPassword", model).map(function (res) { return res.json(); });
        };
        this.changePassword = function (model) {
            return _this.http.put(_this.actionUrl + "changePassword", model).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "account/";
    }
    AccountService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpWrapper, Configuration])
    ], AccountService);
    return AccountService;
}());
//# sourceMappingURL=account.service.js.map