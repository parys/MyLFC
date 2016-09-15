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
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const signup_model_1 = require("./signup.model");
const account_service_1 = require("./account.service");
let AccountSignupComponent = class AccountSignupComponent {
    constructor(accountService, formBuilder) {
        this.accountService = accountService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            'userName': ['123', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'email': ['22', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'password': ['', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ['', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'fullName': ['', forms_1.Validators.compose([
                    forms_1.Validators.required,])],
            'birthday': ['', forms_1.Validators.compose([
                    forms_1.Validators.required,])]
        });
    }
    onSubmit(value) {
        console.log('you submitted value: ', value);
        var signup = new signup_model_1.Signup();
        signup.userName = this.registerForm.controls["userName"].value;
        signup.email = this.registerForm.controls["email"].value;
        signup.password = this.registerForm.controls["password"].value;
        signup.confirmPassword = this.registerForm.controls["confirmPassword"].value;
        signup.fullName = this.registerForm.controls["fullName"].value;
        signup.birthday = this.registerForm.controls["birthday"].value;
        this.accountService
            .Create(signup)
            .subscribe(data => { }, error => console.log(error), () => console.log("user created"));
    }
};
AccountSignupComponent = __decorate([
    core_1.Component({
        selector: 'account-signup',
        templateUrl: 'app/account/account-signup.component.html'
    }), 
    __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
], AccountSignupComponent);
exports.AccountSignupComponent = AccountSignupComponent;
//# sourceMappingURL=account-signup.component.js.map