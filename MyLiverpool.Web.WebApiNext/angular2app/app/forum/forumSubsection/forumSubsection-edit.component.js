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
var forumSubsection_model_1 = require("./forumSubsection.model");
var forumSubsection_service_1 = require("./forumSubsection.service");
var index_1 = require("../forumSection/index");
var ForumSubsectionEditComponent = (function () {
    function ForumSubsectionEditComponent(service, formBuilder, route, sectionService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.sectionService = sectionService;
        this.id = 0;
    }
    ForumSubsectionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'sectionId': [
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
        this.sectionService.getAll()
            .subscribe(function (data) { return _this.forumSections = data; }, function (error) { return console.log(error); }, function () { });
    };
    ForumSubsectionEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForumSubsectionEditComponent.prototype.onSubmit = function () {
        var model = new forumSubsection_model_1.ForumSubsection();
        model.id = this.id;
        model.sectionId = this.editForm.controls["sectionId"].value;
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
    return ForumSubsectionEditComponent;
}());
ForumSubsectionEditComponent = __decorate([
    core_1.Component({
        selector: "forumSubsection-edit",
        template: require("./forumSubsection-edit.component.html")
    }),
    __metadata("design:paramtypes", [forumSubsection_service_1.ForumSubsectionService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        index_1.ForumSectionService])
], ForumSubsectionEditComponent);
exports.ForumSubsectionEditComponent = ForumSubsectionEditComponent;
//# sourceMappingURL=forumSubsection-edit.component.js.map