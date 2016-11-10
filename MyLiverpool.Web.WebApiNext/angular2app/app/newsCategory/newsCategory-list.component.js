var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NewsCategoryService } from "./shared/newsCategory.service";
export var NewsCategoryListComponent = (function () {
    function NewsCategoryListComponent(newsCategoryService, titleService) {
        this.newsCategoryService = newsCategoryService;
        this.titleService = titleService;
    }
    NewsCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Категории");
        this.newsCategoryService
            .GetAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsCategoryListComponent.prototype.parsePageable = function (model) {
        this.items = model;
    };
    NewsCategoryListComponent.prototype.delete = function (index) {
        this.newsCategoryService.Delete(this.items[index].id).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.items.splice(index, 1);
    };
    NewsCategoryListComponent = __decorate([
        Component({
            selector: "newsCategory-list",
            template: require("./newsCategory-list.component.html")
        }), 
        __metadata('design:paramtypes', [NewsCategoryService, Title])
    ], NewsCategoryListComponent);
    return NewsCategoryListComponent;
}());
//# sourceMappingURL=newsCategory-list.component.js.map