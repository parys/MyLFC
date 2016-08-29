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
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const news_service_1 = require('../shared/news.service');
const router_1 = require('@angular/router');
const newsCategory_service_1 = require("../../newsCategory/shared/newsCategory.service");
let NewsEditComponent = class NewsEditComponent {
    constructor(newsService, newsCategoryService, route, router) {
        this.newsService = newsService;
        this.newsCategoryService = newsCategoryService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            if (id > 0) {
                this.newsService.GetSingle(id)
                    .subscribe(data => this.parse(data), error => console.log(error), () => console.log("success load edit news"));
            }
        });
        this.newsCategoryService.GetAll()
            .subscribe(data => this.parseCategories(data), error => console.log(error), () => console.log("success load categoiris edit news"));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    save() {
        if (this.item.id > 0) {
            this.newsService.Update(this.item.id, this.item)
                .subscribe(data => this.router.navigate(['/news', data.id]), error => console.log(error), () => console.log("success update edit news"));
        }
        else {
            this.newsService.Create(this.item)
                .subscribe(data => this.router.navigate(['/news', data.id]), error => console.log(error), () => console.log("success Create edit news"));
        }
    }
    parse(item) {
        this.item = item;
    }
    parseCategories(items) {
        this.categories = items;
    }
};
NewsEditComponent = __decorate([
    core_1.Component({
        selector: 'news-edit',
        templateUrl: 'app/news/news-edit/news-edit.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
        providers: [news_service_1.NewsService, newsCategory_service_1.NewsCategoryService]
    }), 
    __metadata('design:paramtypes', [news_service_1.NewsService, newsCategory_service_1.NewsCategoryService, router_1.ActivatedRoute, router_1.Router])
], NewsEditComponent);
exports.NewsEditComponent = NewsEditComponent;
//# sourceMappingURL=news-edit.component.js.map