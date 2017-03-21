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
var forumMessage_model_1 = require("./forumMessage.model");
var forumMessage_service_1 = require("./forumMessage.service");
var index_1 = require("../../shared/index");
var ForumMessageAdditionComponent = (function () {
    function ForumMessageAdditionComponent(service, rolesChecked, formBuilder) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
        this.newMessage = new core_1.EventEmitter();
    }
    ForumMessageAdditionComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.minLength(3)])]
        });
    };
    ForumMessageAdditionComponent.prototype.onSubmit = function () {
        var _this = this;
        var comment = new forumMessage_model_1.ForumMessage();
        comment.message = this.commentForm.controls["message"].value;
        comment.themeId = this.themeId;
        this.service.create(comment)
            .subscribe(function (data) {
            _this.newMessage.emit(data);
            _this.commentForm.reset();
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumMessageAdditionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ForumMessageAdditionComponent.prototype, "themeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ForumMessageAdditionComponent.prototype, "newMessage", void 0);
ForumMessageAdditionComponent = __decorate([
    core_1.Component({
        selector: "forumMessage-addition",
        template: require("./forumMessage-addition.component.html")
    }),
    __metadata("design:paramtypes", [forumMessage_service_1.ForumMessageService, index_1.RolesCheckedService,
        forms_1.FormBuilder])
], ForumMessageAdditionComponent);
exports.ForumMessageAdditionComponent = ForumMessageAdditionComponent;
//# sourceMappingURL=forumMessage-addition.component.js.map