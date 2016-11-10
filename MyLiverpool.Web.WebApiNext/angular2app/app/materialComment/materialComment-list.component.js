var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { MaterialCommentService } from "./materialComment.service";
import { Location } from "@angular/common";
import { RolesCheckedService } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";
export var MaterialCommentListComponent = (function () {
    function MaterialCommentListComponent(materialCommentService, location, rolesChecked) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = undefined;
    }
    MaterialCommentListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.update();
    };
    MaterialCommentListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "materialComment/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    MaterialCommentListComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load comment lits"); });
    };
    MaterialCommentListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = undefined;
        this.deleteModal.hide();
    };
    MaterialCommentListComponent.prototype.verify = function (index) {
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
    MaterialCommentListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    MaterialCommentListComponent.prototype.delete = function () {
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
        ViewChild("deleteModal"), 
        __metadata('design:type', ModalDirective)
    ], MaterialCommentListComponent.prototype, "deleteModal", void 0);
    MaterialCommentListComponent = __decorate([
        Component({
            selector: "materialComment-list",
            template: require("./materialComment-list.component.html")
        }), 
        __metadata('design:paramtypes', [MaterialCommentService, Location, RolesCheckedService])
    ], MaterialCommentListComponent);
    return MaterialCommentListComponent;
}());
//# sourceMappingURL=materialComment-list.component.js.map