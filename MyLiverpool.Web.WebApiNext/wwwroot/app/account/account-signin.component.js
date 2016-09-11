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
const auth_service_1 = require("../auth/auth.service");
let AccountSigninComponent = class AccountSigninComponent {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'password': ['', forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }
    onSubmit(ra) {
        console.log("1" + ra);
        console.log(this.loginForm.controls["username"].value);
        this.username = this.loginForm.controls["username"].value;
        this.password = this.loginForm.controls["password"].value;
        console.log(this.username + " " + this.password);
        let result = this.authService.login(this.username, this.password);
        //  if(result)
    }
};
AccountSigninComponent = __decorate([
    core_1.Component({
        selector: 'account-signin',
        templateUrl: 'app/account/account-signin.component.html'
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder])
], AccountSigninComponent);
exports.AccountSigninComponent = AccountSigninComponent;
//# sourceMappingURL=account-signin.component.js.map