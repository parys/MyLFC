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
var common_1 = require("@angular/common");
var news_service_1 = require("./news.service");
var newsFilters_model_1 = require("./newsFilters.model");
var router_1 = require("@angular/router");
var index_1 = require("../shared/index");
var ng2_modal_1 = require("ng2-modal");
var NewsListComponent = (function () {
    function NewsListComponent(newsService, route, location, rolesChecked, cd) {
        this.newsService = newsService;
        this.route = route;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.cd = cd;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = undefined;
    }
    NewsListComponent.prototype.showActivateModal = function (index) {
        this.selectedItemIndex = index;
        this.activateModal.open();
    };
    NewsListComponent.prototype.hideActivateModal = function () {
        this.selectedItemIndex = undefined;
        this.activateModal.close();
    };
    NewsListComponent.prototype.activate = function () {
        // console.log(this.selectedItemIndex);
        // console.log(this.items1);
        // let newsItem: News;
        // this.items1.subscribe(data => newsItem = data[this.selectedItemIndex].id);
        // var result: Observable<boolean> =
        //   this.newsService.activate(());//[this.selectedItemIndex]).id);// => result = );//.subscribe(data1 => {
        //  this.items1.elementAt(data => console.log(data));
        var _this = this;
        //   this.newsService.activate(
        var id;
        var news;
        var result;
        //     this.items.subscribe(data => console.log(data[this.selectedItemIndex].pending));
        //     this.items.subscribe(data => data[this.selectedItemIndex].pending = false);
        //    this.items.subscribe(data => id = data[this.selectedItemIndex].id);
        //     this.items.subscribe(data => console.log(data[this.selectedItemIndex]));
        //    console.log(id);
        //   this.items1.subscribe(data => console.log(data[this.selectedItemIndex].pending));
        //  this.items.subscribe(data =>
        news = this.items[this.selectedItemIndex];
        //  e => console.log(e),
        //   () => {
        this.newsService.activate(news.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                news.pending = false;
                //   this.items.subscribe(list => list[this.selectedItemIndex].pending = false,
                //       e => console.log(e),
                //       () => {
                //  this.items.subscribe(list => list);
                console.log(news);
                console.log(_this.items[_this.selectedItemIndex]);
            }
        });
        //  });
        /*
          this.items.subscribe(data => news = data[this.selectedItemIndex],
              e => console.log(e),
              () => {
                  this.newsService.activate(news.id)
                      .subscribe(res => result = res,
                          e => console.log(e),                                                                      ------
                          () => {
                              if (result) {
                                  news.pending = false;
  
                                   this.items.subscribe(list => list[this.selectedItemIndex].pending = false,
                                       e => console.log(e),
                                        () => {
                                   //  this.items.subscribe(list => list);
                                  console.log(news);
                                            this.items.subscribe(list => console.log(list[this.selectedItemIndex]));
                                  // this.cd.markForCheck();
                                  //this.hideActivateModal();
                                        });
                              }
                          }
                      );
              }); */
        //  result.subscribe()
        //   console.log(result);
        //  if (data1) {
        //        this.items1.subscribe(list => {
        //            console.log(list[this.selectedItemIndex]);
        //             list[this.selectedItemIndex].pending = false;
        //
        //             console.log(list[this.selectedItemIndex]);
        //             this.hideActivateModal();
        //             this.cd.markForCheck();
        //              }
        //         );
        //      }
        //   }));
        //console.log(newsItem);
        // => {
        //    this.newsService.activate(
        //        data[this.selectedItemIndex].id).subscribe(answer => {
        //        if (answer) {
        //            data[this.selectedItemIndex].pending = false;
        //            this.selectedItemIndex = undefined;
        //            this.activateModal.close();
        //        }
        //    });
        //});
    };
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.categoryId = +params["categoryId"];
            _this.userName = params["userName"];
            _this.update();
        });
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsListComponent.prototype.getPage = function (page) {
        this.page = page;
        this.update();
        var newUrl = "news/list/" + this.page;
        if (this.categoryId) {
            newUrl = newUrl + "/" + this.categoryId;
        }
        this.location.replaceState(newUrl);
    };
    NewsListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
        console.log(this.items);
    };
    NewsListComponent.prototype.update = function () {
        var _this = this;
        var filters = new newsFilters_model_1.MaterialFilters();
        filters.categoryId = this.categoryId;
        filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;
        // this.items =
        this.newsService
            .GetAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load list news"); });
        /*
         this.asyncMeals = serverCall(this.meals, page)
        .do(res => {
            this.total = res.total;
            this.p = page;
            this.loading = false;
        })
        .map(res => res.items);
}
        */
    };
    __decorate([
        core_1.ViewChild("activateModal"), 
        __metadata('design:type', ng2_modal_1.Modal)
    ], NewsListComponent.prototype, "activateModal", void 0);
    NewsListComponent = __decorate([
        core_1.Component({
            selector: "news-list",
            templateUrl: "app/news/news-list.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, common_1.Location, index_1.RolesCheckedService, core_1.ChangeDetectorRef])
    ], NewsListComponent);
    return NewsListComponent;
}());
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map