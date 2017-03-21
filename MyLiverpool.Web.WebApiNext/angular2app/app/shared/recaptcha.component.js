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
var RecaptchaComponent = (function () {
    function RecaptchaComponent() {
        this.isHuman = new core_1.EventEmitter();
    }
    RecaptchaComponent.prototype.handleCorrectCaptcha = function (event) {
        if (event) {
            this.isHuman.emit(true);
        }
        else {
            this.isHuman.emit(false);
        }
    };
    return RecaptchaComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RecaptchaComponent.prototype, "isHuman", void 0);
RecaptchaComponent = __decorate([
    core_1.Component({
        selector: "recaptcha",
        template: " <re-captcha language=\"ru\"\n                            size=\"small\"\n                            (captchaExpired)=\"handleCorrectCaptcha($event)\"\n                            (captchaResponse)=\"handleCorrectCaptcha($event)\"\n                            site_key=\"6Ld0AxEUAAAAAA9BH17mRd8MDPqLGDzSomOEeeIY\">\n                </re-captcha>"
    })
], RecaptchaComponent);
exports.RecaptchaComponent = RecaptchaComponent;
//# sourceMappingURL=recaptcha.component.js.map