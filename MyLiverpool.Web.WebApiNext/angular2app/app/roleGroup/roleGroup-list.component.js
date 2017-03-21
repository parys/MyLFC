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
var roleGroup_service_1 = require("./roleGroup.service");
var index_1 = require("../shared/index");
var RoleGroupListComponent = (function () {
    function RoleGroupListComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    RoleGroupListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.update();
    };
    RoleGroupListComponent.prototype.update = function () {
        var _this = this;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
    };
    return RoleGroupListComponent;
}());
RoleGroupListComponent = __decorate([
    core_1.Component({
        selector: "roleGroup-list",
        template: require("./roleGroup-list.component.html")
    }),
    __metadata("design:paramtypes", [roleGroup_service_1.RoleGroupService,
        index_1.RolesCheckedService])
], RoleGroupListComponent);
exports.RoleGroupListComponent = RoleGroupListComponent;
//# sourceMappingURL=roleGroup-list.component.js.map