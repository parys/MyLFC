var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Location } from "@angular/common";
import { NewsService } from "./news.service";
import { MaterialFilters } from "./newsFilters.model";
import { ActivatedRoute } from "@angular/router";
import { RolesCheckedService } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";
export var NewsListComponent = (function () {
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
        this.activateModal.show();
    };
    NewsListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    NewsListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = undefined;
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsListComponent.prototype.activate = function () {
        var _this = this;
        var result;
        var news = this.items[this.selectedItemIndex];
        this.newsService.activate(news.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                news.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
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
    NewsListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "news/list/" + this.page;
        if (this.categoryId) {
            newUrl = newUrl + "/" + this.categoryId;
        }
        this.location.replaceState(newUrl);
    };
    ;
    NewsListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    NewsListComponent.prototype.update = function () {
        var _this = this;
        var filters = new MaterialFilters();
        filters.categoryId = this.categoryId;
        filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;
        this.newsService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    __decorate([
        ViewChild("activateModal"), 
        __metadata('design:type', ModalDirective)
    ], NewsListComponent.prototype, "activateModal", void 0);
    __decorate([
        ViewChild("deleteModal"), 
        __metadata('design:type', ModalDirective)
    ], NewsListComponent.prototype, "deleteModal", void 0);
    NewsListComponent = __decorate([
        Component({
            selector: "news-list",
            template: require("./news-list.component.html"),
            changeDetection: ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [NewsService, ActivatedRoute, Location, RolesCheckedService, ChangeDetectorRef])
    ], NewsListComponent);
    return NewsListComponent;
}());
//# sourceMappingURL=news-list.component.js.map