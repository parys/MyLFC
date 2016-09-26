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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const user_service_1 = require("./user.service");
const userFilters_model_1 = require("./userFilters.model");
let UserListComponent = class UserListComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['page']) {
                this.page = +params['page'];
            }
            //  this.categoryId = +params['categoryId'];
            //  this.userName = params['userName'];
            this.update();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    parsePageable(pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
    update() {
        let filters = new userFilters_model_1.UserFilters();
        //  filters.categoryId = this.categoryId;
        //  filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;
        this.userService
            .GetAll(filters)
            .subscribe(data => this.parsePageable(data), error => console.log(error), () => console.log("success load list news"));
    }
};
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        templateUrl: 'app/user/user-list.component.html'
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map