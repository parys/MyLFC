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
var materialComment_service_1 = require("./materialComment.service");
var common_1 = require("@angular/common");
var index_1 = require("../shared/index");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var MaterialCommentSectionComponent = (function () {
    function MaterialCommentSectionComponent(materialCommentService, location, rolesChecked) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.items = [];
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = undefined;
    }
    MaterialCommentSectionComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.update();
    };
    MaterialCommentSectionComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        //  let newUrl = `materialComment/list/${this.page}`;
        //   if (this.categoryId) {
        //        newUrl = `${newUrl}/${this.categoryId}`;
        //    }
        //   this.location.replaceState(newUrl);
    };
    ;
    MaterialCommentSectionComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load comment lits"); });
    };
    MaterialCommentSectionComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentSectionComponent.prototype.hideModal = function () {
        this.selectedItemIndex = undefined;
        this.deleteModal.hide();
    };
    MaterialCommentSectionComponent.prototype.verify = function (index) {
        var _this = this;
        var result;
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe(function (data) { return result = data; }, function (error) { return console.log(error); }, function () {
            if (result) {
                _this.items[index].isVerified = true;
            }
        });
    };
    MaterialCommentSectionComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    MaterialCommentSectionComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentSectionComponent.prototype, "newsId", void 0);
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], MaterialCommentSectionComponent.prototype, "deleteModal", void 0);
    MaterialCommentSectionComponent = __decorate([
        core_1.Component({
            selector: "comments",
            templateUrl: "app/materialComment/materialComment-section.component.html"
        }), 
        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
    ], MaterialCommentSectionComponent);
    return MaterialCommentSectionComponent;
}());
exports.MaterialCommentSectionComponent = MaterialCommentSectionComponent;
//# sourceMappingURL=materialComment-section.component.js.map