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
var signup_model_1 = require("./signup.model");
var account_service_1 = require("./account.service");
var index_1 = require("../shared/index");
var account_validators_1 = require("./account.validators");
var AccountSignupComponent = (function () {
    function AccountSignupComponent(accountService, formBuilder) {
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.result = false;
        this.isHuman = false;
    }
    AccountSignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'userName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)
                ]), new account_validators_1.AccountValidators(this.accountService).isUserNameUnique],
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                    index_1.GlobalValidators.mailFormat
                ]),
                new account_validators_1.AccountValidators(this.accountService).isEmailUnique],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])]
        }, { validator: index_1.GlobalValidators.matchingPasswords("password", "confirmPassword") });
    };
    AccountSignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var signup = new signup_model_1.Signup();
        signup.userName = this.registerForm.controls["userName"].value;
        signup.email = this.registerForm.controls["email"].value;
        signup.password = this.registerForm.controls["password"].value;
        signup.confirmPassword = this.registerForm.controls["confirmPassword"].value;
        this.accountService
            .create(signup)
            .subscribe(function (data) {
            if (data) {
                _this.result = true;
            }
        }, function (error) { return console.log(error); }, function () { });
        this.isHuman = false;
    };
    return AccountSignupComponent;
}());
AccountSignupComponent = __decorate([
    core_1.Component({
        selector: "account-signup",
        template: require("./account-signup.component.html")
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
], AccountSignupComponent);
exports.AccountSignupComponent = AccountSignupComponent;
//# sourceMappingURL=account-signup.component.js.map