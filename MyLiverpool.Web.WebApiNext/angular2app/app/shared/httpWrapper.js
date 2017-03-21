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
var localStorage_service_1 = require("./localStorage.service");
var HttpWrapper = (function () {
    function HttpWrapper(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    HttpWrapper.prototype.updateHeaders = function (withFiles) {
        if (withFiles === void 0) { withFiles = false; }
        var headers = new http_1.Headers();
        if (withFiles) {
            headers.append("Accept", "application/json");
        }
        else {
            headers.append("Content-type", "application/json");
        }
        if (this.localStorage.hasAccessToken()) {
            headers.append("Authorization", this.localStorage.getAccessTokenWithType());
        }
        return headers;
    };
    HttpWrapper.prototype.get = function (url) {
        return this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    HttpWrapper.prototype.post = function (url, data, withFiles) {
        if (withFiles === void 0) { withFiles = false; }
        return this.http.post(url, data, {
            headers: this.updateHeaders(withFiles)
        });
    };
    HttpWrapper.prototype.put = function (url, data) {
        return this.http.put(url, data, {
            headers: this.updateHeaders()
        });
    };
    HttpWrapper.prototype.delete = function (url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    return HttpWrapper;
}());
HttpWrapper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        localStorage_service_1.LocalStorageService])
], HttpWrapper);
exports.HttpWrapper = HttpWrapper;
//# sourceMappingURL=httpWrapper.js.map