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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forumTheme_service_1 = require("./forumTheme.service");
var index_1 = require("../forumMessage/index");
var index_2 = require("../../shared/index");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ForumThemeListComponent = (function () {
    function ForumThemeListComponent(service, messageService, rolesChecked, route, formBuilder, location) {
        this.service = service;
        this.messageService = messageService;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.formBuilder = formBuilder;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
    }
    ForumThemeListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.page = +this.route.snapshot.queryParams["page"] || 1;
        this.update(+this.route.snapshot.params["id"]);
    };
    ;
    ForumThemeListComponent.prototype.ngOnDestroy = function () {
    };
    ForumThemeListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update(this.item.id);
        var newUrl = "forum/theme/" + this.item.id + "?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ForumThemeListComponent.prototype.addNewMessage = function (message) {
        this.items.push(message);
        this.totalItems += 1;
    };
    ForumThemeListComponent.prototype.showEditModal = function (index) {
        this.selectedItemIndex = index;
        this.initForm(index);
        this.editCommentModal.show();
    };
    ForumThemeListComponent.prototype.hideEditModal = function () {
        this.commentForm = null;
        this.selectedItemIndex = null;
        this.editCommentModal.hide();
    };
    ForumThemeListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    ForumThemeListComponent.prototype.hideDeleteModal = function () {
        this.deleteModal.hide();
    };
    ForumThemeListComponent.prototype.editComment = function () {
        var _this = this;
        var comment = this.items[this.selectedItemIndex];
        comment.message = this.commentForm.get("message").value;
        this.messageService.update(comment.id, comment)
            .subscribe(function (data) {
            _this.items[_this.selectedItemIndex].message = data.message;
            _this.items[_this.selectedItemIndex].lastModifiedTime = data.lastModifiedTime;
            _this.hideEditModal();
        }, function (error) { return console.log(error); }, function () { });
    };
    ForumThemeListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.messageService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideDeleteModal();
            }
        });
    };
    ForumThemeListComponent.prototype.initForm = function (index) {
        if (index === void 0) { index = null; }
        var initValue = index !== null ? this.items[index].message : "";
        this.commentForm = this.formBuilder.group({
            'message': [initValue, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    ForumThemeListComponent.prototype.update = function (id) {
        var _this = this;
        this.service.getSingleWithMessages(id, this.page)
            .subscribe(function (data) {
            _this.item = data;
            _this.itemsPerPage = data.messages.itemPerPage;
            _this.items = data.messages.list;
            _this.totalItems = data.messages.totalItems;
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumThemeListComponent;
}());
__decorate([
    core_1.ViewChild("editCommentModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ForumThemeListComponent.prototype, "editCommentModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ForumThemeListComponent.prototype, "deleteModal", void 0);
ForumThemeListComponent = __decorate([
    core_1.Component({
        selector: "forumTheme-list",
        template: require("./forumTheme-list.component.html")
    }),
    __metadata("design:paramtypes", [forumTheme_service_1.ForumThemeService,
        index_1.ForumMessageService,
        index_2.RolesCheckedService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        common_1.Location])
], ForumThemeListComponent);
exports.ForumThemeListComponent = ForumThemeListComponent;
//# sourceMappingURL=forumTheme-list.component.js.map