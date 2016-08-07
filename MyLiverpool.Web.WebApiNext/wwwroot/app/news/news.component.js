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
const common_1 = require('@angular/common');
const DataService_1 = require('../services/DataService');
let NewsComponent = class NewsComponent {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.message = "Hello from HomeComponent constructor";
    }
    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(data => this.values = data, error => console.log(error), () => console.log('Get all complete'));
    }
};
NewsComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.component.html',
        directives: [common_1.CORE_DIRECTIVES],
        providers: [DataService_1.DataService]
    }), 
    __metadata('design:paramtypes', [DataService_1.DataService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map