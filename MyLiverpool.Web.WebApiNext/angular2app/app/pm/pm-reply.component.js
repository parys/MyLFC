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
var pm_model_1 = require("./pm.model");
var pm_service_1 = require("./pm.service");
var PmReplyComponent = (function () {
    function PmReplyComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.close = new core_1.EventEmitter();
    }
    PmReplyComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            'title': [
                this.getTitle(), forms_1.Validators.compose([
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
    PmReplyComponent.prototype.ngOnDestroy = function () {
    };
    PmReplyComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = new pm_model_1.Pm();
        model.receiverId = this.userId;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.create(model).subscribe(function (data) {
            if (data) {
                _this.closeWindow();
            }
        }, function (error) { return console.log(error); }, function () {
        });
    };
    PmReplyComponent.prototype.closeWindow = function () {
        this.close.emit({});
    };
    PmReplyComponent.prototype.getTitle = function () {
        if (!this.title) {
            return "";
        }
        var match = this.title.match(/\[.*]/);
        if (match) {
            var newValue = parseInt(match[0].substring(1, match[0].length - 1));
            return this.title.replace(/\[.*]/, "[" + ++newValue + "]");
        }
        else {
            return "Re[1]: " + this.title;
        }
    };
    return PmReplyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PmReplyComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PmReplyComponent.prototype, "userId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PmReplyComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PmReplyComponent.prototype, "close", void 0);
PmReplyComponent = __decorate([
    core_1.Component({
        selector: "pm-reply",
        template: require("./pm-reply.component.html")
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], PmReplyComponent);
exports.PmReplyComponent = PmReplyComponent;
//# sourceMappingURL=pm-reply.component.js.map