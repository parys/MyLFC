var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, ElementRef, Input } from "@angular/core";
import { Router } from "@angular/router";
export var SecuredDirective = (function () {
    function SecuredDirective(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
    }
    SecuredDirective.prototype.ngAfterViewInit = function () {
    };
    SecuredDirective.prototype.ngOnInit = function () {
        this.checkRights();
    };
    SecuredDirective.prototype.checkRights = function () {
        var result = false;
        if (!this.secured) {
        }
        else {
        }
        if (!result) {
            var el = this.elementRef.nativeElement;
            el.parentNode.removeChild(el);
        }
    };
    __decorate([
        HostBinding("hidden"), 
        __metadata('design:type', Boolean)
    ], SecuredDirective.prototype, "hideRouterLink", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SecuredDirective.prototype, "secured", void 0);
    SecuredDirective = __decorate([
        Directive({
            selector: "[secured]"
        }), 
        __metadata('design:paramtypes', [Router, ElementRef])
    ], SecuredDirective);
    return SecuredDirective;
}());
//# sourceMappingURL=secured.directive.js.map