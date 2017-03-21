"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GlobalValidators = (function () {
    function GlobalValidators() {
    }
    GlobalValidators.mailFormat = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (control.value.length < 6) {
            return null;
        }
        if (!EMAIL_REGEXP.test(control.value)) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidators.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    "mismatchedPasswords": true
                };
            }
            return null;
        };
    };
    GlobalValidators.mustBeGreaterThanZero = function (control) {
        if (control.value !== "" && +control.value > 0) {
            return null;
        }
        return { "ValueMustBeGreaterThanZero": true };
    };
    return GlobalValidators;
}());
GlobalValidators = __decorate([
    core_1.Injectable()
], GlobalValidators);
exports.GlobalValidators = GlobalValidators;
//# sourceMappingURL=globalValidators.js.map