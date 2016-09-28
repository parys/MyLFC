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
var newsCategory_service_1 = require("./shared/newsCategory.service");
var NewsCategoryListComponent = (function () {
    function NewsCategoryListComponent(newsCategoryService) {
        this.newsCategoryService = newsCategoryService;
    }
    NewsCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsCategoryService
            .GetAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load categoryu lits news"); });
    };
    NewsCategoryListComponent.prototype.parsePageable = function (model) {
        this.items = model;
    };
    NewsCategoryListComponent.prototype.delete = function (index) {
        console.log("delete");
        this.newsCategoryService.Delete(this.items[index].id).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log("success remove categoryu"); });
        this.items.splice(index, 1);
    };
    NewsCategoryListComponent = __decorate([
        core_1.Component({
            selector: 'newsCategory-list',
            templateUrl: 'app/newsCategory/newsCategory-list.component.html'
        }), 
        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService])
    ], NewsCategoryListComponent);
    return NewsCategoryListComponent;
}());
exports.NewsCategoryListComponent = NewsCategoryListComponent;
//# sourceMappingURL=newsCategory-list.component.js.map