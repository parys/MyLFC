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
const httpWrapper_1 = require("../shared/httpWrapper");
const http_1 = require('@angular/http');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
const localStorage_1 = require("../shared/localStorage");
let AuthService = class AuthService {
    constructor(http, http1, localStorage) {
        this.http = http;
        this.http1 = http1;
        this.localStorage = localStorage;
        this.isLoggedIn = false;
        this.roles = ['newsmaker', 'user'];
        // this.roles =   'newsmaker',  }
    }
    login(username, password) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
        // headers.append('client_id', 'client_id3');
        // headers.append('client_secret', 'client_secret44');
        //   this.createAuthorizationHeader(headers);
        //  let perams = { grant_type: "password", userName: username, password: password };
        let perams = `grant_type=password&username=${username}&password=${password}&client_id=client_id3&client_secret=client_secret44`;
        var result = this.http1.post('connect/token', perams, {
            headers: headers
        });
        result.subscribe(data => this.parseLoginAnswer(data), error => console.log(error), () => console.log("success login"));
        return true;
    }
    logout() {
        this.isLoggedIn = false;
    }
    parseLoginAnswer(item) {
        let response = JSON.parse(item._body); //todo migrate to es6 storage
        this.localStorage.setObject('token_type', response.token_type);
        this.localStorage.setObject('access_token', response.access_token);
        this.localStorage.setObject('expires_in', response.expires_in);
        this.localStorage.setObject('refresh_token', response.refresh_token);
        this.isLoggedIn = true;
    }
    isUserInRole(role) {
        if (this.roles.find(x => x === role)) {
            return true;
        }
        return false;
    }
};
AuthService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, http_1.Http, localStorage_1.LocalStorageMine])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map