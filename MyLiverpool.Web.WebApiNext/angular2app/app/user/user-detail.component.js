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
var forms_1 = require("@angular/forms");
var app_constants_1 = require("../app.constants");
var user_service_1 = require("./user.service");
var index_1 = require("../shared/index");
var index_2 = require("../roleGroup/index");
var UserDetailComponent = (function () {
    function UserDetailComponent(configuration, storage, service, route, rolesChecked, roleGroupService, formBuilder, router) {
        this.configuration = configuration;
        this.storage = storage;
        this.service = service;
        this.route = route;
        this.rolesChecked = rolesChecked;
        this.roleGroupService = roleGroupService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.banDaysCount = 0;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.initRoleForm();
        this.initBanForm();
        this.sub = this.route.params.subscribe(function (params) {
            if (params["id"] !== undefined) {
                _this.service.getSingle(+params["id"])
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
            else {
                _this.router.navigate(["/user", { page: 1 }]);
            }
        });
        if (this.roles.isAdminAssistant) {
            this.loadRoleGroups();
        }
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var roleGroupId = this.roleForm.controls["roleGroupId"].value;
        this.service.updateRoleGroup(this.item.id, roleGroupId)
            .subscribe(function (data) {
            if (data) {
                _this.roleForm.patchValue(roleGroupId);
            }
        });
    };
    UserDetailComponent.prototype.onSubmitBan = function () {
        var _this = this;
        var banDaysCount = this.banForm.controls["banDaysCount"].value;
        this.service.ban(this.item.id, banDaysCount)
            .subscribe(function (data) {
            if (data) {
                var time = new Date();
                _this.item.lockoutEnd = new Date(time.setHours(time.getHours() + banDaysCount * 24 * 60 * 60));
                _this.banForm.controls["banDaysCount"].patchValue(null);
            }
        });
    };
    UserDetailComponent.prototype.onChangeAvatar = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        if (file) {
            this.service.updateAvatar(file)
                .subscribe(function (result) { return _this.item.photo = result + "#" + Math.random(); }, function (error) { return console.log(error); }, function () { });
        }
    };
    UserDetailComponent.prototype.resetAvatar = function () {
        var _this = this;
        this.service.resetAvatar(this.item.id)
            .subscribe(function (result) { return _this.item.photo = result + "#" + Math.random(); }, function (error) { return console.log(error); }, function () { });
    };
    UserDetailComponent.prototype.unban = function () {
        var _this = this;
        this.service.unban(this.item.id)
            .subscribe(function (data) {
            if (data) {
                _this.item.lockoutEnd = null;
            }
        });
    };
    UserDetailComponent.prototype.writePm = function () {
        this.selectedUserId = this.item.id;
    };
    UserDetailComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    UserDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.roleForm.patchValue(item);
    };
    UserDetailComponent.prototype.loadRoleGroups = function () {
        var _this = this;
        this.roleGroupService.getAll()
            .subscribe(function (data) { return _this.roleGroups = data; }, function (error) { return console.log(error); }, function () { });
    };
    UserDetailComponent.prototype.initRoleForm = function () {
        this.roleForm = this.formBuilder.group({
            'roleGroupId': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
    };
    UserDetailComponent.prototype.initBanForm = function () {
        this.banForm = this.formBuilder.group({
            'banDaysCount': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    index_1.GlobalValidators.mustBeGreaterThanZero
                ])
            ]
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: "user-detail",
        template: require("./user-detail.component.html")
    }),
    __metadata("design:paramtypes", [app_constants_1.Configuration,
        index_1.LocalStorageService,
        user_service_1.UserService,
        router_1.ActivatedRoute,
        index_1.RolesCheckedService,
        index_2.RoleGroupService,
        forms_1.FormBuilder,
        router_1.Router])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map