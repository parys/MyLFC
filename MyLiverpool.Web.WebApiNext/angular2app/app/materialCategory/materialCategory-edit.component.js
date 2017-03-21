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
var materialCategory_model_1 = require("./materialCategory.model");
var materialCategory_service_1 = require("./materialCategory.service");
var materialType_enum_1 = require("./materialType.enum");
var MaterialCategoryEditComponent = (function () {
    function MaterialCategoryEditComponent(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
        if (route.snapshot.data["type"] === materialType_enum_1.MaterialType[materialType_enum_1.MaterialType.News]) {
            this.type = materialType_enum_1.MaterialType.News;
        }
        else {
            this.type = materialType_enum_1.MaterialType.Blog;
        }
    }
    MaterialCategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'name': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
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
    };
    MaterialCategoryEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MaterialCategoryEditComponent.prototype.onSubmit = function () {
        var model = new materialCategory_model_1.MaterialCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            this.service.create(model, this.type).subscribe(function (data) { return res = data; });
        }
    };
    return MaterialCategoryEditComponent;
}());
MaterialCategoryEditComponent = __decorate([
    core_1.Component({
        selector: "materialCategory-edit",
        template: require("./materialCategory-edit.component.html")
    }),
    __metadata("design:paramtypes", [materialCategory_service_1.MaterialCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
], MaterialCategoryEditComponent);
exports.MaterialCategoryEditComponent = MaterialCategoryEditComponent;
//# sourceMappingURL=materialCategory-edit.component.js.map