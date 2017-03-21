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
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var userFilters_model_1 = require("./userFilters.model");
var index_1 = require("../shared/index");
var UserListComponent = (function () {
    function UserListComponent(userService, location, rolesChecked, route) {
        this.userService = userService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.page = +this.route.snapshot.params["page"] || 1;
        this.userName = this.route.snapshot.params["userName"] || "";
        this.update();
    };
    UserListComponent.prototype.writePm = function (index) {
        this.selectedUserId = index;
    };
    UserListComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    UserListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "user?page=" + this.page;
        if (this.userName) {
            newUrl = newUrl + "&userName=" + this.userName;
        }
        this.location.replaceState(newUrl);
    };
    ;
    UserListComponent.prototype.update = function () {
        var _this = this;
        var filters = new userFilters_model_1.UserFilters();
        filters.userName = this.userName;
        filters.page = this.page;
        this.userService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    UserListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: "user-list",
        template: require("./user-list.component.html")
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map