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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var account_service_1 = require("./account.service");
var AccountValidators = AccountValidators_1 = (function () {
    function AccountValidators(service1) {
        this.service1 = service1;
        AccountValidators_1.service = service1;
    }
    AccountValidators.prototype.isEmailUnique = function (control) {
        AccountValidators_1.changed.next();
        return new Observable_1.Observable(function (obs) {
            control
                .valueChanges
                .debounceTime(400)
                .takeUntil(AccountValidators_1.changed)
                .take(1)
                .switchMap(function (value) { return AccountValidators_1.service.isEmailUnique(value); })
                .subscribe(function (data) {
                if (+control.value.length < 6 || data) {
                    obs.next(null);
                }
                else {
                    obs.next({ "notUniqueEmail": true });
                }
                obs.complete();
            }, function (error) {
                console.log(error);
                obs.complete();
            });
        });
    };
    AccountValidators.prototype.isUserNameUnique = function (control) {
        AccountValidators_1.changed1.next();
        return new Observable_1.Observable(function (obs) {
            control
                .valueChanges
                .debounceTime(400)
                .takeUntil(AccountValidators_1.changed1)
                .take(1)
                .switchMap(function (value) { return AccountValidators_1.service.isUserNameUnique(value); })
                .subscribe(function (data) {
                if (+control.value.length < 3 || data) {
                    obs.next(null);
                }
                else {
                    obs.next({ "notUniqueUserName": true });
                }
                obs.complete();
            }, function (error) {
                console.log(error);
                obs.complete();
            });
        });
    };
    return AccountValidators;
}());
AccountValidators.changed = new Subject_1.Subject();
AccountValidators.changed1 = new Subject_1.Subject();
AccountValidators = AccountValidators_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountValidators);
exports.AccountValidators = AccountValidators;
var AccountValidators_1;
//# sourceMappingURL=account.validators.js.map