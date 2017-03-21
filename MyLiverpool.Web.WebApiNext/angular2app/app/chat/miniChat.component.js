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
var chatMessage_service_1 = require("./chatMessage.service");
var index_1 = require("../shared/index");
var MiniChatComponent = (function () {
    function MiniChatComponent(service, route, formBuilder, rolesChecked) {
        this.service = service;
        this.route = route;
        this.formBuilder = formBuilder;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    MiniChatComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.update();
    };
    MiniChatComponent.prototype.update = function () {
        var _this = this;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
    };
    MiniChatComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.create(this.messageForm.value)
            .subscribe(function (data) {
            _this.items.unshift(data);
            _this.messageForm.reset();
        }, function (error) { return console.log(error); }, function () { });
    };
    MiniChatComponent.prototype.initForm = function () {
        this.messageForm = this.formBuilder.group({
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
    };
    return MiniChatComponent;
}());
MiniChatComponent = __decorate([
    core_1.Component({
        selector: "mini-chat",
        template: require("./miniChat.component.html")
    }),
    __metadata("design:paramtypes", [chatMessage_service_1.ChatMessageService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        index_1.RolesCheckedService])
], MiniChatComponent);
exports.MiniChatComponent = MiniChatComponent;
//# sourceMappingURL=miniChat.component.js.map