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
import { WishService } from "./wish.service";
import { ActivatedRoute } from "@angular/router";
export var WishListComponent = (function () {
    function WishListComponent(service, route) {
        this.service = service;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['page']) {
                _this.page = +params['page'];
            }
            _this.categoryId = +params['categoryId'];
            _this.update();
        });
    };
    WishListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    WishListComponent.prototype.update = function () {
        var _this = this;
        this.service
            .GetAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load list wish"); });
    };
    WishListComponent.prototype.getTypeClass = function (i) {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-warning";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };
    ;
    WishListComponent = __decorate([
        Component({
            selector: "wish-list",
            template: require("./wish-list.component.html")
        }), 
        __metadata('design:paramtypes', [WishService, ActivatedRoute])
    ], WishListComponent);
    return WishListComponent;
}());
//# sourceMappingURL=wish-list.component.js.map