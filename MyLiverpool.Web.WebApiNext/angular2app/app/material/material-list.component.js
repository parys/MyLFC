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
var material_service_1 = require("./material.service");
var materialFilters_model_1 = require("./materialFilters.model");
var router_1 = require("@angular/router");
var index_1 = require("../shared/index");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var materialType_enum_1 = require("../materialCategory/materialType.enum");
var MaterialListComponent = (function () {
    function MaterialListComponent(router, materialService, route, location, rolesChecked) {
        this.router = router;
        this.materialService = materialService;
        this.route = route;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
        if (route.snapshot.data["type"] === materialType_enum_1.MaterialType[materialType_enum_1.MaterialType.News]) {
            this.type = materialType_enum_1.MaterialType.News;
        }
        else {
            this.type = materialType_enum_1.MaterialType.Blog;
        }
        this.parseQueryParamsAndUpdate(route);
    }
    MaterialListComponent.prototype.showActivateModal = function (index) {
        this.selectedItemIndex = index;
        this.activateModal.show();
    };
    MaterialListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    MaterialListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    MaterialListComponent.prototype.activate = function () {
        var _this = this;
        var result;
        var news = this.items[this.selectedItemIndex];
        this.materialService.activate(news.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                news.pending = false;
                _this.hideModal();
            }
        });
    };
    MaterialListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    MaterialListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
    };
    MaterialListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = materialType_enum_1.MaterialType[this.type].toLowerCase() + "?page=" + this.page;
        if (this.categoryId) {
            newUrl = newUrl + "&categoryId=" + this.categoryId;
        }
        if (this.userName) {
            newUrl = newUrl + "&userName=" + this.userName;
        }
        this.location.replaceState(newUrl);
    };
    ;
    MaterialListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialListComponent.prototype.update = function () {
        var _this = this;
        var filters = new materialFilters_model_1.MaterialFilters();
        filters.categoryId = this.categoryId || null;
        filters.materialType = materialType_enum_1.MaterialType[this.type];
        filters.userName = this.userName || null;
        filters.page = this.page;
        this.materialService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialListComponent.prototype.parseQueryParamsAndUpdate = function (route) {
        var qParams = route.snapshot.queryParams;
        this.page = qParams["page"] || 1;
        this.categoryId = qParams["categoryId"] || "";
        this.userName = qParams["userName"] || "";
        this.update();
    };
    return MaterialListComponent;
}());
__decorate([
    core_1.ViewChild("activateModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialListComponent.prototype, "activateModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialListComponent.prototype, "deleteModal", void 0);
MaterialListComponent = __decorate([
    core_1.Component({
        selector: "material-list",
        template: require("./material-list.component.html")
    }),
    __metadata("design:paramtypes", [router_1.Router,
        material_service_1.MaterialService,
        router_1.ActivatedRoute,
        common_1.Location,
        index_1.RolesCheckedService])
], MaterialListComponent);
exports.MaterialListComponent = MaterialListComponent;
//# sourceMappingURL=material-list.component.js.map