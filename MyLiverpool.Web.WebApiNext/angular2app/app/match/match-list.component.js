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
var match_service_1 = require("./match.service");
var MatchListComponent = (function () {
    function MatchListComponent(matchService, route) {
        this.matchService = matchService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams["page"]) {
            this.page = this.route.snapshot.queryParams["page"];
        }
        ;
        this.update();
    };
    MatchListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MatchListComponent.prototype.update = function () {
        var _this = this;
        this.matchService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); });
    };
    return MatchListComponent;
}());
MatchListComponent = __decorate([
    core_1.Component({
        selector: "match-list",
        template: require("./match-list.component.html")
    }),
    __metadata("design:paramtypes", [match_service_1.MatchService, router_1.ActivatedRoute])
], MatchListComponent);
exports.MatchListComponent = MatchListComponent;
//# sourceMappingURL=match-list.component.js.map