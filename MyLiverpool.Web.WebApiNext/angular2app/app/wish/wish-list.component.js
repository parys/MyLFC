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
var wish_service_1 = require("./wish.service");
var router_1 = require("@angular/router");
var index_1 = require("../shared/index");
var WishListComponent = (function () {
    function WishListComponent(service, rolesChecked, location, route) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.location = location;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.categoryId = +params["categoryId"];
            _this.update();
        });
    };
    WishListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "$wish?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    WishListComponent.prototype.update = function () {
        var _this = this;
        this.service
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
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
    WishListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return WishListComponent;
}());
WishListComponent = __decorate([
    core_1.Component({
        selector: "wish-list",
        template: require("./wish-list.component.html")
    }),
    __metadata("design:paramtypes", [wish_service_1.WishService,
        index_1.RolesCheckedService,
        common_1.Location,
        router_1.ActivatedRoute])
], WishListComponent);
exports.WishListComponent = WishListComponent;
//# sourceMappingURL=wish-list.component.js.map