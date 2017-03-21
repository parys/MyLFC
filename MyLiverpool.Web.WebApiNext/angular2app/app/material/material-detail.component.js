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
var platform_browser_1 = require("@angular/platform-browser");
var material_service_1 = require("./material.service");
var router_1 = require("@angular/router");
var materialType_enum_1 = require("../materialCategory/materialType.enum");
var index_1 = require("../shared/index");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var MaterialDetailComponent = (function () {
    function MaterialDetailComponent(service, route, localStorage, rolesChecked, router, titleService) {
        this.service = service;
        this.route = route;
        this.localStorage = localStorage;
        this.rolesChecked = rolesChecked;
        this.router = router;
        this.titleService = titleService;
        this.title = titleService;
    }
    MaterialDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.service.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    MaterialDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MaterialDetailComponent.prototype.showActivateModal = function (index) {
        this.activateModal.show();
    };
    MaterialDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    MaterialDetailComponent.prototype.hideModal = function () {
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    MaterialDetailComponent.prototype.activate = function () {
        var _this = this;
        var result;
        this.service.activate(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.pending = false;
                _this.hideModal();
            }
        });
    };
    MaterialDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.service.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.hideModal();
                _this.router.navigate(["/" + materialType_enum_1.MaterialType[_this.type].toLowerCase()]);
            }
        });
    };
    MaterialDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    };
    MaterialDetailComponent.prototype.addView = function () {
        var id = this.item.id;
        if (!this.localStorage.tryAddViewForNews(id)) {
            this.service.addView(id).subscribe(function (data) { return data; });
        }
    };
    return MaterialDetailComponent;
}());
__decorate([
    core_1.ViewChild("activateModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialDetailComponent.prototype, "activateModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialDetailComponent.prototype, "deleteModal", void 0);
MaterialDetailComponent = __decorate([
    core_1.Component({
        selector: "material-detail",
        template: require("./material-detail.component.html")
    }),
    __metadata("design:paramtypes", [material_service_1.MaterialService,
        router_1.ActivatedRoute,
        index_1.LocalStorageService,
        index_1.RolesCheckedService,
        router_1.Router,
        platform_browser_1.Title])
], MaterialDetailComponent);
exports.MaterialDetailComponent = MaterialDetailComponent;
//# sourceMappingURL=material-detail.component.js.map