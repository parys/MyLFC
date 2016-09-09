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
const news_service_1 = require('../shared/news.service');
const router_1 = require('@angular/router');
let NewsDetailComponent = class NewsDetailComponent {
    constructor(newsService, route) {
        this.newsService = newsService;
        this.route = route;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.newsService.GetSingle(id)
                .subscribe(data => this.parse(data), error => console.log(error), () => console.log("success load edit news"));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    parse(item) {
        this.item = item;
    }
};
NewsDetailComponent = __decorate([
    core_1.Component({
        selector: 'news-detail',
        templateUrl: 'app/news/news-detail/news-detail.component.html',
        providers: [news_service_1.NewsService]
    }), 
    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map