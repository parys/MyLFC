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
var person_service_1 = require("./person.service");
var person_model_1 = require("./person.model");
var index_1 = require("../shared/index");
var PersonEditComponent = (function () {
    function PersonEditComponent(service, route, router, localStorage, formBuilder) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.localStorage = localStorage;
        this.formBuilder = formBuilder;
        this.opened = false;
        this.item = new person_model_1.Person();
    }
    PersonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var id = +this.route.snapshot.params["id"] || 0;
        if (id > 0) {
            this.service.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        }
        this.updateTypes();
    };
    PersonEditComponent.prototype.onUpload = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        var fullname = this.editForm.controls["firstName"].value + " " + this.editForm.controls["lastName"].value;
        if (file) {
            this.service.updatePhoto(fullname, file)
                .subscribe(function (result) { return _this.item.photo = result + "#" + Math.random(); }, function (error) { return console.log(error); });
        }
    };
    PersonEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.service.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    PersonEditComponent.prototype.getRandomNumber = function () {
        return Math.random();
    };
    PersonEditComponent.prototype.updateTypes = function () {
        var _this = this;
        this.service
            .getTypes()
            .subscribe(function (data) { return _this.types = data; });
    };
    PersonEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    PersonEditComponent.prototype.parseForm = function () {
        var item = new person_model_1.Person();
        item.id = this.id;
        item.firstName = this.editForm.controls["firstName"].value;
        item.firstRussianName = this.editForm.controls["firstRussianName"].value;
        item.lastName = this.editForm.controls["lastName"].value;
        item.lastRussianName = this.editForm.controls["lastRussianName"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.type = this.editForm.controls["type"].value;
        item.birthday = this.editForm.controls["birthday"].value;
        return item;
    };
    PersonEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'firstName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'firstRussianName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'lastName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'lastRussianName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'birthday': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'photo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'type': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    return PersonEditComponent;
}());
PersonEditComponent = __decorate([
    core_1.Component({
        selector: "person-edit",
        template: require("./person-edit.component.html")
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_1.LocalStorageService,
        forms_1.FormBuilder])
], PersonEditComponent);
exports.PersonEditComponent = PersonEditComponent;
//# sourceMappingURL=person-edit.component.js.map