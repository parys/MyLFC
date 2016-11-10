var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from "./account.service";
import { GlobalValidators } from "../shared/index";
import { ResetPassword } from "./resetPassword.model";
export var ResetPasswordComponent = (function () {
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
            'email': ["", Validators.compose([
                    Validators.required, GlobalValidators.mailFormat])],
            'password': ["", Validators.compose([
                    Validators.required, Validators.minLength(6)])],
            'confirmPassword': ["", Validators.compose([
                    Validators.required, Validators.minLength(6)])],
        }, { validator: GlobalValidators.matchingPasswords("password", "confirmPassword") });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResetPasswordComponent.prototype.onSubmit = function (ra) {
        var resetPassword = new ResetPassword();
        resetPassword.code = this.code;
        resetPassword.email = this.resetForm.controls["email"].value;
        resetPassword.password = this.resetForm.controls["password"].value;
        resetPassword.confirmPassword = this.resetForm.controls["confirmPassword"].value;
        this.service.resetPassword(resetPassword).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    ResetPasswordComponent = __decorate([
        Component({
            selector: "reset-password",
            template: require("./resetPassword.component.html")
        }), 
        __metadata('design:paramtypes', [AccountService, ActivatedRoute, Router, FormBuilder])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
//# sourceMappingURL=resetPassword.component.js.map