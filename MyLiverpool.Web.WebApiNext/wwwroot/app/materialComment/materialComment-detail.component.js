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
var materialComment_model_1 = require("./materialComment.model");
var materialComment_service_1 = require("./materialComment.service");
var common_1 = require("@angular/common");
var index_1 = require("../shared/index");
var MaterialCommentDetailComponent = (function () {
    //  selectedItemIndex: number = undefined;
    //  @ViewChild("deleteModal") deleteModal: ModalDirective;
    function MaterialCommentDetailComponent(materialCommentService, location, rolesChecked) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
    }
    MaterialCommentDetailComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        //this.update();
    };
    //pageChanged(event: any): void {
    //    this.page = event.page;
    //    this.update();
    //    let newUrl = `materialComment/list/${this.page}`;
    //    //   if (this.categoryId) {
    //    //        newUrl = `${newUrl}/${this.categoryId}`;
    //    //    }
    //    this.location.replaceState(newUrl);
    //};
    //private update(): void {
    //    this.materialCommentService
    //        .getAll(this.page)
    //        .subscribe(data => this.parsePageable(data),
    //        error => console.log(error),
    //        () => console.log("success load comment lits"));
    //}
    //private parsePageable(pageable: Pageable<MaterialComment>): void {
    //    this.items = pageable.list;
    //    this.page = pageable.pageNo;
    //    this.itemsPerPage = pageable.itemPerPage;
    //    this.totalItems = pageable.totalItems;
    //}
    //hideModal(): void {
    //    this.selectedItemIndex = undefined;
    //    this.deleteModal.hide();
    //}
    //verify(index: number): void {
    //    let result;
    //    this.materialCommentService
    //        .verify(this.items[index].id)
    //        .subscribe(data => result = data,
    //        error => console.log(error),
    //        () => {
    //            if (result) {
    //                this.items[index].isVerified = true;
    //            }
    //        }
    //        );
    //}
    //showDeleteModal(index: number): void {
    //    this.selectedItemIndex = index;
    //    this.deleteModal.show();
    //}
    MaterialCommentDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item = undefined;
            }
        });
    };
    MaterialCommentDetailComponent.prototype.edit = function () {
        console.log("edit");
        //  this.materialCommentService.delete(this.items[index].id).subscribe(data => data,
        //      error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', materialComment_model_1.MaterialComment)
    ], MaterialCommentDetailComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentDetailComponent.prototype, "deep", void 0);
    MaterialCommentDetailComponent = __decorate([
        core_1.Component({
            selector: "materialComment-detail",
            templateUrl: "app/materialComment/materialComment-detail.component.html"
        }), 
        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
    ], MaterialCommentDetailComponent);
    return MaterialCommentDetailComponent;
}());
exports.MaterialCommentDetailComponent = MaterialCommentDetailComponent;
//# sourceMappingURL=materialComment-detail.component.js.map