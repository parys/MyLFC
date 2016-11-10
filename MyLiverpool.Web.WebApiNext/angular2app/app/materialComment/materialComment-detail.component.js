var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { RolesCheckedService } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";
export var MaterialCommentDetailComponent = (function () {
    function MaterialCommentDetailComponent(materialCommentService, location, rolesChecked, formBuilder) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
    }
    MaterialCommentDetailComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                    Validators.required])],
            'answer': ["", Validators.compose([
                    Validators.required])]
        });
    };
    MaterialCommentDetailComponent.prototype.showAddCommentModal = function (index) {
        this.addCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideModal = function () {
        this.addCommentModal.hide();
        this.hideEditModal();
        this.deleteModal.hide();
    };
    MaterialCommentDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideEditModal = function () {
        this.editCommentModal.hide();
        this.cleanControls();
    };
    MaterialCommentDetailComponent.prototype.addComment = function (value) {
        var _this = this;
        var comment = this.getComment();
        this.materialCommentService.create(comment)
            .subscribe(function (data) {
            _this.item.children.push(data);
            _this.cleanControls();
            _this.addCommentModal.hide();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.children.forEach(function (x) {
                    if (_this.parent) {
                        x.parentId = _this.parent.id;
                        _this.parent.children.push(x);
                    }
                    else {
                        x.parentId = undefined;
                    }
                });
                _this.item = undefined;
                _this.hideModal();
            }
        });
    };
    MaterialCommentDetailComponent.prototype.showEditModal = function () {
        this.commentForm.patchValue(this.item);
        this.editCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.edit = function () {
        var _this = this;
        var comment = this.getComment();
        comment.answer = this.commentForm.controls["answer"].value;
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(function (data) {
            _this.item = comment;
            _this.hideEditModal();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.getComment = function () {
        var comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        return comment;
    };
    MaterialCommentDetailComponent.prototype.cleanControls = function () {
        this.commentForm.controls["message"].patchValue("");
        this.commentForm.controls["message"].updateValueAndValidity();
        this.commentForm.controls["answer"].patchValue("");
        this.commentForm.controls["answer"].updateValueAndValidity();
    };
    __decorate([
        Input(), 
        __metadata('design:type', MaterialComment)
    ], MaterialCommentDetailComponent.prototype, "item", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentDetailComponent.prototype, "deep", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], MaterialCommentDetailComponent.prototype, "canCommentary", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentDetailComponent.prototype, "materialId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', MaterialComment)
    ], MaterialCommentDetailComponent.prototype, "parent", void 0);
    __decorate([
        ViewChild("addCommentModal"), 
        __metadata('design:type', ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "addCommentModal", void 0);
    __decorate([
        ViewChild("editCommentModal"), 
        __metadata('design:type', ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "editCommentModal", void 0);
    __decorate([
        ViewChild("deleteModal"), 
        __metadata('design:type', ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "deleteModal", void 0);
    MaterialCommentDetailComponent = __decorate([
        Component({
            selector: "materialComment-detail",
            template: require("./materialComment-detail.component.html")
        }), 
        __metadata('design:paramtypes', [MaterialCommentService, Location, RolesCheckedService, FormBuilder])
    ], MaterialCommentDetailComponent);
    return MaterialCommentDetailComponent;
}());
//# sourceMappingURL=materialComment-detail.component.js.map