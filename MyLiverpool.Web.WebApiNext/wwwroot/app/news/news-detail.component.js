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
var news_service_1 = require("./news.service");
var router_1 = require("@angular/router");
var localStorage_1 = require("../shared/localStorage");
var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, route, localStorage) {
        this.newsService = newsService;
        this.route = route;
        this.localStorage = localStorage;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.newsService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { return console.log("success load edit news"); });
        });
    };
    NewsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.addView();
    };
    NewsDetailComponent.prototype.addView = function () {
        var id = this.item.id;
        if (!this.localStorage.get("material" + id)) {
            this.localStorage.set("material" + id, "1");
            this.newsService.addView(id).subscribe(function (data) { return data; });
        }
    };
    NewsDetailComponent = __decorate([
        core_1.Component({
            selector: "news-detail",
            templateUrl: "app/news/news-detail.component.html"
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, localStorage_1.LocalStorageMine])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map