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
import { PmService } from "./pm.service";
export var PmListComponent = (function () {
    function PmListComponent(pmService) {
        this.pmService = pmService;
    }
    PmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pmService
            .GetAll()
            .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
    };
    PmListComponent.prototype.parse = function (model) {
        console.log(model);
        this.received = model.received;
        this.sent = model.sent;
    };
    PmListComponent.prototype.delete = function (index) {
    };
    PmListComponent = __decorate([
        Component({
            selector: "pm-list",
            template: require("./pm-list.component.html")
        }), 
        __metadata('design:paramtypes', [PmService])
    ], PmListComponent);
    return PmListComponent;
}());
//# sourceMappingURL=pm-list.component.js.map