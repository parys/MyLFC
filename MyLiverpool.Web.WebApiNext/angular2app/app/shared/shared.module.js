"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var recaptcha_component_1 = require("./recaptcha.component");
var httpWrapper_1 = require("./httpWrapper");
var localStorage_service_1 = require("./localStorage.service");
var local_storage_1 = require("./local-storage");
var roles_checked_service_1 = require("./roles-checked.service");
var globalValidators_1 = require("./globalValidators");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_recaptcha_1.ReCaptchaModule
        ],
        declarations: [
            recaptcha_component_1.RecaptchaComponent
        ],
        exports: [
            recaptcha_component_1.RecaptchaComponent
        ],
        providers: [
            globalValidators_1.GlobalValidators,
            httpWrapper_1.HttpWrapper,
            localStorage_service_1.LocalStorageService,
            roles_checked_service_1.RolesCheckedService,
            { provide: local_storage_1.LocalStorage, useFactory: function () { return (window) ? window.localStorage : {}; } }
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map