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
import { NewsService } from "./news.service";
import { Router, ActivatedRoute } from "@angular/router";
import { News } from "./news.model";
import { NewsCategoryService } from "../newsCategory/shared/newsCategory.service";
export var NewsEditComponent = (function () {
    function NewsEditComponent(newsService, newsCategoryService, route, router) {
        this.newsService = newsService;
        this.newsCategoryService = newsCategoryService;
        this.route = route;
        this.router = router;
        this.item = new News();
    }
    NewsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.newsService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.newsCategoryService.GetAll()
            .subscribe(function (data) { return _this.parseCategories(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsEditComponent.prototype.save = function () {
        if (this.item.id > 0) {
            this.newsService.update(this.item.id, this.item)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.newsService.create(this.item)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { });
        }
    };
    NewsEditComponent.prototype.parse = function (item) {
        this.item = item;
    };
    NewsEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    NewsEditComponent = __decorate([
        Component({
            selector: "news-edit",
            template: require("./news-edit.component.html")
        }), 
        __metadata('design:paramtypes', [NewsService, NewsCategoryService, ActivatedRoute, Router])
    ], NewsEditComponent);
    return NewsEditComponent;
}());
//# sourceMappingURL=news-edit.component.js.map