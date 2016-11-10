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
var account_service_1 = require("./account.service");
var index_1 = require("../shared/index");
var resetPassword_model_1 = require("./resetPassword.model");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(service, route, router, formBuilder) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.code = params["code"];
        });
        this.resetForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
        }, { validator: index_1.GlobalValidators.matchingPasswords("password", "confirmPassword") });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResetPasswordComponent.prototype.onSubmit = function (ra) {
        var resetPassword = new resetPassword_model_1.ResetPassword();
        resetPassword.code = this.code;
        resetPassword.email = this.resetForm.controls["email"].value;
        resetPassword.password = this.resetForm.controls["password"].value;
        resetPassword.confirmPassword = this.resetForm.controls["confirmPassword"].value;
        this.service.resetPassword(resetPassword).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: "reset-password",
            template: require("./resetPassword.component.html")
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetPassword.component.js.map