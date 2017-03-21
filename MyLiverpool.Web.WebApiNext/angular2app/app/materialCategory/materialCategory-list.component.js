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
var router_1 = require("@angular/router");
var materialCategory_service_1 = require("./materialCategory.service");
var materialType_enum_1 = require("./materialType.enum");
var index_1 = require("../shared/index");
var MaterialCategoryListComponent = (function () {
    function MaterialCategoryListComponent(service, rolesChecked, route) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        if (route.snapshot.data["type"] === materialType_enum_1.MaterialType[materialType_enum_1.MaterialType.News]) {
            this.type = materialType_enum_1.MaterialType.News;
        }
        else {
            this.type = materialType_enum_1.MaterialType.Blog;
        }
    }
    MaterialCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.service
            .getAll(this.type)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCategoryListComponent.prototype.parsePageable = function (model) {
        this.items = model;
    };
    MaterialCategoryListComponent.prototype.delete = function (index) {
        this.service.delete(this.items[index].id).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.items.splice(index, 1);
    };
    return MaterialCategoryListComponent;
}());
MaterialCategoryListComponent = __decorate([
    core_1.Component({
        selector: "materialCategory-list",
        template: require("./materialCategory-list.component.html")
    }),
    __metadata("design:paramtypes", [materialCategory_service_1.MaterialCategoryService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute])
], MaterialCategoryListComponent);
exports.MaterialCategoryListComponent = MaterialCategoryListComponent;
//# sourceMappingURL=materialCategory-list.component.js.map