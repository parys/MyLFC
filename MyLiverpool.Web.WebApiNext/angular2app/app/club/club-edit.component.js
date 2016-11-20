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
var club_service_1 = require("./club.service");
var club_model_1 = require("./club.model");
var index_1 = require("../shared/index");
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
var ClubEditComponent = (function () {
    function ClubEditComponent(clubService, route, router, localStorage, formBuilder, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.localStorage = localStorage;
        this.formBuilder = formBuilder;
        this.hasBaseDropZoneOver = false;
        this.item = new club_model_1.Club();
        titleService.setTitle("Редактирование клуба");
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
        this.editForm.controls["englishName"].valueChanges.subscribe(function (data) {
            _this.updateOptions(data);
        });
    };
    ClubEditComponent.prototype.upload = function () {
        var _this = this;
        this.uploader.queue[0].onComplete = function (response, status, headers) {
            console.log(response, status, headers);
            _this.editForm.controls["logo"].patchValue(response);
        };
        this.uploader.uploadAll();
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
    ClubEditComponent.prototype.getRandomNumber = function () {
        return Math.random();
    };
    ClubEditComponent.prototype.updateOptions = function (name) {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: "/api/v1/upload/clubLogo/" + name,
            authToken: "Bearer " + this.localStorage.getObject("access_token"),
            autoUpload: false
        });
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
            'englishName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])],
            'logo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'name': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])],
            'stadium': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])]
        });
    };
    ClubEditComponent = __decorate([
        core_1.Component({
            selector: "club-edit",
            template: require("./club-edit.component.html")
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, router_1.Router, index_1.LocalStorageMine, forms_1.FormBuilder, platform_browser_1.Title])
    ], ClubEditComponent);
    return ClubEditComponent;
}());
exports.ClubEditComponent = ClubEditComponent;
//# sourceMappingURL=club-edit.component.js.map