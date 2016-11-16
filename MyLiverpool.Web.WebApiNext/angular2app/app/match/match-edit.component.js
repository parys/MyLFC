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
var match_service_1 = require("./match.service");
var match_model_1 = require("./match.model");
var MatchEditComponent = (function () {
    function MatchEditComponent(matchService, route, router, formBuilder) {
        this.matchService = matchService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    MatchEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.matchService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
    };
    MatchEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.matchService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    MatchEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    MatchEditComponent.prototype.parseForm = function () {
        var item = new match_model_1.Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        item.dateTime = this.editForm.controls["dateTime"].value;
        item.typeId = this.editForm.controls["typeId"].value;
        return item;
    };
    MatchEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'clubId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'isHome': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'dateTime': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'typeId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    MatchEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    MatchEditComponent = __decorate([
        core_1.Component({
            selector: "match-edit",
            template: require("./match-edit.component.html")
        }), 
        __metadata('design:paramtypes', [match_service_1.MatchService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
    ], MatchEditComponent);
    return MatchEditComponent;
}());
exports.MatchEditComponent = MatchEditComponent;
//# sourceMappingURL=match-edit.component.js.map