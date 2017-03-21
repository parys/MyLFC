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
var pm_service_1 = require("./pm.service");
var index_1 = require("../shared/index");
var PmDetailComponent = (function () {
    function PmDetailComponent(pmService, rolesChecked, route) {
        this.pmService = pmService;
        this.rolesChecked = rolesChecked;
        this.route = route;
    }
    PmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.pmService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    PmDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PmDetailComponent.prototype.writePm = function () {
        this.selectedUserId = this.item.receiverId;
    };
    PmDetailComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    PmDetailComponent.prototype.parse = function (item) {
        this.item = item;
    };
    return PmDetailComponent;
}());
PmDetailComponent = __decorate([
    core_1.Component({
        selector: "pm-detail",
        template: require("./pm-detail.component.html")
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute])
], PmDetailComponent);
exports.PmDetailComponent = PmDetailComponent;
//# sourceMappingURL=pm-detail.component.js.map