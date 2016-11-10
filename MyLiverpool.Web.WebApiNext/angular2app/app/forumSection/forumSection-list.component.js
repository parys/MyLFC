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
import { ForumSectionService } from "./forumSection.service";
import { RolesCheckedService } from "../shared/index";
export var ForumSectionListComponent = (function () {
    function ForumSectionListComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    ForumSectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { return console.log(""); });
    };
    ForumSectionListComponent = __decorate([
        Component({
            selector: "forumSection-list",
            template: require("./forumSection-list.component.html")
        }), 
        __metadata('design:paramtypes', [ForumSectionService, RolesCheckedService])
    ], ForumSectionListComponent);
    return ForumSectionListComponent;
}());
//# sourceMappingURL=forumSection-list.component.js.map