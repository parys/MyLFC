module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(98));
__export(__webpack_require__(6));
__export(__webpack_require__(21));
__export(__webpack_require__(99));
__export(__webpack_require__(39));
__export(__webpack_require__(97));
//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var Configuration = (function () {
    function Configuration() {
        this.Server = "http://localhost:1669/";
        this.ApiUrl = "api/v1/";
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    Configuration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Configuration);
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=app.constants.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(24);
var localStorage_1 = __webpack_require__(21);
var HttpWrapper = (function () {
    function HttpWrapper(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    HttpWrapper.prototype.updateHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        if (this.localStorage.get("token_type")) {
            headers.append("Authorization", this.localStorage.getObject("token_type") + " " + this.localStorage.getObject("access_token"));
        }
        return headers;
    };
    HttpWrapper.prototype.get = function (url) {
        var result = this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
        return result;
    };
    HttpWrapper.prototype.post = function (url, data) {
        var headers = this.updateHeaders();
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpWrapper.prototype.put = function (url, data) {
        var headers = this.updateHeaders();
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpWrapper.prototype.delete = function (url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    HttpWrapper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, localStorage_1.LocalStorageMine])
    ], HttpWrapper);
    return HttpWrapper;
}());
exports.HttpWrapper = HttpWrapper;
//# sourceMappingURL=httpWrapper.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(1);
var AccountService = (function () {
    function AccountService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "register/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.confirmEmail = function (userId, code) {
            return _this.http.get(_this.actionUrl + ("confirmEmail?userId=" + userId + "&code=" + code)).map(function (res) { return res.json(); });
        };
        this.forgotPassword = function (email) {
            return _this.http.get(_this.actionUrl + ("forgotPassword?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resendConfirmEmail = function (email) {
            return _this.http.get(_this.actionUrl + ("resendConfirmEmail?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resetPassword = function (model) {
            return _this.http.put(_this.actionUrl + "resetPassword", model).map(function (res) { return res.json(); });
        };
        this.changePassword = function (model) {
            return _this.http.put(_this.actionUrl + "changePassword", model).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "account/";
    }
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, app_constants_1.Configuration])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("ng2-bootstrap/ng2-bootstrap");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(24);
var router_1 = __webpack_require__(2);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(142);
var index_1 = __webpack_require__(1);
var app_constants_1 = __webpack_require__(4);
var AuthService = (function () {
    function AuthService(http, http1, localStorage, rolesCheckedService, router, configuration) {
        this.http = http;
        this.http1 = http1;
        this.localStorage = localStorage;
        this.rolesCheckedService = rolesCheckedService;
        this.router = router;
        this.configuration = configuration;
        this.isLoggedIn = false;
        this.roles = [];
        if (this.localStorage.get("access_token")) {
            this.isLoggedIn = true;
            this.roles = this.localStorage.getObject("roles");
            this.id = +this.localStorage.get("userId");
        }
        else {
            this.localStorage.remove("roles");
        }
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        var perams = "grant_type=password&username=" + username + "&password=" + password + "&client_id=client_id3";
        var result = this.http1.post(this.configuration.Server + "connect/token", perams, {
            headers: headers
        });
        result.subscribe(function (data) { return _this.parseLoginAnswer(data); }, function (error) {
            if (error._body === "unconfirmed_email") {
                _this.router.navigate(["/unconfirmedEmail"]);
                return;
            }
            console.log(error);
        }, function () { return _this.getUserId(); });
        return true;
    };
    AuthService.prototype.logout = function () {
        this.localStorage.remove("token_type");
        this.localStorage.remove("access_token");
        this.localStorage.remove("expires_in");
        this.localStorage.remove("refresh_token");
        this.localStorage.remove("roles");
        this.localStorage.remove("userId");
        this.isLoggedIn = false;
        this.rolesCheckedService.checkRoles();
    };
    AuthService.prototype.isUserInRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    AuthService.prototype.parseLoginAnswer = function (item) {
        var response = JSON.parse(item._body);
        this.localStorage.setObject("token_type", response.token_type);
        this.localStorage.setObject("access_token", response.access_token);
        this.localStorage.setObject("expires_in", response.expires_in);
        this.localStorage.setObject("refresh_token", response.refresh_token);
        this.isLoggedIn = true;
    };
    AuthService.prototype.parseRoles = function (item) {
        this.roles = item._body.split(", ");
        this.localStorage.setObject("roles", this.roles);
    };
    AuthService.prototype.getRoles = function () {
        var _this = this;
        this.http.get(this.configuration.ServerWithApiUrl + "role")
            .subscribe(function (data) { return _this.parseRoles(data); }, function (error) { return console.log(error); }, function () { return _this.rolesCheckedService.checkRoles(); });
    };
    AuthService.prototype.getUserId = function () {
        var _this = this;
        this.http.get(this.configuration.ServerWithApiUrl + "user/getId")
            .subscribe(function (data) { return _this.id = +JSON.parse(data.text()); }, function (error) { return console.log(error); }, function () {
            _this.localStorage.set("userId", _this.id.toString());
            _this.getRoles();
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, http_1.Http, index_1.LocalStorageMine, index_1.RolesCheckedService, router_1.Router, app_constants_1.Configuration])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var MaterialCommentService = (function () {
    function MaterialCommentService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (page) {
            return _this.http.get(_this.actionUrl + "list/" + page).map(function (res) { return res.json(); });
        };
        this.getAllByMaterial = function (page, id) {
            return _this.http.get(_this.actionUrl + "material/" + id + "/list/" + page).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "News/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.verify = function (id) {
            return _this.http.get(_this.actionUrl + "verify/" + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "materialComment/";
    }
    MaterialCommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], MaterialCommentService);
    return MaterialCommentService;
}());
exports.MaterialCommentService = MaterialCommentService;
//# sourceMappingURL=materialComment.service.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var NewsService = (function () {
    function NewsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "News/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.addView = function (id) {
            return _this.http.get(_this.actionUrl + "addView/" + id).map(function (res) { return res.json(); });
        };
        this.activate = function (id) {
            return _this.http.get(_this.actionUrl + "activate/" + id).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "material/";
    }
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var PmService = (function () {
    function PmService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function () {
            return _this.http.get(_this.actionUrl).map(function (res) { return res.json(); });
        };
        this.GetSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.Create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.Update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.Delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "pm/";
    }
    PmService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], PmService);
    return PmService;
}());
exports.PmService = PmService;
//# sourceMappingURL=pm.service.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(1);
var ClubService = (function () {
    function ClubService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (page) {
            return _this.http.get(_this.actionUrl + ("list/" + page)).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.getByName = function (typed) {
            return _this.http.get(_this.actionUrl + ("/getClubsByName/" + typed)).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "club/";
    }
    ClubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, app_constants_1.Configuration])
    ], ClubService);
    return ClubService;
}());
exports.ClubService = ClubService;
//# sourceMappingURL=club.service.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(15));
__export(__webpack_require__(68));
__export(__webpack_require__(67));
//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(31));
__export(__webpack_require__(79));
__export(__webpack_require__(78));
//# sourceMappingURL=index.js.map

/***/ },
/* 18 */
/***/ function(module, exports) {

"use strict";
"use strict";
var MaterialComment = (function () {
    function MaterialComment() {
    }
    return MaterialComment;
}());
exports.MaterialComment = MaterialComment;
//# sourceMappingURL=materialComment.model.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var NewsCategoryService = (function () {
    function NewsCategoryService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http.put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "newsCategory/";
    }
    NewsCategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], NewsCategoryService);
    return NewsCategoryService;
}());
exports.NewsCategoryService = NewsCategoryService;
//# sourceMappingURL=newsCategory.service.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(88));
__export(__webpack_require__(90));
__export(__webpack_require__(89));
__export(__webpack_require__(36));
__export(__webpack_require__(13));
//# sourceMappingURL=index.js.map

/***/ },
/* 21 */
/***/ function(module, exports) {

"use strict";
"use strict";
var LocalStorageMine = (function () {
    function LocalStorageMine() {
        if (!localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
        this.localStorage = localStorage;
    }
    LocalStorageMine.prototype.set = function (key, value) {
        this.localStorage[key] = value;
    };
    LocalStorageMine.prototype.get = function (key) {
        return this.localStorage[key] || false;
    };
    LocalStorageMine.prototype.setObject = function (key, value) {
        this.localStorage[key] = JSON.stringify(value);
    };
    LocalStorageMine.prototype.getObject = function (key) {
        if (this.localStorage[key]) {
            return JSON.parse(this.localStorage[key]);
        }
        return null;
    };
    LocalStorageMine.prototype.remove = function (key) {
        this.localStorage.removeItem(key);
    };
    return LocalStorageMine;
}());
exports.LocalStorageMine = LocalStorageMine;
//# sourceMappingURL=localStorage.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var httpWrapper_1 = __webpack_require__(6);
var app_constants_1 = __webpack_require__(4);
var UserService = (function () {
    function UserService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(function (res) { return res.json(); });
        };
        this.GetSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.Create = function (item) {
            var toAdd = JSON.stringify({ ItemName: item });
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.Update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.Delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + 'user/';
    }
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var WishService = (function () {
    function WishService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.GetSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.Create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.Update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.Delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.GetTypes = function () {
            return _this.http.get(_this.actionUrl + "types/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "wish/";
    }
    WishService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], WishService);
    return WishService;
}());
exports.WishService = WishService;
//# sourceMappingURL=wish.service.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(57));
__export(__webpack_require__(53));
__export(__webpack_require__(60));
__export(__webpack_require__(7));
//# sourceMappingURL=index.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(1);
var AdminService = (function () {
    function AdminService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.updateEplTable = function () {
            return _this.http.get(_this.actionUrl + "updateTable/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "admin/";
    }
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, app_constants_1.Configuration])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(11));
__export(__webpack_require__(65));
//# sourceMappingURL=index.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(1);
var ForumSectionService = (function () {
    function ForumSectionService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "forumSection/";
    }
    ForumSectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, app_constants_1.Configuration])
    ], ForumSectionService);
    return ForumSectionService;
}());
exports.ForumSectionService = ForumSectionService;
//# sourceMappingURL=forumSection.service.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(72));
__export(__webpack_require__(28));
__export(__webpack_require__(71));
//# sourceMappingURL=index.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(74));
__export(__webpack_require__(77));
__export(__webpack_require__(76));
//# sourceMappingURL=index.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
__webpack_require__(5);
var app_constants_1 = __webpack_require__(4);
var httpWrapper_1 = __webpack_require__(6);
var MatchService = (function () {
    function MatchService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.getTypes = function () {
            return _this.http.get(_this.actionUrl + "/getTypes")
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.ServerWithApiUrl + "match/";
    }
    MatchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
    ], MatchService);
    return MatchService;
}());
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(18));
__export(__webpack_require__(83));
__export(__webpack_require__(12));
__export(__webpack_require__(84));
__export(__webpack_require__(82));
//# sourceMappingURL=index.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(19));
__export(__webpack_require__(34));
__export(__webpack_require__(35));
//# sourceMappingURL=index.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var newsCategory_model_1 = __webpack_require__(86);
var newsCategory_service_1 = __webpack_require__(19);
var NewsCategoryEditComponent = (function () {
    function NewsCategoryEditComponent(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
    }
    NewsCategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'name': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
    };
    NewsCategoryEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsCategoryEditComponent.prototype.onSubmit = function () {
        var model = new newsCategory_model_1.NewsCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    NewsCategoryEditComponent = __decorate([
        core_1.Component({
            selector: "newsCategory-edit",
            template: __webpack_require__(125)
        }), 
        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], NewsCategoryEditComponent);
    return NewsCategoryEditComponent;
}());
exports.NewsCategoryEditComponent = NewsCategoryEditComponent;
//# sourceMappingURL=newsCategory-edit.component.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(8);
var newsCategory_service_1 = __webpack_require__(19);
var NewsCategoryListComponent = (function () {
    function NewsCategoryListComponent(newsCategoryService, titleService) {
        this.newsCategoryService = newsCategoryService;
        this.titleService = titleService;
    }
    NewsCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Категории");
        this.newsCategoryService
            .getAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsCategoryListComponent.prototype.parsePageable = function (model) {
        this.items = model;
    };
    NewsCategoryListComponent.prototype.delete = function (index) {
        this.newsCategoryService.delete(this.items[index].id).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.items.splice(index, 1);
    };
    NewsCategoryListComponent = __decorate([
        core_1.Component({
            selector: "newsCategory-list",
            template: __webpack_require__(126)
        }), 
        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, platform_browser_1.Title])
    ], NewsCategoryListComponent);
    return NewsCategoryListComponent;
}());
exports.NewsCategoryListComponent = NewsCategoryListComponent;
//# sourceMappingURL=newsCategory-list.component.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

"use strict";
"use strict";
var News = (function () {
    function News() {
    }
    return News;
}());
exports.News = News;
//# sourceMappingURL=news.model.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(38));
__export(__webpack_require__(95));
__export(__webpack_require__(93));
__export(__webpack_require__(94));
__export(__webpack_require__(14));
//# sourceMappingURL=index.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Pm = (function () {
    function Pm() {
    }
    return Pm;
}());
exports.Pm = Pm;
//# sourceMappingURL=pm.model.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var index_1 = __webpack_require__(1);
var RolesCheckedService = (function () {
    function RolesCheckedService() {
        var _this = this;
        this.checkedRoles = {
            isLogined: false,
            isEditor: false,
            isNewsmaker: false,
            isModerator: false,
            isMainModerator: false,
            isAdminAssistant: false,
            isSelf: function (userId) { return _this.isSelf(userId); }
        };
        this.localStorage = new index_1.LocalStorageMine();
        this.checkRoles();
    }
    RolesCheckedService.prototype.checkRoles = function () {
        this.roles = this.localStorage.getObject("roles");
        if (!this.roles) {
            return;
        }
        ;
        this.checkedRoles.isLogined = true;
        this.checkEditor();
        this.checkNewsmaker();
        this.checkModerator();
        this.checkMainModerator();
        this.checkAdminAssistant();
    };
    RolesCheckedService.prototype.checkEditor = function () {
        if (this.checkRole("NewsFull")) {
            this.checkedRoles.isEditor = true;
        }
    };
    RolesCheckedService.prototype.checkNewsmaker = function () {
        if (this.checkRole("NewsStart")) {
            this.checkedRoles.isNewsmaker = true;
        }
    };
    RolesCheckedService.prototype.checkModerator = function () {
        if (this.checkRole("UserStart")) {
            this.checkedRoles.isModerator = true;
        }
    };
    RolesCheckedService.prototype.checkMainModerator = function () {
        if (this.checkRole("UserFull")) {
            this.checkedRoles.isMainModerator = true;
        }
    };
    RolesCheckedService.prototype.checkAdminAssistant = function () {
        if (this.checkRole("AdminStart")) {
            this.checkedRoles.isAdminAssistant = true;
        }
    };
    RolesCheckedService.prototype.checkRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    RolesCheckedService.prototype.isSelf = function (authorId) {
        var userId = +this.localStorage.get("userId");
        return (userId === authorId);
    };
    RolesCheckedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RolesCheckedService);
    return RolesCheckedService;
}());
exports.RolesCheckedService = RolesCheckedService;
//# sourceMappingURL=roles-checked.service.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var user_service_1 = __webpack_require__(22);
var index_1 = __webpack_require__(1);
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, rolesChecked) {
        this.userService = userService;
        this.route = route;
        this.rolesChecked = rolesChecked;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.userService.GetSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.parse = function (item) {
        this.item = item;
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: "user-detail",
            template: __webpack_require__(133)
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, index_1.RolesCheckedService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var user_service_1 = __webpack_require__(22);
var userFilters_model_1 = __webpack_require__(101);
var UserListComponent = (function () {
    function UserListComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    UserListComponent.prototype.update = function () {
        var _this = this;
        var filters = new userFilters_model_1.UserFilters();
        filters.userName = this.userName;
        filters.page = this.page;
        this.userService
            .GetAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: "user-list",
            template: __webpack_require__(134)
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(43));
__export(__webpack_require__(105));
__export(__webpack_require__(103));
__export(__webpack_require__(102));
__export(__webpack_require__(23));
//# sourceMappingURL=index.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Wish = (function () {
    function Wish() {
    }
    return Wish;
}());
exports.Wish = Wish;
//# sourceMappingURL=wish.model.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("ng2-file-upload/ng2-file-upload");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var http_1 = __webpack_require__(24);
var material_1 = __webpack_require__(138);
var platform_browser_1 = __webpack_require__(8);
var app_component_1 = __webpack_require__(63);
var app_routes_1 = __webpack_require__(64);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(20);
var newsCategory = __webpack_require__(33);
var index_2 = __webpack_require__(27);
var index_3 = __webpack_require__(1);
var index_4 = __webpack_require__(29);
var account = __webpack_require__(25);
var club = __webpack_require__(16);
var match = __webpack_require__(17);
var user_detail_component_1 = __webpack_require__(40);
var user_service_1 = __webpack_require__(22);
var user_list_component_1 = __webpack_require__(41);
var index_5 = __webpack_require__(37);
var index_6 = __webpack_require__(30);
var index_7 = __webpack_require__(42);
var index_8 = __webpack_require__(32);
var ng2_auto_complete_1 = __webpack_require__(140);
var index_9 = __webpack_require__(62);
var ng2_bootstrap_1 = __webpack_require__(9);
var ng2_file_upload_1 = __webpack_require__(44);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.DatepickerModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.ModalModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
                ng2_bootstrap_1.PaginationModule,
                forms_1.ReactiveFormsModule,
                app_routes_1.routing],
            declarations: [
                account.AccountSigninComponent,
                account.AccountSignupComponent,
                account.ChangePasswordComponent,
                account.ConfirmEmailComponent,
                account.ForgotPasswordComponent,
                account.ResetPasswordComponent,
                account.UnconfirmedEmailComponent,
                club.ClubEditComponent,
                club.ClubListComponent,
                newsCategory.NewsCategoryEditComponent,
                newsCategory.NewsCategoryListComponent,
                app_component_1.AppComponent,
                index_6.ClubHistoryComponent,
                index_9.EplTableComponent,
                index_4.ForumSectionListComponent,
                match.MatchEditComponent,
                match.MatchListComponent,
                index_8.MaterialCommentDetailComponent,
                index_8.MaterialCommentListComponent,
                index_8.MaterialCommentSectionComponent,
                index_1.NewsListComponent,
                index_1.NewsDetailComponent,
                index_1.NewsEditComponent,
                index_5.PmDetailComponent,
                index_5.PmEditComponent,
                index_5.PmListComponent,
                index_6.RightSidebarComponent,
                index_6.RulesComponent,
                index_3.SecuredDirective,
                user_detail_component_1.UserDetailComponent,
                user_list_component_1.UserListComponent,
                index_7.WishEditComponent,
                index_7.WishListComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                account.AccountService,
                club.ClubService,
                match.MatchService,
                newsCategory.NewsCategoryService,
                index_9.AdminService,
                app_routes_1.appRoutingProviders,
                index_2.AuthGuard,
                index_2.AuthService,
                app_constants_1.Configuration,
                index_4.ForumSectionService,
                index_3.HttpWrapper,
                index_3.GlobalValidators,
                { provide: index_3.LocalStorageMine, useClass: index_3.LocalStorageMine },
                index_8.MaterialCommentService,
                index_1.NewsService,
                index_5.PmService,
                index_3.RolesCheckedService,
                platform_browser_1.Title,
                user_service_1.UserService,
                index_7.WishService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __compiler__ = __webpack_require__(137);
var core_1 = __webpack_require__(0);
var patch = false;
if (!core_1.__core_private__["ViewUtils"]) {
    patch = true;
    core_1.__core_private__["ViewUtils"] = core_1.__core_private__["view_utils"];
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(139);
if (patch) {
    __universal__.ViewUtils = core_1.__core_private__["view_utils"];
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}


/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills/node");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("zone.js");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var auth_service_1 = __webpack_require__(11);
var AccountSigninComponent = (function () {
    function AccountSigninComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    AccountSigninComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'userName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    AccountSigninComponent.prototype.onSubmit = function (ra) {
        this.userName = this.loginForm.controls["userName"].value;
        this.password = this.loginForm.controls["password"].value;
        var result = this.authService.login(this.userName, this.password);
    };
    AccountSigninComponent = __decorate([
        core_1.Component({
            selector: "account-signin",
            template: __webpack_require__(106)
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder])
    ], AccountSigninComponent);
    return AccountSigninComponent;
}());
exports.AccountSigninComponent = AccountSigninComponent;
//# sourceMappingURL=account-signin.component.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var signup_model_1 = __webpack_require__(59);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(1);
var AccountSignupComponent = (function () {
    function AccountSignupComponent(accountService, formBuilder) {
        this.accountService = accountService;
        this.formBuilder = formBuilder;
    }
    AccountSignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'userName': ["123", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'email': ["andrew_parys@tut.by", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6), , index_1.GlobalValidators.mailFormat])],
            'password': ["123qwe!Q", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ["123qwe!Q", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'fullName': ["123", forms_1.Validators.compose([
                    forms_1.Validators.required,])],
            'birthday': ["10/10/2015", forms_1.Validators.compose([
                    forms_1.Validators.required,])]
        });
    };
    AccountSignupComponent.prototype.onSubmit = function (value) {
        var signup = new signup_model_1.Signup();
        signup.userName = this.registerForm.controls["userName"].value;
        signup.email = this.registerForm.controls["email"].value;
        signup.password = this.registerForm.controls["password"].value;
        signup.confirmPassword = this.registerForm.controls["confirmPassword"].value;
        signup.fullName = this.registerForm.controls["fullName"].value;
        signup.birthday = this.registerForm.controls["birthday"].value;
        this.accountService
            .create(signup)
            .subscribe(function (data) { }, function (error) { return console.log(error); }, function () { });
    };
    AccountSignupComponent = __decorate([
        core_1.Component({
            selector: "account-signup",
            template: __webpack_require__(107)
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
    ], AccountSignupComponent);
    return AccountSignupComponent;
}());
exports.AccountSignupComponent = AccountSignupComponent;
//# sourceMappingURL=account-signup.component.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(25);
exports.accountRoutes = [
    { path: "signup", component: index_1.AccountSignupComponent },
    { path: "confirmEmail", component: index_1.ConfirmEmailComponent },
    { path: "forgotPassword", component: index_1.ForgotPasswordComponent },
    { path: "unconfirmedEmail", component: index_1.UnconfirmedEmailComponent },
    { path: "resetPassword", component: index_1.ResetPasswordComponent },
    { path: "changePassword", component: index_1.ChangePasswordComponent }
];
//# sourceMappingURL=account.routing.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(1);
var changePassword_model_1 = __webpack_require__(54);
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = this.formBuilder.group({
            'oldPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'newPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        }, { validator: index_1.GlobalValidators.matchingPasswords("newPassword", "confirmPassword") });
    };
    ChangePasswordComponent.prototype.onSubmit = function (ra) {
        var model = new changePassword_model_1.ChangePassword();
        model.oldPassword = this.passwordForm.controls["oldPassword"].value;
        model.newPassword = this.passwordForm.controls["newPassword"].value;
        model.confirmPassword = this.passwordForm.controls["confirmPassword"].value;
        this.service.changePassword(model).subscribe(function (data) {
            if (data) {
                console.log("password changed");
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: "change-password",
            template: __webpack_require__(108)
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=changePassword.component.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

"use strict";
"use strict";
var ChangePassword = (function () {
    function ChangePassword() {
    }
    return ChangePassword;
}());
exports.ChangePassword = ChangePassword;
//# sourceMappingURL=changePassword.model.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var account_service_1 = __webpack_require__(7);
var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(accountService, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.result = false;
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var id = +params["userId"];
            var code = params["code"];
            _this.accountService.confirmEmail(id, code)
                .subscribe(function (data) { return _this.result = data; }, function (error) { return console.log(error); }, function () {
                if (_this.result) {
                }
            });
        });
    };
    ConfirmEmailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ConfirmEmailComponent = __decorate([
        core_1.Component({
            selector: "email-confirmation",
            template: "<span [hidden]='!result'>Ваш адрес электронной почты успешно подтвержден. Можете войти и быть как дома.</span>"
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}());
exports.ConfirmEmailComponent = ConfirmEmailComponent;
//# sourceMappingURL=confirmEmail.component.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(1);
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat])]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function (ra) {
        this.email = this.forgotForm.controls["email"].value;
        this.service.forgotPassword(this.email).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: "forgot-password",
            template: __webpack_require__(109)
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotPassword.component.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(1);
var resetPassword_model_1 = __webpack_require__(58);
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(service, route, router, formBuilder) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.code = params["code"];
        });
        this.resetForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)])],
        }, { validator: index_1.GlobalValidators.matchingPasswords("password", "confirmPassword") });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResetPasswordComponent.prototype.onSubmit = function (ra) {
        var resetPassword = new resetPassword_model_1.ResetPassword();
        resetPassword.code = this.code;
        resetPassword.email = this.resetForm.controls["email"].value;
        resetPassword.password = this.resetForm.controls["password"].value;
        resetPassword.confirmPassword = this.resetForm.controls["confirmPassword"].value;
        this.service.resetPassword(resetPassword).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: "reset-password",
            template: __webpack_require__(110)
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetPassword.component.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

"use strict";
"use strict";
var ResetPassword = (function () {
    function ResetPassword() {
    }
    return ResetPassword;
}());
exports.ResetPassword = ResetPassword;
//# sourceMappingURL=resetPassword.model.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Signup = (function () {
    function Signup() {
    }
    return Signup;
}());
exports.Signup = Signup;
//# sourceMappingURL=signup.model.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(1);
var UnconfirmedEmailComponent = (function () {
    function UnconfirmedEmailComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    UnconfirmedEmailComponent.prototype.ngOnInit = function () {
        this.unconfirmedForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat])]
        });
    };
    UnconfirmedEmailComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(1211);
        var email = this.unconfirmedForm.controls["email"].value;
        this.service.resendConfirmEmail(email).subscribe(function (data) {
            if (data) {
                _this.finish = true;
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    UnconfirmedEmailComponent = __decorate([
        core_1.Component({
            selector: "unconfirmedEmail",
            template: __webpack_require__(111)
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
    ], UnconfirmedEmailComponent);
    return UnconfirmedEmailComponent;
}());
exports.UnconfirmedEmailComponent = UnconfirmedEmailComponent;
//# sourceMappingURL=unconfirmedEmail.component.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var EplTableComponent = (function () {
    function EplTableComponent() {
    }
    EplTableComponent.prototype.ngOnInit = function () {
    };
    EplTableComponent = __decorate([
        core_1.Component({
            selector: "epl-table",
            template: __webpack_require__(112)
        }), 
        __metadata('design:paramtypes', [])
    ], EplTableComponent);
    return EplTableComponent;
}());
exports.EplTableComponent = EplTableComponent;
//# sourceMappingURL=eplTable.component.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(26));
__export(__webpack_require__(61));
//# sourceMappingURL=index.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(8);
var auth_service_1 = __webpack_require__(11);
var roles_checked_service_1 = __webpack_require__(39);
var AppComponent = (function () {
    function AppComponent(router, auth, rolesChecked, viewContainerRef, titleService) {
        this.router = router;
        this.auth = auth;
        this.rolesChecked = rolesChecked;
        this.roles = this.rolesChecked.checkedRoles;
        this.viewContainerRef = viewContainerRef;
        titleService.setTitle("Главная");
    }
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: __webpack_require__(113)
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, roles_checked_service_1.RolesCheckedService, core_1.ViewContainerRef, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(20);
var auth_routing_1 = __webpack_require__(66);
var account_routing_1 = __webpack_require__(52);
var club_routing_1 = __webpack_require__(70);
var newsCategory_routing_1 = __webpack_require__(87);
var news_routing_1 = __webpack_require__(91);
var user_routing_1 = __webpack_require__(100);
var pm_routing_1 = __webpack_require__(96);
var home_routing_1 = __webpack_require__(75);
var forumSection_routing_1 = __webpack_require__(73);
var wish_routing_1 = __webpack_require__(104);
var materialComment_routing_1 = __webpack_require__(85);
var match_routing_1 = __webpack_require__(81);
var routes = account_routing_1.accountRoutes.concat(auth_routing_1.authRoutes, club_routing_1.clubRoutes, forumSection_routing_1.forumSectionRoutes, home_routing_1.homeRoutes, match_routing_1.matchRoutes, materialComment_routing_1.materialCommentRoutes, newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, pm_routing_1.pmRoutes, user_routing_1.userRoutes, wish_routing_1.wishRoutes, [
    { path: "", component: index_1.NewsListComponent }
]);
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var auth_service_1 = __webpack_require__(11);
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(27);
exports.authRoutes = [];
exports.authProviders = [
    index_1.AuthGuard,
    index_1.AuthService
];
//# sourceMappingURL=auth.routing.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(8);
var club_service_1 = __webpack_require__(15);
var club_model_1 = __webpack_require__(69);
var index_1 = __webpack_require__(1);
var ng2_file_upload_1 = __webpack_require__(44);
var ClubEditComponent = (function () {
    function ClubEditComponent(clubService, route, router, localStorage, formBuilder, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.localStorage = localStorage;
        this.formBuilder = formBuilder;
        this.hasBaseDropZoneOver = false;
        this.item = new club_model_1.Club();
        titleService.setTitle("Редактирование клуба");
    }
    ClubEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.clubService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.editForm.controls["englishName"].valueChanges.subscribe(function (data) {
            _this.updateOptions(data);
        });
    };
    ClubEditComponent.prototype.upload = function () {
        var _this = this;
        this.uploader.queue[0].onComplete = function (response, status, headers) {
            console.log(response, status, headers);
            _this.editForm.controls["logo"].patchValue(response);
        };
        this.uploader.uploadAll();
    };
    ClubEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.clubService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.clubService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    ClubEditComponent.prototype.getRandomNumber = function () {
        return Math.random();
    };
    ClubEditComponent.prototype.updateOptions = function (name) {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: "/api/v1/upload/clubLogo/" + name,
            authToken: "Bearer " + this.localStorage.getObject("access_token"),
            autoUpload: false
        });
    };
    ClubEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    ClubEditComponent.prototype.parseForm = function () {
        var item = new club_model_1.Club();
        item.id = this.id;
        item.englishName = this.editForm.controls["englishName"].value;
        item.logo = this.editForm.controls["logo"].value;
        item.name = this.editForm.controls["name"].value;
        item.stadium = this.editForm.controls["stadium"].value;
        return item;
    };
    ClubEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'englishName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])],
            'logo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'name': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])],
            'stadium': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)])]
        });
    };
    ClubEditComponent = __decorate([
        core_1.Component({
            selector: "club-edit",
            template: __webpack_require__(114)
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, router_1.Router, index_1.LocalStorageMine, forms_1.FormBuilder, platform_browser_1.Title])
    ], ClubEditComponent);
    return ClubEditComponent;
}());
exports.ClubEditComponent = ClubEditComponent;
//# sourceMappingURL=club-edit.component.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var platform_browser_1 = __webpack_require__(8);
var router_1 = __webpack_require__(2);
var club_service_1 = __webpack_require__(15);
var ng2_bootstrap_1 = __webpack_require__(9);
var ClubListComponent = (function () {
    function ClubListComponent(clubService, route, location, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
        titleService.setTitle("Клубы");
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    ClubListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    ClubListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.deleteModal.hide();
    };
    ClubListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.clubService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    ClubListComponent.prototype.update = function () {
        var _this = this;
        this.clubService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    ClubListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "club/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ClubListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ClubListComponent.prototype, "deleteModal", void 0);
    ClubListComponent = __decorate([
        core_1.Component({
            selector: "club-list",
            template: __webpack_require__(115)
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location, platform_browser_1.Title])
    ], ClubListComponent);
    return ClubListComponent;
}());
exports.ClubListComponent = ClubListComponent;
//# sourceMappingURL=club-list.component.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Club = (function () {
    function Club() {
    }
    return Club;
}());
exports.Club = Club;
//# sourceMappingURL=club.model.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(16);
exports.clubRoutes = [
    { path: "club/:id/edit", component: index_1.ClubEditComponent },
    { path: "club", component: index_1.ClubListComponent }
];
//# sourceMappingURL=club.routing.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forumSection_service_1 = __webpack_require__(28);
var index_1 = __webpack_require__(1);
var ForumSectionListComponent = (function () {
    function ForumSectionListComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    ForumSectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { return console.log(""); });
    };
    ForumSectionListComponent = __decorate([
        core_1.Component({
            selector: "forumSection-list",
            template: __webpack_require__(116)
        }), 
        __metadata('design:paramtypes', [forumSection_service_1.ForumSectionService, index_1.RolesCheckedService])
    ], ForumSectionListComponent);
    return ForumSectionListComponent;
}());
exports.ForumSectionListComponent = ForumSectionListComponent;
//# sourceMappingURL=forumSection-list.component.js.map

/***/ },
/* 72 */
/***/ function(module, exports) {

"use strict";
"use strict";
var ForumSection = (function () {
    function ForumSection() {
    }
    return ForumSection;
}());
exports.ForumSection = ForumSection;
//# sourceMappingURL=forumSection.model.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(29);
exports.forumSectionRoutes = [
    { path: "forum", component: index_1.ForumSectionListComponent },
];
//# sourceMappingURL=forumSection.routing.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var ClubHistoryComponent = (function () {
    function ClubHistoryComponent() {
    }
    ClubHistoryComponent = __decorate([
        core_1.Component({
            selector: "<club-history>",
            template: __webpack_require__(117)
        }), 
        __metadata('design:paramtypes', [])
    ], ClubHistoryComponent);
    return ClubHistoryComponent;
}());
exports.ClubHistoryComponent = ClubHistoryComponent;
//# sourceMappingURL=club-history.component.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(30);
exports.homeRoutes = [
    { path: "clubHistory", component: index_1.ClubHistoryComponent },
    { path: "rules", component: index_1.RulesComponent }
];
//# sourceMappingURL=home.routing.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var admin_service_1 = __webpack_require__(26);
var index_1 = __webpack_require__(1);
var RightSidebarComponent = (function () {
    function RightSidebarComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
    };
    RightSidebarComponent.prototype.updateEplTable = function () {
        this.service
            .updateEplTable()
            .subscribe(function (data) {
            if (data) {
            }
        }, function (error) { return console.log(error); }, function () { return console.log(""); });
    };
    RightSidebarComponent = __decorate([
        core_1.Component({
            selector: "right-sidebar",
            template: __webpack_require__(118)
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, index_1.RolesCheckedService])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());
exports.RightSidebarComponent = RightSidebarComponent;
//# sourceMappingURL=rightSidebar.component.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var RulesComponent = (function () {
    function RulesComponent() {
    }
    RulesComponent = __decorate([
        core_1.Component({
            selector: "<rules>",
            template: __webpack_require__(119)
        }), 
        __metadata('design:paramtypes', [])
    ], RulesComponent);
    return RulesComponent;
}());
exports.RulesComponent = RulesComponent;
//# sourceMappingURL=rules.component.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(17);
var index_2 = __webpack_require__(16);
var match_model_1 = __webpack_require__(80);
var MatchEditComponent = (function () {
    function MatchEditComponent(matchService, clubService, route, router, formBuilder) {
        this.matchService = matchService;
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    MatchEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.matchService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.clubService.getByName("")
            .subscribe(function (data) { return _this.parseClubs(data); }, function (error) { return console.log(error); }, function () { });
    };
    MatchEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.matchService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    MatchEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    MatchEditComponent.prototype.parseForm = function () {
        var item = new match_model_1.Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        item.dateTime = this.editForm.controls["dateTime"].value;
        item.typeId = this.editForm.controls["typeId"].value;
        return item;
    };
    MatchEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'clubId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'isHome': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'dateTime': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'typeId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    MatchEditComponent.prototype.parseClubs = function (items) {
        this.clubs = items;
    };
    MatchEditComponent = __decorate([
        core_1.Component({
            selector: "match-edit",
            template: __webpack_require__(120)
        }), 
        __metadata('design:paramtypes', [index_1.MatchService, index_2.ClubService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
    ], MatchEditComponent);
    return MatchEditComponent;
}());
exports.MatchEditComponent = MatchEditComponent;
//# sourceMappingURL=match-edit.component.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var match_service_1 = __webpack_require__(31);
var MatchListComponent = (function () {
    function MatchListComponent(matchService, route) {
        this.matchService = matchService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    MatchListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MatchListComponent.prototype.update = function () {
    };
    MatchListComponent = __decorate([
        core_1.Component({
            selector: "match-list",
            template: __webpack_require__(121)
        }), 
        __metadata('design:paramtypes', [match_service_1.MatchService, router_1.ActivatedRoute])
    ], MatchListComponent);
    return MatchListComponent;
}());
exports.MatchListComponent = MatchListComponent;
//# sourceMappingURL=match-list.component.js.map

/***/ },
/* 80 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Match = (function () {
    function Match() {
    }
    return Match;
}());
exports.Match = Match;
//# sourceMappingURL=match.model.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(17);
exports.matchRoutes = [
    { path: "match/:id/edit", component: index_1.MatchEditComponent },
    { path: "match", component: index_1.MatchListComponent }
];
//# sourceMappingURL=match.routing.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var common_1 = __webpack_require__(10);
var materialComment_model_1 = __webpack_require__(18);
var materialComment_service_1 = __webpack_require__(12);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(9);
var MaterialCommentDetailComponent = (function () {
    function MaterialCommentDetailComponent(materialCommentService, location, rolesChecked, formBuilder) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
    }
    MaterialCommentDetailComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'answer': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    MaterialCommentDetailComponent.prototype.showAddCommentModal = function (index) {
        this.addCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideModal = function () {
        this.addCommentModal.hide();
        this.hideEditModal();
        this.deleteModal.hide();
    };
    MaterialCommentDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideEditModal = function () {
        this.editCommentModal.hide();
        this.cleanControls();
    };
    MaterialCommentDetailComponent.prototype.addComment = function (value) {
        var _this = this;
        var comment = this.getComment();
        this.materialCommentService.create(comment)
            .subscribe(function (data) {
            _this.item.children.push(data);
            _this.cleanControls();
            _this.addCommentModal.hide();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.children.forEach(function (x) {
                    if (_this.parent) {
                        x.parentId = _this.parent.id;
                        _this.parent.children.push(x);
                    }
                    else {
                        x.parentId = undefined;
                    }
                });
                _this.item = undefined;
                _this.hideModal();
            }
        });
    };
    MaterialCommentDetailComponent.prototype.showEditModal = function () {
        this.commentForm.patchValue(this.item);
        this.editCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.edit = function () {
        var _this = this;
        var comment = this.getComment();
        comment.answer = this.commentForm.controls["answer"].value;
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(function (data) {
            _this.item = comment;
            _this.hideEditModal();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.getComment = function () {
        var comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        return comment;
    };
    MaterialCommentDetailComponent.prototype.cleanControls = function () {
        this.commentForm.controls["message"].patchValue("");
        this.commentForm.controls["message"].updateValueAndValidity();
        this.commentForm.controls["answer"].patchValue("");
        this.commentForm.controls["answer"].updateValueAndValidity();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', materialComment_model_1.MaterialComment)
    ], MaterialCommentDetailComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentDetailComponent.prototype, "deep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MaterialCommentDetailComponent.prototype, "canCommentary", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentDetailComponent.prototype, "materialId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', materialComment_model_1.MaterialComment)
    ], MaterialCommentDetailComponent.prototype, "parent", void 0);
    __decorate([
        core_1.ViewChild("addCommentModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "addCommentModal", void 0);
    __decorate([
        core_1.ViewChild("editCommentModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "editCommentModal", void 0);
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], MaterialCommentDetailComponent.prototype, "deleteModal", void 0);
    MaterialCommentDetailComponent = __decorate([
        core_1.Component({
            selector: "materialComment-detail",
            template: __webpack_require__(122)
        }), 
        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService, forms_1.FormBuilder])
    ], MaterialCommentDetailComponent);
    return MaterialCommentDetailComponent;
}());
exports.MaterialCommentDetailComponent = MaterialCommentDetailComponent;
//# sourceMappingURL=materialComment-detail.component.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var materialComment_service_1 = __webpack_require__(12);
var common_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(9);
var MaterialCommentListComponent = (function () {
    function MaterialCommentListComponent(materialCommentService, location, rolesChecked) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = undefined;
    }
    MaterialCommentListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.update();
    };
    MaterialCommentListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "materialComment/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    MaterialCommentListComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load comment lits"); });
    };
    MaterialCommentListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = undefined;
        this.deleteModal.hide();
    };
    MaterialCommentListComponent.prototype.verify = function (index) {
        var _this = this;
        var result;
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe(function (data) { return result = data; }, function (error) { return console.log(error); }, function () {
            if (result) {
                _this.items[index].isVerified = true;
            }
        });
    };
    MaterialCommentListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    MaterialCommentListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], MaterialCommentListComponent.prototype, "deleteModal", void 0);
    MaterialCommentListComponent = __decorate([
        core_1.Component({
            selector: "materialComment-list",
            template: __webpack_require__(123)
        }), 
        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
    ], MaterialCommentListComponent);
    return MaterialCommentListComponent;
}());
exports.MaterialCommentListComponent = MaterialCommentListComponent;
//# sourceMappingURL=materialComment-list.component.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var materialComment_model_1 = __webpack_require__(18);
var materialComment_service_1 = __webpack_require__(12);
var common_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var MaterialCommentSectionComponent = (function () {
    function MaterialCommentSectionComponent(materialCommentService, location, rolesChecked, formBuilder) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
        this.items = [];
        this.page = 1;
        this.itemsPerPage = 15;
        this.canCommentary = false;
    }
    MaterialCommentSectionComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkedRoles;
        this.update();
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3)])]
        });
    };
    MaterialCommentSectionComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
    };
    ;
    MaterialCommentSectionComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAllByMaterial(this.page, this.materialId)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentSectionComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentSectionComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var comment = new materialComment_model_1.MaterialComment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        this.materialCommentService.create(comment)
            .subscribe(function (data) {
            _this.items.push(data);
            _this.commentForm.controls["message"].patchValue("");
        }, function (error) { return console.log(error); }, function () { });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MaterialCommentSectionComponent.prototype, "materialId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MaterialCommentSectionComponent.prototype, "canCommentary", void 0);
    MaterialCommentSectionComponent = __decorate([
        core_1.Component({
            selector: "comments",
            template: __webpack_require__(124)
        }), 
        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService, forms_1.FormBuilder])
    ], MaterialCommentSectionComponent);
    return MaterialCommentSectionComponent;
}());
exports.MaterialCommentSectionComponent = MaterialCommentSectionComponent;
//# sourceMappingURL=materialComment-section.component.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(32);
exports.materialCommentRoutes = [
    { path: "materialComment", component: index_1.MaterialCommentListComponent },
    { path: "materialComment/list", component: index_1.MaterialCommentListComponent },
    { path: "materialComment/list/:page", component: index_1.MaterialCommentListComponent },
    { path: "materialComment/list/:page/:categoryId", component: index_1.MaterialCommentListComponent },
];
//# sourceMappingURL=materialComment.routing.js.map

/***/ },
/* 86 */
/***/ function(module, exports) {

"use strict";
"use strict";
var NewsCategory = (function () {
    function NewsCategory() {
    }
    return NewsCategory;
}());
exports.NewsCategory = NewsCategory;
//# sourceMappingURL=newsCategory.model.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var newsCategory_list_component_1 = __webpack_require__(35);
var newsCategory_edit_component_1 = __webpack_require__(34);
exports.newsCategoryRoutes = [
    { path: 'newsCategory', component: newsCategory_list_component_1.NewsCategoryListComponent },
    { path: 'newsCategory/:id/edit', component: newsCategory_edit_component_1.NewsCategoryEditComponent }
];
//# sourceMappingURL=newsCategory.routing.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(8);
var news_service_1 = __webpack_require__(13);
var router_1 = __webpack_require__(2);
var localStorage_1 = __webpack_require__(21);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(9);
var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, route, localStorage, rolesChecked, router, titleService) {
        this.newsService = newsService;
        this.route = route;
        this.localStorage = localStorage;
        this.rolesChecked = rolesChecked;
        this.router = router;
        this.titleService = titleService;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.newsService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    NewsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsDetailComponent.prototype.showActivateModal = function (index) {
        this.activateModal.show();
    };
    NewsDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    NewsDetailComponent.prototype.hideModal = function () {
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsDetailComponent.prototype.activate = function () {
        var _this = this;
        var result;
        this.newsService.activate(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.hideModal();
                _this.router.navigate(["/news"]);
            }
        });
    };
    NewsDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    };
    NewsDetailComponent.prototype.addView = function () {
        var id = this.item.id;
        if (!this.localStorage.get("material" + id)) {
            this.localStorage.set("material" + id, "1");
            this.newsService.addView(id).subscribe(function (data) { return data; });
        }
    };
    __decorate([
        core_1.ViewChild("activateModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], NewsDetailComponent.prototype, "activateModal", void 0);
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], NewsDetailComponent.prototype, "deleteModal", void 0);
    NewsDetailComponent = __decorate([
        core_1.Component({
            selector: "news-detail",
            template: __webpack_require__(127)
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, localStorage_1.LocalStorageMine, index_1.RolesCheckedService, router_1.Router, platform_browser_1.Title])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var news_service_1 = __webpack_require__(13);
var news_model_1 = __webpack_require__(36);
var index_1 = __webpack_require__(33);
var NewsEditComponent = (function () {
    function NewsEditComponent(newsService, newsCategoryService, route, router, formBuilder) {
        this.newsService = newsService;
        this.newsCategoryService = newsCategoryService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    NewsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.newsService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.newsCategoryService.getAll()
            .subscribe(function (data) { return _this.parseCategories(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.newsService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.newsService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    NewsEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    NewsEditComponent.prototype.parseForm = function () {
        var item = new news_model_1.News();
        item.id = this.id;
        item.categoryId = this.editForm.controls["categoryId"].value;
        item.title = this.editForm.controls["title"].value;
        item.brief = this.editForm.controls["brief"].value;
        item.message = this.editForm.controls["message"].value;
        item.source = this.editForm.controls["source"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.pending = this.editForm.controls["pending"].value;
        item.canCommentary = this.editForm.controls["canCommentary"].value;
        item.onTop = this.editForm.controls["onTop"].value;
        return item;
    };
    NewsEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'categoryId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'title': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'brief': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'source': ["", forms_1.Validators.compose([])],
            'photo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'canCommentary': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'onTop': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])],
            'pending': ["", forms_1.Validators.compose([
                    forms_1.Validators.required])]
        });
    };
    NewsEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    NewsEditComponent = __decorate([
        core_1.Component({
            selector: "news-edit",
            template: __webpack_require__(128)
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, index_1.NewsCategoryService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
    ], NewsEditComponent);
    return NewsEditComponent;
}());
exports.NewsEditComponent = NewsEditComponent;
//# sourceMappingURL=news-edit.component.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var news_service_1 = __webpack_require__(13);
var newsFilters_model_1 = __webpack_require__(92);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(9);
var NewsListComponent = (function () {
    function NewsListComponent(newsService, route, location, rolesChecked, cd) {
        this.newsService = newsService;
        this.route = route;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.cd = cd;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
    }
    NewsListComponent.prototype.showActivateModal = function (index) {
        this.selectedItemIndex = index;
        this.activateModal.show();
    };
    NewsListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    NewsListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsListComponent.prototype.activate = function () {
        var _this = this;
        var result;
        var news = this.items[this.selectedItemIndex];
        this.newsService.activate(news.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                news.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.categoryId = +params["categoryId"];
            _this.userName = params["userName"];
            _this.update();
        });
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "news/list/" + this.page;
        if (this.categoryId) {
            newUrl = newUrl + "/" + this.categoryId;
        }
        this.location.replaceState(newUrl);
    };
    ;
    NewsListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    NewsListComponent.prototype.update = function () {
        var _this = this;
        var filters = new newsFilters_model_1.MaterialFilters();
        filters.categoryId = this.categoryId;
        filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;
        this.newsService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    __decorate([
        core_1.ViewChild("activateModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], NewsListComponent.prototype, "activateModal", void 0);
    __decorate([
        core_1.ViewChild("deleteModal"), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], NewsListComponent.prototype, "deleteModal", void 0);
    NewsListComponent = __decorate([
        core_1.Component({
            selector: "news-list",
            template: __webpack_require__(129),
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, common_1.Location, index_1.RolesCheckedService, core_1.ChangeDetectorRef])
    ], NewsListComponent);
    return NewsListComponent;
}());
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(20);
exports.newsRoutes = [
    { path: "news", component: index_1.NewsListComponent },
    { path: "news/list", component: index_1.NewsListComponent },
    { path: "news/list/:page", component: index_1.NewsListComponent },
    { path: "news/list/:page/:categoryId", component: index_1.NewsListComponent },
    { path: "news/:id", component: index_1.NewsDetailComponent },
    { path: "news/:id/edit", component: index_1.NewsEditComponent }
];
//# sourceMappingURL=news.routing.js.map

/***/ },
/* 92 */
/***/ function(module, exports) {

"use strict";
"use strict";
var MaterialFilters = (function () {
    function MaterialFilters() {
        this.page = 1;
    }
    return MaterialFilters;
}());
exports.MaterialFilters = MaterialFilters;
//# sourceMappingURL=newsFilters.model.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var pm_service_1 = __webpack_require__(14);
var PmDetailComponent = (function () {
    function PmDetailComponent(pmService, route) {
        this.pmService = pmService;
        this.route = route;
    }
    PmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.pmService.GetSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    PmDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PmDetailComponent.prototype.parse = function (item) {
        this.item = item;
    };
    PmDetailComponent = __decorate([
        core_1.Component({
            selector: "pm-detail",
            template: __webpack_require__(130)
        }), 
        __metadata('design:paramtypes', [pm_service_1.PmService, router_1.ActivatedRoute])
    ], PmDetailComponent);
    return PmDetailComponent;
}());
exports.PmDetailComponent = PmDetailComponent;
//# sourceMappingURL=pm-detail.component.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(2);
var pm_model_1 = __webpack_require__(38);
var pm_service_1 = __webpack_require__(14);
var PmEditComponent = (function () {
    function PmEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.mySource = ["ar1", "ar2", "3dsa"];
        this.users = "/api/user/GetUserNames?typed=:keyword";
    }
    PmEditComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            'receiver': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(500)
                ])
            ]
        });
        this.getUsername();
    };
    PmEditComponent.prototype.ngOnDestroy = function () {
    };
    PmEditComponent.prototype.updateUsername = function (user) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    };
    PmEditComponent.prototype.getUsername = function () {
        console.log(this.route);
        if (this.route.data["username"]) {
            console.log(this.route.data["username"]);
        }
    };
    PmEditComponent.prototype.onSubmit = function () {
        var model = new pm_model_1.Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.Create(model).subscribe(function (data) { return data; });
        this.router.navigate(["/pm"]);
    };
    PmEditComponent = __decorate([
        core_1.Component({
            selector: "pm-edit",
            template: __webpack_require__(131)
        }), 
        __metadata('design:paramtypes', [pm_service_1.PmService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], PmEditComponent);
    return PmEditComponent;
}());
exports.PmEditComponent = PmEditComponent;
//# sourceMappingURL=pm-edit.component.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var pm_service_1 = __webpack_require__(14);
var PmListComponent = (function () {
    function PmListComponent(pmService) {
        this.pmService = pmService;
    }
    PmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pmService
            .GetAll()
            .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
    };
    PmListComponent.prototype.parse = function (model) {
        console.log(model);
        this.received = model.received;
        this.sent = model.sent;
    };
    PmListComponent.prototype.delete = function (index) {
    };
    PmListComponent = __decorate([
        core_1.Component({
            selector: "pm-list",
            template: __webpack_require__(132)
        }), 
        __metadata('design:paramtypes', [pm_service_1.PmService])
    ], PmListComponent);
    return PmListComponent;
}());
exports.PmListComponent = PmListComponent;
//# sourceMappingURL=pm-list.component.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(37);
exports.pmRoutes = [
    { path: "pm", component: index_1.PmListComponent },
    { path: "pm/:id", component: index_1.PmDetailComponent },
    { path: "pm/:id/edit", component: index_1.PmEditComponent }
];
//# sourceMappingURL=pm.routing.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var GlobalValidators = (function () {
    function GlobalValidators() {
    }
    GlobalValidators.mailFormat = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (control.value !== "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidators.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    GlobalValidators = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GlobalValidators);
    return GlobalValidators;
}());
exports.GlobalValidators = GlobalValidators;
//# sourceMappingURL=globalValidators.js.map

/***/ },
/* 98 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Pageable = (function () {
    function Pageable() {
    }
    return Pageable;
}());
exports.Pageable = Pageable;
//# sourceMappingURL=pageable.model.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var SecuredDirective = (function () {
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
        core_1.HostBinding("hidden"), 
        __metadata('design:type', Boolean)
    ], SecuredDirective.prototype, "hideRouterLink", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecuredDirective.prototype, "secured", void 0);
    SecuredDirective = __decorate([
        core_1.Directive({
            selector: "[secured]"
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], SecuredDirective);
    return SecuredDirective;
}());
exports.SecuredDirective = SecuredDirective;
//# sourceMappingURL=secured.directive.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var user_detail_component_1 = __webpack_require__(40);
var user_list_component_1 = __webpack_require__(41);
exports.userRoutes = [
    { path: 'user', component: user_list_component_1.UserListComponent },
    { path: 'user/list', component: user_list_component_1.UserListComponent },
    { path: 'user/list/:page', component: user_list_component_1.UserListComponent },
    { path: 'user/list/:page/:userName', component: user_list_component_1.UserListComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
];
//# sourceMappingURL=user.routing.js.map

/***/ },
/* 101 */
/***/ function(module, exports) {

"use strict";
"use strict";
var UserFilters = (function () {
    function UserFilters() {
        this.page = 1;
    }
    return UserFilters;
}());
exports.UserFilters = UserFilters;
//# sourceMappingURL=userFilters.model.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var wish_model_1 = __webpack_require__(43);
var wish_service_1 = __webpack_require__(23);
var router_1 = __webpack_require__(2);
var WishEditComponent = (function () {
    function WishEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
    }
    WishEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(300)
                ])
            ],
            'type': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .GetSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { return console.log("success get  news"); });
            }
        });
        this.updateTypes();
    };
    WishEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishEditComponent.prototype.onSubmit = function () {
        var model = new wish_model_1.Wish();
        model.id = this.id;
        model.message = this.editForm.controls["message"].value;
        model.title = this.editForm.controls["title"].value;
        model.type = this.editForm.controls["type"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.Update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.Create(model).subscribe(function (data) { return res = data; });
        }
        this.router.navigate(["/wish"]);
    };
    WishEditComponent.prototype.updateTypes = function () {
        var _this = this;
        this.service
            .GetTypes()
            .subscribe(function (data) { return _this.types = data; });
    };
    WishEditComponent = __decorate([
        core_1.Component({
            selector: "wish-edit",
            template: __webpack_require__(135)
        }), 
        __metadata('design:paramtypes', [wish_service_1.WishService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], WishEditComponent);
    return WishEditComponent;
}());
exports.WishEditComponent = WishEditComponent;
//# sourceMappingURL=wish-edit.component.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var wish_service_1 = __webpack_require__(23);
var router_1 = __webpack_require__(2);
var WishListComponent = (function () {
    function WishListComponent(service, route) {
        this.service = service;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['page']) {
                _this.page = +params['page'];
            }
            _this.categoryId = +params['categoryId'];
            _this.update();
        });
    };
    WishListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    WishListComponent.prototype.update = function () {
        var _this = this;
        this.service
            .GetAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load list wish"); });
    };
    WishListComponent.prototype.getTypeClass = function (i) {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-warning";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };
    ;
    WishListComponent = __decorate([
        core_1.Component({
            selector: "wish-list",
            template: __webpack_require__(136)
        }), 
        __metadata('design:paramtypes', [wish_service_1.WishService, router_1.ActivatedRoute])
    ], WishListComponent);
    return WishListComponent;
}());
exports.WishListComponent = WishListComponent;
//# sourceMappingURL=wish-list.component.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(42);
exports.wishRoutes = [
    { path: "wish", component: index_1.WishListComponent },
    { path: "wish/:id/edit", component: index_1.WishEditComponent }
];
//# sourceMappingURL=wish.routing.js.map

/***/ },
/* 105 */
/***/ function(module, exports) {

"use strict";
"use strict";
var WishType = (function () {
    function WishType() {
    }
    return WishType;
}());
exports.WishType = WishType;
//# sourceMappingURL=wishType.model.js.map

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = "<form name=\"loginForm1\" class=\"form-inline\" role=\"form\" style=\"margin-top: 8px;\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['userName']\" placeholder=\"Логин\" type=\"text\" />\r\n      </div>\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['password']\" placeholder=\"Пароль\" type=\"password\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" [disabled]=\"!loginForm.valid\" value=\"Войти\" class=\"btn btn-default\" />\r\n    </div>\r\n</form>";

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 top20\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Логин</label>\r\n            <div class=\"col-md-10\">\r\n            <!--    <input type=\"text\" name=\"userName\" [(ngModel)]=\"item.username\" id=\"userName\" debounce=\"5000\" validation=\"remote:vm.userNameUnique():alt=Пользователь с таким логином уже существует|min_len:3|max_len:30|required\" />\r\n                -->  <input class=\"form-control\" [formControl]=\"registerForm.controls['userName']\" type=\"text\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Почтовый адрес</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"email\" name=\"email\" [(ngModel)]=\"item.email\" id=\"email\" debounce=\"5000\" validation=\"remote:vm.emailUnique():alt=Пользователь с таким адресом уже существуетrequired|email|min_len:6\" />\r\n               -->  <input class=\"form-control\" [formControl]=\"registerForm.controls['email']\" type=\"email\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-md-2 control-label\">Пароль</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"password\" name=\"vm.registerForm.password\" friendly-name=\"Пароль\" id=\"password\" [(ngModel)]=\"item.password\" validation=\"required|min_len:6\" />\r\n             -->    <input class=\"form-control\" [formControl]=\"registerForm.controls['password']\" type=\"password\" />\r\n             </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\" class=\"col-md-2 control-label\">Подтверждение пароля</label>\r\n            <div class=\"col-md-10\">\r\n             <!--   <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" [(ngModel)]=\"item.confirmPassword\" validation=\"required|match:vm.registerForm.password,Password2|min_len:6\" />\r\n              -->   <input class=\"form-control\" [formControl]=\"registerForm.controls['confirmPassword']\" type=\"password\" /> \r\n              </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Полное имя</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"text\" name=\"fullName\" [(ngModel)]=\"item.fullName\" validation=\"required|min_len:2\"/>\r\n           -->      <input class=\"form-control\" [formControl]=\"registerForm.controls['fullName']\"  type=\"text\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата рождения</label>\r\n            <div class=\"col-md-10\">\r\n                <!-- <datepicker  class=\"form-control\" [formControl]=\"registerForm.controls['birthday']\"></datepicker> \r\n                <!-- <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" validation=\"required\" name=\"birthday\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" [(ngModel)]=\"item.birthday\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\"/>\r\n                    span class=\"input-group-btn va-top\">\r\n                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span\r\n                </div> -->\r\n               <input class=\"form-control\" [formControl]=\"registerForm.controls['birthday']\" type=\"text\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button class=\"btn btn-default\" [disabled]=\"!registerForm.valid\" type=\"submit\">Зарегистрироваться</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Изменение пароля</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"passwordForm\" (ngSubmit)=\"onSubmit(passwordForm.value)\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Старый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"oldPassword\" [formControl]=\"passwordForm.controls['oldPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"newPassword\" [formControl]=\"passwordForm.controls['newPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"confirmPassword\" [formControl]=\"passwordForm.controls['confirmPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!passwordForm.valid\" type=\"submit\">Изменить</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Забыли пароль?</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"forgotEmail\" role=\"form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit(forgotForm.value)\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"emailAddress\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"forgotForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <input type=\"submit\" class=\"btn btn-default\" [disabled]=\"!forgotForm.valid\" value=\"Отправить\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <form class=\"form-horizontal\" name=\"resetForm\" role=\"form\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit(resetForm.value)\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <pre *ngIf=\"resetForm.errors\">{{resetForm.errors | json}}</pre>\r\n                <label class=\"col-md-2 control-label\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"resetForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"\" [formControl]=\"resetForm.controls['password']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Подтверждение нового пароля</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"\" [formControl]=\"resetForm.controls['confirmPassword']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!resetForm.valid\" type=\"submit\">Поменять пароль</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Адрес электронной почты не подтвержден</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"unconfirmedForm\" role=\"form\" [formGroup]=\"unconfirmedForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!finish\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"email\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"\" [formControl]=\"unconfirmedForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button type=\"submit\" [disabled]=\"!unconfirmedForm.valid\" class=\"btn btn-default\">Переслать</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"finish\">Письмо успешно отправлено</div>\r\n    </div>\r\n</div>";

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = "<table class=\"table table-condensed table-striped table-responsive col-xs-12 overflowable\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Команда</th>\r\n            <th>И</th>\r\n            <th>В</th>\r\n            <th>Н</th>\r\n            <th>П</th>\r\n            <th>+/-</th>\r\n            <th>О</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody><tr><td>1</td><td>Ливерпуль\r\n</td><td>11</td><td>8</td><td>2</td><td>1</td><td>16</td><td>26</td></tr>\r\n<tr><td>2</td><td>Челси\r\n</td><td>11</td><td>8</td><td>1</td><td>2</td><td>17</td><td>25</td></tr>\r\n<tr><td>3</td><td>Манчестер Сити\r\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>15</td><td>24</td></tr>\r\n<tr><td>4</td><td>Арсенал\r\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>13</td><td>24</td></tr>\r\n<tr><td>5</td><td>Тоттенхэм\r\n</td><td>11</td><td>5</td><td>6</td><td>0</td><td>9</td><td>21</td></tr>\r\n<tr><td>6</td><td>Манчестер Юнайтед\r\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>3</td><td>18</td></tr>\r\n<tr><td>7</td><td>Эвертон\r\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>2</td><td>18</td></tr>\r\n<tr><td>8</td><td>Уотфорд\r\n</td><td>11</td><td>4</td><td>3</td><td>4</td><td>-4</td><td>15</td></tr>\r\n<tr><td>9</td><td>Бернли\r\n</td><td>11</td><td>4</td><td>2</td><td>5</td><td>-4</td><td>14</td></tr>\r\n<tr><td>10</td><td>Саутгемптон\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>0</td><td>13</td></tr>\r\n<tr><td>11</td><td>Вест Бромвич\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-3</td><td>13</td></tr>\r\n<tr><td>12</td><td>Сток Сити\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-5</td><td>13</td></tr>\r\n<tr><td>13</td><td>Борнмут\r\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-3</td><td>12</td></tr>\r\n<tr><td>14</td><td>Лестер\r\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-5</td><td>12</td></tr>\r\n<tr><td>15</td><td>Мидлсбро\r\n</td><td>11</td><td>2</td><td>5</td><td>4</td><td>-2</td><td>11</td></tr>\r\n<tr><td>16</td><td>Кристал Пэлас\r\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-3</td><td>11</td></tr>\r\n<tr><td>17</td><td>Вест Хэм\r\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-9</td><td>11</td></tr>\r\n<tr><td>18</td><td>Халл\r\n</td><td>11</td><td>3</td><td>1</td><td>7</td><td>-14</td><td>10</td></tr>\r\n<tr><td>19</td><td>Суонси\r\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-11</td><td>5</td></tr>\r\n<tr><td>20</td><td>Сандерленд\r\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-12</td><td>5</td></tr>\r\n</tbody></table>";

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid navbar navbar-inverse navbar-fixed-top \">\r\n    <ul class=\"nav navbar-nav col-xs-3 col-sm-3 list-inline\">\r\n        <li><a id=\"back-top\" href=\"#\" style=\"display: none;\">Вверх</a></li>\r\n        <li class=\"divider\"></li>\r\n        <li *ngIf=\"auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/pm']\"><span class=\"glyphicon glyphicon-envelope\"></span> Читать л/с <!--(<span ng-bind=\"vm.unreadPmCount\"></span>)--></a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <account-signin></account-signin>\r\n        </li>\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/forgotPassword']\"><span class=\"glyphicon glyphicon-question-sign\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Забыли пароль?\"></span></a>\r\n        </li>\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/signup']\">Регистрация</a>\r\n        </li>\r\n        <li *ngIf=\"auth.isLoggedIn\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\" class=\"padding0\">\r\n                        <img class=\"nav-avatar\" ng-src=\"{$root.userImage}}\"/>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\">Мой профиль</a>\r\n                </li>-->\r\n                <li>\r\n                    <a (click)=\"logout()\">Выйти</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 top50\">\r\n    <header class=\"navbar navbar-default navbar-static-top row\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a [routerLink]=\"['/']\" class=\"navbar-brand\">Название сайта</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/']\">Главная</a></li>\r\n                <!-- @if (User.IsInRole(\"AdminFull\"))\r\n                {\r\n                <li> @Html.ActionLink(CommonMessages.Roles, \"Index\", \"Role\") </li>\r\n                }*@-->\r\n                <li> <a [routerLink]=\"['/forum']\">Форум</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a [routerLink]=\"['/news/list', 1]\" class=\"dropdown-toggle\" data-toggle=\"\">Новости<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li *ngIf=\"roles.isNewsmaker\"><a [routerLink]=\"['/news', 0, 'edit']\">Добавить</a></li>\r\n                        <li><a [routerLink]=\"['/newsCategory']\">Категории</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a ui-sref=\"blog()\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Блоги<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!--<li ng-if=\"vm.isAuthor()\"><a ui-sref=\"blogEdit()\">Добавить</a></li>-->\r\n                        <li><a ui-sref=\"blogCategories()\">Категории</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">ФК Ливерпуль<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/clubHistory']\">История</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li class=\"dropdown\">\r\n                    <!-- <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Пользователи <b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n\r\n                    <li-->\r\n                    <a [routerLink]=\"['/user/list', 1]\">Пользователи</a>\r\n                    <!--/li>\r\n                    </ul-->\r\n                </li>\r\n                <li> <a [routerLink]=\"['/materialComment']\">Комментарии</a></li>\r\n                <!--<li> <a ng-if=\"vm.isNewsmaker() || vm.isAuthor()\" ui-sref=\"images({path: 'content'})\">Изображения</a></li>-->\r\n                <li> <a [routerLink]=\"['/club']\">Клубы</a></li>\r\n                <li> <a [routerLink]=\"['/match']\">Матчи</a></li>\r\n                <li> <a [routerLink]=\"['/rules']\"><span class=\"text-danger\">Правила</span></a></li>\r\n                <li class=\"bg-success\"> <a [routerLink]=\"['/wish']\"><span class=\"text-info\">Пожелания</span></a></li>\r\n            </ul>\r\n        </div>\r\n        <!--<div class=\"col-xs-12 col-sm-12\">\r\n            temporary\r\n            <span ng-bind=\"$root.roles\"></span>\r\n        </div>-->\r\n    </header>\r\n    <div class=\"body-content row\">\r\n        <div ncy-breadcrumb></div>\r\n        <div class=\"col-xs-12 col-sm-push-3 col-sm-6 container-fluid\" style=\"background-color: #f5deb3\">\r\n            <div class=\"\">\r\n                <!--<uib-alert class=\"row\" ng-repeat=\"alert in $root.alerts\" dismiss-on-timeout=\"5000\" type=\"{alert.type}}\" close=\"closeAlert($index)\" ng-bind=\"alert.msg\"></uib-alert>-->\r\n                <div class=\"top20\" ui-view autoscroll=\"false\">\r\n                    <router-outlet></router-outlet>\r\n                    <!--div class=\"col-md-6\" ui-view=\"newsFeed\"></div>\r\n                    <div class=\"col-md-6\" ui-view=\"blogsFeed\"></div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-pull-6 col-sm-3 container-fluid\">\r\n            <section class=\"col-md- alert-info row\">\r\n                <h2>Эксетер </h2>\r\n                <div class=\"col-md-6\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/ru/f/f7/Exeter_City_Logo.png\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <span style=\"text-align: center; font-size: 45pt\">3:0</span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col-md- alert-danger row\">\r\n                <div class=\"col-md-12\"> Лучший игрок матча с Эксетером </div>\r\n                <div styleclass=\"col-md-12\">\r\n                    <img src=\"http://www.myliverpool.ru/images/Players/Squad12-13/Joe_Allen.png\" />\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    Джо Аллен\r\n                </div>\r\n            </section>\r\n            <section class=\"row\"></section>\r\n        </div>\r\n        <right-sidebar></right-sidebar>\r\n    </div>\r\n    <hr />\r\n    <footer class=\"bottom container-fluid\">\r\n        <p>&copy; @DateTime.Now.Year - @CommonMessages.SiteTitleAddress</p>\r\n    </footer>\r\n</div>";

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Соперник</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"name\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" src=\"{{editForm?.controls['logo'].value}}\" />\r\n        </div><div class=\"col-xs-10 col-sm-10\">\r\n                  <input formControlName=\"logo\" novalidate readonly />\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" [disabled]=\"!editForm.controls['englishName'].valid\"/>\r\n            <button type=\"button\" [hidden]=\"!this.uploader?.queue\" (click)=\"upload()\">Загрузить</button>\r\n        </div>\r\n</div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Название клуба на английском</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"englishName\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Стадион</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" formControlName=\"stadium\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>--\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!--todo magic number\r\n            </div>-->\r\n            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/club', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/club', item.id, 'edit']\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img class=\"avatar\" src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"container-fluid\" *ngFor=\"let section of items\">\r\n        <div class=\"panel panel-danger\" *ngIf=\"section.subsections.length > 0 || roles.isAdminAssistant\">\r\n            <div class=\"panel-heading\">\r\n                <span [textContent]=\"section.name\"></span>\r\n                <span *ngIf=\"roles.isAdminAssistant\">\r\n                    <a href=\"\" ui-sref=\"subsectionEdit({sectionId: section.id})\">Добавить подсекцию</a>\r\n                    <a class=\"pull-right\" [hidden]=\"section.subsections.length != 0\" ng-click=\"vm.removeSection($index)\">\r\n                        <span class=\"glyphicon glyphicon-remove\">\r\n                        </span>\r\n                    </a>\r\n                </span>\r\n            </div>\r\n            <!--div class=\"panel-body\"></!--div>-->\r\n            <ul class=\"list-group\" *ngFor=\"let subsection of section.subsections\">\r\n                <li class=\"list-group-item list\">\r\n                    <a ui-sref=\"subsection({id: subsection.id})\">\r\n                        <span [textContent]=\"subsection.name\"></span>\r\n                        <span class=\"small\" [textContent]=\"subsection.description\"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <a ng-click=\"vm.addSection()\">Добавить секцию</a>\r\n\r\n</div>\r\n\r\n<script type=\"text/ng-template\" id=\"addSection.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.AddSection</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" name=\"addSection\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label for=\"newSectionName\" class=\"col-md-2 control-label\">@ColonsMessages.SectionName</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" name=\"newSectionName\" ng-model=\"vm.sectionName\" validation=\"required\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-disabled=\"addSection.$invalid\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Add</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n\r\n<script type=\"text/ng-template\" id=\"modalDeleteConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.DeleteConfirmation</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        @CommonMessages.Delete?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Delete</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n";

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"\">\r\n        <img alt=\"\" style=\"border: 3px solid #ccc;margin:0 15px 15px 0;\" src=\"http://pictures.footymad.net/upload/342/69050-1.jpg\" align=\"left\" width=\"250px\">Главный соперник \"Ливерпуля\", \"Эвертон\", был сформирован в 1878 году Джоном Холдингом, местным предпринимателем и будущим мэром Ливерпуля.\r\n\r\n        Они начали играть на \"Энфилд Роуд\" — поле, арендованном у пивовара по имени Джон Оррелл. Как только \"Эвертон\" встал на ноги Холдинг приступил к строительству футбольных трибун на \"Энфилде\". Однако после возникших в 1892 году разногласий клуб распался на две группы. Одна из групп приняла решение переехать на \"Гудисон Парк\", в то время как оставшиеся, во главе с Холдингом, основали на \"Энфилд Роуд\" новый футбольный клуб - \"Ливерпуль\". Холдинг назначил главным тренером своего друга, Джона Маккену, который сразу отправился в Шотландию набирать команду игроков. После года работы Маккена решил, что настало время подать заявку на вступление в Футбольную лигу.\r\n\r\n        Уже после первого сезона в лиге \"Ливерпуль\" поднялся в высший дивизион, однако он по-прежнему оставался в тени своих соседей из \"Эвертона\", а большинство местных жителей отказывались ходить на матчи команды, все игроки которой были шотландцами. Первый сезон прошел неудачно, и клуб выбыл во Второй дивизион. Маккена поклялся вернуться в высшую лигу через двенадцать месяцев, что и произошло благодаря его целеустремленности и настойчивости, \"Ливерпуль\" вновь становится чемпионом второго дивизиона и продвигается в первый. На этот раз они завершили сезон на надежном пятом месте, выше \"Эвертона\".\r\n\r\n        Первый чемпионский титул \"Ливерпуль\" выиграл в сезоне 1900/01. Через два года после этого \"красные\" выбыли из высшей лиги, но вернулись туда спустя год и в том сезоне вновь стали победителями чемпионата. В качестве награды руководство клуба приняло решение построить для болельщиков новую трибуну, \"Спион Коп\", позже ставшую легендарной. Такое название трибуна получила в честь холма, расположенного в южно-африканской провинции Натал, где во время второй англо-бурской войны мерсисайдский полк понес большие потери. В переводе с африкаанс \"спион коп\" означает \"место, дающее хороший обзор\". В 1928 году трибуна была расширена и обрела крышу, надежно защищавшую от непогоды 30 000 болельщиков.\r\n\r\n        После Первой мировой войны \"Ливерпуль\" стал обладателем еще двух чемпионских титулов, но после Второй мировой начался спад игровой формы, хотя в 1950 году \"красным\" все же удалось выйти в финал Кубка Англии, где они уступили \"Арсеналу\". Сезон 1953/54 \"Ливерпуль\" завершил на последнем месте и выбыл из первого дивизиона. После нескольких неудачных лет на помощь клубу пришел Билл Шенкли. Он был назначен главным тренером в 1959 году и за следующие четырнадцать лет своей работы превратил \"Ливерпуль\" в величайший клуб английского футбола. За первые двенадцать месяцев его руководства двадцать четыре игрока покинули команду. В сезоне 1963/64 \"Ливерпуль\" в шестой раз стал чемпионом высшей лиги, а в следующем году коллекция трофеев пополнилась кубком Англии, благодаря победе над \"Лидс\" в финале соревнования. Но победная серия на этом не закончилась, в сезоне 1965/66 \"красные\" вновь выиграли главный титул лиги.\r\n\r\n        Следующий трофей \"Ливерпуль\" получил лишь спустя семь лет, в сезоне 1972/73, на этот раз Кубок УЕФА, а спустя еще год \"красные\" вновь стали обладателями кубка Англии. После этого Шенкли неожиданно решил завершить карьеру и передал полномочия своей правой руке — Бобу Пейсли. Громких побед не пришлось долго ждать, уже на второй год работы нового тренера, в сезоне 1975/76, \"Ливерпуль\" выиграл чемпионат и Кубок УЕФА. Через год \"красные\" вновь стали чемпионами лиги, завоевали Кубок европейских чемпионов, обыграв в финале \"Боруссию Менхенгладбах\", но в финальном матче Кубка Англии уступили \"Манчестер Юнайтед\" со счетом 2:1. В сезоне 1977/78 \"Ливерпуль\" стал первым британским клубом, кому удалось подтвердить звание европейского чемпиона, одержав победу в финале соревнования над бельгийским клубом \"Брюгге\" со счетом 1:0.\r\n\r\n        Затем два года подряд, в сезонах 1978/79 и 1979/80, \"Ливерпуль\" становится чемпионом страны. 1981 год стал очередной яркой страницей в истории клуба, в третий раз в своей истории \"красные\" становятся обладателями Кубка европейских чемпионов, одержав победу над мадридским \"Реалом\" в финале турнира, а также выигрывают Кубок Лиги. В сезонах 1981/82 и 1982/83 \"Ливерпуль\" завоевывает еще два главных футбольных трофея страны, после чего Пейсли принимает решение уйти на пенсию. За девять лет его руководства клубом ему шесть раз присуждалось звание \"Лучший тренер года\".\r\n\r\n        На пост главного тренера заступил Джо Фэган, и в первый же год под его руководством клуб выиграл чемпионат Англии, Кубок Лиги и Кубок европейских чемпионов, обыграв \"Рому\" в Италии. Следующий сезон был омрачен страшной трагедией. Во время финала Кубка европейских чемпионов против \"Ювентуса\" на стадионе \"Эйзель\" возникли беспорядки. Перекрытие на стадионе рухнуло и унесло с собой жизни 38 болельщиков итальянского клуба. В конечном счете обладателем трофея стал \"Ювентус\", а английским клубам на неопределенный срок запретили участвовать в европейских соревнованиях.\r\n\r\n        В 1986 году Кенни Далглиш был назначен играющим тренером. В этом же сезоне \"Ливерпуль\" выиграл чемпионат и Кубок Англии. В сезоне 1987/88 \"красные\" вновь становятся чемпионами страны, однако в финале Кубка Англии уступают \"Уимблдону\". Сезон 1988/89 стал худшим в истории \"Ливерпуля\". Во время полуфинального матча Кубка Англии против \"Ноттингем Форест\" на стадионе \"Хиллсборо\" 96 болельщиков \"Ливерпуля\" погибли в результате переполнения трибуны \"Леппинг Лейн\". Позже \"Красные\" вышли в финал, где встретились с \"Эвертоном\". Перед началом матча болельщики обеих команд пели \"You will never walk alone\" и провели минуту молчания, в память о погибших на \"Хиллсборо\". \"Ливерпуль\" победил со счетом 3:2 благодаря двум голам, забитым вышедшим на замену Ианом Рашем. Главный трофей лиги также был практически в руках у \"красных\", чтобы этому помешать \"Арсеналу\" нужно было выиграть на \"Энфилде\" с преимуществом в два мяча. К концу решающего матча \"Арсенал\" вел в счете 1:0, но гол Майкла Томаса, забитый уже в добавленное время, похоронил надежды \"Ливерпуля\" на очередной трофейный дубль. После окончания сезона Кенни Далглиш оставил свой пост, объяснив это шокировавшее многих решение нервным перенапряжением.\r\n\r\n        Временно заменить Далглиша был призван Ронни Моран, прежде чем в апреле 1991 года на пост главного тренера не был назначен Грэм Сунесс. Он привел в команду множество новых игроков, но его строгий стиль работы не пользовался популярностью и не помог команде повторить успех прошлых лет. Начиная с эры Суннеса и до сих пор клуб преследует множество проблем.\r\n\r\n        Рой Эванс в свой первый полный сезон у руля клуба, в 1995 году, выиграл Кубок Лиги. Несмотря на то, что ему удалось построить интересную команду молодых игроков, многие из которых пришли из юношеской команды \"Ливерпуля\", никаких серьезных побед ему одержать не удалось. Болельщики и руководство требовали громких успехов, и в 1998 году в клуб был приглашен Жерар Улье, который должен был разделить тренерское кресло с Роем Эвансом. Опыт совместной работы оказался неудачным, и Эванс покинул клуб, положив тем самым конец 35 периоду преданной службы \"Ливерпулю\".\r\n\r\n        Улье начал развивать состав клманды, приглашая относительно неизвестных игроков, при этом его совершенно не пугали критические отзывы средств массовой информации. Ему удалось значительно улучшить игру команды в обороне, за что в 2001 году он был вознагражден пятью трофеями, а \"Ливерпуль\" не потерпел ни одного поражения в кубковых соревнованиях того сезона и квалифицировался в Лигу Чемпионов.\r\n\r\n        На следующий год \"Ливерпуль\" серьезно претендовал на победу в Премьер-лиге и в то же время неплохо себя проявил в Лиге чемпионов, добравшись до четвертьфинала соревнования, где уступил леверкузенскому \"Байеру\", вышедшему в итоге в финал турнира.\r\n\r\n        Из-за проблем со здоровьем Жерара Улье, большую часть следующего сезона командой фактически руководил Фил Томпсон, но благодаря своем бутрумовскому прошлому ему удалось успешно справиться с этой задачей. В Премьер-лиге \"Ливерпуль\" занял второе место, уступив лишь \"Арсеналу\", и вновь получил путевку в Лигу Чемпионов.\r\n\r\n        Сезон 2003/04 \"Ливерпуль\" завершил на четвертом месте, получив тем самым возможность принять участие в Лиге Чемпионов следующего сезона. Руководство клуба решило, что настала пора перемен. Новым главным тренером был назначен Рафаэль Бенитес, а Улье согласился покинуть клуб.\r\n\r\n        Бенитес не стал тратить время на поиски для себя новых помощников, а оставил на своих должностях Фила Томпсона, Сэмми Ли и Джо Корригана. Внезапно \"Ливерпуль\" вернулся к атакующему стилю игры с большим количеством передач, на радость болельщикам и критикам, и стал проявлять намеки на многообещающее будущее. В конце сезона \"Ливерпуль\" выиграл Лигу Чемпионов в одном из самых захватывающих финалов в истории турнира.\r\n\r\n        Руководство клуба, в лице американских владельцев Джоржа Жиллетта и Тома Хикса, давило на Бенитеса с требованием немедленного успеха в Премьер-лиге. Раскол произошел, когда тренеру было отказано в средствах на усиление состава.\r\n\r\n        Летом 2010 года Бенитеса сменил Рой Ходжсон, которому за то непродолжительное время, что он пробыл у руля клуба, так не удалось завоевать любовь болельщиков. Клуб, тем временем, пытался разорвать все связи с американскими хозяевами.\r\n\r\n        В конце концов, благодаря усилиям президента клуба, Мартина Бротона, появился новый покупатель, и сделка по продаже \"Ливерпуля\" состоялась, несмотря на все судебные иски, пытавшиеся помешать ее осуществлению. В октябре 2010 клуб попрощался с Хиксом и Жиллеттом и встретил нового владельца, Джона Генри, чья компания NEVS уже имела успешный опыт работы с бостонской бейсбольной командой \"Ред Сокс\".\r\n\r\n        Ходжсон не надолго задержался в клубе, после ужасного начала сезона 2010/11, в январе он согласился покинуть свой пост, и его место временно занял Кенни Далглтш, чье имя к тому времени все чаще стали вспоминать болельщики.\r\n\r\n        Далглиш быстро вселил уверенность в команду, избавился от ненужных игроков, включая и спорный переход Фернандо Торреса в \"Челси\", приобрел Луиса Суареса и Энди Кэрролла для построения новой линии атаки. Клуб словно заново родился и взлетел на крыльях. В конце сезона Далглиш подписал с \"Ливерпулем\" трехлетний контракт.\r\n\r\n        Основной целью клуба было возвращение в Лигу Чемпионов, за свой первый полный сезон в клубе Далгдишу достичь ее не удалось, из-за достаточно нестабильных выступлений команды в Премьер-лиге. В итоге клуб финишировал на восьмом месте в таблице, ниже своего основного конкурента, \"Эвертона\".\r\n\r\n        Тем не менее, \"Ливерпуль\" хорошо проявил себя в кубковых соревнованиях. В феврале 2012 года \"красные\" выиграли Кубок Лиги, обыграв \"Кардифф\" в серии пенальти, благодаря чему получил путевку в Лигу Европы. А в мае \"Ливерпуль\" и \"Челси\" встретились в финале Кубка Англии, однако удача оказалась на стороне лондонского клуба.\r\n\r\n        Несмотря на успехи в кубковых турнирах, в конце сезона Далглиш был уволен, а его место занял молодой североирландский тренер, Брендан Роджерс, покоривший к тому времени всех своей работой с достаточно скромным \"Суонси Сити\".\r\n\r\n        Роджерс пришел с решимостью установить в клубе новую философию, привить команде новый стиль игры, при этом не теряя, как он утверждал, связи с историей. С собой из \"Суонси\" он захватил своих ассистентов и полузащитника Джо Аллена. Однако, из-за проводившегося в то время чемпионата Европы, тренер впервые увидел всю свою команду в сборе только к началу сезона. В сезоне 2012/13 \"Ливерпуль\" выступал крайне нестабильно, показав худший за последние сто лет старт сезона. Крупные победы сменяли неожиданные безвольные поражения. Во время зимнего трансферного окна Роджерсу удалось усилить команду двумя приобретениями: английским нападающим Дэниелом Старриджем и блазильцем Филлиппе Коутиньо. В итоге команда завершила сезон на седьмом месте, вновь ниже \"Эвертона\".\r\n\r\n        Зимой 2013 ветеран клуба Джейми Каррагер объявил о завершении своей карьеры на \"Энфилде\". 19 мая он провел свой последний официальный матч в красной футболке в победном для \"Ливерпуля\" матче против \"Куинз Парк Рейнджерс\".\r\n    </div><hr /><i>\r\n        Источник: lfconline.com\r\n        Перевод: tas-n-r\r\n    </i>\r\n</div>\r\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-sm-3 container-fluid\" ui-view=\"rightContainer\">\r\n    <span class=\"col-sx-12\" *ngIf=\"roles.isAdminAssistant\"><a (click)=\"updateEplTable()\">Обновить таблицу</a></span>\r\n    <epl-table></epl-table>\r\n</div>";

/***/ },
/* 119 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <p><font color=\"red\"><b>Данные правила не подлежат обсуждению и обязательны для выполнения всеми без исключения пользователями портала рангом от простого пользователя до модератора (Администраторы - как лица, эти правила устанавливающие - поступают по своему усмотрению). Если вам не нравятся эти правила и вы хотите для себя другие правила - вы всегда можете создать свой собственный сайт и делать там все, что вам нравится.</b></font> </p>\r\n    <p>Правила вводятся для создания комфортной и конструктивной атмосферы общения. Если Вас не устраивает установленная форма общения, воздержитесь от участия в данной конференции.</p>\r\n    <p><b>I. Регистрация пользователей.</b></p>\r\n    <ol>\r\n        <li>Регистрируясь на форуме, пользователь соглашается выполнять данные Правила.</li>\r\n        <li>Для регистрации на форуме пользователь должен предоставить действующий адрес электронной почты. Мы гарантируем конфиденциальность указанной информации.</li>\r\n        <li>Выбор имени пользователя (nickname) является вашим исключительным правом. Администрация оставляет за собой право принять меры к прекращению использования nickname, если его использование нарушает общепринятые моральные и этические нормы или является оскорбительным для других пользователей форума. Запрещена регистрация nickname, схожих с уже существующими до степени, которые могут ввести в заблуждение других пользователей форума.</li>\r\n        <li>Запрещена неоднократная регистрация одним пользователем, вне зависимости от целей, с которыми такая регистрация проводится. Данное нарушение является крайне серьезным и ведет к блокированию всех учетных записей. Если вам не нравится ник, напишите в соответствующий раздел форума или администратору.</li>\r\n        <li>Если вы не проявляете активность на форуме в течение длительного времени, ваша учетная запись может быть удалена.</li>\r\n    </ol>\r\n    <p><b>II. На Форуме <font color=\"red\">запрещено</font>:</b></p>\r\n    <ol>\r\n        <li>Использовать ненормативную лексику в любых её проявлениях, в том числе сокращенную или замененную «звездочками» (или другими символами), на русском, английском языке, либо транслите. </li>\r\n        <li>Создавать темы, ранее обсуждавшиеся в Форуме. </li>\r\n        <li>Создавать сообщения, не имеющие отношения к обсуждаемой теме (оффтопик). </li>\r\n        <li>Создавать темы и сообщения, в которых более половины всей информации написано ЗАГЛАВНЫМИ БУКВАМИ. </li>\r\n        <li>Создавать темы, имеющие в названии украшения («===---Моя тема---===»), не отражающие суть вопроса («Посмотри сюда» или «fdgl;fjdgl;fdjglgfd»). </li>\r\n        <li>Создавать темы с обращением к конкретному участнику Форума. </li>\r\n        <li>Дублировать темы, то есть размещать одинаковые сообщения в разных разделах Форума. </li>\r\n        <li>Чрезмерное использование графических смайликов в сообщении (более трех подряд) или полностью состоящее только из смайлов. </li>\r\n        <li>Публикация постов, не несущих значительной смысловой нагрузки (флуд). Запрещается писать короткие бессмысленные посты типа \"ЖЖОШЬ\" или \"ПИШИ ЕЩО\", а также, состоящие из одних смайлов. </li>\r\n        <li>Использовать в сообщениях большое количество повторяющихся символов. </li>\r\n        <li>Использование в сообщениях красного цвета – это привилегия модераторов и администраторов. </li>\r\n        <li>Язык сайта-РУССКИЙ.Будьте добры,пишите на нем.Коверкание слов и преднамеренное извращение орфографии русского языка, а также использование латиницы (транслита). </li>\r\n        <li>Цитирование предыдущих сообщений, если в этом нет необходимости (флейм). </li>\r\n        <li>Использовать грубые, нецензурные выражения и оскорбления в любой форме. </li>\r\n        <li>Создавать темы и сообщения, содержащие рекламную, антирекламную или коммерческую информацию, а так же ссылки на сайты с целью повышения их посещаемости. </li>\r\n        <li>Продолжать обсуждать вопросы из тем, закрытых или удаленных администрацией. </li>\r\n        <li>Провоцировать конфликты с пользователями Форума. </li>\r\n        <li>Создавать темы и сообщения, противоречащие Конституции и законодательству РФ. </li>\r\n        <li>Использовать в качестве статуса или подписи нецензурные или ругательные слова, а так же заведомо недостоверную информацию. (Например, писать в статусе «Модератор», когда на самом деле Вы таковым не являетесь). </li>\r\n        <li>\r\n            Максимальный размер подписи должен быть не более 2-х строчек и не более 200 символов. Максимальный размер шрифта - \"2\". Подпись не должна содержать текста, выделенного красным цветом. Размер картинки в вашей подписи должен удовлетворять следующим требованиям:\r\n            - размер - не более 350х60 пикселей суммарно\r\n            - объем - не более 40 кб суммарно\r\n        </li>\r\n        <li>Использовать в качестве аватара, фотографии или в качестве вложение в сообщения картинки порнографического, экстремистского или оскорбительного характера. </li>\r\n        <li>Пропагандировать любые наркотические и психотропные вещества и образ жизни, связанный с употреблением данных веществ, а так же пропагандировать суицид, расовую и религиозную ненависть, фашизм и нацизм. </li>\r\n        <li>Использование заведомо похожих ников. </li>\r\n        <li>Выпрашивание прибавления репутации, а так же поднимать или снижать репутацию без причины. </li>\r\n        <li>Обсуждать действия администрации в разделах Форума. Если Вы недовольны действиями администрации, то высказывайте свои претензии в соответствии с п. 4.1-4.2 настоящих Правил. </li>\r\n        <li>Использовать ПС (Персональные Сообщения) для массовой рассылки информации любого рода (реклама, \"письма счастья\" и т.п.) </li>\r\n        <li>Нарушать авторские права (указывайте ссылки на АВТОРА (источник), откуда были взяты выложенные статьи) или хотя бы пишите, что авторство принадлежит не Вам. </li>\r\n        <li>Указание в имени пользователя, подписи, и других полях URL адресов коммерческих интернет-проектов, с целью рекламы и повышения индекса цитирования, за исключением особой договоренности с Администрацией портала. </li>\r\n        <li>Оскорбление игроков клуба,тренерского штаба,а также других клубов и их игроков.Выражение своей неприязни допустимо,но в рамках допустимого </li>\r\n\r\n        <li>Публично предъявлять претензии и обсуждать действия переводчиков и редакторов сайта. Пользователи ресурса, несогласные с публикациями переводов статей и материалов могут высказать своё несогласие в личном сообщении или в теме на форуме сайта - <b>Жалобы</b>. </li>\r\n    </ol>\r\n    <p><b>III. Общие рекомендации о советы. </b></p>\r\n    <ol>\r\n        <li>Не обращайте внимания на хулиганов. Не отвечайте им, даже если Вы считаете, что Вас оскорбили, не поддавайтесь на провокации. Достаточно сообщить администрации об оскорблении и виновные будут наказаны. </li>\r\n        <li>В том случае, если Вы считаете, что нарушены Правила Форума, постарайтесь сразу же сообщить об этом администрации Форума. </li>\r\n        <li>Старайтесь не использовать в сообщениях жаргон, т.к. некоторые пользователи могут не правильно его растолковать.</li>\r\n        <li>Постарайтесь не писать безосновательные утверждения, а так же сообщения типа «выкинь эту бяку, поставь хорошую вещь». Если это Ваше лично мнение, не забудьте сообщить об этом заранее – простого «ИМХО» (от англ. “imho”, что в переводе означает «по моему скромному мнению») будет достаточно. Помните, что после нескольких неаргументированных утверждений, пользователи просто перестанут Вам доверять. </li>\r\n        <li>Прежде чем создавать тему, убедитесь, что Вы создаете её в нужном Разделе Форума. Помните, что темы, не соответствующие тематике Раздела, будут либо удалены, либо перенесены в другой Раздел Форума. </li>\r\n        <li>Прочтите тему целиком! Посты в середине темы - \"А о чем это вы, а? \" или \"Так я не понял - откуда качать?\" запрещены. </li>\r\n        <li>Старайтесь не делать грамматических ошибок в сообщениях – это создаст негативное впечатление о вас.</li>\r\n    </ol>\r\n    <p><b>IV. Отношения между пользователями и администрацией.</b></p>\r\n    <ol>\r\n        <li>В своих действиях администрация форума руководствуется здравым смыслом и внутренними правилами управления форумом.</li>\r\n        <li>\r\n            Обсуждение действий администрации (администраторов и модераторов форума) категорически запрещается в любых форумах и темах, за исключением специализированного форума - <b>Жалобы</b>.<br>\r\n        </li>\r\n    </ol>\r\n    <p>Администрация оставляет за собой право изменять правила без уведомлением об этом пользователей форума. Все изменения и новации на форуме производятся с учетом мнений и интересов пользователей.</p>\r\n    <p align=\"right\"><b>С уважением, администрация сайта.</b></p>\r\n</div>";

/***/ },
/* 120 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-md-2\">Cоперник</label>\r\n            <div class=\"col-md-10\">\r\n                <!--<autocomplete ng-model=\"vm.item.clubName\" name=\"clubName\" attr-placeholder=\"Введите клуб...\" click-activation=\"true\" data=\"vm.clubs\"\r\n                                  on-type=\"vm.updateClubs\" validation=\"max_len:30|required\"></autocomplete>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" ng-model=\"vm.item.typeId\" ng-options=\"type.id as type.name for type in vm.types\" validation=\"required\"></select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" formControlName=\"isHome\" type=\"checkbox\" /> Дома <!--todo add switcher--> \r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата</label>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<input type=\"text\" class=\"form-control\" validation=\"required\" name=\"date\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" ng-model=\"vm.item.date\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\" ng-click=\"vm.open()\">-->\r\n                    <span class=\"input-group-btn va-top\">\r\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<div uib-timepicker ng-model=\"vm.item.time\" ng-change=\"vm.timeChanged()\"\r\n                         hour-step=\"1\" minute-step=\"1\" show-meridian=\"false\" show-spinners=\"false\" ng-disabled=\"!vm.item.date\"></div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n";

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!-todo magic number->\r\n            </div>-->\r\n            <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['/match', 0, 'edit' ]\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a ui-sref=\"clubEdit({id: item.id})\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a ng-click=\"vm.delete($index)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--<uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></uib-pagination>-->\r\n</div>";

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-offset-{{deep}} col-sm-offset-{{deep}} comment container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <a [routerLink]=\"['/user', item.authorId]\" [textContent]=\"item.authorUserName\"></a>\r\n            <span class=\"small\" [textContent]=\"item.additionTime | date:'medium'\"></span>\r\n        </div>\r\n        <div class=\"col-xs-3 col-sm-3\">\r\n            <span class=\"pull-right\">\r\n                    <a *ngIf=\"roles.isModerator || roles.isSelf(item.authorId)\" (click)=\"showEditModal()\"><span class=\"glyphicon glyphicon-pencil\"> </span></a>\r\n                    <a *ngIf=\"roles.isModerator\" (click)=\"delete()\"><span class=\"glyphicon glyphicon-trash\"> </span></a>\r\n                </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar-medium\" src=\"{{item.photo}}\" alt=\"{{item.authorUserName}}\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <p [textContent]=\"item.message\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"item.answer\">\r\n        <div class=\"col-xs-3 col-sm-3\">Ответ:</div>\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <i [textContent]=\"item.answer\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12\" *ngIf=\"!roles.isSelf(item.authorId) && canCommentary\">\r\n        <a (click)=\"showAddCommentModal()\">Ответить</a>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let child of item.children\">\r\n    <materialComment-detail [item]=\"child\" [deep]=\"deep > 6 ? 7 : deep+1\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\" [parent]=\"item\"></materialComment-detail>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #addCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Добавить комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"addComment()\">Добавить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #editCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Редактировать комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n                </div>\r\n                <div *ngIf=\"roles.isEditor\">\r\n                    <textarea [formControl]=\"commentForm.controls['answer']\"></textarea>\r\n                </div>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"edit()\">Обновить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <!--div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!--todo magic number->\r\n            </div>\r\n            <button class=\"btn btn-success\" ui-sref=\"wishEdit()\">Добавить</button>\r\n        </form>\r\n    </div-->\r\n    <div class=\"top20\" *ngFor=\"let comment of items; let i = index;\">\r\n        <div class=\"panel\" ng-class=\"\">\r\n            <div class=\"panel-heading panel-default\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/user', comment.authorId]\"><span [textContent]=\"comment.authorUserName\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" *ngIf=\"roles.isModerator\">\r\n                        <a [hidden]=\"comment.isVerified\" (click)=\"verify(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"comment.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"comment.additionTime | date:'medium'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports = "<div>Комментарии: <span [textContent]=\"items.length\"></span></div>\r\n\r\n<div class=\"\" *ngFor=\"let comment of items\">\r\n    <materialComment-detail [item]=\"comment\" [deep]=\"0\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\"></materialComment-detail>\r\n</div>\r\n\r\n<form class=\"form-horizontal\" role=\"form\" [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n    <div class=\"col-md-12\" *ngIf=\"canCommentary && roles.isLogined\">\r\n        <div class=\"col-md-12\">\r\n            <textarea mark-it-up class=\"col-md-offset-2 col-md-8\" rows=\"6\" name=\"message\" [formControl]=\"commentForm.controls['message']\"></textarea>\r\n        </div>\r\n        <div class=\"\">\r\n            <button class=\"btn btn-primary center-block\" [disabled]=\"!commentForm.valid\" type=\"submit\">Добавить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items && totalItems > itemsPerPage\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>";

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Название</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['name']\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Описание</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"brief\" rows=\"4\" [formControl]=\"editForm.controls['description']\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <input type=\"submit\" [disabled]=\"!editForm.valid\" value=\"Отправить\" class=\"btn btn-default\" />\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <a secured=\"newsFull\" [routerLink]=\"['/newsCategory', 0, 'edit']\">Создать категорию</a>\r\n    <ul>\r\n        <li *ngFor=\"let category of items; let i = index;\">\r\n            <a [routerLink]=\"['/news/list', 1, category.id ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </a>\r\n            <!--->a secured=\"newsStart\" [routerLink]=\"['/news/list', page, item.categoryId ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </!--a-->\r\n            <a class=\"\" secured=\"newsStart\" [routerLink]=\"['/newsCategory', category.id, 'edit']\"> <span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n            <a class=\"\" secured=\"newsFull\" *ngIf=\"category.itemsCount == 0\" (click)=\"delete(i)\"> <span class=\"glyphicon glyphicon-trash\"></span></a>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports = "<div class=\"\" *ngIf=\"item\">\r\n    <div class=\"alert-danger flex-vertical-center\">\r\n        <h3 class=\"col-xs-12 col-sm-12\">\r\n            <span class=\"col-xs-9 col-sm-9\" [textContent]=\"item.title\"></span>\r\n            <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n            </span>\r\n        </h3>\r\n    </div>\r\n    <div class=\"\">\r\n        <article [innerHTML]=\"item.message\"></article>\r\n        <div class=\"alert-warning\">\r\n            <ul class=\"list-inline\">\r\n                <li><label>Просмотры:</label> <span [textContent]=\"item.reads\"></span></li>\r\n                <li><label>Источник:</label> <span [textContent]=\"item.source\"></span></li>\r\n                <li><label>Дата добавления:</label> <span [textContent]=\"item.additionTime | date:'medium'\"></span></li>\r\n                <li><label>Категория:</label> <a [routerLink]=\"['/news/list', 1, item.categoryId ]\"> <span [textContent]=\"item.categoryName\"></span> </a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <comments [materialId]=\"item.id\" [canCommentary]=\"item.canCommentary\"></comments>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" [formControl]=\"editForm.controls['categoryId']\">\r\n                    <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Название:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Краткое описание:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"brief\" rows=\"4\" [formControl]=\"editForm.controls['brief']\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Текст новости:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"message\" rows=\"6\" [formControl]=\"editForm.controls['message']\"> </textarea>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Источник:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"source\" [formControl]=\"editForm.controls['source']\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Главное фото:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"photoPath\" [formControl]=\"editForm.controls['photo']\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"\" ui-view=\"files\" autoscroll=\"false\"></div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"canCommentary\" [formControl]=\"editForm.controls['canCommentary']\" type=\"checkbox\" checked /> Разрешить комментарии\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" [formControl]=\"editForm.controls['onTop']\" type=\"checkbox\" /> Наверху\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"pending\" [formControl]=\"editForm.controls['pending']\" type=\"checkbox\" /> Отложена\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div>\r\n        <!--ng-if=\"vm.page > 0\">-->\r\n        <!--form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\"\r\n                    ng-model=\"vm.categoryId\"\r\n                    ng-options=\"category.id as category.name for category in vm.categories\" ng-change=\"vm.changeCategoryId()\"></select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <input class=\"form-control\" ng-model=\"vm.userName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\"/> <!--todo magic number--\r\n        </div>\r\n        </form-->\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"\" *ngIf=\"!item.pending || roles.isEditor\">\r\n            <div class=\"flex-vertical-center\">\r\n                <a [routerLink]=\"['/news', item.id]\" class=\"col-xs-9 col-sm-9\"><h4 [textContent]=\"item.title\"></h4></a>\r\n                <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                    <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                    <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                </span>\r\n            </div>\r\n            <div class=\"\">\r\n                <img class=\"img-thumbnail news-mini center-block\" alt=\"\" [src]=\"item.photoPath\" />\r\n            </div>\r\n            <div class=\"\">\r\n                <i> <span [innerHTML]=\"item.brief\"></span></i>\r\n            </div>\r\n            <div class=\"col-sx-12 col-sm-12\">\r\n                <ul class=\"list-inline small small-offset\">\r\n                    <li class=\"\">Категория:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/news/list', page, item.categoryId ]\" [textContent]=\"item.categoryName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Время добавления:</li>\r\n                    <li class=\"\" [textContent]=\"item.additionTime\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Просмотры</li>\r\n                    <li class=\"\" [textContent]=\"item.reads\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Автор:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/user', item.userId ]\" [textContent]=\"item.userName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Комментарии:</li>\r\n                    <li class=\"\" [textContent]=\"item.commentsCount\"></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination\">\r\n        <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 form-horizontal margin-top-middle\" *ngIf=\"item\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled value=\"{{item.receiver}}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled value=\"{{item.title}}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" disabled rows=\"4\" [textContent]=\"item.message\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <!--a [routerLink]=\"['/pm', 0, 'edit', {username: item.receiver, userId: item.id}]\" >Ответить</!a-->\r\n            <a [routerLink]=\"['/pm', 0, 'edit']\" >Ответить</a>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"writePm\"  [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h2>Написать сообщение</h2>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <!--p class=\"text-danger col-md-offset-2\" ng-if=\"vm.errorMessage\">\r\n            <i ng-bind=\"vm.errorMessage\"></i>\r\n            </!p-->\r\n            <input type=\"text\" \r\n                   class=\"form-control\"\r\n                   (valueChanged)=\"updateUsername($event)\"\r\n                   auto-complete name=\"receiver\" \r\n                   [formControl]=\"editForm.controls['receiver']\" \r\n                   [source]=\"users\" \r\n                   min-chars=\"2\" \r\n                   attr-placeholder=\"Введите логин...\"\r\n                   display-property-name=\"username\"\r\n                   />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"message\" rows=\"4\" [formControl]=\"editForm.controls['message']\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Отправить</button>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <md-tab-group [selectedIndex]=\"0\">\r\n        <md-tab>\r\n            <template md-tab-label>\r\n                Полученные\r\n            </template>\r\n            <template md-tab-content>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>#</td>\r\n                        <td>Заголовок</td>\r\n                        <td>Отправитель</td>\r\n                        <td>Дата получения</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let message of received; let i = index\">\r\n                    <tr>\r\n                        <td [textContent]=\"i + 1\"></td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/pm', message.id]\">\r\n                                <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                                <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                            </a>\r\n                        </td>\r\n                        <td><a [routerLink]=\"['/user', message.senderId]\" [textContent]=\"message.senderUserName\"></a></td>\r\n                        <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </template>\r\n        </md-tab>\r\n        <md-tab>\r\n            <template md-tab-label>\r\n                Отправленные\r\n            </template>\r\n            <template md-tab-content>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>#</td>\r\n                        <td>Заголовок</td>\r\n                        <td>Получатель</td>\r\n                        <td>Дата отправки</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let message of sent; let i = index\">\r\n                    <tr>\r\n                        <td [textContent]=\"i + 1\"></td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/pm', message.id]\">\r\n                                <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                                <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                            </a>\r\n                        </td>\r\n                        <td><a [routerLink]=\"['/user', message.receiverId]\" [textContent]=\"message.receiverUserName\"></a></td>\r\n                        <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </template>\r\n        </md-tab>\r\n        <<md-tab>\r\n            <template md-tab-label>\r\n                <a [routerLink]=\"['/pm', 0, 'edit']\">\r\n                    Написать сообщеньку\r\n                </a>\r\n            </template>\r\n        </md-tab>\r\n    </md-tab-group>\r\n</div>";

/***/ },
/* 133 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"item\">\r\n    <h2>\r\n        <span [textContent]=\"item.userName\"></span>\r\n        <span [hidden]=\"!roles.isLogined || roles.isSelf(item.id)\">\r\n            <a ui-sref=\"wpm({ userName: item.userName })\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n        </span>\r\n    </h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" src=\"{{item.photo}}\" alt=\"{{item.userName}}\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <div *ngIf=\"roles.isSelf(item.id) || roles.isModerator\">\r\n                <button class=\"btn btn-info\" ngf-select=\"vm.uploadFiles($file, $invalidFiles)\"\r\n                        accept=\"image/*\" ngf-max-height=\"1000\" ngf-max-size=\"1MB\">\r\n                    Обновить аватар\r\n                </button>\r\n                <button *ngIf=\"roles.isSelf(item.id)\" class=\"btn btn-danger\" [routerLink]=\"['/changePassword']\">Изменить пароль</button>\r\n                <br><br>\r\n                <!--div>\r\n                    <span ng-show=\"vm.errFile.$error\" ng-bind=\"vm.errFile.$error\"></span>\r\n                    <span ng-show=\"vm.errFile.$errorParam\" ng-bind=\"vm.errFile.$errorParam\"></span>\r\n                    <span class=\"progress\" ng-show=\"f.progress >= 0\">\r\n                        <span style=\"width:{{f.progress}}%\" ng-bind=\"f.progress + '%'\"></!--span>\r\n                    </span>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <form class=\"form-horizontal\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Логин</label>\r\n            <div class=\"col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.userName\"></span>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"roles.isModerator || roles.isSelf(item.id)\" class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Забанить</label>\r\n            <div class=\"\" ng-show=\"!item.lockoutEndDateUtc\">\r\n                <div class=\"col-xs-2 col-sm-2\">\r\n                    <input min=\"0\" type=\"number\" placeholder=\"Количество дней\" class=\"form-control\" ng-model=\"item.banDaysCount\" />\r\n                </div>\r\n                <div class=\"col-xs-8 col-sm-8\">\r\n                    <button class=\"btn btn-danger\" ng-click=\"vm.ban()\" ngDisabled=\"item.banDaysCount <= 0\">Забанить</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-10 col-sm-10\" [hidden]=\"item.lockoutEndDateUtc\">\r\n                <span class=\"col-xs-8 col-sm-8 flex-vertical-center\" *ngIf=\"item.lockoutEndDateUtc\">Активность заблокирована до <span [textContent]=\"item.lockoutEndDateUtc | date:'medium'\"></span></span>\r\n                <button class=\"btn btn-success\" secured=\"'UsersFull'\" ng-click=\"vm.unban()\">Снять бан</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Группа:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <div>\r\n                    <span class=\"form-control\" [textContent]=\"item.roleGroupName\"></span>\r\n                    <select secured=\"'AdminStart'\" class=\"form-control\" name=\"newsCategoryId\"\r\n                            ng-model=\"item.roleGroupId\"\r\n                            ng-options=\"roleGroup.id as roleGroup.name for roleGroup in vm.roleGroups\" validation=\"required\" ng-change=\"vm.editRole()\"></select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" [hidden]=\"!roles.isSelf || !roles.isAdminAssistant\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\" [hidden]=\"!item.emailConfirmed\">Почта</label>\r\n            <label class=\"col-xs-2 col-sm-2 control-label text-danger\" uib-tooltip=\"Почта не подтверждена\" [hidden]=\"item.emailConfirmed\">Почта</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.email\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Последний вход </label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.lastModifiedOn | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Дата регистрации</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.registrationDate | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.fullName\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Полное имя</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.fullName\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.birthday\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">День рождения</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.birthday | date:'longDate'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.gender\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Пол</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" *ngIf=\"item.gender\">Девушка</span>\r\n                <span class=\"form-control\" *ngIf=\"!item.gender\">Парень</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <ul class=\"list-inline\">\r\n                <li *ngIf=\"item.newsCount > 0\"><a ui-sref=\"news({ page: 1, userName: item.userName})\">Новости(<span [textContent]=\"item.newsCount\"></span>)</a></li>\r\n                <li>|</li>\r\n                <li *ngIf=\"item.blogsCount > 0\"><a ui-sref=\"blog({page: 1, userName: item.userName})\">Блоги(<span [textContent]=\"item.blogsCount\"></span>)</a></li>\r\n            </ul>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!--script type=\"text/ng-template\" id=\"changeRoleConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Редактирование роли</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Изменить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Изменить</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</!--script>\r\n\r\n<script type=\"text/ng-template\" id=\"banConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\"></h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Забанить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.ok()\">Забанить</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</script>-->";

/***/ },
/* 134 */
/***/ function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-condensed\">\r\n        <thead>\r\n            <tr>\r\n                <th>Последний вход</th>\r\n                <th>Логин</th>\r\n                <th>Дата регистрации</th>\r\n                <th>Группа</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let user of items\">\r\n            <tr>\r\n                <td class=\"\" [textContent]=\"user.lastModified | date:'medium'\"></td>\r\n                <td class=\"\">\r\n                    <a [routerLink]=\"['/user', user.id ]\">\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"mini-avatar\" src=\"{{user.photo}}\" alt=\"{{user.userName}}\"/>\r\n                        </div>\r\n                        <span [textContent]=\"user.userName\"></span>\r\n                    </a>\r\n                    <span class=\"text-danger\" uib-tooltip=\"Почта не подтверждена\" [hidden]=\"user.emailConfirmed\"> *</span>\r\n                    <a ng-show=\"loggedIn() && vm.isNotSelf(user.id, userId())\" ui-sref=\"wpm({ userName: user.userName })\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n                </td>\r\n                <td class=\"\" [textContent]=\"user.registrationDate | date:'medium'\"></td>\r\n                <td class=\"\" [textContent]=\"user.roleGroupName\"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div>\r\n        <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.chosenRoleGroupId\"\r\n                        ng-options=\"roleGroup.id as roleGroup.name for roleGroup in vm.roleGroups\" ng-change=\"vm.changeRoleId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterUserName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\" /> <!--todo magic number-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!-->uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.pageNo\" ng-change=\"vm.goToPage()\"></!--uib-pagination--->\r\n</div>";

/***/ },
/* 135 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"editWish\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['message']\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2 col-sm-2\">Тип:</label>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <!--<select class=\"form-control\" name=\"newsCategoryId\" [formControl]=\"editForm.controls['type']\"></select>-->\r\n            <select [formControl]=\"editForm.controls['type']\">\r\n                <option [value]=\"type.id\" *ngFor=\"let type of types\" [textContent]=\"type.name\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Создать</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 136 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <!--<input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" />--> <!--todo magic number-->\r\n            </div>\r\n            <button class=\"btn btn-success\" [routerLink]=\"['/wish', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let wish of items; let i = index;\">\r\n        <div class=\"panel\" [ngClass]=\"getTypeClass(wish.type)\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/wish', wish.id, 'edit']\">\r\n                        <span [textContent]=\"wish.title\"></span>\r\n                    </a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" secured=\"AdminFull\">\r\n                        <a ng-click=\"vm.delete(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"wish.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"wish.typeName\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></!--uib-pagination-->\r\n</div>";

/***/ },
/* 137 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 138 */
/***/ function(module, exports) {

module.exports = require("@angular/material");

/***/ },
/* 139 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 140 */
/***/ function(module, exports) {

module.exports = require("ng2-auto-complete");

/***/ },
/* 141 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/of");

/***/ },
/* 142 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/delay");

/***/ },
/* 143 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__(46);
__webpack_require__(48);
__webpack_require__(49);
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(47);
var app_module_1 = __webpack_require__(45);
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
function default_1(params) {
    var doc = "\n        <!DOCTYPE html>\n\n        <html>\n            <head></head>\n            <body>\n                <my-app></my-app>\n            </body>\n        </html>\n    ";
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: "angular-universal request",
            properties: {
                baseUrl: "/",
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: doc
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhiYTA2ODYxN2FjZTE3ZmU4OTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2h0dHBXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vYWRtaW4uc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3JvbGVzLWNoZWNrZWQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLm1vZGVsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiem9uZS5qc1wiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3NpZ251cC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLnJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3NGaWx0ZXJzLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1kZXRhaWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnJvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9nbG9iYWxWYWxpZGF0b3JzLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcGFnZWFibGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9zZWN1cmVkLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnJvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlckZpbHRlcnMubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoVHlwZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9yaWdodFNpZGViYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItYXV0by1jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUNWQSw0Qzs7Ozs7O0FDQUEsMkM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFD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Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0IsMkJBQTJCLEVBQUUsZUFBZSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0Q7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEM7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUM7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDZCQUE2QixFQUFFLG9CQUFvQiwyQkFBMkIsRUFBRSxlQUFlLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDZCQUE2QixFQUFFLG9CQUFvQiwyQkFBMkIsRUFBRSxlQUFlLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0M7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQixFQUFFLGdCQUFnQix1QkFBdUIsRUFBRTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQixFQUFFLGdCQUFnQix1QkFBdUIsRUFBRTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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UUFBUSxHQUFHO0FBQy9JO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNEM7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkM7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1FQUFtRTtBQUN4RSxLQUFLLHdFQUF3RTtBQUM3RSxLQUFLLDhFQUE4RTtBQUNuRixLQUFLLHdGQUF3RjtBQUM3RixLQUFLO0FBQ0w7QUFDQSx3Qzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFJLEVBQUUsMkJBQTJCO1lBQ2pDLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLEdBQUc7YUFDaEI7WUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2dCQUV0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGNBQU0sZUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBSTtZQUN4RixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7O0FBL0JELDRCQStCQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanNcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4YmEwNjg2MTdhY2UxN2ZlODkzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhZ2VhYmxlLm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaHR0cFdyYXBwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sb2NhbFN0b3JhZ2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zZWN1cmVkLmRpcmVjdGl2ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JvbGVzLWNoZWNrZWQuc2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dsb2JhbFZhbGlkYXRvcnNcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQ29uZmlndXJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25maWd1cmF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuU2VydmVyID0gXCJodHRwOi8vbG9jYWxob3N0OjE2NjkvXCI7XHJcbiAgICAgICAgdGhpcy5BcGlVcmwgPSBcImFwaS92MS9cIjtcclxuICAgICAgICB0aGlzLlNlcnZlcldpdGhBcGlVcmwgPSB0aGlzLlNlcnZlciArIHRoaXMuQXBpVXJsO1xyXG4gICAgfVxyXG4gICAgQ29uZmlndXJhdGlvbiA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBDb25maWd1cmF0aW9uKTtcclxuICAgIHJldHVybiBDb25maWd1cmF0aW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbmZpZ3VyYXRpb24gPSBDb25maWd1cmF0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29uc3RhbnRzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBodHRwXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcclxudmFyIGxvY2FsU3RvcmFnZV8xID0gcmVxdWlyZShcIi4vbG9jYWxTdG9yYWdlXCIpO1xyXG52YXIgSHR0cFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cFdyYXBwZXIoaHR0cCwgbG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgIH1cclxuICAgIEh0dHBXcmFwcGVyLnByb3RvdHlwZS51cGRhdGVIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZS5nZXQoXCJ0b2tlbl90eXBlXCIpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCB0aGlzLmxvY2FsU3RvcmFnZS5nZXRPYmplY3QoXCJ0b2tlbl90eXBlXCIpICsgXCIgXCIgKyB0aGlzLmxvY2FsU3RvcmFnZS5nZXRPYmplY3QoXCJhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmh0dHAuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgSHR0cFdyYXBwZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnVwZGF0ZUhlYWRlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy51cGRhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBXcmFwcGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF8xLkh0dHAsIGxvY2FsU3RvcmFnZV8xLkxvY2FsU3RvcmFnZU1pbmVdKVxyXG4gICAgXSwgSHR0cFdyYXBwZXIpO1xyXG4gICAgcmV0dXJuIEh0dHBXcmFwcGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkh0dHBXcmFwcGVyID0gSHR0cFdyYXBwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHBXcmFwcGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9odHRwV3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBBY2NvdW50U2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50U2VydmljZShodHRwLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCArIFwicmVnaXN0ZXIvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1FbWFpbCA9IGZ1bmN0aW9uICh1c2VySWQsIGNvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIChcImNvbmZpcm1FbWFpbD91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZjb2RlPVwiICsgY29kZSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIChcImZvcmdvdFBhc3N3b3JkP2VtYWlsPVwiICsgZW1haWwpKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlc2VuZENvbmZpcm1FbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgKFwicmVzZW5kQ29uZmlybUVtYWlsP2VtYWlsPVwiICsgZW1haWwpKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucHV0KF90aGlzLmFjdGlvblVybCArIFwicmVzZXRQYXNzd29yZFwiLCBtb2RlbCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgXCJjaGFuZ2VQYXNzd29yZFwiLCBtb2RlbCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImFjY291bnQvXCI7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50U2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2luZGV4XzEuSHR0cFdyYXBwZXIsIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uXSlcclxuICAgIF0sIEFjY291bnRTZXJ2aWNlKTtcclxuICAgIHJldHVybiBBY2NvdW50U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BY2NvdW50U2VydmljZSA9IEFjY291bnRTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY2NvdW50LnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBodHRwXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIEF1dGhTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGh0dHAsIGh0dHAxLCBsb2NhbFN0b3JhZ2UsIHJvbGVzQ2hlY2tlZFNlcnZpY2UsIHJvdXRlciwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5odHRwMSA9IGh0dHAxO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkU2VydmljZSA9IHJvbGVzQ2hlY2tlZFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvbGVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlLmdldChcImFjY2Vzc190b2tlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0T2JqZWN0KFwicm9sZXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSArdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0KFwidXNlcklkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlKFwicm9sZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtODtcIik7XHJcbiAgICAgICAgdmFyIHBlcmFtcyA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT1cIiArIHVzZXJuYW1lICsgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZCArIFwiJmNsaWVudF9pZD1jbGllbnRfaWQzXCI7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuaHR0cDEucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyICsgXCJjb25uZWN0L3Rva2VuXCIsIHBlcmFtcywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0LnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VMb2dpbkFuc3dlcihkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5fYm9keSA9PT0gXCJ1bmNvbmZpcm1lZF9lbWFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3VuY29uZmlybWVkRW1haWxcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRVc2VySWQoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmUoXCJ0b2tlbl90eXBlXCIpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmUoXCJleHBpcmVzX2luXCIpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZShcInJlZnJlc2hfdG9rZW5cIik7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlKFwicm9sZXNcIik7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlKFwidXNlcklkXCIpO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkU2VydmljZS5jaGVja1JvbGVzKCk7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmlzVXNlckluUm9sZSA9IGZ1bmN0aW9uIChyb2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9sZXMuZmluZChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50b0xvd2VyQ2FzZSgpID09PSByb2xlLnRvTG93ZXJDYXNlKCk7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLnBhcnNlTG9naW5BbnN3ZXIgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UoaXRlbS5fYm9keSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0T2JqZWN0KFwidG9rZW5fdHlwZVwiLCByZXNwb25zZS50b2tlbl90eXBlKTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRPYmplY3QoXCJhY2Nlc3NfdG9rZW5cIiwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRPYmplY3QoXCJleHBpcmVzX2luXCIsIHJlc3BvbnNlLmV4cGlyZXNfaW4pO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldE9iamVjdChcInJlZnJlc2hfdG9rZW5cIiwgcmVzcG9uc2UucmVmcmVzaF90b2tlbik7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUucGFyc2VSb2xlcyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IGl0ZW0uX2JvZHkuc3BsaXQoXCIsIFwiKTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRPYmplY3QoXCJyb2xlc1wiLCB0aGlzLnJvbGVzKTtcclxuICAgIH07XHJcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJyb2xlXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlUm9sZXMoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb2xlc0NoZWNrZWRTZXJ2aWNlLmNoZWNrUm9sZXMoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmdldFVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcInVzZXIvZ2V0SWRcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMuaWQgPSArSlNPTi5wYXJzZShkYXRhLnRleHQoKSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmxvY2FsU3RvcmFnZS5zZXQoXCJ1c2VySWRcIiwgX3RoaXMuaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIF90aGlzLmdldFJvbGVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtpbmRleF8xLkh0dHBXcmFwcGVyLCBodHRwXzEuSHR0cCwgaW5kZXhfMS5Mb2NhbFN0b3JhZ2VNaW5lLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgQXV0aFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEF1dGhTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGguc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGguc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGh0dHBXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCIpO1xyXG52YXIgTWF0ZXJpYWxDb21tZW50U2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFsbCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBwYWdlKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEFsbEJ5TWF0ZXJpYWwgPSBmdW5jdGlvbiAocGFnZSwgaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwibWF0ZXJpYWwvXCIgKyBpZCArIFwiL2xpc3QvXCIgKyBwYWdlKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFNpbmdsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucG9zdChfdGhpcy5hY3Rpb25VcmwgKyBcIk5ld3MvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgaXRlbVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudmVyaWZ5ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcInZlcmlmeS9cIiArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGVyaWFsQ29tbWVudC9cIjtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwV3JhcHBlcl8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlKTtcclxuICAgIHJldHVybiBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIE5ld3NTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ld3NTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFsbCA9IGZ1bmN0aW9uIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZmlsdGVycykpKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFNpbmdsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucG9zdChfdGhpcy5hY3Rpb25VcmwgKyBcIk5ld3MvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgaXRlbVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkVmlldyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJhZGRWaWV3L1wiICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwiYWN0aXZhdGUvXCIgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGVyaWFsL1wiO1xyXG4gICAgfVxyXG4gICAgTmV3c1NlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwV3JhcHBlcl8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBOZXdzU2VydmljZSk7XHJcbiAgICByZXR1cm4gTmV3c1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c1NlcnZpY2UgPSBOZXdzU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3cy5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaHR0cFdyYXBwZXJfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIik7XHJcbnZhciBQbVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUG1TZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLkdldEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5HZXRTaW5nbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5VcGRhdGUgPSBmdW5jdGlvbiAoaWQsIGl0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLnB1dChfdGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5kZWxldGUoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwicG0vXCI7XHJcbiAgICB9XHJcbiAgICBQbVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwV3JhcHBlcl8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBQbVNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFBtU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5QbVNlcnZpY2UgPSBQbVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0uc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgQ2x1YlNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2x1YlNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIChcImxpc3QvXCIgKyBwYWdlKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTaW5nbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGl0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLnB1dChfdGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5kZWxldGUoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEJ5TmFtZSA9IGZ1bmN0aW9uICh0eXBlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgKFwiL2dldENsdWJzQnlOYW1lL1wiICsgdHlwZWQpKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImNsdWIvXCI7XHJcbiAgICB9XHJcbiAgICBDbHViU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2luZGV4XzEuSHR0cFdyYXBwZXIsIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uXSlcclxuICAgIF0sIENsdWJTZXJ2aWNlKTtcclxuICAgIHJldHVybiBDbHViU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5DbHViU2VydmljZSA9IENsdWJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbHViLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vY2x1Yi5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY2x1Yi1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NsdWItZWRpdC5jb21wb25lbnRcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdGNoLnNlcnZpY2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRjaC1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdGNoLWVkaXQuY29tcG9uZW50XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWF0ZXJpYWxDb21tZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsQ29tbWVudCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRlcmlhbENvbW1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0ZXJpYWxDb21tZW50ID0gTWF0ZXJpYWxDb21tZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGh0dHBXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCIpO1xyXG52YXIgTmV3c0NhdGVnb3J5U2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzQ2F0ZWdvcnlTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTaW5nbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGl0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm5ld3NDYXRlZ29yeS9cIjtcclxuICAgIH1cclxuICAgIE5ld3NDYXRlZ29yeVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwV3JhcHBlcl8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBOZXdzQ2F0ZWdvcnlTZXJ2aWNlKTtcclxuICAgIHJldHVybiBOZXdzQ2F0ZWdvcnlTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NDYXRlZ29yeVNlcnZpY2UgPSBOZXdzQ2F0ZWdvcnlTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzQ2F0ZWdvcnkuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vbmV3cy1kZXRhaWwuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbmV3cy1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3MtZWRpdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXdzLm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbmV3cy5zZXJ2aWNlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBMb2NhbFN0b3JhZ2VNaW5lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvY2FsU3RvcmFnZU1pbmUoKSB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgTG9jYWwgU3RvcmFnZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICB9XHJcbiAgICBMb2NhbFN0b3JhZ2VNaW5lLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBMb2NhbFN0b3JhZ2VNaW5lLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlW2tleV0gfHwgZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlTWluZS5wcm90b3R5cGUuc2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZU1pbmUucHJvdG90eXBlLmdldE9iamVjdCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmxvY2FsU3RvcmFnZVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlTWluZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9jYWxTdG9yYWdlTWluZTtcclxufSgpKTtcclxuZXhwb3J0cy5Mb2NhbFN0b3JhZ2VNaW5lID0gTG9jYWxTdG9yYWdlTWluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWxTdG9yYWdlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbFN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvbWFwJyk7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgVXNlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlclNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuR2V0QWxsID0gZnVuY3Rpb24gKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJzKSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5DcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuVXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5EZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyAndXNlci8nO1xyXG4gICAgfVxyXG4gICAgVXNlclNlcnZpY2UucHJvdG90eXBlLmV4dHJhY3REYXRhID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHZhciBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgfTtcclxuICAgIFVzZXJTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgVXNlclNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFVzZXJTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJTZXJ2aWNlID0gVXNlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXIuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGh0dHBXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCIpO1xyXG52YXIgV2lzaFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lzaFNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuR2V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkdldFNpbmdsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucG9zdChfdGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLlVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgaXRlbVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuRGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR2V0VHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcInR5cGVzL1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwid2lzaC9cIjtcclxuICAgIH1cclxuICAgIFdpc2hTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgV2lzaFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFdpc2hTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLldpc2hTZXJ2aWNlID0gV2lzaFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpc2guc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2guc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hY2NvdW50LXNpZ25pbi5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hY2NvdW50LXNpZ251cC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb25maXJtRW1haWwuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9yZ290UGFzc3dvcmQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVzZXRQYXNzd29yZC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2FjY291bnQuc2VydmljZVwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIEFkbWluU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBZG1pblNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXBsVGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcInVwZGF0ZVRhYmxlL1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiYWRtaW4vXCI7XHJcbiAgICB9XHJcbiAgICBBZG1pblNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtpbmRleF8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBBZG1pblNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEFkbWluU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BZG1pblNlcnZpY2UgPSBBZG1pblNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWluLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vYWRtaW4uc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdXRoLnNlcnZpY2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBGb3J1bVNlY3Rpb25TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZvcnVtU2VjdGlvblNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiZm9ydW1TZWN0aW9uL1wiO1xyXG4gICAgfVxyXG4gICAgRm9ydW1TZWN0aW9uU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2luZGV4XzEuSHR0cFdyYXBwZXIsIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uXSlcclxuICAgIF0sIEZvcnVtU2VjdGlvblNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEZvcnVtU2VjdGlvblNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRm9ydW1TZWN0aW9uU2VydmljZSA9IEZvcnVtU2VjdGlvblNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcnVtU2VjdGlvbi5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24uc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24ubW9kZWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24uc2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jbHViLWhpc3RvcnkuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcnVsZXMuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmlnaHRTaWRlYmFyLmNvbXBvbmVudFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIE1hdGNoU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRjaFNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRUeXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwiL2dldFR5cGVzXCIpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGNoL1wiO1xyXG4gICAgfVxyXG4gICAgTWF0Y2hTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgTWF0Y2hTZXJ2aWNlKTtcclxuICAgIHJldHVybiBNYXRjaFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0Y2hTZXJ2aWNlID0gTWF0Y2hTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRjaC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnkuc2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmV3c0NhdGVnb3J5X21vZGVsXzEgPSByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnkubW9kZWxcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIik7XHJcbnZhciBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgfVxyXG4gICAgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICduYW1lJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0U2luZ2xlKF90aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgbmV3c0NhdGVnb3J5X21vZGVsXzEuTmV3c0NhdGVnb3J5KCk7XHJcbiAgICAgICAgbW9kZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIG1vZGVsLm5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5kZXNjcmlwdGlvbiA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJkZXNjcmlwdGlvblwiXS52YWx1ZTtcclxuICAgICAgICB2YXIgcmVzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmlkLCBtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXMgPSBkYXRhOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnNlcnZpY2UuY3JlYXRlKG1vZGVsKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHJlcyA9IGRhdGE7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwibmV3c0NhdGVnb3J5LWVkaXRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3NDYXRlZ29yeV9zZXJ2aWNlXzEuTmV3c0NhdGVnb3J5U2VydmljZSwgZm9ybXNfMS5Gb3JtQnVpbGRlciwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5OZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50ID0gTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIik7XHJcbnZhciBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQobmV3c0NhdGVnb3J5U2VydmljZSwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlID0gbmV3c0NhdGVnb3J5U2VydmljZTtcclxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIH1cclxuICAgIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCLQmtCw0YLQtdCz0L7RgNC40LhcIik7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZVBhZ2VhYmxlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG1vZGVsO1xyXG4gICAgfTtcclxuICAgIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1tpbmRleF0uaWQpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfTtcclxuICAgIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwibmV3c0NhdGVnb3J5LWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3NDYXRlZ29yeV9zZXJ2aWNlXzEuTmV3c0NhdGVnb3J5U2VydmljZSwgcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlXSlcclxuICAgIF0sIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCA9IE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE5ld3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV3cygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBOZXdzO1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3MgPSBOZXdzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wbS5tb2RlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BtLWxpc3QuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG0tZGV0YWlsLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BtLWVkaXQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG0uc2VydmljZVwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFBtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBtKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBtO1xyXG59KCkpO1xyXG5leHBvcnRzLlBtID0gUG07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgUm9sZXNDaGVja2VkU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSb2xlc0NoZWNrZWRTZXJ2aWNlKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMgPSB7XHJcbiAgICAgICAgICAgIGlzTG9naW5lZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWRpdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNOZXdzbWFrZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc01vZGVyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTWFpbk1vZGVyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQWRtaW5Bc3Npc3RhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1NlbGY6IGZ1bmN0aW9uICh1c2VySWQpIHsgcmV0dXJuIF90aGlzLmlzU2VsZih1c2VySWQpOyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IG5ldyBpbmRleF8xLkxvY2FsU3RvcmFnZU1pbmUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrUm9sZXMoKTtcclxuICAgIH1cclxuICAgIFJvbGVzQ2hlY2tlZFNlcnZpY2UucHJvdG90eXBlLmNoZWNrUm9sZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMubG9jYWxTdG9yYWdlLmdldE9iamVjdChcInJvbGVzXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5yb2xlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tFZGl0b3IoKTtcclxuICAgICAgICB0aGlzLmNoZWNrTmV3c21ha2VyKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja01vZGVyYXRvcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNYWluTW9kZXJhdG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0FkbWluQXNzaXN0YW50KCk7XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tFZGl0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiTmV3c0Z1bGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNFZGl0b3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlLnByb3RvdHlwZS5jaGVja05ld3NtYWtlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJOZXdzU3RhcnRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNOZXdzbWFrZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlLnByb3RvdHlwZS5jaGVja01vZGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJVc2VyU3RhcnRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNNb2RlcmF0b3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlLnByb3RvdHlwZS5jaGVja01haW5Nb2RlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiVXNlckZ1bGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNNYWluTW9kZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tBZG1pbkFzc2lzdGFudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJBZG1pblN0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzQWRtaW5Bc3Npc3RhbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlLnByb3RvdHlwZS5jaGVja1JvbGUgPSBmdW5jdGlvbiAocm9sZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJvbGVzLmZpbmQoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudG9Mb3dlckNhc2UoKSA9PT0gcm9sZS50b0xvd2VyQ2FzZSgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFJvbGVzQ2hlY2tlZFNlcnZpY2UucHJvdG90eXBlLmlzU2VsZiA9IGZ1bmN0aW9uIChhdXRob3JJZCkge1xyXG4gICAgICAgIHZhciB1c2VySWQgPSArdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0KFwidXNlcklkXCIpO1xyXG4gICAgICAgIHJldHVybiAodXNlcklkID09PSBhdXRob3JJZCk7XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBSb2xlc0NoZWNrZWRTZXJ2aWNlKTtcclxuICAgIHJldHVybiBSb2xlc0NoZWNrZWRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlJvbGVzQ2hlY2tlZFNlcnZpY2UgPSBSb2xlc0NoZWNrZWRTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb2xlcy1jaGVja2VkLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3JvbGVzLWNoZWNrZWQuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciB1c2VyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3VzZXIuc2VydmljZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgVXNlckRldGFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyRGV0YWlsQ29tcG9uZW50KHVzZXJTZXJ2aWNlLCByb3V0ZSwgcm9sZXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgIH1cclxuICAgIFVzZXJEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgX3RoaXMudXNlclNlcnZpY2UuR2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgVXNlckRldGFpbENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG4gICAgVXNlckRldGFpbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJ1c2VyLWRldGFpbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vdXNlci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2VdKVxyXG4gICAgXSwgVXNlckRldGFpbENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gVXNlckRldGFpbENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyRGV0YWlsQ29tcG9uZW50ID0gVXNlckRldGFpbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlci1kZXRhaWwuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIHVzZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4vdXNlci5zZXJ2aWNlXCIpO1xyXG52YXIgdXNlckZpbHRlcnNfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3VzZXJGaWx0ZXJzLm1vZGVsXCIpO1xyXG52YXIgVXNlckxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlckxpc3RDb21wb25lbnQodXNlclNlcnZpY2UsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICB9XHJcbiAgICBVc2VyTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXNlckxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgVXNlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmlsdGVycyA9IG5ldyB1c2VyRmlsdGVyc19tb2RlbF8xLlVzZXJGaWx0ZXJzKCk7XHJcbiAgICAgICAgZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbChmaWx0ZXJzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBVc2VyTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJ1c2VyLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt1c2VyX3NlcnZpY2VfMS5Vc2VyU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgVXNlckxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFVzZXJMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJMaXN0Q29tcG9uZW50ID0gVXNlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXItbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dpc2gubW9kZWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi93aXNoVHlwZS5tb2RlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dpc2gtbGlzdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi93aXNoLWVkaXQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd2lzaC5zZXJ2aWNlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBXaXNoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdpc2goKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2lzaDtcclxufSgpKTtcclxuZXhwb3J0cy5XaXNoID0gV2lzaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2lzaC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCJcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9tYXRlcmlhbFwiKTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vYXBwLmNvbXBvbmVudFwiKTtcclxudmFyIGFwcF9yb3V0ZXNfMSA9IHJlcXVpcmUoXCIuL2FwcC5yb3V0ZXNcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL25ld3MvaW5kZXhcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnkgPSByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnkvaW5kZXhcIik7XHJcbnZhciBpbmRleF8yID0gcmVxdWlyZShcIi4vYXV0aC9pbmRleFwiKTtcclxudmFyIGluZGV4XzMgPSByZXF1aXJlKFwiLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBpbmRleF80ID0gcmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uL2luZGV4XCIpO1xyXG52YXIgYWNjb3VudCA9IHJlcXVpcmUoXCIuL2FjY291bnQvaW5kZXhcIik7XHJcbnZhciBjbHViID0gcmVxdWlyZShcIi4vY2x1Yi9pbmRleFwiKTtcclxudmFyIG1hdGNoID0gcmVxdWlyZShcIi4vbWF0Y2gvaW5kZXhcIik7XHJcbnZhciB1c2VyX2RldGFpbF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50XCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi91c2VyL3VzZXIuc2VydmljZVwiKTtcclxudmFyIHVzZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIGluZGV4XzUgPSByZXF1aXJlKFwiLi9wbS9pbmRleFwiKTtcclxudmFyIGluZGV4XzYgPSByZXF1aXJlKFwiLi9ob21lL2luZGV4XCIpO1xyXG52YXIgaW5kZXhfNyA9IHJlcXVpcmUoXCIuL3dpc2gvaW5kZXhcIik7XHJcbnZhciBpbmRleF84ID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50L2luZGV4XCIpO1xyXG52YXIgbmcyX2F1dG9fY29tcGxldGVfMSA9IHJlcXVpcmUoXCJuZzItYXV0by1jb21wbGV0ZVwiKTtcclxudmFyIGluZGV4XzkgPSByZXF1aXJlKFwiLi9hZG1pbi9pbmRleFwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBuZzJfZmlsZV91cGxvYWRfMSA9IHJlcXVpcmUoXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCIpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtX2Jyb3dzZXJfMS5Ccm93c2VyTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgbmcyX2Jvb3RzdHJhcF8xLkRhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBuZzJfZmlsZV91cGxvYWRfMS5GaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIGh0dHBfMS5IdHRwTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxfMS5NYXRlcmlhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgICAgICAgICBuZzJfYm9vdHN0cmFwXzEuTW9kYWxNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBuZzJfYXV0b19jb21wbGV0ZV8xLk5nMkF1dG9Db21wbGV0ZU1vZHVsZSxcclxuICAgICAgICAgICAgICAgIG5nMl9ib290c3RyYXBfMS5QYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5SZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgYXBwX3JvdXRlc18xLnJvdXRpbmddLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIGFjY291bnQuQWNjb3VudFNpZ25pbkNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGFjY291bnQuQWNjb3VudFNpZ251cENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGFjY291bnQuQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkNvbmZpcm1FbWFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGFjY291bnQuRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LlJlc2V0UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LlVuY29uZmlybWVkRW1haWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjbHViLkNsdWJFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2x1Yi5DbHViTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgbmV3c0NhdGVnb3J5Lk5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNi5DbHViSGlzdG9yeUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzkuRXBsVGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF80LkZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaC5NYXRjaEVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaC5NYXRjaExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF84Lk1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzguTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzguTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8xLk5ld3NEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8xLk5ld3NFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNS5QbURldGFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzUuUG1FZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNS5QbUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF82LlJpZ2h0U2lkZWJhckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzYuUnVsZXNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8zLlNlY3VyZWREaXJlY3RpdmUsXHJcbiAgICAgICAgICAgICAgICB1c2VyX2RldGFpbF9jb21wb25lbnRfMS5Vc2VyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgdXNlcl9saXN0X2NvbXBvbmVudF8xLlVzZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNy5XaXNoRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzcuV2lzaExpc3RDb21wb25lbnRdLFxyXG4gICAgICAgICAgICBib290c3RyYXA6IFthcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50XSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkFjY291bnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgY2x1Yi5DbHViU2VydmljZSxcclxuICAgICAgICAgICAgICAgIG1hdGNoLk1hdGNoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfOS5BZG1pblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBhcHBfcm91dGVzXzEuYXBwUm91dGluZ1Byb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgIGluZGV4XzIuQXV0aEd1YXJkLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfMi5BdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNC5Gb3J1bVNlY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfMy5IdHRwV3JhcHBlcixcclxuICAgICAgICAgICAgICAgIGluZGV4XzMuR2xvYmFsVmFsaWRhdG9ycyxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogaW5kZXhfMy5Mb2NhbFN0b3JhZ2VNaW5lLCB1c2VDbGFzczogaW5kZXhfMy5Mb2NhbFN0b3JhZ2VNaW5lIH0sXHJcbiAgICAgICAgICAgICAgICBpbmRleF84Lk1hdGVyaWFsQ29tbWVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8xLk5ld3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNS5QbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8zLlJvbGVzQ2hlY2tlZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybV9icm93c2VyXzEuVGl0bGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyX3NlcnZpY2VfMS5Vc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIGluZGV4XzcuV2lzaFNlcnZpY2VcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwTW9kdWxlKTtcclxuICAgIHJldHVybiBBcHBNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX19jb21waWxlcl9fID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xyXG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgX19jb3JlX3ByaXZhdGVfXyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmxldCBwYXRjaCA9IGZhbHNlO1xyXG5pZiAoIV9fY29yZV9wcml2YXRlX19bXCJWaWV3VXRpbHNcIl0pIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIF9fY29yZV9wcml2YXRlX19bXCJWaWV3VXRpbHNcIl0gPSBfX2NvcmVfcHJpdmF0ZV9fW1widmlld191dGlsc1wiXTtcclxufVxyXG5cclxuXHJcblxyXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XHJcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxyXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcclxuICAgIH1cclxufVxyXG5cclxudmFyIF9fdW5pdmVyc2FsX18gPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xyXG5pZiAocGF0Y2gpIHtcclxuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfX1tcInZpZXdfdXRpbHNcIl07XHJcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yO1xyXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGF1dGhfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCIpO1xyXG52YXIgQWNjb3VudFNpZ25pbkNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50U2lnbmluQ29tcG9uZW50KGF1dGhTZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50U2lnbmluQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBY2NvdW50U2lnbmluQ29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChyYSkge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInVzZXJOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRTaWduaW5Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiYWNjb3VudC1zaWduaW5cIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyXSlcclxuICAgIF0sIEFjY291bnRTaWduaW5Db21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEFjY291bnRTaWduaW5Db21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWNjb3VudFNpZ25pbkNvbXBvbmVudCA9IEFjY291bnRTaWduaW5Db21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQtc2lnbmluLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgc2lnbnVwX21vZGVsXzEgPSByZXF1aXJlKFwiLi9zaWdudXAubW9kZWxcIik7XHJcbnZhciBhY2NvdW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2FjY291bnQuc2VydmljZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgQWNjb3VudFNpZ251cENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50U2lnbnVwQ29tcG9uZW50KGFjY291bnRTZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50U2lnbnVwQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCIxMjNcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiYW5kcmV3X3BhcnlzQHR1dC5ieVwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCAsIGluZGV4XzEuR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbXCIxMjNxd2UhUVwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiMTIzcXdlIVFcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2Z1bGxOYW1lJzogW1wiMTIzXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXSldLFxyXG4gICAgICAgICAgICAnYmlydGhkYXknOiBbXCIxMC8xMC8yMDE1XCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWNjb3VudFNpZ251cENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgc2lnbnVwID0gbmV3IHNpZ251cF9tb2RlbF8xLlNpZ251cCgpO1xyXG4gICAgICAgIHNpZ251cC51c2VyTmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1widXNlck5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmVtYWlsID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAucGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5jb25maXJtUGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImNvbmZpcm1QYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuZnVsbE5hbWUgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImZ1bGxOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5iaXJ0aGRheSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiYmlydGhkYXlcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZVxyXG4gICAgICAgICAgICAuY3JlYXRlKHNpZ251cClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBBY2NvdW50U2lnbnVwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImFjY291bnQtc2lnbnVwXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFthY2NvdW50X3NlcnZpY2VfMS5BY2NvdW50U2VydmljZSwgZm9ybXNfMS5Gb3JtQnVpbGRlcl0pXHJcbiAgICBdLCBBY2NvdW50U2lnbnVwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBY2NvdW50U2lnbnVwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkFjY291bnRTaWdudXBDb21wb25lbnQgPSBBY2NvdW50U2lnbnVwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmFjY291bnRSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwic2lnbnVwXCIsIGNvbXBvbmVudDogaW5kZXhfMS5BY2NvdW50U2lnbnVwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY29uZmlybUVtYWlsXCIsIGNvbXBvbmVudDogaW5kZXhfMS5Db25maXJtRW1haWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJmb3Jnb3RQYXNzd29yZFwiLCBjb21wb25lbnQ6IGluZGV4XzEuRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ1bmNvbmZpcm1lZEVtYWlsXCIsIGNvbXBvbmVudDogaW5kZXhfMS5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicmVzZXRQYXNzd29yZFwiLCBjb21wb25lbnQ6IGluZGV4XzEuUmVzZXRQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNoYW5nZVBhc3N3b3JkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgYWNjb3VudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50LnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIGNoYW5nZVBhc3N3b3JkX21vZGVsXzEgPSByZXF1aXJlKFwiLi9jaGFuZ2VQYXNzd29yZC5tb2RlbFwiKTtcclxudmFyIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50KHNlcnZpY2UsIGZvcm1CdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ29sZFBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV1cclxuICAgICAgICB9LCB7IHZhbGlkYXRvcjogaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1hdGNoaW5nUGFzc3dvcmRzKFwibmV3UGFzc3dvcmRcIiwgXCJjb25maXJtUGFzc3dvcmRcIikgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKHJhKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IGNoYW5nZVBhc3N3b3JkX21vZGVsXzEuQ2hhbmdlUGFzc3dvcmQoKTtcclxuICAgICAgICBtb2RlbC5vbGRQYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wib2xkUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwubmV3UGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5jb250cm9sc1tcIm5ld1Bhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VQYXNzd29yZChtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2FjY291bnRfc2VydmljZV8xLkFjY291bnRTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyXSlcclxuICAgIF0sIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBDaGFuZ2VQYXNzd29yZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCA9IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgQ2hhbmdlUGFzc3dvcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2hhbmdlUGFzc3dvcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2hhbmdlUGFzc3dvcmQgPSBDaGFuZ2VQYXNzd29yZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhbmdlUGFzc3dvcmQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBhY2NvdW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2FjY291bnQuc2VydmljZVwiKTtcclxudmFyIENvbmZpcm1FbWFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25maXJtRW1haWxDb21wb25lbnQoYWNjb3VudFNlcnZpY2UsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlID0gYWNjb3VudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBDb25maXJtRW1haWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJ1c2VySWRcIl07XHJcbiAgICAgICAgICAgIHZhciBjb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICAgICAgX3RoaXMuYWNjb3VudFNlcnZpY2UuY29uZmlybUVtYWlsKGlkLCBjb2RlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucmVzdWx0ID0gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29uZmlybUVtYWlsQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIENvbmZpcm1FbWFpbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJlbWFpbC1jb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiPHNwYW4gW2hpZGRlbl09JyFyZXN1bHQnPtCS0LDRiCDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDRg9GB0L/QtdGI0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LiDQnNC+0LbQtdGC0LUg0LLQvtC50YLQuCDQuCDQsdGL0YLRjCDQutCw0Log0LTQvtC80LAuPC9zcGFuPlwiXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2FjY291bnRfc2VydmljZV8xLkFjY291bnRTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIENvbmZpcm1FbWFpbENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQ29uZmlybUVtYWlsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbmZpcm1FbWFpbENvbXBvbmVudCA9IENvbmZpcm1FbWFpbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlybUVtYWlsLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NvbmZpcm1FbWFpbC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGFjY291bnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vYWNjb3VudC5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudChzZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAocmEpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy5mb3Jnb3RGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHRoaXMuZW1haWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgRm9yZ290UGFzc3dvcmRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50ID0gRm9yZ290UGFzc3dvcmRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgYWNjb3VudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50LnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIHJlc2V0UGFzc3dvcmRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQubW9kZWxcIik7XHJcbnZhciBSZXNldFBhc3N3b3JkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRDb21wb25lbnQoc2VydmljZSwgcm91dGUsIHJvdXRlciwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5jb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgfSwgeyB2YWxpZGF0b3I6IGluZGV4XzEuR2xvYmFsVmFsaWRhdG9ycy5tYXRjaGluZ1Bhc3N3b3JkcyhcInBhc3N3b3JkXCIsIFwiY29uZmlybVBhc3N3b3JkXCIpIH0pO1xyXG4gICAgfTtcclxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAocmEpIHtcclxuICAgICAgICB2YXIgcmVzZXRQYXNzd29yZCA9IG5ldyByZXNldFBhc3N3b3JkX21vZGVsXzEuUmVzZXRQYXNzd29yZCgpO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQuY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmVtYWlsID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLnBhc3N3b3JkID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucmVzZXRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZXNldFBhc3N3b3JkKHJlc2V0UGFzc3dvcmQpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicmVzZXQtcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXIsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgUmVzZXRQYXNzd29yZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5SZXNldFBhc3N3b3JkQ29tcG9uZW50ID0gUmVzZXRQYXNzd29yZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXRQYXNzd29yZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBSZXNldFBhc3N3b3JkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZDtcclxufSgpKTtcclxuZXhwb3J0cy5SZXNldFBhc3N3b3JkID0gUmVzZXRQYXNzd29yZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXRQYXNzd29yZC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgU2lnbnVwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWdudXA7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2lnbnVwID0gU2lnbnVwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWdudXAubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9zaWdudXAubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGFjY291bnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vYWNjb3VudC5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgIH1cclxuICAgIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudW5jb25maXJtZWRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBpbmRleF8xLkdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIxMSk7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gdGhpcy51bmNvbmZpcm1lZEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVzZW5kQ29uZmlybUVtYWlsKGVtYWlsKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInVuY29uZmlybWVkRW1haWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gVW5jb25maXJtZWRFbWFpbENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gVW5jb25maXJtZWRFbWFpbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBFcGxUYWJsZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFcGxUYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEVwbFRhYmxlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBFcGxUYWJsZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJlcGwtdGFibGVcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBFcGxUYWJsZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRXBsVGFibGVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRXBsVGFibGVDb21wb25lbnQgPSBFcGxUYWJsZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXBsVGFibGUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hZG1pbi5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXBsVGFibGUuY29tcG9uZW50XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCIpO1xyXG52YXIgcm9sZXNfY2hlY2tlZF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlXCIpO1xyXG52YXIgQXBwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbXBvbmVudChyb3V0ZXIsIGF1dGgsIHJvbGVzQ2hlY2tlZCwgdmlld0NvbnRhaW5lclJlZiwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JPQu9Cw0LLQvdCw0Y9cIik7XHJcbiAgICB9XHJcbiAgICBBcHBDb21wb25lbnQucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICB9O1xyXG4gICAgQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3JvdXRlcl8xLlJvdXRlciwgYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvbGVzX2NoZWNrZWRfc2VydmljZV8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIGNvcmVfMS5WaWV3Q29udGFpbmVyUmVmLCBwbGF0Zm9ybV9icm93c2VyXzEuVGl0bGVdKVxyXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL25ld3MvaW5kZXhcIik7XHJcbnZhciBhdXRoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL2F1dGgvYXV0aC5yb3V0aW5nXCIpO1xyXG52YXIgYWNjb3VudF9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50L2FjY291bnQucm91dGluZ1wiKTtcclxudmFyIGNsdWJfcm91dGluZ18xID0gcmVxdWlyZShcIi4vY2x1Yi9jbHViLnJvdXRpbmdcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfcm91dGluZ18xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nXCIpO1xyXG52YXIgbmV3c19yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9uZXdzL25ld3Mucm91dGluZ1wiKTtcclxudmFyIHVzZXJfcm91dGluZ18xID0gcmVxdWlyZShcIi4vdXNlci91c2VyLnJvdXRpbmdcIik7XHJcbnZhciBwbV9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9wbS9wbS5yb3V0aW5nXCIpO1xyXG52YXIgaG9tZV9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9ob21lL2hvbWUucm91dGluZ1wiKTtcclxudmFyIGZvcnVtU2VjdGlvbl9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmdcIik7XHJcbnZhciB3aXNoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL3dpc2gvd2lzaC5yb3V0aW5nXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZ1wiKTtcclxudmFyIG1hdGNoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL21hdGNoL21hdGNoLnJvdXRpbmdcIik7XHJcbnZhciByb3V0ZXMgPSBhY2NvdW50X3JvdXRpbmdfMS5hY2NvdW50Um91dGVzLmNvbmNhdChhdXRoX3JvdXRpbmdfMS5hdXRoUm91dGVzLCBjbHViX3JvdXRpbmdfMS5jbHViUm91dGVzLCBmb3J1bVNlY3Rpb25fcm91dGluZ18xLmZvcnVtU2VjdGlvblJvdXRlcywgaG9tZV9yb3V0aW5nXzEuaG9tZVJvdXRlcywgbWF0Y2hfcm91dGluZ18xLm1hdGNoUm91dGVzLCBtYXRlcmlhbENvbW1lbnRfcm91dGluZ18xLm1hdGVyaWFsQ29tbWVudFJvdXRlcywgbmV3c0NhdGVnb3J5X3JvdXRpbmdfMS5uZXdzQ2F0ZWdvcnlSb3V0ZXMsIG5ld3Nfcm91dGluZ18xLm5ld3NSb3V0ZXMsIHBtX3JvdXRpbmdfMS5wbVJvdXRlcywgdXNlcl9yb3V0aW5nXzEudXNlclJvdXRlcywgd2lzaF9yb3V0aW5nXzEud2lzaFJvdXRlcywgW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQgfVxyXG5dKTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW1xyXG4gICAgYXV0aF9yb3V0aW5nXzEuYXV0aFByb3ZpZGVyc1xyXG5dO1xyXG5leHBvcnRzLnJvdXRpbmcgPSByb3V0ZXJfMS5Sb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAucm91dGVzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5yb3V0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vYXV0aC5zZXJ2aWNlJyk7XHJcbnZhciBBdXRoR3VhcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aEd1YXJkKGF1dGhTZXJ2aWNlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBBdXRoR3VhcmQucHJvdG90eXBlLmNhbkFjdGl2YXRlID0gZnVuY3Rpb24gKHJvdXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPSBzdGF0ZS51cmw7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEF1dGhHdWFyZCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgQXV0aEd1YXJkKTtcclxuICAgIHJldHVybiBBdXRoR3VhcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXV0aEd1YXJkID0gQXV0aEd1YXJkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLWd1YXJkLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmF1dGhSb3V0ZXMgPSBbXTtcclxuZXhwb3J0cy5hdXRoUHJvdmlkZXJzID0gW1xyXG4gICAgaW5kZXhfMS5BdXRoR3VhcmQsXHJcbiAgICBpbmRleF8xLkF1dGhTZXJ2aWNlXHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGgucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBjbHViX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2NsdWIuc2VydmljZVwiKTtcclxudmFyIGNsdWJfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2NsdWIubW9kZWxcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIG5nMl9maWxlX3VwbG9hZF8xID0gcmVxdWlyZShcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIik7XHJcbnZhciBDbHViRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDbHViRWRpdENvbXBvbmVudChjbHViU2VydmljZSwgcm91dGUsIHJvdXRlciwgbG9jYWxTdG9yYWdlLCBmb3JtQnVpbGRlciwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZSA9IGNsdWJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy5oYXNCYXNlRHJvcFpvbmVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gbmV3IGNsdWJfbW9kZWxfMS5DbHViKCk7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutC70YPQsdCwXCIpO1xyXG4gICAgfVxyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbHViU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImVuZ2xpc2hOYW1lXCJdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlT3B0aW9ucyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudC5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XHJcbiAgICAgICAgICAgIF90aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibG9nb1wiXS5wYXRjaFZhbHVlKHJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2x1YlNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbHViU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENsdWJFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5nZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgbmcyX2ZpbGVfdXBsb2FkXzEuRmlsZVVwbG9hZGVyKHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvdjEvdXBsb2FkL2NsdWJMb2dvL1wiICsgbmFtZSxcclxuICAgICAgICAgICAgYXV0aFRva2VuOiBcIkJlYXJlciBcIiArIHRoaXMubG9jYWxTdG9yYWdlLmdldE9iamVjdChcImFjY2Vzc190b2tlblwiKSxcclxuICAgICAgICAgICAgYXV0b1VwbG9hZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpdGVtID0gbmV3IGNsdWJfbW9kZWxfMS5DbHViKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaXRlbS5lbmdsaXNoTmFtZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJlbmdsaXNoTmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmxvZ28gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibG9nb1wiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLm5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnN0YWRpdW0gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wic3RhZGl1bVwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudC5wcm90b3R5cGUuaW5pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW5nbGlzaE5hbWUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV0sXHJcbiAgICAgICAgICAgICdsb2dvJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICduYW1lJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnc3RhZGl1bSc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENsdWJFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImNsdWItZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2x1Yi1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2NsdWJfc2VydmljZV8xLkNsdWJTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyLCBpbmRleF8xLkxvY2FsU3RvcmFnZU1pbmUsIGZvcm1zXzEuRm9ybUJ1aWxkZXIsIHBsYXRmb3JtX2Jyb3dzZXJfMS5UaXRsZV0pXHJcbiAgICBdLCBDbHViRWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQ2x1YkVkaXRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2x1YkVkaXRDb21wb25lbnQgPSBDbHViRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1Yi1lZGl0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBjbHViX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2NsdWIuc2VydmljZVwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBDbHViTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDbHViTGlzdENvbXBvbmVudChjbHViU2VydmljZSwgcm91dGUsIGxvY2F0aW9uLCB0aXRsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlID0gY2x1YlNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JrQu9GD0LHRi1wiKTtcclxuICAgIH1cclxuICAgIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0RlbGV0ZU1vZGFsID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXN1bHQgPSByZXM7IH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhlKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtcy5zcGxpY2UoX3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKHRoaXMucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLnBhZ2VDaGFuZ2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdVcmwgPSBcImNsdWIvbGlzdC9cIiArIHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZVBhZ2VhYmxlID0gZnVuY3Rpb24gKHBhZ2VhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImRlbGV0ZU1vZGFsXCIsIHZvaWQgMCk7XHJcbiAgICBDbHViTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJjbHViLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtjbHViX3NlcnZpY2VfMS5DbHViU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGUsIGNvbW1vbl8xLkxvY2F0aW9uLCBwbGF0Zm9ybV9icm93c2VyXzEuVGl0bGVdKVxyXG4gICAgXSwgQ2x1Ykxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIENsdWJMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNsdWJMaXN0Q29tcG9uZW50ID0gQ2x1Ykxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsdWItbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIENsdWIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2x1YigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBDbHViO1xyXG59KCkpO1xyXG5leHBvcnRzLkNsdWIgPSBDbHViO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbHViLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMuY2x1YlJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJjbHViLzppZC9lZGl0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5DbHViRWRpdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNsdWJcIiwgY29tcG9uZW50OiBpbmRleF8xLkNsdWJMaXN0Q29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1Yi5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGZvcnVtU2VjdGlvbl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24uc2VydmljZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50KHNlcnZpY2UsIHJvbGVzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb2xlc0NoZWNrZWQgPSByb2xlc0NoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5pdGVtcyA9IGRhdGE7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zb2xlLmxvZyhcIlwiKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJmb3J1bVNlY3Rpb24tbGlzdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbZm9ydW1TZWN0aW9uX3NlcnZpY2VfMS5Gb3J1bVNlY3Rpb25TZXJ2aWNlLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2VdKVxyXG4gICAgXSwgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Gb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50ID0gRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgRm9ydW1TZWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZvcnVtU2VjdGlvbigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBGb3J1bVNlY3Rpb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuRm9ydW1TZWN0aW9uID0gRm9ydW1TZWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J1bVNlY3Rpb24ubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMuZm9ydW1TZWN0aW9uUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImZvcnVtXCIsIGNvbXBvbmVudDogaW5kZXhfMS5Gb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50IH0sXHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcnVtU2VjdGlvbi5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24ucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBDbHViSGlzdG9yeUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDbHViSGlzdG9yeUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIENsdWJIaXN0b3J5Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIjxjbHViLWhpc3Rvcnk+XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIENsdWJIaXN0b3J5Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBDbHViSGlzdG9yeUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DbHViSGlzdG9yeUNvbXBvbmVudCA9IENsdWJIaXN0b3J5Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbHViLWhpc3RvcnkuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMuaG9tZVJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJjbHViSGlzdG9yeVwiLCBjb21wb25lbnQ6IGluZGV4XzEuQ2x1Ykhpc3RvcnlDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJydWxlc1wiLCBjb21wb25lbnQ6IGluZGV4XzEuUnVsZXNDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob21lLnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ob21lLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgYWRtaW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2FkbWluL2FkbWluLnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIFJpZ2h0U2lkZWJhckNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSaWdodFNpZGViYXJDb21wb25lbnQoc2VydmljZSwgcm9sZXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgIH1cclxuICAgIFJpZ2h0U2lkZWJhckNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgIH07XHJcbiAgICBSaWdodFNpZGViYXJDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZUVwbFRhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAudXBkYXRlRXBsVGFibGUoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc29sZS5sb2coXCJcIik7IH0pO1xyXG4gICAgfTtcclxuICAgIFJpZ2h0U2lkZWJhckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJyaWdodC1zaWRlYmFyXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9yaWdodFNpZGViYXIuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWRtaW5fc2VydmljZV8xLkFkbWluU2VydmljZSwgaW5kZXhfMS5Sb2xlc0NoZWNrZWRTZXJ2aWNlXSlcclxuICAgIF0sIFJpZ2h0U2lkZWJhckNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUmlnaHRTaWRlYmFyQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlJpZ2h0U2lkZWJhckNvbXBvbmVudCA9IFJpZ2h0U2lkZWJhckNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmlnaHRTaWRlYmFyLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgUnVsZXNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUnVsZXNDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBSdWxlc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCI8cnVsZXM+XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9ydWxlcy5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgUnVsZXNDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFJ1bGVzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlJ1bGVzQ29tcG9uZW50ID0gUnVsZXNDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ1bGVzLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG52YXIgaW5kZXhfMiA9IHJlcXVpcmUoXCIuLi9jbHViL2luZGV4XCIpO1xyXG52YXIgbWF0Y2hfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21hdGNoLm1vZGVsXCIpO1xyXG52YXIgTWF0Y2hFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGNoRWRpdENvbXBvbmVudChtYXRjaFNlcnZpY2UsIGNsdWJTZXJ2aWNlLCByb3V0ZSwgcm91dGVyLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMubWF0Y2hTZXJ2aWNlID0gbWF0Y2hTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2UgPSBjbHViU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubWF0Y2hTZXJ2aWNlLmdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLmdldEJ5TmFtZShcIlwiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZUNsdWJzKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBNYXRjaEVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV3c0l0ZW0gPSB0aGlzLnBhcnNlRm9ybSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU2VydmljZS51cGRhdGUodGhpcy5pZCwgbmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1hdGNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTtcclxuICAgIH07XHJcbiAgICBNYXRjaEVkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IG5ldyBtYXRjaF9tb2RlbF8xLk1hdGNoKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaXRlbS5jbHViSWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2x1YklkXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uaXNIb21lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImlzSG9tZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmRhdGVUaW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImRhdGVUaW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0udHlwZUlkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInR5cGVJZFwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBNYXRjaEVkaXRDb21wb25lbnQucHJvdG90eXBlLmluaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2NsdWJJZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnaXNIb21lJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdkYXRlVGltZSc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAndHlwZUlkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYXRjaEVkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlQ2x1YnMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLmNsdWJzID0gaXRlbXM7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm1hdGNoLWVkaXRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaW5kZXhfMS5NYXRjaFNlcnZpY2UsIGluZGV4XzIuQ2x1YlNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXIsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgTWF0Y2hFZGl0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBNYXRjaEVkaXRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0Y2hFZGl0Q29tcG9uZW50ID0gTWF0Y2hFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRjaC1lZGl0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBtYXRjaF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9tYXRjaC5zZXJ2aWNlXCIpO1xyXG52YXIgTWF0Y2hMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGNoTGlzdENvbXBvbmVudChtYXRjaFNlcnZpY2UsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UgPSBtYXRjaFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIH1cclxuICAgIE1hdGNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIE1hdGNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChwYWdlYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm1hdGNoLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGNoLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbbWF0Y2hfc2VydmljZV8xLk1hdGNoU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgTWF0Y2hMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBNYXRjaExpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0Y2hMaXN0Q29tcG9uZW50ID0gTWF0Y2hMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRjaC1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBNYXRjaCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRjaCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRjaDtcclxufSgpKTtcclxuZXhwb3J0cy5NYXRjaCA9IE1hdGNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRjaC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMubWF0Y2hSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwibWF0Y2gvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBpbmRleF8xLk1hdGNoRWRpdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGNoXCIsIGNvbXBvbmVudDogaW5kZXhfMS5NYXRjaExpc3RDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRjaC5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcclxudmFyIG1hdGVyaWFsQ29tbWVudF9tb2RlbF8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudChtYXRlcmlhbENvbW1lbnRTZXJ2aWNlLCBsb2NhdGlvbiwgcm9sZXNDaGVja2VkLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZSA9IG1hdGVyaWFsQ29tbWVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdhbnN3ZXInOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0FkZENvbW1lbnRNb2RhbCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWVudE1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5zaG93RGVsZXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmhpZGVFZGl0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Q29tbWVudE1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmNsZWFuQ29udHJvbHMoKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmFkZENvbW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gdGhpcy5nZXRDb21tZW50KCk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmNyZWF0ZShjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzLml0ZW0uY2hpbGRyZW4ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgX3RoaXMuY2xlYW5Db250cm9scygpO1xyXG4gICAgICAgICAgICBfdGhpcy5hZGRDb21tZW50TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXN1bHQgPSByZXM7IH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhlKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgucGFyZW50SWQgPSBfdGhpcy5wYXJlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5wYXJlbnRJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLml0ZW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0VkaXRNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUodGhpcy5pdGVtKTtcclxuICAgICAgICB0aGlzLmVkaXRDb21tZW50TW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gdGhpcy5nZXRDb21tZW50KCk7XHJcbiAgICAgICAgY29tbWVudC5hbnN3ZXIgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wiYW5zd2VyXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS51cGRhdGUodGhpcy5pdGVtLmlkLCBjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzLml0ZW0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5oaWRlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDb21tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gdGhpcy5pdGVtO1xyXG4gICAgICAgIGNvbW1lbnQubWVzc2FnZSA9IHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50O1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuY2xlYW5Db250cm9scyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wiYW5zd2VyXCJdLnBhdGNoVmFsdWUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbWF0ZXJpYWxDb21tZW50X21vZGVsXzEuTWF0ZXJpYWxDb21tZW50KVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpdGVtXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBOdW1iZXIpXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcImRlZXBcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIEJvb2xlYW4pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcImNhbkNvbW1lbnRhcnlcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIE51bWJlcilcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwibWF0ZXJpYWxJZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbWF0ZXJpYWxDb21tZW50X21vZGVsXzEuTWF0ZXJpYWxDb21tZW50KVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwYXJlbnRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJhZGRDb21tZW50TW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhZGRDb21tZW50TW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJlZGl0Q29tbWVudE1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdENvbW1lbnRNb2RhbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLlZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJtYXRlcmlhbENvbW1lbnQtZGV0YWlsXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW21hdGVyaWFsQ29tbWVudF9zZXJ2aWNlXzEuTWF0ZXJpYWxDb21tZW50U2VydmljZSwgY29tbW9uXzEuTG9jYXRpb24sIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZSwgZm9ybXNfMS5Gb3JtQnVpbGRlcl0pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQgPSBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBtYXRlcmlhbENvbW1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIik7XHJcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQobWF0ZXJpYWxDb21tZW50U2VydmljZSwgbG9jYXRpb24sIHJvbGVzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZSA9IG1hdGVyaWFsQ29tbWVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLnBhZ2VDaGFuZ2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciBuZXdVcmwgPSBcIm1hdGVyaWFsQ29tbWVudC9saXN0L1wiICsgdGhpcy5wYWdlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwodGhpcy5wYWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc29sZS5sb2coXCJzdWNjZXNzIGxvYWQgY29tbWVudCBsaXRzXCIpOyB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZVBhZ2VhYmxlID0gZnVuY3Rpb24gKHBhZ2VhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC52ZXJpZnkodGhpcy5pdGVtc1tpbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHJlc3VsdCA9IGRhdGE7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLml0ZW1zW2luZGV4XS5pc1ZlcmlmaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLnNob3dEZWxldGVNb2RhbCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXN1bHQgPSByZXM7IH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhlKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtcy5zcGxpY2UoX3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwibWF0ZXJpYWxDb21tZW50LWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW21hdGVyaWFsQ29tbWVudF9zZXJ2aWNlXzEuTWF0ZXJpYWxDb21tZW50U2VydmljZSwgY29tbW9uXzEuTG9jYXRpb24sIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZV0pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgPSBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X21vZGVsXzEgPSByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIik7XHJcbnZhciBtYXRlcmlhbENvbW1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIik7XHJcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudChtYXRlcmlhbENvbW1lbnRTZXJ2aWNlLCBsb2NhdGlvbiwgcm9sZXNDaGVja2VkLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZSA9IG1hdGVyaWFsQ29tbWVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgICAgIHRoaXMuY2FuQ29tbWVudGFyeSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLnBhZ2VDaGFuZ2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsQnlNYXRlcmlhbCh0aGlzLnBhZ2UsIHRoaXMubWF0ZXJpYWxJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChwYWdlYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gbmV3IG1hdGVyaWFsQ29tbWVudF9tb2RlbF8xLk1hdGVyaWFsQ29tbWVudCgpO1xyXG4gICAgICAgIGNvbW1lbnQubWVzc2FnZSA9IHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIGNvbW1lbnQubWF0ZXJpYWxJZCA9IHRoaXMubWF0ZXJpYWxJZDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuY3JlYXRlKGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXRlbXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgX3RoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnBhdGNoVmFsdWUoXCJcIik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgTnVtYmVyKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudC5wcm90b3R5cGUsIFwibWF0ZXJpYWxJZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgQm9vbGVhbilcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLCBcImNhbkNvbW1lbnRhcnlcIiwgdm9pZCAwKTtcclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiY29tbWVudHNcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW21hdGVyaWFsQ29tbWVudF9zZXJ2aWNlXzEuTWF0ZXJpYWxDb21tZW50U2VydmljZSwgY29tbW9uXzEuTG9jYXRpb24sIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZSwgZm9ybXNfMS5Gb3JtQnVpbGRlcl0pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQgPSBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMubWF0ZXJpYWxDb21tZW50Um91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudC9saXN0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5NYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50L2xpc3QvOnBhZ2VcIiwgY29tcG9uZW50OiBpbmRleF8xLk1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnQvbGlzdC86cGFnZS86Y2F0ZWdvcnlJZFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTmV3c0NhdGVnb3J5ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ld3NDYXRlZ29yeSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBOZXdzQ2F0ZWdvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c0NhdGVnb3J5ID0gTmV3c0NhdGVnb3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzQ2F0ZWdvcnkubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIG5ld3NDYXRlZ29yeV9lZGl0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50XCIpO1xyXG5leHBvcnRzLm5ld3NDYXRlZ29yeVJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ25ld3NDYXRlZ29yeScsIGNvbXBvbmVudDogbmV3c0NhdGVnb3J5X2xpc3RfY29tcG9uZW50XzEuTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnbmV3c0NhdGVnb3J5LzppZC9lZGl0JywgY29tcG9uZW50OiBuZXdzQ2F0ZWdvcnlfZWRpdF9jb21wb25lbnRfMS5OZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3c0NhdGVnb3J5LnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xyXG52YXIgbmV3c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9uZXdzLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBsb2NhbFN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbG9jYWxTdG9yYWdlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTmV3c0RldGFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzRGV0YWlsQ29tcG9uZW50KG5ld3NTZXJ2aWNlLCByb3V0ZSwgbG9jYWxTdG9yYWdlLCByb2xlc0NoZWNrZWQsIHJvdXRlciwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZSA9IG5ld3NTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIH1cclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgX3RoaXMubmV3c1NlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0FjdGl2YXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLnNob3dEZWxldGVNb2RhbCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXN1bHQgPSByZXM7IH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhlKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoaXRlbS50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRWaWV3KCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuYWRkVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzLml0ZW0uaWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZS5nZXQoXCJtYXRlcmlhbFwiICsgaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldChcIm1hdGVyaWFsXCIgKyBpZCwgXCIxXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZFZpZXcoaWQpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJhY3RpdmF0ZU1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcImFjdGl2YXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBOZXdzRGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkZWxldGVNb2RhbFwiLCB2b2lkIDApO1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJuZXdzLWRldGFpbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbbmV3c19zZXJ2aWNlXzEuTmV3c1NlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCBsb2NhbFN0b3JhZ2VfMS5Mb2NhbFN0b3JhZ2VNaW5lLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlXSlcclxuICAgIF0sIE5ld3NEZXRhaWxDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NEZXRhaWxDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c0RldGFpbENvbXBvbmVudCA9IE5ld3NEZXRhaWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3MtZGV0YWlsLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmV3c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9uZXdzLnNlcnZpY2VcIik7XHJcbnZhciBuZXdzX21vZGVsXzEgPSByZXF1aXJlKFwiLi9uZXdzLm1vZGVsXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9uZXdzQ2F0ZWdvcnkvaW5kZXhcIik7XHJcbnZhciBOZXdzRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzRWRpdENvbXBvbmVudChuZXdzU2VydmljZSwgbmV3c0NhdGVnb3J5U2VydmljZSwgcm91dGUsIHJvdXRlciwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlID0gbmV3c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlID0gbmV3c0NhdGVnb3J5U2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXdzU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlQ2F0ZWdvcmllcyhkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZUZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgbmV3c19tb2RlbF8xLk5ld3MoKTtcclxuICAgICAgICBpdGVtLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBpdGVtLmNhdGVnb3J5SWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2F0ZWdvcnlJZFwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uYnJpZWYgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiYnJpZWZcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5zb3VyY2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wic291cmNlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucGhvdG8gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wicGhvdG9cIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5wZW5kaW5nID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInBlbmRpbmdcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5jYW5Db21tZW50YXJ5ID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNhbkNvbW1lbnRhcnlcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5vblRvcCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJvblRvcFwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBOZXdzRWRpdENvbXBvbmVudC5wcm90b3R5cGUuaW5pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnlJZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2JyaWVmJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdzb3VyY2UnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW10pXSxcclxuICAgICAgICAgICAgJ3Bob3RvJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdjYW5Db21tZW50YXJ5JzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdvblRvcCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAncGVuZGluZyc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3MtZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3Nfc2VydmljZV8xLk5ld3NTZXJ2aWNlLCBpbmRleF8xLk5ld3NDYXRlZ29yeVNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXIsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgTmV3c0VkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NFZGl0Q29tcG9uZW50ID0gTmV3c0VkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3MtZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcclxudmFyIG5ld3Nfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbmV3cy5zZXJ2aWNlXCIpO1xyXG52YXIgbmV3c0ZpbHRlcnNfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL25ld3NGaWx0ZXJzLm1vZGVsXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTmV3c0xpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV3c0xpc3RDb21wb25lbnQobmV3c1NlcnZpY2UsIHJvdXRlLCBsb2NhdGlvbiwgcm9sZXNDaGVja2VkLCBjZCkge1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UgPSBuZXdzU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMuY2QgPSBjZDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0FjdGl2YXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0RlbGV0ZU1vZGFsID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBuZXdzID0gdGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XTtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKG5ld3MuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgbmV3cy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMuc3BsaWNlKF90aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbXCJjYXRlZ29yeUlkXCJdO1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyTmFtZSA9IHBhcmFtc1tcInVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFnZUNoYW5nZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld1VybCA9IFwibmV3cy9saXN0L1wiICsgdGhpcy5wYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgICAgICAgICAgbmV3VXJsID0gbmV3VXJsICsgXCIvXCIgKyB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmlsdGVycyA9IG5ldyBuZXdzRmlsdGVyc19tb2RlbF8xLk1hdGVyaWFsRmlsdGVycygpO1xyXG4gICAgICAgIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIGZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIGZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoZmlsdGVycylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLlZpZXdDaGlsZChcImFjdGl2YXRlTW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImFjdGl2YXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3MtbGlzdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1saXN0LmNvbXBvbmVudC5odG1sXCIpLFxyXG4gICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3Nfc2VydmljZV8xLk5ld3NTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgY29tbW9uXzEuTG9jYXRpb24sIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZSwgY29yZV8xLkNoYW5nZURldGVjdG9yUmVmXSlcclxuICAgIF0sIE5ld3NMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBOZXdzTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5OZXdzTGlzdENvbXBvbmVudCA9IE5ld3NMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMubmV3c1JvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJuZXdzXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvbGlzdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzL2xpc3QvOnBhZ2VcIiwgY29tcG9uZW50OiBpbmRleF8xLk5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy9saXN0LzpwYWdlLzpjYXRlZ29yeUlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvOmlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy86aWQvZWRpdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0VkaXRDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzLnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWF0ZXJpYWxGaWx0ZXJzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsRmlsdGVycygpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsRmlsdGVycztcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbEZpbHRlcnMgPSBNYXRlcmlhbEZpbHRlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3NGaWx0ZXJzLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3c0ZpbHRlcnMubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtRGV0YWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBtRGV0YWlsQ29tcG9uZW50KHBtU2VydmljZSwgcm91dGUpIHtcclxuICAgICAgICB0aGlzLnBtU2VydmljZSA9IHBtU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB9XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgX3RoaXMucG1TZXJ2aWNlLkdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG4gICAgUG1EZXRhaWxDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicG0tZGV0YWlsXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9wbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcG1fc2VydmljZV8xLlBtU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgUG1EZXRhaWxDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBtRGV0YWlsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlBtRGV0YWlsQ29tcG9uZW50ID0gUG1EZXRhaWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLWRldGFpbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcG1fbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3BtLm1vZGVsXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbUVkaXRDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgdGhpcy5teVNvdXJjZSA9IFtcImFyMVwiLCBcImFyMlwiLCBcIjNkc2FcIl07XHJcbiAgICAgICAgdGhpcy51c2VycyA9IFwiL2FwaS91c2VyL0dldFVzZXJOYW1lcz90eXBlZD06a2V5d29yZFwiO1xyXG4gICAgfVxyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdyZWNlaXZlcic6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0aXRsZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldFVzZXJuYW1lKCk7XHJcbiAgICB9O1xyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoeyByZWNlaXZlcjogdXNlci5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5nZXRVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlKTtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBwbV9tb2RlbF8xLlBtKCk7XHJcbiAgICAgICAgbW9kZWwucmVjZWl2ZXJJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJyZWNlaXZlclwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc2VydmljZS5DcmVhdGUobW9kZWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BtXCJdKTtcclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicG0tZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcG0tZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtwbV9zZXJ2aWNlXzEuUG1TZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFBtRWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUG1FZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlBtRWRpdENvbXBvbmVudCA9IFBtRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG0tZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbUxpc3RDb21wb25lbnQocG1TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wbVNlcnZpY2UgPSBwbVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBQbUxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbVNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBQbUxpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBtb2RlbC5yZWNlaXZlZDtcclxuICAgICAgICB0aGlzLnNlbnQgPSBtb2RlbC5zZW50O1xyXG4gICAgfTtcclxuICAgIFBtTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB9O1xyXG4gICAgUG1MaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInBtLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BtLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcG1fc2VydmljZV8xLlBtU2VydmljZV0pXHJcbiAgICBdLCBQbUxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBtTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5QbUxpc3RDb21wb25lbnQgPSBQbUxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcclxuZXhwb3J0cy5wbVJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJwbVwiLCBjb21wb25lbnQ6IGluZGV4XzEuUG1MaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicG0vOmlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5QbURldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBtLzppZC9lZGl0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5QbUVkaXRDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbS5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgR2xvYmFsVmFsaWRhdG9ycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHbG9iYWxWYWxpZGF0b3JzKCkge1xyXG4gICAgfVxyXG4gICAgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0ID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcclxuICAgICAgICB2YXIgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gXCJcIiAmJiAoY29udHJvbC52YWx1ZS5sZW5ndGggPD0gNSB8fCAhRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IFwiaW5jb3JyZWN0TWFpbEZvcm1hdFwiOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIEdsb2JhbFZhbGlkYXRvcnMubWF0Y2hpbmdQYXNzd29yZHMgPSBmdW5jdGlvbiAocGFzc3dvcmRLZXksIGNvbmZpcm1QYXNzd29yZEtleSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICAgICAgICB2YXIgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgR2xvYmFsVmFsaWRhdG9ycyA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBHbG9iYWxWYWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBHbG9iYWxWYWxpZGF0b3JzO1xyXG59KCkpO1xyXG5leHBvcnRzLkdsb2JhbFZhbGlkYXRvcnMgPSBHbG9iYWxWYWxpZGF0b3JzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxWYWxpZGF0b3JzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9nbG9iYWxWYWxpZGF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFBhZ2VhYmxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2VhYmxlKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhZ2VhYmxlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBhZ2VhYmxlID0gUGFnZWFibGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VhYmxlLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9wYWdlYWJsZS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBTZWN1cmVkRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlY3VyZWREaXJlY3RpdmUocm91dGVyLCBlbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIH1cclxuICAgIFNlY3VyZWREaXJlY3RpdmUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTZWN1cmVkRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUmlnaHRzKCk7XHJcbiAgICB9O1xyXG4gICAgU2VjdXJlZERpcmVjdGl2ZS5wcm90b3R5cGUuY2hlY2tSaWdodHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5zZWN1cmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Ib3N0QmluZGluZyhcImhpZGRlblwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBCb29sZWFuKVxyXG4gICAgXSwgU2VjdXJlZERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaGlkZVJvdXRlckxpbmtcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIE9iamVjdClcclxuICAgIF0sIFNlY3VyZWREaXJlY3RpdmUucHJvdG90eXBlLCBcInNlY3VyZWRcIiwgdm9pZCAwKTtcclxuICAgIFNlY3VyZWREaXJlY3RpdmUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuRGlyZWN0aXZlKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiW3NlY3VyZWRdXCJcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcm91dGVyXzEuUm91dGVyLCBjb3JlXzEuRWxlbWVudFJlZl0pXHJcbiAgICBdLCBTZWN1cmVkRGlyZWN0aXZlKTtcclxuICAgIHJldHVybiBTZWN1cmVkRGlyZWN0aXZlO1xyXG59KCkpO1xyXG5leHBvcnRzLlNlY3VyZWREaXJlY3RpdmUgPSBTZWN1cmVkRGlyZWN0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZWN1cmVkLmRpcmVjdGl2ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvc2VjdXJlZC5kaXJlY3RpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgdXNlcl9kZXRhaWxfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi91c2VyLWRldGFpbC5jb21wb25lbnRcIik7XHJcbnZhciB1c2VyX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi91c2VyLWxpc3QuY29tcG9uZW50XCIpO1xyXG5leHBvcnRzLnVzZXJSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICd1c2VyJywgY29tcG9uZW50OiB1c2VyX2xpc3RfY29tcG9uZW50XzEuVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvbGlzdCcsIGNvbXBvbmVudDogdXNlcl9saXN0X2NvbXBvbmVudF8xLlVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyL2xpc3QvOnBhZ2UnLCBjb21wb25lbnQ6IHVzZXJfbGlzdF9jb21wb25lbnRfMS5Vc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci9saXN0LzpwYWdlLzp1c2VyTmFtZScsIGNvbXBvbmVudDogdXNlcl9saXN0X2NvbXBvbmVudF8xLlVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyLzppZCcsIGNvbXBvbmVudDogdXNlcl9kZXRhaWxfY29tcG9uZW50XzEuVXNlckRldGFpbENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXIucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgVXNlckZpbHRlcnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlckZpbHRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBVc2VyRmlsdGVycztcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyRmlsdGVycyA9IFVzZXJGaWx0ZXJzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VyRmlsdGVycy5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgd2lzaF9tb2RlbF8xID0gcmVxdWlyZShcIi4vd2lzaC5tb2RlbFwiKTtcclxudmFyIHdpc2hfc2VydmljZV8xID0gcmVxdWlyZShcIi4vd2lzaC5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgV2lzaEVkaXRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lzaEVkaXRDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICB9XHJcbiAgICBXaXNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3RpdGxlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0eXBlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuR2V0U2luZ2xlKF90aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZ2V0ICBuZXdzXCIpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHlwZXMoKTtcclxuICAgIH07XHJcbiAgICBXaXNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBXaXNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IHdpc2hfbW9kZWxfMS5XaXNoKCk7XHJcbiAgICAgICAgbW9kZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIG1vZGVsLm1lc3NhZ2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50eXBlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInR5cGVcIl0udmFsdWU7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc2VydmljZS5VcGRhdGUodGhpcy5pZCwgbW9kZWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gcmVzID0gZGF0YTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLkNyZWF0ZShtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXMgPSBkYXRhOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dpc2hcIl0pO1xyXG4gICAgfTtcclxuICAgIFdpc2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVUeXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAuR2V0VHlwZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy50eXBlcyA9IGRhdGE7IH0pO1xyXG4gICAgfTtcclxuICAgIFdpc2hFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIndpc2gtZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3dpc2hfc2VydmljZV8xLldpc2hTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFdpc2hFZGl0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBXaXNoRWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5XaXNoRWRpdENvbXBvbmVudCA9IFdpc2hFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXNoLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgd2lzaF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93aXNoLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBXaXNoTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaXNoTGlzdENvbXBvbmVudChzZXJ2aWNlLCByb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIH1cclxuICAgIFdpc2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1sncGFnZSddKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1sncGFnZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zWydjYXRlZ29yeUlkJ107XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdpc2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIFdpc2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZVBhZ2VhYmxlID0gZnVuY3Rpb24gKHBhZ2VhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBXaXNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc29sZS5sb2coXCJzdWNjZXNzIGxvYWQgbGlzdCB3aXNoXCIpOyB9KTtcclxuICAgIH07XHJcbiAgICBXaXNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZ2V0VHlwZUNsYXNzID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLXdhcm5pbmdcIjtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtaW5mb1wiO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgV2lzaExpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwid2lzaC1saXN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93aXNoLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd2lzaF9zZXJ2aWNlXzEuV2lzaFNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuICAgIF0sIFdpc2hMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBXaXNoTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5XaXNoTGlzdENvbXBvbmVudCA9IFdpc2hMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXNoLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLndpc2hSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwid2lzaFwiLCBjb21wb25lbnQ6IGluZGV4XzEuV2lzaExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ3aXNoLzppZC9lZGl0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5XaXNoRWRpdENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpc2gucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV2lzaFR5cGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lzaFR5cGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2lzaFR5cGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lzaFR5cGUgPSBXaXNoVHlwZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2lzaFR5cGUubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoVHlwZS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJsb2dpbkZvcm0xXFxcIiBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiIHJvbGU9XFxcImZvcm1cXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiA4cHg7XFxcIiBbZm9ybUdyb3VwXT1cXFwibG9naW5Gb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChsb2dpbkZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwibG9naW5Gb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwibG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QsNGA0L7Qu9GMXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWxvZ2luRm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCS0L7QudGC0LhcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0b3AyMFxcXCI+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIFtmb3JtR3JvdXBdPVxcXCJyZWdpc3RlckZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHJlZ2lzdGVyRm9ybS52YWx1ZSlcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qm9C+0LPQuNC9PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS0gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS51c2VybmFtZVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBkZWJvdW5jZT1cXFwiNTAwMFxcXCIgdmFsaWRhdGlvbj1cXFwicmVtb3RlOnZtLnVzZXJOYW1lVW5pcXVlKCk6YWx0PdCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INC70L7Qs9C40L3QvtC8INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgnxtaW5fbGVuOjN8bWF4X2xlbjozMHxyZXF1aXJlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgLS0+ICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Rh9GC0L7QstGL0Lkg0LDQtNGA0LXRgTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIGRlYm91bmNlPVxcXCI1MDAwXFxcIiB2YWxpZGF0aW9uPVxcXCJyZW1vdGU6dm0uZW1haWxVbmlxdWUoKTphbHQ90J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0LDQtNGA0LXRgdC+0Lwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCcmVxdWlyZWR8ZW1haWx8bWluX2xlbjo2XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgIC0tPiAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snZW1haWwnXVxcXCIgdHlwZT1cXFwiZW1haWxcXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInZtLnJlZ2lzdGVyRm9ybS5wYXNzd29yZFxcXCIgZnJpZW5kbHktbmFtZT1cXFwi0J/QsNGA0L7Qu9GMXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLnBhc3N3b3JkXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZHxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgIC0tPiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0LDRgNC+0LvRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgPCEtLSAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5jb25maXJtUGFzc3dvcmRcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1hdGNoOnZtLnJlZ2lzdGVyRm9ybS5wYXNzd29yZCxQYXNzd29yZDJ8bWluX2xlbjo2XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgLS0+ICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPiBcXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Qu9C90L7QtSDQuNC80Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZnVsbE5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZHxtaW5fbGVuOjJcXFwiLz5cXHJcXG4gICAgICAgICAgIC0tPiAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2Z1bGxOYW1lJ11cXFwiICB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LDRgtCwINGA0L7QttC00LXQvdC40Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gPGRhdGVwaWNrZXIgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snYmlydGhkYXknXVxcXCI+PC9kYXRlcGlja2VyPiBcXHJcXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIG5hbWU9XFxcImJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBzaG93LWJ1dHRvbi1iYXI9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYi1kYXRlcGlja2VyLXBvcHVwPVxcXCJkZC9NTU1NL3l5eXlcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XFxcInZtLnN0YXR1cy5vcGVuZWRcXFwiIGRhdGVwaWNrZXItb3B0aW9ucz1cXFwidm0uZGF0ZU9wdGlvbnNcXFwiIGNsb3NlLXRleHQ9XFxcItCX0LDQutGA0YvRgtGMXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdC1pbnB1dC1mb3JtYXRzPVxcXCJhbHRJbnB1dEZvcm1hdHNcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB2YS10b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcclxcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2JpcnRoZGF5J11cXFwiIHR5cGU9XFxcInRleHRcXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXJlZ2lzdGVyRm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj7QmNC30LzQtdC90LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIFtmb3JtR3JvdXBdPVxcXCJwYXNzd29yZEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHBhc3N3b3JkRm9ybS52YWx1ZSlcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCh0YLQsNGA0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJvbGRQYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWydvbGRQYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwibmV3UGFzc3dvcmRcXFwiIFtmb3JtQ29udHJvbF09XFxcInBhc3N3b3JkRm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QndC+0LLRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtkaXNhYmxlZF09XFxcIiFwYXNzd29yZEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JjQt9C80LXQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvaDE+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJmb3Jnb3RFbWFpbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImZvcmdvdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcmdvdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsQWRkcmVzc1xcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxBZGRyZXNzXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJmb3Jnb3RGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWZvcmdvdEZvcm0udmFsaWRcXFwiIHZhbHVlPVxcXCLQntGC0L/RgNCw0LLQuNGC0YxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcInJlc2V0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcInJlc2V0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocmVzZXRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cHJlICpuZ0lmPVxcXCJyZXNldEZvcm0uZXJyb3JzXFxcIj57e3Jlc2V0Rm9ybS5lcnJvcnMgfCBqc29ufX08L3ByZT5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbEFkZHJlc3NcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlc2V0Rm9ybS5jb250cm9sc1snZW1haWwnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L3QvtCy0L7Qs9C+INC/0LDRgNC+0LvRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXJlc2V0Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7Qn9C+0LzQtdC90Y/RgtGMINC/0LDRgNC+0LvRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvTwvaDE+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJ1bmNvbmZpcm1lZEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJ1bmNvbmZpcm1lZEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiICpuZ0lmPVxcXCIhZmluaXNoXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInVuY29uZmlybWVkRm9ybS5jb250cm9sc1snZW1haWwnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhdW5jb25maXJtZWRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7Qn9C10YDQtdGB0LvQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmaW5pc2hcXFwiPtCf0LjRgdGM0LzQviDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlIGNvbC14cy0xMiBvdmVyZmxvd2FibGVcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QmtC+0LzQsNC90LTQsDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCYPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0JI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QnTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCfPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Ky8tPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0J48L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5Pjx0cj48dGQ+MTwvdGQ+PHRkPtCb0LjQstC10YDQv9GD0LvRjFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+ODwvdGQ+PHRkPjI8L3RkPjx0ZD4xPC90ZD48dGQ+MTY8L3RkPjx0ZD4yNjwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjI8L3RkPjx0ZD7Qp9C10LvRgdC4XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD44PC90ZD48dGQ+MTwvdGQ+PHRkPjI8L3RkPjx0ZD4xNzwvdGQ+PHRkPjI1PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MzwvdGQ+PHRkPtCc0LDQvdGH0LXRgdGC0LXRgCDQodC40YLQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NzwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+MTU8L3RkPjx0ZD4yNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjQ8L3RkPjx0ZD7QkNGA0YHQtdC90LDQu1xcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NzwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+MTM8L3RkPjx0ZD4yNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjU8L3RkPjx0ZD7QotC+0YLRgtC10L3RhdGN0LxcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjU8L3RkPjx0ZD42PC90ZD48dGQ+MDwvdGQ+PHRkPjk8L3RkPjx0ZD4yMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjY8L3RkPjx0ZD7QnNCw0L3Rh9C10YHRgtC10YAg0K7QvdCw0LnRgtC10LRcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjU8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD4xODwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjc8L3RkPjx0ZD7QrdCy0LXRgNGC0L7QvVxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+MjwvdGQ+PHRkPjE4PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+ODwvdGQ+PHRkPtCj0L7RgtGE0L7RgNC0XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD40PC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD4tNDwvdGQ+PHRkPjE1PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+OTwvdGQ+PHRkPtCR0LXRgNC90LvQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NDwvdGQ+PHRkPjI8L3RkPjx0ZD41PC90ZD48dGQ+LTQ8L3RkPjx0ZD4xNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEwPC90ZD48dGQ+0KHQsNGD0YLQs9C10LzQv9GC0L7QvVxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+MDwvdGQ+PHRkPjEzPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTE8L3RkPjx0ZD7QktC10YHRgiDQkdGA0L7QvNCy0LjRh1xcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+LTM8L3RkPjx0ZD4xMzwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEyPC90ZD48dGQ+0KHRgtC+0Log0KHQuNGC0LhcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD40PC90ZD48dGQ+NDwvdGQ+PHRkPi01PC90ZD48dGQ+MTM8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMzwvdGQ+PHRkPtCR0L7RgNC90LzRg9GCXFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjU8L3RkPjx0ZD4tMzwvdGQ+PHRkPjEyPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTQ8L3RkPjx0ZD7Qm9C10YHRgtC10YBcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+NTwvdGQ+PHRkPi01PC90ZD48dGQ+MTI8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNTwvdGQ+PHRkPtCc0LjQtNC70YHQsdGA0L5cXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjI8L3RkPjx0ZD41PC90ZD48dGQ+NDwvdGQ+PHRkPi0yPC90ZD48dGQ+MTE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNjwvdGQ+PHRkPtCa0YDQuNGB0YLQsNC7INCf0Y3Qu9Cw0YFcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4yPC90ZD48dGQ+NjwvdGQ+PHRkPi0zPC90ZD48dGQ+MTE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNzwvdGQ+PHRkPtCS0LXRgdGCINCl0Y3QvFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjI8L3RkPjx0ZD42PC90ZD48dGQ+LTk8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE4PC90ZD48dGQ+0KXQsNC70LtcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+NzwvdGQ+PHRkPi0xNDwvdGQ+PHRkPjEwPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTk8L3RkPjx0ZD7QodGD0L7QvdGB0LhcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjE8L3RkPjx0ZD4yPC90ZD48dGQ+ODwvdGQ+PHRkPi0xMTwvdGQ+PHRkPjU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4yMDwvdGQ+PHRkPtCh0LDQvdC00LXRgNC70LXQvdC0XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjg8L3RkPjx0ZD4tMTI8L3RkPjx0ZD41PC90ZD48L3RyPlxcclxcbjwvdGJvZHk+PC90YWJsZT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9lcGxUYWJsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgbmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3AgXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBjb2wteHMtMyBjb2wtc20tMyBsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICA8bGk+PGEgaWQ9XFxcImJhY2stdG9wXFxcIiBocmVmPVxcXCIjXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiPtCS0LLQtdGA0YU8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L3NwYW4+INCn0LjRgtCw0YLRjCDQuy/RgSA8IS0tKDxzcGFuIG5nLWJpbmQ9XFxcInZtLnVucmVhZFBtQ291bnRcXFwiPjwvc3Bhbj4pLS0+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCIhYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YWNjb3VudC1zaWduaW4+PC9hY2NvdW50LXNpZ25pbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZm9yZ290UGFzc3dvcmQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnblxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJib3R0b21cXFwiIHRpdGxlPVxcXCLQl9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMP1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2lnbnVwJ11cXFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCJhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwidXNlckluZm8oe2lkOiB2bS51c2VySWQoKX0pXFxcIiBjbGFzcz1cXFwicGFkZGluZzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcIm5hdi1hdmF0YXJcXFwiIG5nLXNyYz1cXFwieyRyb290LnVzZXJJbWFnZX19XFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcInVzZXJJbmZvKHtpZDogdm0udXNlcklkKCl9KVxcXCI+0JzQvtC5INC/0YDQvtGE0LjQu9GMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+0JLRi9C50YLQuDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIHRvcDUwXFxcIj5cXHJcXG4gICAgPGhlYWRlciBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1zdGF0aWMtdG9wIHJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIi5uYXZiYXItY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvJ11cXFwiIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPtCd0LDQt9Cy0LDQvdC40LUg0YHQsNC50YLQsDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvJ11cXFwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gQGlmIChVc2VyLklzSW5Sb2xlKFxcXCJBZG1pbkZ1bGxcXFwiKSlcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICA8bGk+IEBIdG1sLkFjdGlvbkxpbmsoQ29tbW9uTWVzc2FnZXMuUm9sZXMsIFxcXCJJbmRleFxcXCIsIFxcXCJSb2xlXFxcIikgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgfSpALS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mb3J1bSddXFxcIj7QpNC+0YDRg9C8PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCAxXVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0J3QvtCy0L7RgdGC0Lg8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwicm9sZXMuaXNOZXdzbWFrZXJcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzQ2F0ZWdvcnknXVxcXCI+0JrQsNGC0LXQs9C+0YDQuNC4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcImJsb2coKVxcXCIgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0JHQu9C+0LPQuDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsaSBuZy1pZj1cXFwidm0uaXNBdXRob3IoKVxcXCI+PGEgdWktc3JlZj1cXFwiYmxvZ0VkaXQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYT48L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSB1aS1zcmVmPVxcXCJibG9nQ2F0ZWdvcmllcygpXFxcIj7QmtCw0YLQtdCz0L7RgNC40Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0KTQmiDQm9C40LLQtdGA0L/Rg9C70Yw8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWJIaXN0b3J5J11cXFwiPtCY0YHRgtC+0YDQuNGPPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGktLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlci9saXN0JywgMV1cXFwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0vbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tYXRlcmlhbENvbW1lbnQnXVxcXCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpPiA8YSBuZy1pZj1cXFwidm0uaXNOZXdzbWFrZXIoKSB8fCB2bS5pc0F1dGhvcigpXFxcIiB1aS1zcmVmPVxcXCJpbWFnZXMoe3BhdGg6ICdjb250ZW50J30pXFxcIj7QmNC30L7QsdGA0LDQttC10L3QuNGPPC9hPjwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViJ11cXFwiPtCa0LvRg9Cx0Ys8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL21hdGNoJ11cXFwiPtCc0LDRgtGH0Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL3J1bGVzJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+0J/RgNCw0LLQuNC70LA8L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiYmctc3VjY2Vzc1xcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCddXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj7Qn9C+0LbQtdC70LDQvdC40Y88L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIHRlbXBvcmFyeVxcclxcbiAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQ9XFxcIiRyb290LnJvbGVzXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJvZHktY29udGVudCByb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBuY3ktYnJlYWRjcnVtYj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tcHVzaC0zIGNvbC1zbS02IGNvbnRhaW5lci1mbHVpZFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNmNWRlYjNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08dWliLWFsZXJ0IGNsYXNzPVxcXCJyb3dcXFwiIG5nLXJlcGVhdD1cXFwiYWxlcnQgaW4gJHJvb3QuYWxlcnRzXFxcIiBkaXNtaXNzLW9uLXRpbWVvdXQ9XFxcIjUwMDBcXFwiIHR5cGU9XFxcInthbGVydC50eXBlfX1cXFwiIGNsb3NlPVxcXCJjbG9zZUFsZXJ0KCRpbmRleClcXFwiIG5nLWJpbmQ9XFxcImFsZXJ0Lm1zZ1xcXCI+PC91aWItYWxlcnQ+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiB1aS12aWV3IGF1dG9zY3JvbGw9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS1kaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIiB1aS12aWV3PVxcXCJuZXdzRmVlZFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCIgdWktdmlldz1cXFwiYmxvZ3NGZWVkXFxcIj48L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS1wdWxsLTYgY29sLXNtLTMgY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLSBhbGVydC1pbmZvIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMj7QrdC60YHQtdGC0LXRgCA8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvcnUvZi9mNy9FeGV0ZXJfQ2l0eV9Mb2dvLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogNDVwdFxcXCI+MzowPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0gYWxlcnQtZGFuZ2VyIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+INCb0YPRh9GI0LjQuSDQuNCz0YDQvtC6INC80LDRgtGH0LAg0YEg0K3QutGB0LXRgtC10YDQvtC8IDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cDovL3d3dy5teWxpdmVycG9vbC5ydS9pbWFnZXMvUGxheWVycy9TcXVhZDEyLTEzL0pvZV9BbGxlbi5wbmdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0JTQttC+INCQ0LvQu9C10L1cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyb3dcXFwiPjwvc2VjdGlvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHJpZ2h0LXNpZGViYXI+PC9yaWdodC1zaWRlYmFyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImJvdHRvbSBjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPHA+JmNvcHk7IEBEYXRlVGltZS5Ob3cuWWVhciAtIEBDb21tb25NZXNzYWdlcy5TaXRlVGl0bGVBZGRyZXNzPC9wPlxcclxcbiAgICA8L2Zvb3Rlcj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7Qv9C10YDQvdC40Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFtZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tlZGl0Rm9ybT8uY29udHJvbHNbJ2xvZ28nXS52YWx1ZX19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwibG9nb1xcXCIgbm92YWxpZGF0ZSByZWFkb25seSAvPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XFxcInVwbG9hZGVyXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0uY29udHJvbHNbJ2VuZ2xpc2hOYW1lJ10udmFsaWRcXFwiLz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2hpZGRlbl09XFxcIiF0aGlzLnVwbG9hZGVyPy5xdWV1ZVxcXCIgKGNsaWNrKT1cXFwidXBsb2FkKClcXFwiPtCX0LDQs9GA0YPQt9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QndCw0LfQstCw0L3QuNC1INC60LvRg9Cx0LAg0L3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbmdsaXNoTmFtZVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHRgtCw0LTQuNC+0L08L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhZGl1bVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyXFxyXFxuICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1YicsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWInLCBpdGVtLmlkLCAnZWRpdCddXFxcIj48c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVuZ2xpc2hOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tpdGVtLmxvZ299fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiAqbmdGb3I9XFxcImxldCBzZWN0aW9uIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRhbmdlclxcXCIgKm5nSWY9XFxcInNlY3Rpb24uc3Vic2VjdGlvbnMubGVuZ3RoID4gMCB8fCByb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwic2VjdGlvbi5uYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJyb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgdWktc3JlZj1cXFwic3Vic2VjdGlvbkVkaXQoe3NlY3Rpb25JZDogc2VjdGlvbi5pZH0pXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC/0L7QtNGB0LXQutGG0LjRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIiBbaGlkZGVuXT1cXFwic2VjdGlvbi5zdWJzZWN0aW9ucy5sZW5ndGggIT0gMFxcXCIgbmctY2xpY2s9XFxcInZtLnJlbW92ZVNlY3Rpb24oJGluZGV4KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj48LyEtLWRpdj4tLT5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiICpuZ0Zvcj1cXFwibGV0IHN1YnNlY3Rpb24gb2Ygc2VjdGlvbi5zdWJzZWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIGxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwic3Vic2VjdGlvbih7aWQ6IHN1YnNlY3Rpb24uaWR9KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwic3Vic2VjdGlvbi5uYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNtYWxsXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJzdWJzZWN0aW9uLmRlc2NyaXB0aW9uXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGEgbmctY2xpY2s9XFxcInZtLmFkZFNlY3Rpb24oKVxcXCI+0JTQvtCx0LDQstC40YLRjCDRgdC10LrRhtC40Y48L2E+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwiYWRkU2VjdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkBDb21tb25NZXNzYWdlcy5BZGRTZWN0aW9uPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiYWRkU2VjdGlvblxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld1NlY3Rpb25OYW1lXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+QENvbG9uc01lc3NhZ2VzLlNlY3Rpb25OYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuZXdTZWN0aW9uTmFtZVxcXCIgbmctbW9kZWw9XFxcInZtLnNlY3Rpb25OYW1lXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWRkU2VjdGlvbi4kaW52YWxpZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJtb2RhbERlbGV0ZUNvbmZpcm1hdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkBDb21tb25NZXNzYWdlcy5EZWxldGVDb25maXJtYXRpb248L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICBAQ29tbW9uTWVzc2FnZXMuRGVsZXRlP1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgYWx0PVxcXCJcXFwiIHN0eWxlPVxcXCJib3JkZXI6IDNweCBzb2xpZCAjY2NjO21hcmdpbjowIDE1cHggMTVweCAwO1xcXCIgc3JjPVxcXCJodHRwOi8vcGljdHVyZXMuZm9vdHltYWQubmV0L3VwbG9hZC8zNDIvNjkwNTAtMS5qcGdcXFwiIGFsaWduPVxcXCJsZWZ0XFxcIiB3aWR0aD1cXFwiMjUwcHhcXFwiPtCT0LvQsNCy0L3Ri9C5INGB0L7Qv9C10YDQvdC40LogXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIsIFxcXCLQrdCy0LXRgNGC0L7QvVxcXCIsINCx0YvQuyDRgdGE0L7RgNC80LjRgNC+0LLQsNC9INCyIDE4Nzgg0LPQvtC00YMg0JTQttC+0L3QvtC8INCl0L7Qu9C00LjQvdCz0L7QvCwg0LzQtdGB0YLQvdGL0Lwg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9C10Lwg0Lgg0LHRg9C00YPRidC40Lwg0LzRjdGA0L7QvCDQm9C40LLQtdGA0L/Rg9C70Y8uXFxyXFxuXFxyXFxuICAgICAgICDQntC90Lgg0L3QsNGH0LDQu9C4INC40LPRgNCw0YLRjCDQvdCwIFxcXCLQrdC90YTQuNC70LQg0KDQvtGD0LRcXFwiIOKAlCDQv9C+0LvQtSwg0LDRgNC10L3QtNC+0LLQsNC90L3QvtC8INGDINC/0LjQstC+0LLQsNGA0LAg0L/QviDQuNC80LXQvdC4INCU0LbQvtC9INCe0YDRgNC10LvQuy4g0JrQsNC6INGC0L7Qu9GM0LrQviBcXFwi0K3QstC10YDRgtC+0L1cXFwiINCy0YHRgtCw0Lsg0L3QsCDQvdC+0LPQuCDQpdC+0LvQtNC40L3QsyDQv9GA0LjRgdGC0YPQv9C40Lsg0Log0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0YMg0YTRg9GC0LHQvtC70YzQvdGL0YUg0YLRgNC40LHRg9C9INC90LAgXFxcItCt0L3RhNC40LvQtNC1XFxcIi4g0J7QtNC90LDQutC+INC/0L7RgdC70LUg0LLQvtC30L3QuNC60YjQuNGFINCyIDE4OTIg0LPQvtC00YMg0YDQsNC30L3QvtCz0LvQsNGB0LjQuSDQutC70YPQsSDRgNCw0YHQv9Cw0LvRgdGPINC90LAg0LTQstC1INCz0YDRg9C/0L/Riy4g0J7QtNC90LAg0LjQtyDQs9GA0YPQv9C/INC/0YDQuNC90Y/Qu9CwINGA0LXRiNC10L3QuNC1INC/0LXRgNC10LXRhdCw0YLRjCDQvdCwIFxcXCLQk9GD0LTQuNGB0L7QvSDQn9Cw0YDQulxcXCIsINCyINGC0L4g0LLRgNC10LzRjyDQutCw0Log0L7RgdGC0LDQstGI0LjQtdGB0Y8sINCy0L4g0LPQu9Cw0LLQtSDRgSDQpdC+0LvQtNC40L3Qs9C+0LwsINC+0YHQvdC+0LLQsNC70Lgg0L3QsCBcXFwi0K3QvdGE0LjQu9C0INCg0L7Rg9C0XFxcIiDQvdC+0LLRi9C5INGE0YPRgtCx0L7Qu9GM0L3Ri9C5INC60LvRg9CxIC0gXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIuINCl0L7Qu9C00LjQvdCzINC90LDQt9C90LDRh9C40Lsg0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDRgdCy0L7QtdCz0L4g0LTRgNGD0LPQsCwg0JTQttC+0L3QsCDQnNCw0LrQutC10L3Rgywg0LrQvtGC0L7RgNGL0Lkg0YHRgNCw0LfRgyDQvtGC0L/RgNCw0LLQuNC70YHRjyDQsiDQqNC+0YLQu9Cw0L3QtNC40Y4g0L3QsNCx0LjRgNCw0YLRjCDQutC+0LzQsNC90LTRgyDQuNCz0YDQvtC60L7Qsi4g0J/QvtGB0LvQtSDQs9C+0LTQsCDRgNCw0LHQvtGC0Ysg0JzQsNC60LrQtdC90LAg0YDQtdGI0LjQuywg0YfRgtC+INC90LDRgdGC0LDQu9C+INCy0YDQtdC80Y8g0L/QvtC00LDRgtGMINC30LDRj9Cy0LrRgyDQvdCwINCy0YHRgtGD0L/Qu9C10L3QuNC1INCyINCk0YPRgtCx0L7Qu9GM0L3Rg9GOINC70LjQs9GDLlxcclxcblxcclxcbiAgICAgICAg0KPQttC1INC/0L7RgdC70LUg0L/QtdGA0LLQvtCz0L4g0YHQtdC30L7QvdCwINCyINC70LjQs9C1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC/0L7QtNC90Y/Qu9GB0Y8g0LIg0LLRi9GB0YjQuNC5INC00LjQstC40LfQuNC+0L0sINC+0LTQvdCw0LrQviDQvtC9INC/0L4t0L/RgNC10LbQvdC10LzRgyDQvtGB0YLQsNCy0LDQu9GB0Y8g0LIg0YLQtdC90Lgg0YHQstC+0LjRhSDRgdC+0YHQtdC00LXQuSDQuNC3IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIiwg0LAg0LHQvtC70YzRiNC40L3RgdGC0LLQviDQvNC10YHRgtC90YvRhSDQttC40YLQtdC70LXQuSDQvtGC0LrQsNC30YvQstCw0LvQuNGB0Ywg0YXQvtC00LjRgtGMINC90LAg0LzQsNGC0YfQuCDQutC+0LzQsNC90LTRiywg0LLRgdC1INC40LPRgNC+0LrQuCDQutC+0YLQvtGA0L7QuSDQsdGL0LvQuCDRiNC+0YLQu9Cw0L3QtNGG0LDQvNC4LiDQn9C10YDQstGL0Lkg0YHQtdC30L7QvSDQv9GA0L7RiNC10Lsg0L3QtdGD0LTQsNGH0L3Qviwg0Lgg0LrQu9GD0LEg0LLRi9Cx0YvQuyDQstC+INCS0YLQvtGA0L7QuSDQtNC40LLQuNC30LjQvtC9LiDQnNCw0LrQutC10L3QsCDQv9C+0LrQu9GP0LvRgdGPINCy0LXRgNC90YPRgtGM0YHRjyDQsiDQstGL0YHRiNGD0Y4g0LvQuNCz0YMg0YfQtdGA0LXQtyDQtNCy0LXQvdCw0LTRhtCw0YLRjCDQvNC10YHRj9GG0LXQsiwg0YfRgtC+INC4INC/0YDQvtC40LfQvtGI0LvQviDQsdC70LDQs9C+0LTQsNGA0Y8g0LXQs9C+INGG0LXQu9C10YPRgdGC0YDQtdC80LvQtdC90L3QvtGB0YLQuCDQuCDQvdCw0YHRgtC+0LnRh9C40LLQvtGB0YLQuCwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRh9C10LzQv9C40L7QvdC+0Lwg0LLRgtC+0YDQvtCz0L4g0LTQuNCy0LjQt9C40L7QvdCwINC4INC/0YDQvtC00LLQuNCz0LDQtdGC0YHRjyDQsiDQv9C10YDQstGL0LkuINCd0LAg0Y3RgtC+0YIg0YDQsNC3INC+0L3QuCDQt9Cw0LLQtdGA0YjQuNC70Lgg0YHQtdC30L7QvSDQvdCwINC90LDQtNC10LbQvdC+0Lwg0L/Rj9GC0L7QvCDQvNC10YHRgtC1LCDQstGL0YjQtSBcXFwi0K3QstC10YDRgtC+0L3QsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQn9C10YDQstGL0Lkg0YfQtdC80L/QuNC+0L3RgdC60LjQuSDRgtC40YLRg9C7IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INCyINGB0LXQt9C+0L3QtSAxOTAwLzAxLiDQp9C10YDQtdC3INC00LLQsCDQs9C+0LTQsCDQv9C+0YHQu9C1INGN0YLQvtCz0L4gXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstGL0LHRi9C70Lgg0LjQtyDQstGL0YHRiNC10Lkg0LvQuNCz0LgsINC90L4g0LLQtdGA0L3Rg9C70LjRgdGMINGC0YPQtNCwINGB0L/Rg9GB0YLRjyDQs9C+0LQg0Lgg0LIg0YLQvtC8INGB0LXQt9C+0L3QtSDQstC90L7QstGMINGB0YLQsNC70Lgg0L/QvtCx0LXQtNC40YLQtdC70Y/QvNC4INGH0LXQvNC/0LjQvtC90LDRgtCwLiDQkiDQutCw0YfQtdGB0YLQstC1INC90LDQs9GA0LDQtNGLINGA0YPQutC+0LLQvtC00YHRgtCy0L4g0LrQu9GD0LHQsCDQv9GA0LjQvdGP0LvQviDRgNC10YjQtdC90LjQtSDQv9C+0YHRgtGA0L7QuNGC0Ywg0LTQu9GPINCx0L7Qu9C10LvRjNGJ0LjQutC+0LIg0L3QvtCy0YPRjiDRgtGA0LjQsdGD0L3RgywgXFxcItCh0L/QuNC+0L0g0JrQvtC/XFxcIiwg0L/QvtC30LbQtSDRgdGC0LDQstGI0YPRjiDQu9C10LPQtdC90LTQsNGA0L3QvtC5LiDQotCw0LrQvtC1INC90LDQt9Cy0LDQvdC40LUg0YLRgNC40LHRg9C90LAg0L/QvtC70YPRh9C40LvQsCDQsiDRh9C10YHRgtGMINGF0L7Qu9C80LAsINGA0LDRgdC/0L7Qu9C+0LbQtdC90L3QvtCz0L4g0LIg0Y7QttC90L4t0LDRhNGA0LjQutCw0L3RgdC60L7QuSDQv9GA0L7QstC40L3RhtC40Lgg0J3QsNGC0LDQuywg0LPQtNC1INCy0L4g0LLRgNC10LzRjyDQstGC0L7RgNC+0Lkg0LDQvdCz0LvQvi3QsdGD0YDRgdC60L7QuSDQstC+0LnQvdGLINC80LXRgNGB0LjRgdCw0LnQtNGB0LrQuNC5INC/0L7Qu9C6INC/0L7QvdC10YEg0LHQvtC70YzRiNC40LUg0L/QvtGC0LXRgNC4LiDQkiDQv9C10YDQtdCy0L7QtNC1INGBINCw0YTRgNC40LrQsNCw0L3RgSBcXFwi0YHQv9C40L7QvSDQutC+0L9cXFwiINC+0LfQvdCw0YfQsNC10YIgXFxcItC80LXRgdGC0L4sINC00LDRjtGJ0LXQtSDRhdC+0YDQvtGI0LjQuSDQvtCx0LfQvtGAXFxcIi4g0JIgMTkyOCDQs9C+0LTRgyDRgtGA0LjQsdGD0L3QsCDQsdGL0LvQsCDRgNCw0YHRiNC40YDQtdC90LAg0Lgg0L7QsdGA0LXQu9CwINC60YDRi9GI0YMsINC90LDQtNC10LbQvdC+INC30LDRidC40YnQsNCy0YjRg9GOINC+0YIg0L3QtdC/0L7Qs9C+0LTRiyAzMCAwMDAg0LHQvtC70LXQu9GM0YnQuNC60L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCf0L7RgdC70LUg0J/QtdGA0LLQvtC5INC80LjRgNC+0LLQvtC5INCy0L7QudC90YsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0Lsg0L7QsdC70LDQtNCw0YLQtdC70LXQvCDQtdGJ0LUg0LTQstGD0YUg0YfQtdC80L/QuNC+0L3RgdC60LjRhSDRgtC40YLRg9C70L7Qsiwg0L3QviDQv9C+0YHQu9C1INCS0YLQvtGA0L7QuSDQvNC40YDQvtCy0L7QuSDQvdCw0YfQsNC70YHRjyDRgdC/0LDQtCDQuNCz0YDQvtCy0L7QuSDRhNC+0YDQvNGLLCDRhdC+0YLRjyDQsiAxOTUwINCz0L7QtNGDIFxcXCLQutGA0LDRgdC90YvQvFxcXCIg0LLRgdC1INC20LUg0YPQtNCw0LvQvtGB0Ywg0LLRi9C50YLQuCDQsiDRhNC40L3QsNC7INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4LCDQs9C00LUg0L7QvdC4INGD0YHRgtGD0L/QuNC70LggXFxcItCQ0YDRgdC10L3QsNC70YNcXFwiLiDQodC10LfQvtC9IDE5NTMvNTQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNCy0LXRgNGI0LjQuyDQvdCwINC/0L7RgdC70LXQtNC90LXQvCDQvNC10YHRgtC1INC4INCy0YvQsdGL0Lsg0LjQtyDQv9C10YDQstC+0LPQviDQtNC40LLQuNC30LjQvtC90LAuINCf0L7RgdC70LUg0L3QtdGB0LrQvtC70YzQutC40YUg0L3QtdGD0LTQsNGH0L3Ri9GFINC70LXRgiDQvdCwINC/0L7QvNC+0YnRjCDQutC70YPQsdGDINC/0YDQuNGI0LXQuyDQkdC40LvQuyDQqNC10L3QutC70LguINCe0L0g0LHRi9C7INC90LDQt9C90LDRh9C10L0g0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDQsiAxOTU5INCz0L7QtNGDINC4INC30LAg0YHQu9C10LTRg9GO0YnQuNC1INGH0LXRgtGL0YDQvdCw0LTRhtCw0YLRjCDQu9C10YIg0YHQstC+0LXQuSDRgNCw0LHQvtGC0Ysg0L/RgNC10LLRgNCw0YLQuNC7IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCyINCy0LXQu9C40YfQsNC50YjQuNC5INC60LvRg9CxINCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0YTRg9GC0LHQvtC70LAuINCX0LAg0L/QtdGA0LLRi9C1INC00LLQtdC90LDQtNGG0LDRgtGMINC80LXRgdGP0YbQtdCyINC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstCwINC00LLQsNC00YbQsNGC0Ywg0YfQtdGC0YvRgNC1INC40LPRgNC+0LrQsCDQv9C+0LrQuNC90YPQu9C4INC60L7QvNCw0L3QtNGDLiDQkiDRgdC10LfQvtC90LUgMTk2My82NCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQsiDRiNC10YHRgtC+0Lkg0YDQsNC3INGB0YLQsNC7INGH0LXQvNC/0LjQvtC90L7QvCDQstGL0YHRiNC10Lkg0LvQuNCz0LgsINCwINCyINGB0LvQtdC00YPRjtGJ0LXQvCDQs9C+0LTRgyDQutC+0LvQu9C10LrRhtC40Y8g0YLRgNC+0YTQtdC10LIg0L/QvtC/0L7Qu9C90LjQu9Cw0YHRjCDQutGD0LHQutC+0Lwg0JDQvdCz0LvQuNC4LCDQsdC70LDQs9C+0LTQsNGA0Y8g0L/QvtCx0LXQtNC1INC90LDQtCBcXFwi0JvQuNC00YFcXFwiINCyINGE0LjQvdCw0LvQtSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y8uINCd0L4g0L/QvtCx0LXQtNC90LDRjyDRgdC10YDQuNGPINC90LAg0Y3RgtC+0Lwg0L3QtSDQt9Cw0LrQvtC90YfQuNC70LDRgdGMLCDQsiDRgdC10LfQvtC90LUgMTk2NS82NiBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0LLRi9C40LPRgNCw0LvQuCDQs9C70LDQstC90YvQuSDRgtC40YLRg9C7INC70LjQs9C4LlxcclxcblxcclxcbiAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5INGC0YDQvtGE0LXQuSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQv9C+0LvRg9GH0LjQuyDQu9C40YjRjCDRgdC/0YPRgdGC0Y8g0YHQtdC80Ywg0LvQtdGCLCDQsiDRgdC10LfQvtC90LUgMTk3Mi83Mywg0L3QsCDRjdGC0L7RgiDRgNCw0Lcg0JrRg9Cx0L7QuiDQo9CV0KTQkCwg0LAg0YHQv9GD0YHRgtGPINC10YnQtSDQs9C+0LQgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC70Lgg0L7QsdC70LDQtNCw0YLQtdC70Y/QvNC4INC60YPQsdC60LAg0JDQvdCz0LvQuNC4LiDQn9C+0YHQu9C1INGN0YLQvtCz0L4g0KjQtdC90LrQu9C4INC90LXQvtC20LjQtNCw0L3QvdC+INGA0LXRiNC40Lsg0LfQsNCy0LXRgNGI0LjRgtGMINC60LDRgNGM0LXRgNGDINC4INC/0LXRgNC10LTQsNC7INC/0L7Qu9C90L7QvNC+0YfQuNGPINGB0LLQvtC10Lkg0L/RgNCw0LLQvtC5INGA0YPQutC1IOKAlCDQkdC+0LHRgyDQn9C10LnRgdC70LguINCT0YDQvtC80LrQuNGFINC/0L7QsdC10LQg0L3QtSDQv9GA0LjRiNC70L7RgdGMINC00L7Qu9Cz0L4g0LbQtNCw0YLRjCwg0YPQttC1INC90LAg0LLRgtC+0YDQvtC5INCz0L7QtCDRgNCw0LHQvtGC0Ysg0L3QvtCy0L7Qs9C+INGC0YDQtdC90LXRgNCwLCDQsiDRgdC10LfQvtC90LUgMTk3NS83NiwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0YfQtdC80L/QuNC+0L3QsNGCINC4INCa0YPQsdC+0Log0KPQldCk0JAuINCn0LXRgNC10Lcg0LPQvtC0IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQu9C4INGH0LXQvNC/0LjQvtC90LDQvNC4INC70LjQs9C4LCDQt9Cw0LLQvtC10LLQsNC70Lgg0JrRg9Cx0L7QuiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7Qsiwg0L7QsdGL0LPRgNCw0LIg0LIg0YTQuNC90LDQu9C1IFxcXCLQkdC+0YDRg9GB0YHQuNGOINCc0LXQvdGF0LXQvdCz0LvQsNC00LHQsNGFXFxcIiwg0L3QviDQsiDRhNC40L3QsNC70YzQvdC+0Lwg0LzQsNGC0YfQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDRg9GB0YLRg9C/0LjQu9C4IFxcXCLQnNCw0L3Rh9C10YHRgtC10YAg0K7QvdCw0LnRgtC10LRcXFwiINGB0L4g0YHRh9C10YLQvtC8IDI6MS4g0JIg0YHQtdC30L7QvdC1IDE5NzcvNzggXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0Lsg0L/QtdGA0LLRi9C8INCx0YDQuNGC0LDQvdGB0LrQuNC8INC60LvRg9Cx0L7QvCwg0LrQvtC80YMg0YPQtNCw0LvQvtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQt9Cy0LDQvdC40LUg0LXQstGA0L7Qv9C10LnRgdC60L7Qs9C+INGH0LXQvNC/0LjQvtC90LAsINC+0LTQtdGA0LbQsNCyINC/0L7QsdC10LTRgyDQsiDRhNC40L3QsNC70LUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGPINC90LDQtCDQsdC10LvRjNCz0LjQudGB0LrQuNC8INC60LvRg9Cx0L7QvCBcXFwi0JHRgNGO0LPQs9C1XFxcIiDRgdC+INGB0YfQtdGC0L7QvCAxOjAuXFxyXFxuXFxyXFxuICAgICAgICDQl9Cw0YLQtdC8INC00LLQsCDQs9C+0LTQsCDQv9C+0LTRgNGP0LQsINCyINGB0LXQt9C+0L3QsNGFIDE5NzgvNzkg0LggMTk3OS84MCwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0YfQtdC80L/QuNC+0L3QvtC8INGB0YLRgNCw0L3Riy4gMTk4MSDQs9C+0LQg0YHRgtCw0Lsg0L7Rh9C10YDQtdC00L3QvtC5INGP0YDQutC+0Lkg0YHRgtGA0LDQvdC40YbQtdC5INCyINC40YHRgtC+0YDQuNC4INC60LvRg9Cx0LAsINCyINGC0YDQtdGC0LjQuSDRgNCw0Lcg0LIg0YHQstC+0LXQuSDQuNGB0YLQvtGA0LjQuCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINGB0YLQsNC90L7QstGP0YLRgdGPINC+0LHQu9Cw0LTQsNGC0LXQu9GP0LzQuCDQmtGD0LHQutCwINC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtC00LXRgNC20LDQsiDQv9C+0LHQtdC00YMg0L3QsNC0INC80LDQtNGA0LjQtNGB0LrQuNC8IFxcXCLQoNC10LDQu9C+0LxcXFwiINCyINGE0LjQvdCw0LvQtSDRgtGD0YDQvdC40YDQsCwg0LAg0YLQsNC60LbQtSDQstGL0LjQs9GA0YvQstCw0Y7RgiDQmtGD0LHQvtC6INCb0LjQs9C4LiDQkiDRgdC10LfQvtC90LDRhSAxOTgxLzgyINC4IDE5ODIvODMgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNCy0L7QtdCy0YvQstCw0LXRgiDQtdGJ0LUg0LTQstCwINCz0LvQsNCy0L3Ri9GFINGE0YPRgtCx0L7Qu9GM0L3Ri9GFINGC0YDQvtGE0LXRjyDRgdGC0YDQsNC90YssINC/0L7RgdC70LUg0YfQtdCz0L4g0J/QtdC50YHQu9C4INC/0YDQuNC90LjQvNCw0LXRgiDRgNC10YjQtdC90LjQtSDRg9C50YLQuCDQvdCwINC/0LXQvdGB0LjRji4g0JfQsCDQtNC10LLRj9GC0Ywg0LvQtdGCINC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstCwINC60LvRg9Cx0L7QvCDQtdC80YMg0YjQtdGB0YLRjCDRgNCw0Lcg0L/RgNC40YHRg9C20LTQsNC70L7RgdGMINC30LLQsNC90LjQtSBcXFwi0JvRg9GH0YjQuNC5INGC0YDQtdC90LXRgCDQs9C+0LTQsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQndCwINC/0L7RgdGCINCz0LvQsNCy0L3QvtCz0L4g0YLRgNC10L3QtdGA0LAg0LfQsNGB0YLRg9C/0LjQuyDQlNC20L4g0KTRjdCz0LDQvSwg0Lgg0LIg0L/QtdGA0LLRi9C5INC20LUg0LPQvtC0INC/0L7QtCDQtdCz0L4g0YDRg9C60L7QstC+0LTRgdGC0LLQvtC8INC60LvRg9CxINCy0YvQuNCz0YDQsNC7INGH0LXQvNC/0LjQvtC90LDRgiDQkNC90LPQu9C40LgsINCa0YPQsdC+0Log0JvQuNCz0Lgg0Lgg0JrRg9Cx0L7QuiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7Qsiwg0L7QsdGL0LPRgNCw0LIgXFxcItCg0L7QvNGDXFxcIiDQsiDQmNGC0LDQu9C40LguINCh0LvQtdC00YPRjtGJ0LjQuSDRgdC10LfQvtC9INCx0YvQuyDQvtC80YDQsNGH0LXQvSDRgdGC0YDQsNGI0L3QvtC5INGC0YDQsNCz0LXQtNC40LXQuS4g0JLQviDQstGA0LXQvNGPINGE0LjQvdCw0LvQsCDQmtGD0LHQutCwINC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyINC/0YDQvtGC0LjQsiBcXFwi0K7QstC10L3RgtGD0YHQsFxcXCIg0L3QsCDRgdGC0LDQtNC40L7QvdC1IFxcXCLQrdC50LfQtdC70YxcXFwiINCy0L7Qt9C90LjQutC70Lgg0LHQtdGB0L/QvtGA0Y/QtNC60LguINCf0LXRgNC10LrRgNGL0YLQuNC1INC90LAg0YHRgtCw0LTQuNC+0L3QtSDRgNGD0YXQvdGD0LvQviDQuCDRg9C90LXRgdC70L4g0YEg0YHQvtCx0L7QuSDQttC40LfQvdC4IDM4INCx0L7Qu9C10LvRjNGJ0LjQutC+0LIg0LjRgtCw0LvRjNGP0L3RgdC60L7Qs9C+INC60LvRg9Cx0LAuINCSINC60L7QvdC10YfQvdC+0Lwg0YHRh9C10YLQtSDQvtCx0LvQsNC00LDRgtC10LvQtdC8INGC0YDQvtGE0LXRjyDRgdGC0LDQuyBcXFwi0K7QstC10L3RgtGD0YFcXFwiLCDQsCDQsNC90LPQu9C40LnRgdC60LjQvCDQutC70YPQsdCw0Lwg0L3QsCDQvdC10L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C5INGB0YDQvtC6INC30LDQv9GA0LXRgtC40LvQuCDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINC10LLRgNC+0L/QtdC50YHQutC40YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUuXFxyXFxuXFxyXFxuICAgICAgICDQkiAxOTg2INCz0L7QtNGDINCa0LXQvdC90Lgg0JTQsNC70LPQu9C40Ygg0LHRi9C7INC90LDQt9C90LDRh9C10L0g0LjQs9GA0LDRjtGJ0LjQvCDRgtGA0LXQvdC10YDQvtC8LiDQkiDRjdGC0L7QvCDQttC1INGB0LXQt9C+0L3QtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDRh9C10LzQv9C40L7QvdCw0YIg0Lgg0JrRg9Cx0L7QuiDQkNC90LPQu9C40LguINCSINGB0LXQt9C+0L3QtSAxOTg3Lzg4IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQvdC+0LLRj9GC0YHRjyDRh9C10LzQv9C40L7QvdCw0LzQuCDRgdGC0YDQsNC90YssINC+0LTQvdCw0LrQviDQsiDRhNC40L3QsNC70LUg0JrRg9Cx0LrQsCDQkNC90LPQu9C40Lgg0YPRgdGC0YPQv9Cw0Y7RgiBcXFwi0KPQuNC80LHQu9C00L7QvdGDXFxcIi4g0KHQtdC30L7QvSAxOTg4Lzg5INGB0YLQsNC7INGF0YPQtNGI0LjQvCDQsiDQuNGB0YLQvtGA0LjQuCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIi4g0JLQviDQstGA0LXQvNGPINC/0L7Qu9GD0YTQuNC90LDQu9GM0L3QvtCz0L4g0LzQsNGC0YfQsCDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDQv9GA0L7RgtC40LIgXFxcItCd0L7RgtGC0LjQvdCz0LXQvCDQpNC+0YDQtdGB0YJcXFwiINC90LAg0YHRgtCw0LTQuNC+0L3QtSBcXFwi0KXQuNC70LvRgdCx0L7RgNC+XFxcIiA5NiDQsdC+0LvQtdC70YzRidC40LrQvtCyIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC/0L7Qs9C40LHQu9C4INCyINGA0LXQt9GD0LvRjNGC0LDRgtC1INC/0LXRgNC10L/QvtC70L3QtdC90LjRjyDRgtGA0LjQsdGD0L3RiyBcXFwi0JvQtdC/0L/QuNC90LMg0JvQtdC50L1cXFwiLiDQn9C+0LfQttC1IFxcXCLQmtGA0LDRgdC90YvQtVxcXCIg0LLRi9GI0LvQuCDQsiDRhNC40L3QsNC7LCDQs9C00LUg0LLRgdGC0YDQtdGC0LjQu9C40YHRjCDRgSBcXFwi0K3QstC10YDRgtC+0L3QvtC8XFxcIi4g0J/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDQvNCw0YLRh9CwINCx0L7Qu9C10LvRjNGJ0LjQutC4INC+0LHQtdC40YUg0LrQvtC80LDQvdC0INC/0LXQu9C4IFxcXCJZb3Ugd2lsbCBuZXZlciB3YWxrIGFsb25lXFxcIiDQuCDQv9GA0L7QstC10LvQuCDQvNC40L3Rg9GC0YMg0LzQvtC70YfQsNC90LjRjywg0LIg0L/QsNC80Y/RgtGMINC+INC/0L7Qs9C40LHRiNC40YUg0L3QsCBcXFwi0KXQuNC70LvRgdCx0L7RgNC+XFxcIi4gXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L/QvtCx0LXQtNC40Lsg0YHQviDRgdGH0LXRgtC+0LwgMzoyINCx0LvQsNCz0L7QtNCw0YDRjyDQtNCy0YPQvCDQs9C+0LvQsNC8LCDQt9Cw0LHQuNGC0YvQvCDQstGL0YjQtdC00YjQuNC8INC90LAg0LfQsNC80LXQvdGDINCY0LDQvdC+0Lwg0KDQsNGI0LXQvC4g0JPQu9Cw0LLQvdGL0Lkg0YLRgNC+0YTQtdC5INC70LjQs9C4INGC0LDQutC20LUg0LHRi9C7INC/0YDQsNC60YLQuNGH0LXRgdC60Lgg0LIg0YDRg9C60LDRhSDRgyBcXFwi0LrRgNCw0YHQvdGL0YVcXFwiLCDRh9GC0L7QsdGLINGN0YLQvtC80YMg0L/QvtC80LXRiNCw0YLRjCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIg0L3Rg9C20L3QviDQsdGL0LvQviDQstGL0LjQs9GA0LDRgtGMINC90LAgXFxcItCt0L3RhNC40LvQtNC1XFxcIiDRgSDQv9GA0LXQuNC80YPRidC10YHRgtCy0L7QvCDQsiDQtNCy0LAg0LzRj9GH0LAuINCaINC60L7QvdGG0YMg0YDQtdGI0LDRjtGJ0LXQs9C+INC80LDRgtGH0LAgXFxcItCQ0YDRgdC10L3QsNC7XFxcIiDQstC10Lsg0LIg0YHRh9C10YLQtSAxOjAsINC90L4g0LPQvtC7INCc0LDQudC60LvQsCDQotC+0LzQsNGB0LAsINC30LDQsdC40YLRi9C5INGD0LbQtSDQsiDQtNC+0LHQsNCy0LvQtdC90L3QvtC1INCy0YDQtdC80Y8sINC/0L7RhdC+0YDQvtC90LjQuyDQvdCw0LTQtdC20LTRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDQvdCwINC+0YfQtdGA0LXQtNC90L7QuSDRgtGA0L7RhNC10LnQvdGL0Lkg0LTRg9Cx0LvRjC4g0J/QvtGB0LvQtSDQvtC60L7QvdGH0LDQvdC40Y8g0YHQtdC30L7QvdCwINCa0LXQvdC90Lgg0JTQsNC70LPQu9C40Ygg0L7RgdGC0LDQstC40Lsg0YHQstC+0Lkg0L/QvtGB0YIsINC+0LHRitGP0YHQvdC40LIg0Y3RgtC+INGI0L7QutC40YDQvtCy0LDQstGI0LXQtSDQvNC90L7Qs9C40YUg0YDQtdGI0LXQvdC40LUg0L3QtdGA0LLQvdGL0Lwg0L/QtdGA0LXQvdCw0L/RgNGP0LbQtdC90LjQtdC8LlxcclxcblxcclxcbiAgICAgICAg0JLRgNC10LzQtdC90L3QviDQt9Cw0LzQtdC90LjRgtGMINCU0LDQu9Cz0LvQuNGI0LAg0LHRi9C7INC/0YDQuNC30LLQsNC9INCg0L7QvdC90Lgg0JzQvtGA0LDQvSwg0L/RgNC10LbQtNC1INGH0LXQvCDQsiDQsNC/0YDQtdC70LUgMTk5MSDQs9C+0LTQsCDQvdCwINC/0L7RgdGCINCz0LvQsNCy0L3QvtCz0L4g0YLRgNC10L3QtdGA0LAg0L3QtSDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQk9GA0Y3QvCDQodGD0L3QtdGB0YEuINCe0L0g0L/RgNC40LLQtdC7INCyINC60L7QvNCw0L3QtNGDINC80L3QvtC20LXRgdGC0LLQviDQvdC+0LLRi9GFINC40LPRgNC+0LrQvtCyLCDQvdC+INC10LPQviDRgdGC0YDQvtCz0LjQuSDRgdGC0LjQu9GMINGA0LDQsdC+0YLRiyDQvdC1INC/0L7Qu9GM0LfQvtCy0LDQu9GB0Y8g0L/QvtC/0YPQu9GP0YDQvdC+0YHRgtGM0Y4g0Lgg0L3QtSDQv9C+0LzQvtCzINC60L7QvNCw0L3QtNC1INC/0L7QstGC0L7RgNC40YLRjCDRg9GB0L/QtdGFINC/0YDQvtGI0LvRi9GFINC70LXRgi4g0J3QsNGH0LjQvdCw0Y8g0YEg0Y3RgNGLINCh0YPQvdC90LXRgdCwINC4INC00L4g0YHQuNGFINC/0L7RgCDQutC70YPQsSDQv9GA0LXRgdC70LXQtNGD0LXRgiDQvNC90L7QttC10YHRgtCy0L4g0L/RgNC+0LHQu9C10LwuXFxyXFxuXFxyXFxuICAgICAgICDQoNC+0Lkg0K3QstCw0L3RgSDQsiDRgdCy0L7QuSDQv9C10YDQstGL0Lkg0L/QvtC70L3Ri9C5INGB0LXQt9C+0L0g0YMg0YDRg9C70Y8g0LrQu9GD0LHQsCwg0LIgMTk5NSDQs9C+0LTRgywg0LLRi9C40LPRgNCw0Lsg0JrRg9Cx0L7QuiDQm9C40LPQuC4g0J3QtdGB0LzQvtGC0YDRjyDQvdCwINGC0L4sINGH0YLQviDQtdC80YMg0YPQtNCw0LvQvtGB0Ywg0L/QvtGB0YLRgNC+0LjRgtGMINC40L3RgtC10YDQtdGB0L3Rg9GOINC60L7QvNCw0L3QtNGDINC80L7Qu9C+0LTRi9GFINC40LPRgNC+0LrQvtCyLCDQvNC90L7Qs9C40LUg0LjQtyDQutC+0YLQvtGA0YvRhSDQv9GA0LjRiNC70Lgg0LjQtyDRjtC90L7RiNC10YHQutC+0Lkg0LrQvtC80LDQvdC00YsgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIsINC90LjQutCw0LrQuNGFINGB0LXRgNGM0LXQt9C90YvRhSDQv9C+0LHQtdC0INC10LzRgyDQvtC00LXRgNC20LDRgtGMINC90LUg0YPQtNCw0LvQvtGB0YwuINCR0L7Qu9C10LvRjNGJ0LjQutC4INC4INGA0YPQutC+0LLQvtC00YHRgtCy0L4g0YLRgNC10LHQvtCy0LDQu9C4INCz0YDQvtC80LrQuNGFINGD0YHQv9C10YXQvtCyLCDQuCDQsiAxOTk4INCz0L7QtNGDINCyINC60LvRg9CxINCx0YvQuyDQv9GA0LjQs9C70LDRiNC10L0g0JbQtdGA0LDRgCDQo9C70YzQtSwg0LrQvtGC0L7RgNGL0Lkg0LTQvtC70LbQtdC9INCx0YvQuyDRgNCw0LfQtNC10LvQuNGC0Ywg0YLRgNC10L3QtdGA0YHQutC+0LUg0LrRgNC10YHQu9C+INGBINCg0L7QtdC8INCt0LLQsNC90YHQvtC8LiDQntC/0YvRgiDRgdC+0LLQvNC10YHRgtC90L7QuSDRgNCw0LHQvtGC0Ysg0L7QutCw0LfQsNC70YHRjyDQvdC10YPQtNCw0YfQvdGL0LwsINC4INCt0LLQsNC90YEg0L/QvtC60LjQvdGD0Lsg0LrQu9GD0LEsINC/0L7Qu9C+0LbQuNCyINGC0LXQvCDRgdCw0LzRi9C8INC60L7QvdC10YYgMzUg0L/QtdGA0LjQvtC00YMg0L/RgNC10LTQsNC90L3QvtC5INGB0LvRg9C20LHRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GOXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCj0LvRjNC1INC90LDRh9Cw0Lsg0YDQsNC30LLQuNCy0LDRgtGMINGB0L7RgdGC0LDQsiDQutC70LzQsNC90LTRiywg0L/RgNC40LPQu9Cw0YjQsNGPINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQvdC10LjQt9Cy0LXRgdGC0L3Ri9GFINC40LPRgNC+0LrQvtCyLCDQv9GA0Lgg0Y3RgtC+0Lwg0LXQs9C+INGB0L7QstC10YDRiNC10L3QvdC+INC90LUg0L/Rg9Cz0LDQu9C4INC60YDQuNGC0LjRh9C10YHQutC40LUg0L7RgtC30YvQstGLINGB0YDQtdC00YHRgtCyINC80LDRgdGB0L7QstC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LguINCV0LzRgyDRg9C00LDQu9C+0YHRjCDQt9C90LDRh9C40YLQtdC70YzQvdC+INGD0LvRg9GH0YjQuNGC0Ywg0LjQs9GA0YMg0LrQvtC80LDQvdC00Ysg0LIg0L7QsdC+0YDQvtC90LUsINC30LAg0YfRgtC+INCyIDIwMDEg0LPQvtC00YMg0L7QvSDQsdGL0Lsg0LLQvtC30L3QsNCz0YDQsNC20LTQtdC9INC/0Y/RgtGM0Y4g0YLRgNC+0YTQtdGP0LzQuCwg0LAgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L3QtSDQv9C+0YLQtdGA0L/QtdC7INC90Lgg0L7QtNC90L7Qs9C+INC/0L7RgNCw0LbQtdC90LjRjyDQsiDQutGD0LHQutC+0LLRi9GFINGB0L7RgNC10LLQvdC+0LLQsNC90LjRj9GFINGC0L7Qs9C+INGB0LXQt9C+0L3QsCDQuCDQutCy0LDQu9C40YTQuNGG0LjRgNC+0LLQsNC70YHRjyDQsiDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIuXFxyXFxuXFxyXFxuICAgICAgICDQndCwINGB0LvQtdC00YPRjtGJ0LjQuSDQs9C+0LQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHQtdGA0YzQtdC30L3QviDQv9GA0LXRgtC10L3QtNC+0LLQsNC7INC90LAg0L/QvtCx0LXQtNGDINCyINCf0YDQtdC80YzQtdGALdC70LjQs9C1INC4INCyINGC0L4g0LbQtSDQstGA0LXQvNGPINC90LXQv9C70L7RhdC+INGB0LXQsdGPINC/0YDQvtGP0LLQuNC7INCyINCb0LjQs9C1INGH0LXQvNC/0LjQvtC90L7Qsiwg0LTQvtCx0YDQsNCy0YjQuNGB0Ywg0LTQviDRh9C10YLQstC10YDRgtGM0YTQuNC90LDQu9CwINGB0L7RgNC10LLQvdC+0LLQsNC90LjRjywg0LPQtNC1INGD0YHRgtGD0L/QuNC7INC70LXQstC10YDQutGD0LfQtdC90YHQutC+0LzRgyBcXFwi0JHQsNC50LXRgNGDXFxcIiwg0LLRi9GI0LXQtNGI0LXQvNGDINCyINC40YLQvtCz0LUg0LIg0YTQuNC90LDQuyDRgtGD0YDQvdC40YDQsC5cXHJcXG5cXHJcXG4gICAgICAgINCY0Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgdC+INC30LTQvtGA0L7QstGM0LXQvCDQltC10YDQsNGA0LAg0KPQu9GM0LUsINCx0L7Qu9GM0YjRg9GOINGH0LDRgdGC0Ywg0YHQu9C10LTRg9GO0YnQtdCz0L4g0YHQtdC30L7QvdCwINC60L7QvNCw0L3QtNC+0Lkg0YTQsNC60YLQuNGH0LXRgdC60Lgg0YDRg9C60L7QstC+0LTQuNC7INCk0LjQuyDQotC+0LzQv9GB0L7QvSwg0L3QviDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQstC+0LXQvCDQsdGD0YLRgNGD0LzQvtCy0YHQutC+0LzRgyDQv9GA0L7RiNC70L7QvNGDINC10LzRgyDRg9C00LDQu9C+0YHRjCDRg9GB0L/QtdGI0L3QviDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDRjdGC0L7QuSDQt9Cw0LTQsNGH0LXQuS4g0JIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNC90Y/QuyDQstGC0L7RgNC+0LUg0LzQtdGB0YLQviwg0YPRgdGC0YPQv9C40LIg0LvQuNGI0YwgXFxcItCQ0YDRgdC10L3QsNC70YNcXFwiLCDQuCDQstC90L7QstGMINC/0L7Qu9GD0YfQuNC7INC/0YPRgtC10LLQutGDINCyINCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCh0LXQt9C+0L0gMjAwMy8wNCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQtdGA0YjQuNC7INC90LAg0YfQtdGC0LLQtdGA0YLQvtC8INC80LXRgdGC0LUsINC/0L7Qu9GD0YfQuNCyINGC0LXQvCDRgdCw0LzRi9C8INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/RgNC40L3Rj9GC0Ywg0YPRh9Cw0YHRgtC40LUg0LIg0JvQuNCz0LUg0KfQtdC80L/QuNC+0L3QvtCyINGB0LvQtdC00YPRjtGJ0LXQs9C+INGB0LXQt9C+0L3QsC4g0KDRg9C60L7QstC+0LTRgdGC0LLQviDQutC70YPQsdCwINGA0LXRiNC40LvQviwg0YfRgtC+INC90LDRgdGC0LDQu9CwINC/0L7RgNCwINC/0LXRgNC10LzQtdC9LiDQndC+0LLRi9C8INCz0LvQsNCy0L3Ri9C8INGC0YDQtdC90LXRgNC+0Lwg0LHRi9C7INC90LDQt9C90LDRh9C10L0g0KDQsNGE0LDRjdC70Ywg0JHQtdC90LjRgtC10YEsINCwINCj0LvRjNC1INGB0L7Qs9C70LDRgdC40LvRgdGPINC/0L7QutC40L3Rg9GC0Ywg0LrQu9GD0LEuXFxyXFxuXFxyXFxuICAgICAgICDQkdC10L3QuNGC0LXRgSDQvdC1INGB0YLQsNC7INGC0YDQsNGC0LjRgtGMINCy0YDQtdC80Y8g0L3QsCDQv9C+0LjRgdC60Lgg0LTQu9GPINGB0LXQsdGPINC90L7QstGL0YUg0L/QvtC80L7RidC90LjQutC+0LIsINCwINC+0YHRgtCw0LLQuNC7INC90LAg0YHQstC+0LjRhSDQtNC+0LvQttC90L7RgdGC0Y/RhSDQpNC40LvQsCDQotC+0LzQv9GB0L7QvdCwLCDQodGN0LzQvNC4INCb0Lgg0Lgg0JTQttC+INCa0L7RgNGA0LjQs9Cw0L3QsC4g0JLQvdC10LfQsNC/0L3QviBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstC10YDQvdGD0LvRgdGPINC6INCw0YLQsNC60YPRjtGJ0LXQvNGDINGB0YLQuNC70Y4g0LjQs9GA0Ysg0YEg0LHQvtC70YzRiNC40Lwg0LrQvtC70LjRh9C10YHRgtCy0L7QvCDQv9C10YDQtdC00LDRhywg0L3QsCDRgNCw0LTQvtGB0YLRjCDQsdC+0LvQtdC70YzRidC40LrQsNC8INC4INC60YDQuNGC0LjQutCw0LwsINC4INGB0YLQsNC7INC/0YDQvtGP0LLQu9GP0YLRjCDQvdCw0LzQtdC60Lgg0L3QsCDQvNC90L7Qs9C+0L7QsdC10YnQsNGO0YnQtdC1INCx0YPQtNGD0YnQtdC1LiDQkiDQutC+0L3RhtC1INGB0LXQt9C+0L3QsCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIg0LIg0L7QtNC90L7QvCDQuNC3INGB0LDQvNGL0YUg0LfQsNGF0LLQsNGC0YvQstCw0Y7RidC40YUg0YTQuNC90LDQu9C+0LIg0LIg0LjRgdGC0L7RgNC40Lgg0YLRg9GA0L3QuNGA0LAuXFxyXFxuXFxyXFxuICAgICAgICDQoNGD0LrQvtCy0L7QtNGB0YLQstC+INC60LvRg9Cx0LAsINCyINC70LjRhtC1INCw0LzQtdGA0LjQutCw0L3RgdC60LjRhSDQstC70LDQtNC10LvRjNGG0LXQsiDQlNC20L7RgNC20LAg0JbQuNC70LvQtdGC0YLQsCDQuCDQotC+0LzQsCDQpdC40LrRgdCwLCDQtNCw0LLQuNC70L4g0L3QsCDQkdC10L3QuNGC0LXRgdCwINGBINGC0YDQtdCx0L7QstCw0L3QuNC10Lwg0L3QtdC80LXQtNC70LXQvdC90L7Qs9C+INGD0YHQv9C10YXQsCDQsiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtS4g0KDQsNGB0LrQvtC7INC/0YDQvtC40LfQvtGI0LXQuywg0LrQvtCz0LTQsCDRgtGA0LXQvdC10YDRgyDQsdGL0LvQviDQvtGC0LrQsNC30LDQvdC+INCyINGB0YDQtdC00YHRgtCy0LDRhSDQvdCwINGD0YHQuNC70LXQvdC40LUg0YHQvtGB0YLQsNCy0LAuXFxyXFxuXFxyXFxuICAgICAgICDQm9C10YLQvtC8IDIwMTAg0LPQvtC00LAg0JHQtdC90LjRgtC10YHQsCDRgdC80LXQvdC40Lsg0KDQvtC5INCl0L7QtNC20YHQvtC9LCDQutC+0YLQvtGA0L7QvNGDINC30LAg0YLQviDQvdC10L/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtC1INCy0YDQtdC80Y8sINGH0YLQviDQvtC9INC/0YDQvtCx0YvQuyDRgyDRgNGD0LvRjyDQutC70YPQsdCwLCDRgtCw0Log0L3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LLQvtC10LLQsNGC0Ywg0LvRjtCx0L7QstGMINCx0L7Qu9C10LvRjNGJ0LjQutC+0LIuINCa0LvRg9CxLCDRgtC10Lwg0LLRgNC10LzQtdC90LXQvCwg0L/Ri9GC0LDQu9GB0Y8g0YDQsNC30L7RgNCy0LDRgtGMINCy0YHQtSDRgdCy0Y/Qt9C4INGBINCw0LzQtdGA0LjQutCw0L3RgdC60LjQvNC4INGF0L7Qt9GP0LXQstCw0LzQuC5cXHJcXG5cXHJcXG4gICAgICAgINCSINC60L7QvdGG0LUg0LrQvtC90YbQvtCyLCDQsdC70LDQs9C+0LTQsNGA0Y8g0YPRgdC40LvQuNGP0Lwg0L/RgNC10LfQuNC00LXQvdGC0LAg0LrQu9GD0LHQsCwg0JzQsNGA0YLQuNC90LAg0JHRgNC+0YLQvtC90LAsINC/0L7Rj9Cy0LjQu9GB0Y8g0L3QvtCy0YvQuSDQv9C+0LrRg9C/0LDRgtC10LvRjCwg0Lgg0YHQtNC10LvQutCwINC/0L4g0L/RgNC+0LTQsNC20LUgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0YHQvtGB0YLQvtGP0LvQsNGB0YwsINC90LXRgdC80L7RgtGA0Y8g0L3QsCDQstGB0LUg0YHRg9C00LXQsdC90YvQtSDQuNGB0LrQuCwg0L/Ri9GC0LDQstGI0LjQtdGB0Y8g0L/QvtC80LXRiNCw0YLRjCDQtdC1INC+0YHRg9GJ0LXRgdGC0LLQu9C10L3QuNGOLiDQkiDQvtC60YLRj9Cx0YDQtSAyMDEwINC60LvRg9CxINC/0L7Qv9GA0L7RidCw0LvRgdGPINGBINCl0LjQutGB0L7QvCDQuCDQltC40LvQu9C10YLRgtC+0Lwg0Lgg0LLRgdGC0YDQtdGC0LjQuyDQvdC+0LLQvtCz0L4g0LLQu9Cw0LTQtdC70YzRhtCwLCDQlNC20L7QvdCwINCT0LXQvdGA0LgsINGH0YzRjyDQutC+0LzQv9Cw0L3QuNGPIE5FVlMg0YPQttC1INC40LzQtdC70LAg0YPRgdC/0LXRiNC90YvQuSDQvtC/0YvRgiDRgNCw0LHQvtGC0Ysg0YEg0LHQvtGB0YLQvtC90YHQutC+0Lkg0LHQtdC50YHQsdC+0LvRjNC90L7QuSDQutC+0LzQsNC90LTQvtC5IFxcXCLQoNC10LQg0KHQvtC60YFcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KXQvtC00LbRgdC+0L0g0L3QtSDQvdCw0LTQvtC70LPQviDQt9Cw0LTQtdGA0LbQsNC70YHRjyDQsiDQutC70YPQsdC1LCDQv9C+0YHQu9C1INGD0LbQsNGB0L3QvtCz0L4g0L3QsNGH0LDQu9CwINGB0LXQt9C+0L3QsCAyMDEwLzExLCDQsiDRj9C90LLQsNGA0LUg0L7QvSDRgdC+0LPQu9Cw0YHQuNC70YHRjyDQv9C+0LrQuNC90YPRgtGMINGB0LLQvtC5INC/0L7RgdGCLCDQuCDQtdCz0L4g0LzQtdGB0YLQviDQstGA0LXQvNC10L3QvdC+INC30LDQvdGP0Lsg0JrQtdC90L3QuCDQlNCw0LvQs9C70YLRiCwg0YfRjNC1INC40LzRjyDQuiDRgtC+0LzRgyDQstGA0LXQvNC10L3QuCDQstGB0LUg0YfQsNGJ0LUg0YHRgtCw0LvQuCDQstGB0L/QvtC80LjQvdCw0YLRjCDQsdC+0LvQtdC70YzRidC40LrQuC5cXHJcXG5cXHJcXG4gICAgICAgINCU0LDQu9Cz0LvQuNGIINCx0YvRgdGC0YDQviDQstGB0LXQu9C40Lsg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDQutC+0LzQsNC90LTRgywg0LjQt9Cx0LDQstC40LvRgdGPINC+0YIg0L3QtdC90YPQttC90YvRhSDQuNCz0YDQvtC60L7Qsiwg0LLQutC70Y7Rh9Cw0Y8g0Lgg0YHQv9C+0YDQvdGL0Lkg0L/QtdGA0LXRhdC+0LQg0KTQtdGA0L3QsNC90LTQviDQotC+0YDRgNC10YHQsCDQsiBcXFwi0KfQtdC70YHQuFxcXCIsINC/0YDQuNC+0LHRgNC10Lsg0JvRg9C40YHQsCDQodGD0LDRgNC10YHQsCDQuCDQrdC90LTQuCDQmtGN0YDRgNC+0LvQu9CwINC00LvRjyDQv9C+0YHRgtGA0L7QtdC90LjRjyDQvdC+0LLQvtC5INC70LjQvdC40Lgg0LDRgtCw0LrQuC4g0JrQu9GD0LEg0YHQu9C+0LLQvdC+INC30LDQvdC+0LLQviDRgNC+0LTQuNC70YHRjyDQuCDQstC30LvQtdGC0LXQuyDQvdCwINC60YDRi9C70YzRj9GFLiDQkiDQutC+0L3RhtC1INGB0LXQt9C+0L3QsCDQlNCw0LvQs9C70LjRiCDQv9C+0LTQv9C40YHQsNC7INGBIFxcXCLQm9C40LLQtdGA0L/Rg9C70LXQvFxcXCIg0YLRgNC10YXQu9C10YLQvdC40Lkg0LrQvtC90YLRgNCw0LrRgi5cXHJcXG5cXHJcXG4gICAgICAgINCe0YHQvdC+0LLQvdC+0Lkg0YbQtdC70YzRjiDQutC70YPQsdCwINCx0YvQu9C+INCy0L7Qt9Cy0YDQsNGJ0LXQvdC40LUg0LIg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyLCDQt9CwINGB0LLQvtC5INC/0LXRgNCy0YvQuSDQv9C+0LvQvdGL0Lkg0YHQtdC30L7QvSDQsiDQutC70YPQsdC1INCU0LDQu9Cz0LTQuNGI0YMg0LTQvtGB0YLQuNGH0Ywg0LXQtSDQvdC1INGD0LTQsNC70L7RgdGMLCDQuNC3LdC30LAg0LTQvtGB0YLQsNGC0L7Rh9C90L4g0L3QtdGB0YLQsNCx0LjQu9GM0L3Ri9GFINCy0YvRgdGC0YPQv9C70LXQvdC40Lkg0LrQvtC80LDQvdC00Ysg0LIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUuINCSINC40YLQvtCz0LUg0LrQu9GD0LEg0YTQuNC90LjRiNC40YDQvtCy0LDQuyDQvdCwINCy0L7RgdGM0LzQvtC8INC80LXRgdGC0LUg0LIg0YLQsNCx0LvQuNGG0LUsINC90LjQttC1INGB0LLQvtC10LPQviDQvtGB0L3QvtCy0L3QvtCz0L4g0LrQvtC90LrRg9GA0LXQvdGC0LAsIFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCi0LXQvCDQvdC1INC80LXQvdC10LUsIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGF0L7RgNC+0YjQviDQv9GA0L7Rj9Cy0LjQuyDRgdC10LHRjyDQsiDQutGD0LHQutC+0LLRi9GFINGB0L7RgNC10LLQvdC+0LLQsNC90LjRj9GFLiDQkiDRhNC10LLRgNCw0LvQtSAyMDEyINCz0L7QtNCwIFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLRi9C40LPRgNCw0LvQuCDQmtGD0LHQvtC6INCb0LjQs9C4LCDQvtCx0YvQs9GA0LDQsiBcXFwi0JrQsNGA0LTQuNGE0YRcXFwiINCyINGB0LXRgNC40Lgg0L/QtdC90LDQu9GM0YLQuCwg0LHQu9Cw0LPQvtC00LDRgNGPINGH0LXQvNGDINC/0L7Qu9GD0YfQuNC7INC/0YPRgtC10LLQutGDINCyINCb0LjQs9GDINCV0LLRgNC+0L/Riy4g0JAg0LIg0LzQsNC1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC4IFxcXCLQp9C10LvRgdC4XFxcIiDQstGB0YLRgNC10YLQuNC70LjRgdGMINCyINGE0LjQvdCw0LvQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCwg0L7QtNC90LDQutC+INGD0LTQsNGH0LAg0L7QutCw0LfQsNC70LDRgdGMINC90LAg0YHRgtC+0YDQvtC90LUg0LvQvtC90LTQvtC90YHQutC+0LPQviDQutC70YPQsdCwLlxcclxcblxcclxcbiAgICAgICAg0J3QtdGB0LzQvtGC0YDRjyDQvdCwINGD0YHQv9C10YXQuCDQsiDQutGD0LHQutC+0LLRi9GFINGC0YPRgNC90LjRgNCw0YUsINCyINC60L7QvdGG0LUg0YHQtdC30L7QvdCwINCU0LDQu9Cz0LvQuNGIINCx0YvQuyDRg9Cy0L7Qu9C10L0sINCwINC10LPQviDQvNC10YHRgtC+INC30LDQvdGP0Lsg0LzQvtC70L7QtNC+0Lkg0YHQtdCy0LXRgNC+0LjRgNC70LDQvdC00YHQutC40Lkg0YLRgNC10L3QtdGALCDQkdGA0LXQvdC00LDQvSDQoNC+0LTQttC10YDRgSwg0L/QvtC60L7RgNC40LLRiNC40Lkg0Log0YLQvtC80YMg0LLRgNC10LzQtdC90Lgg0LLRgdC10YUg0YHQstC+0LXQuSDRgNCw0LHQvtGC0L7QuSDRgSDQtNC+0YHRgtCw0YLQvtGH0L3QviDRgdC60YDQvtC80L3Ri9C8IFxcXCLQodGD0L7QvdGB0Lgg0KHQuNGC0LhcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KDQvtC00LbQtdGA0YEg0L/RgNC40YjQtdC7INGBINGA0LXRiNC40LzQvtGB0YLRjNGOINGD0YHRgtCw0L3QvtCy0LjRgtGMINCyINC60LvRg9Cx0LUg0L3QvtCy0YPRjiDRhNC40LvQvtGB0L7RhNC40Y4sINC/0YDQuNCy0LjRgtGMINC60L7QvNCw0L3QtNC1INC90L7QstGL0Lkg0YHRgtC40LvRjCDQuNCz0YDRiywg0L/RgNC4INGN0YLQvtC8INC90LUg0YLQtdGA0Y/Rjywg0LrQsNC6INC+0L0g0YPRgtCy0LXRgNC20LTQsNC7LCDRgdCy0Y/Qt9C4INGBINC40YHRgtC+0YDQuNC10LkuINChINGB0L7QsdC+0Lkg0LjQtyBcXFwi0KHRg9C+0L3RgdC4XFxcIiDQvtC9INC30LDRhdCy0LDRgtC40Lsg0YHQstC+0LjRhSDQsNGB0YHQuNGB0YLQtdC90YLQvtCyINC4INC/0L7Qu9GD0LfQsNGJ0LjRgtC90LjQutCwINCU0LbQviDQkNC70LvQtdC90LAuINCe0LTQvdCw0LrQviwg0LjQty3Qt9CwINC/0YDQvtCy0L7QtNC40LLRiNC10LPQvtGB0Y8g0LIg0YLQviDQstGA0LXQvNGPINGH0LXQvNC/0LjQvtC90LDRgtCwINCV0LLRgNC+0L/Riywg0YLRgNC10L3QtdGAINCy0L/QtdGA0LLRi9C1INGD0LLQuNC00LXQuyDQstGB0Y4g0YHQstC+0Y4g0LrQvtC80LDQvdC00YMg0LIg0YHQsdC+0YDQtSDRgtC+0LvRjNC60L4g0Log0L3QsNGH0LDQu9GDINGB0LXQt9C+0L3QsC4g0JIg0YHQtdC30L7QvdC1IDIwMTIvMTMgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9GB0YLRg9C/0LDQuyDQutGA0LDQudC90LUg0L3QtdGB0YLQsNCx0LjQu9GM0L3Qviwg0L/QvtC60LDQt9Cw0LIg0YXRg9C00YjQuNC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC1INGB0YLQviDQu9C10YIg0YHRgtCw0YDRgiDRgdC10LfQvtC90LAuINCa0YDRg9C/0L3Ri9C1INC/0L7QsdC10LTRiyDRgdC80LXQvdGP0LvQuCDQvdC10L7QttC40LTQsNC90L3Ri9C1INCx0LXQt9Cy0L7Qu9GM0L3Ri9C1INC/0L7RgNCw0LbQtdC90LjRjy4g0JLQviDQstGA0LXQvNGPINC30LjQvNC90LXQs9C+INGC0YDQsNC90YHRhNC10YDQvdC+0LPQviDQvtC60L3QsCDQoNC+0LTQttC10YDRgdGDINGD0LTQsNC70L7RgdGMINGD0YHQuNC70LjRgtGMINC60L7QvNCw0L3QtNGDINC00LLRg9C80Y8g0L/RgNC40L7QsdGA0LXRgtC10L3QuNGP0LzQuDog0LDQvdCz0LvQuNC50YHQutC40Lwg0L3QsNC/0LDQtNCw0Y7RidC40Lwg0JTRjdC90LjQtdC70L7QvCDQodGC0LDRgNGA0LjQtNC20LXQvCDQuCDQsdC70LDQt9C40LvRjNGG0LXQvCDQpNC40LvQu9C40L/Qv9C1INCa0L7Rg9GC0LjQvdGM0L4uINCSINC40YLQvtCz0LUg0LrQvtC80LDQvdC00LAg0LfQsNCy0LXRgNGI0LjQu9CwINGB0LXQt9C+0L0g0L3QsCDRgdC10LTRjNC80L7QvCDQvNC10YHRgtC1LCDQstC90L7QstGMINC90LjQttC1IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCX0LjQvNC+0LkgMjAxMyDQstC10YLQtdGA0LDQvSDQutC70YPQsdCwINCU0LbQtdC50LzQuCDQmtCw0YDRgNCw0LPQtdGAINC+0LHRitGP0LLQuNC7INC+INC30LDQstC10YDRiNC10L3QuNC4INGB0LLQvtC10Lkg0LrQsNGA0YzQtdGA0Ysg0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiLiAxOSDQvNCw0Y8g0L7QvSDQv9GA0L7QstC10Lsg0YHQstC+0Lkg0L/QvtGB0LvQtdC00L3QuNC5INC+0YTQuNGG0LjQsNC70YzQvdGL0Lkg0LzQsNGC0Ycg0LIg0LrRgNCw0YHQvdC+0Lkg0YTRg9GC0LHQvtC70LrQtSDQsiDQv9C+0LHQtdC00L3QvtC8INC00LvRjyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDQvNCw0YLRh9C1INC/0YDQvtGC0LjQsiBcXFwi0JrRg9C40L3QtyDQn9Cw0YDQuiDQoNC10LnQvdC00LbQtdGA0YFcXFwiLlxcclxcbiAgICA8L2Rpdj48aHIgLz48aT5cXHJcXG4gICAgICAgINCY0YHRgtC+0YfQvdC40Lo6IGxmY29ubGluZS5jb21cXHJcXG4gICAgICAgINCf0LXRgNC10LLQvtC0OiB0YXMtbi1yXFxyXFxuICAgIDwvaT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb250YWluZXItZmx1aWRcXFwiIHVpLXZpZXc9XFxcInJpZ2h0Q29udGFpbmVyXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImNvbC1zeC0xMlxcXCIgKm5nSWY9XFxcInJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPjxhIChjbGljayk9XFxcInVwZGF0ZUVwbFRhYmxlKClcXFwiPtCe0LHQvdC+0LLQuNGC0Ywg0YLQsNCx0LvQuNGG0YM8L2E+PC9zcGFuPlxcclxcbiAgICA8ZXBsLXRhYmxlPjwvZXBsLXRhYmxlPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxwPjxmb250IGNvbG9yPVxcXCJyZWRcXFwiPjxiPtCU0LDQvdC90YvQtSDQv9GA0LDQstC40LvQsCDQvdC1INC/0L7QtNC70LXQttCw0YIg0L7QsdGB0YPQttC00LXQvdC40Y4g0Lgg0L7QsdGP0LfQsNGC0LXQu9GM0L3RiyDQtNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LLRgdC10LzQuCDQsdC10Lcg0LjRgdC60LvRjtGH0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDQv9C+0YDRgtCw0LvQsCDRgNCw0L3Qs9C+0Lwg0L7RgiDQv9GA0L7RgdGC0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQtNC+INC80L7QtNC10YDQsNGC0L7RgNCwICjQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNGLIC0g0LrQsNC6INC70LjRhtCwLCDRjdGC0Lgg0L/RgNCw0LLQuNC70LAg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGO0YnQuNC1IC0g0L/QvtGB0YLRg9C/0LDRjtGCINC/0L4g0YHQstC+0LXQvNGDINGD0YHQvNC+0YLRgNC10L3QuNGOKS4g0JXRgdC70Lgg0LLQsNC8INC90LUg0L3RgNCw0LLRj9GC0YHRjyDRjdGC0Lgg0L/RgNCw0LLQuNC70LAg0Lgg0LLRiyDRhdC+0YLQuNGC0LUg0LTQu9GPINGB0LXQsdGPINC00YDRg9Cz0LjQtSDQv9GA0LDQstC40LvQsCAtINCy0Ysg0LLRgdC10LPQtNCwINC80L7QttC10YLQtSDRgdC+0LfQtNCw0YLRjCDRgdCy0L7QuSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C5INGB0LDQudGCINC4INC00LXQu9Cw0YLRjCDRgtCw0Lwg0LLRgdC1LCDRh9GC0L4g0LLQsNC8INC90YDQsNCy0LjRgtGB0Y8uPC9iPjwvZm9udD4gPC9wPlxcclxcbiAgICA8cD7Qn9GA0LDQstC40LvQsCDQstCy0L7QtNGP0YLRgdGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60L7QvNGE0L7RgNGC0L3QvtC5INC4INC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdC+0Lkg0LDRgtC80L7RgdGE0LXRgNGLINC+0LHRidC10L3QuNGPLiDQldGB0LvQuCDQktCw0YEg0L3QtSDRg9GB0YLRgNCw0LjQstCw0LXRgiDRg9GB0YLQsNC90L7QstC70LXQvdC90LDRjyDRhNC+0YDQvNCwINC+0LHRidC10L3QuNGPLCDQstC+0LfQtNC10YDQttC40YLQtdGB0Ywg0L7RgiDRg9GH0LDRgdGC0LjRjyDQsiDQtNCw0L3QvdC+0Lkg0LrQvtC90YTQtdGA0LXQvdGG0LjQuC48L3A+XFxyXFxuICAgIDxwPjxiPkkuINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkuPC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCg0LXQs9C40YHRgtGA0LjRgNGD0Y/RgdGMINC90LAg0YTQvtGA0YPQvNC1LCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YHQvtCz0LvQsNGI0LDQtdGC0YHRjyDQstGL0L/QvtC70L3Rj9GC0Ywg0LTQsNC90L3Ri9C1INCf0YDQsNCy0LjQu9CwLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0JTQu9GPINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0L3QsCDRhNC+0YDRg9C80LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC00L7Qu9C20LXQvSDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0LTQtdC50YHRgtCy0YPRjtGJ0LjQuSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiy4g0JzRiyDQs9Cw0YDQsNC90YLQuNGA0YPQtdC8INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLRjCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LguPC9saT5cXHJcXG4gICAgICAgIDxsaT7QktGL0LHQvtGAINC40LzQtdC90Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIChuaWNrbmFtZSkg0Y/QstC70Y/QtdGC0YHRjyDQstCw0YjQuNC8INC40YHQutC70Y7Rh9C40YLQtdC70YzQvdGL0Lwg0L/RgNCw0LLQvtC8LiDQkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQvtGB0YLQsNCy0LvRj9C10YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0L/RgNC40L3Rj9GC0Ywg0LzQtdGA0Ysg0Log0L/RgNC10LrRgNCw0YnQtdC90LjRjiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBuaWNrbmFtZSwg0LXRgdC70Lgg0LXQs9C+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC90LDRgNGD0YjQsNC10YIg0L7QsdGJ0LXQv9GA0LjQvdGP0YLRi9C1INC80L7RgNCw0LvRjNC90YvQtSDQuCDRjdGC0LjRh9C10YHQutC40LUg0L3QvtGA0LzRiyDQuNC70Lgg0Y/QstC70Y/QtdGC0YHRjyDQvtGB0LrQvtGA0LHQuNGC0LXQu9GM0L3Ri9C8INC00LvRjyDQtNGA0YPQs9C40YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0YTQvtGA0YPQvNCwLiDQl9Cw0L/RgNC10YnQtdC90LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjyBuaWNrbmFtZSwg0YHRhdC+0LbQuNGFINGBINGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LzQuCDQtNC+INGB0YLQtdC/0LXQvdC4LCDQutC+0YLQvtGA0YvQtSDQvNC+0LPRg9GCINCy0LLQtdGB0YLQuCDQsiDQt9Cw0LHQu9GD0LbQtNC10L3QuNC1INC00YDRg9Cz0LjRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDRhNC+0YDRg9C80LAuPC9saT5cXHJcXG4gICAgICAgIDxsaT7Ql9Cw0L/RgNC10YnQtdC90LAg0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdCw0Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvtC00L3QuNC8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8LCDQstC90LUg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGG0LXQu9C10LksINGBINC60L7RgtC+0YDRi9C80Lgg0YLQsNC60LDRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0YDQvtCy0L7QtNC40YLRgdGPLiDQlNCw0L3QvdC+0LUg0L3QsNGA0YPRiNC10L3QuNC1INGP0LLQu9GP0LXRgtGB0Y8g0LrRgNCw0LnQvdC1INGB0LXRgNGM0LXQt9C90YvQvCDQuCDQstC10LTQtdGCINC6INCx0LvQvtC60LjRgNC+0LLQsNC90LjRjiDQstGB0LXRhSDRg9GH0LXRgtC90YvRhSDQt9Cw0L/QuNGB0LXQuS4g0JXRgdC70Lgg0LLQsNC8INC90LUg0L3RgNCw0LLQuNGC0YHRjyDQvdC40LosINC90LDQv9C40YjQuNGC0LUg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC5INGA0LDQt9C00LXQuyDRhNC+0YDRg9C80LAg0LjQu9C4INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YMuPC9saT5cXHJcXG4gICAgICAgIDxsaT7QldGB0LvQuCDQstGLINC90LUg0L/RgNC+0Y/QstC70Y/QtdGC0LUg0LDQutGC0LjQstC90L7RgdGC0Ywg0L3QsCDRhNC+0YDRg9C80LUg0LIg0YLQtdGH0LXQvdC40LUg0LTQu9C40YLQtdC70YzQvdC+0LPQviDQstGA0LXQvNC10L3QuCwg0LLQsNGI0LAg0YPRh9C10YLQvdCw0Y8g0LfQsNC/0LjRgdGMINC80L7QttC10YIg0LHRi9GC0Ywg0YPQtNCw0LvQtdC90LAuPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+PGI+SUkuINCd0LAg0KTQvtGA0YPQvNC1IDxmb250IGNvbG9yPVxcXCJyZWRcXFwiPtC30LDQv9GA0LXRidC10L3QvjwvZm9udD46PC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvdC10L3QvtGA0LzQsNGC0LjQstC90YPRjiDQu9C10LrRgdC40LrRgyDQsiDQu9GO0LHRi9GFINC10ZEg0L/RgNC+0Y/QstC70LXQvdC40Y/RhSwg0LIg0YLQvtC8INGH0LjRgdC70LUg0YHQvtC60YDQsNGJ0LXQvdC90YPRjiDQuNC70Lgg0LfQsNC80LXQvdC10L3QvdGD0Y4gwqvQt9Cy0LXQt9C00L7Rh9C60LDQvNC4wrsgKNC40LvQuCDQtNGA0YPQs9C40LzQuCDRgdC40LzQstC+0LvQsNC80LgpLCDQvdCwINGA0YPRgdGB0LrQvtC8LCDQsNC90LPQu9C40LnRgdC60L7QvCDRj9C30YvQutC1LCDQu9C40LHQviDRgtGA0LDQvdGB0LvQuNGC0LUuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLLCDRgNCw0L3QtdC1INC+0LHRgdGD0LbQtNCw0LLRiNC40LXRgdGPINCyINCk0L7RgNGD0LzQtS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNGPLCDQvdC1INC40LzQtdGO0YnQuNC1INC+0YLQvdC+0YjQtdC90LjRjyDQuiDQvtCx0YHRg9C20LTQsNC10LzQvtC5INGC0LXQvNC1ICjQvtGE0YTRgtC+0L/QuNC6KS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0Lgg0YHQvtC+0LHRidC10L3QuNGPLCDQsiDQutC+0YLQvtGA0YvRhSDQsdC+0LvQtdC1INC/0L7Qu9C+0LLQuNC90Ysg0LLRgdC10Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0L3QsNC/0LjRgdCw0L3QviDQl9CQ0JPQm9CQ0JLQndCr0JzQmCDQkdCj0JrQktCQ0JzQmC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YssINC40LzQtdGO0YnQuNC1INCyINC90LDQt9Cy0LDQvdC40Lgg0YPQutGA0LDRiNC10L3QuNGPICjCqz09PS0tLdCc0L7RjyDRgtC10LzQsC0tLT09PcK7KSwg0L3QtSDQvtGC0YDQsNC20LDRjtGJ0LjQtSDRgdGD0YLRjCDQstC+0L/RgNC+0YHQsCAowqvQn9C+0YHQvNC+0YLRgNC4INGB0Y7QtNCwwrsg0LjQu9C4IMKrZmRnbDtmamRnbDtmZGpnbGdmZMK7KS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0YEg0L7QsdGA0LDRidC10L3QuNC10Lwg0Log0LrQvtC90LrRgNC10YLQvdC+0LzRgyDRg9GH0LDRgdGC0L3QuNC60YMg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCU0YPQsdC70LjRgNC+0LLQsNGC0Ywg0YLQtdC80YssINGC0L4g0LXRgdGC0Ywg0YDQsNC30LzQtdGJ0LDRgtGMINC+0LTQuNC90LDQutC+0LLRi9C1INGB0L7QvtCx0YnQtdC90LjRjyDQsiDRgNCw0LfQvdGL0YUg0YDQsNC30LTQtdC70LDRhSDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KfRgNC10LfQvNC10YDQvdC+0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LPRgNCw0YTQuNGH0LXRgdC60LjRhSDRgdC80LDQudC70LjQutC+0LIg0LIg0YHQvtC+0LHRidC10L3QuNC4ICjQsdC+0LvQtdC1INGC0YDQtdGFINC/0L7QtNGA0Y/QtCkg0LjQu9C4INC/0L7Qu9C90L7RgdGC0YzRjiDRgdC+0YHRgtC+0Y/RidC10LUg0YLQvtC70YzQutC+INC40Lcg0YHQvNCw0LnQu9C+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/Rg9Cx0LvQuNC60LDRhtC40Y8g0L/QvtGB0YLQvtCyLCDQvdC1INC90LXRgdGD0YnQuNGFINC30L3QsNGH0LjRgtC10LvRjNC90L7QuSDRgdC80YvRgdC70L7QstC+0Lkg0L3QsNCz0YDRg9C30LrQuCAo0YTQu9GD0LQpLiDQl9Cw0L/RgNC10YnQsNC10YLRgdGPINC/0LjRgdCw0YLRjCDQutC+0YDQvtGC0LrQuNC1INCx0LXRgdGB0LzRi9GB0LvQtdC90L3Ri9C1INC/0L7RgdGC0Ysg0YLQuNC/0LAgXFxcItCW0JbQntCo0KxcXFwiINC40LvQuCBcXFwi0J/QmNCo0Jgg0JXQqdCeXFxcIiwg0LAg0YLQsNC60LbQtSwg0YHQvtGB0YLQvtGP0YnQuNC1INC40Lcg0L7QtNC90LjRhSDRgdC80LDQudC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0YHQuNC80LLQvtC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQutGA0LDRgdC90L7Qs9C+INGG0LLQtdGC0LAg4oCTINGN0YLQviDQv9GA0LjQstC40LvQtdCz0LjRjyDQvNC+0LTQtdGA0LDRgtC+0YDQvtCyINC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qr9C30YvQuiDRgdCw0LnRgtCwLdCg0KPQodCh0JrQmNCZLtCR0YPQtNGM0YLQtSDQtNC+0LHRgNGLLNC/0LjRiNC40YLQtSDQvdCwINC90LXQvC7QmtC+0LLQtdGA0LrQsNC90LjQtSDRgdC70L7QsiDQuCDQv9GA0LXQtNC90LDQvNC10YDQtdC90L3QvtC1INC40LfQstGA0LDRidC10L3QuNC1INC+0YDRhNC+0LPRgNCw0YTQuNC4INGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCwg0LAg0YLQsNC60LbQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQu9Cw0YLQuNC90LjRhtGLICjRgtGA0LDQvdGB0LvQuNGC0LApLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCm0LjRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC10LTRi9C00YPRidC40YUg0YHQvtC+0LHRidC10L3QuNC5LCDQtdGB0LvQuCDQsiDRjdGC0L7QvCDQvdC10YIg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LggKNGE0LvQtdC50LwpLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQs9GA0YPQsdGL0LUsINC90LXRhtC10L3Qt9GD0YDQvdGL0LUg0LLRi9GA0LDQttC10L3QuNGPINC4INC+0YHQutC+0YDQsdC70LXQvdC40Y8g0LIg0LvRjtCx0L7QuSDRhNC+0YDQvNC1LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINGB0L7QtNC10YDQttCw0YnQuNC1INGA0LXQutC70LDQvNC90YPRjiwg0LDQvdGC0LjRgNC10LrQu9Cw0LzQvdGD0Y4g0LjQu9C4INC60L7QvNC80LXRgNGH0LXRgdC60YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRjiwg0LAg0YLQsNC6INC20LUg0YHRgdGL0LvQutC4INC90LAg0YHQsNC50YLRiyDRgSDRhtC10LvRjNGOINC/0L7QstGL0YjQtdC90LjRjyDQuNGFINC/0L7RgdC10YnQsNC10LzQvtGB0YLQuC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0L7QtNC+0LvQttCw0YLRjCDQvtCx0YHRg9C20LTQsNGC0Ywg0LLQvtC/0YDQvtGB0Ysg0LjQtyDRgtC10LwsINC30LDQutGA0YvRgtGL0YUg0LjQu9C4INGD0LTQsNC70LXQvdC90YvRhSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtCy0L7RhtC40YDQvtCy0LDRgtGMINC60L7QvdGE0LvQuNC60YLRiyDRgSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0Lgg0YHQvtC+0LHRidC10L3QuNGPLCDQv9GA0L7RgtC40LLQvtGA0LXRh9Cw0YnQuNC1INCa0L7QvdGB0YLQuNGC0YPRhtC40Lgg0Lgg0LfQsNC60L7QvdC+0LTQsNGC0LXQu9GM0YHRgtCy0YMg0KDQpC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdGC0LDRgtGD0YHQsCDQuNC70Lgg0L/QvtC00L/QuNGB0Lgg0L3QtdGG0LXQvdC30YPRgNC90YvQtSDQuNC70Lgg0YDRg9Cz0LDRgtC10LvRjNC90YvQtSDRgdC70L7QstCwLCDQsCDRgtCw0Log0LbQtSDQt9Cw0LLQtdC00L7QvNC+INC90LXQtNC+0YHRgtC+0LLQtdGA0L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLiAo0J3QsNC/0YDQuNC80LXRgCwg0L/QuNGB0LDRgtGMINCyINGB0YLQsNGC0YPRgdC1IMKr0JzQvtC00LXRgNCw0YLQvtGAwrssINC60L7Qs9C00LAg0L3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCS0Ysg0YLQsNC60L7QstGL0Lwg0L3QtSDRj9Cy0LvRj9C10YLQtdGB0YwpLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgINCc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YAg0L/QvtC00L/QuNGB0Lgg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LHQvtC70LXQtSAyLdGFINGB0YLRgNC+0YfQtdC6INC4INC90LUg0LHQvtC70LXQtSAyMDAg0YHQuNC80LLQvtC70L7Qsi4g0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgLSBcXFwiMlxcXCIuINCf0L7QtNC/0LjRgdGMINC90LUg0LTQvtC70LbQvdCwINGB0L7QtNC10YDQttCw0YLRjCDRgtC10LrRgdGC0LAsINCy0YvQtNC10LvQtdC90L3QvtCz0L4g0LrRgNCw0YHQvdGL0Lwg0YbQstC10YLQvtC8LiDQoNCw0LfQvNC10YAg0LrQsNGA0YLQuNC90LrQuCDQsiDQstCw0YjQtdC5INC/0L7QtNC/0LjRgdC4INC00L7Qu9C20LXQvSDRg9C00L7QstC70LXRgtCy0L7RgNGP0YLRjCDRgdC70LXQtNGD0Y7RidC40Lwg0YLRgNC10LHQvtCy0LDQvdC40Y/QvDpcXHJcXG4gICAgICAgICAgICAtINGA0LDQt9C80LXRgCAtINC90LUg0LHQvtC70LXQtSAzNTDRhTYwINC/0LjQutGB0LXQu9C10Lkg0YHRg9C80LzQsNGA0L3QvlxcclxcbiAgICAgICAgICAgIC0g0L7QsdGK0LXQvCAtINC90LUg0LHQvtC70LXQtSA0MCDQutCxINGB0YPQvNC80LDRgNC90L5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINC60LDRh9C10YHRgtCy0LUg0LDQstCw0YLQsNGA0LAsINGE0L7RgtC+0LPRgNCw0YTQuNC4INC40LvQuCDQsiDQutCw0YfQtdGB0YLQstC1INCy0LvQvtC20LXQvdC40LUg0LIg0YHQvtC+0LHRidC10L3QuNGPINC60LDRgNGC0LjQvdC60Lgg0L/QvtGA0L3QvtCz0YDQsNGE0LjRh9C10YHQutC+0LPQviwg0Y3QutGB0YLRgNC10LzQuNGB0YLRgdC60L7Qs9C+INC40LvQuCDQvtGB0LrQvtGA0LHQuNGC0LXQu9GM0L3QvtCz0L4g0YXQsNGA0LDQutGC0LXRgNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtC/0LDQs9Cw0L3QtNC40YDQvtCy0LDRgtGMINC70Y7QsdGL0LUg0L3QsNGA0LrQvtGC0LjRh9C10YHQutC40LUg0Lgg0L/RgdC40YXQvtGC0YDQvtC/0L3Ri9C1INCy0LXRidC10YHRgtCy0LAg0Lgg0L7QsdGA0LDQtyDQttC40LfQvdC4LCDRgdCy0Y/Qt9Cw0L3QvdGL0Lkg0YEg0YPQv9C+0YLRgNC10LHQu9C10L3QuNC10Lwg0LTQsNC90L3Ri9GFINCy0LXRidC10YHRgtCyLCDQsCDRgtCw0Log0LbQtSDQv9GA0L7Qv9Cw0LPQsNC90LTQuNGA0L7QstCw0YLRjCDRgdGD0LjRhtC40LQsINGA0LDRgdC+0LLRg9GOINC4INGA0LXQu9C40LPQuNC+0LfQvdGD0Y4g0L3QtdC90LDQstC40YHRgtGMLCDRhNCw0YjQuNC30Lwg0Lgg0L3QsNGG0LjQt9C8LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC30LDQstC10LTQvtC80L4g0L/QvtGF0L7QttC40YUg0L3QuNC60L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QktGL0L/RgNCw0YjQuNCy0LDQvdC40LUg0L/RgNC40LHQsNCy0LvQtdC90LjRjyDRgNC10L/Rg9GC0LDRhtC40LgsINCwINGC0LDQuiDQttC1INC/0L7QtNC90LjQvNCw0YLRjCDQuNC70Lgg0YHQvdC40LbQsNGC0Ywg0YDQtdC/0YPRgtCw0YbQuNGOINCx0LXQtyDQv9GA0LjRh9C40L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QntCx0YHRg9C20LTQsNGC0Ywg0LTQtdC50YHRgtCy0LjRjyDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCDQsiDRgNCw0LfQtNC10LvQsNGFINCk0L7RgNGD0LzQsC4g0JXRgdC70Lgg0JLRiyDQvdC10LTQvtCy0L7Qu9GM0L3RiyDQtNC10LnRgdGC0LLQuNGP0LzQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCwg0YLQviDQstGL0YHQutCw0LfRi9Cy0LDQudGC0LUg0YHQstC+0Lgg0L/RgNC10YLQtdC90LfQuNC4INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQvy4gNC4xLTQuMiDQvdCw0YHRgtC+0Y/RidC40YUg0J/RgNCw0LLQuNC7LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQn9ChICjQn9C10YDRgdC+0L3QsNC70YzQvdGL0LUg0KHQvtC+0LHRidC10L3QuNGPKSDQtNC70Y8g0LzQsNGB0YHQvtCy0L7QuSDRgNCw0YHRgdGL0LvQutC4INC40L3RhNC+0YDQvNCw0YbQuNC4INC70Y7QsdC+0LPQviDRgNC+0LTQsCAo0YDQtdC60LvQsNC80LAsIFxcXCLQv9C40YHRjNC80LAg0YHRh9Cw0YHRgtGM0Y9cXFwiINC4INGCLtC/LikgPC9saT5cXHJcXG4gICAgICAgIDxsaT7QndCw0YDRg9GI0LDRgtGMINCw0LLRgtC+0YDRgdC60LjQtSDQv9GA0LDQstCwICjRg9C60LDQt9GL0LLQsNC50YLQtSDRgdGB0YvQu9C60Lgg0L3QsCDQkNCS0KLQntCg0JAgKNC40YHRgtC+0YfQvdC40LopLCDQvtGC0LrRg9C00LAg0LHRi9C70Lgg0LLQt9GP0YLRiyDQstGL0LvQvtC20LXQvdC90YvQtSDRgdGC0LDRgtGM0LgpINC40LvQuCDRhdC+0YLRjyDQsdGLINC/0LjRiNC40YLQtSwg0YfRgtC+INCw0LLRgtC+0YDRgdGC0LLQviDQv9GA0LjQvdCw0LTQu9C10LbQuNGCINC90LUg0JLQsNC8LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCj0LrQsNC30LDQvdC40LUg0LIg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINC/0L7QtNC/0LjRgdC4LCDQuCDQtNGA0YPQs9C40YUg0L/QvtC70Y/RhSBVUkwg0LDQtNGA0LXRgdC+0LIg0LrQvtC80LzQtdGA0YfQtdGB0LrQuNGFINC40L3RgtC10YDQvdC10YIt0L/RgNC+0LXQutGC0L7Qsiwg0YEg0YbQtdC70YzRjiDRgNC10LrQu9Cw0LzRiyDQuCDQv9C+0LLRi9GI0LXQvdC40Y8g0LjQvdC00LXQutGB0LAg0YbQuNGC0LjRgNC+0LLQsNC90LjRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0YHQvtCx0L7QuSDQtNC+0LPQvtCy0L7RgNC10L3QvdC+0YHRgtC4INGBINCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10Lkg0L/QvtGA0YLQsNC70LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J7RgdC60L7RgNCx0LvQtdC90LjQtSDQuNCz0YDQvtC60L7QsiDQutC70YPQsdCwLNGC0YDQtdC90LXRgNGB0LrQvtCz0L4g0YjRgtCw0LHQsCzQsCDRgtCw0LrQttC1INC00YDRg9Cz0LjRhSDQutC70YPQsdC+0LIg0Lgg0LjRhSDQuNCz0YDQvtC60L7Qsi7QktGL0YDQsNC20LXQvdC40LUg0YHQstC+0LXQuSDQvdC10L/RgNC40Y/Qt9C90Lgg0LTQvtC/0YPRgdGC0LjQvNC+LNC90L4g0LIg0YDQsNC80LrQsNGFINC00L7Qv9GD0YHRgtC40LzQvtCz0L4gPC9saT5cXHJcXG5cXHJcXG4gICAgICAgIDxsaT7Qn9GD0LHQu9C40YfQvdC+INC/0YDQtdC00YrRj9Cy0LvRj9GC0Ywg0L/RgNC10YLQtdC90LfQuNC4INC4INC+0LHRgdGD0LbQtNCw0YLRjCDQtNC10LnRgdGC0LLQuNGPINC/0LXRgNC10LLQvtC00YfQuNC60L7QsiDQuCDRgNC10LTQsNC60YLQvtGA0L7QsiDRgdCw0LnRgtCwLiDQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0YDQtdGB0YPRgNGB0LAsINC90LXRgdC+0LPQu9Cw0YHQvdGL0LUg0YEg0L/Rg9Cx0LvQuNC60LDRhtC40Y/QvNC4INC/0LXRgNC10LLQvtC00L7QsiDRgdGC0LDRgtC10Lkg0Lgg0LzQsNGC0LXRgNC40LDQu9C+0LIg0LzQvtCz0YPRgiDQstGL0YHQutCw0LfQsNGC0Ywg0YHQstC+0ZEg0L3QtdGB0L7Qs9C70LDRgdC40LUg0LIg0LvQuNGH0L3QvtC8INGB0L7QvtCx0YnQtdC90LjQuCDQuNC70Lgg0LIg0YLQtdC80LUg0L3QsCDRhNC+0YDRg9C80LUg0YHQsNC50YLQsCAtIDxiPtCW0LDQu9C+0LHRizwvYj4uIDwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPjxiPklJSS4g0J7QsdGJ0LjQtSDRgNC10LrQvtC80LXQvdC00LDRhtC40Lgg0L4g0YHQvtCy0LXRgtGLLiA8L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0J3QtSDQvtCx0YDQsNGJ0LDQudGC0LUg0LLQvdC40LzQsNC90LjRjyDQvdCwINGF0YPQu9C40LPQsNC90L7Qsi4g0J3QtSDQvtGC0LLQtdGH0LDQudGC0LUg0LjQvCwg0LTQsNC20LUg0LXRgdC70Lgg0JLRiyDRgdGH0LjRgtCw0LXRgtC1LCDRh9GC0L4g0JLQsNGBINC+0YHQutC+0YDQsdC40LvQuCwg0L3QtSDQv9C+0LTQtNCw0LLQsNC50YLQtdGB0Ywg0L3QsCDQv9GA0L7QstC+0LrQsNGG0LjQuC4g0JTQvtGB0YLQsNGC0L7Rh9C90L4g0YHQvtC+0LHRidC40YLRjCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCDQvtCxINC+0YHQutC+0YDQsdC70LXQvdC40Lgg0Lgg0LLQuNC90L7QstC90YvQtSDQsdGD0LTRg9GCINC90LDQutCw0LfQsNC90YsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JIg0YLQvtC8INGB0LvRg9GH0LDQtSwg0LXRgdC70Lgg0JLRiyDRgdGH0LjRgtCw0LXRgtC1LCDRh9GC0L4g0L3QsNGA0YPRiNC10L3RiyDQn9GA0LDQstC40LvQsCDQpNC+0YDRg9C80LAsINC/0L7RgdGC0LDRgNCw0LnRgtC10YHRjCDRgdGA0LDQt9GDINC20LUg0YHQvtC+0LHRidC40YLRjCDQvtCxINGN0YLQvtC8INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQttCw0YDQs9C+0L0sINGCLtC6LiDQvdC10LrQvtGC0L7RgNGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC80L7Qs9GD0YIg0L3QtSDQv9GA0LDQstC40LvRjNC90L4g0LXQs9C+INGA0LDRgdGC0L7Qu9C60L7QstCw0YLRjC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0L7RgdGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC/0LjRgdCw0YLRjCDQsdC10LfQvtGB0L3QvtCy0LDRgtC10LvRjNC90YvQtSDRg9GC0LLQtdGA0LbQtNC10L3QuNGPLCDQsCDRgtCw0Log0LbQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0YLQuNC/0LAgwqvQstGL0LrQuNC90Ywg0Y3RgtGDINCx0Y/QutGDLCDQv9C+0YHRgtCw0LLRjCDRhdC+0YDQvtGI0YPRjiDQstC10YnRjMK7LiDQldGB0LvQuCDRjdGC0L4g0JLQsNGI0LUg0LvQuNGH0L3QviDQvNC90LXQvdC40LUsINC90LUg0LfQsNCx0YPQtNGM0YLQtSDRgdC+0L7QsdGJ0LjRgtGMINC+0LEg0Y3RgtC+0Lwg0LfQsNGA0LDQvdC10LUg4oCTINC/0YDQvtGB0YLQvtCz0L4gwqvQmNCc0KXQnsK7ICjQvtGCINCw0L3Qs9C7LiDigJxpbWhv4oCdLCDRh9GC0L4g0LIg0L/QtdGA0LXQstC+0LTQtSDQvtC30L3QsNGH0LDQtdGCIMKr0L/QviDQvNC+0LXQvNGDINGB0LrRgNC+0LzQvdC+0LzRgyDQvNC90LXQvdC40Y7Cuykg0LHRg9C00LXRgiDQtNC+0YHRgtCw0YLQvtGH0L3Qvi4g0J/QvtC80L3QuNGC0LUsINGH0YLQviDQv9C+0YHQu9C1INC90LXRgdC60L7Qu9GM0LrQuNGFINC90LXQsNGA0LPRg9C80LXQvdGC0LjRgNC+0LLQsNC90L3Ri9GFINGD0YLQstC10YDQttC00LXQvdC40LksINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9GA0L7RgdGC0L4g0L/QtdGA0LXRgdGC0LDQvdGD0YIg0JLQsNC8INC00L7QstC10YDRj9GC0YwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC10LbQtNC1INGH0LXQvCDRgdC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YMsINGD0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INCS0Ysg0YHQvtC30LTQsNC10YLQtSDQtdGRINCyINC90YPQttC90L7QvCDQoNCw0LfQtNC10LvQtSDQpNC+0YDRg9C80LAuINCf0L7QvNC90LjRgtC1LCDRh9GC0L4g0YLQtdC80YssINC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC1INGC0LXQvNCw0YLQuNC60LUg0KDQsNC30LTQtdC70LAsINCx0YPQtNGD0YIg0LvQuNCx0L4g0YPQtNCw0LvQtdC90YssINC70LjQsdC+INC/0LXRgNC10L3QtdGB0LXQvdGLINCyINC00YDRg9Cz0L7QuSDQoNCw0LfQtNC10Lsg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtGH0YLQuNGC0LUg0YLQtdC80YMg0YbQtdC70LjQutC+0LwhINCf0L7RgdGC0Ysg0LIg0YHQtdGA0LXQtNC40L3QtSDRgtC10LzRiyAtIFxcXCLQkCDQviDRh9C10Lwg0Y3RgtC+INCy0YssINCwPyBcXFwiINC40LvQuCBcXFwi0KLQsNC6INGPINC90LUg0L/QvtC90Y/QuyAtINC+0YLQutGD0LTQsCDQutCw0YfQsNGC0Yw/XFxcIiDQt9Cw0L/RgNC10YnQtdC90YsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHRgtCw0YDQsNC50YLQtdGB0Ywg0L3QtSDQtNC10LvQsNGC0Ywg0LPRgNCw0LzQvNCw0YLQuNGH0LXRgdC60LjRhSDQvtGI0LjQsdC+0Log0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg4oCTINGN0YLQviDRgdC+0LfQtNCw0YHRgiDQvdC10LPQsNGC0LjQstC90L7QtSDQstC/0LXRh9Cw0YLQu9C10L3QuNC1INC+INCy0LDRgS48L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD48Yj5JVi4g0J7RgtC90L7RiNC10L3QuNGPINC80LXQttC00YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5LjwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QkiDRgdCy0L7QuNGFINC00LXQudGB0YLQstC40Y/RhSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDRhNC+0YDRg9C80LAg0YDRg9C60L7QstC+0LTRgdGC0LLRg9C10YLRgdGPINC30LTRgNCw0LLRi9C8INGB0LzRi9GB0LvQvtC8INC4INCy0L3Rg9GC0YDQtdC90L3QuNC80Lgg0L/RgNCw0LLQuNC70LDQvNC4INGD0L/RgNCw0LLQu9C10L3QuNGPINGE0L7RgNGD0LzQvtC8LjwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAg0J7QsdGB0YPQttC00LXQvdC40LUg0LTQtdC50YHRgtCy0LjQuSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCAo0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQvtCyINC4INC80L7QtNC10YDQsNGC0L7RgNC+0LIg0YTQvtGA0YPQvNCwKSDQutCw0YLQtdCz0L7RgNC40YfQtdGB0LrQuCDQt9Cw0L/RgNC10YnQsNC10YLRgdGPINCyINC70Y7QsdGL0YUg0YTQvtGA0YPQvNCw0YUg0Lgg0YLQtdC80LDRhSwg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INGB0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INGE0L7RgNGD0LzQsCAtIDxiPtCW0LDQu9C+0LHRizwvYj4uPGJyPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L7RgdGC0LDQstC70Y/QtdGCINC30LAg0YHQvtCx0L7QuSDQv9GA0LDQstC+INC40LfQvNC10L3Rj9GC0Ywg0L/RgNCw0LLQuNC70LAg0LHQtdC3INGD0LLQtdC00L7QvNC70LXQvdC40LXQvCDQvtCxINGN0YLQvtC8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INGE0L7RgNGD0LzQsC4g0JLRgdC1INC40LfQvNC10L3QtdC90LjRjyDQuCDQvdC+0LLQsNGG0LjQuCDQvdCwINGE0L7RgNGD0LzQtSDQv9GA0L7QuNC30LLQvtC00Y/RgtGB0Y8g0YEg0YPRh9C10YLQvtC8INC80L3QtdC90LjQuSDQuCDQuNC90YLQtdGA0LXRgdC+0LIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkuPC9wPlxcclxcbiAgICA8cCBhbGlnbj1cXFwicmlnaHRcXFwiPjxiPtChINGD0LLQsNC20LXQvdC40LXQvCwg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0YHQsNC50YLQsC48L2I+PC9wPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+Q9C+0L/QtdGA0L3QuNC6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGF1dG9jb21wbGV0ZSBuZy1tb2RlbD1cXFwidm0uaXRlbS5jbHViTmFtZVxcXCIgbmFtZT1cXFwiY2x1Yk5hbWVcXFwiIGF0dHItcGxhY2Vob2xkZXI9XFxcItCS0LLQtdC00LjRgtC1INC60LvRg9CxLi4uXFxcIiBjbGljay1hY3RpdmF0aW9uPVxcXCJ0cnVlXFxcIiBkYXRhPVxcXCJ2bS5jbHVic1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24tdHlwZT1cXFwidm0udXBkYXRlQ2x1YnNcXFwiIHZhbGlkYXRpb249XFxcIm1heF9sZW46MzB8cmVxdWlyZWRcXFwiPjwvYXV0b2NvbXBsZXRlPi0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmtCw0YLQtdCz0L7RgNC40Y86PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjYXRlZ29yeUlkXFxcIiBuZy1tb2RlbD1cXFwidm0uaXRlbS50eXBlSWRcXFwiIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwib25Ub3BcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaXNIb21lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4g0JTQvtC80LAgPCEtLXRvZG8gYWRkIHN3aXRjaGVyLS0+IFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmFtZT1cXFwiZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1yZWFkb25seT1cXFwidHJ1ZVxcXCIgc2hvdy1idXR0b24tYmFyPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1aWItZGF0ZXBpY2tlci1wb3B1cD1cXFwiZGQvTU1NTS95eXl5XFxcIiBuZy1tb2RlbD1cXFwidm0uaXRlbS5kYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XFxcInZtLnN0YXR1cy5vcGVuZWRcXFwiIGRhdGVwaWNrZXItb3B0aW9ucz1cXFwidm0uZGF0ZU9wdGlvbnNcXFwiIGNsb3NlLXRleHQ9XFxcItCX0LDQutGA0YvRgtGMXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdC1pbnB1dC1mb3JtYXRzPVxcXCJhbHRJbnB1dEZvcm1hdHNcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB2YS10b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbigpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IHVpYi10aW1lcGlja2VyIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLnRpbWVcXFwiIG5nLWNoYW5nZT1cXFwidm0udGltZUNoYW5nZWQoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91ci1zdGVwPVxcXCIxXFxcIiBtaW51dGUtc3RlcD1cXFwiMVxcXCIgc2hvdy1tZXJpZGlhbj1cXFwiZmFsc2VcXFwiIHNob3ctc3Bpbm5lcnM9XFxcImZhbHNlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIXZtLml0ZW0uZGF0ZVxcXCI+PC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+IDwhLXRvZG8gbWFnaWMgbnVtYmVyLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9tYXRjaCcsIDAsICdlZGl0JyBdXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJjbHViRWRpdCh7aWQ6IGl0ZW0uaWR9KVxcXCI+PHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5uYW1lXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJ2bS5kZWxldGUoJGluZGV4KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiaXRlbS5lbmdsaXNoTmFtZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7aXRlbS5sb2dvfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDwhLS08dWliLXBhZ2luYXRpb24gbmctc2hvdz1cXFwidm0udG90YWxJdGVtcyA+IHZtLml0ZW1QZXJQYWdlXFxcIiB0b3RhbC1pdGVtcz1cXFwidm0udG90YWxJdGVtc1xcXCIgbmctbW9kZWw9XFxcInZtLnBhZ2VcXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC91aWItcGFnaW5hdGlvbj4tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQte3tkZWVwfX0gY29sLXNtLW9mZnNldC17e2RlZXB9fSBjb21tZW50IGNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgaXRlbS5hdXRob3JJZF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYXV0aG9yVXNlck5hbWVcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic21hbGxcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLmF1dGhvcklkKVxcXCIgKGNsaWNrKT1cXFwic2hvd0VkaXRNb2RhbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPiA8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPiA8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyLW1lZGl1bVxcXCIgc3JjPVxcXCJ7e2l0ZW0ucGhvdG99fVxcXCIgYWx0PVxcXCJ7e2l0ZW0uYXV0aG9yVXNlck5hbWV9fVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8cCBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiaXRlbS5hbnN3ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTNcXFwiPtCe0YLQstC10YI6PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hbnN3ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCIgKm5nSWY9XFxcIiFyb2xlcy5pc1NlbGYoaXRlbS5hdXRob3JJZCkgJiYgY2FuQ29tbWVudGFyeVxcXCI+XFxyXFxuICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93QWRkQ29tbWVudE1vZGFsKClcXFwiPtCe0YLQstC10YLQuNGC0Yw8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlblxcXCI+XFxyXFxuICAgIDxtYXRlcmlhbENvbW1lbnQtZGV0YWlsIFtpdGVtXT1cXFwiY2hpbGRcXFwiIFtkZWVwXT1cXFwiZGVlcCA+IDYgPyA3IDogZGVlcCsxXFxcIiBbbWF0ZXJpYWxJZF09XFxcIm1hdGVyaWFsSWRcXFwiIFtjYW5Db21tZW50YXJ5XT1cXFwiY2FuQ29tbWVudGFyeVxcXCIgW3BhcmVudF09XFxcIml0ZW1cXFwiPjwvbWF0ZXJpYWxDb21tZW50LWRldGFpbD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNhZGRDb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0JTQvtCx0LDQstC40YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhZGRDb21tZW50KClcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNlZGl0Q29tbWVudE1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40Lk8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ2Fuc3dlciddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4gICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImVkaXQoKVxcXCI+0J7QsdC90L7QstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8IS0tZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgdWktc3JlZj1cXFwid2lzaEVkaXQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdi0tPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIG5nLWNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgY29tbWVudC5hdXRob3JJZF1cXFwiPjxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNvbW1lbnQuYXV0aG9yVXNlck5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCIgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiY29tbWVudC5pc1ZlcmlmaWVkXFxcIiAoY2xpY2spPVxcXCJ2ZXJpZnkoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5tZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcImNvbW1lbnQuYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtc1xcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PtCa0L7QvNC80LXQvdGC0LDRgNC40Lg6IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW1zLmxlbmd0aFxcXCI+PC9zcGFuPjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIlxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBpdGVtc1xcXCI+XFxyXFxuICAgIDxtYXRlcmlhbENvbW1lbnQtZGV0YWlsIFtpdGVtXT1cXFwiY29tbWVudFxcXCIgW2RlZXBdPVxcXCIwXFxcIiBbbWF0ZXJpYWxJZF09XFxcIm1hdGVyaWFsSWRcXFwiIFtjYW5Db21tZW50YXJ5XT1cXFwiY2FuQ29tbWVudGFyeVxcXCI+PC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsPlxcclxcbjwvZGl2Plxcclxcblxcclxcbjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJjb21tZW50Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoY29tbWVudEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiAqbmdJZj1cXFwiY2FuQ29tbWVudGFyeSAmJiByb2xlcy5pc0xvZ2luZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC04XFxcIiByb3dzPVxcXCI2XFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBjZW50ZXItYmxvY2tcXFwiIFtkaXNhYmxlZF09XFxcIiFjb21tZW50Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXMgJiYgdG90YWxJdGVtcyA+IGl0ZW1zUGVyUGFnZVxcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyduYW1lJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0J7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJyaWVmXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCe0YLQv9GA0LDQstC40YLRjFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxhIHNlY3VyZWQ9XFxcIm5ld3NGdWxsXFxcIiBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeScsIDAsICdlZGl0J11cXFwiPtCh0L7Qt9C00LDRgtGMINC60LDRgtC10LPQvtGA0LjRjjwvYT5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGNhdGVnb3J5IG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCAxLCBjYXRlZ29yeS5pZCBdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkubmFtZVxcXCI+PC9zcGFuPiBbPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkuaXRlbXNDb3VudFxcXCI+PC9zcGFuPl1cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPCEtLS0+YSBzZWN1cmVkPVxcXCJuZXdzU3RhcnRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgcGFnZSwgaXRlbS5jYXRlZ29yeUlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5uYW1lXFxcIj48L3NwYW4+IFs8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5pdGVtc0NvdW50XFxcIj48L3NwYW4+XVxcclxcbiAgICAgICAgICAgIDwvIS0tYS0tPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJcXFwiIHNlY3VyZWQ9XFxcIm5ld3NTdGFydFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzQ2F0ZWdvcnknLCBjYXRlZ29yeS5pZCwgJ2VkaXQnXVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiXFxcIiBzZWN1cmVkPVxcXCJuZXdzRnVsbFxcXCIgKm5nSWY9XFxcImNhdGVnb3J5Lml0ZW1zQ291bnQgPT0gMFxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKGkpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiICpuZ0lmPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtZGFuZ2VyIGZsZXgtdmVydGljYWwtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zIHB1bGwtcmlnaHRcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS51c2VySWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW2hpZGRlbl09XFxcIiFpdGVtLnBlbmRpbmcgfHwgIXJvbGVzLmlzRWRpdG9yXFxcIiAoY2xpY2spPVxcXCJzaG93QWN0aXZhdGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2tcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgIDxhcnRpY2xlIFtpbm5lckhUTUxdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCf0YDQvtGB0LzQvtGC0YDRizo8L2xhYmVsPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJlYWRzXFxcIj48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7QmNGB0YLQvtGH0L3QuNC6OjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uc291cmNlXFxcIj48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7QlNCw0YLQsCDQtNC+0LHQsNCy0LvQtdC90LjRjzo8L2xhYmVsPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFkZGl0aW9uVGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPiA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDEsIGl0ZW0uY2F0ZWdvcnlJZCBdXFxcIj4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5jYXRlZ29yeU5hbWVcXFwiPjwvc3Bhbj4gPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGNvbW1lbnRzIFttYXRlcmlhbElkXT1cXFwiaXRlbS5pZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJpdGVtLmNhbkNvbW1lbnRhcnlcXFwiPjwvY29tbWVudHM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjYWN0aXZhdGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2YXRlKClcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNhdGVnb3J5SWRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydjYXRlZ29yeUlkJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXFxcIiB2YWx1ZT1cXFwie3tjYXRlZ29yeS5pZH19XFxcIj57e2NhdGVnb3J5Lm5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0J3QsNC30LLQsNC90LjQtTo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJyaWVmXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snYnJpZWYnXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCi0LXQutGB0YIg0L3QvtCy0L7RgdGC0Lg6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNlxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCY0YHRgtC+0YfQvdC40Lo6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNvdXJjZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3NvdXJjZSddXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCT0LvQsNCy0L3QvtC1INGE0L7RgtC+OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaG90b1BhdGhcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydwaG90byddXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIHVpLXZpZXc9XFxcImZpbGVzXFxcIiBhdXRvc2Nyb2xsPVxcXCJmYWxzZVxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImNhbkNvbW1lbnRhcnlcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydjYW5Db21tZW50YXJ5J11cXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkIC8+INCg0LDQt9GA0LXRiNC40YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC4XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJvblRvcFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ29uVG9wJ11cXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiDQndCw0LLQtdGA0YXRg1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicGVuZGluZ1xcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3BlbmRpbmcnXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+INCe0YLQu9C+0LbQtdC90LBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDwhLS1uZy1pZj1cXFwidm0ucGFnZSA+IDBcXFwiPi0tPlxcclxcbiAgICAgICAgPCEtLWZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5jYXRlZ29yeUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwiY2F0ZWdvcnkuaWQgYXMgY2F0ZWdvcnkubmFtZSBmb3IgY2F0ZWdvcnkgaW4gdm0uY2F0ZWdvcmllc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VDYXRlZ29yeUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0udXNlck5hbWVcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlVc2VyTmFtZSgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItLVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0tLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIiAqbmdJZj1cXFwiIWl0ZW0ucGVuZGluZyB8fCByb2xlcy5pc0VkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MnLCBpdGVtLmlkXVxcXCIgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj48aDQgW3RleHRDb250ZW50XT1cXFwiaXRlbS50aXRsZVxcXCI+PC9oND48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tMyBwdWxsLXJpZ2h0XFxcIiAqbmdJZj1cXFwicm9sZXMuaXNFZGl0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0udXNlcklkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiIWl0ZW0ucGVuZGluZyB8fCAhcm9sZXMuaXNFZGl0b3JcXFwiIChjbGljayk9XFxcInNob3dBY3RpdmF0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWctdGh1bWJuYWlsIG5ld3MtbWluaSBjZW50ZXItYmxvY2tcXFwiIGFsdD1cXFwiXFxcIiBbc3JjXT1cXFwiaXRlbS5waG90b1BhdGhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGk+IDxzcGFuIFtpbm5lckhUTUxdPVxcXCJpdGVtLmJyaWVmXFxcIj48L3NwYW4+PC9pPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zeC0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtaW5saW5lIHNtYWxsIHNtYWxsLW9mZnNldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCBwYWdlLCBpdGVtLmNhdGVnb3J5SWQgXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5jYXRlZ29yeU5hbWVcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCS0YDQtdC80Y8g0LTQvtCx0LDQstC70LXQvdC40Y86PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFkZGl0aW9uVGltZVxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7Qn9GA0L7RgdC80L7RgtGA0Ys8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVhZHNcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JDQstGC0L7RgDo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIGl0ZW0udXNlcklkIF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udXNlck5hbWVcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lg6PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNvbW1lbnRzQ291bnRcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2FjdGl2YXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmF0ZSgpXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGZvcm0taG9yaXpvbnRhbCBtYXJnaW4tdG9wLW1pZGRsZVxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0J/QvtC70YPRh9Cw0YLQtdC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGlzYWJsZWQgdmFsdWU9XFxcInt7aXRlbS5yZWNlaXZlcn19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRpc2FibGVkIHZhbHVlPVxcXCJ7e2l0ZW0udGl0bGV9fVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkaXNhYmxlZCByb3dzPVxcXCI0XFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLWEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0Jywge3VzZXJuYW1lOiBpdGVtLnJlY2VpdmVyLCB1c2VySWQ6IGl0ZW0uaWR9XVxcXCIgPtCe0YLQstC10YLQuNGC0Yw8LyFhLS0+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0J11cXFwiID7QntGC0LLQtdGC0LjRgtGMPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGNvbC1tZC0xMlxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwid3JpdGVQbVxcXCIgIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgIDxoMj7QndCw0L/QuNGB0LDRgtGMINGB0L7QvtCx0YnQtdC90LjQtTwvaDI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS1wIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlciBjb2wtbWQtb2Zmc2V0LTJcXFwiIG5nLWlmPVxcXCJ2bS5lcnJvck1lc3NhZ2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIG5nLWJpbmQ9XFxcInZtLmVycm9yTWVzc2FnZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvIXAtLT5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVxcXCJ1cGRhdGVVc2VybmFtZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBhdXRvLWNvbXBsZXRlIG5hbWU9XFxcInJlY2VpdmVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3JlY2VpdmVyJ11cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cXFwidXNlcnNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBtaW4tY2hhcnM9XFxcIjJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBhdHRyLXBsYWNlaG9sZGVyPVxcXCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9Li4uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5LW5hbWU9XFxcInVzZXJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8bWQtdGFiLWdyb3VwIFtzZWxlY3RlZEluZGV4XT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQtdC90L3Ri9C1XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JfQsNCz0L7Qu9C+0LLQvtC6PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0J7RgtC/0YDQsNCy0LjRgtC10LvRjDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCU0LDRgtCwINC/0L7Qu9GD0YfQtdC90LjRjzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIHJlY2VpdmVkOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwiaSArIDFcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgbWVzc2FnZS5pZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgKm5nSWY9XFxcIiFtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9iPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBtZXNzYWdlLnNlbmRlcklkXVxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5zZW5kZXJVc2VyTmFtZVxcXCI+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2Uuc2VudFRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICAgICAgPG1kLXRhYj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQu9C10L3QvdGL0LVcXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItY29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Ql9Cw0LPQvtC70L7QstC+0Lo8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCU0LDRgtCwINC+0YLQv9GA0LDQstC60Lg8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBzZW50OyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwiaSArIDFcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgbWVzc2FnZS5pZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgKm5nSWY9XFxcIiFtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9iPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBtZXNzYWdlLnJlY2VpdmVySWRdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnJlY2VpdmVyVXNlck5hbWVcXFwiPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnNlbnRUaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L21kLXRhYj5cXHJcXG4gICAgICAgIDw8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCAwLCAnZWRpdCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCd0LDQv9C40YHQsNGC0Ywg0YHQvtC+0LHRidC10L3RjNC60YNcXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L21kLXRhYj5cXHJcXG4gICAgPC9tZC10YWItZ3JvdXA+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiICpuZ0lmPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gW2hpZGRlbl09XFxcIiFyb2xlcy5pc0xvZ2luZWQgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uaWQpXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJ3cG0oeyB1c2VyTmFtZTogaXRlbS51c2VyTmFtZSB9KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvaDI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyXFxcIiBzcmM9XFxcInt7aXRlbS5waG90b319XFxcIiBhbHQ9XFxcInt7aXRlbS51c2VyTmFtZX19XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInJvbGVzLmlzU2VsZihpdGVtLmlkKSB8fCByb2xlcy5pc01vZGVyYXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgbmdmLXNlbGVjdD1cXFwidm0udXBsb2FkRmlsZXMoJGZpbGUsICRpbnZhbGlkRmlsZXMpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCIgbmdmLW1heC1oZWlnaHQ9XFxcIjEwMDBcXFwiIG5nZi1tYXgtc2l6ZT1cXFwiMU1CXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCe0LHQvdC+0LLQuNGC0Ywg0LDQstCw0YLQsNGAXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJyb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jaGFuZ2VQYXNzd29yZCddXFxcIj7QmNC30LzQtdC90LjRgtGMINC/0LDRgNC+0LvRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwidm0uZXJyRmlsZS4kZXJyb3JcXFwiIG5nLWJpbmQ9XFxcInZtLmVyckZpbGUuJGVycm9yXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJ2bS5lcnJGaWxlLiRlcnJvclBhcmFtXFxcIiBuZy1iaW5kPVxcXCJ2bS5lcnJGaWxlLiRlcnJvclBhcmFtXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIG5nLXNob3c9XFxcImYucHJvZ3Jlc3MgPj0gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIndpZHRoOnt7Zi5wcm9ncmVzc319JVxcXCIgbmctYmluZD1cXFwiZi5wcm9ncmVzcyArICclJ1xcXCI+PC8hLS1zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCb0L7Qs9C40L08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udXNlck5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uaWQpXFxcIiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Ql9Cw0LHQsNC90LjRgtGMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLXNob3c9XFxcIiFpdGVtLmxvY2tvdXRFbmREYXRlVXRjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cXFwiMFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJpdGVtLmJhbkRheXNDb3VudFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy04IGNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwidm0uYmFuKClcXFwiIG5nRGlzYWJsZWQ9XFxcIml0ZW0uYmFuRGF5c0NvdW50IDw9IDBcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCIgW2hpZGRlbl09XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTggY29sLXNtLTggZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiICpuZ0lmPVxcXCJpdGVtLmxvY2tvdXRFbmREYXRlVXRjXFxcIj7QkNC60YLQuNCy0L3QvtGB0YLRjCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0L3QsCDQtNC+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGMgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHNlY3VyZWQ9XFxcIidVc2Vyc0Z1bGwnXFxcIiBuZy1jbGljaz1cXFwidm0udW5iYW4oKVxcXCI+0KHQvdGP0YLRjCDQsdCw0L08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qk9GA0YPQv9C/0LA6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucm9sZUdyb3VwTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBzZWN1cmVkPVxcXCInQWRtaW5TdGFydCdcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5ld3NDYXRlZ29yeUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwiaXRlbS5yb2xlR3JvdXBJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwicm9sZUdyb3VwLmlkIGFzIHJvbGVHcm91cC5uYW1lIGZvciByb2xlR3JvdXAgaW4gdm0ucm9sZUdyb3Vwc1xcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIG5nLWNoYW5nZT1cXFwidm0uZWRpdFJvbGUoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIXJvbGVzLmlzU2VsZiB8fCAhcm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBbaGlkZGVuXT1cXFwiIWl0ZW0uZW1haWxDb25maXJtZWRcXFwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbCB0ZXh0LWRhbmdlclxcXCIgdWliLXRvb2x0aXA9XFxcItCf0L7Rh9GC0LAg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LBcXFwiIFtoaWRkZW5dPVxcXCJpdGVtLmVtYWlsQ29uZmlybWVkXFxcIj7Qn9C+0YfRgtCwPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5lbWFpbFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7RgdC70LXQtNC90LjQuSDQstGF0L7QtCA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmxhc3RNb2RpZmllZE9uIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LDRgtCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lg8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJlZ2lzdHJhdGlvbkRhdGUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Qu9C90L7QtSDQuNC80Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmJpcnRoZGF5XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmJpcnRoZGF5IHwgZGF0ZTonbG9uZ0RhdGUnXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmdlbmRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0Ls8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAqbmdJZj1cXFwiaXRlbS5nZW5kZXJcXFwiPtCU0LXQstGD0YjQutCwPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAqbmdJZj1cXFwiIWl0ZW0uZ2VuZGVyXFxcIj7Qn9Cw0YDQtdC90Yw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiaXRlbS5uZXdzQ291bnQgPiAwXFxcIj48YSB1aS1zcmVmPVxcXCJuZXdzKHsgcGFnZTogMSwgdXNlck5hbWU6IGl0ZW0udXNlck5hbWV9KVxcXCI+0J3QvtCy0L7RgdGC0LgoPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5uZXdzQ291bnRcXFwiPjwvc3Bhbj4pPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJpdGVtLmJsb2dzQ291bnQgPiAwXFxcIj48YSB1aS1zcmVmPVxcXCJibG9nKHtwYWdlOiAxLCB1c2VyTmFtZTogaXRlbS51c2VyTmFtZX0pXFxcIj7QkdC70L7Qs9C4KDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYmxvZ3NDb3VudFxcXCI+PC9zcGFuPik8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48IS0tc2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJjaGFuZ2VSb2xlQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgNC+0LvQuDwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgINCY0LfQvNC10L3QuNGC0Yw/XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj7QmNC30LzQtdC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC8hLS1zY3JpcHQ+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwiYmFuQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+PC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAg0JfQsNCx0LDQvdC40YLRjD9cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD4tLT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtY29uZGVuc2VkXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7Qn9C+0YHQu9C10LTQvdC40Lkg0LLRhdC+0LQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0JvQvtCz0LjQvTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7QlNCw0YLQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCT0YDRg9C/0L/QsDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHkgKm5nRm9yPVxcXCJsZXQgdXNlciBvZiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwidXNlci5sYXN0TW9kaWZpZWQgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCB1c2VyLmlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibWluaS1hdmF0YXJcXFwiIHNyYz1cXFwie3t1c2VyLnBob3RvfX1cXFwiIGFsdD1cXFwie3t1c2VyLnVzZXJOYW1lfX1cXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLnVzZXJOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiIHVpYi10b29sdGlwPVxcXCLQn9C+0YfRgtCwINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvdCwXFxcIiBbaGlkZGVuXT1cXFwidXNlci5lbWFpbENvbmZpcm1lZFxcXCI+ICo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBuZy1zaG93PVxcXCJsb2dnZWRJbigpICYmIHZtLmlzTm90U2VsZih1c2VyLmlkLCB1c2VySWQoKSlcXFwiIHVpLXNyZWY9XFxcIndwbSh7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lIH0pXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcInVzZXIucmVnaXN0cmF0aW9uRGF0ZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLnJvbGVHcm91cE5hbWVcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNob3NlblJvbGVHcm91cElkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInJvbGVHcm91cC5pZCBhcyByb2xlR3JvdXAubmFtZSBmb3Igcm9sZUdyb3VwIGluIHZtLnJvbGVHcm91cHNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlUm9sZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclVzZXJOYW1lXFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VXNlck5hbWUoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCb0L7Qs9C40L1cXFwiIC8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLT51aWItcGFnaW5hdGlvbiBuZy1zaG93PVxcXCJ2bS50b3RhbEl0ZW1zID4gdm0uaXRlbVBlclBhZ2VcXFwiIHRvdGFsLWl0ZW1zPVxcXCJ2bS50b3RhbEl0ZW1zXFxcIiBuZy1tb2RlbD1cXFwidm0ucGFnZU5vXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmdvVG9QYWdlKClcXFwiPjwvIS0tdWliLXBhZ2luYXRpb24tLS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBjb2wtbWQtMTJcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5hbWU9XFxcImVkaXRXaXNoXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0KLQuNC/OjwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuZXdzQ2F0ZWdvcnlJZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3R5cGUnXVxcXCI+PC9zZWxlY3Q+LS0+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndHlwZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVxcXCJ0eXBlLmlkXFxcIiAqbmdGb3I9XFxcImxldCB0eXBlIG9mIHR5cGVzXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ0eXBlLm5hbWVcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7Qt9C00LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4tLT4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3dpc2gnLCAwLCAnZWRpdCddXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgd2lzaCBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0VHlwZUNsYXNzKHdpc2gudHlwZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCcsIHdpc2guaWQsICdlZGl0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIndpc2gudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIiBzZWN1cmVkPVxcXCJBZG1pbkZ1bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJ2bS5kZWxldGUoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIndpc2gubWVzc2FnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJ3aXNoLnR5cGVOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLXVpYi1wYWdpbmF0aW9uIG5nLXNob3c9XFxcInZtLnRvdGFsSXRlbXMgPiB2bS5pdGVtUGVyUGFnZVxcXCIgdG90YWwtaXRlbXM9XFxcInZtLnRvdGFsSXRlbXNcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wYWdlXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmdvVG9QYWdlKClcXFwiPjwvIS0tdWliLXBhZ2luYXRpb24tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL21hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIlxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWF1dG8tY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItYXV0by1jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIlxuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIlxuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vX18yLjEuMS53b3JrYXJvdW5kLnRzXCI7XHJcbmltcG9ydCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZVwiO1xyXG5pbXBvcnQgXCJ6b25lLmpzXCI7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KTogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XFxuXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICAgIDxoZWFkPjwvaGVhZD5cclxuICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8bXktYXBwPjwvbXktYXBwPlxyXG4gICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgPC9odG1sPlxyXG4gICAgYDtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiBkb2NcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2Jvb3Qtc2VydmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==