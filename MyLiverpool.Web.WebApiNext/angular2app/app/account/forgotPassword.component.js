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
import { AccountService } from "./account.service";
import { GlobalValidators } from "../shared/index";
export var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            'email': ["", Validators.compose([
                    Validators.required, GlobalValidators.mailFormat])]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function (ra) {
        this.email = this.forgotForm.controls["email"].value;
        this.service.forgotPassword(this.email).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: "forgot-password",
            template: require("./forgotPassword.component.html")
        }), 
        __metadata('design:paramtypes', [AccountService, FormBuilder])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
//# sourceMappingURL=forgotPassword.component.js.map