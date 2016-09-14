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
const http_1 = require('@angular/http');
const localStorage_1 = require("./localStorage");
let HttpWrapper = class HttpWrapper {
    constructor(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    updateHeaders() {
        let headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        if (this.localStorage.get('token_type')) {
            headers.append('Authorization', this.localStorage.getObject('token_type') + ' ' + this.localStorage.getObject('access_token'));
        }
        //console.log("update headers");
        //console.log(headers);
        return headers;
    }
    get(url) {
        let result = this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
        //console.log(result);
        return result;
    }
    post(url, data) {
        this.updateHeaders();
        return this.http.post(url, data, {
            headers: this.updateHeaders()
        });
    }
    put(url, data) {
        this.updateHeaders();
        return this.http.put(url, data, {
            headers: this.updateHeaders()
        });
    }
    delete(url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    }
};
HttpWrapper = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, localStorage_1.LocalStorageMine])
], HttpWrapper);
exports.HttpWrapper = HttpWrapper;
//# sourceMappingURL=httpWrapper.js.map