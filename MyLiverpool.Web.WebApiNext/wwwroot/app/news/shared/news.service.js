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
require('rxjs/add/operator/map');
const app_constants_1 = require('../../app.constants');
const httpWrapper_1 = require("../../shared/httpWrapper");
let NewsService = class NewsService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.GetAll = (filters) => {
            return this.http.get(this.actionUrl + "News/list/" + JSON.stringify(filters)).map(res => res.json());
        };
        this.GetSingle = (id) => {
            return this.http.get(this.actionUrl + id).map(res => res.json());
        };
        this.Create = (item) => {
            var toAdd = JSON.stringify({ ItemName: item });
            return this.http.post(this.actionUrl + 'News/', JSON.stringify(item)).map(res => res.json());
        };
        this.Update = (id, itemToUpdate) => {
            return this.http
                .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(res => res.json());
        };
        this.Delete = (id) => {
            return this.http.delete(this.actionUrl + id).map(response => response.json());
        };
        this.AddView = (id) => {
            return this.http.get(this.actionUrl + 'AddView/' + id).map(res => res.json());
        };
        this.actionUrl = configuration.ServerWithApiUrl + 'material/';
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
};
NewsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map