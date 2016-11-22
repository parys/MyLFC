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
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(98));
__export(__webpack_require__(6));
__export(__webpack_require__(145));
__export(__webpack_require__(99));
__export(__webpack_require__(39));
__export(__webpack_require__(96));
//# sourceMappingURL=index.js.map

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
var http_1 = __webpack_require__(23);
var localStorage_service_1 = __webpack_require__(145);
var HttpWrapper = (function () {
    function HttpWrapper(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    HttpWrapper.prototype.updateHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        if (this.localStorage.hasAccessToken()) {
            headers.append("Authorization", this.localStorage.getAccessTokenWithType());
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
        __metadata('design:paramtypes', [http_1.Http, localStorage_service_1.LocalStorageService])
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
var index_1 = __webpack_require__(2);
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
var http_1 = __webpack_require__(23);
var router_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
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
        if (localStorage.hasAccessToken()) {
            this.isLoggedIn = true;
            this.roles = localStorage.getRoles();
            this.id = localStorage.getUserId();
        }
        else {
            localStorage.removeRoles();
        }
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        var perams = "grant_type=password&username=" + username + "&password=" + password + "&client_id=client_id3";
        this.http1.post(this.configuration.Server + "connect/token", perams, {
            headers: headers
        })
            .subscribe(function (data) { return _this.parseLoginAnswer(data); }, function (error) {
            if (error._body === "unconfirmed_email") {
                _this.router.navigate(["/unconfirmedEmail"]);
                return;
            }
            console.log(error);
        }, function () { return _this.getUserId(); });
        return true;
    };
    AuthService.prototype.logout = function () {
        this.localStorage.removeAuthTokens();
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
        console.log(item);
        if (this.localStorage.setAuthTokens(item)) {
            this.isLoggedIn = true;
        }
    };
    AuthService.prototype.parseRoles = function (item) {
        console.log(item);
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
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
            _this.localStorage.setUserId(_this.id.toString());
            _this.getRoles();
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpWrapper, http_1.Http, index_1.LocalStorageService, index_1.RolesCheckedService, router_1.Router, app_constants_1.Configuration])
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
var index_1 = __webpack_require__(2);
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
__export(__webpack_require__(67));
__export(__webpack_require__(66));
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
__export(__webpack_require__(78));
__export(__webpack_require__(77));
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
__export(__webpack_require__(87));
__export(__webpack_require__(89));
__export(__webpack_require__(88));
__export(__webpack_require__(36));
__export(__webpack_require__(13));
//# sourceMappingURL=index.js.map

/***/ },
/* 21 */
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
/* 23 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(54));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(52));
__export(__webpack_require__(59));
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
var index_1 = __webpack_require__(2);
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
__export(__webpack_require__(64));
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
var index_1 = __webpack_require__(2);
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
__export(__webpack_require__(71));
__export(__webpack_require__(28));
__export(__webpack_require__(70));
//# sourceMappingURL=index.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(73));
__export(__webpack_require__(76));
__export(__webpack_require__(75));
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
__export(__webpack_require__(82));
__export(__webpack_require__(12));
__export(__webpack_require__(83));
__export(__webpack_require__(81));
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
var router_1 = __webpack_require__(1);
var newsCategory_model_1 = __webpack_require__(85);
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
__export(__webpack_require__(94));
__export(__webpack_require__(92));
__export(__webpack_require__(93));
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
var localStorage_service_1 = __webpack_require__(145);
var RolesCheckedService = (function () {
    function RolesCheckedService(localStorage) {
        var _this = this;
        this.localStorage = localStorage;
        this.checkedRoles = {
            isLogined: false,
            isEditor: false,
            isNewsmaker: false,
            isModerator: false,
            isMainModerator: false,
            isAdminAssistant: false,
            isSelf: function (userId) { return _this.isSelf(userId); }
        };
        this.checkRoles();
    }
    RolesCheckedService.prototype.checkRoles = function () {
        this.roles = this.localStorage.getRoles();
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
        var userId = this.localStorage.getUserId();
        return (userId === authorId);
    };
    RolesCheckedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
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
var router_1 = __webpack_require__(1);
var user_service_1 = __webpack_require__(21);
var index_1 = __webpack_require__(2);
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
var router_1 = __webpack_require__(1);
var user_service_1 = __webpack_require__(21);
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
__export(__webpack_require__(22));
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
var material_1 = __webpack_require__(138);
var platform_browser_1 = __webpack_require__(8);
var angular2_universal_1 = __webpack_require__(24);
var http_1 = __webpack_require__(23);
var local_storage_1 = __webpack_require__(97);
var app_component_1 = __webpack_require__(62);
var app_routes_1 = __webpack_require__(63);
var app_constants_1 = __webpack_require__(4);
var index_1 = __webpack_require__(20);
var newsCategory = __webpack_require__(33);
var index_2 = __webpack_require__(27);
var index_3 = __webpack_require__(29);
var account = __webpack_require__(25);
var club = __webpack_require__(16);
var match = __webpack_require__(17);
var shared = __webpack_require__(2);
var user_detail_component_1 = __webpack_require__(40);
var user_service_1 = __webpack_require__(21);
var user_list_component_1 = __webpack_require__(41);
var index_4 = __webpack_require__(37);
var index_5 = __webpack_require__(30);
var index_6 = __webpack_require__(42);
var index_7 = __webpack_require__(32);
var ng2_auto_complete_1 = __webpack_require__(140);
var index_8 = __webpack_require__(61);
var ng2_bootstrap_1 = __webpack_require__(9);
var ng2_file_upload_1 = __webpack_require__(44);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_universal_1.UniversalModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ng2_bootstrap_1.DatepickerModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.FormsModule,
                material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.ModalModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
                ng2_bootstrap_1.PaginationModule,
                forms_1.ReactiveFormsModule,
                app_routes_1.routing
            ],
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
                shared.SecuredDirective,
                app_component_1.AppComponent,
                index_5.ClubHistoryComponent,
                index_8.EplTableComponent,
                index_3.ForumSectionListComponent,
                match.MatchEditComponent,
                match.MatchListComponent,
                index_7.MaterialCommentDetailComponent,
                index_7.MaterialCommentListComponent,
                index_7.MaterialCommentSectionComponent,
                index_1.NewsListComponent,
                index_1.NewsDetailComponent,
                index_1.NewsEditComponent,
                index_4.PmDetailComponent,
                index_4.PmEditComponent,
                index_4.PmListComponent,
                index_5.RightSidebarComponent,
                index_5.RulesComponent,
                user_detail_component_1.UserDetailComponent,
                user_list_component_1.UserListComponent,
                index_6.WishEditComponent,
                index_6.WishListComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                account.AccountService,
                club.ClubService,
                match.MatchService,
                newsCategory.NewsCategoryService,
                shared.HttpWrapper,
                shared.GlobalValidators,
                shared.LocalStorageService,
                shared.RolesCheckedService,
                index_8.AdminService,
                app_routes_1.appRoutingProviders,
                index_2.AuthGuard,
                index_2.AuthService,
                app_constants_1.Configuration,
                index_3.ForumSectionService,
                { provide: local_storage_1.LocalStorage, useFactory: function () { return (window) ? window.localStorage : {}; } },
                index_7.MaterialCommentService,
                index_1.NewsService,
                index_4.PmService,
                platform_browser_1.Title,
                user_service_1.UserService,
                index_6.WishService
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

module.exports = require("angular2-universal-polyfills/node");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("zone.js");

/***/ },
/* 49 */
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
var signup_model_1 = __webpack_require__(58);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(2);
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
/* 51 */
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
/* 52 */
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
var index_1 = __webpack_require__(2);
var changePassword_model_1 = __webpack_require__(53);
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
/* 53 */
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
/* 54 */
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
var router_1 = __webpack_require__(1);
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
var forms_1 = __webpack_require__(3);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(2);
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
var router_1 = __webpack_require__(1);
var account_service_1 = __webpack_require__(7);
var index_1 = __webpack_require__(2);
var resetPassword_model_1 = __webpack_require__(57);
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
var index_1 = __webpack_require__(2);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(26));
__export(__webpack_require__(60));
//# sourceMappingURL=index.js.map

/***/ },
/* 62 */
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
var router_1 = __webpack_require__(1);
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(1);
var index_1 = __webpack_require__(20);
var auth_routing_1 = __webpack_require__(65);
var account_routing_1 = __webpack_require__(51);
var club_routing_1 = __webpack_require__(69);
var newsCategory_routing_1 = __webpack_require__(86);
var news_routing_1 = __webpack_require__(90);
var user_routing_1 = __webpack_require__(100);
var pm_routing_1 = __webpack_require__(95);
var home_routing_1 = __webpack_require__(74);
var forumSection_routing_1 = __webpack_require__(72);
var wish_routing_1 = __webpack_require__(104);
var materialComment_routing_1 = __webpack_require__(84);
var match_routing_1 = __webpack_require__(80);
var routes = account_routing_1.accountRoutes.concat(auth_routing_1.authRoutes, club_routing_1.clubRoutes, forumSection_routing_1.forumSectionRoutes, home_routing_1.homeRoutes, match_routing_1.matchRoutes, materialComment_routing_1.materialCommentRoutes, newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, pm_routing_1.pmRoutes, user_routing_1.userRoutes, wish_routing_1.wishRoutes, [
    { path: "", component: index_1.NewsListComponent }
]);
exports.appRoutingProviders = [
    auth_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ },
/* 64 */
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
var router_1 = __webpack_require__(1);
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
/* 65 */
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
/* 66 */
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
var router_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(8);
var club_service_1 = __webpack_require__(15);
var club_model_1 = __webpack_require__(68);
var index_1 = __webpack_require__(2);
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
            authToken: this.localStorage.getAccessTokenWithType(),
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
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, router_1.Router, index_1.LocalStorageService, forms_1.FormBuilder, platform_browser_1.Title])
    ], ClubEditComponent);
    return ClubEditComponent;
}());
exports.ClubEditComponent = ClubEditComponent;
//# sourceMappingURL=club-edit.component.js.map

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
var common_1 = __webpack_require__(10);
var platform_browser_1 = __webpack_require__(8);
var router_1 = __webpack_require__(1);
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
var index_1 = __webpack_require__(2);
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
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__(29);
exports.forumSectionRoutes = [
    { path: "forum", component: index_1.ForumSectionListComponent },
];
//# sourceMappingURL=forumSection.routing.js.map

/***/ },
/* 73 */
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
/* 74 */
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
/* 75 */
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
var index_1 = __webpack_require__(2);
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
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(1);
var index_1 = __webpack_require__(17);
var index_2 = __webpack_require__(16);
var match_model_1 = __webpack_require__(79);
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
var router_1 = __webpack_require__(1);
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
/* 79 */
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
/* 80 */
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
/* 81 */
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
var index_1 = __webpack_require__(2);
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
var materialComment_service_1 = __webpack_require__(12);
var common_1 = __webpack_require__(10);
var index_1 = __webpack_require__(2);
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
var forms_1 = __webpack_require__(3);
var materialComment_model_1 = __webpack_require__(18);
var materialComment_service_1 = __webpack_require__(12);
var common_1 = __webpack_require__(10);
var index_1 = __webpack_require__(2);
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
/* 84 */
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
/* 85 */
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
/* 86 */
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
/* 87 */
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
var router_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
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
        if (!this.localStorage.tryAddViewForNews(id)) {
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
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, index_1.LocalStorageService, index_1.RolesCheckedService, router_1.Router, platform_browser_1.Title])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map

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
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(1);
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
var common_1 = __webpack_require__(10);
var news_service_1 = __webpack_require__(13);
var newsFilters_model_1 = __webpack_require__(91);
var router_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
var router_1 = __webpack_require__(1);
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
var forms_1 = __webpack_require__(3);
var router_1 = __webpack_require__(1);
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
/* 95 */
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
/* 96 */
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
exports.LocalStorage = new core_1.OpaqueToken("localStorage");
//# sourceMappingURL=local-storage.js.map

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
var router_1 = __webpack_require__(1);
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
var wish_service_1 = __webpack_require__(22);
var router_1 = __webpack_require__(1);
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
var wish_service_1 = __webpack_require__(22);
var router_1 = __webpack_require__(1);
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

module.exports = "<table class=\"table table-condensed table-striped table-responsive col-xs-12 overflowable\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Команда</th>\r\n            <th>И</th>\r\n            <th>В</th>\r\n            <th>Н</th>\r\n            <th>П</th>\r\n            <th>+/-</th>\r\n            <th>О</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody><tr><td>1</td><td>Ливерпуль\n</td><td>11</td><td>8</td><td>2</td><td>1</td><td>16</td><td>26</td></tr>\r\n<tr><td>2</td><td>Челси\n</td><td>11</td><td>8</td><td>1</td><td>2</td><td>17</td><td>25</td></tr>\r\n<tr><td>3</td><td>Манчестер Сити\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>15</td><td>24</td></tr>\r\n<tr><td>4</td><td>Арсенал\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>13</td><td>24</td></tr>\r\n<tr><td>5</td><td>Тоттенхэм\n</td><td>11</td><td>5</td><td>6</td><td>0</td><td>9</td><td>21</td></tr>\r\n<tr><td>6</td><td>Манчестер Юнайтед\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>3</td><td>18</td></tr>\r\n<tr><td>7</td><td>Эвертон\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>2</td><td>18</td></tr>\r\n<tr><td>8</td><td>Уотфорд\n</td><td>11</td><td>4</td><td>3</td><td>4</td><td>-4</td><td>15</td></tr>\r\n<tr><td>9</td><td>Бернли\n</td><td>11</td><td>4</td><td>2</td><td>5</td><td>-4</td><td>14</td></tr>\r\n<tr><td>10</td><td>Саутгемптон\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>0</td><td>13</td></tr>\r\n<tr><td>11</td><td>Вест Бромвич\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-3</td><td>13</td></tr>\r\n<tr><td>12</td><td>Сток Сити\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-5</td><td>13</td></tr>\r\n<tr><td>13</td><td>Борнмут\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-3</td><td>12</td></tr>\r\n<tr><td>14</td><td>Лестер\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-5</td><td>12</td></tr>\r\n<tr><td>15</td><td>Мидлсбро\n</td><td>11</td><td>2</td><td>5</td><td>4</td><td>-2</td><td>11</td></tr>\r\n<tr><td>16</td><td>Кристал Пэлас\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-3</td><td>11</td></tr>\r\n<tr><td>17</td><td>Вест Хэм\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-9</td><td>11</td></tr>\r\n<tr><td>18</td><td>Халл\n</td><td>11</td><td>3</td><td>1</td><td>7</td><td>-14</td><td>10</td></tr>\r\n<tr><td>19</td><td>Суонси\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-11</td><td>5</td></tr>\r\n<tr><td>20</td><td>Сандерленд\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-12</td><td>5</td></tr>\r\n</tbody></table>";

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
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(24);
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
                document: "<my-app></my-app>"
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


/***/ },
/* 145 */
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
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (!localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
    }
    LocalStorageService.prototype.hasAccessToken = function () {
        return this.get("access_token") !== null;
    };
    LocalStorageService.prototype.getAccessTokenWithType = function () {
        return this.get("token_type") + " " + this.get("access_token");
    };
    LocalStorageService.prototype.getRoles = function () {
        return this.getObject("roles");
    };
    LocalStorageService.prototype.getUserId = function () {
        return +this.get("userId");
    };
    LocalStorageService.prototype.removeRoles = function () {
        this.remove("roles");
    };
    LocalStorageService.prototype.removeAuthTokens = function () {
        this.remove("token_type");
        this.remove("access_token");
        this.remove("expires_in");
        this.remove("refresh_token");
        this.remove("roles");
        this.remove("userId");
    };
    LocalStorageService.prototype.setAuthTokens = function (item) {
        var response = JSON.parse(item._body);
        this.set("token_type", response.token_type);
        this.set("access_token", response.access_token);
        this.set("expires_in", response.expires_in);
        this.set("refresh_token", response.refresh_token);
        return true;
    };
    LocalStorageService.prototype.setRoles = function (roles) {
        this.setObject("roles", roles);
    };
    LocalStorageService.prototype.setUserId = function (id) {
        this.setObject("userId", id);
    };
    LocalStorageService.prototype.tryAddViewForNews = function (id) {
        if (!this.get("material" + id)) {
            this.set("material" + id, "1");
            return true;
        }
        return false;
    };
    LocalStorageService.prototype.set = function (key, value) {
        localStorage[key] = value;
    };
    LocalStorageService.prototype.get = function (key) {
        return localStorage[key] || false;
    };
    LocalStorageService.prototype.setObject = function (key, value) {
        localStorage[key] = JSON.stringify(value);
    };
    LocalStorageService.prototype.getObject = function (key) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return null;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localStorage.service.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDdhYjBhZWExNGQ5NmEzZmU4MTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2h0dHBXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vYWRtaW4uc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3JvbGVzLWNoZWNrZWQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLm1vZGVsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiem9uZS5qc1wiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3NpZ251cC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLnJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3NGaWx0ZXJzLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1kZXRhaWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnJvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9nbG9iYWxWYWxpZGF0b3JzLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvc2VjdXJlZC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLmpzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnJvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaFR5cGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWduaW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWdudXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9lcGxUYWJsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL21hdGVyaWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWF1dG8tY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9ib290LXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2xvY2FsU3RvcmFnZS5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7OztBQ1ZBLDJDOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztB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QUUsb0JBQW9CLDJCQUEyQixFQUFFLGVBQWUsRUFBRTtBQUMxSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUQ7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0M7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtDQUErQyxFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUQ7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLDJCQUEyQixFQUFFLGVBQWUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNEOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhDOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFrQixjQUFNLGVBQVEsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDeEYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDOztBQS9CRCw0QkErQkM7Ozs7Ozs7O0FDekNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnRCIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanNcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ3YWIwYWVhMTRkOTZhM2ZlODE2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhZ2VhYmxlLm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaHR0cFdyYXBwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sb2NhbFN0b3JhZ2Uuc2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NlY3VyZWQuZGlyZWN0aXZlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcm9sZXMtY2hlY2tlZC5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2xvYmFsVmFsaWRhdG9yc1wiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBDb25maWd1cmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5TZXJ2ZXIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTY2OS9cIjtcclxuICAgICAgICB0aGlzLkFwaVVybCA9IFwiYXBpL3YxL1wiO1xyXG4gICAgICAgIHRoaXMuU2VydmVyV2l0aEFwaVVybCA9IHRoaXMuU2VydmVyICsgdGhpcy5BcGlVcmw7XHJcbiAgICB9XHJcbiAgICBDb25maWd1cmF0aW9uID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIENvbmZpZ3VyYXRpb24pO1xyXG4gICAgcmV0dXJuIENvbmZpZ3VyYXRpb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5jb25zdGFudHMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgbG9jYWxTdG9yYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgSHR0cFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cFdyYXBwZXIoaHR0cCwgbG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgIH1cclxuICAgIEh0dHBXcmFwcGVyLnByb3RvdHlwZS51cGRhdGVIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZS5oYXNBY2Nlc3NUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCB0aGlzLmxvY2FsU3RvcmFnZS5nZXRBY2Nlc3NUb2tlbldpdGhUeXBlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmh0dHAuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgSHR0cFdyYXBwZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnVwZGF0ZUhlYWRlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy51cGRhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwV3JhcHBlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBXcmFwcGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF8xLkh0dHAsIGxvY2FsU3RvcmFnZV9zZXJ2aWNlXzEuTG9jYWxTdG9yYWdlU2VydmljZV0pXHJcbiAgICBdLCBIdHRwV3JhcHBlcik7XHJcbiAgICByZXR1cm4gSHR0cFdyYXBwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSHR0cFdyYXBwZXIgPSBIdHRwV3JhcHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cFdyYXBwZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2h0dHBXcmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIEFjY291bnRTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFjY291bnRTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsICsgXCJyZWdpc3Rlci9cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29uZmlybUVtYWlsID0gZnVuY3Rpb24gKHVzZXJJZCwgY29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgKFwiY29uZmlybUVtYWlsP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJmNvZGU9XCIgKyBjb2RlKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgKFwiZm9yZ290UGFzc3dvcmQ/ZW1haWw9XCIgKyBlbWFpbCkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVzZW5kQ29uZmlybUVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyAoXCJyZXNlbmRDb25maXJtRW1haWw/ZW1haWw9XCIgKyBlbWFpbCkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgXCJyZXNldFBhc3N3b3JkXCIsIG1vZGVsKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnB1dChfdGhpcy5hY3Rpb25VcmwgKyBcImNoYW5nZVBhc3N3b3JkXCIsIG1vZGVsKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiYWNjb3VudC9cIjtcclxuICAgIH1cclxuICAgIEFjY291bnRTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaW5kZXhfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgQWNjb3VudFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEFjY291bnRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkFjY291bnRTZXJ2aWNlID0gQWNjb3VudFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIEF1dGhTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGh0dHAsIGh0dHAxLCBsb2NhbFN0b3JhZ2UsIHJvbGVzQ2hlY2tlZFNlcnZpY2UsIHJvdXRlciwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5odHRwMSA9IGh0dHAxO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkU2VydmljZSA9IHJvbGVzQ2hlY2tlZFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvbGVzID0gW107XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNBY2Nlc3NUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0Um9sZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGxvY2FsU3RvcmFnZS5nZXRVc2VySWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVSb2xlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTg7XCIpO1xyXG4gICAgICAgIHZhciBwZXJhbXMgPSBcImdyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9XCIgKyB1c2VybmFtZSArIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQgKyBcIiZjbGllbnRfaWQ9Y2xpZW50X2lkM1wiO1xyXG4gICAgICAgIHRoaXMuaHR0cDEucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyICsgXCJjb25uZWN0L3Rva2VuXCIsIHBlcmFtcywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VMb2dpbkFuc3dlcihkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5fYm9keSA9PT0gXCJ1bmNvbmZpcm1lZF9lbWFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3VuY29uZmlybWVkRW1haWxcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRVc2VySWQoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmVBdXRoVG9rZW5zKCk7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb2xlc0NoZWNrZWRTZXJ2aWNlLmNoZWNrUm9sZXMoKTtcclxuICAgIH07XHJcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuaXNVc2VySW5Sb2xlID0gZnVuY3Rpb24gKHJvbGUpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlcy5maW5kKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnRvTG93ZXJDYXNlKCkgPT09IHJvbGUudG9Mb3dlckNhc2UoKTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUucGFyc2VMb2dpbkFuc3dlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlLnNldEF1dGhUb2tlbnMoaXRlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLnBhcnNlUm9sZXMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSBpdGVtLl9ib2R5LnNwbGl0KFwiLCBcIik7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0Um9sZXModGhpcy5yb2xlcyk7XHJcbiAgICB9O1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwicm9sZVwiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZVJvbGVzKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9sZXNDaGVja2VkU2VydmljZS5jaGVja1JvbGVzKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5nZXRVc2VySWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJ1c2VyL2dldElkXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLmlkID0gK0pTT04ucGFyc2UoZGF0YS50ZXh0KCkpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0VXNlcklkKF90aGlzLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBfdGhpcy5nZXRSb2xlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEF1dGhTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaW5kZXhfMS5IdHRwV3JhcHBlciwgaHR0cF8xLkh0dHAsIGluZGV4XzEuTG9jYWxTdG9yYWdlU2VydmljZSwgaW5kZXhfMS5Sb2xlc0NoZWNrZWRTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXIsIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uXSlcclxuICAgIF0sIEF1dGhTZXJ2aWNlKTtcclxuICAgIHJldHVybiBBdXRoU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIE1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxDb21tZW50U2VydmljZShodHRwLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5nZXRBbGwgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgcGFnZSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRBbGxCeU1hdGVyaWFsID0gZnVuY3Rpb24gKHBhZ2UsIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcIm1hdGVyaWFsL1wiICsgaWQgKyBcIi9saXN0L1wiICsgcGFnZSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTaW5nbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsICsgXCJOZXdzL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGl0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLnB1dChfdGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5kZWxldGUoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnZlcmlmeSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJ2ZXJpZnkvXCIgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRlcmlhbENvbW1lbnQvXCI7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50U2VydmljZSk7XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxDb21tZW50U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbENvbW1lbnRTZXJ2aWNlID0gTWF0ZXJpYWxDb21tZW50U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0ZXJpYWxDb21tZW50LnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaHR0cFdyYXBwZXJfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIik7XHJcbnZhciBOZXdzU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzU2VydmljZShodHRwLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5nZXRBbGwgPSBmdW5jdGlvbiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRTaW5nbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLnBvc3QoX3RoaXMuYWN0aW9uVXJsICsgXCJOZXdzL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGl0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cFxyXG4gICAgICAgICAgICAgICAgLnB1dChfdGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5kZWxldGUoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZFZpZXcgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwiYWRkVmlldy9cIiArIGlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcImFjdGl2YXRlL1wiICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRlcmlhbC9cIjtcclxuICAgIH1cclxuICAgIE5ld3NTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgTmV3c1NlcnZpY2UpO1xyXG4gICAgcmV0dXJuIE5ld3NTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NTZXJ2aWNlID0gTmV3c1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3Muc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Muc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGh0dHBXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCIpO1xyXG52YXIgUG1TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBtU2VydmljZShodHRwLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5HZXRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5DcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuVXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5EZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcInBtL1wiO1xyXG4gICAgfVxyXG4gICAgUG1TZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgUG1TZXJ2aWNlKTtcclxuICAgIHJldHVybiBQbVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUG1TZXJ2aWNlID0gUG1TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbS5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIENsdWJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsdWJTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFsbCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyAoXCJsaXN0L1wiICsgcGFnZSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRCeU5hbWUgPSBmdW5jdGlvbiAodHlwZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIChcIi9nZXRDbHVic0J5TmFtZS9cIiArIHR5cGVkKSkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJjbHViL1wiO1xyXG4gICAgfVxyXG4gICAgQ2x1YlNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtpbmRleF8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBDbHViU2VydmljZSk7XHJcbiAgICByZXR1cm4gQ2x1YlNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2x1YlNlcnZpY2UgPSBDbHViU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1Yi5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NsdWIuc2VydmljZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NsdWItbGlzdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jbHViLWVkaXQuY29tcG9uZW50XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRjaC5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0Y2gtbGlzdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRjaC1lZGl0LmNvbXBvbmVudFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE1hdGVyaWFsQ29tbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbENvbW1lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxDb21tZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGVyaWFsQ29tbWVudCA9IE1hdGVyaWFsQ29tbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0ZXJpYWxDb21tZW50Lm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2FwcC5jb25zdGFudHNcIik7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIE5ld3NDYXRlZ29yeVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV3c0NhdGVnb3J5U2VydmljZShodHRwLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJuZXdzQ2F0ZWdvcnkvXCI7XHJcbiAgICB9XHJcbiAgICBOZXdzQ2F0ZWdvcnlTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgTmV3c0NhdGVnb3J5U2VydmljZSk7XHJcbiAgICByZXR1cm4gTmV3c0NhdGVnb3J5U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5OZXdzQ2F0ZWdvcnlTZXJ2aWNlID0gTmV3c0NhdGVnb3J5U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3c0NhdGVnb3J5LnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3MtZGV0YWlsLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3MtbGlzdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXdzLWVkaXQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbmV3cy5tb2RlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ld3Muc2VydmljZVwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvbWFwJyk7XHJcbnZhciBodHRwV3JhcHBlcl8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgVXNlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlclNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuR2V0QWxsID0gZnVuY3Rpb24gKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJzKSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR2V0U2luZ2xlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5DcmVhdGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5wb3N0KF90aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuVXBkYXRlID0gZnVuY3Rpb24gKGlkLCBpdGVtVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wdXQoX3RoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5EZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZGVsZXRlKF90aGlzLmFjdGlvblVybCArIGlkKS5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyAndXNlci8nO1xyXG4gICAgfVxyXG4gICAgVXNlclNlcnZpY2UucHJvdG90eXBlLmV4dHJhY3REYXRhID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHZhciBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgfTtcclxuICAgIFVzZXJTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgVXNlclNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFVzZXJTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJTZXJ2aWNlID0gVXNlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXIuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGh0dHBXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCIpO1xyXG52YXIgV2lzaFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lzaFNlcnZpY2UoaHR0cCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuR2V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkdldFNpbmdsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucG9zdChfdGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLlVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgaXRlbVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuRGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuR2V0VHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcInR5cGVzL1wiKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwid2lzaC9cIjtcclxuICAgIH1cclxuICAgIFdpc2hTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cFdyYXBwZXJfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgV2lzaFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFdpc2hTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLldpc2hTZXJ2aWNlID0gV2lzaFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpc2guc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2guc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vYWNjb3VudC1zaWduaW4uY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYWNjb3VudC1zaWdudXAuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29uZmlybUVtYWlsLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hY2NvdW50LnNlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBBZG1pblNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWRtaW5TZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVwbFRhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgXCJ1cGRhdGVUYWJsZS9cIikubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImFkbWluL1wiO1xyXG4gICAgfVxyXG4gICAgQWRtaW5TZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaW5kZXhfMS5IdHRwV3JhcHBlciwgYXBwX2NvbnN0YW50c18xLkNvbmZpZ3VyYXRpb25dKVxyXG4gICAgXSwgQWRtaW5TZXJ2aWNlKTtcclxuICAgIHJldHVybiBBZG1pblNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWRtaW5TZXJ2aWNlID0gQWRtaW5TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZG1pbi5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2FkbWluLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vYXV0aC5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnZhciBhcHBfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgRm9ydW1TZWN0aW9uU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGb3J1bVNlY3Rpb25TZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KF90aGlzLmFjdGlvblVybCArIFwibGlzdC9cIikubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImZvcnVtU2VjdGlvbi9cIjtcclxuICAgIH1cclxuICAgIEZvcnVtU2VjdGlvblNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtpbmRleF8xLkh0dHBXcmFwcGVyLCBhcHBfY29uc3RhbnRzXzEuQ29uZmlndXJhdGlvbl0pXHJcbiAgICBdLCBGb3J1bVNlY3Rpb25TZXJ2aWNlKTtcclxuICAgIHJldHVybiBGb3J1bVNlY3Rpb25TZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkZvcnVtU2VjdGlvblNlcnZpY2UgPSBGb3J1bVNlY3Rpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J1bVNlY3Rpb24uc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uLm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uLnNlcnZpY2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnRcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vY2x1Yi1oaXN0b3J5LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3J1bGVzLmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JpZ2h0U2lkZWJhci5jb21wb25lbnRcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxudmFyIGFwcF9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9hcHAuY29uc3RhbnRzXCIpO1xyXG52YXIgaHR0cFdyYXBwZXJfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIik7XHJcbnZhciBNYXRjaFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0Y2hTZXJ2aWNlKGh0dHAsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmdldFNpbmdsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHR0cC5nZXQoX3RoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAucG9zdChfdGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgaXRlbVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwXHJcbiAgICAgICAgICAgICAgICAucHV0KF90aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0VHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmdldChfdGhpcy5hY3Rpb25VcmwgKyBcIi9nZXRUeXBlc1wiKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwLmRlbGV0ZShfdGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRjaC9cIjtcclxuICAgIH1cclxuICAgIE1hdGNoU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBXcmFwcGVyXzEuSHR0cFdyYXBwZXIsIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uXSlcclxuICAgIF0sIE1hdGNoU2VydmljZSk7XHJcbiAgICByZXR1cm4gTWF0Y2hTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGNoU2VydmljZSA9IE1hdGNoU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0Y2guc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnRcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnRcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIG5ld3NDYXRlZ29yeV9tb2RlbF8xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5Lm1vZGVsXCIpO1xyXG52YXIgbmV3c0NhdGVnb3J5X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS5zZXJ2aWNlXCIpO1xyXG52YXIgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50KHNlcnZpY2UsIGZvcm1CdWlsZGVyLCByb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgIH1cclxuICAgIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbmFtZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldFNpbmdsZShfdGhpcy5pZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IG5ld3NDYXRlZ29yeV9tb2RlbF8xLk5ld3NDYXRlZ29yeSgpO1xyXG4gICAgICAgIG1vZGVsLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBtb2RlbC5uYW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwuZGVzY3JpcHRpb24gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZGVzY3JpcHRpb25cIl0udmFsdWU7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc2VydmljZS51cGRhdGUodGhpcy5pZCwgbW9kZWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gcmVzID0gZGF0YTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLmNyZWF0ZShtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXMgPSBkYXRhOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3NDYXRlZ29yeS1lZGl0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtuZXdzQ2F0ZWdvcnlfc2VydmljZV8xLk5ld3NDYXRlZ29yeVNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXIsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuICAgIF0sIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCA9IE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xyXG52YXIgbmV3c0NhdGVnb3J5X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS5zZXJ2aWNlXCIpO1xyXG52YXIgTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50KG5ld3NDYXRlZ29yeVNlcnZpY2UsIHRpdGxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZSA9IG5ld3NDYXRlZ29yeVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JrQsNGC0LXQs9C+0YDQuNC4XCIpO1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBtb2RlbDtcclxuICAgIH07XHJcbiAgICBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5ld3NDYXRlZ29yeVNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbaW5kZXhdLmlkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH07XHJcbiAgICBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3NDYXRlZ29yeS1saXN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtuZXdzQ2F0ZWdvcnlfc2VydmljZV8xLk5ld3NDYXRlZ29yeVNlcnZpY2UsIHBsYXRmb3JtX2Jyb3dzZXJfMS5UaXRsZV0pXHJcbiAgICBdLCBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQgPSBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBOZXdzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ld3MoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmV3cztcclxufSgpKTtcclxuZXhwb3J0cy5OZXdzID0gTmV3cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3cy5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vcG0ubW9kZWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wbS1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BtLWRldGFpbC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wbS1lZGl0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BtLnNlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBQbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBQbTtcclxufSgpKTtcclxuZXhwb3J0cy5QbSA9IFBtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbS5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBsb2NhbFN0b3JhZ2Vfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbG9jYWxTdG9yYWdlLnNlcnZpY2VcIik7XHJcbnZhciBSb2xlc0NoZWNrZWRTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJvbGVzQ2hlY2tlZFNlcnZpY2UobG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcyA9IHtcclxuICAgICAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc05ld3NtYWtlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTW9kZXJhdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNNYWluTW9kZXJhdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNBZG1pbkFzc2lzdGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU2VsZjogZnVuY3Rpb24gKHVzZXJJZCkgeyByZXR1cm4gX3RoaXMuaXNTZWxmKHVzZXJJZCk7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tSb2xlcygpO1xyXG4gICAgfVxyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tSb2xlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0Um9sZXMoKTtcclxuICAgICAgICBpZiAoIXRoaXMucm9sZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrRWRpdG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja05ld3NtYWtlcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNb2RlcmF0b3IoKTtcclxuICAgICAgICB0aGlzLmNoZWNrTWFpbk1vZGVyYXRvcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBZG1pbkFzc2lzdGFudCgpO1xyXG4gICAgfTtcclxuICAgIFJvbGVzQ2hlY2tlZFNlcnZpY2UucHJvdG90eXBlLmNoZWNrRWRpdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIk5ld3NGdWxsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzRWRpdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tOZXdzbWFrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiTmV3c1N0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTmV3c21ha2VyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tNb2RlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiVXNlclN0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTW9kZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tNYWluTW9kZXJhdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIlVzZXJGdWxsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTWFpbk1vZGVyYXRvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJvbGVzQ2hlY2tlZFNlcnZpY2UucHJvdG90eXBlLmNoZWNrQWRtaW5Bc3Npc3RhbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiQWRtaW5TdGFydFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc0FkbWluQXNzaXN0YW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9sZXNDaGVja2VkU2VydmljZS5wcm90b3R5cGUuY2hlY2tSb2xlID0gZnVuY3Rpb24gKHJvbGUpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlcy5maW5kKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnRvTG93ZXJDYXNlKCkgPT09IHJvbGUudG9Mb3dlckNhc2UoKTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlLnByb3RvdHlwZS5pc1NlbGYgPSBmdW5jdGlvbiAoYXV0aG9ySWQpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgcmV0dXJuICh1c2VySWQgPT09IGF1dGhvcklkKTtcclxuICAgIH07XHJcbiAgICBSb2xlc0NoZWNrZWRTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbbG9jYWxTdG9yYWdlX3NlcnZpY2VfMS5Mb2NhbFN0b3JhZ2VTZXJ2aWNlXSlcclxuICAgIF0sIFJvbGVzQ2hlY2tlZFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFJvbGVzQ2hlY2tlZFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUm9sZXNDaGVja2VkU2VydmljZSA9IFJvbGVzQ2hlY2tlZFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvbGVzLWNoZWNrZWQuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIHVzZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4vdXNlci5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBVc2VyRGV0YWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJEZXRhaWxDb21wb25lbnQodXNlclNlcnZpY2UsIHJvdXRlLCByb2xlc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgfVxyXG4gICAgVXNlckRldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyU2VydmljZS5HZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wYXJzZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXNlckRldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBVc2VyRGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIH07XHJcbiAgICBVc2VyRGV0YWlsQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInVzZXItZGV0YWlsXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt1c2VyX3NlcnZpY2VfMS5Vc2VyU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGUsIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZV0pXHJcbiAgICBdLCBVc2VyRGV0YWlsQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBVc2VyRGV0YWlsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJEZXRhaWxDb21wb25lbnQgPSBVc2VyRGV0YWlsQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VyLWRldGFpbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi91c2VyLnNlcnZpY2VcIik7XHJcbnZhciB1c2VyRmlsdGVyc19tb2RlbF8xID0gcmVxdWlyZShcIi4vdXNlckZpbHRlcnMubW9kZWxcIik7XHJcbnZhciBVc2VyTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyTGlzdENvbXBvbmVudCh1c2VyU2VydmljZSwgcm91dGUpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIH1cclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVc2VyTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBVc2VyTGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChwYWdlYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgVXNlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gbmV3IHVzZXJGaWx0ZXJzX21vZGVsXzEuVXNlckZpbHRlcnMoKTtcclxuICAgICAgICBmaWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICBmaWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZVxyXG4gICAgICAgICAgICAuR2V0QWxsKGZpbHRlcnMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlUGFnZWFibGUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInVzZXItbGlzdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vdXNlci1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3VzZXJfc2VydmljZV8xLlVzZXJTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZV0pXHJcbiAgICBdLCBVc2VyTGlzdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gVXNlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVXNlckxpc3RDb21wb25lbnQgPSBVc2VyTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vd2lzaC5tb2RlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dpc2hUeXBlLm1vZGVsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd2lzaC1saXN0LmNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dpc2gtZWRpdC5jb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi93aXNoLnNlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFdpc2ggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lzaCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBXaXNoO1xyXG59KCkpO1xyXG5leHBvcnRzLldpc2ggPSBXaXNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXNoLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9tYXRlcmlhbFwiKTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xyXG52YXIgYW5ndWxhcjJfdW5pdmVyc2FsXzEgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnZhciBsb2NhbF9zdG9yYWdlXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvbG9jYWwtc3RvcmFnZVwiKTtcclxudmFyIGFwcF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2FwcC5jb21wb25lbnRcIik7XHJcbnZhciBhcHBfcm91dGVzXzEgPSByZXF1aXJlKFwiLi9hcHAucm91dGVzXCIpO1xyXG52YXIgYXBwX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4vYXBwLmNvbnN0YW50c1wiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9uZXdzL2luZGV4XCIpO1xyXG52YXIgbmV3c0NhdGVnb3J5ID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5L2luZGV4XCIpO1xyXG52YXIgaW5kZXhfMiA9IHJlcXVpcmUoXCIuL2F1dGgvaW5kZXhcIik7XHJcbnZhciBpbmRleF8zID0gcmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uL2luZGV4XCIpO1xyXG52YXIgYWNjb3VudCA9IHJlcXVpcmUoXCIuL2FjY291bnQvaW5kZXhcIik7XHJcbnZhciBjbHViID0gcmVxdWlyZShcIi4vY2x1Yi9pbmRleFwiKTtcclxudmFyIG1hdGNoID0gcmVxdWlyZShcIi4vbWF0Y2gvaW5kZXhcIik7XHJcbnZhciBzaGFyZWQgPSByZXF1aXJlKFwiLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciB1c2VyX2RldGFpbF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50XCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi91c2VyL3VzZXIuc2VydmljZVwiKTtcclxudmFyIHVzZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIGluZGV4XzQgPSByZXF1aXJlKFwiLi9wbS9pbmRleFwiKTtcclxudmFyIGluZGV4XzUgPSByZXF1aXJlKFwiLi9ob21lL2luZGV4XCIpO1xyXG52YXIgaW5kZXhfNiA9IHJlcXVpcmUoXCIuL3dpc2gvaW5kZXhcIik7XHJcbnZhciBpbmRleF83ID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50L2luZGV4XCIpO1xyXG52YXIgbmcyX2F1dG9fY29tcGxldGVfMSA9IHJlcXVpcmUoXCJuZzItYXV0by1jb21wbGV0ZVwiKTtcclxudmFyIGluZGV4XzggPSByZXF1aXJlKFwiLi9hZG1pbi9pbmRleFwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBuZzJfZmlsZV91cGxvYWRfMSA9IHJlcXVpcmUoXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCIpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIyX3VuaXZlcnNhbF8xLlVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtX2Jyb3dzZXJfMS5Ccm93c2VyTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgaHR0cF8xLkh0dHBNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBuZzJfYm9vdHN0cmFwXzEuRGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICAgICAgICAgIG5nMl9maWxlX3VwbG9hZF8xLkZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBmb3Jtc18xLkZvcm1zTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxfMS5NYXRlcmlhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgICAgICAgICBuZzJfYm9vdHN0cmFwXzEuTW9kYWxNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBuZzJfYXV0b19jb21wbGV0ZV8xLk5nMkF1dG9Db21wbGV0ZU1vZHVsZSxcclxuICAgICAgICAgICAgICAgIG5nMl9ib290c3RyYXBfMS5QYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5SZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgYXBwX3JvdXRlc18xLnJvdXRpbmdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkFjY291bnRTaWduaW5Db21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkFjY291bnRTaWdudXBDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudC5Db25maXJtRW1haWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudC5SZXNldFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudC5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2x1Yi5DbHViRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGNsdWIuQ2x1Ykxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBuZXdzQ2F0ZWdvcnkuTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgc2hhcmVkLlNlY3VyZWREaXJlY3RpdmUsXHJcbiAgICAgICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNS5DbHViSGlzdG9yeUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzguRXBsVGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8zLkZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaC5NYXRjaEVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaC5NYXRjaExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF83Lk1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzcuTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzcuTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8xLk5ld3NEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF8xLk5ld3NFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNC5QbURldGFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzQuUG1FZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNC5QbUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleF81LlJpZ2h0U2lkZWJhckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzUuUnVsZXNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICB1c2VyX2RldGFpbF9jb21wb25lbnRfMS5Vc2VyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgdXNlcl9saXN0X2NvbXBvbmVudF8xLlVzZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNi5XaXNoRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XzYuV2lzaExpc3RDb21wb25lbnRdLFxyXG4gICAgICAgICAgICBib290c3RyYXA6IFthcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50XSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LkFjY291bnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgY2x1Yi5DbHViU2VydmljZSxcclxuICAgICAgICAgICAgICAgIG1hdGNoLk1hdGNoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgc2hhcmVkLkh0dHBXcmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgc2hhcmVkLkdsb2JhbFZhbGlkYXRvcnMsXHJcbiAgICAgICAgICAgICAgICBzaGFyZWQuTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHNoYXJlZC5Sb2xlc0NoZWNrZWRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfOC5BZG1pblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBhcHBfcm91dGVzXzEuYXBwUm91dGluZ1Byb3ZpZGVycyxcclxuICAgICAgICAgICAgICAgIGluZGV4XzIuQXV0aEd1YXJkLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfMi5BdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIGFwcF9jb25zdGFudHNfMS5Db25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfMy5Gb3J1bVNlY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBsb2NhbF9zdG9yYWdlXzEuTG9jYWxTdG9yYWdlLCB1c2VGYWN0b3J5OiBmdW5jdGlvbiAoKSB7IHJldHVybiAod2luZG93KSA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiB7fTsgfSB9LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfNy5NYXRlcmlhbENvbW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhfMS5OZXdzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIGluZGV4XzQuUG1TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBpbmRleF82Lldpc2hTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEFwcE1vZHVsZSk7XHJcbiAgICByZXR1cm4gQXBwTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcE1vZHVsZSA9IEFwcE1vZHVsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLm1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hcHAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXHJcbiAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxubGV0IF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcclxuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IF9fY29yZV9wcml2YXRlX18gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5sZXQgcGF0Y2ggPSBmYWxzZTtcclxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fW1wiVmlld1V0aWxzXCJdKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICBfX2NvcmVfcHJpdmF0ZV9fW1wiVmlld1V0aWxzXCJdID0gX19jb3JlX3ByaXZhdGVfX1tcInZpZXdfdXRpbHNcIl07XHJcbn1cclxuXHJcblxyXG5cclxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xyXG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcclxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcclxuaWYgKHBhdGNoKSB7XHJcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bXCJ2aWV3X3V0aWxzXCJdO1xyXG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvcjtcclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGF1dGhfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCIpO1xyXG52YXIgQWNjb3VudFNpZ25pbkNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50U2lnbmluQ29tcG9uZW50KGF1dGhTZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50U2lnbmluQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBY2NvdW50U2lnbmluQ29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChyYSkge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInVzZXJOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRTaWduaW5Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiYWNjb3VudC1zaWduaW5cIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyXSlcclxuICAgIF0sIEFjY291bnRTaWduaW5Db21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEFjY291bnRTaWduaW5Db21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWNjb3VudFNpZ25pbkNvbXBvbmVudCA9IEFjY291bnRTaWduaW5Db21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQtc2lnbmluLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgc2lnbnVwX21vZGVsXzEgPSByZXF1aXJlKFwiLi9zaWdudXAubW9kZWxcIik7XHJcbnZhciBhY2NvdW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2FjY291bnQuc2VydmljZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgQWNjb3VudFNpZ251cENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50U2lnbnVwQ29tcG9uZW50KGFjY291bnRTZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50U2lnbnVwQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCIxMjNcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiYW5kcmV3X3BhcnlzQHR1dC5ieVwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCAsIGluZGV4XzEuR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbXCIxMjNxd2UhUVwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiMTIzcXdlIVFcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2Z1bGxOYW1lJzogW1wiMTIzXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXSldLFxyXG4gICAgICAgICAgICAnYmlydGhkYXknOiBbXCIxMC8xMC8yMDE1XCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWNjb3VudFNpZ251cENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgc2lnbnVwID0gbmV3IHNpZ251cF9tb2RlbF8xLlNpZ251cCgpO1xyXG4gICAgICAgIHNpZ251cC51c2VyTmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1widXNlck5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmVtYWlsID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAucGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5jb25maXJtUGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImNvbmZpcm1QYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuZnVsbE5hbWUgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImZ1bGxOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5iaXJ0aGRheSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiYmlydGhkYXlcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZVxyXG4gICAgICAgICAgICAuY3JlYXRlKHNpZ251cClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBBY2NvdW50U2lnbnVwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImFjY291bnQtc2lnbnVwXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFthY2NvdW50X3NlcnZpY2VfMS5BY2NvdW50U2VydmljZSwgZm9ybXNfMS5Gb3JtQnVpbGRlcl0pXHJcbiAgICBdLCBBY2NvdW50U2lnbnVwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBY2NvdW50U2lnbnVwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkFjY291bnRTaWdudXBDb21wb25lbnQgPSBBY2NvdW50U2lnbnVwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmFjY291bnRSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwic2lnbnVwXCIsIGNvbXBvbmVudDogaW5kZXhfMS5BY2NvdW50U2lnbnVwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY29uZmlybUVtYWlsXCIsIGNvbXBvbmVudDogaW5kZXhfMS5Db25maXJtRW1haWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJmb3Jnb3RQYXNzd29yZFwiLCBjb21wb25lbnQ6IGluZGV4XzEuRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ1bmNvbmZpcm1lZEVtYWlsXCIsIGNvbXBvbmVudDogaW5kZXhfMS5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicmVzZXRQYXNzd29yZFwiLCBjb21wb25lbnQ6IGluZGV4XzEuUmVzZXRQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNoYW5nZVBhc3N3b3JkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgYWNjb3VudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50LnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIGNoYW5nZVBhc3N3b3JkX21vZGVsXzEgPSByZXF1aXJlKFwiLi9jaGFuZ2VQYXNzd29yZC5tb2RlbFwiKTtcclxudmFyIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50KHNlcnZpY2UsIGZvcm1CdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ29sZFBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV1cclxuICAgICAgICB9LCB7IHZhbGlkYXRvcjogaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1hdGNoaW5nUGFzc3dvcmRzKFwibmV3UGFzc3dvcmRcIiwgXCJjb25maXJtUGFzc3dvcmRcIikgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKHJhKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IGNoYW5nZVBhc3N3b3JkX21vZGVsXzEuQ2hhbmdlUGFzc3dvcmQoKTtcclxuICAgICAgICBtb2RlbC5vbGRQYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wib2xkUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwubmV3UGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5jb250cm9sc1tcIm5ld1Bhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VQYXNzd29yZChtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2FjY291bnRfc2VydmljZV8xLkFjY291bnRTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyXSlcclxuICAgIF0sIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBDaGFuZ2VQYXNzd29yZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCA9IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgQ2hhbmdlUGFzc3dvcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2hhbmdlUGFzc3dvcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2hhbmdlUGFzc3dvcmQgPSBDaGFuZ2VQYXNzd29yZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhbmdlUGFzc3dvcmQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBhY2NvdW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2FjY291bnQuc2VydmljZVwiKTtcclxudmFyIENvbmZpcm1FbWFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25maXJtRW1haWxDb21wb25lbnQoYWNjb3VudFNlcnZpY2UsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlID0gYWNjb3VudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBDb25maXJtRW1haWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJ1c2VySWRcIl07XHJcbiAgICAgICAgICAgIHZhciBjb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICAgICAgX3RoaXMuYWNjb3VudFNlcnZpY2UuY29uZmlybUVtYWlsKGlkLCBjb2RlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucmVzdWx0ID0gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29uZmlybUVtYWlsQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIENvbmZpcm1FbWFpbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJlbWFpbC1jb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiPHNwYW4gW2hpZGRlbl09JyFyZXN1bHQnPtCS0LDRiCDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDRg9GB0L/QtdGI0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LiDQnNC+0LbQtdGC0LUg0LLQvtC50YLQuCDQuCDQsdGL0YLRjCDQutCw0Log0LTQvtC80LAuPC9zcGFuPlwiXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2FjY291bnRfc2VydmljZV8xLkFjY291bnRTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIENvbmZpcm1FbWFpbENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQ29uZmlybUVtYWlsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbmZpcm1FbWFpbENvbXBvbmVudCA9IENvbmZpcm1FbWFpbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlybUVtYWlsLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NvbmZpcm1FbWFpbC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGFjY291bnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vYWNjb3VudC5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudChzZXJ2aWNlLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAocmEpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy5mb3Jnb3RGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHRoaXMuZW1haWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgRm9yZ290UGFzc3dvcmRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50ID0gRm9yZ290UGFzc3dvcmRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgYWNjb3VudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50LnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIHJlc2V0UGFzc3dvcmRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQubW9kZWxcIik7XHJcbnZhciBSZXNldFBhc3N3b3JkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRDb21wb25lbnQoc2VydmljZSwgcm91dGUsIHJvdXRlciwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5jb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgaW5kZXhfMS5HbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgfSwgeyB2YWxpZGF0b3I6IGluZGV4XzEuR2xvYmFsVmFsaWRhdG9ycy5tYXRjaGluZ1Bhc3N3b3JkcyhcInBhc3N3b3JkXCIsIFwiY29uZmlybVBhc3N3b3JkXCIpIH0pO1xyXG4gICAgfTtcclxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAocmEpIHtcclxuICAgICAgICB2YXIgcmVzZXRQYXNzd29yZCA9IG5ldyByZXNldFBhc3N3b3JkX21vZGVsXzEuUmVzZXRQYXNzd29yZCgpO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQuY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmVtYWlsID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLnBhc3N3b3JkID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucmVzZXRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZXNldFBhc3N3b3JkKHJlc2V0UGFzc3dvcmQpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicmVzZXQtcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXIsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgUmVzZXRQYXNzd29yZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5SZXNldFBhc3N3b3JkQ29tcG9uZW50ID0gUmVzZXRQYXNzd29yZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXRQYXNzd29yZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBSZXNldFBhc3N3b3JkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZDtcclxufSgpKTtcclxuZXhwb3J0cy5SZXNldFBhc3N3b3JkID0gUmVzZXRQYXNzd29yZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXRQYXNzd29yZC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgU2lnbnVwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWdudXA7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2lnbnVwID0gU2lnbnVwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWdudXAubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9zaWdudXAubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIGFjY291bnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vYWNjb3VudC5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgIH1cclxuICAgIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudW5jb25maXJtZWRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBpbmRleF8xLkdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIxMSk7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gdGhpcy51bmNvbmZpcm1lZEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVzZW5kQ29uZmlybUVtYWlsKGVtYWlsKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInVuY29uZmlybWVkRW1haWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYWNjb3VudF9zZXJ2aWNlXzEuQWNjb3VudFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gVW5jb25maXJtZWRFbWFpbENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50ID0gVW5jb25maXJtZWRFbWFpbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBFcGxUYWJsZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFcGxUYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEVwbFRhYmxlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBFcGxUYWJsZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJlcGwtdGFibGVcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBFcGxUYWJsZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRXBsVGFibGVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRXBsVGFibGVDb21wb25lbnQgPSBFcGxUYWJsZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXBsVGFibGUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hZG1pbi5zZXJ2aWNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXBsVGFibGUuY29tcG9uZW50XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCIpO1xyXG52YXIgcm9sZXNfY2hlY2tlZF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlXCIpO1xyXG52YXIgQXBwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbXBvbmVudChyb3V0ZXIsIGF1dGgsIHJvbGVzQ2hlY2tlZCwgdmlld0NvbnRhaW5lclJlZiwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JPQu9Cw0LLQvdCw0Y9cIik7XHJcbiAgICB9XHJcbiAgICBBcHBDb21wb25lbnQucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICB9O1xyXG4gICAgQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3JvdXRlcl8xLlJvdXRlciwgYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvbGVzX2NoZWNrZWRfc2VydmljZV8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIGNvcmVfMS5WaWV3Q29udGFpbmVyUmVmLCBwbGF0Zm9ybV9icm93c2VyXzEuVGl0bGVdKVxyXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL25ld3MvaW5kZXhcIik7XHJcbnZhciBhdXRoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL2F1dGgvYXV0aC5yb3V0aW5nXCIpO1xyXG52YXIgYWNjb3VudF9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9hY2NvdW50L2FjY291bnQucm91dGluZ1wiKTtcclxudmFyIGNsdWJfcm91dGluZ18xID0gcmVxdWlyZShcIi4vY2x1Yi9jbHViLnJvdXRpbmdcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfcm91dGluZ18xID0gcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nXCIpO1xyXG52YXIgbmV3c19yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9uZXdzL25ld3Mucm91dGluZ1wiKTtcclxudmFyIHVzZXJfcm91dGluZ18xID0gcmVxdWlyZShcIi4vdXNlci91c2VyLnJvdXRpbmdcIik7XHJcbnZhciBwbV9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9wbS9wbS5yb3V0aW5nXCIpO1xyXG52YXIgaG9tZV9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9ob21lL2hvbWUucm91dGluZ1wiKTtcclxudmFyIGZvcnVtU2VjdGlvbl9yb3V0aW5nXzEgPSByZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmdcIik7XHJcbnZhciB3aXNoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL3dpc2gvd2lzaC5yb3V0aW5nXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZ1wiKTtcclxudmFyIG1hdGNoX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL21hdGNoL21hdGNoLnJvdXRpbmdcIik7XHJcbnZhciByb3V0ZXMgPSBhY2NvdW50X3JvdXRpbmdfMS5hY2NvdW50Um91dGVzLmNvbmNhdChhdXRoX3JvdXRpbmdfMS5hdXRoUm91dGVzLCBjbHViX3JvdXRpbmdfMS5jbHViUm91dGVzLCBmb3J1bVNlY3Rpb25fcm91dGluZ18xLmZvcnVtU2VjdGlvblJvdXRlcywgaG9tZV9yb3V0aW5nXzEuaG9tZVJvdXRlcywgbWF0Y2hfcm91dGluZ18xLm1hdGNoUm91dGVzLCBtYXRlcmlhbENvbW1lbnRfcm91dGluZ18xLm1hdGVyaWFsQ29tbWVudFJvdXRlcywgbmV3c0NhdGVnb3J5X3JvdXRpbmdfMS5uZXdzQ2F0ZWdvcnlSb3V0ZXMsIG5ld3Nfcm91dGluZ18xLm5ld3NSb3V0ZXMsIHBtX3JvdXRpbmdfMS5wbVJvdXRlcywgdXNlcl9yb3V0aW5nXzEudXNlclJvdXRlcywgd2lzaF9yb3V0aW5nXzEud2lzaFJvdXRlcywgW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQgfVxyXG5dKTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW1xyXG4gICAgYXV0aF9yb3V0aW5nXzEuYXV0aFByb3ZpZGVyc1xyXG5dO1xyXG5leHBvcnRzLnJvdXRpbmcgPSByb3V0ZXJfMS5Sb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAucm91dGVzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5yb3V0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vYXV0aC5zZXJ2aWNlJyk7XHJcbnZhciBBdXRoR3VhcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aEd1YXJkKGF1dGhTZXJ2aWNlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBBdXRoR3VhcmQucHJvdG90eXBlLmNhbkFjdGl2YXRlID0gZnVuY3Rpb24gKHJvdXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPSBzdGF0ZS51cmw7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEF1dGhHdWFyZCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgQXV0aEd1YXJkKTtcclxuICAgIHJldHVybiBBdXRoR3VhcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXV0aEd1YXJkID0gQXV0aEd1YXJkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLWd1YXJkLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmF1dGhSb3V0ZXMgPSBbXTtcclxuZXhwb3J0cy5hdXRoUHJvdmlkZXJzID0gW1xyXG4gICAgaW5kZXhfMS5BdXRoR3VhcmQsXHJcbiAgICBpbmRleF8xLkF1dGhTZXJ2aWNlXHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGgucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBjbHViX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2NsdWIuc2VydmljZVwiKTtcclxudmFyIGNsdWJfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2NsdWIubW9kZWxcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIG5nMl9maWxlX3VwbG9hZF8xID0gcmVxdWlyZShcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIik7XHJcbnZhciBDbHViRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDbHViRWRpdENvbXBvbmVudChjbHViU2VydmljZSwgcm91dGUsIHJvdXRlciwgbG9jYWxTdG9yYWdlLCBmb3JtQnVpbGRlciwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZSA9IGNsdWJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy5oYXNCYXNlRHJvcFpvbmVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gbmV3IGNsdWJfbW9kZWxfMS5DbHViKCk7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutC70YPQsdCwXCIpO1xyXG4gICAgfVxyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbHViU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImVuZ2xpc2hOYW1lXCJdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlT3B0aW9ucyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudC5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XHJcbiAgICAgICAgICAgIF90aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibG9nb1wiXS5wYXRjaFZhbHVlKHJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2x1YlNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbHViU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENsdWJFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5nZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgbmcyX2ZpbGVfdXBsb2FkXzEuRmlsZVVwbG9hZGVyKHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvdjEvdXBsb2FkL2NsdWJMb2dvL1wiICsgbmFtZSxcclxuICAgICAgICAgICAgYXV0aFRva2VuOiB0aGlzLmxvY2FsU3RvcmFnZS5nZXRBY2Nlc3NUb2tlbldpdGhUeXBlKCksXHJcbiAgICAgICAgICAgIGF1dG9VcGxvYWQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IG5ldyBjbHViX21vZGVsXzEuQ2x1YigpO1xyXG4gICAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGl0ZW0uZW5nbGlzaE5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZW5nbGlzaE5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5sb2dvID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImxvZ29cIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5zdGFkaXVtID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInN0YWRpdW1cIl0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgQ2x1YkVkaXRDb21wb25lbnQucHJvdG90eXBlLmluaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VuZ2xpc2hOYW1lJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnbG9nbyc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnbmFtZSc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLCBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgJ3N0YWRpdW0nOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCwgZm9ybXNfMS5WYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDbHViRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJjbHViLWVkaXRcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtjbHViX3NlcnZpY2VfMS5DbHViU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGUsIHJvdXRlcl8xLlJvdXRlciwgaW5kZXhfMS5Mb2NhbFN0b3JhZ2VTZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyLCBwbGF0Zm9ybV9icm93c2VyXzEuVGl0bGVdKVxyXG4gICAgXSwgQ2x1YkVkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIENsdWJFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNsdWJFZGl0Q29tcG9uZW50ID0gQ2x1YkVkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsdWItZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgY2x1Yl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9jbHViLnNlcnZpY2VcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgQ2x1Ykxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2x1Ykxpc3RDb21wb25lbnQoY2x1YlNlcnZpY2UsIHJvdXRlLCBsb2NhdGlvbiwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZSA9IGNsdWJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRpdGxlU2VydmljZS5zZXRUaXRsZShcItCa0LvRg9Cx0YtcIik7XHJcbiAgICB9XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLnNob3dEZWxldGVNb2RhbCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMuc3BsaWNlKF90aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbCh0aGlzLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlUGFnZWFibGUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYWdlQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB2YXIgbmV3VXJsID0gXCJjbHViL2xpc3QvXCIgKyB0aGlzLnBhZ2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUobmV3VXJsKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBDbHViTGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChwYWdlYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLlZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIENsdWJMaXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkZWxldGVNb2RhbFwiLCB2b2lkIDApO1xyXG4gICAgQ2x1Ykxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiY2x1Yi1saXN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jbHViLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbY2x1Yl9zZXJ2aWNlXzEuQ2x1YlNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCBjb21tb25fMS5Mb2NhdGlvbiwgcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlXSlcclxuICAgIF0sIENsdWJMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBDbHViTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DbHViTGlzdENvbXBvbmVudCA9IENsdWJMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbHViLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBDbHViID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsdWIoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2x1YjtcclxufSgpKTtcclxuZXhwb3J0cy5DbHViID0gQ2x1YjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1Yi5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmNsdWJSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiY2x1Yi86aWQvZWRpdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuQ2x1YkVkaXRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjbHViXCIsIGNvbXBvbmVudDogaW5kZXhfMS5DbHViTGlzdENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsdWIucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3J1bVNlY3Rpb25fc2VydmljZV8xID0gcmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uLnNlcnZpY2VcIik7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4uL3NoYXJlZC9pbmRleFwiKTtcclxudmFyIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudChzZXJ2aWNlLCByb2xlc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgfVxyXG4gICAgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMuaXRlbXMgPSBkYXRhOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc29sZS5sb2coXCJcIik7IH0pO1xyXG4gICAgfTtcclxuICAgIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZm9ydW1TZWN0aW9uLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2ZvcnVtU2VjdGlvbl9zZXJ2aWNlXzEuRm9ydW1TZWN0aW9uU2VydmljZSwgaW5kZXhfMS5Sb2xlc0NoZWNrZWRTZXJ2aWNlXSlcclxuICAgIF0sIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCA9IEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEZvcnVtU2VjdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGb3J1bVNlY3Rpb24oKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRm9ydW1TZWN0aW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkZvcnVtU2VjdGlvbiA9IEZvcnVtU2VjdGlvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ydW1TZWN0aW9uLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24ubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmZvcnVtU2VjdGlvblJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJmb3J1bVwiLCBjb21wb25lbnQ6IGluZGV4XzEuRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCB9LFxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J1bVNlY3Rpb24ucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQ2x1Ykhpc3RvcnlDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2x1Ykhpc3RvcnlDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBDbHViSGlzdG9yeUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCI8Y2x1Yi1oaXN0b3J5PlwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBDbHViSGlzdG9yeUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQ2x1Ykhpc3RvcnlDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2x1Ykhpc3RvcnlDb21wb25lbnQgPSBDbHViSGlzdG9yeUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLmhvbWVSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiY2x1Ykhpc3RvcnlcIiwgY29tcG9uZW50OiBpbmRleF8xLkNsdWJIaXN0b3J5Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicnVsZXNcIiwgY29tcG9uZW50OiBpbmRleF8xLlJ1bGVzQ29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGFkbWluX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9hZG1pbi9hZG1pbi5zZXJ2aWNlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBSaWdodFNpZGViYXJDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmlnaHRTaWRlYmFyQ29tcG9uZW50KHNlcnZpY2UsIHJvbGVzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb2xlc0NoZWNrZWQgPSByb2xlc0NoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICBSaWdodFNpZGViYXJDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICB9O1xyXG4gICAgUmlnaHRTaWRlYmFyQ29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVFcGxUYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUVwbFRhYmxlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwiXCIpOyB9KTtcclxuICAgIH07XHJcbiAgICBSaWdodFNpZGViYXJDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicmlnaHQtc2lkZWJhclwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2FkbWluX3NlcnZpY2VfMS5BZG1pblNlcnZpY2UsIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZV0pXHJcbiAgICBdLCBSaWdodFNpZGViYXJDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFJpZ2h0U2lkZWJhckNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5SaWdodFNpZGViYXJDb21wb25lbnQgPSBSaWdodFNpZGViYXJDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJpZ2h0U2lkZWJhci5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9yaWdodFNpZGViYXIuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIFJ1bGVzQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJ1bGVzQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgUnVsZXNDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwiPHJ1bGVzPlwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcnVsZXMuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFJ1bGVzQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBSdWxlc0NvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5SdWxlc0NvbXBvbmVudCA9IFJ1bGVzQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydWxlcy5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ydWxlcy5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcclxudmFyIGluZGV4XzIgPSByZXF1aXJlKFwiLi4vY2x1Yi9pbmRleFwiKTtcclxudmFyIG1hdGNoX21vZGVsXzEgPSByZXF1aXJlKFwiLi9tYXRjaC5tb2RlbFwiKTtcclxudmFyIE1hdGNoRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRjaEVkaXRDb21wb25lbnQobWF0Y2hTZXJ2aWNlLCBjbHViU2VydmljZSwgcm91dGUsIHJvdXRlciwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLm1hdGNoU2VydmljZSA9IG1hdGNoU2VydmljZTtcclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlID0gY2x1YlNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgIH1cclxuICAgIE1hdGNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1hdGNoU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZS5nZXRCeU5hbWUoXCJcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VDbHVicyhkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIE1hdGNoRWRpdENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5ld3NJdGVtID0gdGhpcy5wYXJzZUZvcm0oKTtcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UuY3JlYXRlKG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNYXRjaEVkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZUZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgbWF0Y2hfbW9kZWxfMS5NYXRjaCgpO1xyXG4gICAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGl0ZW0uY2x1YklkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNsdWJJZFwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmlzSG9tZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJpc0hvbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5kYXRlVGltZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJkYXRlVGltZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnR5cGVJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0eXBlSWRcIl0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5pbml0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdjbHViSWQnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2lzSG9tZSc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnZGF0ZVRpbWUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3R5cGVJZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0Y2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZUNsdWJzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jbHVicyA9IGl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE1hdGNoRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJtYXRjaC1lZGl0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRjaC1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2luZGV4XzEuTWF0Y2hTZXJ2aWNlLCBpbmRleF8yLkNsdWJTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyLCBmb3Jtc18xLkZvcm1CdWlsZGVyXSlcclxuICAgIF0sIE1hdGNoRWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTWF0Y2hFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGNoRWRpdENvbXBvbmVudCA9IE1hdGNoRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0Y2gtZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbWF0Y2hfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbWF0Y2guc2VydmljZVwiKTtcclxudmFyIE1hdGNoTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRjaExpc3RDb21wb25lbnQobWF0Y2hTZXJ2aWNlLCByb3V0ZSkge1xyXG4gICAgICAgIHRoaXMubWF0Y2hTZXJ2aWNlID0gbWF0Y2hTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICB9XHJcbiAgICBNYXRjaExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wicGFnZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZSA9ICtwYXJhbXNbXCJwYWdlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBNYXRjaExpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE1hdGNoTGlzdENvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIE1hdGNoTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJtYXRjaC1saXN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW21hdGNoX3NlcnZpY2VfMS5NYXRjaFNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuICAgIF0sIE1hdGNoTGlzdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTWF0Y2hMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk1hdGNoTGlzdENvbXBvbmVudCA9IE1hdGNoTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0Y2gtbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWF0Y2ggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0Y2goKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0Y2g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0Y2ggPSBNYXRjaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0Y2gubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLm1hdGNoUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIm1hdGNoLzppZC9lZGl0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5NYXRjaEVkaXRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRjaFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTWF0Y2hMaXN0Q29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0Y2gucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XHJcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XHJcbnZhciBtYXRlcmlhbENvbW1lbnRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiKTtcclxudmFyIG1hdGVyaWFsQ29tbWVudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQuc2VydmljZVwiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2luZGV4XCIpO1xyXG52YXIgbmcyX2Jvb3RzdHJhcF8xID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcclxudmFyIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQobWF0ZXJpYWxDb21tZW50U2VydmljZSwgbG9jYXRpb24sIHJvbGVzQ2hlY2tlZCwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLnNob3dBZGRDb21tZW50TW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRNb2RhbC5zaG93KCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDb21tZW50TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZUVkaXRNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0RlbGV0ZU1vZGFsID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5oaWRlRWRpdE1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdENvbW1lbnRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhbkNvbnRyb2xzKCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZS5hZGRDb21tZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY29tbWVudCA9IHRoaXMuZ2V0Q29tbWVudCgpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5jcmVhdGUoY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pdGVtLmNoaWxkcmVuLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIF90aGlzLmNsZWFuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgX3RoaXMuYWRkQ29tbWVudE1vZGFsLmhpZGUoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LnBhcmVudElkID0gX3RoaXMucGFyZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgucGFyZW50SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLnNob3dFZGl0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0Q29tbWVudE1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY29tbWVudCA9IHRoaXMuZ2V0Q29tbWVudCgpO1xyXG4gICAgICAgIGNvbW1lbnQuYW5zd2VyID0gdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UudXBkYXRlKHRoaXMuaXRlbS5pZCwgY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pdGVtID0gY29tbWVudDtcclxuICAgICAgICAgICAgX3RoaXMuaGlkZUVkaXRNb2RhbCgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q29tbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29tbWVudCA9IHRoaXMuaXRlbTtcclxuICAgICAgICBjb21tZW50Lm1lc3NhZ2UgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmNsZWFuQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0ucGF0Y2hWYWx1ZShcIlwiKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJhbnN3ZXJcIl0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG1hdGVyaWFsQ29tbWVudF9tb2RlbF8xLk1hdGVyaWFsQ29tbWVudClcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwiaXRlbVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgTnVtYmVyKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkZWVwXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBCb29sZWFuKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjYW5Db21tZW50YXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBOdW1iZXIpXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcIm1hdGVyaWFsSWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG1hdGVyaWFsQ29tbWVudF9tb2RlbF8xLk1hdGVyaWFsQ29tbWVudClcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwicGFyZW50XCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiYWRkQ29tbWVudE1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwiYWRkQ29tbWVudE1vZGFsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiZWRpdENvbW1lbnRNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcImVkaXRDb21tZW50TW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQucHJvdG90eXBlLCBcImRlbGV0ZU1vZGFsXCIsIHZvaWQgMCk7XHJcbiAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwibWF0ZXJpYWxDb21tZW50LWRldGFpbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFttYXRlcmlhbENvbW1lbnRfc2VydmljZV8xLk1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIGNvbW1vbl8xLkxvY2F0aW9uLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50ID0gTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCIpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50KG1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIGxvY2F0aW9uLCByb2xlc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wYWdlQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB2YXIgbmV3VXJsID0gXCJtYXRlcmlhbENvbW1lbnQvbGlzdC9cIiArIHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKHRoaXMucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwic3VjY2VzcyBsb2FkIGNvbW1lbnQgbGl0c1wiKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFyc2VQYWdlYWJsZSA9IGZ1bmN0aW9uIChwYWdlYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAudmVyaWZ5KHRoaXMuaXRlbXNbaW5kZXhdLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXN1bHQgPSBkYXRhOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtc1tpbmRleF0uaXNWZXJpZmllZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5zaG93RGVsZXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMuc3BsaWNlKF90aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLlZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImRlbGV0ZU1vZGFsXCIsIHZvaWQgMCk7XHJcbiAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm1hdGVyaWFsQ29tbWVudC1saXN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFttYXRlcmlhbENvbW1lbnRfc2VydmljZV8xLk1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIGNvbW1vbl8xLkxvY2F0aW9uLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2VdKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50ID0gTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIG1hdGVyaWFsQ29tbWVudF9tb2RlbF8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCIpO1xyXG52YXIgbWF0ZXJpYWxDb21tZW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCIpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQobWF0ZXJpYWxDb21tZW50U2VydmljZSwgbG9jYXRpb24sIHJvbGVzQ2hlY2tlZCwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UgPSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgICAgICB0aGlzLmNhbkNvbW1lbnRhcnkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsIGZvcm1zXzEuVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50LnByb3RvdHlwZS5wYWdlQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbEJ5TWF0ZXJpYWwodGhpcy5wYWdlLCB0aGlzLm1hdGVyaWFsSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlUGFnZWFibGUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBtYXRlcmlhbENvbW1lbnRfbW9kZWxfMS5NYXRlcmlhbENvbW1lbnQoKTtcclxuICAgICAgICBjb21tZW50Lm1lc3NhZ2UgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICBjb21tZW50Lm1hdGVyaWFsSWQgPSB0aGlzLm1hdGVyaWFsSWQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmNyZWF0ZShjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIE51bWJlcilcclxuICAgIF0sIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQucHJvdG90eXBlLCBcIm1hdGVyaWFsSWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIEJvb2xlYW4pXHJcbiAgICBdLCBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjYW5Db21tZW50YXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImNvbW1lbnRzXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFttYXRlcmlhbENvbW1lbnRfc2VydmljZV8xLk1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIGNvbW1vbl8xLkxvY2F0aW9uLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50ID0gTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xyXG5leHBvcnRzLm1hdGVyaWFsQ29tbWVudFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnRcIiwgY29tcG9uZW50OiBpbmRleF8xLk1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnQvbGlzdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudC9saXN0LzpwYWdlXCIsIGNvbXBvbmVudDogaW5kZXhfMS5NYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50L2xpc3QvOnBhZ2UvOmNhdGVnb3J5SWRcIiwgY29tcG9uZW50OiBpbmRleF8xLk1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0ZXJpYWxDb21tZW50LnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE5ld3NDYXRlZ29yeSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzQ2F0ZWdvcnkoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmV3c0NhdGVnb3J5O1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NDYXRlZ29yeSA9IE5ld3NDYXRlZ29yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV3c0NhdGVnb3J5Lm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgbmV3c0NhdGVnb3J5X2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBuZXdzQ2F0ZWdvcnlfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudFwiKTtcclxuZXhwb3J0cy5uZXdzQ2F0ZWdvcnlSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICduZXdzQ2F0ZWdvcnknLCBjb21wb25lbnQ6IG5ld3NDYXRlZ29yeV9saXN0X2NvbXBvbmVudF8xLk5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ25ld3NDYXRlZ29yeS86aWQvZWRpdCcsIGNvbXBvbmVudDogbmV3c0NhdGVnb3J5X2VkaXRfY29tcG9uZW50XzEuTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCB9XHJcbl07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3NDYXRlZ29yeS5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcclxudmFyIG5ld3Nfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbmV3cy5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTmV3c0RldGFpbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzRGV0YWlsQ29tcG9uZW50KG5ld3NTZXJ2aWNlLCByb3V0ZSwgbG9jYWxTdG9yYWdlLCByb2xlc0NoZWNrZWQsIHJvdXRlciwgdGl0bGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZSA9IG5ld3NTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZCA9IHJvbGVzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIH1cclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgX3RoaXMubmV3c1NlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0FjdGl2YXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLnNob3dEZWxldGVNb2RhbCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXN1bHQgPSByZXM7IH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhlKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoaXRlbS50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRWaWV3KCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUuYWRkVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzLml0ZW0uaWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZS50cnlBZGRWaWV3Rm9yTmV3cyhpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGRWaWV3KGlkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiYWN0aXZhdGVNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBOZXdzRGV0YWlsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhY3RpdmF0ZU1vZGFsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgTmV3c0RldGFpbENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIE5ld3NEZXRhaWxDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwibmV3cy1kZXRhaWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3MtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3Nfc2VydmljZV8xLk5ld3NTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgaW5kZXhfMS5Mb2NhbFN0b3JhZ2VTZXJ2aWNlLCBpbmRleF8xLlJvbGVzQ2hlY2tlZFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlXSlcclxuICAgIF0sIE5ld3NEZXRhaWxDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NEZXRhaWxDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmV3c0RldGFpbENvbXBvbmVudCA9IE5ld3NEZXRhaWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3MtZGV0YWlsLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmV3c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9uZXdzLnNlcnZpY2VcIik7XHJcbnZhciBuZXdzX21vZGVsXzEgPSByZXF1aXJlKFwiLi9uZXdzLm1vZGVsXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9uZXdzQ2F0ZWdvcnkvaW5kZXhcIik7XHJcbnZhciBOZXdzRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXdzRWRpdENvbXBvbmVudChuZXdzU2VydmljZSwgbmV3c0NhdGVnb3J5U2VydmljZSwgcm91dGUsIHJvdXRlciwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlID0gbmV3c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlID0gbmV3c0NhdGVnb3J5U2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXdzU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2UoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlQ2F0ZWdvcmllcyhkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YS5pZCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmlkKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5wYXJzZUZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgbmV3c19tb2RlbF8xLk5ld3MoKTtcclxuICAgICAgICBpdGVtLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBpdGVtLmNhdGVnb3J5SWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2F0ZWdvcnlJZFwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uYnJpZWYgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiYnJpZWZcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5zb3VyY2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wic291cmNlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucGhvdG8gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wicGhvdG9cIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5wZW5kaW5nID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInBlbmRpbmdcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5jYW5Db21tZW50YXJ5ID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNhbkNvbW1lbnRhcnlcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5vblRvcCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJvblRvcFwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBOZXdzRWRpdENvbXBvbmVudC5wcm90b3R5cGUuaW5pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnlJZCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2JyaWVmJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdzb3VyY2UnOiBbXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW10pXSxcclxuICAgICAgICAgICAgJ3Bob3RvJzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdjYW5Db21tZW50YXJ5JzogW1wiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdvblRvcCc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAncGVuZGluZyc6IFtcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0VkaXRDb21wb25lbnQucHJvdG90eXBlLnBhcnNlQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE5ld3NFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3MtZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3Nfc2VydmljZV8xLk5ld3NTZXJ2aWNlLCBpbmRleF8xLk5ld3NDYXRlZ29yeVNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXIsIGZvcm1zXzEuRm9ybUJ1aWxkZXJdKVxyXG4gICAgXSwgTmV3c0VkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5ld3NFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk5ld3NFZGl0Q29tcG9uZW50ID0gTmV3c0VkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3MtZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcclxudmFyIG5ld3Nfc2VydmljZV8xID0gcmVxdWlyZShcIi4vbmV3cy5zZXJ2aWNlXCIpO1xyXG52YXIgbmV3c0ZpbHRlcnNfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL25ld3NGaWx0ZXJzLm1vZGVsXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvaW5kZXhcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgTmV3c0xpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV3c0xpc3RDb21wb25lbnQobmV3c1NlcnZpY2UsIHJvdXRlLCBsb2NhdGlvbiwgcm9sZXNDaGVja2VkLCBjZCkge1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UgPSBuZXdzU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkID0gcm9sZXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMuY2QgPSBjZDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0FjdGl2YXRlTW9kYWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLnNob3coKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc2hvd0RlbGV0ZU1vZGFsID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBuZXdzID0gdGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XTtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKG5ld3MuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgbmV3cy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzdWx0ID0gcmVzOyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5sb2coZSk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMuc3BsaWNlKF90aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbXCJjYXRlZ29yeUlkXCJdO1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyTmFtZSA9IHBhcmFtc1tcInVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUucGFnZUNoYW5nZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdmFyIG5ld1VybCA9IFwibmV3cy9saXN0L1wiICsgdGhpcy5wYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgICAgICAgICAgbmV3VXJsID0gbmV3VXJsICsgXCIvXCIgKyB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmlsdGVycyA9IG5ldyBuZXdzRmlsdGVyc19tb2RlbF8xLk1hdGVyaWFsRmlsdGVycygpO1xyXG4gICAgICAgIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIGZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIGZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoZmlsdGVycylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMucGFyc2VQYWdlYWJsZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLlZpZXdDaGlsZChcImFjdGl2YXRlTW9kYWxcIiksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG4gICAgXSwgTmV3c0xpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImFjdGl2YXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbiAgICBdLCBOZXdzTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuICAgIE5ld3NMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5ld3MtbGlzdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1saXN0LmNvbXBvbmVudC5odG1sXCIpLFxyXG4gICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW25ld3Nfc2VydmljZV8xLk5ld3NTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgY29tbW9uXzEuTG9jYXRpb24sIGluZGV4XzEuUm9sZXNDaGVja2VkU2VydmljZSwgY29yZV8xLkNoYW5nZURldGVjdG9yUmVmXSlcclxuICAgIF0sIE5ld3NMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBOZXdzTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5OZXdzTGlzdENvbXBvbmVudCA9IE5ld3NMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMubmV3c1JvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJuZXdzXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvbGlzdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzL2xpc3QvOnBhZ2VcIiwgY29tcG9uZW50OiBpbmRleF8xLk5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy9saXN0LzpwYWdlLzpjYXRlZ29yeUlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvOmlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5OZXdzRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy86aWQvZWRpdFwiLCBjb21wb25lbnQ6IGluZGV4XzEuTmV3c0VkaXRDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXdzLnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWF0ZXJpYWxGaWx0ZXJzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsRmlsdGVycygpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGVyaWFsRmlsdGVycztcclxufSgpKTtcclxuZXhwb3J0cy5NYXRlcmlhbEZpbHRlcnMgPSBNYXRlcmlhbEZpbHRlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ld3NGaWx0ZXJzLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3c0ZpbHRlcnMubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtRGV0YWlsQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBtRGV0YWlsQ29tcG9uZW50KHBtU2VydmljZSwgcm91dGUpIHtcclxuICAgICAgICB0aGlzLnBtU2VydmljZSA9IHBtU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB9XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgX3RoaXMucG1TZXJ2aWNlLkdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBQbURldGFpbENvbXBvbmVudC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG4gICAgUG1EZXRhaWxDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicG0tZGV0YWlsXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9wbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcG1fc2VydmljZV8xLlBtU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgUG1EZXRhaWxDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBtRGV0YWlsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlBtRGV0YWlsQ29tcG9uZW50ID0gUG1EZXRhaWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLWRldGFpbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcG1fbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3BtLm1vZGVsXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbUVkaXRDb21wb25lbnQoc2VydmljZSwgZm9ybUJ1aWxkZXIsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgdGhpcy5teVNvdXJjZSA9IFtcImFyMVwiLCBcImFyMlwiLCBcIjNkc2FcIl07XHJcbiAgICAgICAgdGhpcy51c2VycyA9IFwiL2FwaS91c2VyL0dldFVzZXJOYW1lcz90eXBlZD06a2V5d29yZFwiO1xyXG4gICAgfVxyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdyZWNlaXZlcic6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0aXRsZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIGZvcm1zXzEuVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgZm9ybXNfMS5WYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtc18xLlZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldFVzZXJuYW1lKCk7XHJcbiAgICB9O1xyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoeyByZWNlaXZlcjogdXNlci5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUG1FZGl0Q29tcG9uZW50LnByb3RvdHlwZS5nZXRVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlKTtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBwbV9tb2RlbF8xLlBtKCk7XHJcbiAgICAgICAgbW9kZWwucmVjZWl2ZXJJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJyZWNlaXZlclwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc2VydmljZS5DcmVhdGUobW9kZWwpLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BtXCJdKTtcclxuICAgIH07XHJcbiAgICBQbUVkaXRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwicG0tZWRpdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcG0tZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtwbV9zZXJ2aWNlXzEuUG1TZXJ2aWNlLCBmb3Jtc18xLkZvcm1CdWlsZGVyLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFBtRWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUG1FZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlBtRWRpdENvbXBvbmVudCA9IFBtRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG0tZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcG1fc2VydmljZV8xID0gcmVxdWlyZShcIi4vcG0uc2VydmljZVwiKTtcclxudmFyIFBtTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbUxpc3RDb21wb25lbnQocG1TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wbVNlcnZpY2UgPSBwbVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBQbUxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbVNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlKGRhdGEpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH07XHJcbiAgICBQbUxpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBtb2RlbC5yZWNlaXZlZDtcclxuICAgICAgICB0aGlzLnNlbnQgPSBtb2RlbC5zZW50O1xyXG4gICAgfTtcclxuICAgIFBtTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB9O1xyXG4gICAgUG1MaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcInBtLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BtLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcG1fc2VydmljZV8xLlBtU2VydmljZV0pXHJcbiAgICBdLCBQbUxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBtTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5QbUxpc3RDb21wb25lbnQgPSBQbUxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBtLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcclxuZXhwb3J0cy5wbVJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJwbVwiLCBjb21wb25lbnQ6IGluZGV4XzEuUG1MaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicG0vOmlkXCIsIGNvbXBvbmVudDogaW5kZXhfMS5QbURldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBtLzppZC9lZGl0XCIsIGNvbXBvbmVudDogaW5kZXhfMS5QbUVkaXRDb21wb25lbnQgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbS5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgR2xvYmFsVmFsaWRhdG9ycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHbG9iYWxWYWxpZGF0b3JzKCkge1xyXG4gICAgfVxyXG4gICAgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0ID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcclxuICAgICAgICB2YXIgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gXCJcIiAmJiAoY29udHJvbC52YWx1ZS5sZW5ndGggPD0gNSB8fCAhRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IFwiaW5jb3JyZWN0TWFpbEZvcm1hdFwiOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIEdsb2JhbFZhbGlkYXRvcnMubWF0Y2hpbmdQYXNzd29yZHMgPSBmdW5jdGlvbiAocGFzc3dvcmRLZXksIGNvbmZpcm1QYXNzd29yZEtleSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICAgICAgICB2YXIgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgR2xvYmFsVmFsaWRhdG9ycyA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBHbG9iYWxWYWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBHbG9iYWxWYWxpZGF0b3JzO1xyXG59KCkpO1xyXG5leHBvcnRzLkdsb2JhbFZhbGlkYXRvcnMgPSBHbG9iYWxWYWxpZGF0b3JzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxWYWxpZGF0b3JzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9nbG9iYWxWYWxpZGF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG5leHBvcnRzLkxvY2FsU3RvcmFnZSA9IG5ldyBjb3JlXzEuT3BhcXVlVG9rZW4oXCJsb2NhbFN0b3JhZ2VcIik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLXN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2xvY2FsLXN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgUGFnZWFibGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnZWFibGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGFnZWFibGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGFnZWFibGUgPSBQYWdlYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZWFibGUubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIFNlY3VyZWREaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VjdXJlZERpcmVjdGl2ZShyb3V0ZXIsIGVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgfVxyXG4gICAgU2VjdXJlZERpcmVjdGl2ZS5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNlY3VyZWREaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tSaWdodHMoKTtcclxuICAgIH07XHJcbiAgICBTZWN1cmVkRGlyZWN0aXZlLnByb3RvdHlwZS5jaGVja1JpZ2h0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlY3VyZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkhvc3RCaW5kaW5nKFwiaGlkZGVuXCIpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIEJvb2xlYW4pXHJcbiAgICBdLCBTZWN1cmVkRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJoaWRlUm91dGVyTGlua1wiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgT2JqZWN0KVxyXG4gICAgXSwgU2VjdXJlZERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic2VjdXJlZFwiLCB2b2lkIDApO1xyXG4gICAgU2VjdXJlZERpcmVjdGl2ZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5EaXJlY3RpdmUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJbc2VjdXJlZF1cIlxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtyb3V0ZXJfMS5Sb3V0ZXIsIGNvcmVfMS5FbGVtZW50UmVmXSlcclxuICAgIF0sIFNlY3VyZWREaXJlY3RpdmUpO1xyXG4gICAgcmV0dXJuIFNlY3VyZWREaXJlY3RpdmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VjdXJlZERpcmVjdGl2ZSA9IFNlY3VyZWREaXJlY3RpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlY3VyZWQuZGlyZWN0aXZlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9zZWN1cmVkLmRpcmVjdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB1c2VyX2RldGFpbF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXItZGV0YWlsLmNvbXBvbmVudFwiKTtcclxudmFyIHVzZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3VzZXItbGlzdC5jb21wb25lbnRcIik7XHJcbmV4cG9ydHMudXNlclJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ3VzZXInLCBjb21wb25lbnQ6IHVzZXJfbGlzdF9jb21wb25lbnRfMS5Vc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci9saXN0JywgY29tcG9uZW50OiB1c2VyX2xpc3RfY29tcG9uZW50XzEuVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvbGlzdC86cGFnZScsIGNvbXBvbmVudDogdXNlcl9saXN0X2NvbXBvbmVudF8xLlVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyL2xpc3QvOnBhZ2UvOnVzZXJOYW1lJywgY29tcG9uZW50OiB1c2VyX2xpc3RfY29tcG9uZW50XzEuVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvOmlkJywgY29tcG9uZW50OiB1c2VyX2RldGFpbF9jb21wb25lbnRfMS5Vc2VyRGV0YWlsQ29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlci5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBVc2VyRmlsdGVycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyRmlsdGVycygpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVzZXJGaWx0ZXJzO1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJGaWx0ZXJzID0gVXNlckZpbHRlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXJGaWx0ZXJzLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlckZpbHRlcnMubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XHJcbnZhciB3aXNoX21vZGVsXzEgPSByZXF1aXJlKFwiLi93aXNoLm1vZGVsXCIpO1xyXG52YXIgd2lzaF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93aXNoLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBXaXNoRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaXNoRWRpdENvbXBvbmVudChzZXJ2aWNlLCBmb3JtQnVpbGRlciwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlciA9IGZvcm1CdWlsZGVyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgIH1cclxuICAgIFdpc2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zXzEuVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzAwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3R5cGUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBmb3Jtc18xLlZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNfMS5WYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5HZXRTaW5nbGUoX3RoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwic3VjY2VzcyBnZXQgIG5ld3NcIik7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUeXBlcygpO1xyXG4gICAgfTtcclxuICAgIFdpc2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIFdpc2hFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgd2lzaF9tb2RlbF8xLldpc2goKTtcclxuICAgICAgICBtb2RlbC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgbW9kZWwubWVzc2FnZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLnR5cGUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widHlwZVwiXS52YWx1ZTtcclxuICAgICAgICB2YXIgcmVzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLlVwZGF0ZSh0aGlzLmlkLCBtb2RlbCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXMgPSBkYXRhOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnNlcnZpY2UuQ3JlYXRlKG1vZGVsKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHJlcyA9IGRhdGE7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2lzaFwiXSk7XHJcbiAgICB9O1xyXG4gICAgV2lzaEVkaXRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZVR5cGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRUeXBlcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnR5cGVzID0gZGF0YTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV2lzaEVkaXRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFwid2lzaC1lZGl0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93aXNoLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd2lzaF9zZXJ2aWNlXzEuV2lzaFNlcnZpY2UsIGZvcm1zXzEuRm9ybUJ1aWxkZXIsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgV2lzaEVkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdpc2hFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldpc2hFZGl0Q29tcG9uZW50ID0gV2lzaEVkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpc2gtZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciB3aXNoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3dpc2guc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIFdpc2hMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdpc2hMaXN0Q29tcG9uZW50KHNlcnZpY2UsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgfVxyXG4gICAgV2lzaExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zWydwYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2UgPSArcGFyYW1zWydwYWdlJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV2lzaExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgV2lzaExpc3RDb21wb25lbnQucHJvdG90eXBlLnBhcnNlUGFnZWFibGUgPSBmdW5jdGlvbiAocGFnZWFibGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIFdpc2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBhcnNlUGFnZWFibGUoZGF0YSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgbG9hZCBsaXN0IHdpc2hcIik7IH0pO1xyXG4gICAgfTtcclxuICAgIFdpc2hMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5nZXRUeXBlQ2xhc3MgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1kYW5nZXJcIjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtd2FybmluZ1wiO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1pbmZvXCI7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBXaXNoTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJ3aXNoLWxpc3RcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt3aXNoX3NlcnZpY2VfMS5XaXNoU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG4gICAgXSwgV2lzaExpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdpc2hMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldpc2hMaXN0Q29tcG9uZW50ID0gV2lzaExpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpc2gtbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XHJcbmV4cG9ydHMud2lzaFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJ3aXNoXCIsIGNvbXBvbmVudDogaW5kZXhfMS5XaXNoTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIndpc2gvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBpbmRleF8xLldpc2hFZGl0Q29tcG9uZW50IH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2lzaC5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBXaXNoVHlwZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaXNoVHlwZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBXaXNoVHlwZTtcclxufSgpKTtcclxuZXhwb3J0cy5XaXNoVHlwZSA9IFdpc2hUeXBlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXNoVHlwZS5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2hUeXBlLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImxvZ2luRm9ybTFcXFwiIGNsYXNzPVxcXCJmb3JtLWlubGluZVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDhweDtcXFwiIFtmb3JtR3JvdXBdPVxcXCJsb2dpbkZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGxvZ2luRm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ3VzZXJOYW1lJ11cXFwiIHBsYWNlaG9sZGVyPVxcXCLQm9C+0LPQuNC9XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9Cw0YDQvtC70YxcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhbG9naW5Gb3JtLnZhbGlkXFxcIiB2YWx1ZT1cXFwi0JLQvtC50YLQuFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWduaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIHRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgW2Zvcm1Hcm91cF09XFxcInJlZ2lzdGVyRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocmVnaXN0ZXJGb3JtLnZhbHVlKVxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCb0L7Qs9C40L08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLnVzZXJuYW1lXFxcIiBpZD1cXFwidXNlck5hbWVcXFwiIGRlYm91bmNlPVxcXCI1MDAwXFxcIiB2YWxpZGF0aW9uPVxcXCJyZW1vdGU6dm0udXNlck5hbWVVbmlxdWUoKTphbHQ90J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0LvQvtCz0LjQvdC+0Lwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCfG1pbl9sZW46M3xtYXhfbGVuOjMwfHJlcXVpcmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAtLT4gIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ3VzZXJOYW1lJ11cXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtGH0YLQvtCy0YvQuSDQsNC00YDQtdGBPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgZGVib3VuY2U9XFxcIjUwMDBcXFwiIHZhbGlkYXRpb249XFxcInJlbW90ZTp2bS5lbWFpbFVuaXF1ZSgpOmFsdD3Qn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDQsNC00YDQtdGB0L7QvCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJyZXF1aXJlZHxlbWFpbHxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgLS0+ICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwidm0ucmVnaXN0ZXJGb3JtLnBhc3N3b3JkXFxcIiBmcmllbmRseS1uYW1lPVxcXCLQn9Cw0YDQvtC70YxcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0ucGFzc3dvcmRcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1pbl9sZW46NlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgLS0+ICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICA8IS0tICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmNvbmZpcm1QYXNzd29yZFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWR8bWF0Y2g6dm0ucmVnaXN0ZXJGb3JtLnBhc3N3b3JkLFBhc3N3b3JkMnxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAtLT4gICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIC8+IFxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC70L3QvtC1INC40LzRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJmdWxsTmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uZnVsbE5hbWVcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1pbl9sZW46MlxcXCIvPlxcclxcbiAgICAgICAgICAgLS0+ICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snZnVsbE5hbWUnXVxcXCIgIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGF0ZXBpY2tlciAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydiaXJ0aGRheSddXFxcIj48L2RhdGVwaWNrZXI+IFxcclxcbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmFtZT1cXFwiYmlydGhkYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctcmVhZG9ubHk9XFxcInRydWVcXFwiIHNob3ctYnV0dG9uLWJhcj1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdWliLWRhdGVwaWNrZXItcG9wdXA9XFxcImRkL01NTU0veXl5eVxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uYmlydGhkYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3Blbj1cXFwidm0uc3RhdHVzLm9wZW5lZFxcXCIgZGF0ZXBpY2tlci1vcHRpb25zPVxcXCJ2bS5kYXRlT3B0aW9uc1xcXCIgY2xvc2UtdGV4dD1cXFwi0JfQsNC60YDRi9GC0YxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0LWlucHV0LWZvcm1hdHM9XFxcImFsdElucHV0Rm9ybWF0c1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgc3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuIHZhLXRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLm9wZW4oKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3BhblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxyXFxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snYmlydGhkYXknXVxcXCIgdHlwZT1cXFwidGV4dFxcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhcmVnaXN0ZXJGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbnVwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCY0LfQvNC10L3QtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgW2Zvcm1Hcm91cF09XFxcInBhc3N3b3JkRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocGFzc3dvcmRGb3JtLnZhbHVlKVxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0KHRgtCw0YDRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcIm9sZFBhc3N3b3JkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJwYXNzd29yZEZvcm0uY29udHJvbHNbJ29sZFBhc3N3b3JkJ11cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJuZXdQYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJwYXNzd29yZEZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXBhc3N3b3JkRm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QmNC30LzQtdC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImZvcmdvdEVtYWlsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZm9yZ290Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9yZ290Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxBZGRyZXNzXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbEFkZHJlc3NcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcImZvcmdvdEZvcm0uY29udHJvbHNbJ2VtYWlsJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZm9yZ290Rm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCe0YLQv9GA0LDQstC40YLRjFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwicmVzZXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwicmVzZXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChyZXNldEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwcmUgKm5nSWY9XFxcInJlc2V0Rm9ybS5lcnJvcnNcXFwiPnt7cmVzZXRGb3JtLmVycm9ycyB8IGpzb259fTwvcHJlPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsQWRkcmVzc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZXNldEZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQvdC+0LLQvtCz0L4g0L/QsNGA0L7Qu9GPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZXNldEZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhcmVzZXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCf0L7QvNC10L3Rj9GC0Ywg0L/QsNGA0L7Qu9GMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9PC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcInVuY29uZmlybWVkRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcInVuY29uZmlybWVkRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCIgKm5nSWY9XFxcIiFmaW5pc2hcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwidW5jb25maXJtZWRGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiF1bmNvbmZpcm1lZEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCf0LXRgNC10YHQu9Cw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImZpbmlzaFxcXCI+0J/QuNGB0YzQvNC+INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLXJlc3BvbnNpdmUgY29sLXhzLTEyIG92ZXJmbG93YWJsZVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCa0L7QvNCw0L3QtNCwPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0Jg8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QkjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCdPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0J88L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD4rLy08L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QnjwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+PHRyPjx0ZD4xPC90ZD48dGQ+0JvQuNCy0LXRgNC/0YPQu9GMXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD44PC90ZD48dGQ+MjwvdGQ+PHRkPjE8L3RkPjx0ZD4xNjwvdGQ+PHRkPjI2PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MjwvdGQ+PHRkPtCn0LXQu9GB0LhcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjg8L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjE3PC90ZD48dGQ+MjU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4zPC90ZD48dGQ+0JzQsNC90YfQtdGB0YLQtdGAINCh0LjRgtC4XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD43PC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD4xNTwvdGQ+PHRkPjI0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NDwvdGQ+PHRkPtCQ0YDRgdC10L3QsNC7XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD43PC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD4xMzwvdGQ+PHRkPjI0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NTwvdGQ+PHRkPtCi0L7RgtGC0LXQvdGF0Y3QvFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjY8L3RkPjx0ZD4wPC90ZD48dGQ+OTwvdGQ+PHRkPjIxPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NjwvdGQ+PHRkPtCc0LDQvdGH0LXRgdGC0LXRgCDQrtC90LDQudGC0LXQtFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjE4PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NzwvdGQ+PHRkPtCt0LLQtdGA0YLQvtC9XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD41PC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD4yPC90ZD48dGQ+MTg8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD44PC90ZD48dGQ+0KPQvtGC0YTQvtGA0LRcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjQ8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPi00PC90ZD48dGQ+MTU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD45PC90ZD48dGQ+0JHQtdGA0L3Qu9C4XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD40PC90ZD48dGQ+MjwvdGQ+PHRkPjU8L3RkPjx0ZD4tNDwvdGQ+PHRkPjE0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTA8L3RkPjx0ZD7QodCw0YPRgtCz0LXQvNC/0YLQvtC9XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPjQ8L3RkPjx0ZD4wPC90ZD48dGQ+MTM8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMTwvdGQ+PHRkPtCS0LXRgdGCINCR0YDQvtC80LLQuNGHXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPjQ8L3RkPjx0ZD4tMzwvdGQ+PHRkPjEzPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTI8L3RkPjx0ZD7QodGC0L7QuiDQodC40YLQuFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+LTU8L3RkPjx0ZD4xMzwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEzPC90ZD48dGQ+0JHQvtGA0L3QvNGD0YJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+NTwvdGQ+PHRkPi0zPC90ZD48dGQ+MTI8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNDwvdGQ+PHRkPtCb0LXRgdGC0LXRgFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD41PC90ZD48dGQ+LTU8L3RkPjx0ZD4xMjwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE1PC90ZD48dGQ+0JzQuNC00LvRgdCx0YDQvlxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MjwvdGQ+PHRkPjU8L3RkPjx0ZD40PC90ZD48dGQ+LTI8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE2PC90ZD48dGQ+0JrRgNC40YHRgtCw0Lsg0J/RjdC70LDRgVxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjI8L3RkPjx0ZD42PC90ZD48dGQ+LTM8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE3PC90ZD48dGQ+0JLQtdGB0YIg0KXRjdC8XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MjwvdGQ+PHRkPjY8L3RkPjx0ZD4tOTwvdGQ+PHRkPjExPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTg8L3RkPjx0ZD7QpdCw0LvQu1xcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD43PC90ZD48dGQ+LTE0PC90ZD48dGQ+MTA8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xOTwvdGQ+PHRkPtCh0YPQvtC90YHQuFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MTwvdGQ+PHRkPjI8L3RkPjx0ZD44PC90ZD48dGQ+LTExPC90ZD48dGQ+NTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjIwPC90ZD48dGQ+0KHQsNC90LTQtdGA0LvQtdC90LRcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjE8L3RkPjx0ZD4yPC90ZD48dGQ+ODwvdGQ+PHRkPi0xMjwvdGQ+PHRkPjU8L3RkPjwvdHI+XFxyXFxuPC90Ym9keT48L3RhYmxlPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcCBcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGNvbC14cy0zIGNvbC1zbS0zIGxpc3QtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgIDxsaT48YSBpZD1cXFwiYmFjay10b3BcXFwiIGhyZWY9XFxcIiNcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+0JLQstC10YDRhTwvYT48L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCJhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvc3Bhbj4g0KfQuNGC0LDRgtGMINC7L9GBIDwhLS0oPHNwYW4gbmctYmluZD1cXFwidm0udW5yZWFkUG1Db3VudFxcXCI+PC9zcGFuPiktLT48L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhY2NvdW50LXNpZ25pbj48L2FjY291bnQtc2lnbmluPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiIWF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mb3Jnb3RQYXNzd29yZCddXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcImJvdHRvbVxcXCIgdGl0bGU9XFxcItCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiIWF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zaWdudXAnXVxcXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcImF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJ1c2VySW5mbyh7aWQ6IHZtLnVzZXJJZCgpfSlcXFwiIGNsYXNzPVxcXCJwYWRkaW5nMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibmF2LWF2YXRhclxcXCIgbmctc3JjPVxcXCJ7JHJvb3QudXNlckltYWdlfX1cXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwidXNlckluZm8oe2lkOiB2bS51c2VySWQoKX0pXFxcIj7QnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ291dCgpXFxcIj7QktGL0LnRgtC4PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgdG9wNTBcXFwiPlxcclxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3Agcm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiLm5hdmJhci1jb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy8nXVxcXCIgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+0J3QsNC30LLQsNC90LjQtSDRgdCw0LnRgtCwPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy8nXVxcXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBAaWYgKFVzZXIuSXNJblJvbGUoXFxcIkFkbWluRnVsbFxcXCIpKVxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gQEh0bWwuQWN0aW9uTGluayhDb21tb25NZXNzYWdlcy5Sb2xlcywgXFxcIkluZGV4XFxcIiwgXFxcIlJvbGVcXFwiKSA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICB9KkAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL2ZvcnVtJ11cXFwiPtCk0L7RgNGD0Lw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDFdXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QndC+0LLQvtGB0YLQuDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJyb2xlcy5pc05ld3NtYWtlclxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgMCwgJ2VkaXQnXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeSddXFxcIj7QmtCw0YLQtdCz0L7RgNC40Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwiYmxvZygpXFxcIiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QkdC70L7Qs9C4PGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxpIG5nLWlmPVxcXCJ2bS5pc0F1dGhvcigpXFxcIj48YSB1aS1zcmVmPVxcXCJibG9nRWRpdCgpXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9hPjwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHVpLXNyZWY9XFxcImJsb2dDYXRlZ29yaWVzKClcXFwiPtCa0LDRgtC10LPQvtGA0LjQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QpNCaINCb0LjQstC10YDQv9GD0LvRjDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1Ykhpc3RvcnknXVxcXCI+0JjRgdGC0L7RgNC40Y88L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70LggPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaS0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyL2xpc3QnLCAxXVxcXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLS9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWwtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL21hdGVyaWFsQ29tbWVudCddXFxcIj7QmtC+0LzQvNC10L3RgtCw0YDQuNC4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08bGk+IDxhIG5nLWlmPVxcXCJ2bS5pc05ld3NtYWtlcigpIHx8IHZtLmlzQXV0aG9yKClcXFwiIHVpLXNyZWY9XFxcImltYWdlcyh7cGF0aDogJ2NvbnRlbnQnfSlcXFwiPtCY0LfQvtCx0YDQsNC20LXQvdC40Y88L2E+PC9saT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWInXVxcXCI+0JrQu9GD0LHRizwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbWF0Y2gnXVxcXCI+0JzQsNGC0YfQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcnVsZXMnXVxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj7Qn9GA0LDQstC40LvQsDwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJiZy1zdWNjZXNzXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93aXNoJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPtCf0L7QttC10LvQsNC90LjRjzwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgdGVtcG9yYXJ5XFxyXFxuICAgICAgICAgICAgPHNwYW4gbmctYmluZD1cXFwiJHJvb3Qucm9sZXNcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYm9keS1jb250ZW50IHJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IG5jeS1icmVhZGNydW1iPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS1wdXNoLTMgY29sLXNtLTYgY29udGFpbmVyLWZsdWlkXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogI2Y1ZGViM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTx1aWItYWxlcnQgY2xhc3M9XFxcInJvd1xcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkcm9vdC5hbGVydHNcXFwiIGRpc21pc3Mtb24tdGltZW91dD1cXFwiNTAwMFxcXCIgdHlwZT1cXFwie2FsZXJ0LnR5cGV9fVxcXCIgY2xvc2U9XFxcImNsb3NlQWxlcnQoJGluZGV4KVxcXCIgbmctYmluZD1cXFwiYWxlcnQubXNnXFxcIj48L3VpYi1hbGVydD4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiIHVpLXZpZXcgYXV0b3Njcm9sbD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiIHVpLXZpZXc9XFxcIm5ld3NGZWVkXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIiB1aS12aWV3PVxcXCJibG9nc0ZlZWRcXFwiPjwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLXB1bGwtNiBjb2wtc20tMyBjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtIGFsZXJ0LWluZm8gcm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyPtCt0LrRgdC10YLQtdGAIDwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9ydS9mL2Y3L0V4ZXRlcl9DaXR5X0xvZ28ucG5nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA0NXB0XFxcIj4zOjA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLSBhbGVydC1kYW5nZXIgcm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4g0JvRg9GH0YjQuNC5INC40LPRgNC+0Log0LzQsNGC0YfQsCDRgSDQrdC60YHQtdGC0LXRgNC+0LwgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vd3d3Lm15bGl2ZXJwb29sLnJ1L2ltYWdlcy9QbGF5ZXJzL1NxdWFkMTItMTMvSm9lX0FsbGVuLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQlNC20L4g0JDQu9C70LXQvVxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInJvd1xcXCI+PC9zZWN0aW9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8cmlnaHQtc2lkZWJhcj48L3JpZ2h0LXNpZGViYXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiYm90dG9tIGNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8cD4mY29weTsgQERhdGVUaW1lLk5vdy5ZZWFyIC0gQENvbW1vbk1lc3NhZ2VzLlNpdGVUaXRsZUFkZHJlc3M8L3A+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC/0LXRgNC90LjQujwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYW1lXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhclxcXCIgc3JjPVxcXCJ7e2VkaXRGb3JtPy5jb250cm9sc1snbG9nbyddLnZhbHVlfX1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJsb2dvXFxcIiBub3ZhbGlkYXRlIHJlYWRvbmx5IC8+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cXFwidXBsb2FkZXJcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS5jb250cm9sc1snZW5nbGlzaE5hbWUnXS52YWxpZFxcXCIvPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbaGlkZGVuXT1cXFwiIXRoaXMudXBsb2FkZXI/LnF1ZXVlXFxcIiAoY2xpY2spPVxcXCJ1cGxvYWQoKVxcXCI+0JfQsNCz0YDRg9C30LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCd0LDQt9Cy0LDQvdC40LUg0LrQu9GD0LHQsCDQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImVuZ2xpc2hOYW1lXFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodGC0LDQtNC40L7QvTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGFkaXVtXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+LS1cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXJcXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViJywgMCwgJ2VkaXQnXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1YicsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubmFtZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZW5nbGlzaE5hbWVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhclxcXCIgc3JjPVxcXCJ7e2l0ZW0ubG9nb319XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXNcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dFRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdFRleHQ9XFxcIjFcXFwiIGxhc3RUZXh0PVxcXCJ0b3RhbEl0ZW1zL2l0ZW1zUGVyUGFnZVxcXCI+PC9wYWdpbmF0aW9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiICpuZ0Zvcj1cXFwibGV0IHNlY3Rpb24gb2YgaXRlbXNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGFuZ2VyXFxcIiAqbmdJZj1cXFwic2VjdGlvbi5zdWJzZWN0aW9ucy5sZW5ndGggPiAwIHx8IHJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJzZWN0aW9uLm5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiB1aS1zcmVmPVxcXCJzdWJzZWN0aW9uRWRpdCh7c2VjdGlvbklkOiBzZWN0aW9uLmlkfSlcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC00YHQtdC60YbQuNGOPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiIFtoaWRkZW5dPVxcXCJzZWN0aW9uLnN1YnNlY3Rpb25zLmxlbmd0aCAhPSAwXFxcIiBuZy1jbGljaz1cXFwidm0ucmVtb3ZlU2VjdGlvbigkaW5kZXgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS1kaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPjwvIS0tZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgKm5nRm9yPVxcXCJsZXQgc3Vic2VjdGlvbiBvZiBzZWN0aW9uLnN1YnNlY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJzdWJzZWN0aW9uKHtpZDogc3Vic2VjdGlvbi5pZH0pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJzdWJzZWN0aW9uLm5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic21hbGxcXFwiIFt0ZXh0Q29udGVudF09XFxcInN1YnNlY3Rpb24uZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YSBuZy1jbGljaz1cXFwidm0uYWRkU2VjdGlvbigpXFxcIj7QlNC+0LHQsNCy0LjRgtGMINGB0LXQutGG0LjRjjwvYT5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJhZGRTZWN0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+QENvbW1vbk1lc3NhZ2VzLkFkZFNlY3Rpb248L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJhZGRTZWN0aW9uXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3U2VjdGlvbk5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj5AQ29sb25zTWVzc2FnZXMuU2VjdGlvbk5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5ld1NlY3Rpb25OYW1lXFxcIiBuZy1tb2RlbD1cXFwidm0uc2VjdGlvbk5hbWVcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJhZGRTZWN0aW9uLiRpbnZhbGlkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQ2FuY2VsPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcIm1vZGFsRGVsZXRlQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+QENvbW1vbk1lc3NhZ2VzLkRlbGV0ZUNvbmZpcm1hdGlvbjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIEBDb21tb25NZXNzYWdlcy5EZWxldGU/XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj5AQ29tbW9uTWVzc2FnZXMuRGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQ2FuY2VsPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgPGltZyBhbHQ9XFxcIlxcXCIgc3R5bGU9XFxcImJvcmRlcjogM3B4IHNvbGlkICNjY2M7bWFyZ2luOjAgMTVweCAxNXB4IDA7XFxcIiBzcmM9XFxcImh0dHA6Ly9waWN0dXJlcy5mb290eW1hZC5uZXQvdXBsb2FkLzM0Mi82OTA1MC0xLmpwZ1xcXCIgYWxpZ249XFxcImxlZnRcXFwiIHdpZHRoPVxcXCIyNTBweFxcXCI+0JPQu9Cw0LLQvdGL0Lkg0YHQvtC/0LXRgNC90LjQuiBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiwgXFxcItCt0LLQtdGA0YLQvtC9XFxcIiwg0LHRi9C7INGB0YTQvtGA0LzQuNGA0L7QstCw0L0g0LIgMTg3OCDQs9C+0LTRgyDQlNC20L7QvdC+0Lwg0KXQvtC70LTQuNC90LPQvtC8LCDQvNC10YHRgtC90YvQvCDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70LXQvCDQuCDQsdGD0LTRg9GJ0LjQvCDQvNGN0YDQvtC8INCb0LjQstC10YDQv9GD0LvRjy5cXHJcXG5cXHJcXG4gICAgICAgINCe0L3QuCDQvdCw0YfQsNC70Lgg0LjQs9GA0LDRgtGMINC90LAgXFxcItCt0L3RhNC40LvQtCDQoNC+0YPQtFxcXCIg4oCUINC/0L7Qu9C1LCDQsNGA0LXQvdC00L7QstCw0L3QvdC+0Lwg0YMg0L/QuNCy0L7QstCw0YDQsCDQv9C+INC40LzQtdC90Lgg0JTQttC+0L0g0J7RgNGA0LXQu9C7LiDQmtCw0Log0YLQvtC70YzQutC+IFxcXCLQrdCy0LXRgNGC0L7QvVxcXCIg0LLRgdGC0LDQuyDQvdCwINC90L7Qs9C4INCl0L7Qu9C00LjQvdCzINC/0YDQuNGB0YLRg9C/0LjQuyDQuiDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLRgyDRhNGD0YLQsdC+0LvRjNC90YvRhSDRgtGA0LjQsdGD0L0g0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiLiDQntC00L3QsNC60L4g0L/QvtGB0LvQtSDQstC+0LfQvdC40LrRiNC40YUg0LIgMTg5MiDQs9C+0LTRgyDRgNCw0LfQvdC+0LPQu9Cw0YHQuNC5INC60LvRg9CxINGA0LDRgdC/0LDQu9GB0Y8g0L3QsCDQtNCy0LUg0LPRgNGD0L/Qv9GLLiDQntC00L3QsCDQuNC3INCz0YDRg9C/0L8g0L/RgNC40L3Rj9C70LAg0YDQtdGI0LXQvdC40LUg0L/QtdGA0LXQtdGF0LDRgtGMINC90LAgXFxcItCT0YPQtNC40YHQvtC9INCf0LDRgNC6XFxcIiwg0LIg0YLQviDQstGA0LXQvNGPINC60LDQuiDQvtGB0YLQsNCy0YjQuNC10YHRjywg0LLQviDQs9C70LDQstC1INGBINCl0L7Qu9C00LjQvdCz0L7QvCwg0L7RgdC90L7QstCw0LvQuCDQvdCwIFxcXCLQrdC90YTQuNC70LQg0KDQvtGD0LRcXFwiINC90L7QstGL0Lkg0YTRg9GC0LHQvtC70YzQvdGL0Lkg0LrQu9GD0LEgLSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIi4g0KXQvtC70LTQuNC90LMg0L3QsNC30L3QsNGH0LjQuyDQs9C70LDQstC90YvQvCDRgtGA0LXQvdC10YDQvtC8INGB0LLQvtC10LPQviDQtNGA0YPQs9CwLCDQlNC20L7QvdCwINCc0LDQutC60LXQvdGDLCDQutC+0YLQvtGA0YvQuSDRgdGA0LDQt9GDINC+0YLQv9GA0LDQstC40LvRgdGPINCyINCo0L7RgtC70LDQvdC00LjRjiDQvdCw0LHQuNGA0LDRgtGMINC60L7QvNCw0L3QtNGDINC40LPRgNC+0LrQvtCyLiDQn9C+0YHQu9C1INCz0L7QtNCwINGA0LDQsdC+0YLRiyDQnNCw0LrQutC10L3QsCDRgNC10YjQuNC7LCDRh9GC0L4g0L3QsNGB0YLQsNC70L4g0LLRgNC10LzRjyDQv9C+0LTQsNGC0Ywg0LfQsNGP0LLQutGDINC90LAg0LLRgdGC0YPQv9C70LXQvdC40LUg0LIg0KTRg9GC0LHQvtC70YzQvdGD0Y4g0LvQuNCz0YMuXFxyXFxuXFxyXFxuICAgICAgICDQo9C20LUg0L/QvtGB0LvQtSDQv9C10YDQstC+0LPQviDRgdC10LfQvtC90LAg0LIg0LvQuNCz0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L/QvtC00L3Rj9C70YHRjyDQsiDQstGL0YHRiNC40Lkg0LTQuNCy0LjQt9C40L7QvSwg0L7QtNC90LDQutC+INC+0L0g0L/Qvi3Qv9GA0LXQttC90LXQvNGDINC+0YHRgtCw0LLQsNC70YHRjyDQsiDRgtC10L3QuCDRgdCy0L7QuNGFINGB0L7RgdC10LTQtdC5INC40LcgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLCDQsCDQsdC+0LvRjNGI0LjQvdGB0YLQstC+INC80LXRgdGC0L3Ri9GFINC20LjRgtC10LvQtdC5INC+0YLQutCw0LfRi9Cy0LDQu9C40YHRjCDRhdC+0LTQuNGC0Ywg0L3QsCDQvNCw0YLRh9C4INC60L7QvNCw0L3QtNGLLCDQstGB0LUg0LjQs9GA0L7QutC4INC60L7RgtC+0YDQvtC5INCx0YvQu9C4INGI0L7RgtC70LDQvdC00YbQsNC80LguINCf0LXRgNCy0YvQuSDRgdC10LfQvtC9INC/0YDQvtGI0LXQuyDQvdC10YPQtNCw0YfQvdC+LCDQuCDQutC70YPQsSDQstGL0LHRi9C7INCy0L4g0JLRgtC+0YDQvtC5INC00LjQstC40LfQuNC+0L0uINCc0LDQutC60LXQvdCwINC/0L7QutC70Y/Qu9GB0Y8g0LLQtdGA0L3Rg9GC0YzRgdGPINCyINCy0YvRgdGI0YPRjiDQu9C40LPRgyDRh9C10YDQtdC3INC00LLQtdC90LDQtNGG0LDRgtGMINC80LXRgdGP0YbQtdCyLCDRh9GC0L4g0Lgg0L/RgNC+0LjQt9C+0YjQu9C+INCx0LvQsNCz0L7QtNCw0YDRjyDQtdCz0L4g0YbQtdC70LXRg9GB0YLRgNC10LzQu9C10L3QvdC+0YHRgtC4INC4INC90LDRgdGC0L7QudGH0LjQstC+0YHRgtC4LCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstC90L7QstGMINGB0YLQsNC90L7QstC40YLRgdGPINGH0LXQvNC/0LjQvtC90L7QvCDQstGC0L7RgNC+0LPQviDQtNC40LLQuNC30LjQvtC90LAg0Lgg0L/RgNC+0LTQstC40LPQsNC10YLRgdGPINCyINC/0LXRgNCy0YvQuS4g0J3QsCDRjdGC0L7RgiDRgNCw0Lcg0L7QvdC4INC30LDQstC10YDRiNC40LvQuCDRgdC10LfQvtC9INC90LAg0L3QsNC00LXQttC90L7QvCDQv9GP0YLQvtC8INC80LXRgdGC0LUsINCy0YvRiNC1IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCf0LXRgNCy0YvQuSDRh9C10LzQv9C40L7QvdGB0LrQuNC5INGC0LjRgtGD0LsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0LIg0YHQtdC30L7QvdC1IDE5MDAvMDEuINCn0LXRgNC10Lcg0LTQstCwINCz0L7QtNCwINC/0L7RgdC70LUg0Y3RgtC+0LPQviBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0YvQsdGL0LvQuCDQuNC3INCy0YvRgdGI0LXQuSDQu9C40LPQuCwg0L3QviDQstC10YDQvdGD0LvQuNGB0Ywg0YLRg9C00LAg0YHQv9GD0YHRgtGPINCz0L7QtCDQuCDQsiDRgtC+0Lwg0YHQtdC30L7QvdC1INCy0L3QvtCy0Ywg0YHRgtCw0LvQuCDQv9C+0LHQtdC00LjRgtC10LvRj9C80Lgg0YfQtdC80L/QuNC+0L3QsNGC0LAuINCSINC60LDRh9C10YHRgtCy0LUg0L3QsNCz0YDQsNC00Ysg0YDRg9C60L7QstC+0LTRgdGC0LLQviDQutC70YPQsdCwINC/0YDQuNC90Y/Qu9C+INGA0LXRiNC10L3QuNC1INC/0L7RgdGC0YDQvtC40YLRjCDQtNC70Y8g0LHQvtC70LXQu9GM0YnQuNC60L7QsiDQvdC+0LLRg9GOINGC0YDQuNCx0YPQvdGDLCBcXFwi0KHQv9C40L7QvSDQmtC+0L9cXFwiLCDQv9C+0LfQttC1INGB0YLQsNCy0YjRg9GOINC70LXQs9C10L3QtNCw0YDQvdC+0LkuINCi0LDQutC+0LUg0L3QsNC30LLQsNC90LjQtSDRgtGA0LjQsdGD0L3QsCDQv9C+0LvRg9GH0LjQu9CwINCyINGH0LXRgdGC0Ywg0YXQvtC70LzQsCwg0YDQsNGB0L/QvtC70L7QttC10L3QvdC+0LPQviDQsiDRjtC20L3Qvi3QsNGE0YDQuNC60LDQvdGB0LrQvtC5INC/0YDQvtCy0LjQvdGG0LjQuCDQndCw0YLQsNC7LCDQs9C00LUg0LLQviDQstGA0LXQvNGPINCy0YLQvtGA0L7QuSDQsNC90LPQu9C+LdCx0YPRgNGB0LrQvtC5INCy0L7QudC90Ysg0LzQtdGA0YHQuNGB0LDQudC00YHQutC40Lkg0L/QvtC70Log0L/QvtC90LXRgSDQsdC+0LvRjNGI0LjQtSDQv9C+0YLQtdGA0LguINCSINC/0LXRgNC10LLQvtC00LUg0YEg0LDRhNGA0LjQutCw0LDQvdGBIFxcXCLRgdC/0LjQvtC9INC60L7Qv1xcXCIg0L7Qt9C90LDRh9Cw0LXRgiBcXFwi0LzQtdGB0YLQviwg0LTQsNGO0YnQtdC1INGF0L7RgNC+0YjQuNC5INC+0LHQt9C+0YBcXFwiLiDQkiAxOTI4INCz0L7QtNGDINGC0YDQuNCx0YPQvdCwINCx0YvQu9CwINGA0LDRgdGI0LjRgNC10L3QsCDQuCDQvtCx0YDQtdC70LAg0LrRgNGL0YjRgywg0L3QsNC00LXQttC90L4g0LfQsNGJ0LjRidCw0LLRiNGD0Y4g0L7RgiDQvdC10L/QvtCz0L7QtNGLIDMwIDAwMCDQsdC+0LvQtdC70YzRidC40LrQvtCyLlxcclxcblxcclxcbiAgICAgICAg0J/QvtGB0LvQtSDQn9C10YDQstC+0Lkg0LzQuNGA0L7QstC+0Lkg0LLQvtC50L3RiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQuyDQvtCx0LvQsNC00LDRgtC10LvQtdC8INC10YnQtSDQtNCy0YPRhSDRh9C10LzQv9C40L7QvdGB0LrQuNGFINGC0LjRgtGD0LvQvtCyLCDQvdC+INC/0L7RgdC70LUg0JLRgtC+0YDQvtC5INC80LjRgNC+0LLQvtC5INC90LDRh9Cw0LvRgdGPINGB0L/QsNC0INC40LPRgNC+0LLQvtC5INGE0L7RgNC80YssINGF0L7RgtGPINCyIDE5NTAg0LPQvtC00YMgXFxcItC60YDQsNGB0L3Ri9C8XFxcIiDQstGB0LUg0LbQtSDRg9C00LDQu9C+0YHRjCDQstGL0LnRgtC4INCyINGE0LjQvdCw0Lsg0JrRg9Cx0LrQsCDQkNC90LPQu9C40LgsINCz0LTQtSDQvtC90Lgg0YPRgdGC0YPQv9C40LvQuCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIuINCh0LXQt9C+0L0gMTk1My81NCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQtdGA0YjQuNC7INC90LAg0L/QvtGB0LvQtdC00L3QtdC8INC80LXRgdGC0LUg0Lgg0LLRi9Cx0YvQuyDQuNC3INC/0LXRgNCy0L7Qs9C+INC00LjQstC40LfQuNC+0L3QsC4g0J/QvtGB0LvQtSDQvdC10YHQutC+0LvRjNC60LjRhSDQvdC10YPQtNCw0YfQvdGL0YUg0LvQtdGCINC90LAg0L/QvtC80L7RidGMINC60LvRg9Cx0YMg0L/RgNC40YjQtdC7INCR0LjQu9C7INCo0LXQvdC60LvQuC4g0J7QvSDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQs9C70LDQstC90YvQvCDRgtGA0LXQvdC10YDQvtC8INCyIDE5NTkg0LPQvtC00YMg0Lgg0LfQsCDRgdC70LXQtNGD0Y7RidC40LUg0YfQtdGC0YvRgNC90LDQtNGG0LDRgtGMINC70LXRgiDRgdCy0L7QtdC5INGA0LDQsdC+0YLRiyDQv9GA0LXQstGA0LDRgtC40LsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LIg0LLQtdC70LjRh9Cw0LnRiNC40Lkg0LrQu9GD0LEg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRhNGD0YLQsdC+0LvQsC4g0JfQsCDQv9C10YDQstGL0LUg0LTQstC10L3QsNC00YbQsNGC0Ywg0LzQtdGB0Y/RhtC10LIg0LXQs9C+INGA0YPQutC+0LLQvtC00YHRgtCy0LAg0LTQstCw0LTRhtCw0YLRjCDRh9C10YLRi9GA0LUg0LjQs9GA0L7QutCwINC/0L7QutC40L3Rg9C70Lgg0LrQvtC80LDQvdC00YMuINCSINGB0LXQt9C+0L3QtSAxOTYzLzY0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCyINGI0LXRgdGC0L7QuSDRgNCw0Lcg0YHRgtCw0Lsg0YfQtdC80L/QuNC+0L3QvtC8INCy0YvRgdGI0LXQuSDQu9C40LPQuCwg0LAg0LIg0YHQu9C10LTRg9GO0YnQtdC8INCz0L7QtNGDINC60L7Qu9C70LXQutGG0LjRjyDRgtGA0L7RhNC10LXQsiDQv9C+0L/QvtC70L3QuNC70LDRgdGMINC60YPQsdC60L7QvCDQkNC90LPQu9C40LgsINCx0LvQsNCz0L7QtNCw0YDRjyDQv9C+0LHQtdC00LUg0L3QsNC0IFxcXCLQm9C40LTRgVxcXCIg0LIg0YTQuNC90LDQu9C1INGB0L7RgNC10LLQvdC+0LLQsNC90LjRjy4g0J3QviDQv9C+0LHQtdC00L3QsNGPINGB0LXRgNC40Y8g0L3QsCDRjdGC0L7QvCDQvdC1INC30LDQutC+0L3Rh9C40LvQsNGB0YwsINCyINGB0LXQt9C+0L3QtSAxOTY1LzY2IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDQstGL0LjQs9GA0LDQu9C4INCz0LvQsNCy0L3Ri9C5INGC0LjRgtGD0Lsg0LvQuNCz0LguXFxyXFxuXFxyXFxuICAgICAgICDQodC70LXQtNGD0Y7RidC40Lkg0YLRgNC+0YTQtdC5IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC/0L7Qu9GD0YfQuNC7INC70LjRiNGMINGB0L/Rg9GB0YLRjyDRgdC10LzRjCDQu9C10YIsINCyINGB0LXQt9C+0L3QtSAxOTcyLzczLCDQvdCwINGN0YLQvtGCINGA0LDQtyDQmtGD0LHQvtC6INCj0JXQpNCQLCDQsCDRgdC/0YPRgdGC0Y8g0LXRidC1INCz0L7QtCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0YHRgtCw0LvQuCDQvtCx0LvQsNC00LDRgtC10LvRj9C80Lgg0LrRg9Cx0LrQsCDQkNC90LPQu9C40LguINCf0L7RgdC70LUg0Y3RgtC+0LPQviDQqNC10L3QutC70Lgg0L3QtdC+0LbQuNC00LDQvdC90L4g0YDQtdGI0LjQuyDQt9Cw0LLQtdGA0YjQuNGC0Ywg0LrQsNGA0YzQtdGA0YMg0Lgg0L/QtdGA0LXQtNCw0Lsg0L/QvtC70L3QvtC80L7Rh9C40Y8g0YHQstC+0LXQuSDQv9GA0LDQstC+0Lkg0YDRg9C60LUg4oCUINCR0L7QsdGDINCf0LXQudGB0LvQuC4g0JPRgNC+0LzQutC40YUg0L/QvtCx0LXQtCDQvdC1INC/0YDQuNGI0LvQvtGB0Ywg0LTQvtC70LPQviDQttC00LDRgtGMLCDRg9C20LUg0L3QsCDQstGC0L7RgNC+0Lkg0LPQvtC0INGA0LDQsdC+0YLRiyDQvdC+0LLQvtCz0L4g0YLRgNC10L3QtdGA0LAsINCyINGB0LXQt9C+0L3QtSAxOTc1Lzc2LCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDRh9C10LzQv9C40L7QvdCw0YIg0Lgg0JrRg9Cx0L7QuiDQo9CV0KTQkC4g0KfQtdGA0LXQtyDQs9C+0LQgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC70Lgg0YfQtdC80L/QuNC+0L3QsNC80Lgg0LvQuNCz0LgsINC30LDQstC+0LXQstCw0LvQuCDQmtGD0LHQvtC6INC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtCx0YvQs9GA0LDQsiDQsiDRhNC40L3QsNC70LUgXFxcItCR0L7RgNGD0YHRgdC40Y4g0JzQtdC90YXQtdC90LPQu9Cw0LTQsdCw0YVcXFwiLCDQvdC+INCyINGE0LjQvdCw0LvRjNC90L7QvCDQvNCw0YLRh9C1INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4INGD0YHRgtGD0L/QuNC70LggXFxcItCc0LDQvdGH0LXRgdGC0LXRgCDQrtC90LDQudGC0LXQtFxcXCIg0YHQviDRgdGH0LXRgtC+0LwgMjoxLiDQkiDRgdC10LfQvtC90LUgMTk3Ny83OCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQuyDQv9C10YDQstGL0Lwg0LHRgNC40YLQsNC90YHQutC40Lwg0LrQu9GD0LHQvtC8LCDQutC+0LzRgyDRg9C00LDQu9C+0YHRjCDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINC30LLQsNC90LjQtSDQtdCy0YDQvtC/0LXQudGB0LrQvtCz0L4g0YfQtdC80L/QuNC+0L3QsCwg0L7QtNC10YDQttCw0LIg0L/QvtCx0LXQtNGDINCyINGE0LjQvdCw0LvQtSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y8g0L3QsNC0INCx0LXQu9GM0LPQuNC50YHQutC40Lwg0LrQu9GD0LHQvtC8IFxcXCLQkdGA0Y7Qs9Cz0LVcXFwiINGB0L4g0YHRh9C10YLQvtC8IDE6MC5cXHJcXG5cXHJcXG4gICAgICAgINCX0LDRgtC10Lwg0LTQstCwINCz0L7QtNCwINC/0L7QtNGA0Y/QtCwg0LIg0YHQtdC30L7QvdCw0YUgMTk3OC83OSDQuCAxOTc5LzgwLCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRh9C10LzQv9C40L7QvdC+0Lwg0YHRgtGA0LDQvdGLLiAxOTgxINCz0L7QtCDRgdGC0LDQuyDQvtGH0LXRgNC10LTQvdC+0Lkg0Y/RgNC60L7QuSDRgdGC0YDQsNC90LjRhtC10Lkg0LIg0LjRgdGC0L7RgNC40Lgg0LrQu9GD0LHQsCwg0LIg0YLRgNC10YLQuNC5INGA0LDQtyDQsiDRgdCy0L7QtdC5INC40YHRgtC+0YDQuNC4IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0YHRgtCw0L3QvtCy0Y/RgtGB0Y8g0L7QsdC70LDQtNCw0YLQtdC70Y/QvNC4INCa0YPQsdC60LAg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIsINC+0LTQtdGA0LbQsNCyINC/0L7QsdC10LTRgyDQvdCw0LQg0LzQsNC00YDQuNC00YHQutC40LwgXFxcItCg0LXQsNC70L7QvFxcXCIg0LIg0YTQuNC90LDQu9C1INGC0YPRgNC90LjRgNCwLCDQsCDRgtCw0LrQttC1INCy0YvQuNCz0YDRi9Cy0LDRjtGCINCa0YPQsdC+0Log0JvQuNCz0LguINCSINGB0LXQt9C+0L3QsNGFIDE5ODEvODIg0LggMTk4Mi84MyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQvtC10LLRi9Cy0LDQtdGCINC10YnQtSDQtNCy0LAg0LPQu9Cw0LLQvdGL0YUg0YTRg9GC0LHQvtC70YzQvdGL0YUg0YLRgNC+0YTQtdGPINGB0YLRgNCw0L3Riywg0L/QvtGB0LvQtSDRh9C10LPQviDQn9C10LnRgdC70Lgg0L/RgNC40L3QuNC80LDQtdGCINGA0LXRiNC10L3QuNC1INGD0LnRgtC4INC90LAg0L/QtdC90YHQuNGOLiDQl9CwINC00LXQstGP0YLRjCDQu9C10YIg0LXQs9C+INGA0YPQutC+0LLQvtC00YHRgtCy0LAg0LrQu9GD0LHQvtC8INC10LzRgyDRiNC10YHRgtGMINGA0LDQtyDQv9GA0LjRgdGD0LbQtNCw0LvQvtGB0Ywg0LfQstCw0L3QuNC1IFxcXCLQm9GD0YfRiNC40Lkg0YLRgNC10L3QtdGAINCz0L7QtNCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCd0LAg0L/QvtGB0YIg0LPQu9Cw0LLQvdC+0LPQviDRgtGA0LXQvdC10YDQsCDQt9Cw0YHRgtGD0L/QuNC7INCU0LbQviDQpNGN0LPQsNC9LCDQuCDQsiDQv9C10YDQstGL0Lkg0LbQtSDQs9C+0LQg0L/QvtC0INC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstC+0Lwg0LrQu9GD0LEg0LLRi9C40LPRgNCw0Lsg0YfQtdC80L/QuNC+0L3QsNGCINCQ0L3Qs9C70LjQuCwg0JrRg9Cx0L7QuiDQm9C40LPQuCDQuCDQmtGD0LHQvtC6INC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtCx0YvQs9GA0LDQsiBcXFwi0KDQvtC80YNcXFwiINCyINCY0YLQsNC70LjQuC4g0KHQu9C10LTRg9GO0YnQuNC5INGB0LXQt9C+0L0g0LHRi9C7INC+0LzRgNCw0YfQtdC9INGB0YLRgNCw0YjQvdC+0Lkg0YLRgNCw0LPQtdC00LjQtdC5LiDQktC+INCy0YDQtdC80Y8g0YTQuNC90LDQu9CwINCa0YPQsdC60LAg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIg0L/RgNC+0YLQuNCyIFxcXCLQrtCy0LXQvdGC0YPRgdCwXFxcIiDQvdCwINGB0YLQsNC00LjQvtC90LUgXFxcItCt0LnQt9C10LvRjFxcXCIg0LLQvtC30L3QuNC60LvQuCDQsdC10YHQv9C+0YDRj9C00LrQuC4g0J/QtdGA0LXQutGA0YvRgtC40LUg0L3QsCDRgdGC0LDQtNC40L7QvdC1INGA0YPRhdC90YPQu9C+INC4INGD0L3QtdGB0LvQviDRgSDRgdC+0LHQvtC5INC20LjQt9C90LggMzgg0LHQvtC70LXQu9GM0YnQuNC60L7QsiDQuNGC0LDQu9GM0Y/QvdGB0LrQvtCz0L4g0LrQu9GD0LHQsC4g0JIg0LrQvtC90LXRh9C90L7QvCDRgdGH0LXRgtC1INC+0LHQu9Cw0LTQsNGC0LXQu9C10Lwg0YLRgNC+0YTQtdGPINGB0YLQsNC7IFxcXCLQrtCy0LXQvdGC0YPRgVxcXCIsINCwINCw0L3Qs9C70LjQudGB0LrQuNC8INC60LvRg9Cx0LDQvCDQvdCwINC90LXQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lkg0YHRgNC+0Log0LfQsNC/0YDQtdGC0LjQu9C4INGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y/RhS5cXHJcXG5cXHJcXG4gICAgICAgINCSIDE5ODYg0LPQvtC00YMg0JrQtdC90L3QuCDQlNCw0LvQs9C70LjRiCDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQuNCz0YDQsNGO0YnQuNC8INGC0YDQtdC90LXRgNC+0LwuINCSINGN0YLQvtC8INC20LUg0YHQtdC30L7QvdC1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INGH0LXQvNC/0LjQvtC90LDRgiDQuCDQmtGD0LHQvtC6INCQ0L3Qs9C70LjQuC4g0JIg0YHQtdC30L7QvdC1IDE5ODcvODggXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC90L7QstGP0YLRgdGPINGH0LXQvNC/0LjQvtC90LDQvNC4INGB0YLRgNCw0L3Riywg0L7QtNC90LDQutC+INCyINGE0LjQvdCw0LvQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDRg9GB0YLRg9C/0LDRjtGCIFxcXCLQo9C40LzQsdC70LTQvtC90YNcXFwiLiDQodC10LfQvtC9IDE5ODgvODkg0YHRgtCw0Lsg0YXRg9C00YjQuNC8INCyINC40YHRgtC+0YDQuNC4IFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiLiDQktC+INCy0YDQtdC80Y8g0L/QvtC70YPRhNC40L3QsNC70YzQvdC+0LPQviDQvNCw0YLRh9CwINCa0YPQsdC60LAg0JDQvdCz0LvQuNC4INC/0YDQvtGC0LjQsiBcXFwi0J3QvtGC0YLQuNC90LPQtdC8INCk0L7RgNC10YHRglxcXCIg0L3QsCDRgdGC0LDQtNC40L7QvdC1IFxcXCLQpdC40LvQu9GB0LHQvtGA0L5cXFwiIDk2INCx0L7Qu9C10LvRjNGJ0LjQutC+0LIgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0L/QvtCz0LjQsdC70Lgg0LIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0L/QtdGA0LXQv9C+0LvQvdC10L3QuNGPINGC0YDQuNCx0YPQvdGLIFxcXCLQm9C10L/Qv9C40L3QsyDQm9C10LnQvVxcXCIuINCf0L7Qt9C20LUgXFxcItCa0YDQsNGB0L3Ri9C1XFxcIiDQstGL0YjQu9C4INCyINGE0LjQvdCw0LssINCz0LTQtSDQstGB0YLRgNC10YLQuNC70LjRgdGMINGBIFxcXCLQrdCy0LXRgNGC0L7QvdC+0LxcXFwiLiDQn9C10YDQtdC0INC90LDRh9Cw0LvQvtC8INC80LDRgtGH0LAg0LHQvtC70LXQu9GM0YnQuNC60Lgg0L7QsdC10LjRhSDQutC+0LzQsNC90LQg0L/QtdC70LggXFxcIllvdSB3aWxsIG5ldmVyIHdhbGsgYWxvbmVcXFwiINC4INC/0YDQvtCy0LXQu9C4INC80LjQvdGD0YLRgyDQvNC+0LvRh9Cw0L3QuNGPLCDQsiDQv9Cw0LzRj9GC0Ywg0L4g0L/QvtCz0LjQsdGI0LjRhSDQvdCwIFxcXCLQpdC40LvQu9GB0LHQvtGA0L5cXFwiLiBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQv9C+0LHQtdC00LjQuyDRgdC+INGB0YfQtdGC0L7QvCAzOjIg0LHQu9Cw0LPQvtC00LDRgNGPINC00LLRg9C8INCz0L7Qu9Cw0LwsINC30LDQsdC40YLRi9C8INCy0YvRiNC10LTRiNC40Lwg0L3QsCDQt9Cw0LzQtdC90YMg0JjQsNC90L7QvCDQoNCw0YjQtdC8LiDQk9C70LDQstC90YvQuSDRgtGA0L7RhNC10Lkg0LvQuNCz0Lgg0YLQsNC60LbQtSDQsdGL0Lsg0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQsiDRgNGD0LrQsNGFINGDIFxcXCLQutGA0LDRgdC90YvRhVxcXCIsINGH0YLQvtCx0Ysg0Y3RgtC+0LzRgyDQv9C+0LzQtdGI0LDRgtGMIFxcXCLQkNGA0YHQtdC90LDQu9GDXFxcIiDQvdGD0LbQvdC+INCx0YvQu9C+INCy0YvQuNCz0YDQsNGC0Ywg0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiINGBINC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvtC8INCyINC00LLQsCDQvNGP0YfQsC4g0Jog0LrQvtC90YbRgyDRgNC10YjQsNGO0YnQtdCz0L4g0LzQsNGC0YfQsCBcXFwi0JDRgNGB0LXQvdCw0LtcXFwiINCy0LXQuyDQsiDRgdGH0LXRgtC1IDE6MCwg0L3QviDQs9C+0Lsg0JzQsNC50LrQu9CwINCi0L7QvNCw0YHQsCwg0LfQsNCx0LjRgtGL0Lkg0YPQttC1INCyINC00L7QsdCw0LLQu9C10L3QvdC+0LUg0LLRgNC10LzRjywg0L/QvtGF0L7RgNC+0L3QuNC7INC90LDQtNC10LbQtNGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC90LAg0L7Rh9C10YDQtdC00L3QvtC5INGC0YDQvtGE0LXQudC90YvQuSDQtNGD0LHQu9GMLiDQn9C+0YHQu9C1INC+0LrQvtC90YfQsNC90LjRjyDRgdC10LfQvtC90LAg0JrQtdC90L3QuCDQlNCw0LvQs9C70LjRiCDQvtGB0YLQsNCy0LjQuyDRgdCy0L7QuSDQv9C+0YHRgiwg0L7QsdGK0Y/RgdC90LjQsiDRjdGC0L4g0YjQvtC60LjRgNC+0LLQsNCy0YjQtdC1INC80L3QvtCz0LjRhSDRgNC10YjQtdC90LjQtSDQvdC10YDQstC90YvQvCDQv9C10YDQtdC90LDQv9GA0Y/QttC10L3QuNC10LwuXFxyXFxuXFxyXFxuICAgICAgICDQktGA0LXQvNC10L3QvdC+INC30LDQvNC10L3QuNGC0Ywg0JTQsNC70LPQu9C40YjQsCDQsdGL0Lsg0L/RgNC40LfQstCw0L0g0KDQvtC90L3QuCDQnNC+0YDQsNC9LCDQv9GA0LXQttC00LUg0YfQtdC8INCyINCw0L/RgNC10LvQtSAxOTkxINCz0L7QtNCwINC90LAg0L/QvtGB0YIg0LPQu9Cw0LLQvdC+0LPQviDRgtGA0LXQvdC10YDQsCDQvdC1INCx0YvQuyDQvdCw0LfQvdCw0YfQtdC9INCT0YDRjdC8INCh0YPQvdC10YHRgS4g0J7QvSDQv9GA0LjQstC10Lsg0LIg0LrQvtC80LDQvdC00YMg0LzQvdC+0LbQtdGB0YLQstC+INC90L7QstGL0YUg0LjQs9GA0L7QutC+0LIsINC90L4g0LXQs9C+INGB0YLRgNC+0LPQuNC5INGB0YLQuNC70Ywg0YDQsNCx0L7RgtGLINC90LUg0L/QvtC70YzQt9C+0LLQsNC70YHRjyDQv9C+0L/Rg9C70Y/RgNC90L7RgdGC0YzRjiDQuCDQvdC1INC/0L7QvNC+0LMg0LrQvtC80LDQvdC00LUg0L/QvtCy0YLQvtGA0LjRgtGMINGD0YHQv9C10YUg0L/RgNC+0YjQu9GL0YUg0LvQtdGCLiDQndCw0YfQuNC90LDRjyDRgSDRjdGA0Ysg0KHRg9C90L3QtdGB0LAg0Lgg0LTQviDRgdC40YUg0L/QvtGAINC60LvRg9CxINC/0YDQtdGB0LvQtdC00YPQtdGCINC80L3QvtC20LXRgdGC0LLQviDQv9GA0L7QsdC70LXQvC5cXHJcXG5cXHJcXG4gICAgICAgINCg0L7QuSDQrdCy0LDQvdGBINCyINGB0LLQvtC5INC/0LXRgNCy0YvQuSDQv9C+0LvQvdGL0Lkg0YHQtdC30L7QvSDRgyDRgNGD0LvRjyDQutC70YPQsdCwLCDQsiAxOTk1INCz0L7QtNGDLCDQstGL0LjQs9GA0LDQuyDQmtGD0LHQvtC6INCb0LjQs9C4LiDQndC10YHQvNC+0YLRgNGPINC90LAg0YLQviwg0YfRgtC+INC10LzRgyDRg9C00LDQu9C+0YHRjCDQv9C+0YHRgtGA0L7QuNGC0Ywg0LjQvdGC0LXRgNC10YHQvdGD0Y4g0LrQvtC80LDQvdC00YMg0LzQvtC70L7QtNGL0YUg0LjQs9GA0L7QutC+0LIsINC80L3QvtCz0LjQtSDQuNC3INC60L7RgtC+0YDRi9GFINC/0YDQuNGI0LvQuCDQuNC3INGO0L3QvtGI0LXRgdC60L7QuSDQutC+0LzQsNC90LTRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiwg0L3QuNC60LDQutC40YUg0YHQtdGA0YzQtdC30L3Ri9GFINC/0L7QsdC10LQg0LXQvNGDINC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDRg9C00LDQu9C+0YHRjC4g0JHQvtC70LXQu9GM0YnQuNC60Lgg0Lgg0YDRg9C60L7QstC+0LTRgdGC0LLQviDRgtGA0LXQsdC+0LLQsNC70Lgg0LPRgNC+0LzQutC40YUg0YPRgdC/0LXRhdC+0LIsINC4INCyIDE5OTgg0LPQvtC00YMg0LIg0LrQu9GD0LEg0LHRi9C7INC/0YDQuNCz0LvQsNGI0LXQvSDQltC10YDQsNGAINCj0LvRjNC1LCDQutC+0YLQvtGA0YvQuSDQtNC+0LvQttC10L0g0LHRi9C7INGA0LDQt9C00LXQu9C40YLRjCDRgtGA0LXQvdC10YDRgdC60L7QtSDQutGA0LXRgdC70L4g0YEg0KDQvtC10Lwg0K3QstCw0L3RgdC+0LwuINCe0L/Ri9GCINGB0L7QstC80LXRgdGC0L3QvtC5INGA0LDQsdC+0YLRiyDQvtC60LDQt9Cw0LvRgdGPINC90LXRg9C00LDRh9C90YvQvCwg0Lgg0K3QstCw0L3RgSDQv9C+0LrQuNC90YPQuyDQutC70YPQsSwg0L/QvtC70L7QttC40LIg0YLQtdC8INGB0LDQvNGL0Lwg0LrQvtC90LXRhiAzNSDQv9C10YDQuNC+0LTRgyDQv9GA0LXQtNCw0L3QvdC+0Lkg0YHQu9GD0LbQsdGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y5cXFwiLlxcclxcblxcclxcbiAgICAgICAg0KPQu9GM0LUg0L3QsNGH0LDQuyDRgNCw0LfQstC40LLQsNGC0Ywg0YHQvtGB0YLQsNCyINC60LvQvNCw0L3QtNGLLCDQv9GA0LjQs9C70LDRiNCw0Y8g0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC90LXQuNC30LLQtdGB0YLQvdGL0YUg0LjQs9GA0L7QutC+0LIsINC/0YDQuCDRjdGC0L7QvCDQtdCz0L4g0YHQvtCy0LXRgNGI0LXQvdC90L4g0L3QtSDQv9GD0LPQsNC70Lgg0LrRgNC40YLQuNGH0LXRgdC60LjQtSDQvtGC0LfRi9Cy0Ysg0YHRgNC10LTRgdGC0LIg0LzQsNGB0YHQvtCy0L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC4g0JXQvNGDINGD0LTQsNC70L7RgdGMINC30L3QsNGH0LjRgtC10LvRjNC90L4g0YPQu9GD0YfRiNC40YLRjCDQuNCz0YDRgyDQutC+0LzQsNC90LTRiyDQsiDQvtCx0L7RgNC+0L3QtSwg0LfQsCDRh9GC0L4g0LIgMjAwMSDQs9C+0LTRgyDQvtC9INCx0YvQuyDQstC+0LfQvdCw0LPRgNCw0LbQtNC10L0g0L/Rj9GC0YzRjiDRgtGA0L7RhNC10Y/QvNC4LCDQsCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQvdC1INC/0L7RgtC10YDQv9C10Lsg0L3QuCDQvtC00L3QvtCz0L4g0L/QvtGA0LDQttC10L3QuNGPINCyINC60YPQsdC60L7QstGL0YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUg0YLQvtCz0L4g0YHQtdC30L7QvdCwINC4INC60LLQsNC70LjRhNC40YbQuNGA0L7QstCw0LvRgdGPINCyINCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCd0LAg0YHQu9C10LTRg9GO0YnQuNC5INCz0L7QtCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdC10YDRjNC10LfQvdC+INC/0YDQtdGC0LXQvdC00L7QstCw0Lsg0L3QsCDQv9C+0LHQtdC00YMg0LIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUg0Lgg0LIg0YLQviDQttC1INCy0YDQtdC80Y8g0L3QtdC/0LvQvtGF0L4g0YHQtdCx0Y8g0L/RgNC+0Y/QstC40Lsg0LIg0JvQuNCz0LUg0YfQtdC80L/QuNC+0L3QvtCyLCDQtNC+0LHRgNCw0LLRiNC40YHRjCDQtNC+INGH0LXRgtCy0LXRgNGC0YzRhNC40L3QsNC70LAg0YHQvtGA0LXQstC90L7QstCw0L3QuNGPLCDQs9C00LUg0YPRgdGC0YPQv9C40Lsg0LvQtdCy0LXRgNC60YPQt9C10L3RgdC60L7QvNGDIFxcXCLQkdCw0LnQtdGA0YNcXFwiLCDQstGL0YjQtdC00YjQtdC80YMg0LIg0LjRgtC+0LPQtSDQsiDRhNC40L3QsNC7INGC0YPRgNC90LjRgNCwLlxcclxcblxcclxcbiAgICAgICAg0JjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGB0L4g0LfQtNC+0YDQvtCy0YzQtdC8INCW0LXRgNCw0YDQsCDQo9C70YzQtSwg0LHQvtC70YzRiNGD0Y4g0YfQsNGB0YLRjCDRgdC70LXQtNGD0Y7RidC10LPQviDRgdC10LfQvtC90LAg0LrQvtC80LDQvdC00L7QuSDRhNCw0LrRgtC40YfQtdGB0LrQuCDRgNGD0LrQvtCy0L7QtNC40Lsg0KTQuNC7INCi0L7QvNC/0YHQvtC9LCDQvdC+INCx0LvQsNCz0L7QtNCw0YDRjyDRgdCy0L7QtdC8INCx0YPRgtGA0YPQvNC+0LLRgdC60L7QvNGDINC/0YDQvtGI0LvQvtC80YMg0LXQvNGDINGD0LTQsNC70L7RgdGMINGD0YHQv9C10YjQvdC+INGB0L/RgNCw0LLQuNGC0YzRgdGPINGBINGN0YLQvtC5INC30LDQtNCw0YfQtdC5LiDQkiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0L3Rj9C7INCy0YLQvtGA0L7QtSDQvNC10YHRgtC+LCDRg9GB0YLRg9C/0LjQsiDQu9C40YjRjCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIsINC4INCy0L3QvtCy0Ywg0L/QvtC70YPRh9C40Lsg0L/Rg9GC0LXQstC60YMg0LIg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyLlxcclxcblxcclxcbiAgICAgICAg0KHQtdC30L7QvSAyMDAzLzA0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC30LDQstC10YDRiNC40Lsg0L3QsCDRh9C10YLQstC10YDRgtC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70YPRh9C40LIg0YLQtdC8INGB0LDQvNGL0Lwg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9GA0LjQvdGP0YLRjCDRg9GH0LDRgdGC0LjQtSDQsiDQm9C40LPQtSDQp9C10LzQv9C40L7QvdC+0LIg0YHQu9C10LTRg9GO0YnQtdCz0L4g0YHQtdC30L7QvdCwLiDQoNGD0LrQvtCy0L7QtNGB0YLQstC+INC60LvRg9Cx0LAg0YDQtdGI0LjQu9C+LCDRh9GC0L4g0L3QsNGB0YLQsNC70LAg0L/QvtGA0LAg0L/QtdGA0LXQvNC10L0uINCd0L7QstGL0Lwg0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQoNCw0YTQsNGN0LvRjCDQkdC10L3QuNGC0LXRgSwg0LAg0KPQu9GM0LUg0YHQvtCz0LvQsNGB0LjQu9GB0Y8g0L/QvtC60LjQvdGD0YLRjCDQutC70YPQsS5cXHJcXG5cXHJcXG4gICAgICAgINCR0LXQvdC40YLQtdGBINC90LUg0YHRgtCw0Lsg0YLRgNCw0YLQuNGC0Ywg0LLRgNC10LzRjyDQvdCwINC/0L7QuNGB0LrQuCDQtNC70Y8g0YHQtdCx0Y8g0L3QvtCy0YvRhSDQv9C+0LzQvtGJ0L3QuNC60L7Qsiwg0LAg0L7RgdGC0LDQstC40Lsg0L3QsCDRgdCy0L7QuNGFINC00L7Qu9C20L3QvtGB0YLRj9GFINCk0LjQu9CwINCi0L7QvNC/0YHQvtC90LAsINCh0Y3QvNC80Lgg0JvQuCDQuCDQlNC20L4g0JrQvtGA0YDQuNCz0LDQvdCwLiDQktC90LXQt9Cw0L/QvdC+IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0LXRgNC90YPQu9GB0Y8g0Log0LDRgtCw0LrRg9GO0YnQtdC80YMg0YHRgtC40LvRjiDQuNCz0YDRiyDRgSDQsdC+0LvRjNGI0LjQvCDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INC/0LXRgNC10LTQsNGHLCDQvdCwINGA0LDQtNC+0YHRgtGMINCx0L7Qu9C10LvRjNGJ0LjQutCw0Lwg0Lgg0LrRgNC40YLQuNC60LDQvCwg0Lgg0YHRgtCw0Lsg0L/RgNC+0Y/QstC70Y/RgtGMINC90LDQvNC10LrQuCDQvdCwINC80L3QvtCz0L7QvtCx0LXRidCw0Y7RidC10LUg0LHRg9C00YPRidC10LUuINCSINC60L7QvdGG0LUg0YHQtdC30L7QvdCwIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7QsiDQsiDQvtC00L3QvtC8INC40Lcg0YHQsNC80YvRhSDQt9Cw0YXQstCw0YLRi9Cy0LDRjtGJ0LjRhSDRhNC40L3QsNC70L7QsiDQsiDQuNGB0YLQvtGA0LjQuCDRgtGD0YDQvdC40YDQsC5cXHJcXG5cXHJcXG4gICAgICAgINCg0YPQutC+0LLQvtC00YHRgtCy0L4g0LrQu9GD0LHQsCwg0LIg0LvQuNGG0LUg0LDQvNC10YDQuNC60LDQvdGB0LrQuNGFINCy0LvQsNC00LXQu9GM0YbQtdCyINCU0LbQvtGA0LbQsCDQltC40LvQu9C10YLRgtCwINC4INCi0L7QvNCwINCl0LjQutGB0LAsINC00LDQstC40LvQviDQvdCwINCR0LXQvdC40YLQtdGB0LAg0YEg0YLRgNC10LHQvtCy0LDQvdC40LXQvCDQvdC10LzQtdC00LvQtdC90L3QvtCz0L4g0YPRgdC/0LXRhdCwINCyINCf0YDQtdC80YzQtdGALdC70LjQs9C1LiDQoNCw0YHQutC+0Lsg0L/RgNC+0LjQt9C+0YjQtdC7LCDQutC+0LPQtNCwINGC0YDQtdC90LXRgNGDINCx0YvQu9C+INC+0YLQutCw0LfQsNC90L4g0LIg0YHRgNC10LTRgdGC0LLQsNGFINC90LAg0YPRgdC40LvQtdC90LjQtSDRgdC+0YHRgtCw0LLQsC5cXHJcXG5cXHJcXG4gICAgICAgINCb0LXRgtC+0LwgMjAxMCDQs9C+0LTQsCDQkdC10L3QuNGC0LXRgdCwINGB0LzQtdC90LjQuyDQoNC+0Lkg0KXQvtC00LbRgdC+0L0sINC60L7RgtC+0YDQvtC80YMg0LfQsCDRgtC+INC90LXQv9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0LUg0LLRgNC10LzRjywg0YfRgtC+INC+0L0g0L/RgNC+0LHRi9C7INGDINGA0YPQu9GPINC60LvRg9Cx0LAsINGC0LDQuiDQvdC1INGD0LTQsNC70L7RgdGMINC30LDQstC+0LXQstCw0YLRjCDQu9GO0LHQvtCy0Ywg0LHQvtC70LXQu9GM0YnQuNC60L7Qsi4g0JrQu9GD0LEsINGC0LXQvCDQstGA0LXQvNC10L3QtdC8LCDQv9GL0YLQsNC70YHRjyDRgNCw0LfQvtGA0LLQsNGC0Ywg0LLRgdC1INGB0LLRj9C30Lgg0YEg0LDQvNC10YDQuNC60LDQvdGB0LrQuNC80Lgg0YXQvtC30Y/QtdCy0LDQvNC4LlxcclxcblxcclxcbiAgICAgICAg0JIg0LrQvtC90YbQtSDQutC+0L3RhtC+0LIsINCx0LvQsNCz0L7QtNCw0YDRjyDRg9GB0LjQu9C40Y/QvCDQv9GA0LXQt9C40LTQtdC90YLQsCDQutC70YPQsdCwLCDQnNCw0YDRgtC40L3QsCDQkdGA0L7RgtC+0L3QsCwg0L/QvtGP0LLQuNC70YHRjyDQvdC+0LLRi9C5INC/0L7QutGD0L/QsNGC0LXQu9GMLCDQuCDRgdC00LXQu9C60LAg0L/QviDQv9GA0L7QtNCw0LbQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDRgdC+0YHRgtC+0Y/Qu9Cw0YHRjCwg0L3QtdGB0LzQvtGC0YDRjyDQvdCwINCy0YHQtSDRgdGD0LTQtdCx0L3Ri9C1INC40YHQutC4LCDQv9GL0YLQsNCy0YjQuNC10YHRjyDQv9C+0LzQtdGI0LDRgtGMINC10LUg0L7RgdGD0YnQtdGB0YLQstC70LXQvdC40Y4uINCSINC+0LrRgtGP0LHRgNC1IDIwMTAg0LrQu9GD0LEg0L/QvtC/0YDQvtGJ0LDQu9GB0Y8g0YEg0KXQuNC60YHQvtC8INC4INCW0LjQu9C70LXRgtGC0L7QvCDQuCDQstGB0YLRgNC10YLQuNC7INC90L7QstC+0LPQviDQstC70LDQtNC10LvRjNGG0LAsINCU0LbQvtC90LAg0JPQtdC90YDQuCwg0YfRjNGPINC60L7QvNC/0LDQvdC40Y8gTkVWUyDRg9C20LUg0LjQvNC10LvQsCDRg9GB0L/QtdGI0L3Ri9C5INC+0L/Ri9GCINGA0LDQsdC+0YLRiyDRgSDQsdC+0YHRgtC+0L3RgdC60L7QuSDQsdC10LnRgdCx0L7Qu9GM0L3QvtC5INC60L7QvNCw0L3QtNC+0LkgXFxcItCg0LXQtCDQodC+0LrRgVxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQpdC+0LTQttGB0L7QvSDQvdC1INC90LDQtNC+0LvQs9C+INC30LDQtNC10YDQttCw0LvRgdGPINCyINC60LvRg9Cx0LUsINC/0L7RgdC70LUg0YPQttCw0YHQvdC+0LPQviDQvdCw0YfQsNC70LAg0YHQtdC30L7QvdCwIDIwMTAvMTEsINCyINGP0L3QstCw0YDQtSDQvtC9INGB0L7Qs9C70LDRgdC40LvRgdGPINC/0L7QutC40L3Rg9GC0Ywg0YHQstC+0Lkg0L/QvtGB0YIsINC4INC10LPQviDQvNC10YHRgtC+INCy0YDQtdC80LXQvdC90L4g0LfQsNC90Y/QuyDQmtC10L3QvdC4INCU0LDQu9Cz0LvRgtGILCDRh9GM0LUg0LjQvNGPINC6INGC0L7QvNGDINCy0YDQtdC80LXQvdC4INCy0YHQtSDRh9Cw0YnQtSDRgdGC0LDQu9C4INCy0YHQv9C+0LzQuNC90LDRgtGMINCx0L7Qu9C10LvRjNGJ0LjQutC4LlxcclxcblxcclxcbiAgICAgICAg0JTQsNC70LPQu9C40Ygg0LHRi9GB0YLRgNC+INCy0YHQtdC70LjQuyDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINC60L7QvNCw0L3QtNGDLCDQuNC30LHQsNCy0LjQu9GB0Y8g0L7RgiDQvdC10L3Rg9C20L3Ri9GFINC40LPRgNC+0LrQvtCyLCDQstC60LvRjtGH0LDRjyDQuCDRgdC/0L7RgNC90YvQuSDQv9C10YDQtdGF0L7QtCDQpNC10YDQvdCw0L3QtNC+INCi0L7RgNGA0LXRgdCwINCyIFxcXCLQp9C10LvRgdC4XFxcIiwg0L/RgNC40L7QsdGA0LXQuyDQm9GD0LjRgdCwINCh0YPQsNGA0LXRgdCwINC4INCt0L3QtNC4INCa0Y3RgNGA0L7Qu9C70LAg0LTQu9GPINC/0L7RgdGC0YDQvtC10L3QuNGPINC90L7QstC+0Lkg0LvQuNC90LjQuCDQsNGC0LDQutC4LiDQmtC70YPQsSDRgdC70L7QstC90L4g0LfQsNC90L7QstC+INGA0L7QtNC40LvRgdGPINC4INCy0LfQu9C10YLQtdC7INC90LAg0LrRgNGL0LvRjNGP0YUuINCSINC60L7QvdGG0LUg0YHQtdC30L7QvdCwINCU0LDQu9Cz0LvQuNGIINC/0L7QtNC/0LjRgdCw0Lsg0YEgXFxcItCb0LjQstC10YDQv9GD0LvQtdC8XFxcIiDRgtGA0LXRhdC70LXRgtC90LjQuSDQutC+0L3RgtGA0LDQutGCLlxcclxcblxcclxcbiAgICAgICAg0J7RgdC90L7QstC90L7QuSDRhtC10LvRjNGOINC60LvRg9Cx0LAg0LHRi9C70L4g0LLQvtC30LLRgNCw0YnQtdC90LjQtSDQsiDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIsINC30LAg0YHQstC+0Lkg0L/QtdGA0LLRi9C5INC/0L7Qu9C90YvQuSDRgdC10LfQvtC9INCyINC60LvRg9Cx0LUg0JTQsNC70LPQtNC40YjRgyDQtNC+0YHRgtC40YfRjCDQtdC1INC90LUg0YPQtNCw0LvQvtGB0YwsINC40Lct0LfQsCDQtNC+0YHRgtCw0YLQvtGH0L3QviDQvdC10YHRgtCw0LHQuNC70YzQvdGL0YUg0LLRi9GB0YLRg9C/0LvQtdC90LjQuSDQutC+0LzQsNC90LTRiyDQsiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtS4g0JIg0LjRgtC+0LPQtSDQutC70YPQsSDRhNC40L3QuNGI0LjRgNC+0LLQsNC7INC90LAg0LLQvtGB0YzQvNC+0Lwg0LzQtdGB0YLQtSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QuNC20LUg0YHQstC+0LXQs9C+INC+0YHQvdC+0LLQvdC+0LPQviDQutC+0L3QutGD0YDQtdC90YLQsCwgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KLQtdC8INC90LUg0LzQtdC90LXQtSwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YXQvtGA0L7RiNC+INC/0YDQvtGP0LLQuNC7INGB0LXQsdGPINCyINC60YPQsdC60L7QstGL0YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUuINCSINGE0LXQstGA0LDQu9C1IDIwMTIg0LPQvtC00LAgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstGL0LjQs9GA0LDQu9C4INCa0YPQsdC+0Log0JvQuNCz0LgsINC+0LHRi9Cz0YDQsNCyIFxcXCLQmtCw0YDQtNC40YTRhFxcXCIg0LIg0YHQtdGA0LjQuCDQv9C10L3QsNC70YzRgtC4LCDQsdC70LDQs9C+0LTQsNGA0Y8g0YfQtdC80YMg0L/QvtC70YPRh9C40Lsg0L/Rg9GC0LXQstC60YMg0LIg0JvQuNCz0YMg0JXQstGA0L7Qv9GLLiDQkCDQsiDQvNCw0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LggXFxcItCn0LXQu9GB0LhcXFwiINCy0YHRgtGA0LXRgtC40LvQuNGB0Ywg0LIg0YTQuNC90LDQu9C1INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4LCDQvtC00L3QsNC60L4g0YPQtNCw0YfQsCDQvtC60LDQt9Cw0LvQsNGB0Ywg0L3QsCDRgdGC0L7RgNC+0L3QtSDQu9C+0L3QtNC+0L3RgdC60L7Qs9C+INC60LvRg9Cx0LAuXFxyXFxuXFxyXFxuICAgICAgICDQndC10YHQvNC+0YLRgNGPINC90LAg0YPRgdC/0LXRhdC4INCyINC60YPQsdC60L7QstGL0YUg0YLRg9GA0L3QuNGA0LDRhSwg0LIg0LrQvtC90YbQtSDRgdC10LfQvtC90LAg0JTQsNC70LPQu9C40Ygg0LHRi9C7INGD0LLQvtC70LXQvSwg0LAg0LXQs9C+INC80LXRgdGC0L4g0LfQsNC90Y/QuyDQvNC+0LvQvtC00L7QuSDRgdC10LLQtdGA0L7QuNGA0LvQsNC90LTRgdC60LjQuSDRgtGA0LXQvdC10YAsINCR0YDQtdC90LTQsNC9INCg0L7QtNC20LXRgNGBLCDQv9C+0LrQvtGA0LjQstGI0LjQuSDQuiDRgtC+0LzRgyDQstGA0LXQvNC10L3QuCDQstGB0LXRhSDRgdCy0L7QtdC5INGA0LDQsdC+0YLQvtC5INGBINC00L7RgdGC0LDRgtC+0YfQvdC+INGB0LrRgNC+0LzQvdGL0LwgXFxcItCh0YPQvtC90YHQuCDQodC40YLQuFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQoNC+0LTQttC10YDRgSDQv9GA0LjRiNC10Lsg0YEg0YDQtdGI0LjQvNC+0YHRgtGM0Y4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LIg0LrQu9GD0LHQtSDQvdC+0LLRg9GOINGE0LjQu9C+0YHQvtGE0LjRjiwg0L/RgNC40LLQuNGC0Ywg0LrQvtC80LDQvdC00LUg0L3QvtCy0YvQuSDRgdGC0LjQu9GMINC40LPRgNGLLCDQv9GA0Lgg0Y3RgtC+0Lwg0L3QtSDRgtC10YDRj9GPLCDQutCw0Log0L7QvSDRg9GC0LLQtdGA0LbQtNCw0LssINGB0LLRj9C30Lgg0YEg0LjRgdGC0L7RgNC40LXQuS4g0KEg0YHQvtCx0L7QuSDQuNC3IFxcXCLQodGD0L7QvdGB0LhcXFwiINC+0L0g0LfQsNGF0LLQsNGC0LjQuyDRgdCy0L7QuNGFINCw0YHRgdC40YHRgtC10L3RgtC+0LIg0Lgg0L/QvtC70YPQt9Cw0YnQuNGC0L3QuNC60LAg0JTQttC+INCQ0LvQu9C10L3QsC4g0J7QtNC90LDQutC+LCDQuNC3LdC30LAg0L/RgNC+0LLQvtC00LjQstGI0LXQs9C+0YHRjyDQsiDRgtC+INCy0YDQtdC80Y8g0YfQtdC80L/QuNC+0L3QsNGC0LAg0JXQstGA0L7Qv9GLLCDRgtGA0LXQvdC10YAg0LLQv9C10YDQstGL0LUg0YPQstC40LTQtdC7INCy0YHRjiDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQsiDRgdCx0L7RgNC1INGC0L7Qu9GM0LrQviDQuiDQvdCw0YfQsNC70YMg0YHQtdC30L7QvdCwLiDQkiDRgdC10LfQvtC90LUgMjAxMi8xMyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0YHRgtGD0L/QsNC7INC60YDQsNC50L3QtSDQvdC10YHRgtCw0LHQuNC70YzQvdC+LCDQv9C+0LrQsNC30LDQsiDRhdGD0LTRiNC40Lkg0LfQsCDQv9C+0YHQu9C10LTQvdC40LUg0YHRgtC+INC70LXRgiDRgdGC0LDRgNGCINGB0LXQt9C+0L3QsC4g0JrRgNGD0L/QvdGL0LUg0L/QvtCx0LXQtNGLINGB0LzQtdC90Y/Qu9C4INC90LXQvtC20LjQtNCw0L3QvdGL0LUg0LHQtdC30LLQvtC70YzQvdGL0LUg0L/QvtGA0LDQttC10L3QuNGPLiDQktC+INCy0YDQtdC80Y8g0LfQuNC80L3QtdCz0L4g0YLRgNCw0L3RgdGE0LXRgNC90L7Qs9C+INC+0LrQvdCwINCg0L7QtNC20LXRgNGB0YMg0YPQtNCw0LvQvtGB0Ywg0YPRgdC40LvQuNGC0Ywg0LrQvtC80LDQvdC00YMg0LTQstGD0LzRjyDQv9GA0LjQvtCx0YDQtdGC0LXQvdC40Y/QvNC4OiDQsNC90LPQu9C40LnRgdC60LjQvCDQvdCw0L/QsNC00LDRjtGJ0LjQvCDQlNGN0L3QuNC10LvQvtC8INCh0YLQsNGA0YDQuNC00LbQtdC8INC4INCx0LvQsNC30LjQu9GM0YbQtdC8INCk0LjQu9C70LjQv9C/0LUg0JrQvtGD0YLQuNC90YzQvi4g0JIg0LjRgtC+0LPQtSDQutC+0LzQsNC90LTQsCDQt9Cw0LLQtdGA0YjQuNC70LAg0YHQtdC30L7QvSDQvdCwINGB0LXQtNGM0LzQvtC8INC80LXRgdGC0LUsINCy0L3QvtCy0Ywg0L3QuNC20LUgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0JfQuNC80L7QuSAyMDEzINCy0LXRgtC10YDQsNC9INC60LvRg9Cx0LAg0JTQttC10LnQvNC4INCa0LDRgNGA0LDQs9C10YAg0L7QsdGK0Y/QstC40Lsg0L4g0LfQsNCy0LXRgNGI0LXQvdC40Lgg0YHQstC+0LXQuSDQutCw0YDRjNC10YDRiyDQvdCwIFxcXCLQrdC90YTQuNC70LTQtVxcXCIuIDE5INC80LDRjyDQvtC9INC/0YDQvtCy0LXQuyDRgdCy0L7QuSDQv9C+0YHQu9C10LTQvdC40Lkg0L7RhNC40YbQuNCw0LvRjNC90YvQuSDQvNCw0YLRhyDQsiDQutGA0LDRgdC90L7QuSDRhNGD0YLQsdC+0LvQutC1INCyINC/0L7QsdC10LTQvdC+0Lwg0LTQu9GPIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC80LDRgtGH0LUg0L/RgNC+0YLQuNCyIFxcXCLQmtGD0LjQvdC3INCf0LDRgNC6INCg0LXQudC90LTQttC10YDRgVxcXCIuXFxyXFxuICAgIDwvZGl2PjxociAvPjxpPlxcclxcbiAgICAgICAg0JjRgdGC0L7Rh9C90LjQujogbGZjb25saW5lLmNvbVxcclxcbiAgICAgICAg0J/QtdGA0LXQstC+0LQ6IHRhcy1uLXJcXHJcXG4gICAgPC9pPlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIGNvbnRhaW5lci1mbHVpZFxcXCIgdWktdmlldz1cXFwicmlnaHRDb250YWluZXJcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXN4LTEyXFxcIiAqbmdJZj1cXFwicm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+PGEgKGNsaWNrKT1cXFwidXBkYXRlRXBsVGFibGUoKVxcXCI+0J7QsdC90L7QstC40YLRjCDRgtCw0LHQu9C40YbRgzwvYT48L3NwYW4+XFxyXFxuICAgIDxlcGwtdGFibGU+PC9lcGwtdGFibGU+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9yaWdodFNpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHA+PGZvbnQgY29sb3I9XFxcInJlZFxcXCI+PGI+0JTQsNC90L3Ri9C1INC/0YDQsNCy0LjQu9CwINC90LUg0L/QvtC00LvQtdC20LDRgiDQvtCx0YHRg9C20LTQtdC90LjRjiDQuCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGLINC00LvRjyDQstGL0L/QvtC70L3QtdC90LjRjyDQstGB0LXQvNC4INCx0LXQtyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INC/0L7RgNGC0LDQu9CwINGA0LDQvdCz0L7QvCDQvtGCINC/0YDQvtGB0YLQvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC00L4g0LzQvtC00LXRgNCw0YLQvtGA0LAgKNCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YsgLSDQutCw0Log0LvQuNGG0LAsINGN0YLQuCDQv9GA0LDQstC40LvQsCDRg9GB0YLQsNC90LDQstC70LjQstCw0Y7RidC40LUgLSDQv9C+0YHRgtGD0L/QsNGO0YIg0L/QviDRgdCy0L7QtdC80YMg0YPRgdC80L7RgtGA0LXQvdC40Y4pLiDQldGB0LvQuCDQstCw0Lwg0L3QtSDQvdGA0LDQstGP0YLRgdGPINGN0YLQuCDQv9GA0LDQstC40LvQsCDQuCDQstGLINGF0L7RgtC40YLQtSDQtNC70Y8g0YHQtdCx0Y8g0LTRgNGD0LPQuNC1INC/0YDQsNCy0LjQu9CwIC0g0LLRiyDQstGB0LXQs9C00LAg0LzQvtC20LXRgtC1INGB0L7Qt9C00LDRgtGMINGB0LLQvtC5INGB0L7QsdGB0YLQstC10L3QvdGL0Lkg0YHQsNC50YIg0Lgg0LTQtdC70LDRgtGMINGC0LDQvCDQstGB0LUsINGH0YLQviDQstCw0Lwg0L3RgNCw0LLQuNGC0YHRjy48L2I+PC9mb250PiA8L3A+XFxyXFxuICAgIDxwPtCf0YDQsNCy0LjQu9CwINCy0LLQvtC00Y/RgtGB0Y8g0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LrQvtC80YTQvtGA0YLQvdC+0Lkg0Lgg0LrQvtC90YHRgtGA0YPQutGC0LjQstC90L7QuSDQsNGC0LzQvtGB0YTQtdGA0Ysg0L7QsdGJ0LXQvdC40Y8uINCV0YHQu9C4INCS0LDRgSDQvdC1INGD0YHRgtGA0LDQuNCy0LDQtdGCINGD0YHRgtCw0L3QvtCy0LvQtdC90L3QsNGPINGE0L7RgNC80LAg0L7QsdGJ0LXQvdC40Y8sINCy0L7Qt9C00LXRgNC20LjRgtC10YHRjCDQvtGCINGD0YfQsNGB0YLQuNGPINCyINC00LDQvdC90L7QuSDQutC+0L3RhNC10YDQtdC90YbQuNC4LjwvcD5cXHJcXG4gICAgPHA+PGI+SS4g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS48L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0KDQtdCz0LjRgdGC0YDQuNGA0YPRj9GB0Ywg0L3QsCDRhNC+0YDRg9C80LUsINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgdC+0LPQu9Cw0YjQsNC10YLRgdGPINCy0YvQv9C+0LvQvdGP0YLRjCDQtNCw0L3QvdGL0LUg0J/RgNCw0LLQuNC70LAuPC9saT5cXHJcXG4gICAgICAgIDxsaT7QlNC70Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQvdCwINGE0L7RgNGD0LzQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LTQvtC70LbQtdC9INC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDQtNC10LnRgdGC0LLRg9GO0YnQuNC5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLiDQnNGLINCz0LDRgNCw0L3RgtC40YDRg9C10Lwg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtGMINGD0LrQsNC30LDQvdC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCS0YvQsdC+0YAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gKG5pY2tuYW1lKSDRj9Cy0LvRj9C10YLRgdGPINCy0LDRiNC40Lwg0LjRgdC60LvRjtGH0LjRgtC10LvRjNC90YvQvCDQv9GA0LDQstC+0LwuINCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC+0YHRgtCw0LLQu9GP0LXRgiDQt9CwINGB0L7QsdC+0Lkg0L/RgNCw0LLQviDQv9GA0LjQvdGP0YLRjCDQvNC10YDRiyDQuiDQv9GA0LXQutGA0LDRidC10L3QuNGOINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIG5pY2tuYW1lLCDQtdGB0LvQuCDQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0L3QsNGA0YPRiNCw0LXRgiDQvtCx0YnQtdC/0YDQuNC90Y/RgtGL0LUg0LzQvtGA0LDQu9GM0L3Ri9C1INC4INGN0YLQuNGH0LXRgdC60LjQtSDQvdC+0YDQvNGLINC40LvQuCDRj9Cy0LvRj9C10YLRgdGPINC+0YHQutC+0YDQsdC40YLQtdC70YzQvdGL0Lwg0LTQu9GPINC00YDRg9Cz0LjRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDRhNC+0YDRg9C80LAuINCX0LDQv9GA0LXRidC10L3QsCDRgNC10LPQuNGB0YLRgNCw0YbQuNGPIG5pY2tuYW1lLCDRgdGF0L7QttC40YUg0YEg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQvNC4INC00L4g0YHRgtC10L/QtdC90LgsINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LLQstC10YHRgtC4INCyINC30LDQsdC70YPQttC00LXQvdC40LUg0LTRgNGD0LPQuNGFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INGE0L7RgNGD0LzQsC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCX0LDQv9GA0LXRidC10L3QsCDQvdC10L7QtNC90L7QutGA0LDRgtC90LDRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNGPINC+0LTQvdC40Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LwsINCy0L3QtSDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YbQtdC70LXQuSwg0YEg0LrQvtGC0L7RgNGL0LzQuCDRgtCw0LrQsNGPINGA0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/RgNC+0LLQvtC00LjRgtGB0Y8uINCU0LDQvdC90L7QtSDQvdCw0YDRg9GI0LXQvdC40LUg0Y/QstC70Y/QtdGC0YHRjyDQutGA0LDQudC90LUg0YHQtdGA0YzQtdC30L3Ri9C8INC4INCy0LXQtNC10YIg0Log0LHQu9C+0LrQuNGA0L7QstCw0L3QuNGOINCy0YHQtdGFINGD0YfQtdGC0L3Ri9GFINC30LDQv9C40YHQtdC5LiDQldGB0LvQuCDQstCw0Lwg0L3QtSDQvdGA0LDQstC40YLRgdGPINC90LjQuiwg0L3QsNC/0LjRiNC40YLQtSDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40Lkg0YDQsNC30LTQtdC7INGE0L7RgNGD0LzQsCDQuNC70Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDRgy48L2xpPlxcclxcbiAgICAgICAgPGxpPtCV0YHQu9C4INCy0Ysg0L3QtSDQv9GA0L7Rj9Cy0LvRj9C10YLQtSDQsNC60YLQuNCy0L3QvtGB0YLRjCDQvdCwINGE0L7RgNGD0LzQtSDQsiDRgtC10YfQtdC90LjQtSDQtNC70LjRgtC10LvRjNC90L7Qs9C+INCy0YDQtdC80LXQvdC4LCDQstCw0YjQsCDRg9GH0LXRgtC90LDRjyDQt9Cw0L/QuNGB0Ywg0LzQvtC20LXRgiDQsdGL0YLRjCDRg9C00LDQu9C10L3QsC48L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD48Yj5JSS4g0J3QsCDQpNC+0YDRg9C80LUgPGZvbnQgY29sb3I9XFxcInJlZFxcXCI+0LfQsNC/0YDQtdGJ0LXQvdC+PC9mb250Pjo8L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC90LXQvdC+0YDQvNCw0YLQuNCy0L3Rg9GOINC70LXQutGB0LjQutGDINCyINC70Y7QsdGL0YUg0LXRkSDQv9GA0L7Rj9Cy0LvQtdC90LjRj9GFLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDRgdC+0LrRgNCw0YnQtdC90L3Rg9GOINC40LvQuCDQt9Cw0LzQtdC90LXQvdC90YPRjiDCq9C30LLQtdC30LTQvtGH0LrQsNC80LjCuyAo0LjQu9C4INC00YDRg9Cz0LjQvNC4INGB0LjQvNCy0L7Qu9Cw0LzQuCksINC90LAg0YDRg9GB0YHQutC+0LwsINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUsINC70LjQsdC+INGC0YDQsNC90YHQu9C40YLQtS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YssINGA0LDQvdC10LUg0L7QsdGB0YPQttC00LDQstGI0LjQtdGB0Y8g0LIg0KTQvtGA0YPQvNC1LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y8sINC90LUg0LjQvNC10Y7RidC40LUg0L7RgtC90L7RiNC10L3QuNGPINC6INC+0LHRgdGD0LbQtNCw0LXQvNC+0Lkg0YLQtdC80LUgKNC+0YTRhNGC0L7Qv9C40LopLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINCyINC60L7RgtC+0YDRi9GFINCx0L7Qu9C10LUg0L/QvtC70L7QstC40L3RiyDQstGB0LXQuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQvdCw0L/QuNGB0LDQvdC+INCX0JDQk9Cb0JDQktCd0KvQnNCYINCR0KPQmtCS0JDQnNCYLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiywg0LjQvNC10Y7RidC40LUg0LIg0L3QsNC30LLQsNC90LjQuCDRg9C60YDQsNGI0LXQvdC40Y8gKMKrPT09LS0t0JzQvtGPINGC0LXQvNCwLS0tPT09wrspLCDQvdC1INC+0YLRgNCw0LbQsNGO0YnQuNC1INGB0YPRgtGMINCy0L7Qv9GA0L7RgdCwICjCq9Cf0L7RgdC80L7RgtGA0Lgg0YHRjtC00LDCuyDQuNC70LggwqtmZGdsO2ZqZGdsO2ZkamdsZ2ZkwrspLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDRgSDQvtCx0YDQsNGJ0LXQvdC40LXQvCDQuiDQutC+0L3QutGA0LXRgtC90L7QvNGDINGD0YfQsNGB0YLQvdC40LrRgyDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JTRg9Cx0LvQuNGA0L7QstCw0YLRjCDRgtC10LzRiywg0YLQviDQtdGB0YLRjCDRgNCw0LfQvNC10YnQsNGC0Ywg0L7QtNC40L3QsNC60L7QstGL0LUg0YHQvtC+0LHRidC10L3QuNGPINCyINGA0LDQt9C90YvRhSDRgNCw0LfQtNC10LvQsNGFINCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qp9GA0LXQt9C80LXRgNC90L7QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQs9GA0LDRhNC40YfQtdGB0LrQuNGFINGB0LzQsNC50LvQuNC60L7QsiDQsiDRgdC+0L7QsdGJ0LXQvdC40LggKNCx0L7Qu9C10LUg0YLRgNC10YUg0L/QvtC00YDRj9C0KSDQuNC70Lgg0L/QvtC70L3QvtGB0YLRjNGOINGB0L7RgdGC0L7Rj9GJ0LXQtSDRgtC+0LvRjNC60L4g0LjQtyDRgdC80LDQudC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GD0LHQu9C40LrQsNGG0LjRjyDQv9C+0YHRgtC+0LIsINC90LUg0L3QtdGB0YPRidC40YUg0LfQvdCw0YfQuNGC0LXQu9GM0L3QvtC5INGB0LzRi9GB0LvQvtCy0L7QuSDQvdCw0LPRgNGD0LfQutC4ICjRhNC70YPQtCkuINCX0LDQv9GA0LXRidCw0LXRgtGB0Y8g0L/QuNGB0LDRgtGMINC60L7RgNC+0YLQutC40LUg0LHQtdGB0YHQvNGL0YHQu9C10L3QvdGL0LUg0L/QvtGB0YLRiyDRgtC40L/QsCBcXFwi0JbQltCe0KjQrFxcXCIg0LjQu9C4IFxcXCLQn9CY0KjQmCDQldCp0J5cXFwiLCDQsCDRgtCw0LrQttC1LCDRgdC+0YHRgtC+0Y/RidC40LUg0LjQtyDQvtC00L3QuNGFINGB0LzQsNC50LvQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0LLRgtC+0YDRj9GO0YnQuNGF0YHRjyDRgdC40LzQstC+0LvQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INCyINGB0L7QvtCx0YnQtdC90LjRj9GFINC60YDQsNGB0L3QvtCz0L4g0YbQstC10YLQsCDigJMg0Y3RgtC+INC/0YDQuNCy0LjQu9C10LPQuNGPINC80L7QtNC10YDQsNGC0L7RgNC+0LIg0Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCv0LfRi9C6INGB0LDQudGC0LAt0KDQo9Ch0KHQmtCY0Jku0JHRg9C00YzRgtC1INC00L7QsdGA0Yss0L/QuNGI0LjRgtC1INC90LAg0L3QtdC8LtCa0L7QstC10YDQutCw0L3QuNC1INGB0LvQvtCyINC4INC/0YDQtdC00L3QsNC80LXRgNC10L3QvdC+0LUg0LjQt9Cy0YDQsNGJ0LXQvdC40LUg0L7RgNGE0L7Qs9GA0LDRhNC40Lgg0YDRg9GB0YHQutC+0LPQviDRj9C30YvQutCwLCDQsCDRgtCw0LrQttC1INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70LDRgtC40L3QuNGG0YsgKNGC0YDQsNC90YHQu9C40YLQsCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KbQuNGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0LXQtNGL0LTRg9GJ0LjRhSDRgdC+0L7QsdGJ0LXQvdC40LksINC10YHQu9C4INCyINGN0YLQvtC8INC90LXRgiDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCAo0YTQu9C10LnQvCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCz0YDRg9Cx0YvQtSwg0L3QtdGG0LXQvdC30YPRgNC90YvQtSDQstGL0YDQsNC20LXQvdC40Y8g0Lgg0L7RgdC60L7RgNCx0LvQtdC90LjRjyDQsiDQu9GO0LHQvtC5INGE0L7RgNC80LUuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLINC4INGB0L7QvtCx0YnQtdC90LjRjywg0YHQvtC00LXRgNC20LDRidC40LUg0YDQtdC60LvQsNC80L3Rg9GOLCDQsNC90YLQuNGA0LXQutC70LDQvNC90YPRjiDQuNC70Lgg0LrQvtC80LzQtdGA0YfQtdGB0LrRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLCDQsCDRgtCw0Log0LbQtSDRgdGB0YvQu9C60Lgg0L3QsCDRgdCw0LnRgtGLINGBINGG0LXQu9GM0Y4g0L/QvtCy0YvRiNC10L3QuNGPINC40YUg0L/QvtGB0LXRidCw0LXQvNC+0YHRgtC4LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtC00L7Qu9C20LDRgtGMINC+0LHRgdGD0LbQtNCw0YLRjCDQstC+0L/RgNC+0YHRiyDQuNC3INGC0LXQvCwg0LfQsNC60YDRi9GC0YvRhSDQuNC70Lgg0YPQtNCw0LvQtdC90L3Ri9GFINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10LkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0LLQvtGG0LjRgNC+0LLQsNGC0Ywg0LrQvtC90YTQu9C40LrRgtGLINGBINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj9C80Lgg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINC/0YDQvtGC0LjQstC+0YDQtdGH0LDRidC40LUg0JrQvtC90YHRgtC40YLRg9GG0LjQuCDQuCDQt9Cw0LrQvtC90L7QtNCw0YLQtdC70YzRgdGC0LLRgyDQoNCkLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1INGB0YLQsNGC0YPRgdCwINC40LvQuCDQv9C+0LTQv9C40YHQuCDQvdC10YbQtdC90LfRg9GA0L3Ri9C1INC40LvQuCDRgNGD0LPQsNGC0LXQu9GM0L3Ri9C1INGB0LvQvtCy0LAsINCwINGC0LDQuiDQttC1INC30LDQstC10LTQvtC80L4g0L3QtdC00L7RgdGC0L7QstC10YDQvdGD0Y4g0LjQvdGE0L7RgNC80LDRhtC40Y4uICjQndCw0L/RgNC40LzQtdGALCDQv9C40YHQsNGC0Ywg0LIg0YHRgtCw0YLRg9GB0LUgwqvQnNC+0LTQtdGA0LDRgtC+0YDCuywg0LrQvtCz0LTQsCDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0JLRiyDRgtCw0LrQvtCy0YvQvCDQvdC1INGP0LLQu9GP0LXRgtC10YHRjCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAg0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDQv9C+0LTQv9C40YHQuCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L3QtSDQsdC+0LvQtdC1IDIt0YUg0YHRgtGA0L7Rh9C10Log0Lgg0L3QtSDQsdC+0LvQtdC1IDIwMCDRgdC40LzQstC+0LvQvtCyLiDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAtIFxcXCIyXFxcIi4g0J/QvtC00L/QuNGB0Ywg0L3QtSDQtNC+0LvQttC90LAg0YHQvtC00LXRgNC20LDRgtGMINGC0LXQutGB0YLQsCwg0LLRi9C00LXQu9C10L3QvdC+0LPQviDQutGA0LDRgdC90YvQvCDRhtCy0LXRgtC+0LwuINCg0LDQt9C80LXRgCDQutCw0YDRgtC40L3QutC4INCyINCy0LDRiNC10Lkg0L/QvtC00L/QuNGB0Lgg0LTQvtC70LbQtdC9INGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/RgtGMINGB0LvQtdC00YPRjtGJ0LjQvCDRgtGA0LXQsdC+0LLQsNC90LjRj9C8OlxcclxcbiAgICAgICAgICAgIC0g0YDQsNC30LzQtdGAIC0g0L3QtSDQsdC+0LvQtdC1IDM1MNGFNjAg0L/QuNC60YHQtdC70LXQuSDRgdGD0LzQvNCw0YDQvdC+XFxyXFxuICAgICAgICAgICAgLSDQvtCx0YrQtdC8IC0g0L3QtSDQsdC+0LvQtdC1IDQwINC60LEg0YHRg9C80LzQsNGA0L3QvlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0LrQsNGH0LXRgdGC0LLQtSDQsNCy0LDRgtCw0YDQsCwg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0LjQu9C4INCyINC60LDRh9C10YHRgtCy0LUg0LLQu9C+0LbQtdC90LjQtSDQsiDRgdC+0L7QsdGJ0LXQvdC40Y8g0LrQsNGA0YLQuNC90LrQuCDQv9C+0YDQvdC+0LPRgNCw0YTQuNGH0LXRgdC60L7Qs9C+LCDRjdC60YHRgtGA0LXQvNC40YHRgtGB0LrQvtCz0L4g0LjQu9C4INC+0YHQutC+0YDQsdC40YLQtdC70YzQvdC+0LPQviDRhdCw0YDQsNC60YLQtdGA0LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0L/QsNCz0LDQvdC00LjRgNC+0LLQsNGC0Ywg0LvRjtCx0YvQtSDQvdCw0YDQutC+0YLQuNGH0LXRgdC60LjQtSDQuCDQv9GB0LjRhdC+0YLRgNC+0L/QvdGL0LUg0LLQtdGJ0LXRgdGC0LLQsCDQuCDQvtCx0YDQsNC3INC20LjQt9C90LgsINGB0LLRj9C30LDQvdC90YvQuSDRgSDRg9C/0L7RgtGA0LXQsdC70LXQvdC40LXQvCDQtNCw0L3QvdGL0YUg0LLQtdGJ0LXRgdGC0LIsINCwINGC0LDQuiDQttC1INC/0YDQvtC/0LDQs9Cw0L3QtNC40YDQvtCy0LDRgtGMINGB0YPQuNGG0LjQtCwg0YDQsNGB0L7QstGD0Y4g0Lgg0YDQtdC70LjQs9C40L7Qt9C90YPRjiDQvdC10L3QsNCy0LjRgdGC0YwsINGE0LDRiNC40LfQvCDQuCDQvdCw0YbQuNC30LwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LfQsNCy0LXQtNC+0LzQviDQv9C+0YXQvtC20LjRhSDQvdC40LrQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCS0YvQv9GA0LDRiNC40LLQsNC90LjQtSDQv9GA0LjQsdCw0LLQu9C10L3QuNGPINGA0LXQv9GD0YLQsNGG0LjQuCwg0LAg0YLQsNC6INC20LUg0L/QvtC00L3QuNC80LDRgtGMINC40LvQuCDRgdC90LjQttCw0YLRjCDRgNC10L/Rg9GC0LDRhtC40Y4g0LHQtdC3INC/0YDQuNGH0LjQvdGLLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCe0LHRgdGD0LbQtNCw0YLRjCDQtNC10LnRgdGC0LLQuNGPINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INCyINGA0LDQt9C00LXQu9Cw0YUg0KTQvtGA0YPQvNCwLiDQldGB0LvQuCDQktGLINC90LXQtNC+0LLQvtC70YzQvdGLINC00LXQudGB0YLQstC40Y/QvNC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4LCDRgtC+INCy0YvRgdC60LDQt9GL0LLQsNC50YLQtSDRgdCy0L7QuCDQv9GA0LXRgtC10L3Qt9C40Lgg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC/LiA0LjEtNC4yINC90LDRgdGC0L7Rj9GJ0LjRhSDQn9GA0LDQstC40LsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCf0KEgKNCf0LXRgNGB0L7QvdCw0LvRjNC90YvQtSDQodC+0L7QsdGJ0LXQvdC40Y8pINC00LvRjyDQvNCw0YHRgdC+0LLQvtC5INGA0LDRgdGB0YvQu9C60Lgg0LjQvdGE0L7RgNC80LDRhtC40Lgg0LvRjtCx0L7Qs9C+INGA0L7QtNCwICjRgNC10LrQu9Cw0LzQsCwgXFxcItC/0LjRgdGM0LzQsCDRgdGH0LDRgdGC0YzRj1xcXCIg0Lgg0YIu0L8uKSA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCd0LDRgNGD0YjQsNGC0Ywg0LDQstGC0L7RgNGB0LrQuNC1INC/0YDQsNCy0LAgKNGD0LrQsNC30YvQstCw0LnRgtC1INGB0YHRi9C70LrQuCDQvdCwINCQ0JLQotCe0KDQkCAo0LjRgdGC0L7Rh9C90LjQuiksINC+0YLQutGD0LTQsCDQsdGL0LvQuCDQstC30Y/RgtGLINCy0YvQu9C+0LbQtdC90L3Ri9C1INGB0YLQsNGC0YzQuCkg0LjQu9C4INGF0L7RgtGPINCx0Ysg0L/QuNGI0LjRgtC1LCDRh9GC0L4g0LDQstGC0L7RgNGB0YLQstC+INC/0YDQuNC90LDQtNC70LXQttC40YIg0L3QtSDQktCw0LwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KPQutCw0LfQsNC90LjQtSDQsiDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0L/QvtC00L/QuNGB0LgsINC4INC00YDRg9Cz0LjRhSDQv9C+0LvRj9GFIFVSTCDQsNC00YDQtdGB0L7QsiDQutC+0LzQvNC10YDRh9C10YHQutC40YUg0LjQvdGC0LXRgNC90LXRgi3Qv9GA0L7QtdC60YLQvtCyLCDRgSDRhtC10LvRjNGOINGA0LXQutC70LDQvNGLINC4INC/0L7QstGL0YjQtdC90LjRjyDQuNC90LTQtdC60YHQsCDRhtC40YLQuNGA0L7QstCw0L3QuNGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7RgdC+0LHQvtC5INC00L7Qs9C+0LLQvtGA0LXQvdC90L7RgdGC0Lgg0YEg0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuSDQv9C+0YDRgtCw0LvQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QntGB0LrQvtGA0LHQu9C10L3QuNC1INC40LPRgNC+0LrQvtCyINC60LvRg9Cx0LAs0YLRgNC10L3QtdGA0YHQutC+0LPQviDRiNGC0LDQsdCwLNCwINGC0LDQutC20LUg0LTRgNGD0LPQuNGFINC60LvRg9Cx0L7QsiDQuCDQuNGFINC40LPRgNC+0LrQvtCyLtCS0YvRgNCw0LbQtdC90LjQtSDRgdCy0L7QtdC5INC90LXQv9GA0LjRj9C30L3QuCDQtNC+0L/Rg9GB0YLQuNC80L4s0L3QviDQsiDRgNCw0LzQutCw0YUg0LTQvtC/0YPRgdGC0LjQvNC+0LPQviA8L2xpPlxcclxcblxcclxcbiAgICAgICAgPGxpPtCf0YPQsdC70LjRh9C90L4g0L/RgNC10LTRitGP0LLQu9GP0YLRjCDQv9GA0LXRgtC10L3Qt9C40Lgg0Lgg0L7QsdGB0YPQttC00LDRgtGMINC00LXQudGB0YLQstC40Y8g0L/QtdGA0LXQstC+0LTRh9C40LrQvtCyINC4INGA0LXQtNCw0LrRgtC+0YDQvtCyINGB0LDQudGC0LAuINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDRgNC10YHRg9GA0YHQsCwg0L3QtdGB0L7Qs9C70LDRgdC90YvQtSDRgSDQv9GD0LHQu9C40LrQsNGG0LjRj9C80Lgg0L/QtdGA0LXQstC+0LTQvtCyINGB0YLQsNGC0LXQuSDQuCDQvNCw0YLQtdGA0LjQsNC70L7QsiDQvNC+0LPRg9GCINCy0YvRgdC60LDQt9Cw0YLRjCDRgdCy0L7RkSDQvdC10YHQvtCz0LvQsNGB0LjQtSDQsiDQu9C40YfQvdC+0Lwg0YHQvtC+0LHRidC10L3QuNC4INC40LvQuCDQsiDRgtC10LzQtSDQvdCwINGE0L7RgNGD0LzQtSDRgdCw0LnRgtCwIC0gPGI+0JbQsNC70L7QsdGLPC9iPi4gPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+PGI+SUlJLiDQntCx0YnQuNC1INGA0LXQutC+0LzQtdC90LTQsNGG0LjQuCDQviDRgdC+0LLQtdGC0YsuIDwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QndC1INC+0LHRgNCw0YnQsNC50YLQtSDQstC90LjQvNCw0L3QuNGPINC90LAg0YXRg9C70LjQs9Cw0L3QvtCyLiDQndC1INC+0YLQstC10YfQsNC50YLQtSDQuNC8LCDQtNCw0LbQtSDQtdGB0LvQuCDQktGLINGB0YfQuNGC0LDQtdGC0LUsINGH0YLQviDQktCw0YEg0L7RgdC60L7RgNCx0LjQu9C4LCDQvdC1INC/0L7QtNC00LDQstCw0LnRgtC10YHRjCDQvdCwINC/0YDQvtCy0L7QutCw0YbQuNC4LiDQlNC+0YHRgtCw0YLQvtGH0L3QviDRgdC+0L7QsdGJ0LjRgtGMINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INC+0LEg0L7RgdC60L7RgNCx0LvQtdC90LjQuCDQuCDQstC40L3QvtCy0L3Ri9C1INCx0YPQtNGD0YIg0L3QsNC60LDQt9Cw0L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QkiDRgtC+0Lwg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQktGLINGB0YfQuNGC0LDQtdGC0LUsINGH0YLQviDQvdCw0YDRg9GI0LXQvdGLINCf0YDQsNCy0LjQu9CwINCk0L7RgNGD0LzQsCwg0L/QvtGB0YLQsNGA0LDQudGC0LXRgdGMINGB0YDQsNC30YMg0LbQtSDRgdC+0L7QsdGJ0LjRgtGMINC+0LEg0Y3RgtC+0Lwg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lgg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0YLQsNGA0LDQudGC0LXRgdGMINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINGB0L7QvtCx0YnQtdC90LjRj9GFINC20LDRgNCz0L7QvSwg0YIu0LouINC90LXQutC+0YLQvtGA0YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0LzQvtCz0YPRgiDQvdC1INC/0YDQsNCy0LjQu9GM0L3QviDQtdCz0L4g0YDQsNGB0YLQvtC70LrQvtCy0LDRgtGMLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/QvtGB0YLQsNGA0LDQudGC0LXRgdGMINC90LUg0L/QuNGB0LDRgtGMINCx0LXQt9C+0YHQvdC+0LLQsNGC0LXQu9GM0L3Ri9C1INGD0YLQstC10YDQttC00LXQvdC40Y8sINCwINGC0LDQuiDQttC1INGB0L7QvtCx0YnQtdC90LjRjyDRgtC40L/QsCDCq9Cy0YvQutC40L3RjCDRjdGC0YMg0LHRj9C60YMsINC/0L7RgdGC0LDQstGMINGF0L7RgNC+0YjRg9GOINCy0LXRidGMwrsuINCV0YHQu9C4INGN0YLQviDQktCw0YjQtSDQu9C40YfQvdC+INC80L3QtdC90LjQtSwg0L3QtSDQt9Cw0LHRg9C00YzRgtC1INGB0L7QvtCx0YnQuNGC0Ywg0L7QsSDRjdGC0L7QvCDQt9Cw0YDQsNC90LXQtSDigJMg0L/RgNC+0YHRgtC+0LPQviDCq9CY0JzQpdCewrsgKNC+0YIg0LDQvdCz0LsuIOKAnGltaG/igJ0sINGH0YLQviDQsiDQv9C10YDQtdCy0L7QtNC1INC+0LfQvdCw0YfQsNC10YIgwqvQv9C+INC80L7QtdC80YMg0YHQutGA0L7QvNC90L7QvNGDINC80L3QtdC90LjRjsK7KSDQsdGD0LTQtdGCINC00L7RgdGC0LDRgtC+0YfQvdC+LiDQn9C+0LzQvdC40YLQtSwg0YfRgtC+INC/0L7RgdC70LUg0L3QtdGB0LrQvtC70YzQutC40YUg0L3QtdCw0YDQs9GD0LzQtdC90YLQuNGA0L7QstCw0L3QvdGL0YUg0YPRgtCy0LXRgNC20LTQtdC90LjQuSwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC/0YDQvtGB0YLQviDQv9C10YDQtdGB0YLQsNC90YPRgiDQktCw0Lwg0LTQvtCy0LXRgNGP0YLRjC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0LXQttC00LUg0YfQtdC8INGB0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRgywg0YPQsdC10LTQuNGC0LXRgdGMLCDRh9GC0L4g0JLRiyDRgdC+0LfQtNCw0LXRgtC1INC10ZEg0LIg0L3Rg9C20L3QvtC8INCg0LDQt9C00LXQu9C1INCk0L7RgNGD0LzQsC4g0J/QvtC80L3QuNGC0LUsINGH0YLQviDRgtC10LzRiywg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0YLQtdC80LDRgtC40LrQtSDQoNCw0LfQtNC10LvQsCwg0LHRg9C00YPRgiDQu9C40LHQviDRg9C00LDQu9C10L3Riywg0LvQuNCx0L4g0L/QtdGA0LXQvdC10YHQtdC90Ysg0LIg0LTRgNGD0LPQvtC5INCg0LDQt9C00LXQuyDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0YfRgtC40YLQtSDRgtC10LzRgyDRhtC10LvQuNC60L7QvCEg0J/QvtGB0YLRiyDQsiDRgdC10YDQtdC00LjQvdC1INGC0LXQvNGLIC0gXFxcItCQINC+INGH0LXQvCDRjdGC0L4g0LLRiywg0LA/IFxcXCIg0LjQu9C4IFxcXCLQotCw0Log0Y8g0L3QtSDQv9C+0L3Rj9C7IC0g0L7RgtC60YPQtNCwINC60LDRh9Cw0YLRjD9cXFwiINC30LDQv9GA0LXRidC10L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC00LXQu9Cw0YLRjCDQs9GA0LDQvNC80LDRgtC40YfQtdGB0LrQuNGFINC+0YjQuNCx0L7QuiDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDigJMg0Y3RgtC+INGB0L7Qt9C00LDRgdGCINC90LXQs9Cw0YLQuNCy0L3QvtC1INCy0L/QtdGH0LDRgtC70LXQvdC40LUg0L4g0LLQsNGBLjwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPjxiPklWLiDQntGC0L3QvtGI0LXQvdC40Y8g0LzQtdC20LTRgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10LkuPC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCSINGB0LLQvtC40YUg0LTQtdC50YHRgtCy0LjRj9GFINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINGE0L7RgNGD0LzQsCDRgNGD0LrQvtCy0L7QtNGB0YLQstGD0LXRgtGB0Y8g0LfQtNGA0LDQstGL0Lwg0YHQvNGL0YHQu9C+0Lwg0Lgg0LLQvdGD0YLRgNC10L3QvdC40LzQuCDQv9GA0LDQstC40LvQsNC80Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0YTQvtGA0YPQvNC+0LwuPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICDQntCx0YHRg9C20LTQtdC90LjQtSDQtNC10LnRgdGC0LLQuNC5INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4ICjQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0LIg0Lgg0LzQvtC00LXRgNCw0YLQvtGA0L7QsiDRhNC+0YDRg9C80LApINC60LDRgtC10LPQvtGA0LjRh9C10YHQutC4INC30LDQv9GA0LXRidCw0LXRgtGB0Y8g0LIg0LvRjtCx0YvRhSDRhNC+0YDRg9C80LDRhSDQuCDRgtC10LzQsNGFLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0YHQv9C10YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0YTQvtGA0YPQvNCwIC0gPGI+0JbQsNC70L7QsdGLPC9iPi48YnI+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD7QkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQvtGB0YLQsNCy0LvRj9C10YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0LjQt9C80LXQvdGP0YLRjCDQv9GA0LDQstC40LvQsCDQsdC10Lcg0YPQstC10LTQvtC80LvQtdC90LjQtdC8INC+0LEg0Y3RgtC+0Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0YTQvtGA0YPQvNCwLiDQktGB0LUg0LjQt9C80LXQvdC10L3QuNGPINC4INC90L7QstCw0YbQuNC4INC90LAg0YTQvtGA0YPQvNC1INC/0YDQvtC40LfQstC+0LTRj9GC0YHRjyDRgSDRg9GH0LXRgtC+0Lwg0LzQvdC10L3QuNC5INC4INC40L3RgtC10YDQtdGB0L7QsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS48L3A+XFxyXFxuICAgIDxwIGFsaWduPVxcXCJyaWdodFxcXCI+PGI+0KEg0YPQstCw0LbQtdC90LjQtdC8LCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDRgdCw0LnRgtCwLjwvYj48L3A+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ydWxlcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj5D0L7Qv9C10YDQvdC40Lo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08YXV0b2NvbXBsZXRlIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLmNsdWJOYW1lXFxcIiBuYW1lPVxcXCJjbHViTmFtZVxcXCIgYXR0ci1wbGFjZWhvbGRlcj1cXFwi0JLQstC10LTQuNGC0LUg0LrQu9GD0LEuLi5cXFwiIGNsaWNrLWFjdGl2YXRpb249XFxcInRydWVcXFwiIGRhdGE9XFxcInZtLmNsdWJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbi10eXBlPVxcXCJ2bS51cGRhdGVDbHVic1xcXCIgdmFsaWRhdGlvbj1cXFwibWF4X2xlbjozMHxyZXF1aXJlZFxcXCI+PC9hdXRvY29tcGxldGU+LS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNhdGVnb3J5SWRcXFwiIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLnR5cGVJZFxcXCIgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJvblRvcFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpc0hvbWVcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiDQlNC+0LzQsCA8IS0tdG9kbyBhZGQgc3dpdGNoZXItLT4gXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QlNCw0YLQsDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBuYW1lPVxcXCJkYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBzaG93LWJ1dHRvbi1iYXI9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYi1kYXRlcGlja2VyLXBvcHVwPVxcXCJkZC9NTU1NL3l5eXlcXFwiIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLmRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3Blbj1cXFwidm0uc3RhdHVzLm9wZW5lZFxcXCIgZGF0ZXBpY2tlci1vcHRpb25zPVxcXCJ2bS5kYXRlT3B0aW9uc1xcXCIgY2xvc2UtdGV4dD1cXFwi0JfQsNC60YDRi9GC0YxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0LWlucHV0LWZvcm1hdHM9XFxcImFsdElucHV0Rm9ybWF0c1xcXCIgbmctY2xpY2s9XFxcInZtLm9wZW4oKVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuIHZhLXRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgdWliLXRpbWVwaWNrZXIgbmctbW9kZWw9XFxcInZtLml0ZW0udGltZVxcXCIgbmctY2hhbmdlPVxcXCJ2bS50aW1lQ2hhbmdlZCgpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICBob3VyLXN0ZXA9XFxcIjFcXFwiIG1pbnV0ZS1zdGVwPVxcXCIxXFxcIiBzaG93LW1lcmlkaWFuPVxcXCJmYWxzZVxcXCIgc2hvdy1zcGlubmVycz1cXFwiZmFsc2VcXFwiIG5nLWRpc2FibGVkPVxcXCIhdm0uaXRlbS5kYXRlXFxcIj48L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4gPCEtdG9kbyBtYWdpYyBudW1iZXItPlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnL21hdGNoJywgMCwgJ2VkaXQnIF1cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcImNsdWJFZGl0KHtpZDogaXRlbS5pZH0pXFxcIj48c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XFxcInZtLmRlbGV0ZSgkaW5kZXgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVuZ2xpc2hOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tpdGVtLmxvZ299fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLTx1aWItcGFnaW5hdGlvbiBuZy1zaG93PVxcXCJ2bS50b3RhbEl0ZW1zID4gdm0uaXRlbVBlclBhZ2VcXFwiIHRvdGFsLWl0ZW1zPVxcXCJ2bS50b3RhbEl0ZW1zXFxcIiBuZy1tb2RlbD1cXFwidm0ucGFnZVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5nb1RvUGFnZSgpXFxcIj48L3VpYi1wYWdpbmF0aW9uPi0tPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC17e2RlZXB9fSBjb2wtc20tb2Zmc2V0LXt7ZGVlcH19IGNvbW1lbnQgY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBpdGVtLmF1dGhvcklkXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hdXRob3JVc2VyTmFtZVxcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzbWFsbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hZGRpdGlvblRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uYXV0aG9ySWQpXFxcIiAoY2xpY2spPVxcXCJzaG93RWRpdE1vZGFsKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+IDwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3JcXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+IDwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXItbWVkaXVtXFxcIiBzcmM9XFxcInt7aXRlbS5waG90b319XFxcIiBhbHQ9XFxcInt7aXRlbS5hdXRob3JVc2VyTmFtZX19XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxwIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJpdGVtLmFuc3dlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tM1xcXCI+0J7RgtCy0LXRgjo8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFuc3dlclxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyXFxcIiAqbmdJZj1cXFwiIXJvbGVzLmlzU2VsZihpdGVtLmF1dGhvcklkKSAmJiBjYW5Db21tZW50YXJ5XFxcIj5cXHJcXG4gICAgICAgIDxhIChjbGljayk9XFxcInNob3dBZGRDb21tZW50TW9kYWwoKVxcXCI+0J7RgtCy0LXRgtC40YLRjDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuXFxcIj5cXHJcXG4gICAgPG1hdGVyaWFsQ29tbWVudC1kZXRhaWwgW2l0ZW1dPVxcXCJjaGlsZFxcXCIgW2RlZXBdPVxcXCJkZWVwID4gNiA/IDcgOiBkZWVwKzFcXFwiIFttYXRlcmlhbElkXT1cXFwibWF0ZXJpYWxJZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJjYW5Db21tZW50YXJ5XFxcIiBbcGFyZW50XT1cXFwiaXRlbVxcXCI+PC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2FkZENvbW1lbnRNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40Lk8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4gICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFkZENvbW1lbnQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2VkaXRDb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInJvbGVzLmlzRWRpdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snYW5zd2VyJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PiAgICBcXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZWRpdCgpXFxcIj7QntCx0L3QvtCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDwhLS1kaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiB1aS1zcmVmPVxcXCJ3aXNoRWRpdCgpXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2LS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBjb21tZW50IG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgbmctY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBjb21tZW50LmF1dGhvcklkXVxcXCI+PHNwYW4gW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5hdXRob3JVc2VyTmFtZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIiAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtoaWRkZW5dPVxcXCJjb21tZW50LmlzVmVyaWZpZWRcXFwiIChjbGljayk9XFxcInZlcmlmeShpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2tcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJjb21tZW50Lm1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5hZGRpdGlvblRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+0JrQvtC80LzQtdC90YLQsNGA0LjQuDogPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbXMubGVuZ3RoXFxcIj48L3NwYW4+PC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiXFxcIiAqbmdGb3I9XFxcImxldCBjb21tZW50IG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgPG1hdGVyaWFsQ29tbWVudC1kZXRhaWwgW2l0ZW1dPVxcXCJjb21tZW50XFxcIiBbZGVlcF09XFxcIjBcXFwiIFttYXRlcmlhbElkXT1cXFwibWF0ZXJpYWxJZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJjYW5Db21tZW50YXJ5XFxcIj48L21hdGVyaWFsQ29tbWVudC1kZXRhaWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImNvbW1lbnRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChjb21tZW50Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiICpuZ0lmPVxcXCJjYW5Db21tZW50YXJ5ICYmIHJvbGVzLmlzTG9naW5lZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLThcXFwiIHJvd3M9XFxcIjZcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGNlbnRlci1ibG9ja1xcXCIgW2Rpc2FibGVkXT1cXFwiIWNvbW1lbnRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtcyAmJiB0b3RhbEl0ZW1zID4gaXRlbXNQZXJQYWdlXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0J3QsNC30LLQsNC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ25hbWUnXVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj7QntC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYnJpZWZcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB2YWx1ZT1cXFwi0J7RgtC/0YDQsNCy0LjRgtGMXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGEgc2VjdXJlZD1cXFwibmV3c0Z1bGxcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3c0NhdGVnb3J5JywgMCwgJ2VkaXQnXVxcXCI+0KHQvtC30LTQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOPC9hPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgY2F0ZWdvcnkgb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDEsIGNhdGVnb3J5LmlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5uYW1lXFxcIj48L3NwYW4+IFs8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5pdGVtc0NvdW50XFxcIj48L3NwYW4+XVxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8IS0tLT5hIHNlY3VyZWQ9XFxcIm5ld3NTdGFydFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCBwYWdlLCBpdGVtLmNhdGVnb3J5SWQgXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lm5hbWVcXFwiPjwvc3Bhbj4gWzxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lml0ZW1zQ291bnRcXFwiPjwvc3Bhbj5dXFxyXFxuICAgICAgICAgICAgPC8hLS1hLS0+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIlxcXCIgc2VjdXJlZD1cXFwibmV3c1N0YXJ0XFxcIiBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeScsIGNhdGVnb3J5LmlkLCAnZWRpdCddXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJcXFwiIHNlY3VyZWQ9XFxcIm5ld3NGdWxsXFxcIiAqbmdJZj1cXFwiY2F0ZWdvcnkuaXRlbXNDb3VudCA9PSAwXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoaSlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIlxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1kYW5nZXIgZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTMgcHVsbC1yaWdodFxcXCIgKm5nSWY9XFxcInJvbGVzLmlzRWRpdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLnVzZXJJZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiIWl0ZW0ucGVuZGluZyB8fCAhcm9sZXMuaXNFZGl0b3JcXFwiIChjbGljayk9XFxcInNob3dBY3RpdmF0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgaXRlbS5pZCwgJ2VkaXQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgPGFydGljbGUgW2lubmVySFRNTF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtd2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0J/RgNC+0YHQvNC+0YLRgNGLOjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVhZHNcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCY0YHRgtC+0YfQvdC40Lo6PC9sYWJlbD4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5zb3VyY2VcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCU0LDRgtCwINC00L7QsdCw0LLQu9C10L3QuNGPOjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGFiZWw+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgMSwgaXRlbS5jYXRlZ29yeUlkIF1cXFwiPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNhdGVnb3J5TmFtZVxcXCI+PC9zcGFuPiA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8Y29tbWVudHMgW21hdGVyaWFsSWRdPVxcXCJpdGVtLmlkXFxcIiBbY2FuQ29tbWVudGFyeV09XFxcIml0ZW0uY2FuQ29tbWVudGFyeVxcXCI+PC9jb21tZW50cz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNhY3RpdmF0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZhdGUoKVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY2F0ZWdvcnlJZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2NhdGVnb3J5SWQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXNcXFwiIHZhbHVlPVxcXCJ7e2NhdGVnb3J5LmlkfX1cXFwiPnt7Y2F0ZWdvcnkubmFtZX19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQndCw0LfQstCw0L3QuNC1OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3RpdGxlJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYnJpZWZcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydicmllZiddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0KLQtdC60YHRgiDQvdC+0LLQvtGB0YLQuDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiByb3dzPVxcXCI2XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JjRgdGC0L7Rh9C90LjQujo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic291cmNlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snc291cmNlJ11cXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JPQu9Cw0LLQvdC+0LUg0YTQvtGC0L46PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBob3RvUGF0aFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3Bob3RvJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgdWktdmlldz1cXFwiZmlsZXNcXFwiIGF1dG9zY3JvbGw9XFxcImZhbHNlXFxcIj48L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwiY2FuQ29tbWVudGFyeVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2NhbkNvbW1lbnRhcnknXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQgLz4g0KDQsNC30YDQtdGI0LjRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LhcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcIm9uVG9wXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snb25Ub3AnXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+INCd0LDQstC10YDRhdGDXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJwZW5kaW5nXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sncGVuZGluZyddXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4g0J7RgtC70L7QttC10L3QsFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPCEtLW5nLWlmPVxcXCJ2bS5wYWdlID4gMFxcXCI+LS0+XFxyXFxuICAgICAgICA8IS0tZm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNhdGVnb3J5SWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJjYXRlZ29yeS5pZCBhcyBjYXRlZ29yeS5uYW1lIGZvciBjYXRlZ29yeSBpbiB2bS5jYXRlZ29yaWVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZUNhdGVnb3J5SWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS51c2VyTmFtZVxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVVzZXJOYW1lKClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQm9C+0LPQuNC9XFxcIi8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0tXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybS0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiICpuZ0lmPVxcXCIhaXRlbS5wZW5kaW5nIHx8IHJvbGVzLmlzRWRpdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LXZlcnRpY2FsLWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWRdXFxcIiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiPjxoNCBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L2g0PjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zIHB1bGwtcmlnaHRcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS51c2VySWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtoaWRkZW5dPVxcXCIhaXRlbS5wZW5kaW5nIHx8ICFyb2xlcy5pc0VkaXRvclxcXCIgKGNsaWNrKT1cXFwic2hvd0FjdGl2YXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgaXRlbS5pZCwgJ2VkaXQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy10aHVtYm5haWwgbmV3cy1taW5pIGNlbnRlci1ibG9ja1xcXCIgYWx0PVxcXCJcXFwiIFtzcmNdPVxcXCJpdGVtLnBob3RvUGF0aFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aT4gPHNwYW4gW2lubmVySFRNTF09XFxcIml0ZW0uYnJpZWZcXFwiPjwvc3Bhbj48L2k+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXN4LTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1pbmxpbmUgc21hbGwgc21hbGwtb2Zmc2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QmtCw0YLQtdCz0L7RgNC40Y86PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj48YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIHBhZ2UsIGl0ZW0uY2F0ZWdvcnlJZCBdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNhdGVnb3J5TmFtZVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JLRgNC10LzRjyDQtNC+0LHQsNCy0LvQtdC90LjRjzo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lXFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCf0YDQvtGB0LzQvtGC0YDRizwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5yZWFkc1xcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QkNCy0YLQvtGAOjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgaXRlbS51c2VySWQgXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuDo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uY29tbWVudHNDb3VudFxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgICAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXNcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjYWN0aXZhdGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2YXRlKClcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgZm9ybS1ob3Jpem9udGFsIG1hcmdpbi10b3AtbWlkZGxlXFxcIiAqbmdJZj1cXFwiaXRlbVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkaXNhYmxlZCB2YWx1ZT1cXFwie3tpdGVtLnJlY2VpdmVyfX1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGlzYWJsZWQgdmFsdWU9XFxcInt7aXRlbS50aXRsZX19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRpc2FibGVkIHJvd3M9XFxcIjRcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tYSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgMCwgJ2VkaXQnLCB7dXNlcm5hbWU6IGl0ZW0ucmVjZWl2ZXIsIHVzZXJJZDogaXRlbS5pZH1dXFxcIiA+0J7RgtCy0LXRgtC40YLRjDwvIWEtLT5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgMCwgJ2VkaXQnXVxcXCIgPtCe0YLQstC10YLQuNGC0Yw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY29sLW1kLTEyXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuYW1lPVxcXCJ3cml0ZVBtXFxcIiAgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgPGgyPtCd0LDQv9C40YHQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1PC9oMj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCf0L7Qu9GD0YfQsNGC0LXQu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLXAgY2xhc3M9XFxcInRleHQtZGFuZ2VyIGNvbC1tZC1vZmZzZXQtMlxcXCIgbmctaWY9XFxcInZtLmVycm9yTWVzc2FnZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgbmctYmluZD1cXFwidm0uZXJyb3JNZXNzYWdlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC8hcC0tPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XFxcInVwZGF0ZVVzZXJuYW1lKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGF1dG8tY29tcGxldGUgbmFtZT1cXFwicmVjZWl2ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sncmVjZWl2ZXInXVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVxcXCJ1c2Vyc1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIG1pbi1jaGFycz1cXFwiMlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIGF0dHItcGxhY2Vob2xkZXI9XFxcItCS0LLQtdC00LjRgtC1INC70L7Qs9C40L0uLi5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXktcHJvcGVydHktbmFtZT1cXFwidXNlcm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPiA8L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgIDxtZC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVxcXCIwXFxcIj5cXHJcXG4gICAgICAgIDxtZC10YWI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAg0J/QvtC70YPRh9C10L3QvdGL0LVcXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItY29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Ql9Cw0LPQvtC70L7QstC+0Lo8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QntGC0L/RgNCw0LLQuNGC0LXQu9GMPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JTQsNGC0LAg0L/QvtC70YPRh9C10L3QuNGPPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgcmVjZWl2ZWQ7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJpICsgMVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCBtZXNzYWdlLmlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cXFwiIW1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L2I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIG1lc3NhZ2Uuc2VuZGVySWRdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnNlbmRlclVzZXJOYW1lXFxcIj48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5zZW50VGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC9tZC10YWI+XFxyXFxuICAgICAgICA8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC70LXQvdC90YvQtVxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1jb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCX0LDQs9C+0LvQvtCy0L7QujwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCf0L7Qu9GD0YfQsNGC0LXQu9GMPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JTQsNGC0LAg0L7RgtC/0YDQsNCy0LrQuDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIHNlbnQ7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJpICsgMVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCBtZXNzYWdlLmlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cXFwiIW1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L2I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIG1lc3NhZ2UucmVjZWl2ZXJJZF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UucmVjZWl2ZXJVc2VyTmFtZVxcXCI+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2Uuc2VudFRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICAgICAgPDxtZC10YWI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjCDRgdC+0L7QsdGJ0LXQvdGM0LrRg1xcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICA8L21kLXRhYi1ncm91cD5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnVzZXJOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBbaGlkZGVuXT1cXFwiIXJvbGVzLmlzTG9naW5lZCB8fCByb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcIndwbSh7IHVzZXJOYW1lOiBpdGVtLnVzZXJOYW1lIH0pXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9oMj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tpdGVtLnBob3RvfX1cXFwiIGFsdD1cXFwie3tpdGVtLnVzZXJOYW1lfX1cXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwicm9sZXMuaXNTZWxmKGl0ZW0uaWQpIHx8IHJvbGVzLmlzTW9kZXJhdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiBuZ2Ytc2VsZWN0PVxcXCJ2bS51cGxvYWRGaWxlcygkZmlsZSwgJGludmFsaWRGaWxlcylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIiBuZ2YtbWF4LWhlaWdodD1cXFwiMTAwMFxcXCIgbmdmLW1heC1zaXplPVxcXCIxTUJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J7QsdC90L7QstC40YLRjCDQsNCy0LDRgtCw0YBcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcInJvbGVzLmlzU2VsZihpdGVtLmlkKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NoYW5nZVBhc3N3b3JkJ11cXFwiPtCY0LfQvNC10L3QuNGC0Ywg0L/QsNGA0L7Qu9GMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxicj48YnI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS1kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJ2bS5lcnJGaWxlLiRlcnJvclxcXCIgbmctYmluZD1cXFwidm0uZXJyRmlsZS4kZXJyb3JcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcInZtLmVyckZpbGUuJGVycm9yUGFyYW1cXFwiIG5nLWJpbmQ9XFxcInZtLmVyckZpbGUuJGVycm9yUGFyYW1cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9ncmVzc1xcXCIgbmctc2hvdz1cXFwiZi5wcm9ncmVzcyA+PSAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwid2lkdGg6e3tmLnByb2dyZXNzfX0lXFxcIiBuZy1iaW5kPVxcXCJmLnByb2dyZXNzICsgJyUnXFxcIj48LyEtLXNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JvQvtCz0LjQvTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJyb2xlcy5pc01vZGVyYXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgbmctc2hvdz1cXFwiIWl0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWluPVxcXCIwXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCLQmtC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIml0ZW0uYmFuRGF5c0NvdW50XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTggY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5iYW4oKVxcXCIgbmdEaXNhYmxlZD1cXFwiaXRlbS5iYW5EYXlzQ291bnQgPD0gMFxcXCI+0JfQsNCx0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIiBbaGlkZGVuXT1cXFwiaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0Y1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtOCBjb2wtc20tOCBmbGV4LXZlcnRpY2FsLWNlbnRlclxcXCIgKm5nSWY9XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPtCQ0LrRgtC40LLQvdC+0YHRgtGMINC30LDQsdC70L7QutC40YDQvtCy0LDQvdCwINC00L4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0YyB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgc2VjdXJlZD1cXFwiJ1VzZXJzRnVsbCdcXFwiIG5nLWNsaWNrPVxcXCJ2bS51bmJhbigpXFxcIj7QodC90Y/RgtGMINCx0LDQvTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCT0YDRg9C/0L/QsDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5yb2xlR3JvdXBOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHNlY3VyZWQ9XFxcIidBZG1pblN0YXJ0J1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibmV3c0NhdGVnb3J5SWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJpdGVtLnJvbGVHcm91cElkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJyb2xlR3JvdXAuaWQgYXMgcm9sZUdyb3VwLm5hbWUgZm9yIHJvbGVHcm91cCBpbiB2bS5yb2xlR3JvdXBzXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmctY2hhbmdlPVxcXCJ2bS5lZGl0Um9sZSgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtoaWRkZW5dPVxcXCIhcm9sZXMuaXNTZWxmIHx8ICFyb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIFtoaWRkZW5dPVxcXCIhaXRlbS5lbWFpbENvbmZpcm1lZFxcXCI+0J/QvtGH0YLQsDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsIHRleHQtZGFuZ2VyXFxcIiB1aWItdG9vbHRpcD1cXFwi0J/QvtGH0YLQsCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsFxcXCIgW2hpZGRlbl09XFxcIml0ZW0uZW1haWxDb25maXJtZWRcXFwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVtYWlsXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtGB0LvQtdC00L3QuNC5INCy0YXQvtC0IDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubGFzdE1vZGlmaWVkT24gfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVnaXN0cmF0aW9uRGF0ZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uZnVsbE5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC70L3QvtC1INC40LzRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZnVsbE5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uYmlydGhkYXlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYmlydGhkYXkgfCBkYXRlOidsb25nRGF0ZSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uZ2VuZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7QuzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICpuZ0lmPVxcXCJpdGVtLmdlbmRlclxcXCI+0JTQtdCy0YPRiNC60LA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICpuZ0lmPVxcXCIhaXRlbS5nZW5kZXJcXFwiPtCf0LDRgNC10L3RjDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJpdGVtLm5ld3NDb3VudCA+IDBcXFwiPjxhIHVpLXNyZWY9XFxcIm5ld3MoeyBwYWdlOiAxLCB1c2VyTmFtZTogaXRlbS51c2VyTmFtZX0pXFxcIj7QndC+0LLQvtGB0YLQuCg8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5ld3NDb3VudFxcXCI+PC9zcGFuPik8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIml0ZW0uYmxvZ3NDb3VudCA+IDBcXFwiPjxhIHVpLXNyZWY9XFxcImJsb2coe3BhZ2U6IDEsIHVzZXJOYW1lOiBpdGVtLnVzZXJOYW1lfSlcXFwiPtCR0LvQvtCz0LgoPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5ibG9nc0NvdW50XFxcIj48L3NwYW4+KTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjwhLS1zY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcImNoYW5nZVJvbGVDb25maXJtYXRpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGA0L7Qu9C4PC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAg0JjQt9C80LXQvdC40YLRjD9cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPtCY0LfQvNC10L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48LyEtLXNjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJiYW5Db25maXJtYXRpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICDQl9Cw0LHQsNC90LjRgtGMP1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+0JfQsNCx0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0Pi0tPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1jb25kZW5zZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCf0L7RgdC70LXQtNC90LjQuSDQstGF0L7QtDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7Qm9C+0LPQuNC9PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCU0LDRgtCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lg8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0JPRgNGD0L/Qv9CwPC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCB1c2VyIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLmxhc3RNb2RpZmllZCB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIHVzZXIuaWQgXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJtaW5pLWF2YXRhclxcXCIgc3JjPVxcXCJ7e3VzZXIucGhvdG99fVxcXCIgYWx0PVxcXCJ7e3VzZXIudXNlck5hbWV9fVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcInVzZXIudXNlck5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgdWliLXRvb2x0aXA9XFxcItCf0L7Rh9GC0LAg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LBcXFwiIFtoaWRkZW5dPVxcXCJ1c2VyLmVtYWlsQ29uZmlybWVkXFxcIj4gKjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLXNob3c9XFxcImxvZ2dlZEluKCkgJiYgdm0uaXNOb3RTZWxmKHVzZXIuaWQsIHVzZXJJZCgpKVxcXCIgdWktc3JlZj1cXFwid3BtKHsgdXNlck5hbWU6IHVzZXIudXNlck5hbWUgfSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwidXNlci5yZWdpc3RyYXRpb25EYXRlIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcInVzZXIucm9sZUdyb3VwTmFtZVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0uY2hvc2VuUm9sZUdyb3VwSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwicm9sZUdyb3VwLmlkIGFzIHJvbGVHcm91cC5uYW1lIGZvciByb2xlR3JvdXAgaW4gdm0ucm9sZUdyb3Vwc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VSb2xlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVXNlck5hbWVcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlVc2VyTmFtZSgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIgLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8IS0tPnVpYi1wYWdpbmF0aW9uIG5nLXNob3c9XFxcInZtLnRvdGFsSXRlbXMgPiB2bS5pdGVtUGVyUGFnZVxcXCIgdG90YWwtaXRlbXM9XFxcInZtLnRvdGFsSXRlbXNcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wYWdlTm9cXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC8hLS11aWItcGFnaW5hdGlvbi0tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGNvbC1tZC0xMlxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwiZWRpdFdpc2hcXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj7QotC40L86PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5ld3NDYXRlZ29yeUlkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndHlwZSddXFxcIj48L3NlbGVjdD4tLT5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0eXBlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XFxcInR5cGUuaWRcXFwiICpuZ0Zvcj1cXFwibGV0IHR5cGUgb2YgdHlwZXNcXFwiIFt0ZXh0Q29udGVudF09XFxcInR5cGUubmFtZVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtC30LTQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPi0tPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCcsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCB3aXNoIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgW25nQ2xhc3NdPVxcXCJnZXRUeXBlQ2xhc3Mod2lzaC50eXBlKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93aXNoJywgd2lzaC5pZCwgJ2VkaXQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwid2lzaC50aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiIHNlY3VyZWQ9XFxcIkFkbWluRnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XFxcInZtLmRlbGV0ZShpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwid2lzaC5tZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIndpc2gudHlwZU5hbWVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8IS0tdWliLXBhZ2luYXRpb24gbmctc2hvdz1cXFwidm0udG90YWxJdGVtcyA+IHZtLml0ZW1QZXJQYWdlXFxcIiB0b3RhbC1pdGVtcz1cXFwidm0udG90YWxJdGVtc1xcXCIgbmctbW9kZWw9XFxcInZtLnBhZ2VcXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC8hLS11aWItcGFnaW5hdGlvbi0tPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9tYXRlcmlhbFwiXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItYXV0by1jb21wbGV0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1hdXRvLWNvbXBsZXRlXCJcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL19fMi4xLjEud29ya2Fyb3VuZC50c1wiO1xyXG5pbXBvcnQgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGVcIjtcclxuaW1wb3J0IFwiem9uZS5qc1wiO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7IFxyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGBcclxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cXG5cclxuICAgICAgICA8aHRtbD5cclxuICAgICAgICAgICAgPGhlYWQ+PC9oZWFkPlxyXG4gICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgIDxteS1hcHA+PC9teS1hcHA+XHJcbiAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICA8L2h0bWw+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IFwiPG15LWFwcD48L215LWFwcD5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIExvY2FsU3RvcmFnZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTG9jYWxTdG9yYWdlU2VydmljZSgpIHtcclxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBMb2NhbCBTdG9yYWdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmhhc0FjY2Vzc1Rva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChcImFjY2Vzc190b2tlblwiKSAhPT0gbnVsbDtcclxuICAgIH07XHJcbiAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRBY2Nlc3NUb2tlbldpdGhUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChcInRva2VuX3R5cGVcIikgKyBcIiBcIiArIHRoaXMuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdChcInJvbGVzXCIpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmdldFVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gK3RoaXMuZ2V0KFwidXNlcklkXCIpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZVJvbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwicm9sZXNcIik7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQXV0aFRva2VucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInRva2VuX3R5cGVcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJleHBpcmVzX2luXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwicmVmcmVzaF90b2tlblwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInJvbGVzXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwidXNlcklkXCIpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnNldEF1dGhUb2tlbnMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UoaXRlbS5fYm9keSk7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJ0b2tlbl90eXBlXCIsIHJlc3BvbnNlLnRva2VuX3R5cGUpO1xyXG4gICAgICAgIHRoaXMuc2V0KFwiYWNjZXNzX3Rva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJleHBpcmVzX2luXCIsIHJlc3BvbnNlLmV4cGlyZXNfaW4pO1xyXG4gICAgICAgIHRoaXMuc2V0KFwicmVmcmVzaF90b2tlblwiLCByZXNwb25zZS5yZWZyZXNoX3Rva2VuKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5zZXRSb2xlcyA9IGZ1bmN0aW9uIChyb2xlcykge1xyXG4gICAgICAgIHRoaXMuc2V0T2JqZWN0KFwicm9sZXNcIiwgcm9sZXMpO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnNldFVzZXJJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuc2V0T2JqZWN0KFwidXNlcklkXCIsIGlkKTtcclxuICAgIH07XHJcbiAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS50cnlBZGRWaWV3Rm9yTmV3cyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXQoXCJtYXRlcmlhbFwiICsgaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KFwibWF0ZXJpYWxcIiArIGlkLCBcIjFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRPYmplY3QgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9O1xyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIHJldHVybiBMb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkxvY2FsU3RvcmFnZVNlcnZpY2UgPSBMb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbFN0b3JhZ2Uuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvbG9jYWxTdG9yYWdlLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9