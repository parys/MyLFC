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
var core_1 = require('@angular/core');
var pm_service_1 = require('./pm.service');
var PmListComponent = (function () {
    function PmListComponent(pmService) {
        this.pmService = pmService;
    }
    PmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pmService
            .GetAll()
            .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { return console.log("success load categoryu lits news"); });
    };
    PmListComponent.prototype.parse = function (model) {
        this.received = model.received;
        this.sent = model.sent;
    };
    PmListComponent.prototype.delete = function (index) {
        //console.log("delete");
        //this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
        //    error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    };
    PmListComponent = __decorate([
        core_1.Component({
            selector: 'pm-list',
            templateUrl: 'app/pm/pm-list.component.html'
        }), 
        __metadata('design:paramtypes', [pm_service_1.PmService])
    ], PmListComponent);
    return PmListComponent;
}());
exports.PmListComponent = PmListComponent;
//# sourceMappingURL=pm-list.component.js.map