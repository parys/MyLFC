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
//import { NgControl } from '@angular/forms';
const common_1 = require('@angular/common');
const router_1 = require('@angular/router');
const auth_service_1 = require("../auth/auth.service");
const signup_model_1 = require("./signup.model");
let AccountSignupComponent = class AccountSignupComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.item = new signup_model_1.Signup();
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }
    register() {
        console.log(this.item);
        console.log(this.item.username);
    }
};
AccountSignupComponent = __decorate([
    core_1.Component({
        selector: 'account-signup',
        templateUrl: 'app/account/account-signup.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES] //,
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], AccountSignupComponent);
exports.AccountSignupComponent = AccountSignupComponent;
//# sourceMappingURL=account-signup.component.js.map