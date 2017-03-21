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
var wish_model_1 = require("./wish.model");
var wish_service_1 = require("./wish.service");
var router_1 = require("@angular/router");
var WishEditComponent = (function () {
    function WishEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.isHuman = false;
    }
    WishEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(300)
                ])
            ],
            'type': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.updateTypes();
    };
    WishEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishEditComponent.prototype.onSubmit = function () {
        var model = new wish_model_1.Wish();
        model.id = this.id;
        model.message = this.editForm.controls["message"].value;
        model.title = this.editForm.controls["title"].value;
        model.type = this.editForm.controls["type"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        this.isHuman = false;
        this.router.navigate(["/wish"]);
    };
    WishEditComponent.prototype.updateTypes = function () {
        var _this = this;
        this.service
            .getTypes()
            .subscribe(function (data) { return _this.types = data; });
    };
    return WishEditComponent;
}());
WishEditComponent = __decorate([
    core_1.Component({
        selector: "wish-edit",
        template: require("./wish-edit.component.html")
    }),
    __metadata("design:paramtypes", [wish_service_1.WishService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], WishEditComponent);
exports.WishEditComponent = WishEditComponent;
//# sourceMappingURL=wish-edit.component.js.map