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
var material_service_1 = require("./material.service");
var material_model_1 = require("./material.model");
var index_1 = require("../materialCategory/index");
var index_2 = require("../shared/index");
var materialType_enum_1 = require("../materialCategory/materialType.enum");
var MaterialEditComponent = (function () {
    function MaterialEditComponent(service, materialCategoryService, route, router, rolesChecked, formBuilder) {
        this.service = service;
        this.materialCategoryService = materialCategoryService;
        this.route = route;
        this.router = router;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
        this.isInit = false;
        if (route.snapshot.data["type"] === materialType_enum_1.MaterialType[materialType_enum_1.MaterialType.News]) {
            this.type = materialType_enum_1.MaterialType.News;
        }
        else {
            this.type = materialType_enum_1.MaterialType.Blog;
        }
    }
    MaterialEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        if (+this.route.snapshot.params["id"]) {
            this.service.getSingle(+this.route.snapshot.params["id"])
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.item = new material_model_1.Material();
            this.isInit = true;
        }
        ;
        this.materialCategoryService.getAll(this.type)
            .subscribe(function (data) { return _this.parseCategories(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, newsItem)
                .subscribe(function (data) { return _this.router.navigate(["/" + materialType_enum_1.MaterialType[_this.type].toLowerCase(), data.id]); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.service.create(newsItem, this.type)
                .subscribe(function (data) { return _this.router.navigate(["/" + materialType_enum_1.MaterialType[_this.type].toLowerCase(), data.id]); }, function (error) { return console.log(error); }, function () { });
        }
    };
    MaterialEditComponent.prototype.updateImage = function (path) {
        this.editForm.patchValue({ photo: path });
    };
    MaterialEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.item = data;
        this.isInit = true;
    };
    MaterialEditComponent.prototype.parseForm = function () {
        var item = new material_model_1.Material();
        item.id = this.id;
        item.categoryId = this.editForm.controls["categoryId"].value;
        item.title = this.editForm.controls["title"].value;
        item.brief = this.editForm.controls["brief"].value;
        item.message = this.editForm.controls["message"].value;
        item.source = this.editForm.controls["source"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.pending = this.editForm.controls["pending"].value;
        item.canCommentary = this.editForm.controls["canCommentary"].value;
        item.onTop = this.editForm.controls["onTop"].value;
        return item;
    };
    MaterialEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'categoryId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'title': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'brief': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'source': ["", forms_1.Validators.compose([])],
            'photo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'canCommentary': ["true", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'onTop': ["false", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'pending': ["true", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    MaterialEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    return MaterialEditComponent;
}());
MaterialEditComponent = __decorate([
    core_1.Component({
        selector: "material-edit",
        template: require("./material-edit.component.html")
    }),
    __metadata("design:paramtypes", [material_service_1.MaterialService,
        index_1.MaterialCategoryService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_2.RolesCheckedService,
        forms_1.FormBuilder])
], MaterialEditComponent);
exports.MaterialEditComponent = MaterialEditComponent;
//# sourceMappingURL=material-edit.component.js.map