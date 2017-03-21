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
var person_service_1 = require("./person.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var PersonListComponent = (function () {
    function PersonListComponent(personService, route, location) {
        this.personService = personService;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.page = +this.route.snapshot.params || 1;
        this.update();
    };
    PersonListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    PersonListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.deleteModal.hide();
    };
    PersonListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.personService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    PersonListComponent.prototype.update = function () {
        var _this = this;
        this.personService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    PersonListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "person?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    PersonListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return PersonListComponent;
}());
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], PersonListComponent.prototype, "deleteModal", void 0);
PersonListComponent = __decorate([
    core_1.Component({
        selector: "person-list",
        template: require("./person-list.component.html")
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute,
        common_1.Location])
], PersonListComponent);
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map