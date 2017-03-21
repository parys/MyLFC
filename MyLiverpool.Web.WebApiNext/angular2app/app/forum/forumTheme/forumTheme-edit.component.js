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
var forumTheme_model_1 = require("./forumTheme.model");
var index_1 = require("../forumSubsection/index");
var forumTheme_service_1 = require("./forumTheme.service");
var ForumThemeEditComponent = (function () {
    function ForumThemeEditComponent(service, formBuilder, route, subsectionService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.subsectionService = subsectionService;
        this.id = 0;
    }
    ForumThemeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'subsectionId': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
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
        this.subsectionService.getAll()
            .subscribe(function (data) { return _this.forumSubsections = data; }, function (error) { return console.log(error); }, function () { });
    };
    ForumThemeEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForumThemeEditComponent.prototype.onSubmit = function () {
        var model = new forumTheme_model_1.ForumTheme();
        model.id = this.id;
        model.subsectionId = this.editForm.controls["subsectionId"].value;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    return ForumThemeEditComponent;
}());
ForumThemeEditComponent = __decorate([
    core_1.Component({
        selector: "forumTheme-edit",
        template: require("./forumTheme-edit.component.html")
    }),
    __metadata("design:paramtypes", [forumTheme_service_1.ForumThemeService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        index_1.ForumSubsectionService])
], ForumThemeEditComponent);
exports.ForumThemeEditComponent = ForumThemeEditComponent;
//# sourceMappingURL=forumTheme-edit.component.js.map