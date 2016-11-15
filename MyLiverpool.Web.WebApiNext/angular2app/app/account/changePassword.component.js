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
var account_service_1 = require("./account.service");
var index_1 = require("../shared/index");
var changePassword_model_1 = require("./changePassword.model");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = this.formBuilder.group({
            'oldPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'newPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        }, { validator: index_1.GlobalValidators.matchingPasswords("newPassword", "confirmPassword") });
    };
    ChangePasswordComponent.prototype.onSubmit = function (ra) {
        var model = new changePassword_model_1.ChangePassword();
        model.oldPassword = this.passwordForm.controls["oldPassword"].value;
        model.newPassword = this.passwordForm.controls["newPassword"].value;
        model.confirmPassword = this.passwordForm.controls["confirmPassword"].value;
        this.service.changePassword(model).subscribe(function (data) {
            if (data) {
                console.log("password changed");
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: "change-password",
            template: require("./changePassword.component.html")
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=changePassword.component.js.map