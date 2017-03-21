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
var app_constants_1 = require("../app.constants");
var httpWrapper_1 = require("../shared/httpWrapper");
var ImageService = (function () {
    function ImageService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.get = function (path) {
            return _this.http.get(_this.actionUrl + "?path=" + path).map(function (response) { return response.json(); });
        };
        this.uploadImage = function (files) {
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploadFile", files[i], files[i].name);
            }
            ;
            return _this.http.post("" + _this.actionUrl, formData, true).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "image/";
    }
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map