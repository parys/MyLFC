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
var club_service_1 = require("./club.service");
var club_model_1 = require("./club.model");
var index_1 = require("../shared/index");
var ClubEditComponent = (function () {
    function ClubEditComponent(clubService, route, router, localStorage, formBuilder) {
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.localStorage = localStorage;
        this.formBuilder = formBuilder;
        this.hasBaseDropZoneOver = false;
        this.item = new club_model_1.Club();
        this.updateOptions("default");
    }
    ClubEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.clubService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.editForm.controls["logo"].valueChanges.subscribe(function (data) { return _this.updateOptions(data); });
    };
    ClubEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.clubService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.clubService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    ClubEditComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.editForm.controls["logo"].patchValue(data);
        }
    };
    ClubEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    ClubEditComponent.prototype.parseForm = function () {
        var item = new club_model_1.Club();
        item.id = this.id;
        item.englishName = this.editForm.controls["englishName"].value;
        item.logo = this.editForm.controls["logo"].value;
        item.name = this.editForm.controls["name"].value;
        item.stadium = this.editForm.controls["stadium"].value;
        return item;
    };
    ClubEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'englishName': ["123", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'logo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'name': ["12", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'stadium': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    ClubEditComponent.prototype.updateOptions = function (name) {
        this.options = {
            allowedExtensions: ["image/png", "image/jpg"],
            url: "/api/v1/upload/clubLogo/" + name,
            authToken: this.localStorage.getObject("access_token"),
            authTokenPrefix: "Bearer"
        };
    };
    ClubEditComponent = __decorate([
        core_1.Component({
            selector: "club-edit",
            template: require("./club-edit.component.html")
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, router_1.Router, index_1.LocalStorageMine, forms_1.FormBuilder])
    ], ClubEditComponent);
    return ClubEditComponent;
}());
exports.ClubEditComponent = ClubEditComponent;
//# sourceMappingURL=club-edit.component.js.map