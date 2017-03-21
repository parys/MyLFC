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
var common_1 = require("@angular/common");
var forumSubsection_service_1 = require("./forumSubsection.service");
var index_1 = require("../../shared/index");
var ForumSubsectionListComponent = (function () {
    function ForumSubsectionListComponent(service, rolesChecked, route, location) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    ForumSubsectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub2 = this.route.queryParams.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.update(id);
        });
    };
    ;
    ForumSubsectionListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    ForumSubsectionListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update(this.item.id);
        var newUrl = "forum/" + this.item.id + "?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ForumSubsectionListComponent.prototype.update = function (id) {
        var _this = this;
        this.service.getSingleWithThemes(id, this.page)
            .subscribe(function (data) {
            _this.item = data;
            _this.itemsPerPage = data.themes.itemPerPage;
            _this.items = data.themes.list;
            _this.totalItems = data.themes.totalItems;
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumSubsectionListComponent;
}());
ForumSubsectionListComponent = __decorate([
    core_1.Component({
        selector: "forumSubsection-list",
        template: require("./forumSubsection-list.component.html")
    }),
    __metadata("design:paramtypes", [forumSubsection_service_1.ForumSubsectionService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute, common_1.Location])
], ForumSubsectionListComponent);
exports.ForumSubsectionListComponent = ForumSubsectionListComponent;
//# sourceMappingURL=forumSubsection-list.component.js.map