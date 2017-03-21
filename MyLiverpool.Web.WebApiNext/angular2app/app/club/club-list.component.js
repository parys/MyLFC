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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var club_service_1 = require("./club.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ClubListComponent = (function () {
    function ClubListComponent(clubService, route, location, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
        titleService.setTitle("Клубы");
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
    ClubListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    ClubListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.deleteModal.hide();
    };
    ClubListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.clubService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    ClubListComponent.prototype.update = function () {
        var _this = this;
        this.clubService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    ClubListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "club/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ClubListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return ClubListComponent;
}());
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ClubListComponent.prototype, "deleteModal", void 0);
ClubListComponent = __decorate([
    core_1.Component({
        selector: "club-list",
        template: require("./club-list.component.html")
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location,
        platform_browser_1.Title])
], ClubListComponent);
exports.ClubListComponent = ClubListComponent;
//# sourceMappingURL=club-list.component.js.map