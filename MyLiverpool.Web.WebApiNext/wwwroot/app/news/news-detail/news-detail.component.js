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
let NewsDetailComponent = class NewsDetailComponent {
    constructor(_newsService, route) {
        this._newsService = _newsService;
        this.route = route;
        this.message = "Hello from HomeComponent constructor";
    }
    //   constructor(
    //     private ,
    //     private router: Router,
    //   private service: HeroService) { }
    ngOnInit() {
        //  let id = +this.route.params['id'];
        //  console.log(id);
        //= +params['id'];
        //    this._dataService
        //        .GetAll()
        //        .subscribe(data => this.values = data,
        //        error => console.log(error),
        //        () => console.log('Get all complete'));
        //this.route.params
        //    .map(params => params['id'])
        //    .switchMap(id => this.contactsService.getContact(id))
        //    .subscribe(contact => this.contact = contact);
    }
};
NewsDetailComponent = __decorate([
    core_1.Component({
        selector: 'news-detail',
        templateUrl: 'app/news/news-detail/news-detail.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
        providers: [news_service_1.NewsService]
    }), 
    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map