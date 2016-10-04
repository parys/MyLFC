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
var PmEditComponent = (function () {
    function PmEditComponent(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
        this.mySource = ["ar1", "ar2", "3dsa"];
    }
    PmEditComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .GetSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { return console.log("success get  news"); });
            }
        });
    };
    PmEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PmEditComponent.prototype.onSubmit = function () {
        var model = new pm_model_1.Pm();
        model.receiverUserName = this.editForm.controls["receiver"].value; // todo bagg
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.Update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.Create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    PmEditComponent = __decorate([
        core_1.Component({
            selector: "pm-edit",
            templateUrl: "app/pm/pm-edit.component.html"
        }), 
        __metadata('design:paramtypes', [pm_service_1.PmService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], PmEditComponent);
    return PmEditComponent;
}());
exports.PmEditComponent = PmEditComponent;
//# sourceMappingURL=pm-edit.component.js.map