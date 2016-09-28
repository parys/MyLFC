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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var newsCategory_model_1 = require("./shared/newsCategory.model");
var newsCategory_service_1 = require("./shared/newsCategory.service");
var router_1 = require('@angular/router');
var NewsCategoryEditComponent = (function () {
    function NewsCategoryEditComponent(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
    }
    NewsCategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'name': [
                '', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                '', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id > 0) {
                _this.service
                    .GetSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { return console.log("success get  news"); });
            }
        });
    };
    NewsCategoryEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsCategoryEditComponent.prototype.onSubmit = function () {
        var model = new newsCategory_model_1.NewsCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.Update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.Add(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    NewsCategoryEditComponent = __decorate([
        core_1.Component({
            selector: 'newsCategory-edit',
            templateUrl: 'app/newsCategory/newsCategory-edit.component.html'
        }), 
        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], NewsCategoryEditComponent);
    return NewsCategoryEditComponent;
}());
exports.NewsCategoryEditComponent = NewsCategoryEditComponent;
//# sourceMappingURL=newsCategory-edit.component.js.map