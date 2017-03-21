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
var platform_browser_1 = require("@angular/platform-browser");
var pm_model_1 = require("./pm.model");
var pm_service_1 = require("./pm.service");
var PmEditComponent = (function () {
    function PmEditComponent(service, formBuilder, route, router, sanitizer) {
        var _this = this;
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.id = 0;
        this.users = "/api/v1/user/GetUserNames?typed=:keyword";
        this.autocompleteListFormatter = function (data) {
            var html = "<span>" + data.username + "</span>";
            return _this.sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    PmEditComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            'receiver': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(500)
                ])
            ]
        });
    };
    PmEditComponent.prototype.ngOnDestroy = function () {
    };
    PmEditComponent.prototype.updateUsername = function (user) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    };
    PmEditComponent.prototype.onSubmit = function () {
        var model = new pm_model_1.Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.create(model).subscribe(function (data) { return data; });
    };
    return PmEditComponent;
}());
PmEditComponent = __decorate([
    core_1.Component({
        selector: "pm-edit",
        template: require("./pm-edit.component.html")
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        platform_browser_1.DomSanitizer])
], PmEditComponent);
exports.PmEditComponent = PmEditComponent;
//# sourceMappingURL=pm-edit.component.js.map