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
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { RolesCheckedService } from "../shared/index";
export var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, rolesChecked) {
        this.userService = userService;
        this.route = route;
        this.rolesChecked = rolesChecked;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.userService.GetSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.parse = function (item) {
        this.item = item;
    };
    UserDetailComponent = __decorate([
        Component({
            selector: "user-detail",
            template: require("./user-detail.component.html")
        }), 
        __metadata('design:paramtypes', [UserService, ActivatedRoute, RolesCheckedService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
//# sourceMappingURL=user-detail.component.js.map