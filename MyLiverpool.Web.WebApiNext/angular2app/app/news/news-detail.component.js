var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NewsService } from "./news.service";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageMine } from "../shared/localStorage";
import { RolesCheckedService } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";
export var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, route, localStorage, rolesChecked, router, titleService) {
        this.newsService = newsService;
        this.route = route;
        this.localStorage = localStorage;
        this.rolesChecked = rolesChecked;
        this.router = router;
        this.titleService = titleService;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.newsService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    NewsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsDetailComponent.prototype.showActivateModal = function (index) {
        this.activateModal.show();
    };
    NewsDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    NewsDetailComponent.prototype.hideModal = function () {
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsDetailComponent.prototype.activate = function () {
        var _this = this;
        var result;
        this.newsService.activate(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.hideModal();
                _this.router.navigate(["/news"]);
            }
        });
    };
    NewsDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    };
    NewsDetailComponent.prototype.addView = function () {
        var id = this.item.id;
        if (!this.localStorage.get("material" + id)) {
            this.localStorage.set("material" + id, "1");
            this.newsService.addView(id).subscribe(function (data) { return data; });
        }
    };
    __decorate([
        ViewChild("activateModal"), 
        __metadata('design:type', ModalDirective)
    ], NewsDetailComponent.prototype, "activateModal", void 0);
    __decorate([
        ViewChild("deleteModal"), 
        __metadata('design:type', ModalDirective)
    ], NewsDetailComponent.prototype, "deleteModal", void 0);
    NewsDetailComponent = __decorate([
        Component({
            selector: "news-detail",
            template: require("./news-detail.component.html")
        }), 
        __metadata('design:paramtypes', [NewsService, ActivatedRoute, LocalStorageMine, RolesCheckedService, Router, Title])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
//# sourceMappingURL=news-detail.component.js.map