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
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NewsService } from "./news.service";
import { News } from "./news.model";
import { NewsCategoryService } from "../newsCategory/shared/newsCategory.service";
export var NewsEditComponent = (function () {
    function NewsEditComponent(newsService, newsCategoryService, route, router, formBuilder) {
        this.newsService = newsService;
        this.newsCategoryService = newsCategoryService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    NewsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
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
    NewsEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.newsService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.newsService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    NewsEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    NewsEditComponent.prototype.parseForm = function () {
        var item = new News();
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
    NewsEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'categoryId': ["", Validators.compose([
                    Validators.required])],
            'title': ["", Validators.compose([
                    Validators.required])],
            'brief': ["", Validators.compose([
                    Validators.required])],
            'message': ["", Validators.compose([
                    Validators.required])],
            'source': ["", Validators.compose([])],
            'photo': ["", Validators.compose([
                    Validators.required])],
            'canCommentary': ["", Validators.compose([
                    Validators.required])],
            'onTop': ["", Validators.compose([
                    Validators.required])],
            'pending': ["", Validators.compose([
                    Validators.required])]
        });
    };
    NewsEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    NewsEditComponent = __decorate([
        Component({
            selector: "news-edit",
            template: require("./news-edit.component.html")
        }), 
        __metadata('design:paramtypes', [NewsService, NewsCategoryService, ActivatedRoute, Router, FormBuilder])
    ], NewsEditComponent);
    return NewsEditComponent;
}());
//# sourceMappingURL=news-edit.component.js.map