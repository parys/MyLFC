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
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var app_constants_1 = require('../../app.constants');
var httpWrapper_1 = require("../../shared/httpWrapper");
var NewsService = (function () {
    function NewsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(function (res) { return res.json(); });
        };
        this.GetSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.Create = function (item) {
            var toAdd = JSON.stringify({ ItemName: item });
            return _this.http.post(_this.actionUrl + 'News/', JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.Update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.Delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.AddView = function (id) {
            return _this.http.get(_this.actionUrl + 'AddView/' + id).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + 'material/';
    }
    NewsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map