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
let NewsEditComponent = class NewsEditComponent {
    constructor(newsService, route) {
        this.newsService = newsService;
        this.route = route;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            if (id > 0) {
                this.newsService.GetSingle(id)
                    .subscribe(data => this.parse(data), error => console.log(error), () => console.log("success load detail news"));
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    parse(item) {
        this.item = item;
    }
};
NewsEditComponent = __decorate([
    core_1.Component({
        selector: 'news-edit',
        templateUrl: 'app/news/news-edit/news-edit.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
        providers: [news_service_1.NewsService]
    }), 
    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute])
], NewsEditComponent);
exports.NewsEditComponent = NewsEditComponent;
//# sourceMappingURL=news-edit.component.js.map