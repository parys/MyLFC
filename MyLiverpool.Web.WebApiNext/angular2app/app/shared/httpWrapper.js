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
var localStorage_1 = require("./localStorage");
var HttpWrapper = (function () {
    function HttpWrapper(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    HttpWrapper.prototype.updateHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        if (this.localStorage.get("token_type")) {
            headers.append("Authorization", this.localStorage.getObject("token_type") + " " + this.localStorage.getObject("access_token"));
        }
        return headers;
    };
    HttpWrapper.prototype.get = function (url) {
        var result = this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
        return result;
    };
    HttpWrapper.prototype.post = function (url, data) {
        var headers = this.updateHeaders();
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpWrapper.prototype.put = function (url, data) {
        var headers = this.updateHeaders();
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpWrapper.prototype.delete = function (url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    HttpWrapper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, localStorage_1.LocalStorageMine])
    ], HttpWrapper);
    return HttpWrapper;
}());
exports.HttpWrapper = HttpWrapper;
//# sourceMappingURL=httpWrapper.js.map