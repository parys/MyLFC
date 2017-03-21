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
var image_service_1 = require("./image.service");
var index_1 = require("../shared/index");
var ImageAdditionComponent = (function () {
    function ImageAdditionComponent(configuration, storage, service) {
        this.configuration = configuration;
        this.storage = storage;
        this.service = service;
        this.isMultiple = true;
        this.loadedImage = new core_1.EventEmitter();
    }
    ImageAdditionComponent.prototype.ngOnInit = function () {
    };
    ImageAdditionComponent.prototype.ngOnDestroy = function () { };
    ImageAdditionComponent.prototype.onUploadImage = function (event) {
        var _this = this;
        if (event.srcElement.files.length > 0) {
            this.service.uploadImage(event.srcElement.files)
                .subscribe(function (result) {
                if (_this.isMultiple) {
                    _this.uploadedFiles = result;
                }
                else {
                    _this.loadedImage.emit(result[0]);
                }
            }, function (error) { return console.log(error); }, function () { });
        }
    };
    return ImageAdditionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ImageAdditionComponent.prototype, "isMultiple", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ImageAdditionComponent.prototype, "loadedImage", void 0);
ImageAdditionComponent = __decorate([
    core_1.Component({
        selector: "image-addition",
        template: require("./image-addition.component.html")
    }),
    __metadata("design:paramtypes", [app_constants_1.Configuration,
        index_1.LocalStorageService,
        image_service_1.ImageService])
], ImageAdditionComponent);
exports.ImageAdditionComponent = ImageAdditionComponent;
//# sourceMappingURL=image-addition.component.js.map