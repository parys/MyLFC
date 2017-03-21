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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var image_service_1 = require("./image.service");
var ImageListComponent = (function () {
    function ImageListComponent(service, location, route) {
        this.service = service;
        this.location = location;
        this.route = route;
        this.defaultPath = "content\\images";
        this.path = this.defaultPath;
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            if (params["path"]) {
                _this.path = params["path"];
            }
            _this.updateFolder(_this.path);
        });
    };
    ImageListComponent.prototype.ngOnDestroy = function () {
    };
    ImageListComponent.prototype.showDetails = function (file) {
        this.selectedItem = file;
    };
    ImageListComponent.prototype.removeSelection = function () {
        this.selectedItem = null;
    };
    ImageListComponent.prototype.goUp = function () {
        this.path = this.path.substring(0, this.path.lastIndexOf("\\"));
        this.updateFolder(this.path);
    };
    ImageListComponent.prototype.updateFolder = function (path) {
        var _this = this;
        this.service
            .get(path)
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
        this.path = path;
        var newUrl = "image?path=" + path;
        this.location.replaceState(newUrl);
    };
    return ImageListComponent;
}());
ImageListComponent = __decorate([
    core_1.Component({
        selector: "image-list",
        template: require("./image-list.component.html")
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService, common_1.Location, router_1.ActivatedRoute])
], ImageListComponent);
exports.ImageListComponent = ImageListComponent;
//# sourceMappingURL=image-list.component.js.map