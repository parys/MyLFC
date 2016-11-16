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
var router_1 = require("@angular/router");
var club_service_1 = require("./club.service");
var ClubListComponent = (function () {
    function ClubListComponent(clubService, route) {
        this.clubService = clubService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    ClubListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    ClubListComponent.prototype.update = function () {
    };
    ClubListComponent = __decorate([
        core_1.Component({
            selector: "club-list",
            template: require("./club-list.component.html")
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute])
    ], ClubListComponent);
    return ClubListComponent;
}());
exports.ClubListComponent = ClubListComponent;
//# sourceMappingURL=club-list.component.js.map