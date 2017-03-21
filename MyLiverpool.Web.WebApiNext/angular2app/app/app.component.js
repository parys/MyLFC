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
var platform_browser_1 = require("@angular/platform-browser");
var roles_checked_service_1 = require("./shared/roles-checked.service");
var AppComponent = (function () {
    function AppComponent(router, rolesChecked, viewContainerRef, activatedRoute, titleService) {
        this.router = router;
        this.rolesChecked = rolesChecked;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.roles = this.rolesChecked.checkRoles();
        this.viewContainerRef = viewContainerRef;
        this.initTitleSubscriber();
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.initTitleSubscriber = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === "primary"; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event["title"]); });
    };
    AppComponent.prototype.setUpBreadcrumbs = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        template: require("./app.component.html"),
        styles: [require("./app.component.css")],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router,
        roles_checked_service_1.RolesCheckedService,
        core_1.ViewContainerRef,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map