(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: "angular-universal request",
	            properties: {
	                baseUrl: "/",
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                document: "<app></app>"
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
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var platform_browser_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var local_storage_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(9);
	var app_routes_1 = __webpack_require__(22);
	var app_constants_1 = __webpack_require__(20);
	var index_1 = __webpack_require__(23);
	var newsCategory = __webpack_require__(35);
	var index_2 = __webpack_require__(44);
	var index_3 = __webpack_require__(103);
	var account = __webpack_require__(47);
	var club = __webpack_require__(66);
	var match = __webpack_require__(128);
	var shared = __webpack_require__(13);
	var user_detail_component_1 = __webpack_require__(77);
	var user_service_1 = __webpack_require__(78);
	var user_list_component_1 = __webpack_require__(80);
	var index_4 = __webpack_require__(84);
	var index_5 = __webpack_require__(94);
	var index_6 = __webpack_require__(109);
	var index_7 = __webpack_require__(118);
	var ng2_auto_complete_1 = __webpack_require__(135);
	var index_8 = __webpack_require__(136);
	var ng2_bootstrap_1 = __webpack_require__(27);
	var ng2_file_upload_1 = __webpack_require__(72);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                angular2_universal_1.UniversalModule,
	                ng2_bootstrap_1.DatepickerModule,
	                ng2_file_upload_1.FileUploadModule,
	                forms_1.FormsModule,
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


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/platform-browser");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	exports.LocalStorage = new core_1.OpaqueToken("localStorage");


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var platform_browser_1 = __webpack_require__(7);
	var auth_service_1 = __webpack_require__(11);
	var roles_checked_service_1 = __webpack_require__(18);
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
	            selector: "app",
	            template: __webpack_require__(21)
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, roles_checked_service_1.RolesCheckedService, core_1.ViewContainerRef, platform_browser_1.Title])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(12);
	var router_1 = __webpack_require__(10);
	var index_1 = __webpack_require__(13);
	var app_constants_1 = __webpack_require__(20);
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


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var Pageable = (function () {
	    function Pageable() {
	    }
	    return Pageable;
	}());
	exports.Pageable = Pageable;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(12);
	var localStorage_service_1 = __webpack_require__(16);
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


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var LocalStorageService = (function () {
	    function LocalStorageService() {
	        if (angular2_universal_1.isBrowser && !localStorage) {
	            throw new Error("Current browser does not support Local Storage");
	        }
	        else if (angular2_universal_1.isNode) {
	            this.localStorage = null;
	        }
	        else {
	            this.localStorage = localStorage;
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
	        if (!this.localStorage)
	            return;
	        this.setObject("roles", roles);
	    };
	    LocalStorageService.prototype.setUserId = function (id) {
	        if (!this.localStorage)
	            return;
	        this.setObject("userId", id);
	    };
	    LocalStorageService.prototype.tryAddViewForNews = function (id) {
	        if (!this.localStorage)
	            return false;
	        if (!this.get("material" + id)) {
	            this.set("material" + id, "1");
	            return true;
	        }
	        return false;
	    };
	    LocalStorageService.prototype.set = function (key, value) {
	        if (!this.localStorage)
	            return;
	        localStorage[key] = value;
	    };
	    LocalStorageService.prototype.get = function (key) {
	        if (!this.localStorage)
	            return "";
	        return localStorage[key] || false;
	    };
	    LocalStorageService.prototype.setObject = function (key, value) {
	        if (!this.localStorage)
	            return;
	        localStorage[key] = JSON.stringify(value);
	    };
	    LocalStorageService.prototype.getObject = function (key) {
	        if (!this.localStorage)
	            return null;
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


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
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


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var localStorage_service_1 = __webpack_require__(16);
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


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
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


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
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


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid navbar navbar-inverse navbar-fixed-top \">\r\n    <ul class=\"nav navbar-nav col-xs-3 col-sm-3 list-inline\">\r\n        <li><a id=\"back-top\" href=\"#\" style=\"display: none;\">Вверх</a></li>\r\n        <li class=\"divider\"></li>\r\n        <li *ngIf=\"auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/pm']\"><span class=\"glyphicon glyphicon-envelope\"></span> Читать л/с <!--(<span ng-bind=\"vm.unreadPmCount\"></span>)--></a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <account-signin></account-signin>\r\n        </li>\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/forgotPassword']\"><span class=\"glyphicon glyphicon-question-sign\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Забыли пароль?\"></span></a>\r\n        </li>\r\n        <li *ngIf=\"!auth.isLoggedIn\">\r\n            <a [routerLink]=\"['/signup']\">Регистрация</a>\r\n        </li>\r\n        <li *ngIf=\"auth.isLoggedIn\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\" class=\"padding0\">\r\n                        <img class=\"nav-avatar\" ng-src=\"{$root.userImage}}\"/>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\">Мой профиль</a>\r\n                </li>-->\r\n                <li>\r\n                    <a (click)=\"logout()\">Выйти</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 top50\">\r\n    <header class=\"navbar navbar-default navbar-static-top row\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a [routerLink]=\"['/']\" class=\"navbar-brand\">Название сайта</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/']\">Главная</a></li>\r\n                <!-- @if (User.IsInRole(\"AdminFull\"))\r\n                {\r\n                <li> @Html.ActionLink(CommonMessages.Roles, \"Index\", \"Role\") </li>\r\n                }*@-->\r\n                <li> <a [routerLink]=\"['/forum']\">Форум</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a [routerLink]=\"['/news/list', 1]\" class=\"dropdown-toggle\" data-toggle=\"\">Новости<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li *ngIf=\"roles.isNewsmaker\"><a [routerLink]=\"['/news', 0, 'edit']\">Добавить</a></li>\r\n                        <li><a [routerLink]=\"['/newsCategory']\">Категории</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a ui-sref=\"blog()\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Блоги<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!--<li ng-if=\"vm.isAuthor()\"><a ui-sref=\"blogEdit()\">Добавить</a></li>-->\r\n                        <li><a ui-sref=\"blogCategories()\">Категории</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">ФК Ливерпуль<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/clubHistory']\">История</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li class=\"dropdown\">\r\n                    <!-- <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Пользователи <b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n\r\n                    <li-->\r\n                    <a [routerLink]=\"['/user/list', 1]\">Пользователи</a>\r\n                    <!--/li>\r\n                    </ul-->\r\n                </li>\r\n                <li> <a [routerLink]=\"['/materialComment']\">Комментарии</a></li>\r\n                <!--<li> <a ng-if=\"vm.isNewsmaker() || vm.isAuthor()\" ui-sref=\"images({path: 'content'})\">Изображения</a></li>-->\r\n                <li> <a [routerLink]=\"['/club']\">Клубы</a></li>\r\n                <li> <a [routerLink]=\"['/match']\">Матчи</a></li>\r\n                <li> <a [routerLink]=\"['/rules']\"><span class=\"text-danger\">Правила</span></a></li>\r\n                <li class=\"bg-success\"> <a [routerLink]=\"['/wish']\"><span class=\"text-info\">Пожелания</span></a></li>\r\n            </ul>\r\n        </div>\r\n        <!--<div class=\"col-xs-12 col-sm-12\">\r\n            temporary\r\n            <span ng-bind=\"$root.roles\"></span>\r\n        </div>-->\r\n    </header>\r\n    <div class=\"body-content row\">\r\n        <div ncy-breadcrumb></div>\r\n        <div class=\"col-xs-12 col-sm-push-3 col-sm-6 container-fluid\" style=\"background-color: #f5deb3\">\r\n            <div class=\"\">\r\n                <!--<uib-alert class=\"row\" ng-repeat=\"alert in $root.alerts\" dismiss-on-timeout=\"5000\" type=\"{alert.type}}\" close=\"closeAlert($index)\" ng-bind=\"alert.msg\"></uib-alert>-->\r\n                <div class=\"top20\" ui-view autoscroll=\"false\">\r\n                    <router-outlet></router-outlet>\r\n                    <!--div class=\"col-md-6\" ui-view=\"newsFeed\"></div>\r\n                    <div class=\"col-md-6\" ui-view=\"blogsFeed\"></div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-pull-6 col-sm-3 container-fluid\">\r\n            <section class=\"col-md- alert-info row\">\r\n                <h2>Эксетер </h2>\r\n                <div class=\"col-md-6\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/ru/f/f7/Exeter_City_Logo.png\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <span style=\"text-align: center; font-size: 45pt\">3:0</span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col-md- alert-danger row\">\r\n                <div class=\"col-md-12\"> Лучший игрок матча с Эксетером </div>\r\n                <div styleclass=\"col-md-12\">\r\n                    <img src=\"http://www.myliverpool.ru/images/Players/Squad12-13/Joe_Allen.png\" />\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    Джо Аллен\r\n                </div>\r\n            </section>\r\n            <section class=\"row\"></section>\r\n        </div>\r\n        <right-sidebar></right-sidebar>\r\n    </div>\r\n    <hr />\r\n    <footer class=\"bottom container-fluid\">\r\n        <p>&copy; @DateTime.Now.Year - @CommonMessages.SiteTitleAddress</p>\r\n    </footer>\r\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(10);
	var index_1 = __webpack_require__(23);
	var auth_routing_1 = __webpack_require__(43);
	var account_routing_1 = __webpack_require__(46);
	var club_routing_1 = __webpack_require__(65);
	var newsCategory_routing_1 = __webpack_require__(74);
	var news_routing_1 = __webpack_require__(75);
	var user_routing_1 = __webpack_require__(76);
	var pm_routing_1 = __webpack_require__(83);
	var home_routing_1 = __webpack_require__(93);
	var forumSection_routing_1 = __webpack_require__(102);
	var wish_routing_1 = __webpack_require__(108);
	var materialComment_routing_1 = __webpack_require__(117);
	var match_routing_1 = __webpack_require__(127);
	var routes = account_routing_1.accountRoutes.concat(auth_routing_1.authRoutes, club_routing_1.clubRoutes, forumSection_routing_1.forumSectionRoutes, home_routing_1.homeRoutes, match_routing_1.matchRoutes, materialComment_routing_1.materialCommentRoutes, newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, pm_routing_1.pmRoutes, user_routing_1.userRoutes, wish_routing_1.wishRoutes, [
	    { path: "", component: index_1.NewsListComponent }
	]);
	exports.appRoutingProviders = [
	    auth_routing_1.authProviders
	];
	exports.routing = router_1.RouterModule.forRoot(routes);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(24));
	__export(__webpack_require__(29));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(25));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(7);
	var news_service_1 = __webpack_require__(25);
	var router_1 = __webpack_require__(10);
	var index_1 = __webpack_require__(13);
	var ng2_bootstrap_1 = __webpack_require__(27);
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
	            template: __webpack_require__(28)
	        }), 
	        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, index_1.LocalStorageService, index_1.RolesCheckedService, router_1.Router, platform_browser_1.Title])
	    ], NewsDetailComponent);
	    return NewsDetailComponent;
	}());
	exports.NewsDetailComponent = NewsDetailComponent;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("ng2-bootstrap/ng2-bootstrap");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\" *ngIf=\"item\">\r\n    <div class=\"alert-danger flex-vertical-center\">\r\n        <h3 class=\"col-xs-12 col-sm-12\">\r\n            <span class=\"col-xs-9 col-sm-9\" [textContent]=\"item.title\"></span>\r\n            <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n            </span>\r\n        </h3>\r\n    </div>\r\n    <div class=\"\">\r\n        <article [innerHTML]=\"item.message\"></article>\r\n        <div class=\"alert-warning\">\r\n            <ul class=\"list-inline\">\r\n                <li><label>Просмотры:</label> <span [textContent]=\"item.reads\"></span></li>\r\n                <li><label>Источник:</label> <span [textContent]=\"item.source\"></span></li>\r\n                <li><label>Дата добавления:</label> <span [textContent]=\"item.additionTime | date:'medium'\"></span></li>\r\n                <li><label>Категория:</label> <a [routerLink]=\"['/news/list', 1, item.categoryId ]\"> <span [textContent]=\"item.categoryName\"></span> </a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <comments [materialId]=\"item.id\" [canCommentary]=\"item.canCommentary\"></comments>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(30);
	var news_service_1 = __webpack_require__(25);
	var newsFilters_model_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(10);
	var index_1 = __webpack_require__(13);
	var ng2_bootstrap_1 = __webpack_require__(27);
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
	            template: __webpack_require__(32),
	            changeDetection: core_1.ChangeDetectionStrategy.Default
	        }), 
	        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, common_1.Location, index_1.RolesCheckedService, core_1.ChangeDetectorRef])
	    ], NewsListComponent);
	    return NewsListComponent;
	}());
	exports.NewsListComponent = NewsListComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	var MaterialFilters = (function () {
	    function MaterialFilters() {
	        this.page = 1;
	    }
	    return MaterialFilters;
	}());
	exports.MaterialFilters = MaterialFilters;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\r\n    <div>\r\n        <!--ng-if=\"vm.page > 0\">-->\r\n        <!--form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\"\r\n                    ng-model=\"vm.categoryId\"\r\n                    ng-options=\"category.id as category.name for category in vm.categories\" ng-change=\"vm.changeCategoryId()\"></select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <input class=\"form-control\" ng-model=\"vm.userName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\"/> <!--todo magic number--\r\n        </div>\r\n        </form-->\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"\" *ngIf=\"!item.pending || roles.isEditor\">\r\n            <div class=\"flex-vertical-center\">\r\n                <a [routerLink]=\"['/news', item.id]\" class=\"col-xs-9 col-sm-9\"><h4 [textContent]=\"item.title\"></h4></a>\r\n                <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                    <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                    <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                </span>\r\n            </div>\r\n            <div class=\"\">\r\n                <img class=\"img-thumbnail news-mini center-block\" alt=\"\" [src]=\"item.photoPath\" />\r\n            </div>\r\n            <div class=\"\">\r\n                <i> <span [innerHTML]=\"item.brief\"></span></i>\r\n            </div>\r\n            <div class=\"col-sx-12 col-sm-12\">\r\n                <ul class=\"list-inline small small-offset\">\r\n                    <li class=\"\">Категория:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/news/list', page, item.categoryId ]\" [textContent]=\"item.categoryName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Время добавления:</li>\r\n                    <li class=\"\" [textContent]=\"item.additionTime\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Просмотры</li>\r\n                    <li class=\"\" [textContent]=\"item.reads\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Автор:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/user', item.userId ]\" [textContent]=\"item.userName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Комментарии:</li>\r\n                    <li class=\"\" [textContent]=\"item.commentsCount\"></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination\">\r\n       <!-- <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>-->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var news_service_1 = __webpack_require__(25);
	var news_model_1 = __webpack_require__(34);
	var index_1 = __webpack_require__(35);
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
	            template: __webpack_require__(42)
	        }), 
	        __metadata('design:paramtypes', [news_service_1.NewsService, index_1.NewsCategoryService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
	    ], NewsEditComponent);
	    return NewsEditComponent;
	}());
	exports.NewsEditComponent = NewsEditComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var News = (function () {
	    function News() {
	    }
	    return News;
	}());
	exports.News = News;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(40));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var newsCategory_model_1 = __webpack_require__(38);
	var newsCategory_service_1 = __webpack_require__(36);
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
	            template: __webpack_require__(39)
	        }), 
	        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
	    ], NewsCategoryEditComponent);
	    return NewsCategoryEditComponent;
	}());
	exports.NewsCategoryEditComponent = NewsCategoryEditComponent;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	var NewsCategory = (function () {
	    function NewsCategory() {
	    }
	    return NewsCategory;
	}());
	exports.NewsCategory = NewsCategory;


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Название</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['name']\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Описание</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"brief\" rows=\"4\" [formControl]=\"editForm.controls['description']\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <input type=\"submit\" [disabled]=\"!editForm.valid\" value=\"Отправить\" class=\"btn btn-default\" />\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(7);
	var newsCategory_service_1 = __webpack_require__(36);
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
	            template: __webpack_require__(41)
	        }), 
	        __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, platform_browser_1.Title])
	    ], NewsCategoryListComponent);
	    return NewsCategoryListComponent;
	}());
	exports.NewsCategoryListComponent = NewsCategoryListComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <a secured=\"newsFull\" [routerLink]=\"['/newsCategory', 0, 'edit']\">Создать категорию</a>\r\n    <ul>\r\n        <li *ngFor=\"let category of items; let i = index;\">\r\n            <a [routerLink]=\"['/news/list', 1, category.id ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </a>\r\n            <!--->a secured=\"newsStart\" [routerLink]=\"['/news/list', page, item.categoryId ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </!--a-->\r\n            <a class=\"\" [routerLink]=\"['/newsCategory', category.id, 'edit']\"> <span class=\"glyphicon glyphicon-pencil\"></span>newsStart</a>\r\n            <a class=\"\" *ngIf=\"category.itemsCount == 0\" (click)=\"delete(i)\"> <span class=\"glyphicon glyphicon-trash\"></span>newsFull</a>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" [formControl]=\"editForm.controls['categoryId']\">\r\n                    <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Название:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Краткое описание:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"brief\" rows=\"4\" [formControl]=\"editForm.controls['brief']\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Текст новости:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"message\" rows=\"6\" [formControl]=\"editForm.controls['message']\"> </textarea>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Источник:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"source\" [formControl]=\"editForm.controls['source']\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Главное фото:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"photoPath\" [formControl]=\"editForm.controls['photo']\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"\" ui-view=\"files\" autoscroll=\"false\"></div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"canCommentary\" [formControl]=\"editForm.controls['canCommentary']\" type=\"checkbox\" checked /> Разрешить комментарии\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" [formControl]=\"editForm.controls['onTop']\" type=\"checkbox\" /> Наверху\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"pending\" [formControl]=\"editForm.controls['pending']\" type=\"checkbox\" /> Отложена\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(44);
	exports.authRoutes = [];
	exports.authProviders = [
	    index_1.AuthGuard,
	    index_1.AuthService
	];


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(11));
	__export(__webpack_require__(45));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(47);
	exports.accountRoutes = [
	    { path: "signup", component: index_1.AccountSignupComponent },
	    { path: "confirmEmail", component: index_1.ConfirmEmailComponent },
	    { path: "forgotPassword", component: index_1.ForgotPasswordComponent },
	    { path: "unconfirmedEmail", component: index_1.UnconfirmedEmailComponent },
	    { path: "resetPassword", component: index_1.ResetPasswordComponent },
	    { path: "changePassword", component: index_1.ChangePasswordComponent }
	];


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(48));
	__export(__webpack_require__(50));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(57));
	__export(__webpack_require__(60));
	__export(__webpack_require__(63));
	__export(__webpack_require__(52));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
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
	            template: __webpack_require__(49)
	        }), 
	        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder])
	    ], AccountSigninComponent);
	    return AccountSigninComponent;
	}());
	exports.AccountSigninComponent = AccountSigninComponent;


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<form name=\"loginForm1\" class=\"form-inline\" role=\"form\" style=\"margin-top: 8px;\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['userName']\" placeholder=\"Логин\" type=\"text\" />\r\n      </div>\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['password']\" placeholder=\"Пароль\" type=\"password\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" [disabled]=\"!loginForm.valid\" value=\"Войти\" class=\"btn btn-default\" />\r\n    </div>\r\n</form>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var signup_model_1 = __webpack_require__(51);
	var account_service_1 = __webpack_require__(52);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(53)
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
	    ], AccountSignupComponent);
	    return AccountSignupComponent;
	}());
	exports.AccountSignupComponent = AccountSignupComponent;


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	var Signup = (function () {
	    function Signup() {
	    }
	    return Signup;
	}());
	exports.Signup = Signup;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var index_1 = __webpack_require__(13);
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


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12 top20\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Логин</label>\r\n            <div class=\"col-md-10\">\r\n            <!--    <input type=\"text\" name=\"userName\" [(ngModel)]=\"item.username\" id=\"userName\" debounce=\"5000\" validation=\"remote:vm.userNameUnique():alt=Пользователь с таким логином уже существует|min_len:3|max_len:30|required\" />\r\n                -->  <input class=\"form-control\" [formControl]=\"registerForm.controls['userName']\" type=\"text\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Почтовый адрес</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"email\" name=\"email\" [(ngModel)]=\"item.email\" id=\"email\" debounce=\"5000\" validation=\"remote:vm.emailUnique():alt=Пользователь с таким адресом уже существуетrequired|email|min_len:6\" />\r\n               -->  <input class=\"form-control\" [formControl]=\"registerForm.controls['email']\" type=\"email\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-md-2 control-label\">Пароль</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"password\" name=\"vm.registerForm.password\" friendly-name=\"Пароль\" id=\"password\" [(ngModel)]=\"item.password\" validation=\"required|min_len:6\" />\r\n             -->    <input class=\"form-control\" [formControl]=\"registerForm.controls['password']\" type=\"password\" />\r\n             </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\" class=\"col-md-2 control-label\">Подтверждение пароля</label>\r\n            <div class=\"col-md-10\">\r\n             <!--   <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" [(ngModel)]=\"item.confirmPassword\" validation=\"required|match:vm.registerForm.password,Password2|min_len:6\" />\r\n              -->   <input class=\"form-control\" [formControl]=\"registerForm.controls['confirmPassword']\" type=\"password\" /> \r\n              </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Полное имя</label>\r\n            <div class=\"col-md-10\">\r\n               <!-- <input type=\"text\" name=\"fullName\" [(ngModel)]=\"item.fullName\" validation=\"required|min_len:2\"/>\r\n           -->      <input class=\"form-control\" [formControl]=\"registerForm.controls['fullName']\"  type=\"text\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата рождения</label>\r\n            <div class=\"col-md-10\">\r\n                <!-- <datepicker  class=\"form-control\" [formControl]=\"registerForm.controls['birthday']\"></datepicker> \r\n                <!-- <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" validation=\"required\" name=\"birthday\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" [(ngModel)]=\"item.birthday\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\"/>\r\n                    span class=\"input-group-btn va-top\">\r\n                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span\r\n                </div> -->\r\n               <input class=\"form-control\" [formControl]=\"registerForm.controls['birthday']\" type=\"text\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button class=\"btn btn-default\" [disabled]=\"!registerForm.valid\" type=\"submit\">Зарегистрироваться</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var account_service_1 = __webpack_require__(52);
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


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var account_service_1 = __webpack_require__(52);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(56)
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
	    ], ForgotPasswordComponent);
	    return ForgotPasswordComponent;
	}());
	exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <h1 class=\"text-center\">Забыли пароль?</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"forgotEmail\" role=\"form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit(forgotForm.value)\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"emailAddress\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"forgotForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <input type=\"submit\" class=\"btn btn-default\" [disabled]=\"!forgotForm.valid\" value=\"Отправить\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var account_service_1 = __webpack_require__(52);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(59)
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
	    ], ResetPasswordComponent);
	    return ResetPasswordComponent;
	}());
	exports.ResetPasswordComponent = ResetPasswordComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	var ResetPassword = (function () {
	    function ResetPassword() {
	    }
	    return ResetPassword;
	}());
	exports.ResetPassword = ResetPassword;


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <form class=\"form-horizontal\" name=\"resetForm\" role=\"form\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit(resetForm.value)\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <pre *ngIf=\"resetForm.errors\">{{resetForm.errors | json}}</pre>\r\n                <label class=\"col-md-2 control-label\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"resetForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"\" [formControl]=\"resetForm.controls['password']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Подтверждение нового пароля</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"\" [formControl]=\"resetForm.controls['confirmPassword']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!resetForm.valid\" type=\"submit\">Поменять пароль</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var account_service_1 = __webpack_require__(52);
	var index_1 = __webpack_require__(13);
	var changePassword_model_1 = __webpack_require__(61);
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
	            template: __webpack_require__(62)
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
	    ], ChangePasswordComponent);
	    return ChangePasswordComponent;
	}());
	exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	var ChangePassword = (function () {
	    function ChangePassword() {
	    }
	    return ChangePassword;
	}());
	exports.ChangePassword = ChangePassword;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <h1 class=\"text-center\">Изменение пароля</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"passwordForm\" (ngSubmit)=\"onSubmit(passwordForm.value)\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Старый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"oldPassword\" [formControl]=\"passwordForm.controls['oldPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"newPassword\" [formControl]=\"passwordForm.controls['newPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"confirmPassword\" [formControl]=\"passwordForm.controls['confirmPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!passwordForm.valid\" type=\"submit\">Изменить</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var account_service_1 = __webpack_require__(52);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(64)
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, forms_1.FormBuilder])
	    ], UnconfirmedEmailComponent);
	    return UnconfirmedEmailComponent;
	}());
	exports.UnconfirmedEmailComponent = UnconfirmedEmailComponent;


/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <h1 class=\"text-center\">Адрес электронной почты не подтвержден</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"unconfirmedForm\" role=\"form\" [formGroup]=\"unconfirmedForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!finish\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"email\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"\" [formControl]=\"unconfirmedForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button type=\"submit\" [disabled]=\"!unconfirmedForm.valid\" class=\"btn btn-default\">Переслать</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"finish\">Письмо успешно отправлено</div>\r\n    </div>\r\n</div>";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(66);
	exports.clubRoutes = [
	    { path: "club/:id/edit", component: index_1.ClubEditComponent },
	    { path: "club", component: index_1.ClubListComponent }
	];


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	__export(__webpack_require__(70));


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var index_1 = __webpack_require__(13);
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


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(30);
	var platform_browser_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(10);
	var club_service_1 = __webpack_require__(67);
	var ng2_bootstrap_1 = __webpack_require__(27);
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
	            template: __webpack_require__(69)
	        }), 
	        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location, platform_browser_1.Title])
	    ], ClubListComponent);
	    return ClubListComponent;
	}());
	exports.ClubListComponent = ClubListComponent;


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>--\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!--todo magic number\r\n            </div>-->\r\n            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/club', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/club', item.id, 'edit']\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img class=\"avatar\" src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var platform_browser_1 = __webpack_require__(7);
	var club_service_1 = __webpack_require__(67);
	var club_model_1 = __webpack_require__(71);
	var index_1 = __webpack_require__(13);
	var ng2_file_upload_1 = __webpack_require__(72);
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
	            template: __webpack_require__(73)
	        }), 
	        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, router_1.Router, index_1.LocalStorageService, forms_1.FormBuilder, platform_browser_1.Title])
	    ], ClubEditComponent);
	    return ClubEditComponent;
	}());
	exports.ClubEditComponent = ClubEditComponent;


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	var Club = (function () {
	    function Club() {
	    }
	    return Club;
	}());
	exports.Club = Club;


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("ng2-file-upload/ng2-file-upload");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Соперник</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"name\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" src=\"{{editForm?.controls['logo'].value}}\" />\r\n        </div><div class=\"col-xs-10 col-sm-10\">\r\n                  <input formControlName=\"logo\" novalidate readonly />\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" [disabled]=\"!editForm.controls['englishName'].valid\"/>\r\n            <button type=\"button\" [hidden]=\"!this.uploader?.queue\" (click)=\"upload()\">Загрузить</button>\r\n        </div>\r\n</div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Название клуба на английском</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"englishName\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Стадион</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" formControlName=\"stadium\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var newsCategory_list_component_1 = __webpack_require__(40);
	var newsCategory_edit_component_1 = __webpack_require__(37);
	exports.newsCategoryRoutes = [
	    { path: 'newsCategory', component: newsCategory_list_component_1.NewsCategoryListComponent },
	    { path: 'newsCategory/:id/edit', component: newsCategory_edit_component_1.NewsCategoryEditComponent }
	];


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(23);
	exports.newsRoutes = [
	    { path: "news", component: index_1.NewsListComponent },
	    { path: "news/list", component: index_1.NewsListComponent },
	    { path: "news/list/:page", component: index_1.NewsListComponent },
	    { path: "news/list/:page/:categoryId", component: index_1.NewsListComponent },
	    { path: "news/:id", component: index_1.NewsDetailComponent },
	    { path: "news/:id/edit", component: index_1.NewsEditComponent }
	];


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var user_detail_component_1 = __webpack_require__(77);
	var user_list_component_1 = __webpack_require__(80);
	exports.userRoutes = [
	    { path: 'user', component: user_list_component_1.UserListComponent },
	    { path: 'user/list', component: user_list_component_1.UserListComponent },
	    { path: 'user/list/:page', component: user_list_component_1.UserListComponent },
	    { path: 'user/list/:page/:userName', component: user_list_component_1.UserListComponent },
	    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
	];


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var user_service_1 = __webpack_require__(78);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(79)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, index_1.RolesCheckedService])
	    ], UserDetailComponent);
	    return UserDetailComponent;
	}());
	exports.UserDetailComponent = UserDetailComponent;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var httpWrapper_1 = __webpack_require__(15);
	var app_constants_1 = __webpack_require__(20);
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


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\" *ngIf=\"item\">\r\n    <h2>\r\n        <span [textContent]=\"item.userName\"></span>\r\n        <span [hidden]=\"!roles.isLogined || roles.isSelf(item.id)\">\r\n            <a ui-sref=\"wpm({ userName: item.userName })\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n        </span>\r\n    </h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" src=\"{{item.photo}}\" alt=\"{{item.userName}}\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <div *ngIf=\"roles.isSelf(item.id) || roles.isModerator\">\r\n                <button class=\"btn btn-info\" ngf-select=\"vm.uploadFiles($file, $invalidFiles)\"\r\n                        accept=\"image/*\" ngf-max-height=\"1000\" ngf-max-size=\"1MB\">\r\n                    Обновить аватар\r\n                </button>\r\n                <button *ngIf=\"roles.isSelf(item.id)\" class=\"btn btn-danger\" [routerLink]=\"['/changePassword']\">Изменить пароль</button>\r\n                <br><br>\r\n                <!--div>\r\n                    <span ng-show=\"vm.errFile.$error\" ng-bind=\"vm.errFile.$error\"></span>\r\n                    <span ng-show=\"vm.errFile.$errorParam\" ng-bind=\"vm.errFile.$errorParam\"></span>\r\n                    <span class=\"progress\" ng-show=\"f.progress >= 0\">\r\n                        <span style=\"width:{{f.progress}}%\" ng-bind=\"f.progress + '%'\"></!--span>\r\n                    </span>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <form class=\"form-horizontal\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Логин</label>\r\n            <div class=\"col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.userName\"></span>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"roles.isModerator || roles.isSelf(item.id)\" class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Забанить</label>\r\n            <div class=\"\" ng-show=\"!item.lockoutEndDateUtc\">\r\n                <div class=\"col-xs-2 col-sm-2\">\r\n                    <input min=\"0\" type=\"number\" placeholder=\"Количество дней\" class=\"form-control\" ng-model=\"item.banDaysCount\" />\r\n                </div>\r\n                <div class=\"col-xs-8 col-sm-8\">\r\n                    <button class=\"btn btn-danger\" ng-click=\"vm.ban()\" ngDisabled=\"item.banDaysCount <= 0\">Забанить</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-10 col-sm-10\" [hidden]=\"item.lockoutEndDateUtc\">\r\n                <span class=\"col-xs-8 col-sm-8 flex-vertical-center\" *ngIf=\"item.lockoutEndDateUtc\">Активность заблокирована до <span [textContent]=\"item.lockoutEndDateUtc | date:'medium'\"></span></span>\r\n                <button class=\"btn btn-success\" secured=\"'UsersFull'\" ng-click=\"vm.unban()\">Снять бан</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Группа:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <div>\r\n                    <span class=\"form-control\" [textContent]=\"item.roleGroupName\"></span>\r\n                    <select secured=\"'AdminStart'\" class=\"form-control\" name=\"newsCategoryId\"\r\n                            ng-model=\"item.roleGroupId\"\r\n                            ng-options=\"roleGroup.id as roleGroup.name for roleGroup in vm.roleGroups\" validation=\"required\" ng-change=\"vm.editRole()\"></select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" [hidden]=\"!roles.isSelf || !roles.isAdminAssistant\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\" [hidden]=\"!item.emailConfirmed\">Почта</label>\r\n            <label class=\"col-xs-2 col-sm-2 control-label text-danger\" uib-tooltip=\"Почта не подтверждена\" [hidden]=\"item.emailConfirmed\">Почта</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.email\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Последний вход </label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.lastModifiedOn | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Дата регистрации</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.registrationDate | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.fullName\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Полное имя</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.fullName\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.birthday\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">День рождения</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.birthday | date:'longDate'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.gender\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Пол</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" *ngIf=\"item.gender\">Девушка</span>\r\n                <span class=\"form-control\" *ngIf=\"!item.gender\">Парень</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <ul class=\"list-inline\">\r\n                <li *ngIf=\"item.newsCount > 0\"><a ui-sref=\"news({ page: 1, userName: item.userName})\">Новости(<span [textContent]=\"item.newsCount\"></span>)</a></li>\r\n                <li>|</li>\r\n                <li *ngIf=\"item.blogsCount > 0\"><a ui-sref=\"blog({page: 1, userName: item.userName})\">Блоги(<span [textContent]=\"item.blogsCount\"></span>)</a></li>\r\n            </ul>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!--script type=\"text/ng-template\" id=\"changeRoleConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Редактирование роли</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Изменить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Изменить</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</!--script>\r\n\r\n<script type=\"text/ng-template\" id=\"banConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\"></h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Забанить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.ok()\">Забанить</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</script>-->";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var user_service_1 = __webpack_require__(78);
	var userFilters_model_1 = __webpack_require__(81);
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
	            template: __webpack_require__(82)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
	    ], UserListComponent);
	    return UserListComponent;
	}());
	exports.UserListComponent = UserListComponent;


/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	var UserFilters = (function () {
	    function UserFilters() {
	        this.page = 1;
	    }
	    return UserFilters;
	}());
	exports.UserFilters = UserFilters;


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-condensed\">\r\n        <thead>\r\n            <tr>\r\n                <th>Последний вход</th>\r\n                <th>Логин</th>\r\n                <th>Дата регистрации</th>\r\n                <th>Группа</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let user of items\">\r\n            <tr>\r\n                <td class=\"\" [textContent]=\"user.lastModified | date:'medium'\"></td>\r\n                <td class=\"\">\r\n                    <a [routerLink]=\"['/user', user.id ]\">\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"mini-avatar\" src=\"{{user.photo}}\" alt=\"{{user.userName}}\"/>\r\n                        </div>\r\n                        <span [textContent]=\"user.userName\"></span>\r\n                    </a>\r\n                    <span class=\"text-danger\" uib-tooltip=\"Почта не подтверждена\" [hidden]=\"user.emailConfirmed\"> *</span>\r\n                    <a ng-show=\"loggedIn() && vm.isNotSelf(user.id, userId())\" ui-sref=\"wpm({ userName: user.userName })\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n                </td>\r\n                <td class=\"\" [textContent]=\"user.registrationDate | date:'medium'\"></td>\r\n                <td class=\"\" [textContent]=\"user.roleGroupName\"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div>\r\n        <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.chosenRoleGroupId\"\r\n                        ng-options=\"roleGroup.id as roleGroup.name for roleGroup in vm.roleGroups\" ng-change=\"vm.changeRoleId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterUserName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\" /> <!--todo magic number-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!-->uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.pageNo\" ng-change=\"vm.goToPage()\"></!--uib-pagination--->\r\n</div>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(84);
	exports.pmRoutes = [
	    { path: "pm", component: index_1.PmListComponent },
	    { path: "pm/:id", component: index_1.PmDetailComponent },
	    { path: "pm/:id/edit", component: index_1.PmEditComponent }
	];


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(85));
	__export(__webpack_require__(86));
	__export(__webpack_require__(89));
	__export(__webpack_require__(91));
	__export(__webpack_require__(87));


/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";
	var Pm = (function () {
	    function Pm() {
	    }
	    return Pm;
	}());
	exports.Pm = Pm;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var pm_service_1 = __webpack_require__(87);
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
	            template: __webpack_require__(88)
	        }), 
	        __metadata('design:paramtypes', [pm_service_1.PmService])
	    ], PmListComponent);
	    return PmListComponent;
	}());
	exports.PmListComponent = PmListComponent;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<!--<div class=\"container-fluid\">\r\n    <md-tab-group [selectedIndex]=\"0\">\r\n        <md-tab>\r\n            <template md-tab-label>\r\n                Полученные\r\n            </template>\r\n            <template md-tab-content>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>#</td>\r\n                        <td>Заголовок</td>\r\n                        <td>Отправитель</td>\r\n                        <td>Дата получения</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let message of received; let i = index\">\r\n                    <tr>\r\n                        <td [textContent]=\"i + 1\"></td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/pm', message.id]\">\r\n                                <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                                <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                            </a>\r\n                        </td>\r\n                        <td><a [routerLink]=\"['/user', message.senderId]\" [textContent]=\"message.senderUserName\"></a></td>\r\n                        <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </template>\r\n        </md-tab>\r\n        <md-tab>\r\n            <template md-tab-label>\r\n                Отправленные\r\n            </template>\r\n            <template md-tab-content>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>#</td>\r\n                        <td>Заголовок</td>\r\n                        <td>Получатель</td>\r\n                        <td>Дата отправки</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let message of sent; let i = index\">\r\n                    <tr>\r\n                        <td [textContent]=\"i + 1\"></td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/pm', message.id]\">\r\n                                <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                                <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                            </a>\r\n                        </td>\r\n                        <td><a [routerLink]=\"['/user', message.receiverId]\" [textContent]=\"message.receiverUserName\"></a></td>\r\n                        <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </template>\r\n        </md-tab>\r\n        <<md-tab>\r\n            <template md-tab-label>\r\n                <a [routerLink]=\"['/pm', 0, 'edit']\">\r\n                    Написать сообщеньку\r\n                </a>\r\n            </template>\r\n        </md-tab>\r\n    </md-tab-group>\r\n</div>-->";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var pm_service_1 = __webpack_require__(87);
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
	            template: __webpack_require__(90)
	        }), 
	        __metadata('design:paramtypes', [pm_service_1.PmService, router_1.ActivatedRoute])
	    ], PmDetailComponent);
	    return PmDetailComponent;
	}());
	exports.PmDetailComponent = PmDetailComponent;


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12 form-horizontal margin-top-middle\" *ngIf=\"item\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled value=\"{{item.receiver}}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled value=\"{{item.title}}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" disabled rows=\"4\" [textContent]=\"item.message\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <!--a [routerLink]=\"['/pm', 0, 'edit', {username: item.receiver, userId: item.id}]\" >Ответить</!a-->\r\n            <a [routerLink]=\"['/pm', 0, 'edit']\" >Ответить</a>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var pm_model_1 = __webpack_require__(85);
	var pm_service_1 = __webpack_require__(87);
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
	            template: __webpack_require__(92)
	        }), 
	        __metadata('design:paramtypes', [pm_service_1.PmService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
	    ], PmEditComponent);
	    return PmEditComponent;
	}());
	exports.PmEditComponent = PmEditComponent;


/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"writePm\"  [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h2>Написать сообщение</h2>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <!--p class=\"text-danger col-md-offset-2\" ng-if=\"vm.errorMessage\">\r\n            <i ng-bind=\"vm.errorMessage\"></i>\r\n            </!p-->\r\n            <input type=\"text\" \r\n                   class=\"form-control\"\r\n                   (valueChanged)=\"updateUsername($event)\"\r\n                   auto-complete name=\"receiver\" \r\n                   [formControl]=\"editForm.controls['receiver']\" \r\n                   [source]=\"users\" \r\n                   min-chars=\"2\" \r\n                   attr-placeholder=\"Введите логин...\"\r\n                   display-property-name=\"username\"\r\n                   />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"message\" rows=\"4\" [formControl]=\"editForm.controls['message']\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Отправить</button>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(94);
	exports.homeRoutes = [
	    { path: "clubHistory", component: index_1.ClubHistoryComponent },
	    { path: "rules", component: index_1.RulesComponent }
	];


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(95));
	__export(__webpack_require__(97));
	__export(__webpack_require__(99));


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var ClubHistoryComponent = (function () {
	    function ClubHistoryComponent() {
	    }
	    ClubHistoryComponent = __decorate([
	        core_1.Component({
	            selector: "<club-history>",
	            template: __webpack_require__(96)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ClubHistoryComponent);
	    return ClubHistoryComponent;
	}());
	exports.ClubHistoryComponent = ClubHistoryComponent;


/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"\">\r\n        <img alt=\"\" style=\"border: 3px solid #ccc;margin:0 15px 15px 0;\" src=\"http://pictures.footymad.net/upload/342/69050-1.jpg\" align=\"left\" width=\"250px\">Главный соперник \"Ливерпуля\", \"Эвертон\", был сформирован в 1878 году Джоном Холдингом, местным предпринимателем и будущим мэром Ливерпуля.\r\n\r\n        Они начали играть на \"Энфилд Роуд\" — поле, арендованном у пивовара по имени Джон Оррелл. Как только \"Эвертон\" встал на ноги Холдинг приступил к строительству футбольных трибун на \"Энфилде\". Однако после возникших в 1892 году разногласий клуб распался на две группы. Одна из групп приняла решение переехать на \"Гудисон Парк\", в то время как оставшиеся, во главе с Холдингом, основали на \"Энфилд Роуд\" новый футбольный клуб - \"Ливерпуль\". Холдинг назначил главным тренером своего друга, Джона Маккену, который сразу отправился в Шотландию набирать команду игроков. После года работы Маккена решил, что настало время подать заявку на вступление в Футбольную лигу.\r\n\r\n        Уже после первого сезона в лиге \"Ливерпуль\" поднялся в высший дивизион, однако он по-прежнему оставался в тени своих соседей из \"Эвертона\", а большинство местных жителей отказывались ходить на матчи команды, все игроки которой были шотландцами. Первый сезон прошел неудачно, и клуб выбыл во Второй дивизион. Маккена поклялся вернуться в высшую лигу через двенадцать месяцев, что и произошло благодаря его целеустремленности и настойчивости, \"Ливерпуль\" вновь становится чемпионом второго дивизиона и продвигается в первый. На этот раз они завершили сезон на надежном пятом месте, выше \"Эвертона\".\r\n\r\n        Первый чемпионский титул \"Ливерпуль\" выиграл в сезоне 1900/01. Через два года после этого \"красные\" выбыли из высшей лиги, но вернулись туда спустя год и в том сезоне вновь стали победителями чемпионата. В качестве награды руководство клуба приняло решение построить для болельщиков новую трибуну, \"Спион Коп\", позже ставшую легендарной. Такое название трибуна получила в честь холма, расположенного в южно-африканской провинции Натал, где во время второй англо-бурской войны мерсисайдский полк понес большие потери. В переводе с африкаанс \"спион коп\" означает \"место, дающее хороший обзор\". В 1928 году трибуна была расширена и обрела крышу, надежно защищавшую от непогоды 30 000 болельщиков.\r\n\r\n        После Первой мировой войны \"Ливерпуль\" стал обладателем еще двух чемпионских титулов, но после Второй мировой начался спад игровой формы, хотя в 1950 году \"красным\" все же удалось выйти в финал Кубка Англии, где они уступили \"Арсеналу\". Сезон 1953/54 \"Ливерпуль\" завершил на последнем месте и выбыл из первого дивизиона. После нескольких неудачных лет на помощь клубу пришел Билл Шенкли. Он был назначен главным тренером в 1959 году и за следующие четырнадцать лет своей работы превратил \"Ливерпуль\" в величайший клуб английского футбола. За первые двенадцать месяцев его руководства двадцать четыре игрока покинули команду. В сезоне 1963/64 \"Ливерпуль\" в шестой раз стал чемпионом высшей лиги, а в следующем году коллекция трофеев пополнилась кубком Англии, благодаря победе над \"Лидс\" в финале соревнования. Но победная серия на этом не закончилась, в сезоне 1965/66 \"красные\" вновь выиграли главный титул лиги.\r\n\r\n        Следующий трофей \"Ливерпуль\" получил лишь спустя семь лет, в сезоне 1972/73, на этот раз Кубок УЕФА, а спустя еще год \"красные\" вновь стали обладателями кубка Англии. После этого Шенкли неожиданно решил завершить карьеру и передал полномочия своей правой руке — Бобу Пейсли. Громких побед не пришлось долго ждать, уже на второй год работы нового тренера, в сезоне 1975/76, \"Ливерпуль\" выиграл чемпионат и Кубок УЕФА. Через год \"красные\" вновь стали чемпионами лиги, завоевали Кубок европейских чемпионов, обыграв в финале \"Боруссию Менхенгладбах\", но в финальном матче Кубка Англии уступили \"Манчестер Юнайтед\" со счетом 2:1. В сезоне 1977/78 \"Ливерпуль\" стал первым британским клубом, кому удалось подтвердить звание европейского чемпиона, одержав победу в финале соревнования над бельгийским клубом \"Брюгге\" со счетом 1:0.\r\n\r\n        Затем два года подряд, в сезонах 1978/79 и 1979/80, \"Ливерпуль\" становится чемпионом страны. 1981 год стал очередной яркой страницей в истории клуба, в третий раз в своей истории \"красные\" становятся обладателями Кубка европейских чемпионов, одержав победу над мадридским \"Реалом\" в финале турнира, а также выигрывают Кубок Лиги. В сезонах 1981/82 и 1982/83 \"Ливерпуль\" завоевывает еще два главных футбольных трофея страны, после чего Пейсли принимает решение уйти на пенсию. За девять лет его руководства клубом ему шесть раз присуждалось звание \"Лучший тренер года\".\r\n\r\n        На пост главного тренера заступил Джо Фэган, и в первый же год под его руководством клуб выиграл чемпионат Англии, Кубок Лиги и Кубок европейских чемпионов, обыграв \"Рому\" в Италии. Следующий сезон был омрачен страшной трагедией. Во время финала Кубка европейских чемпионов против \"Ювентуса\" на стадионе \"Эйзель\" возникли беспорядки. Перекрытие на стадионе рухнуло и унесло с собой жизни 38 болельщиков итальянского клуба. В конечном счете обладателем трофея стал \"Ювентус\", а английским клубам на неопределенный срок запретили участвовать в европейских соревнованиях.\r\n\r\n        В 1986 году Кенни Далглиш был назначен играющим тренером. В этом же сезоне \"Ливерпуль\" выиграл чемпионат и Кубок Англии. В сезоне 1987/88 \"красные\" вновь становятся чемпионами страны, однако в финале Кубка Англии уступают \"Уимблдону\". Сезон 1988/89 стал худшим в истории \"Ливерпуля\". Во время полуфинального матча Кубка Англии против \"Ноттингем Форест\" на стадионе \"Хиллсборо\" 96 болельщиков \"Ливерпуля\" погибли в результате переполнения трибуны \"Леппинг Лейн\". Позже \"Красные\" вышли в финал, где встретились с \"Эвертоном\". Перед началом матча болельщики обеих команд пели \"You will never walk alone\" и провели минуту молчания, в память о погибших на \"Хиллсборо\". \"Ливерпуль\" победил со счетом 3:2 благодаря двум голам, забитым вышедшим на замену Ианом Рашем. Главный трофей лиги также был практически в руках у \"красных\", чтобы этому помешать \"Арсеналу\" нужно было выиграть на \"Энфилде\" с преимуществом в два мяча. К концу решающего матча \"Арсенал\" вел в счете 1:0, но гол Майкла Томаса, забитый уже в добавленное время, похоронил надежды \"Ливерпуля\" на очередной трофейный дубль. После окончания сезона Кенни Далглиш оставил свой пост, объяснив это шокировавшее многих решение нервным перенапряжением.\r\n\r\n        Временно заменить Далглиша был призван Ронни Моран, прежде чем в апреле 1991 года на пост главного тренера не был назначен Грэм Сунесс. Он привел в команду множество новых игроков, но его строгий стиль работы не пользовался популярностью и не помог команде повторить успех прошлых лет. Начиная с эры Суннеса и до сих пор клуб преследует множество проблем.\r\n\r\n        Рой Эванс в свой первый полный сезон у руля клуба, в 1995 году, выиграл Кубок Лиги. Несмотря на то, что ему удалось построить интересную команду молодых игроков, многие из которых пришли из юношеской команды \"Ливерпуля\", никаких серьезных побед ему одержать не удалось. Болельщики и руководство требовали громких успехов, и в 1998 году в клуб был приглашен Жерар Улье, который должен был разделить тренерское кресло с Роем Эвансом. Опыт совместной работы оказался неудачным, и Эванс покинул клуб, положив тем самым конец 35 периоду преданной службы \"Ливерпулю\".\r\n\r\n        Улье начал развивать состав клманды, приглашая относительно неизвестных игроков, при этом его совершенно не пугали критические отзывы средств массовой информации. Ему удалось значительно улучшить игру команды в обороне, за что в 2001 году он был вознагражден пятью трофеями, а \"Ливерпуль\" не потерпел ни одного поражения в кубковых соревнованиях того сезона и квалифицировался в Лигу Чемпионов.\r\n\r\n        На следующий год \"Ливерпуль\" серьезно претендовал на победу в Премьер-лиге и в то же время неплохо себя проявил в Лиге чемпионов, добравшись до четвертьфинала соревнования, где уступил леверкузенскому \"Байеру\", вышедшему в итоге в финал турнира.\r\n\r\n        Из-за проблем со здоровьем Жерара Улье, большую часть следующего сезона командой фактически руководил Фил Томпсон, но благодаря своем бутрумовскому прошлому ему удалось успешно справиться с этой задачей. В Премьер-лиге \"Ливерпуль\" занял второе место, уступив лишь \"Арсеналу\", и вновь получил путевку в Лигу Чемпионов.\r\n\r\n        Сезон 2003/04 \"Ливерпуль\" завершил на четвертом месте, получив тем самым возможность принять участие в Лиге Чемпионов следующего сезона. Руководство клуба решило, что настала пора перемен. Новым главным тренером был назначен Рафаэль Бенитес, а Улье согласился покинуть клуб.\r\n\r\n        Бенитес не стал тратить время на поиски для себя новых помощников, а оставил на своих должностях Фила Томпсона, Сэмми Ли и Джо Корригана. Внезапно \"Ливерпуль\" вернулся к атакующему стилю игры с большим количеством передач, на радость болельщикам и критикам, и стал проявлять намеки на многообещающее будущее. В конце сезона \"Ливерпуль\" выиграл Лигу Чемпионов в одном из самых захватывающих финалов в истории турнира.\r\n\r\n        Руководство клуба, в лице американских владельцев Джоржа Жиллетта и Тома Хикса, давило на Бенитеса с требованием немедленного успеха в Премьер-лиге. Раскол произошел, когда тренеру было отказано в средствах на усиление состава.\r\n\r\n        Летом 2010 года Бенитеса сменил Рой Ходжсон, которому за то непродолжительное время, что он пробыл у руля клуба, так не удалось завоевать любовь болельщиков. Клуб, тем временем, пытался разорвать все связи с американскими хозяевами.\r\n\r\n        В конце концов, благодаря усилиям президента клуба, Мартина Бротона, появился новый покупатель, и сделка по продаже \"Ливерпуля\" состоялась, несмотря на все судебные иски, пытавшиеся помешать ее осуществлению. В октябре 2010 клуб попрощался с Хиксом и Жиллеттом и встретил нового владельца, Джона Генри, чья компания NEVS уже имела успешный опыт работы с бостонской бейсбольной командой \"Ред Сокс\".\r\n\r\n        Ходжсон не надолго задержался в клубе, после ужасного начала сезона 2010/11, в январе он согласился покинуть свой пост, и его место временно занял Кенни Далглтш, чье имя к тому времени все чаще стали вспоминать болельщики.\r\n\r\n        Далглиш быстро вселил уверенность в команду, избавился от ненужных игроков, включая и спорный переход Фернандо Торреса в \"Челси\", приобрел Луиса Суареса и Энди Кэрролла для построения новой линии атаки. Клуб словно заново родился и взлетел на крыльях. В конце сезона Далглиш подписал с \"Ливерпулем\" трехлетний контракт.\r\n\r\n        Основной целью клуба было возвращение в Лигу Чемпионов, за свой первый полный сезон в клубе Далгдишу достичь ее не удалось, из-за достаточно нестабильных выступлений команды в Премьер-лиге. В итоге клуб финишировал на восьмом месте в таблице, ниже своего основного конкурента, \"Эвертона\".\r\n\r\n        Тем не менее, \"Ливерпуль\" хорошо проявил себя в кубковых соревнованиях. В феврале 2012 года \"красные\" выиграли Кубок Лиги, обыграв \"Кардифф\" в серии пенальти, благодаря чему получил путевку в Лигу Европы. А в мае \"Ливерпуль\" и \"Челси\" встретились в финале Кубка Англии, однако удача оказалась на стороне лондонского клуба.\r\n\r\n        Несмотря на успехи в кубковых турнирах, в конце сезона Далглиш был уволен, а его место занял молодой североирландский тренер, Брендан Роджерс, покоривший к тому времени всех своей работой с достаточно скромным \"Суонси Сити\".\r\n\r\n        Роджерс пришел с решимостью установить в клубе новую философию, привить команде новый стиль игры, при этом не теряя, как он утверждал, связи с историей. С собой из \"Суонси\" он захватил своих ассистентов и полузащитника Джо Аллена. Однако, из-за проводившегося в то время чемпионата Европы, тренер впервые увидел всю свою команду в сборе только к началу сезона. В сезоне 2012/13 \"Ливерпуль\" выступал крайне нестабильно, показав худший за последние сто лет старт сезона. Крупные победы сменяли неожиданные безвольные поражения. Во время зимнего трансферного окна Роджерсу удалось усилить команду двумя приобретениями: английским нападающим Дэниелом Старриджем и блазильцем Филлиппе Коутиньо. В итоге команда завершила сезон на седьмом месте, вновь ниже \"Эвертона\".\r\n\r\n        Зимой 2013 ветеран клуба Джейми Каррагер объявил о завершении своей карьеры на \"Энфилде\". 19 мая он провел свой последний официальный матч в красной футболке в победном для \"Ливерпуля\" матче против \"Куинз Парк Рейнджерс\".\r\n    </div><hr /><i>\r\n        Источник: lfconline.com\r\n        Перевод: tas-n-r\r\n    </i>\r\n</div>\r\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var RulesComponent = (function () {
	    function RulesComponent() {
	    }
	    RulesComponent = __decorate([
	        core_1.Component({
	            selector: "<rules>",
	            template: __webpack_require__(98)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RulesComponent);
	    return RulesComponent;
	}());
	exports.RulesComponent = RulesComponent;


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\r\n    <p><font color=\"red\"><b>Данные правила не подлежат обсуждению и обязательны для выполнения всеми без исключения пользователями портала рангом от простого пользователя до модератора (Администраторы - как лица, эти правила устанавливающие - поступают по своему усмотрению). Если вам не нравятся эти правила и вы хотите для себя другие правила - вы всегда можете создать свой собственный сайт и делать там все, что вам нравится.</b></font> </p>\r\n    <p>Правила вводятся для создания комфортной и конструктивной атмосферы общения. Если Вас не устраивает установленная форма общения, воздержитесь от участия в данной конференции.</p>\r\n    <p><b>I. Регистрация пользователей.</b></p>\r\n    <ol>\r\n        <li>Регистрируясь на форуме, пользователь соглашается выполнять данные Правила.</li>\r\n        <li>Для регистрации на форуме пользователь должен предоставить действующий адрес электронной почты. Мы гарантируем конфиденциальность указанной информации.</li>\r\n        <li>Выбор имени пользователя (nickname) является вашим исключительным правом. Администрация оставляет за собой право принять меры к прекращению использования nickname, если его использование нарушает общепринятые моральные и этические нормы или является оскорбительным для других пользователей форума. Запрещена регистрация nickname, схожих с уже существующими до степени, которые могут ввести в заблуждение других пользователей форума.</li>\r\n        <li>Запрещена неоднократная регистрация одним пользователем, вне зависимости от целей, с которыми такая регистрация проводится. Данное нарушение является крайне серьезным и ведет к блокированию всех учетных записей. Если вам не нравится ник, напишите в соответствующий раздел форума или администратору.</li>\r\n        <li>Если вы не проявляете активность на форуме в течение длительного времени, ваша учетная запись может быть удалена.</li>\r\n    </ol>\r\n    <p><b>II. На Форуме <font color=\"red\">запрещено</font>:</b></p>\r\n    <ol>\r\n        <li>Использовать ненормативную лексику в любых её проявлениях, в том числе сокращенную или замененную «звездочками» (или другими символами), на русском, английском языке, либо транслите. </li>\r\n        <li>Создавать темы, ранее обсуждавшиеся в Форуме. </li>\r\n        <li>Создавать сообщения, не имеющие отношения к обсуждаемой теме (оффтопик). </li>\r\n        <li>Создавать темы и сообщения, в которых более половины всей информации написано ЗАГЛАВНЫМИ БУКВАМИ. </li>\r\n        <li>Создавать темы, имеющие в названии украшения («===---Моя тема---===»), не отражающие суть вопроса («Посмотри сюда» или «fdgl;fjdgl;fdjglgfd»). </li>\r\n        <li>Создавать темы с обращением к конкретному участнику Форума. </li>\r\n        <li>Дублировать темы, то есть размещать одинаковые сообщения в разных разделах Форума. </li>\r\n        <li>Чрезмерное использование графических смайликов в сообщении (более трех подряд) или полностью состоящее только из смайлов. </li>\r\n        <li>Публикация постов, не несущих значительной смысловой нагрузки (флуд). Запрещается писать короткие бессмысленные посты типа \"ЖЖОШЬ\" или \"ПИШИ ЕЩО\", а также, состоящие из одних смайлов. </li>\r\n        <li>Использовать в сообщениях большое количество повторяющихся символов. </li>\r\n        <li>Использование в сообщениях красного цвета – это привилегия модераторов и администраторов. </li>\r\n        <li>Язык сайта-РУССКИЙ.Будьте добры,пишите на нем.Коверкание слов и преднамеренное извращение орфографии русского языка, а также использование латиницы (транслита). </li>\r\n        <li>Цитирование предыдущих сообщений, если в этом нет необходимости (флейм). </li>\r\n        <li>Использовать грубые, нецензурные выражения и оскорбления в любой форме. </li>\r\n        <li>Создавать темы и сообщения, содержащие рекламную, антирекламную или коммерческую информацию, а так же ссылки на сайты с целью повышения их посещаемости. </li>\r\n        <li>Продолжать обсуждать вопросы из тем, закрытых или удаленных администрацией. </li>\r\n        <li>Провоцировать конфликты с пользователями Форума. </li>\r\n        <li>Создавать темы и сообщения, противоречащие Конституции и законодательству РФ. </li>\r\n        <li>Использовать в качестве статуса или подписи нецензурные или ругательные слова, а так же заведомо недостоверную информацию. (Например, писать в статусе «Модератор», когда на самом деле Вы таковым не являетесь). </li>\r\n        <li>\r\n            Максимальный размер подписи должен быть не более 2-х строчек и не более 200 символов. Максимальный размер шрифта - \"2\". Подпись не должна содержать текста, выделенного красным цветом. Размер картинки в вашей подписи должен удовлетворять следующим требованиям:\r\n            - размер - не более 350х60 пикселей суммарно\r\n            - объем - не более 40 кб суммарно\r\n        </li>\r\n        <li>Использовать в качестве аватара, фотографии или в качестве вложение в сообщения картинки порнографического, экстремистского или оскорбительного характера. </li>\r\n        <li>Пропагандировать любые наркотические и психотропные вещества и образ жизни, связанный с употреблением данных веществ, а так же пропагандировать суицид, расовую и религиозную ненависть, фашизм и нацизм. </li>\r\n        <li>Использование заведомо похожих ников. </li>\r\n        <li>Выпрашивание прибавления репутации, а так же поднимать или снижать репутацию без причины. </li>\r\n        <li>Обсуждать действия администрации в разделах Форума. Если Вы недовольны действиями администрации, то высказывайте свои претензии в соответствии с п. 4.1-4.2 настоящих Правил. </li>\r\n        <li>Использовать ПС (Персональные Сообщения) для массовой рассылки информации любого рода (реклама, \"письма счастья\" и т.п.) </li>\r\n        <li>Нарушать авторские права (указывайте ссылки на АВТОРА (источник), откуда были взяты выложенные статьи) или хотя бы пишите, что авторство принадлежит не Вам. </li>\r\n        <li>Указание в имени пользователя, подписи, и других полях URL адресов коммерческих интернет-проектов, с целью рекламы и повышения индекса цитирования, за исключением особой договоренности с Администрацией портала. </li>\r\n        <li>Оскорбление игроков клуба,тренерского штаба,а также других клубов и их игроков.Выражение своей неприязни допустимо,но в рамках допустимого </li>\r\n\r\n        <li>Публично предъявлять претензии и обсуждать действия переводчиков и редакторов сайта. Пользователи ресурса, несогласные с публикациями переводов статей и материалов могут высказать своё несогласие в личном сообщении или в теме на форуме сайта - <b>Жалобы</b>. </li>\r\n    </ol>\r\n    <p><b>III. Общие рекомендации о советы. </b></p>\r\n    <ol>\r\n        <li>Не обращайте внимания на хулиганов. Не отвечайте им, даже если Вы считаете, что Вас оскорбили, не поддавайтесь на провокации. Достаточно сообщить администрации об оскорблении и виновные будут наказаны. </li>\r\n        <li>В том случае, если Вы считаете, что нарушены Правила Форума, постарайтесь сразу же сообщить об этом администрации Форума. </li>\r\n        <li>Старайтесь не использовать в сообщениях жаргон, т.к. некоторые пользователи могут не правильно его растолковать.</li>\r\n        <li>Постарайтесь не писать безосновательные утверждения, а так же сообщения типа «выкинь эту бяку, поставь хорошую вещь». Если это Ваше лично мнение, не забудьте сообщить об этом заранее – простого «ИМХО» (от англ. “imho”, что в переводе означает «по моему скромному мнению») будет достаточно. Помните, что после нескольких неаргументированных утверждений, пользователи просто перестанут Вам доверять. </li>\r\n        <li>Прежде чем создавать тему, убедитесь, что Вы создаете её в нужном Разделе Форума. Помните, что темы, не соответствующие тематике Раздела, будут либо удалены, либо перенесены в другой Раздел Форума. </li>\r\n        <li>Прочтите тему целиком! Посты в середине темы - \"А о чем это вы, а? \" или \"Так я не понял - откуда качать?\" запрещены. </li>\r\n        <li>Старайтесь не делать грамматических ошибок в сообщениях – это создаст негативное впечатление о вас.</li>\r\n    </ol>\r\n    <p><b>IV. Отношения между пользователями и администрацией.</b></p>\r\n    <ol>\r\n        <li>В своих действиях администрация форума руководствуется здравым смыслом и внутренними правилами управления форумом.</li>\r\n        <li>\r\n            Обсуждение действий администрации (администраторов и модераторов форума) категорически запрещается в любых форумах и темах, за исключением специализированного форума - <b>Жалобы</b>.<br>\r\n        </li>\r\n    </ol>\r\n    <p>Администрация оставляет за собой право изменять правила без уведомлением об этом пользователей форума. Все изменения и новации на форуме производятся с учетом мнений и интересов пользователей.</p>\r\n    <p align=\"right\"><b>С уважением, администрация сайта.</b></p>\r\n</div>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var admin_service_1 = __webpack_require__(100);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(101)
	        }), 
	        __metadata('design:paramtypes', [admin_service_1.AdminService, index_1.RolesCheckedService])
	    ], RightSidebarComponent);
	    return RightSidebarComponent;
	}());
	exports.RightSidebarComponent = RightSidebarComponent;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var index_1 = __webpack_require__(13);
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


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-xs-6 col-sm-3 container-fluid\" ui-view=\"rightContainer\">\r\n    <span class=\"col-sx-12\" *ngIf=\"roles.isAdminAssistant\"><a (click)=\"updateEplTable()\">Обновить таблицу</a></span>\r\n    <epl-table></epl-table>\r\n</div>";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(103);
	exports.forumSectionRoutes = [
	    { path: "forum", component: index_1.ForumSectionListComponent },
	];


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(104));
	__export(__webpack_require__(105));
	__export(__webpack_require__(106));


/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	var ForumSection = (function () {
	    function ForumSection() {
	    }
	    return ForumSection;
	}());
	exports.ForumSection = ForumSection;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var index_1 = __webpack_require__(13);
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


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forumSection_service_1 = __webpack_require__(105);
	var index_1 = __webpack_require__(13);
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
	            template: __webpack_require__(107)
	        }), 
	        __metadata('design:paramtypes', [forumSection_service_1.ForumSectionService, index_1.RolesCheckedService])
	    ], ForumSectionListComponent);
	    return ForumSectionListComponent;
	}());
	exports.ForumSectionListComponent = ForumSectionListComponent;


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"container-fluid\" *ngFor=\"let section of items\">\r\n        <div class=\"panel panel-danger\" *ngIf=\"section.subsections.length > 0 || roles.isAdminAssistant\">\r\n            <div class=\"panel-heading\">\r\n                <span [textContent]=\"section.name\"></span>\r\n                <span *ngIf=\"roles.isAdminAssistant\">\r\n                    <a href=\"\" ui-sref=\"subsectionEdit({sectionId: section.id})\">Добавить подсекцию</a>\r\n                    <a class=\"pull-right\" [hidden]=\"section.subsections.length != 0\" ng-click=\"vm.removeSection($index)\">\r\n                        <span class=\"glyphicon glyphicon-remove\">\r\n                        </span>\r\n                    </a>\r\n                </span>\r\n            </div>\r\n            <!--div class=\"panel-body\"></!--div>-->\r\n            <ul class=\"list-group\" *ngFor=\"let subsection of section.subsections\">\r\n                <li class=\"list-group-item list\">\r\n                    <a ui-sref=\"subsection({id: subsection.id})\">\r\n                        <span [textContent]=\"subsection.name\"></span>\r\n                        <span class=\"small\" [textContent]=\"subsection.description\"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <a ng-click=\"vm.addSection()\">Добавить секцию</a>\r\n\r\n</div>\r\n\r\n<script type=\"text/ng-template\" id=\"addSection.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.AddSection</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" name=\"addSection\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label for=\"newSectionName\" class=\"col-md-2 control-label\">@ColonsMessages.SectionName</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" name=\"newSectionName\" ng-model=\"vm.sectionName\" validation=\"required\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-disabled=\"addSection.$invalid\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Add</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n\r\n<script type=\"text/ng-template\" id=\"modalDeleteConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.DeleteConfirmation</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        @CommonMessages.Delete?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Delete</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(109);
	exports.wishRoutes = [
	    { path: "wish", component: index_1.WishListComponent },
	    { path: "wish/:id/edit", component: index_1.WishEditComponent }
	];


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(110));
	__export(__webpack_require__(111));
	__export(__webpack_require__(112));
	__export(__webpack_require__(115));
	__export(__webpack_require__(113));


/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";
	var Wish = (function () {
	    function Wish() {
	    }
	    return Wish;
	}());
	exports.Wish = Wish;


/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";
	var WishType = (function () {
	    function WishType() {
	    }
	    return WishType;
	}());
	exports.WishType = WishType;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var wish_service_1 = __webpack_require__(113);
	var router_1 = __webpack_require__(10);
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
	            template: __webpack_require__(114)
	        }), 
	        __metadata('design:paramtypes', [wish_service_1.WishService, router_1.ActivatedRoute])
	    ], WishListComponent);
	    return WishListComponent;
	}());
	exports.WishListComponent = WishListComponent;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <!--<input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" />--> <!--todo magic number-->\r\n            </div>\r\n            <button class=\"btn btn-success\" [routerLink]=\"['/wish', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let wish of items; let i = index;\">\r\n        <div class=\"panel\" [ngClass]=\"getTypeClass(wish.type)\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/wish', wish.id, 'edit']\">\r\n                        <span [textContent]=\"wish.title\"></span>\r\n                    </a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" secured=\"AdminFull\">\r\n                        <a ng-click=\"vm.delete(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"wish.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"wish.typeName\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></!--uib-pagination-->\r\n</div>";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var wish_model_1 = __webpack_require__(110);
	var wish_service_1 = __webpack_require__(113);
	var router_1 = __webpack_require__(10);
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
	            template: __webpack_require__(116)
	        }), 
	        __metadata('design:paramtypes', [wish_service_1.WishService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
	    ], WishEditComponent);
	    return WishEditComponent;
	}());
	exports.WishEditComponent = WishEditComponent;


/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"editWish\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['message']\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2 col-sm-2\">Тип:</label>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <!--<select class=\"form-control\" name=\"newsCategoryId\" [formControl]=\"editForm.controls['type']\"></select>-->\r\n            <select [formControl]=\"editForm.controls['type']\">\r\n                <option [value]=\"type.id\" *ngFor=\"let type of types\" [textContent]=\"type.name\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Создать</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(118);
	exports.materialCommentRoutes = [
	    { path: "materialComment", component: index_1.MaterialCommentListComponent },
	    { path: "materialComment/list", component: index_1.MaterialCommentListComponent },
	    { path: "materialComment/list/:page", component: index_1.MaterialCommentListComponent },
	    { path: "materialComment/list/:page/:categoryId", component: index_1.MaterialCommentListComponent },
	];


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(119));
	__export(__webpack_require__(120));
	__export(__webpack_require__(121));
	__export(__webpack_require__(123));
	__export(__webpack_require__(125));


/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	var MaterialComment = (function () {
	    function MaterialComment() {
	    }
	    return MaterialComment;
	}());
	exports.MaterialComment = MaterialComment;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var materialComment_service_1 = __webpack_require__(121);
	var common_1 = __webpack_require__(30);
	var index_1 = __webpack_require__(13);
	var ng2_bootstrap_1 = __webpack_require__(27);
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
	            template: __webpack_require__(122)
	        }), 
	        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
	    ], MaterialCommentListComponent);
	    return MaterialCommentListComponent;
	}());
	exports.MaterialCommentListComponent = MaterialCommentListComponent;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <!--div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!--todo magic number->\r\n            </div>\r\n            <button class=\"btn btn-success\" ui-sref=\"wishEdit()\">Добавить</button>\r\n        </form>\r\n    </div-->\r\n    <div class=\"top20\" *ngFor=\"let comment of items; let i = index;\">\r\n        <div class=\"panel\" ng-class=\"\">\r\n            <div class=\"panel-heading panel-default\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/user', comment.authorId]\"><span [textContent]=\"comment.authorUserName\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" *ngIf=\"roles.isModerator\">\r\n                        <a [hidden]=\"comment.isVerified\" (click)=\"verify(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"comment.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"comment.additionTime | date:'medium'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var materialComment_model_1 = __webpack_require__(119);
	var materialComment_service_1 = __webpack_require__(121);
	var common_1 = __webpack_require__(30);
	var index_1 = __webpack_require__(13);
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


/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div>Комментарии: <span [textContent]=\"items.length\"></span></div>\r\n\r\n<div class=\"\" *ngFor=\"let comment of items\">\r\n    <materialComment-detail [item]=\"comment\" [deep]=\"0\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\"></materialComment-detail>\r\n</div>\r\n\r\n<form class=\"form-horizontal\" role=\"form\" [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n    <div class=\"col-md-12\" *ngIf=\"canCommentary && roles.isLogined\">\r\n        <div class=\"col-md-12\">\r\n            <textarea mark-it-up class=\"col-md-offset-2 col-md-8\" rows=\"6\" name=\"message\" [formControl]=\"commentForm.controls['message']\"></textarea>\r\n        </div>\r\n        <div class=\"\">\r\n            <button class=\"btn btn-primary center-block\" [disabled]=\"!commentForm.valid\" type=\"submit\">Добавить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items && totalItems > itemsPerPage\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(30);
	var materialComment_model_1 = __webpack_require__(119);
	var materialComment_service_1 = __webpack_require__(121);
	var index_1 = __webpack_require__(13);
	var ng2_bootstrap_1 = __webpack_require__(27);
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
	            template: __webpack_require__(126)
	        }), 
	        __metadata('design:paramtypes', [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService, forms_1.FormBuilder])
	    ], MaterialCommentDetailComponent);
	    return MaterialCommentDetailComponent;
	}());
	exports.MaterialCommentDetailComponent = MaterialCommentDetailComponent;


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-xs-offset-{{deep}} col-sm-offset-{{deep}} comment container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <a [routerLink]=\"['/user', item.authorId]\" [textContent]=\"item.authorUserName\"></a>\r\n            <span class=\"small\" [textContent]=\"item.additionTime | date:'medium'\"></span>\r\n        </div>\r\n        <div class=\"col-xs-3 col-sm-3\">\r\n            <span class=\"pull-right\">\r\n                    <a *ngIf=\"roles.isModerator || roles.isSelf(item.authorId)\" (click)=\"showEditModal()\"><span class=\"glyphicon glyphicon-pencil\"> </span></a>\r\n                    <a *ngIf=\"roles.isModerator\" (click)=\"delete()\"><span class=\"glyphicon glyphicon-trash\"> </span></a>\r\n                </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar-medium\" src=\"{{item.photo}}\" alt=\"{{item.authorUserName}}\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <p [textContent]=\"item.message\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"item.answer\">\r\n        <div class=\"col-xs-3 col-sm-3\">Ответ:</div>\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <i [textContent]=\"item.answer\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12\" *ngIf=\"!roles.isSelf(item.authorId) && canCommentary\">\r\n        <a (click)=\"showAddCommentModal()\">Ответить</a>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let child of item.children\">\r\n    <materialComment-detail [item]=\"child\" [deep]=\"deep > 6 ? 7 : deep+1\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\" [parent]=\"item\"></materialComment-detail>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #addCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Добавить комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"addComment()\">Добавить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #editCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Редактировать комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n                </div>\r\n                <div *ngIf=\"roles.isEditor\">\r\n                    <textarea [formControl]=\"commentForm.controls['answer']\"></textarea>\r\n                </div>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"edit()\">Обновить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(128);
	exports.matchRoutes = [
	    { path: "match/:id/edit", component: index_1.MatchEditComponent },
	    { path: "match", component: index_1.MatchListComponent }
	];


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(129));
	__export(__webpack_require__(130));
	__export(__webpack_require__(132));


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	__webpack_require__(26);
	var app_constants_1 = __webpack_require__(20);
	var httpWrapper_1 = __webpack_require__(15);
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


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var match_service_1 = __webpack_require__(129);
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
	            template: __webpack_require__(131)
	        }), 
	        __metadata('design:paramtypes', [match_service_1.MatchService, router_1.ActivatedRoute])
	    ], MatchListComponent);
	    return MatchListComponent;
	}());
	exports.MatchListComponent = MatchListComponent;


/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!-todo magic number->\r\n            </div>-->\r\n            <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['/match', 0, 'edit' ]\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a ui-sref=\"clubEdit({id: item.id})\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a ng-click=\"vm.delete($index)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--<uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></uib-pagination>-->\r\n</div>";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(10);
	var index_1 = __webpack_require__(128);
	var index_2 = __webpack_require__(66);
	var match_model_1 = __webpack_require__(133);
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
	            template: __webpack_require__(134)
	        }), 
	        __metadata('design:paramtypes', [index_1.MatchService, index_2.ClubService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
	    ], MatchEditComponent);
	    return MatchEditComponent;
	}());
	exports.MatchEditComponent = MatchEditComponent;


/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";
	var Match = (function () {
	    function Match() {
	    }
	    return Match;
	}());
	exports.Match = Match;


/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-md-2\">Cоперник</label>\r\n            <div class=\"col-md-10\">\r\n                <!--<autocomplete ng-model=\"vm.item.clubName\" name=\"clubName\" attr-placeholder=\"Введите клуб...\" click-activation=\"true\" data=\"vm.clubs\"\r\n                                  on-type=\"vm.updateClubs\" validation=\"max_len:30|required\"></autocomplete>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" ng-model=\"vm.item.typeId\" ng-options=\"type.id as type.name for type in vm.types\" validation=\"required\"></select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" formControlName=\"isHome\" type=\"checkbox\" /> Дома <!--todo add switcher--> \r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата</label>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<input type=\"text\" class=\"form-control\" validation=\"required\" name=\"date\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" ng-model=\"vm.item.date\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\" ng-click=\"vm.open()\">-->\r\n                    <span class=\"input-group-btn va-top\">\r\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<div uib-timepicker ng-model=\"vm.item.time\" ng-change=\"vm.timeChanged()\"\r\n                         hour-step=\"1\" minute-step=\"1\" show-meridian=\"false\" show-spinners=\"false\" ng-disabled=\"!vm.item.date\"></div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n";

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = require("ng2-auto-complete");

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(100));
	__export(__webpack_require__(137));


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var EplTableComponent = (function () {
	    function EplTableComponent() {
	    }
	    EplTableComponent.prototype.ngOnInit = function () {
	    };
	    EplTableComponent = __decorate([
	        core_1.Component({
	            selector: "epl-table",
	            template: __webpack_require__(138)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EplTableComponent);
	    return EplTableComponent;
	}());
	exports.EplTableComponent = EplTableComponent;


/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-condensed table-striped table-responsive col-xs-12 overflowable\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Команда</th>\r\n            <th>И</th>\r\n            <th>В</th>\r\n            <th>Н</th>\r\n            <th>П</th>\r\n            <th>+/-</th>\r\n            <th>О</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody><tr><td>1</td><td>Ливерпуль\r\n</td><td>11</td><td>8</td><td>2</td><td>1</td><td>16</td><td>26</td></tr>\r\n<tr><td>2</td><td>Челси\r\n</td><td>11</td><td>8</td><td>1</td><td>2</td><td>17</td><td>25</td></tr>\r\n<tr><td>3</td><td>Манчестер Сити\r\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>15</td><td>24</td></tr>\r\n<tr><td>4</td><td>Арсенал\r\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>13</td><td>24</td></tr>\r\n<tr><td>5</td><td>Тоттенхэм\r\n</td><td>11</td><td>5</td><td>6</td><td>0</td><td>9</td><td>21</td></tr>\r\n<tr><td>6</td><td>Манчестер Юнайтед\r\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>3</td><td>18</td></tr>\r\n<tr><td>7</td><td>Эвертон\r\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>2</td><td>18</td></tr>\r\n<tr><td>8</td><td>Уотфорд\r\n</td><td>11</td><td>4</td><td>3</td><td>4</td><td>-4</td><td>15</td></tr>\r\n<tr><td>9</td><td>Бернли\r\n</td><td>11</td><td>4</td><td>2</td><td>5</td><td>-4</td><td>14</td></tr>\r\n<tr><td>10</td><td>Саутгемптон\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>0</td><td>13</td></tr>\r\n<tr><td>11</td><td>Вест Бромвич\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-3</td><td>13</td></tr>\r\n<tr><td>12</td><td>Сток Сити\r\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-5</td><td>13</td></tr>\r\n<tr><td>13</td><td>Борнмут\r\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-3</td><td>12</td></tr>\r\n<tr><td>14</td><td>Лестер\r\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-5</td><td>12</td></tr>\r\n<tr><td>15</td><td>Мидлсбро\r\n</td><td>11</td><td>2</td><td>5</td><td>4</td><td>-2</td><td>11</td></tr>\r\n<tr><td>16</td><td>Кристал Пэлас\r\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-3</td><td>11</td></tr>\r\n<tr><td>17</td><td>Вест Хэм\r\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-9</td><td>11</td></tr>\r\n<tr><td>18</td><td>Халл\r\n</td><td>11</td><td>3</td><td>1</td><td>7</td><td>-14</td><td>10</td></tr>\r\n<tr><td>19</td><td>Суонси\r\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-11</td><td>5</td></tr>\r\n<tr><td>20</td><td>Сандерленд\r\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-12</td><td>5</td></tr>\r\n</tbody></table>";

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGMwYzZjYTFhNmE1OGVjNjMzMzIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbC1zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaHR0cFdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3NlY3VyZWQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvZ2xvYmFsVmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzRmlsdGVycy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvc2lnbnVwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Mucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0ucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ob21lLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2FkbWluLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaFR5cGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWF1dG8tY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9CLENBQUM7QUFDekQsd0NBQTBCLENBQWtCLENBQUM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLFFBQVEsRUFBRSxhQUFhO2NBQzFCO2FBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztpQkFFdEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztVQUNKLENBQUMsQ0FBQztTQUVILE1B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Q0FBQztxQkFDaEMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQztxQkFDOUIsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQzdCLENBQUMsQ0FBQztLQUNQLENBQUM7S0FFTyx1Q0FBVSxHQUFsQixVQUFtQixLQUFhO1NBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCLENBQUM7S0F2Rkw7U0FBQyxnQkFBUyxDQUFDO2FBQ1AsUUFBUSxFQUFFLFlBQVk7YUFDdEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsR0FBNkIsQ0FBQztVQUNuRCxDQUFDOzsyQkFBQTtLQXFGRix5QkFBQztBQUFELEVBQUM7QUFuRlksMkJBQWtCLHFCQW1GOUI7Ozs7Ozs7O0FDakdEO0tBQUE7S0FRQSxDQUFDO0tBQUQsWUFBQztBQUFELEVBQUM7QUFSWSxjQUFLLFFBUWpCOzs7Ozs7O0FDUkQsc2xHOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLDhCQUFjLEdBQWlCLENBQUM7QUFDaEMsOEJBQWMsR0FBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckMsa0NBQWtDLENBQWUsQ0FBQztBQVlsRDtLQUVJO0tBQ0EsQ0FBQztLQUVELG9DQUFRLEdBQVI7S0FVQSxDQUFDO0tBckJMO1NBQUMsZ0JBQVMsQ0FBQzthQUNQLFFBQVEsRUFBRSxXQUFXO2FBRXJCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQTJCLENBQUM7VUFDakQsQ0FBQzs7MEJBQUE7S0FrQkYsd0JBQUM7QUFBRCxFQUFDO0FBaEJZLDBCQUFpQixvQkFnQjdCOzs7Ozs7O0FDNUJELDRoRiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qc1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjMGM2Y2ExYTZhNThlYzYzMzMyIiwiaW1wb3J0IFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiO1xyXG5pbXBvcnQgXCJ6b25lLmpzXCI7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjsgXHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSk6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IFwiPGFwcD48L2FwcD5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbi8vaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVGl0bGUsIEJyb3dzZXJNb2R1bGUsIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlLCBOT0RFX0hUVFBfUFJPVklERVJTIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zaGFyZWQvbG9jYWwtc3RvcmFnZVwiOyAgICAgXHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyByb3V0aW5nLCBhcHBSb3V0aW5nUHJvdmlkZXJzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBOZXdzRWRpdENvbXBvbmVudCwgTmV3c0RldGFpbENvbXBvbmVudCwgTmV3c0xpc3RDb21wb25lbnQsIE5ld3NTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3cy9pbmRleFwiOyAgICAgICAgICAgICBcclxuaW1wb3J0ICogYXMgbmV3c0NhdGVnb3J5IGZyb20gXCIuL25ld3NDYXRlZ29yeS9pbmRleFwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQsIEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9pbmRleFwiO1xyXG5pbXBvcnQgeyBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50LCBGb3J1bVNlY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZm9ydW1TZWN0aW9uL2luZGV4XCI7IFxyXG5pbXBvcnQgKiBhcyBhY2NvdW50IGZyb20gXCIuL2FjY291bnQvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgY2x1YiBmcm9tIFwiLi9jbHViL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIG1hdGNoIGZyb20gXCIuL21hdGNoL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tIFwiLi9zaGFyZWQvaW5kZXhcIjsgICAgICAgICAgICAgICAgICAgICBcclxuaW1wb3J0IHsgVXNlckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi91c2VyL3VzZXItbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUG1MaXN0Q29tcG9uZW50LCBQbURldGFpbENvbXBvbmVudCwgUG1FZGl0Q29tcG9uZW50LCBQbVNlcnZpY2UgfSBmcm9tIFwiLi9wbS9pbmRleFwiO1xyXG5pbXBvcnQgeyBDbHViSGlzdG9yeUNvbXBvbmVudCwgUnVsZXNDb21wb25lbnQsIFJpZ2h0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaW5kZXhcIjtcclxuaW1wb3J0IHsgV2lzaExpc3RDb21wb25lbnQsIFdpc2hTZXJ2aWNlLCBXaXNoRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3dpc2gvaW5kZXhcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCwgTWF0ZXJpYWxDb21tZW50U2VydmljZSwgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCwgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50L2luZGV4XCI7XHJcbmltcG9ydCB7IE5nMkF1dG9Db21wbGV0ZU1vZHVsZSB9IGZyb20gXCJuZzItYXV0by1jb21wbGV0ZVwiO1xyXG5pbXBvcnQgeyBBZG1pblNlcnZpY2UsIEVwbFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRtaW4vaW5kZXhcIjtcclxuaW1wb3J0IHsgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsIFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsICAgICAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgTmdNb2R1bGUsIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXSxcclxuICAgICAgICBEYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgLy8gICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgTW9kYWxNb2R1bGUsXHJcbiAgICAgICAgTmcyQXV0b0NvbXBsZXRlTW9kdWxlLFxyXG4gICAgICAgIFBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICByb3V0aW5nXHJcbiAgICBdLCBcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIGFjY291bnQuQWNjb3VudFNpZ25pbkNvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LkFjY291bnRTaWdudXBDb21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LkNvbmZpcm1FbWFpbENvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuUmVzZXRQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LlVuY29uZmlybWVkRW1haWxDb21wb25lbnQsXHJcbiAgICAgICAgY2x1Yi5DbHViRWRpdENvbXBvbmVudCxcclxuICAgICAgICBjbHViLkNsdWJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIHNoYXJlZC5TZWN1cmVkRGlyZWN0aXZlLFxyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBDbHViSGlzdG9yeUNvbXBvbmVudCxcclxuICAgICAgICBFcGxUYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIG1hdGNoLk1hdGNoRWRpdENvbXBvbmVudCxcclxuICAgICAgICBtYXRjaC5NYXRjaExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOZXdzTGlzdENvbXBvbmVudCxcclxuICAgICAgICBOZXdzRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIE5ld3NFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIFBtRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFBtRWRpdENvbXBvbmVudCxcclxuICAgICAgICBQbUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgUmlnaHRTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgICAgIFJ1bGVzQ29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgVXNlckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgV2lzaEVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgV2lzaExpc3RDb21wb25lbnRdLCAgIC8vIGNvbXBvbmVudHMgYW5kIGRpcmVjdGl2ZXNcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sICAgICAvLyByb290IGNvbXBvbmVudFxyXG4gICAgcHJvdmlkZXJzOiBbIC8vIHNlcnZpY2VzXHJcbiAgICAgICAgYWNjb3VudC5BY2NvdW50U2VydmljZSwgXHJcbiAgICAgICAgY2x1Yi5DbHViU2VydmljZSxcclxuICAgICAgICBtYXRjaC5NYXRjaFNlcnZpY2UsXHJcbiAgICAgICAgbmV3c0NhdGVnb3J5Lk5ld3NDYXRlZ29yeVNlcnZpY2UsXHJcbiAgICAgICAgc2hhcmVkLkh0dHBXcmFwcGVyLFxyXG4gICAgICAgIHNoYXJlZC5HbG9iYWxWYWxpZGF0b3JzLFxyXG4gICAgICAgIHNoYXJlZC5Mb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHNoYXJlZC5Sb2xlc0NoZWNrZWRTZXJ2aWNlLFxyXG4gICAgICAgIEFkbWluU2VydmljZSxcclxuICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzLFxyXG4gICAgICAgIEF1dGhHdWFyZCxcclxuICAgICAgICBBdXRoU2VydmljZSxcclxuICAgICAgICBDb25maWd1cmF0aW9uLFxyXG4gICAgICAgIEZvcnVtU2VjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiBMb2NhbFN0b3JhZ2UsIHVzZUZhY3Rvcnk6ICgpID0+ICh3aW5kb3cpID8gd2luZG93LmxvY2FsU3RvcmFnZSA6IHt9fSxcclxuICAgICAgICBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIE5ld3NTZXJ2aWNlLFxyXG4gICAgICAgIFBtU2VydmljZSxcclxuICAgICAgICBUaXRsZSxcclxuICAgICAgICBVc2VyU2VydmljZSxcclxuICAgICAgICBXaXNoU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBPcGFxdWVUb2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0gbmV3IE9wYXF1ZVRva2VuKFwibG9jYWxTdG9yYWdlXCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbC1zdG9yYWdlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSb2xlcyB9IGZyb20gXCIuL3NoYXJlZC9yb2xlcy5pbnRlcmZhY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7IC8vdG9kbyBuZWVkIHRvIG1vcmUgZWxlZ2FudCBkZWNpc2lvblxyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgLy8gWW91IG5lZWQgdGhpcyBzbWFsbCBoYWNrIGluIG9yZGVyIHRvIGNhdGNoIGFwcGxpY2F0aW9uIHJvb3QgdmlldyBjb250YWluZXIgcmVmXHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjsgXHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JPQu9Cw0LLQvdCw0Y9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBIdHRwV3JhcHBlciwgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjsgXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgaXNMb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcm9sZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgaHR0cDE6IEh0dHAsIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkU2VydmljZTogUm9sZXNDaGVja2VkU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7ICBcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc0FjY2Vzc1Rva2VuKCkpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucm9sZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0Um9sZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGxvY2FsU3RvcmFnZS5nZXRVc2VySWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlUm9sZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcclxuXHJcbiAgICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04O1wiKTtcclxuICAgICAgICBsZXQgcGVyYW1zID0gYGdyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH0mY2xpZW50X2lkPWNsaWVudF9pZDNgO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAxLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLlNlcnZlciArIFwiY29ubmVjdC90b2tlblwiLFxyXG4gICAgICAgICAgICAgICAgcGVyYW1zLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlTG9naW5BbnN3ZXIoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLl9ib2R5ID09PSBcInVuY29uZmlybWVkX2VtYWlsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3VuY29uZmlybWVkRW1haWxcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFVzZXJJZCgpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gICAgICBcclxuXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlQXV0aFRva2VucygpO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9sZXNDaGVja2VkU2VydmljZS5jaGVja1JvbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNVc2VySW5Sb2xlKHJvbGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJvbGVzLmZpbmQoeCA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHJvbGUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlTG9naW5BbnN3ZXIoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlLnNldEF1dGhUb2tlbnMoaXRlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVJvbGVzKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSBpdGVtLl9ib2R5LnNwbGl0KFwiLCBcIik7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0Um9sZXModGhpcy5yb2xlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb2xlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJyb2xlXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUm9sZXMoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yb2xlc0NoZWNrZWRTZXJ2aWNlLmNoZWNrUm9sZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVc2VySWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwidXNlci9nZXRJZFwiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5pZCA9ICtKU09OLnBhcnNlKGRhdGEudGV4dCgpKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRVc2VySWQodGhpcy5pZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Um9sZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gXCIuL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBXcmFwcGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlXCI7ICBcclxuZXhwb3J0ICogZnJvbSBcIi4vc2VjdXJlZC5kaXJlY3RpdmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm9sZXMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvbGVzLWNoZWNrZWQuc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbG9iYWxWYWxpZGF0b3JzXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwiZXhwb3J0IGNsYXNzIFBhZ2VhYmxlPFQ+IHtcclxuICAgIGxpc3Q6IFRbXTtcclxuICAgIHBhZ2VObzogbnVtYmVyO1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgaXRlbVBlclBhZ2U6IG51bWJlcjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9wYWdlYWJsZS5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwV3JhcHBlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICAgICAgLCBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICB1cGRhdGVIZWFkZXJzKCk6IEhlYWRlcnMge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlLmhhc0FjY2Vzc1Rva2VuKCkpIHtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5nZXRBY2Nlc3NUb2tlbldpdGhUeXBlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBnZXQodXJsKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuaHR0cC5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMudXBkYXRlSGVhZGVycygpLFxyXG4gICAgICAgICAgICBib2R5OiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy51cGRhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHVybCwgZGF0YSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy51cGRhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodXJsKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMudXBkYXRlSGVhZGVycygpLFxyXG4gICAgICAgICAgICBib2R5OiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaHR0cFdyYXBwZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNCcm93c2VyLCBpc05vZGUgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7ICAgICAgICAgICBcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2UgeyBcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBTdG9yYWdlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKGlzQnJvd3NlciAmJiAhbG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IExvY2FsIFN0b3JhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQWNjZXNzVG9rZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY2Vzc1Rva2VuV2l0aFR5cGUoKTogc3RyaW5nIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldChcInRva2VuX3R5cGVcIil9ICR7dGhpcy5nZXQoXCJhY2Nlc3NfdG9rZW5cIil9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb2xlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0KFwicm9sZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcklkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICt0aGlzLmdldChcInVzZXJJZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVSb2xlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInJvbGVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUF1dGhUb2tlbnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJ0b2tlbl90eXBlXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwiZXhwaXJlc19pblwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInJlZnJlc2hfdG9rZW5cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJyb2xlc1wiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInVzZXJJZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdXRoVG9rZW5zKGl0ZW06IGFueSk6IGJvb2xlYW4geyAgICAvL3RvZG8gc2V0IHR5cGUgaGVyZSBhbmQgYmVsb3dcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGl0ZW0uX2JvZHkpO1xyXG4gICAgICAgIHRoaXMuc2V0KFwidG9rZW5fdHlwZVwiLCByZXNwb25zZS50b2tlbl90eXBlKTtcclxuICAgICAgICB0aGlzLnNldChcImFjY2Vzc190b2tlblwiLCByZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIHRoaXMuc2V0KFwiZXhwaXJlc19pblwiLCByZXNwb25zZS5leHBpcmVzX2luKTtcclxuICAgICAgICB0aGlzLnNldChcInJlZnJlc2hfdG9rZW5cIiwgcmVzcG9uc2UucmVmcmVzaF90b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um9sZXMocm9sZXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0T2JqZWN0KFwicm9sZXNcIiwgcm9sZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJZChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0T2JqZWN0KFwidXNlcklkXCIsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnlBZGRWaWV3Rm9yTmV3cyhpZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5nZXQoYG1hdGVyaWFsJHtpZH1gKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChgbWF0ZXJpYWwke2lkfWAsIFwiMVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm4gXCJcIjtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm47XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2xvY2FsU3RvcmFnZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogXCJbc2VjdXJlZF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJlZERpcmVjdGl2ZSB7XHJcbiAgICBASG9zdEJpbmRpbmcoXCJoaWRkZW5cIilcclxuICAgIGhpZGVSb3V0ZXJMaW5rOiBib29sZWFuO1xyXG4gICAgcm91dGVyTGluazogYW55O1xyXG4gICAgQElucHV0KCkgc2VjdXJlZDogYW55O1xyXG5cclxuICAgIHJvdXRlUGFyYW1zOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgLy8gICB0aGlzLmF1dGhTZXJ2aWNlLnVzZXJTaWdudXAkLnN1YnNjcmliZShpdGVtID0+IHRoaXMuY2hlY2tSaWdodHMoKSk7XHJcbiAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnVzZXJTaWdudXAkLnN1YnNjcmliZShpdGVtID0+IHRoaXMuY2hlY2tSaWdodHMoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vICAgIHZhciBpbnN0cnVjdGlvbiA9IHRoaXMucm91dGVyLmdlbmVyYXRlKHRoaXMucm91dGVQYXJhbXMpO1xyXG4gICAgLy8gICAgdmFyIGRhdGEgPSBpbnN0cnVjdGlvbi5jb21wb25lbnQucm91dGVEYXRhLmRhdGE7XHJcbiAgICAvLyAgICB0aGlzLmhpZGVSb3V0ZXJMaW5rID0gdGhpcy5zaG91bGRCZUhpZGRlbihkYXRhKTtcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdXJlZCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZygxKTtmXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gaG93IHRvIGdldCBhY2Nlc3MgdG8gdGhpcyBwcml2YXRlIHZhcmlhYmxlP1xyXG4gICAgIC8vICAgY29uc29sZS5sb2codGhpcy5yb3V0ZXJMaW5rLl9uYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uY29tcG9uZW50LnJvdXRlRGF0YS5kYXRhKTtcclxuICAgICAgICB0aGlzLmNoZWNrUmlnaHRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1JpZ2h0cygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlY3VyZWQpIHtcclxuICAgICAgICAgICAvLyByZXN1bHQgPSB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAvLyByZXN1bHQgPSB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckluUm9sZSh0aGlzLnNlY3VyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICBsZXQgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9zZWN1cmVkLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiOyBcclxuaW1wb3J0IHsgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvbGVzQ2hlY2tlZFNlcnZpY2Uge1xyXG5cclxuICAgIGNoZWNrZWRSb2xlczogSVJvbGVzID0ge1xyXG4gICAgICAgIGlzTG9naW5lZDogZmFsc2UsXHJcbiAgICAgICAgaXNFZGl0b3I6IGZhbHNlLFxyXG4gICAgICAgIGlzTmV3c21ha2VyOiBmYWxzZSxcclxuICAgICAgICBpc01vZGVyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgaXNNYWluTW9kZXJhdG9yOiBmYWxzZSxcclxuICAgICAgICBpc0FkbWluQXNzaXN0YW50OiBmYWxzZSxcclxuICAgICAgICBpc1NlbGY6IHVzZXJJZCA9PiB0aGlzLmlzU2VsZih1c2VySWQpXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSByb2xlczogc3RyaW5nW107ICAgICAgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1JvbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tSb2xlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0Um9sZXMoKTtcclxuICAgICAgICBpZiAoIXRoaXMucm9sZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrRWRpdG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja05ld3NtYWtlcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNb2RlcmF0b3IoKTtcclxuICAgICAgICB0aGlzLmNoZWNrTWFpbk1vZGVyYXRvcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBZG1pbkFzc2lzdGFudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tFZGl0b3IoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJOZXdzRnVsbFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc0VkaXRvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tOZXdzbWFrZXIoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJOZXdzU3RhcnRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNOZXdzbWFrZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrTW9kZXJhdG9yKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiVXNlclN0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTW9kZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja01haW5Nb2RlcmF0b3IoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJVc2VyRnVsbFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc01haW5Nb2RlcmF0b3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQWRtaW5Bc3Npc3RhbnQoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJBZG1pblN0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzQWRtaW5Bc3Npc3RhbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUm9sZShyb2xlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlcy5maW5kKHggPT4geC50b0xvd2VyQ2FzZSgpID09PSByb2xlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWxmKGF1dGhvcklkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgcmV0dXJuICh1c2VySWQgPT09IGF1dGhvcklkKTsgICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3JvbGVzLWNoZWNrZWQuc2VydmljZS50cyIsImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxWYWxpZGF0b3JzIHtcclxuXHJcbiAgICBzdGF0aWMgbWFpbEZvcm1hdChjb250cm9sOiBGb3JtQ29udHJvbCk6IElWYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgICAgICBjb25zdCBFTUFJTF9SRUdFWFAgPSAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xyXG5cclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gXCJcIiAmJiAoY29udHJvbC52YWx1ZS5sZW5ndGggPD0gNSB8fCAhRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IFwiaW5jb3JyZWN0TWFpbEZvcm1hdFwiOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAoZ3JvdXA6IEZvcm1Hcm91cCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XHJcbiAgICAgICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIElWYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvZ2xvYmFsVmFsaWRhdG9ycy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBwdWJsaWMgU2VydmVyOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTY2OS9cIjtcclxuICAgIHB1YmxpYyBBcGlVcmw6IHN0cmluZyA9IFwiYXBpL3YxL1wiO1xyXG4gICAgcHVibGljIFNlcnZlcldpdGhBcGlVcmwgPSB0aGlzLlNlcnZlciArIHRoaXMuQXBpVXJsO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgbmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3AgXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBjb2wteHMtMyBjb2wtc20tMyBsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICA8bGk+PGEgaWQ9XFxcImJhY2stdG9wXFxcIiBocmVmPVxcXCIjXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiPtCS0LLQtdGA0YU8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L3NwYW4+INCn0LjRgtCw0YLRjCDQuy/RgSA8IS0tKDxzcGFuIG5nLWJpbmQ9XFxcInZtLnVucmVhZFBtQ291bnRcXFwiPjwvc3Bhbj4pLS0+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCIhYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YWNjb3VudC1zaWduaW4+PC9hY2NvdW50LXNpZ25pbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZm9yZ290UGFzc3dvcmQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnblxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJib3R0b21cXFwiIHRpdGxlPVxcXCLQl9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMP1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2lnbnVwJ11cXFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCJhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwidXNlckluZm8oe2lkOiB2bS51c2VySWQoKX0pXFxcIiBjbGFzcz1cXFwicGFkZGluZzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcIm5hdi1hdmF0YXJcXFwiIG5nLXNyYz1cXFwieyRyb290LnVzZXJJbWFnZX19XFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcInVzZXJJbmZvKHtpZDogdm0udXNlcklkKCl9KVxcXCI+0JzQvtC5INC/0YDQvtGE0LjQu9GMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+0JLRi9C50YLQuDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIHRvcDUwXFxcIj5cXHJcXG4gICAgPGhlYWRlciBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1zdGF0aWMtdG9wIHJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIi5uYXZiYXItY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvJ11cXFwiIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPtCd0LDQt9Cy0LDQvdC40LUg0YHQsNC50YLQsDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvJ11cXFwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gQGlmIChVc2VyLklzSW5Sb2xlKFxcXCJBZG1pbkZ1bGxcXFwiKSlcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICA8bGk+IEBIdG1sLkFjdGlvbkxpbmsoQ29tbW9uTWVzc2FnZXMuUm9sZXMsIFxcXCJJbmRleFxcXCIsIFxcXCJSb2xlXFxcIikgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgfSpALS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mb3J1bSddXFxcIj7QpNC+0YDRg9C8PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCAxXVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0J3QvtCy0L7RgdGC0Lg8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwicm9sZXMuaXNOZXdzbWFrZXJcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzQ2F0ZWdvcnknXVxcXCI+0JrQsNGC0LXQs9C+0YDQuNC4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcImJsb2coKVxcXCIgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0JHQu9C+0LPQuDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsaSBuZy1pZj1cXFwidm0uaXNBdXRob3IoKVxcXCI+PGEgdWktc3JlZj1cXFwiYmxvZ0VkaXQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYT48L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSB1aS1zcmVmPVxcXCJibG9nQ2F0ZWdvcmllcygpXFxcIj7QmtCw0YLQtdCz0L7RgNC40Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0KTQmiDQm9C40LLQtdGA0L/Rg9C70Yw8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWJIaXN0b3J5J11cXFwiPtCY0YHRgtC+0YDQuNGPPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcIlxcXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGktLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlci9saXN0JywgMV1cXFwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0vbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tYXRlcmlhbENvbW1lbnQnXVxcXCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpPiA8YSBuZy1pZj1cXFwidm0uaXNOZXdzbWFrZXIoKSB8fCB2bS5pc0F1dGhvcigpXFxcIiB1aS1zcmVmPVxcXCJpbWFnZXMoe3BhdGg6ICdjb250ZW50J30pXFxcIj7QmNC30L7QsdGA0LDQttC10L3QuNGPPC9hPjwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViJ11cXFwiPtCa0LvRg9Cx0Ys8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL21hdGNoJ11cXFwiPtCc0LDRgtGH0Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL3J1bGVzJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+0J/RgNCw0LLQuNC70LA8L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiYmctc3VjY2Vzc1xcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCddXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj7Qn9C+0LbQtdC70LDQvdC40Y88L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIHRlbXBvcmFyeVxcclxcbiAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQ9XFxcIiRyb290LnJvbGVzXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJvZHktY29udGVudCByb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBuY3ktYnJlYWRjcnVtYj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tcHVzaC0zIGNvbC1zbS02IGNvbnRhaW5lci1mbHVpZFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNmNWRlYjNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08dWliLWFsZXJ0IGNsYXNzPVxcXCJyb3dcXFwiIG5nLXJlcGVhdD1cXFwiYWxlcnQgaW4gJHJvb3QuYWxlcnRzXFxcIiBkaXNtaXNzLW9uLXRpbWVvdXQ9XFxcIjUwMDBcXFwiIHR5cGU9XFxcInthbGVydC50eXBlfX1cXFwiIGNsb3NlPVxcXCJjbG9zZUFsZXJ0KCRpbmRleClcXFwiIG5nLWJpbmQ9XFxcImFsZXJ0Lm1zZ1xcXCI+PC91aWItYWxlcnQ+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiB1aS12aWV3IGF1dG9zY3JvbGw9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS1kaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIiB1aS12aWV3PVxcXCJuZXdzRmVlZFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCIgdWktdmlldz1cXFwiYmxvZ3NGZWVkXFxcIj48L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS1wdWxsLTYgY29sLXNtLTMgY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLSBhbGVydC1pbmZvIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMj7QrdC60YHQtdGC0LXRgCA8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvcnUvZi9mNy9FeGV0ZXJfQ2l0eV9Mb2dvLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogNDVwdFxcXCI+MzowPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0gYWxlcnQtZGFuZ2VyIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+INCb0YPRh9GI0LjQuSDQuNCz0YDQvtC6INC80LDRgtGH0LAg0YEg0K3QutGB0LXRgtC10YDQvtC8IDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cDovL3d3dy5teWxpdmVycG9vbC5ydS9pbWFnZXMvUGxheWVycy9TcXVhZDEyLTEzL0pvZV9BbGxlbi5wbmdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0JTQttC+INCQ0LvQu9C10L1cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyb3dcXFwiPjwvc2VjdGlvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHJpZ2h0LXNpZGViYXI+PC9yaWdodC1zaWRlYmFyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImJvdHRvbSBjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPHA+JmNvcHk7IEBEYXRlVGltZS5Ob3cuWWVhciAtIEBDb21tb25NZXNzYWdlcy5TaXRlVGl0bGVBZGRyZXNzPC9wPlxcclxcbiAgICA8L2Zvb3Rlcj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmV3c0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9uZXdzL2luZGV4XCI7XHJcbmltcG9ydCB7IGF1dGhSb3V0ZXMsIGF1dGhQcm92aWRlcnMgfSBmcm9tIFwiLi9hdXRoL2F1dGgucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBhY2NvdW50Um91dGVzIH0gZnJvbSBcIi4vYWNjb3VudC9hY2NvdW50LnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgY2x1YlJvdXRlcyB9IGZyb20gXCIuL2NsdWIvY2x1Yi5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IG5ld3NDYXRlZ29yeVJvdXRlcyB9IGZyb20gXCIuL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBuZXdzUm91dGVzIH0gZnJvbSBcIi4vbmV3cy9uZXdzLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgdXNlclJvdXRlcyB9IGZyb20gXCIuL3VzZXIvdXNlci5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IHBtUm91dGVzIH0gZnJvbSBcIi4vcG0vcG0ucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBob21lUm91dGVzIH0gZnJvbSBcIi4vaG9tZS9ob21lLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgZm9ydW1TZWN0aW9uUm91dGVzIH0gZnJvbSBcIi4vZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IHdpc2hSb3V0ZXMgfSBmcm9tIFwiLi93aXNoL3dpc2gucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBtYXRlcmlhbENvbW1lbnRSb3V0ZXMgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgbWF0Y2hSb3V0ZXMgfSBmcm9tIFwiLi9tYXRjaC9tYXRjaC5yb3V0aW5nXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIC4uLmFjY291bnRSb3V0ZXMsXHJcbiAgICAuLi5hdXRoUm91dGVzLFxyXG4gICAgLi4uY2x1YlJvdXRlcyxcclxuICAgIC4uLmZvcnVtU2VjdGlvblJvdXRlcyxcclxuICAgIC4uLmhvbWVSb3V0ZXMsXHJcbiAgICAuLi5tYXRjaFJvdXRlcyxcclxuICAgIC4uLm1hdGVyaWFsQ29tbWVudFJvdXRlcyxcclxuICAgIC4uLm5ld3NDYXRlZ29yeVJvdXRlcyxcclxuICAgIC4uLm5ld3NSb3V0ZXMsXHJcbiAgICAuLi5wbVJvdXRlcyxcclxuICAgIC4uLnVzZXJSb3V0ZXMsXHJcbiAgICAuLi53aXNoUm91dGVzLFxyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IE5ld3NMaXN0Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcclxuICAgIGF1dGhQcm92aWRlcnNcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hcHAucm91dGVzLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbmV3cy1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3MtbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy1lZGl0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3Muc2VydmljZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4vbmV3cy5tb2RlbFwiOyAgICAgICAgICAgICAgICBcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3cy1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzLWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtOiBOZXdzO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlO1xyXG4gICAgQFZpZXdDaGlsZChcImFjdGl2YXRlTW9kYWxcIikgYWN0aXZhdGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c1NlcnZpY2U6IE5ld3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgICAgIC8vIHRoaXMudGl0bGUgPSB0XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FjdGl2YXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWN0aXZhdGUodGhpcy5pdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGl0ZW06IE5ld3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIHRoaXMuYWRkVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVmlldygpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLml0ZW0uaWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZS50cnlBZGRWaWV3Rm9yTmV3cyhpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGRWaWV3KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tIFwiLi9uZXdzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxGaWx0ZXJzIH0gZnJvbSBcIi4vbmV3c0ZpbHRlcnMubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRlcmlhbC9cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgPSAoZmlsdGVyczpNYXRlcmlhbEZpbHRlcnMpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPE5ld3M+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZmlsdGVycykpKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TmV3cz4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBOZXdzKTogT2JzZXJ2YWJsZTxOZXdzPiA9PiB7XHJcbiAgICAgICAvLyB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCArIFwiTmV3cy9cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IE5ld3MpOiBPYnNlcnZhYmxlPE5ld3M+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZFZpZXcgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJhZGRWaWV3L1wiICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwiYWN0aXZhdGUvXCIgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIlxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1kYW5nZXIgZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTMgcHVsbC1yaWdodFxcXCIgKm5nSWY9XFxcInJvbGVzLmlzRWRpdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLnVzZXJJZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiIWl0ZW0ucGVuZGluZyB8fCAhcm9sZXMuaXNFZGl0b3JcXFwiIChjbGljayk9XFxcInNob3dBY3RpdmF0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgaXRlbS5pZCwgJ2VkaXQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgPGFydGljbGUgW2lubmVySFRNTF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtd2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0J/RgNC+0YHQvNC+0YLRgNGLOjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVhZHNcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCY0YHRgtC+0YfQvdC40Lo6PC9sYWJlbD4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5zb3VyY2VcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCU0LDRgtCwINC00L7QsdCw0LLQu9C10L3QuNGPOjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGFiZWw+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgMSwgaXRlbS5jYXRlZ29yeUlkIF1cXFwiPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNhdGVnb3J5TmFtZVxcXCI+PC9zcGFuPiA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8Y29tbWVudHMgW21hdGVyaWFsSWRdPVxcXCJpdGVtLmlkXFxcIiBbY2FuQ29tbWVudGFyeV09XFxcIml0ZW0uY2FuQ29tbWVudGFyeVxcXCI+PC9jb21tZW50cz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNhY3RpdmF0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZhdGUoKVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gXCIuL25ld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4vbmV3cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxGaWx0ZXJzIH0gZnJvbSBcIi4vbmV3c0ZpbHRlcnMubW9kZWxcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ld3MtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3MtbGlzdC5jb21wb25lbnQuaHRtbFwiKSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW1zOiBOZXdzW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAgIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJhY3RpdmF0ZU1vZGFsXCIpIGFjdGl2YXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBY3RpdmF0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICBsZXQgbmV3cyA9IHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF07XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZS5hY3RpdmF0ZShuZXdzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3cy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICtwYXJhbXNbXCJwYWdlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbXCJjYXRlZ29yeUlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gcGFyYW1zW1widXNlck5hbWVcIl07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCBuZXdVcmwgPSBgbmV3cy9saXN0LyR7dGhpcy5wYWdlfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlJZCkge1xyXG4gICAgICAgICAgICBuZXdVcmwgPSBgJHtuZXdVcmx9LyR7dGhpcy5jYXRlZ29yeUlkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8TmV3cz4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gbmV3IE1hdGVyaWFsRmlsdGVycygpO1xyXG4gICAgICAgIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIGZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIGZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKGZpbHRlcnMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgIC8vICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgTWF0ZXJpYWxGaWx0ZXJzIHtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgbWF0ZXJpYWxUeXBlOiBzdHJpbmc7IC8vMSAtIG5ld3MsIDIgLSBibG9nXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3NGaWx0ZXJzLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8IS0tbmctaWY9XFxcInZtLnBhZ2UgPiAwXFxcIj4tLT5cXHJcXG4gICAgICAgIDwhLS1mb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0uY2F0ZWdvcnlJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcImNhdGVnb3J5LmlkIGFzIGNhdGVnb3J5Lm5hbWUgZm9yIGNhdGVnb3J5IGluIHZtLmNhdGVnb3JpZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlQ2F0ZWdvcnlJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLnVzZXJOYW1lXFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VXNlck5hbWUoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCb0L7Qs9C40L1cXFwiLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLS1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgKm5nSWY9XFxcIiFpdGVtLnBlbmRpbmcgfHwgcm9sZXMuaXNFZGl0b3JcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgtdmVydGljYWwtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgaXRlbS5pZF1cXFwiIGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCI+PGg0IFt0ZXh0Q29udGVudF09XFxcIml0ZW0udGl0bGVcXFwiPjwvaDQ+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTMgcHVsbC1yaWdodFxcXCIgKm5nSWY9XFxcInJvbGVzLmlzRWRpdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLnVzZXJJZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW2hpZGRlbl09XFxcIiFpdGVtLnBlbmRpbmcgfHwgIXJvbGVzLmlzRWRpdG9yXFxcIiAoY2xpY2spPVxcXCJzaG93QWN0aXZhdGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2tcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MnLCBpdGVtLmlkLCAnZWRpdCddXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLXRodW1ibmFpbCBuZXdzLW1pbmkgY2VudGVyLWJsb2NrXFxcIiBhbHQ9XFxcIlxcXCIgW3NyY109XFxcIml0ZW0ucGhvdG9QYXRoXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpPiA8c3BhbiBbaW5uZXJIVE1MXT1cXFwiaXRlbS5icmllZlxcXCI+PC9zcGFuPjwvaT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc3gtMTIgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZSBzbWFsbCBzbWFsbC1vZmZzZXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCa0LDRgtC10LPQvtGA0LjRjzo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgcGFnZSwgaXRlbS5jYXRlZ29yeUlkIF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uY2F0ZWdvcnlOYW1lXFxcIj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QktGA0LXQvNGPINC00L7QsdCw0LLQu9C10L3QuNGPOjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hZGRpdGlvblRpbWVcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0J/RgNC+0YHQvNC+0YLRgNGLPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJlYWRzXFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCQ0LLRgtC+0YA6PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj48YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBpdGVtLnVzZXJJZCBdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnVzZXJOYW1lXFxcIj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QmtC+0LzQvNC10L3RgtCw0YDQuNC4OjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5jb21tZW50c0NvdW50XFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgICAgPCEtLSA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXNcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj4tLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjYWN0aXZhdGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2YXRlKClcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gXCIuL25ld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4vbmV3cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL25ld3NDYXRlZ29yeS9pbmRleFwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXdzLWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBjYXRlZ29yaWVzOiBOZXdzQ2F0ZWdvcnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG5ld3NDYXRlZ29yeVNlcnZpY2U6IE5ld3NDYXRlZ29yeVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5ld3NDYXRlZ29yeVNlcnZpY2UuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VDYXRlZ29yaWVzKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IG5ld3NJdGVtID0gdGhpcy5wYXJzZUZvcm0oKTtcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS51cGRhdGUodGhpcy5pZCwgbmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UuY3JlYXRlKG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShkYXRhOiBOZXdzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VGb3JtKCk6IE5ld3Mge1xyXG4gICAgICAgIGxldCBpdGVtID0gbmV3IE5ld3MoKTtcclxuICAgICAgICBpdGVtLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBpdGVtLmNhdGVnb3J5SWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2F0ZWdvcnlJZFwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uYnJpZWYgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiYnJpZWZcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5zb3VyY2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wic291cmNlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucGhvdG8gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wicGhvdG9cIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5wZW5kaW5nID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInBlbmRpbmdcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5jYW5Db21tZW50YXJ5ID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNhbkNvbW1lbnRhcnlcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5vblRvcCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJvblRvcFwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeUlkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdicmllZic6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdzb3VyY2UnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtdKV0sXHJcbiAgICAgICAgICAgICdwaG90byc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2NhbkNvbW1lbnRhcnknOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdvblRvcCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3BlbmRpbmcnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlQ2F0ZWdvcmllcyhpdGVtczogTmV3c0NhdGVnb3J5W10pIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBpdGVtcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgYWRkaXRpb25UaW1lOiBEYXRlO1xyXG4gICAgcHJpdmF0ZSBjb21tZW50c0NvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgYnJpZWY6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZHM6IG51bWJlcjtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgcGhvdG86IHN0cmluZzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBwZW5kaW5nOiBib29sZWFuO1xyXG4gICAgb25Ub3A6IGJvb2xlYW47XHJcbiAgICBjYW5Db21tZW50YXJ5OiBib29sZWFuO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLm1vZGVsLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9pbmRleC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5IH0gZnJvbSBcIi4vTmV3c0NhdGVnb3J5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmV3c0NhdGVnb3J5U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwibmV3c0NhdGVnb3J5L1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCA9ICgpOiBPYnNlcnZhYmxlPE5ld3NDYXRlZ29yeVtdPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZXdzQ2F0ZWdvcnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogTmV3c0NhdGVnb3J5KTogT2JzZXJ2YWJsZTxOZXdzQ2F0ZWdvcnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBOZXdzQ2F0ZWdvcnkpOiBPYnNlcnZhYmxlPE5ld3NDYXRlZ29yeT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5IH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeVNlcnZpY2UgfSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXdzQ2F0ZWdvcnktZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBOZXdzQ2F0ZWdvcnlTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICduYW1lJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRTaW5nbGUodGhpcy5pZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE5ld3NDYXRlZ29yeSgpO1xyXG4gICAgICAgIG1vZGVsLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBtb2RlbC5uYW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwuZGVzY3JpcHRpb24gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZGVzY3JpcHRpb25cIl0udmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiByZXMgPSBkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLmNyZWF0ZShtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4gcmVzID0gZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgTmV3c0NhdGVnb3J5IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBpdGVtc0NvdW50OiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCI+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj7QndCw0LfQstCw0L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbmFtZSddXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPtCe0L/QuNGB0LDQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJicmllZlxcXCIgcm93cz1cXFwiNFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ11cXFwiPiA8L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIHZhbHVlPVxcXCLQntGC0L/RgNCw0LLQuNGC0YxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnkgfSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5U2VydmljZSB9IGZyb20gXCIuL25ld3NDYXRlZ29yeS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ld3NDYXRlZ29yeS1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpdGVtczogTmV3c0NhdGVnb3J5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdzQ2F0ZWdvcnlTZXJ2aWNlOiBOZXdzQ2F0ZWdvcnlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JrQsNGC0LXQs9C+0YDQuNC4XCIpO1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKG1vZGVsOiBOZXdzQ2F0ZWdvcnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBtb2RlbDsgXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5ld3NDYXRlZ29yeVNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbaW5kZXhdLmlkKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxhIHNlY3VyZWQ9XFxcIm5ld3NGdWxsXFxcIiBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeScsIDAsICdlZGl0J11cXFwiPtCh0L7Qt9C00LDRgtGMINC60LDRgtC10LPQvtGA0LjRjjwvYT5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGNhdGVnb3J5IG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCAxLCBjYXRlZ29yeS5pZCBdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkubmFtZVxcXCI+PC9zcGFuPiBbPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkuaXRlbXNDb3VudFxcXCI+PC9zcGFuPl1cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPCEtLS0+YSBzZWN1cmVkPVxcXCJuZXdzU3RhcnRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgcGFnZSwgaXRlbS5jYXRlZ29yeUlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5uYW1lXFxcIj48L3NwYW4+IFs8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5pdGVtc0NvdW50XFxcIj48L3NwYW4+XVxcclxcbiAgICAgICAgICAgIDwvIS0tYS0tPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3c0NhdGVnb3J5JywgY2F0ZWdvcnkuaWQsICdlZGl0J11cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPjwvc3Bhbj5uZXdzU3RhcnQ8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIlxcXCIgKm5nSWY9XFxcImNhdGVnb3J5Lml0ZW1zQ291bnQgPT0gMFxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKGkpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj5uZXdzRnVsbDwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY2F0ZWdvcnlJZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2NhdGVnb3J5SWQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXNcXFwiIHZhbHVlPVxcXCJ7e2NhdGVnb3J5LmlkfX1cXFwiPnt7Y2F0ZWdvcnkubmFtZX19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQndCw0LfQstCw0L3QuNC1OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3RpdGxlJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYnJpZWZcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydicmllZiddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0KLQtdC60YHRgiDQvdC+0LLQvtGB0YLQuDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiByb3dzPVxcXCI2XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JjRgdGC0L7Rh9C90LjQujo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic291cmNlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snc291cmNlJ11cXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JPQu9Cw0LLQvdC+0LUg0YTQvtGC0L46PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBob3RvUGF0aFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3Bob3RvJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgdWktdmlldz1cXFwiZmlsZXNcXFwiIGF1dG9zY3JvbGw9XFxcImZhbHNlXFxcIj48L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwiY2FuQ29tbWVudGFyeVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2NhbkNvbW1lbnRhcnknXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQgLz4g0KDQsNC30YDQtdGI0LjRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LhcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcIm9uVG9wXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snb25Ub3AnXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+INCd0LDQstC10YDRhdGDXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJwZW5kaW5nXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sncGVuZGluZyddXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4g0J7RgtC70L7QttC10L3QsFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCwgQXV0aFNlcnZpY2UgfSAgICAgIGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEFjY291bnRTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi4vYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUm91dGVzOiBSb3V0ZXMgPSBbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5dO1xyXG5leHBvcnQgY29uc3QgYXV0aFByb3ZpZGVycyA9IFtcclxuICAgIEF1dGhHdWFyZCxcclxuICAgIEF1dGhTZXJ2aWNlXHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcixcclxuICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSAgICAgICBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbikgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIGF0dGVtcHRlZCBVUkwgZm9yIHJlZGlyZWN0aW5nXHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWRpcmVjdFVybCA9IHN0YXRlLnVybDtcclxuXHJcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gdGhlIGxvZ2luIHBhZ2VcclxuICAgICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ251cCddKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNpZ251cENvbXBvbmVudCwgQ29uZmlybUVtYWlsQ29tcG9uZW50LCBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwgVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudCwgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjY291bnRSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBBY2NvdW50U2lnbnVwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY29uZmlybUVtYWlsXCIsIGNvbXBvbmVudDogQ29uZmlybUVtYWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZm9yZ290UGFzc3dvcmRcIiwgY29tcG9uZW50OiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInVuY29uZmlybWVkRW1haWxcIiwgY29tcG9uZW50OiBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicmVzZXRQYXNzd29yZFwiLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjaGFuZ2VQYXNzd29yZFwiLCBjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL2FjY291bnQtc2lnbmluLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hY2NvdW50LXNpZ251cC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlybUVtYWlsLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVzZXRQYXNzd29yZC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiOyAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFjY291bnQtc2lnbmluXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYWNjb3VudC1zaWduaW4uY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQocmE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInVzZXJOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwibG9naW5Gb3JtMVxcXCIgY2xhc3M9XFxcImZvcm0taW5saW5lXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogOHB4O1xcXCIgW2Zvcm1Hcm91cF09XFxcImxvZ2luRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQobG9naW5Gb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcImxvZ2luRm9ybS5jb250cm9sc1sndXNlck5hbWUnXVxcXCIgcGxhY2Vob2xkZXI9XFxcItCb0L7Qs9C40L1cXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcImxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0LDRgNC+0LvRjFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFsb2dpbkZvcm0udmFsaWRcXFwiIHZhbHVlPVxcXCLQktC+0LnRgtC4XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tIFwiLi9zaWdudXAubW9kZWxcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9ycyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWNjb3VudC1zaWdudXBcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCIxMjNcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFsgLy90b2RvIGNvbXBvc2VBU3luYz8/XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiYW5kcmV3X3BhcnlzQHR1dC5ieVwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksICwgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbXCIxMjNxd2UhUVwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICdjb25maXJtUGFzc3dvcmQnOiBbXCIxMjNxd2UhUVwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICdmdWxsTmFtZSc6IFtcIjEyM1wiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxdKV0sXHJcbiAgICAgICAgICAgICdiaXJ0aGRheSc6IFtcIjEwLzEwLzIwMTVcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzaWdudXAgPSBuZXcgU2lnbnVwKCk7XHJcbiAgICAgICAgc2lnbnVwLnVzZXJOYW1lID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJ1c2VyTmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuZW1haWwgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5wYXNzd29yZCA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wicGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5mdWxsTmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiZnVsbE5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmJpcnRoZGF5ID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJiaXJ0aGRheVwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZVxyXG4gICAgICAgICAgICAuY3JlYXRlKHNpZ251cClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHt9LC8vdG9kbyB0aGlzLmlkID0gZGF0YS5pZH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgU2lnbnVwIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gICAgZnVsbE5hbWU6IHN0cmluZztcclxuICAgIGJpcnRoZGF5OiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3NpZ251cC5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tIFwiLi9zaWdudXAubW9kZWxcIjtcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZCB9IGZyb20gXCIuL3Jlc2V0UGFzc3dvcmQubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tIFwiLi9jaGFuZ2VQYXNzd29yZC5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImFjY291bnQvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IFNpZ251cCk6IE9ic2VydmFibGU8U2lnbnVwPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsICsgXCJyZWdpc3Rlci9cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbmZpcm1FbWFpbCA9ICh1c2VySWQ6IG51bWJlciwgY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgY29uZmlybUVtYWlsP3VzZXJJZD0ke3VzZXJJZH0mY29kZT0ke2NvZGV9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yZ290UGFzc3dvcmQgPSAoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYGZvcmdvdFBhc3N3b3JkP2VtYWlsPSR7ZW1haWx9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzZW5kQ29uZmlybUVtYWlsID0gKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGByZXNlbmRDb25maXJtRW1haWw/ZW1haWw9JHtlbWFpbH1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXNldFBhc3N3b3JkID0gKG1vZGVsOiBSZXNldFBhc3N3b3JkKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hY3Rpb25VcmwgKyBgcmVzZXRQYXNzd29yZGAsIG1vZGVsKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGFuZ2VQYXNzd29yZCA9IChtb2RlbDogQ2hhbmdlUGFzc3dvcmQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFjdGlvblVybCArIGBjaGFuZ2VQYXNzd29yZGAsIG1vZGVsKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0b3AyMFxcXCI+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIFtmb3JtR3JvdXBdPVxcXCJyZWdpc3RlckZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHJlZ2lzdGVyRm9ybS52YWx1ZSlcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qm9C+0LPQuNC9PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS0gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS51c2VybmFtZVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBkZWJvdW5jZT1cXFwiNTAwMFxcXCIgdmFsaWRhdGlvbj1cXFwicmVtb3RlOnZtLnVzZXJOYW1lVW5pcXVlKCk6YWx0PdCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INC70L7Qs9C40L3QvtC8INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgnxtaW5fbGVuOjN8bWF4X2xlbjozMHxyZXF1aXJlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgLS0+ICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Rh9GC0L7QstGL0Lkg0LDQtNGA0LXRgTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIGRlYm91bmNlPVxcXCI1MDAwXFxcIiB2YWxpZGF0aW9uPVxcXCJyZW1vdGU6dm0uZW1haWxVbmlxdWUoKTphbHQ90J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0LDQtNGA0LXRgdC+0Lwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCcmVxdWlyZWR8ZW1haWx8bWluX2xlbjo2XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgIC0tPiAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snZW1haWwnXVxcXCIgdHlwZT1cXFwiZW1haWxcXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInZtLnJlZ2lzdGVyRm9ybS5wYXNzd29yZFxcXCIgZnJpZW5kbHktbmFtZT1cXFwi0J/QsNGA0L7Qu9GMXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLnBhc3N3b3JkXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZHxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgIC0tPiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0LDRgNC+0LvRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgPCEtLSAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5jb25maXJtUGFzc3dvcmRcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1hdGNoOnZtLnJlZ2lzdGVyRm9ybS5wYXNzd29yZCxQYXNzd29yZDJ8bWluX2xlbjo2XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgLS0+ICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPiBcXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Qu9C90L7QtSDQuNC80Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZnVsbE5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZHxtaW5fbGVuOjJcXFwiLz5cXHJcXG4gICAgICAgICAgIC0tPiAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2Z1bGxOYW1lJ11cXFwiICB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LDRgtCwINGA0L7QttC00LXQvdC40Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gPGRhdGVwaWNrZXIgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snYmlydGhkYXknXVxcXCI+PC9kYXRlcGlja2VyPiBcXHJcXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIG5hbWU9XFxcImJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBzaG93LWJ1dHRvbi1iYXI9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYi1kYXRlcGlja2VyLXBvcHVwPVxcXCJkZC9NTU1NL3l5eXlcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XFxcInZtLnN0YXR1cy5vcGVuZWRcXFwiIGRhdGVwaWNrZXItb3B0aW9ucz1cXFwidm0uZGF0ZU9wdGlvbnNcXFwiIGNsb3NlLXRleHQ9XFxcItCX0LDQutGA0YvRgtGMXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdC1pbnB1dC1mb3JtYXRzPVxcXCJhbHRJbnB1dEZvcm1hdHNcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB2YS10b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcclxcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2JpcnRoZGF5J11cXFwiIHR5cGU9XFxcInRleHRcXFwiLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXJlZ2lzdGVyRm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlbWFpbC1jb25maXJtYXRpb25cIixcclxuICAgIHRlbXBsYXRlOiBcIjxzcGFuIFtoaWRkZW5dPSchcmVzdWx0Jz7QktCw0Ygg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0YPRgdC/0LXRiNC90L4g0L/QvtC00YLQstC10YDQttC00LXQvS4g0JzQvtC20LXRgtC1INCy0L7QudGC0Lgg0Lgg0LHRi9GC0Ywg0LrQsNC6INC00L7QvNCwLjwvc3Bhbj5cIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1FbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1widXNlcklkXCJdO1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IHBhcmFtc1tcImNvZGVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuY29uZmlybUVtYWlsKGlkLCBjb2RlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucmVzdWx0ID0gZGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NvbmZpcm1FbWFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9yZ290Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGZpbmlzaDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHJhOiBhbnkpOiB2b2lkIHsgICAgIFxyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLmZvcmdvdEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2VydmljZS5mb3Jnb3RQYXNzd29yZCh0aGlzLmVtYWlsKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+0JfQsNCx0YvQu9C4INC/0LDRgNC+0LvRjD88L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZm9yZ290RW1haWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJmb3Jnb3RGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChmb3Jnb3RGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbEFkZHJlc3NcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsQWRkcmVzc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZm9yZ290Rm9ybS5jb250cm9sc1snZW1haWwnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtkaXNhYmxlZF09XFxcIiFmb3Jnb3RGb3JtLnZhbGlkXFxcIiB2YWx1ZT1cXFwi0J7RgtC/0YDQsNCy0LjRgtGMXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkIH0gZnJvbSBcIi4vcmVzZXRQYXNzd29yZC5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZXNldC1wYXNzd29yZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcmVzZXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBmaW5pc2g6IGJvb2xlYW47XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgfSwgeyB2YWxpZGF0b3I6IEdsb2JhbFZhbGlkYXRvcnMubWF0Y2hpbmdQYXNzd29yZHMoXCJwYXNzd29yZFwiLCBcImNvbmZpcm1QYXNzd29yZFwiKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHJhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzZXRQYXNzd29yZCA9IG5ldyBSZXNldFBhc3N3b3JkKCk7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZC5jb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQuZW1haWwgPSB0aGlzLnJlc2V0Rm9ybS5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQucGFzc3dvcmQgPSB0aGlzLnJlc2V0Rm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQuY29uZmlybVBhc3N3b3JkID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJjb25maXJtUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnJlc2V0UGFzc3dvcmQocmVzZXRQYXNzd29yZCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmluaXNoID0gdHJ1ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcInJlc2V0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcInJlc2V0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocmVzZXRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cHJlICpuZ0lmPVxcXCJyZXNldEZvcm0uZXJyb3JzXFxcIj57e3Jlc2V0Rm9ybS5lcnJvcnMgfCBqc29ufX08L3ByZT5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbEFkZHJlc3NcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlc2V0Rm9ybS5jb250cm9sc1snZW1haWwnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L3QvtCy0L7Qs9C+INC/0LDRgNC+0LvRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXJlc2V0Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7Qn9C+0LzQtdC90Y/RgtGMINC/0LDRgNC+0LvRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7ICAgICAgICBcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjsgICAgXHJcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4vY2hhbmdlUGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2hhbmdlLXBhc3N3b3JkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnb2xkUGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnbmV3UGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXVxyXG4gICAgICAgIH0sIHsgdmFsaWRhdG9yOiBHbG9iYWxWYWxpZGF0b3JzLm1hdGNoaW5nUGFzc3dvcmRzKFwibmV3UGFzc3dvcmRcIiwgXCJjb25maXJtUGFzc3dvcmRcIikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQocmE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZCgpO1xyXG4gICAgICAgIG1vZGVsLm9sZFBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEZvcm0uY29udHJvbHNbXCJvbGRQYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5uZXdQYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wibmV3UGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwuY29uZmlybVBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEZvcm0uY29udHJvbHNbXCJjb25maXJtUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2hhdCB0b2RvP1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgY2hhbmdlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcclxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+0JjQt9C80LXQvdC10L3QuNC1INC/0LDRgNC+0LvRjzwvaDE+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBbZm9ybUdyb3VwXT1cXFwicGFzc3dvcmRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChwYXNzd29yZEZvcm0udmFsdWUpXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QodGC0LDRgNGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwib2xkUGFzc3dvcmRcXFwiIFtmb3JtQ29udHJvbF09XFxcInBhc3N3b3JkRm9ybS5jb250cm9sc1snb2xkUGFzc3dvcmQnXVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QndC+0LLRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcIm5ld1Bhc3N3b3JkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJwYXNzd29yZEZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ11cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIFtmb3JtQ29udHJvbF09XFxcInBhc3N3b3JkRm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhcGFzc3dvcmRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCY0LfQvNC10L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9ycyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidW5jb25maXJtZWRFbWFpbFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHVuY29uZmlybWVkRm9ybTogRm9ybUdyb3VwOyBcclxuICAgIGZpbmlzaDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudW5jb25maXJtZWRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIxMSk7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gdGhpcy51bmNvbmZpcm1lZEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVzZW5kQ29uZmlybUVtYWlsKGVtYWlsKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L08L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwidW5jb25maXJtZWRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwidW5jb25maXJtZWRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIiAqbmdJZj1cXFwiIWZpbmlzaFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJ1bmNvbmZpcm1lZEZvcm0uY29udHJvbHNbJ2VtYWlsJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXVuY29uZmlybWVkRm9ybS52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0J/QtdGA0LXRgdC70LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiZmluaXNoXFxcIj7Qn9C40YHRjNC80L4g0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENsdWJMaXN0Q29tcG9uZW50LCBDbHViRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2x1YlJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImNsdWIvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBDbHViRWRpdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNsdWJcIiwgY29tcG9uZW50OiBDbHViTGlzdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9jbHViLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY2x1Yi1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jbHViLWVkaXQuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9pbmRleC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyLCBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCIuL2NsdWIubW9kZWxcIjsgICAgICAgICBcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsdWJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJjbHViL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCA9IChwYWdlKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxDbHViPj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYGxpc3QvJHtwYWdlfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDbHViPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IENsdWIpOiBPYnNlcnZhYmxlPENsdWI+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBDbHViKTogT2JzZXJ2YWJsZTxDbHViPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRCeU5hbWUgPSAodHlwZWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2x1YltdPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgL2dldENsdWJzQnlOYW1lLyR7dHlwZWR9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCIuL2NsdWIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2x1YlNlcnZpY2UgfSBmcm9tIFwiLi9jbHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG4vL2ltcG9ydCB7IFVzZXJGaWx0ZXJzIH0gZnJvbSBcIi4vdXNlckZpbHRlcnMubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2x1Yi1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2x1Yi1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2x1Ykxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW1zOiBDbHViW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIC8vY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSBudWxsOyBcclxuICAgIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjbHViU2VydmljZTogQ2x1YlNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0JrQu9GD0LHRi1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wicGFnZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gIHRoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAgICAgLy8gIHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ3VzZXJOYW1lJ107XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1JbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvL2xldCBmaWx0ZXJzID0gbmV3IFVzZXJGaWx0ZXJzKCk7XHJcbiAgICAgICAgLy8vLyAgZmlsdGVycy5jYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yeUlkO1xyXG4gICAgICAgIC8vLy8gIGZpbHRlcnMubWF0ZXJpYWxUeXBlID0gXCJOZXdzXCI7XHJcbiAgICAgICAgLy9maWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICAvL2ZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKHRoaXMucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IG5ld1VybCA9IGBjbHViL2xpc3QvJHt0aGlzLnBhZ2V9YDtcclxuICAgICAgICAvL2lmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgICAgIC8vICAgICBuZXdVcmwgPSBgJHtuZXdVcmx9LyR7dGhpcy5jYXRlZ29yeUlkfWA7XHJcbiAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUobmV3VXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxDbHViPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyXFxyXFxuICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1YicsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWInLCBpdGVtLmlkLCAnZWRpdCddXFxcIj48c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVuZ2xpc2hOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tpdGVtLmxvZ299fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBDbHViU2VydmljZSB9IGZyb20gXCIuL2NsdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcIi4vY2x1Yi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBSb2xlc0NoZWNrZWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjbHViLWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jbHViLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbHViRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGl0ZW06IENsdWI7XHJcbiAgICB1cGxvYWRGaWxlOiBhbnk7XHJcbiAgICBoYXNCYXNlRHJvcFpvbmVPdmVyOiBib29sZWFuID0gZmFsc2U7IFxyXG4gICAgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsdWJTZXJ2aWNlOiBDbHViU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBuZXcgQ2x1YigpO1xyXG4gICAgICAgIHRpdGxlU2VydmljZS5zZXRUaXRsZShcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQu9GD0LHQsFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLmdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZW5nbGlzaE5hbWVcIl0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBsb2FkKCkgeyAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5vbkNvbXBsZXRlID0gKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJsb2dvXCJdLnBhdGNoVmFsdWUocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwbG9hZGVyLnVwbG9hZEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IG5ld3NJdGVtID0gdGhpcy5wYXJzZUZvcm0oKTtcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jbHViU2VydmljZS51cGRhdGUodGhpcy5pZCwgbmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2x1YlNlcnZpY2UuY3JlYXRlKG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcHRpb25zKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS92MS91cGxvYWQvY2x1YkxvZ28vJHtuYW1lfWAsXHJcbiAgICAgICAgICAgIGF1dGhUb2tlbjogdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW5XaXRoVHlwZSgpLFxyXG4gICAgICAgICAgICAvLyAgYWxsb3dlZEZpbGVUeXBlOiBbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCJdLFxyXG4gICAgICAgICAgICBhdXRvVXBsb2FkOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGFsbG93ZWRFeHRlbnNpb25zOiBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGdcIl0sXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoZGF0YTogQ2x1Yik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlRm9ybSgpOiBDbHViIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBDbHViKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaXRlbS5lbmdsaXNoTmFtZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJlbmdsaXNoTmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmxvZ28gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibG9nb1wiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLm5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnN0YWRpdW0gPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wic3RhZGl1bVwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbmdsaXNoTmFtZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnbG9nbyc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ25hbWUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgJ3N0YWRpdW0nOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIENsdWIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVuZ2xpc2hOYW1lOiBzdHJpbmc7XHJcbiAgICBzdGFkaXVtOiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7Qv9C10YDQvdC40Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFtZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tlZGl0Rm9ybT8uY29udHJvbHNbJ2xvZ28nXS52YWx1ZX19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwibG9nb1xcXCIgbm92YWxpZGF0ZSByZWFkb25seSAvPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XFxcInVwbG9hZGVyXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0uY29udHJvbHNbJ2VuZ2xpc2hOYW1lJ10udmFsaWRcXFwiLz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2hpZGRlbl09XFxcIiF0aGlzLnVwbG9hZGVyPy5xdWV1ZVxcXCIgKGNsaWNrKT1cXFwidXBsb2FkKClcXFwiPtCX0LDQs9GA0YPQt9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QndCw0LfQstCw0L3QuNC1INC60LvRg9Cx0LAg0L3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbmdsaXNoTmFtZVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHRgtCw0LTQuNC+0L08L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhZGl1bVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnRcIjtcclxuZXhwb3J0IGNvbnN0IG5ld3NDYXRlZ29yeVJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnbmV3c0NhdGVnb3J5JywgY29tcG9uZW50OiBOZXdzQ2F0ZWdvcnlMaXN0Q29tcG9uZW50IH0sIC8vdG9kbywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdICB9XHJcbiAgICB7IHBhdGg6ICduZXdzQ2F0ZWdvcnkvOmlkL2VkaXQnLCBjb21wb25lbnQ6IE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkucm91dGluZy50cyIsImltcG9ydCB7IFJvdXRlcyB9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZXdzTGlzdENvbXBvbmVudCwgTmV3c0RldGFpbENvbXBvbmVudCwgTmV3c0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJuZXdzXCIsIGNvbXBvbmVudDogTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzL2xpc3RcIiwgY29tcG9uZW50OiBOZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvbGlzdC86cGFnZVwiLCBjb21wb25lbnQ6IE5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy9saXN0LzpwYWdlLzpjYXRlZ29yeUlkXCIsIGNvbXBvbmVudDogTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzLzppZFwiLCBjb21wb25lbnQ6IE5ld3NEZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzLzppZC9lZGl0XCIsIGNvbXBvbmVudDogTmV3c0VkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VXNlckRldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vdXNlci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckxpc3RDb21wb25lbnR9IGZyb20gXCIuL3VzZXItbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ3VzZXInLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyL2xpc3QnLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyL2xpc3QvOnBhZ2UnLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyL2xpc3QvOnBhZ2UvOnVzZXJOYW1lJywgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci86aWQnLCBjb21wb25lbnQ6IFVzZXJEZXRhaWxDb21wb25lbnQgfVxyXG4gIC8vICB7IHBhdGg6ICduZXdzLzppZC9lZGl0JywgY29tcG9uZW50OiBOZXdzRWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnJvdXRpbmcudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ1c2VyLWRldGFpbFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbTogVXNlcjtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5HZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoaXRlbTogVXNlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtIdHRwV3JhcHBlcn0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7VXNlckZpbHRlcnN9IGZyb20gXCIuL3VzZXJGaWx0ZXJzLm1vZGVsXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQge1BhZ2VhYmxlfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArICd1c2VyLyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEFsbCA9IChmaWx0ZXJzOiBVc2VyRmlsdGVycyk6IE9ic2VydmFibGU8UGFnZWFibGU8VXNlcj4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJzKSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBHZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8VXNlcj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBDcmVhdGUgPSAoaXRlbTogVXNlcik6IE9ic2VydmFibGU8VXNlcj4gPT4ge1xyXG4gICAgICAgIHZhciB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHsgSXRlbU5hbWU6IGl0ZW0gfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBEZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7fTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnVzZXJOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBbaGlkZGVuXT1cXFwiIXJvbGVzLmlzTG9naW5lZCB8fCByb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcIndwbSh7IHVzZXJOYW1lOiBpdGVtLnVzZXJOYW1lIH0pXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9oMj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXJcXFwiIHNyYz1cXFwie3tpdGVtLnBob3RvfX1cXFwiIGFsdD1cXFwie3tpdGVtLnVzZXJOYW1lfX1cXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwicm9sZXMuaXNTZWxmKGl0ZW0uaWQpIHx8IHJvbGVzLmlzTW9kZXJhdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiBuZ2Ytc2VsZWN0PVxcXCJ2bS51cGxvYWRGaWxlcygkZmlsZSwgJGludmFsaWRGaWxlcylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIiBuZ2YtbWF4LWhlaWdodD1cXFwiMTAwMFxcXCIgbmdmLW1heC1zaXplPVxcXCIxTUJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J7QsdC90L7QstC40YLRjCDQsNCy0LDRgtCw0YBcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcInJvbGVzLmlzU2VsZihpdGVtLmlkKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NoYW5nZVBhc3N3b3JkJ11cXFwiPtCY0LfQvNC10L3QuNGC0Ywg0L/QsNGA0L7Qu9GMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxicj48YnI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS1kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJ2bS5lcnJGaWxlLiRlcnJvclxcXCIgbmctYmluZD1cXFwidm0uZXJyRmlsZS4kZXJyb3JcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcInZtLmVyckZpbGUuJGVycm9yUGFyYW1cXFwiIG5nLWJpbmQ9XFxcInZtLmVyckZpbGUuJGVycm9yUGFyYW1cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9ncmVzc1xcXCIgbmctc2hvdz1cXFwiZi5wcm9ncmVzcyA+PSAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwid2lkdGg6e3tmLnByb2dyZXNzfX0lXFxcIiBuZy1iaW5kPVxcXCJmLnByb2dyZXNzICsgJyUnXFxcIj48LyEtLXNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JvQvtCz0LjQvTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJyb2xlcy5pc01vZGVyYXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCIgbmctc2hvdz1cXFwiIWl0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWluPVxcXCIwXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCLQmtC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIml0ZW0uYmFuRGF5c0NvdW50XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTggY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5iYW4oKVxcXCIgbmdEaXNhYmxlZD1cXFwiaXRlbS5iYW5EYXlzQ291bnQgPD0gMFxcXCI+0JfQsNCx0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIiBbaGlkZGVuXT1cXFwiaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0Y1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtOCBjb2wtc20tOCBmbGV4LXZlcnRpY2FsLWNlbnRlclxcXCIgKm5nSWY9XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPtCQ0LrRgtC40LLQvdC+0YHRgtGMINC30LDQsdC70L7QutC40YDQvtCy0LDQvdCwINC00L4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0YyB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgc2VjdXJlZD1cXFwiJ1VzZXJzRnVsbCdcXFwiIG5nLWNsaWNrPVxcXCJ2bS51bmJhbigpXFxcIj7QodC90Y/RgtGMINCx0LDQvTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCT0YDRg9C/0L/QsDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5yb2xlR3JvdXBOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHNlY3VyZWQ9XFxcIidBZG1pblN0YXJ0J1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibmV3c0NhdGVnb3J5SWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJpdGVtLnJvbGVHcm91cElkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJyb2xlR3JvdXAuaWQgYXMgcm9sZUdyb3VwLm5hbWUgZm9yIHJvbGVHcm91cCBpbiB2bS5yb2xlR3JvdXBzXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmctY2hhbmdlPVxcXCJ2bS5lZGl0Um9sZSgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtoaWRkZW5dPVxcXCIhcm9sZXMuaXNTZWxmIHx8ICFyb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIFtoaWRkZW5dPVxcXCIhaXRlbS5lbWFpbENvbmZpcm1lZFxcXCI+0J/QvtGH0YLQsDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsIHRleHQtZGFuZ2VyXFxcIiB1aWItdG9vbHRpcD1cXFwi0J/QvtGH0YLQsCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsFxcXCIgW2hpZGRlbl09XFxcIml0ZW0uZW1haWxDb25maXJtZWRcXFwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVtYWlsXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtGB0LvQtdC00L3QuNC5INCy0YXQvtC0IDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubGFzdE1vZGlmaWVkT24gfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVnaXN0cmF0aW9uRGF0ZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uZnVsbE5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC70L3QvtC1INC40LzRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZnVsbE5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uYmlydGhkYXlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYmlydGhkYXkgfCBkYXRlOidsb25nRGF0ZSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0uZ2VuZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7QuzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICpuZ0lmPVxcXCJpdGVtLmdlbmRlclxcXCI+0JTQtdCy0YPRiNC60LA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICpuZ0lmPVxcXCIhaXRlbS5nZW5kZXJcXFwiPtCf0LDRgNC10L3RjDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJpdGVtLm5ld3NDb3VudCA+IDBcXFwiPjxhIHVpLXNyZWY9XFxcIm5ld3MoeyBwYWdlOiAxLCB1c2VyTmFtZTogaXRlbS51c2VyTmFtZX0pXFxcIj7QndC+0LLQvtGB0YLQuCg8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5ld3NDb3VudFxcXCI+PC9zcGFuPik8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIml0ZW0uYmxvZ3NDb3VudCA+IDBcXFwiPjxhIHVpLXNyZWY9XFxcImJsb2coe3BhZ2U6IDEsIHVzZXJOYW1lOiBpdGVtLnVzZXJOYW1lfSlcXFwiPtCR0LvQvtCz0LgoPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5ibG9nc0NvdW50XFxcIj48L3NwYW4+KTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjwhLS1zY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcImNoYW5nZVJvbGVDb25maXJtYXRpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGA0L7Qu9C4PC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAg0JjQt9C80LXQvdC40YLRjD9cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPtCY0LfQvNC10L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48LyEtLXNjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJiYW5Db25maXJtYXRpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICDQl9Cw0LHQsNC90LjRgtGMP1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+0JfQsNCx0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0Pi0tPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgVXNlcn0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlckZpbHRlcnMgfSBmcm9tIFwiLi91c2VyRmlsdGVycy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ1c2VyLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi91c2VyLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbXM6IFVzZXJbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wicGFnZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8vICB0aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zWydjYXRlZ29yeUlkJ107XHJcbiAgICAgICAgICAvLyAgdGhpcy51c2VyTmFtZSA9IHBhcmFtc1sndXNlck5hbWUnXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8VXNlcj4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgZmlsdGVycyA9IG5ldyBVc2VyRmlsdGVycygpO1xyXG4gICAgICAvLyAgZmlsdGVycy5jYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yeUlkO1xyXG4gICAgICAvLyAgZmlsdGVycy5tYXRlcmlhbFR5cGUgPSBcIk5ld3NcIjtcclxuICAgICAgICBmaWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICBmaWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbChmaWx0ZXJzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBVc2VyRmlsdGVycyB7XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlckZpbHRlcnMubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1jb25kZW5zZWRcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCf0L7RgdC70LXQtNC90LjQuSDQstGF0L7QtDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7Qm9C+0LPQuNC9PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCU0LDRgtCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lg8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0JPRgNGD0L/Qv9CwPC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCB1c2VyIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLmxhc3RNb2RpZmllZCB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIHVzZXIuaWQgXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJtaW5pLWF2YXRhclxcXCIgc3JjPVxcXCJ7e3VzZXIucGhvdG99fVxcXCIgYWx0PVxcXCJ7e3VzZXIudXNlck5hbWV9fVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcInVzZXIudXNlck5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgdWliLXRvb2x0aXA9XFxcItCf0L7Rh9GC0LAg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LBcXFwiIFtoaWRkZW5dPVxcXCJ1c2VyLmVtYWlsQ29uZmlybWVkXFxcIj4gKjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLXNob3c9XFxcImxvZ2dlZEluKCkgJiYgdm0uaXNOb3RTZWxmKHVzZXIuaWQsIHVzZXJJZCgpKVxcXCIgdWktc3JlZj1cXFwid3BtKHsgdXNlck5hbWU6IHVzZXIudXNlck5hbWUgfSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwidXNlci5yZWdpc3RyYXRpb25EYXRlIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcInVzZXIucm9sZUdyb3VwTmFtZVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0uY2hvc2VuUm9sZUdyb3VwSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwicm9sZUdyb3VwLmlkIGFzIHJvbGVHcm91cC5uYW1lIGZvciByb2xlR3JvdXAgaW4gdm0ucm9sZUdyb3Vwc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VSb2xlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVXNlck5hbWVcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlVc2VyTmFtZSgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIgLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8IS0tPnVpYi1wYWdpbmF0aW9uIG5nLXNob3c9XFxcInZtLnRvdGFsSXRlbXMgPiB2bS5pdGVtUGVyUGFnZVxcXCIgdG90YWwtaXRlbXM9XFxcInZtLnRvdGFsSXRlbXNcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wYWdlTm9cXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC8hLS11aWItcGFnaW5hdGlvbi0tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQbUxpc3RDb21wb25lbnQsIFBtRGV0YWlsQ29tcG9uZW50LCBQbUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBtUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwicG1cIiwgY29tcG9uZW50OiBQbUxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJwbS86aWRcIiwgY29tcG9uZW50OiBQbURldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBtLzppZC9lZGl0XCIsIGNvbXBvbmVudDogUG1FZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vcG0ubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG0tbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbS1lZGl0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbS5zZXJ2aWNlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgUG0ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHNlbmRlcklkOiBudW1iZXI7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIHJlY2VpdmVySWQ6IG51bWJlcjtcclxuICAgIHJlY2VpdmVyOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc2VudFRpbWU6IERhdGU7XHJcbiAgICBpc1JlYWQ6IGJvb2xlYW47XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0ubW9kZWwudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBtIH0gZnJvbSBcIi4vcG0ubW9kZWxcIjtcclxuaW1wb3J0IHsgUG1TZXJ2aWNlIH0gZnJvbSBcIi4vcG0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwbS1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcG0tbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcmVjZWl2ZWQ6IFBtW107XHJcbiAgICBzZW50OiBQbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcG1TZXJ2aWNlOiBQbVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBtU2VydmljZVxyXG4gICAgICAgICAgICAuR2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UobW9kZWw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxuICAgICAgICB0aGlzLnJlY2VpdmVkID0gbW9kZWwucmVjZWl2ZWQ7XHJcbiAgICAgICAgdGhpcy5zZW50ID0gbW9kZWwuc2VudDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcbiAgICAgICAgLy90aGlzLm5ld3NDYXRlZ29yeVNlcnZpY2UuRGVsZXRlKHRoaXMuaXRlbXNbaW5kZXhdLmlkKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhLFxyXG4gICAgICAgIC8vICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAvLyAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVtb3ZlIGNhdGVnb3J5dVwiKSk7XHJcbiAgICAgICAgLy90aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBQbSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG1TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJwbS9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QWxsID0gKCk6IE9ic2VydmFibGU8UG1bXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQbT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBDcmVhdGUgPSAoaXRlbTogUG0pOiBPYnNlcnZhYmxlPFBtPiA9PiB7XHJcbiAgICAgICAvLyB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBVcGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBQbSk6IE9ic2VydmFibGU8UG0+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBEZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgIDxtZC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVxcXCIwXFxcIj5cXHJcXG4gICAgICAgIDxtZC10YWI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAg0J/QvtC70YPRh9C10L3QvdGL0LVcXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItY29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Ql9Cw0LPQvtC70L7QstC+0Lo8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QntGC0L/RgNCw0LLQuNGC0LXQu9GMPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JTQsNGC0LAg0L/QvtC70YPRh9C10L3QuNGPPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgcmVjZWl2ZWQ7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJpICsgMVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCBtZXNzYWdlLmlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cXFwiIW1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L2I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIG1lc3NhZ2Uuc2VuZGVySWRdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnNlbmRlclVzZXJOYW1lXFxcIj48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5zZW50VGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC9tZC10YWI+XFxyXFxuICAgICAgICA8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC70LXQvdC90YvQtVxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1jb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCX0LDQs9C+0LvQvtCy0L7QujwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCf0L7Qu9GD0YfQsNGC0LXQu9GMPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JTQsNGC0LAg0L7RgtC/0YDQsNCy0LrQuDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIHNlbnQ7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJpICsgMVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCBtZXNzYWdlLmlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cXFwiIW1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L2I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIG1lc3NhZ2UucmVjZWl2ZXJJZF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UucmVjZWl2ZXJVc2VyTmFtZVxcXCI+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2Uuc2VudFRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICAgICAgPDxtZC10YWI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjCDRgdC+0L7QsdGJ0LXQvdGM0LrRg1xcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICA8L21kLXRhYi1ncm91cD5cXHJcXG48L2Rpdj4tLT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFBtIH0gZnJvbSBcIi4vcG0ubW9kZWxcIjtcclxuaW1wb3J0IHsgUG1TZXJ2aWNlIH0gZnJvbSBcIi4vcG0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwbS1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9wbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbTogUG07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbVNlcnZpY2U6IFBtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5wbVNlcnZpY2UuR2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGl0ZW06IFBtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGZvcm0taG9yaXpvbnRhbCBtYXJnaW4tdG9wLW1pZGRsZVxcXCIgKm5nSWY9XFxcIml0ZW1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0J/QvtC70YPRh9Cw0YLQtdC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGlzYWJsZWQgdmFsdWU9XFxcInt7aXRlbS5yZWNlaXZlcn19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRpc2FibGVkIHZhbHVlPVxcXCJ7e2l0ZW0udGl0bGV9fVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkaXNhYmxlZCByb3dzPVxcXCI0XFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLWEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0Jywge3VzZXJuYW1lOiBpdGVtLnJlY2VpdmVyLCB1c2VySWQ6IGl0ZW0uaWR9XVxcXCIgPtCe0YLQstC10YLQuNGC0Yw8LyFhLS0+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIDAsICdlZGl0J11cXFwiID7QntGC0LLQtdGC0LjRgtGMPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7ICBcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7ICAgXHJcbmltcG9ydCB7IFBtIH0gZnJvbSBcIi4vcG0ubW9kZWxcIjtcclxuaW1wb3J0IHsgUG1TZXJ2aWNlIH0gZnJvbSBcIi4vcG0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwbS1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcG0tZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG1FZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBteVNvdXJjZSA9IFtcImFyMVwiLCBcImFyMlwiLCBcIjNkc2FcIl07XHJcbiAgICB1c2VycyA9IFwiL2FwaS91c2VyL0dldFVzZXJOYW1lcz90eXBlZD06a2V5d29yZFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUG1TZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdyZWNlaXZlcic6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3RpdGxlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTAwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICAvL2lmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLy8gICAgICAgIC5HZXRTaW5nbGUodGhpcy5pZClcclxuICAgICAgICAgICAgLy8gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSksXHJcbiAgICAgICAgICAgIC8vICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZ2V0ICBuZXdzXCIpKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgLy99KTtcclxuICAgICAgICB0aGlzLmdldFVzZXJuYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgIC8vICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXJuYW1lKHVzZXI6IGFueSkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZSh7IHJlY2VpdmVyOiB1c2VyLmlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VybmFtZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlKTtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5kYXRhW1widXNlcm5hbWVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgUG0oKTtcclxuICAgICAgICBtb2RlbC5yZWNlaXZlcklkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInJlY2VpdmVyXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLm1lc3NhZ2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuc2VydmljZS5DcmVhdGUobW9kZWwpLnN1YnNjcmliZShkYXRhID0+IGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcG1cIl0pO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWVkaXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY29sLW1kLTEyXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuYW1lPVxcXCJ3cml0ZVBtXFxcIiAgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgPGgyPtCd0LDQv9C40YHQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1PC9oMj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCf0L7Qu9GD0YfQsNGC0LXQu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLXAgY2xhc3M9XFxcInRleHQtZGFuZ2VyIGNvbC1tZC1vZmZzZXQtMlxcXCIgbmctaWY9XFxcInZtLmVycm9yTWVzc2FnZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgbmctYmluZD1cXFwidm0uZXJyb3JNZXNzYWdlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC8hcC0tPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XFxcInVwZGF0ZVVzZXJuYW1lKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGF1dG8tY29tcGxldGUgbmFtZT1cXFwicmVjZWl2ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sncmVjZWl2ZXInXVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVxcXCJ1c2Vyc1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIG1pbi1jaGFycz1cXFwiMlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIGF0dHItcGxhY2Vob2xkZXI9XFxcItCS0LLQtdC00LjRgtC1INC70L7Qs9C40L0uLi5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXktcHJvcGVydHktbmFtZT1cXFwidXNlcm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPiA8L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENsdWJIaXN0b3J5Q29tcG9uZW50LCBSdWxlc0NvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImNsdWJIaXN0b3J5XCIsIGNvbXBvbmVudDogQ2x1Ykhpc3RvcnlDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJydWxlc1wiLCBjb21wb25lbnQ6IFJ1bGVzQ29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2hvbWUucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL2NsdWItaGlzdG9yeS5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JpZ2h0U2lkZWJhci5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiPGNsdWItaGlzdG9yeT5cIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIENsdWJIaXN0b3J5Q29tcG9uZW50IHtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgYWx0PVxcXCJcXFwiIHN0eWxlPVxcXCJib3JkZXI6IDNweCBzb2xpZCAjY2NjO21hcmdpbjowIDE1cHggMTVweCAwO1xcXCIgc3JjPVxcXCJodHRwOi8vcGljdHVyZXMuZm9vdHltYWQubmV0L3VwbG9hZC8zNDIvNjkwNTAtMS5qcGdcXFwiIGFsaWduPVxcXCJsZWZ0XFxcIiB3aWR0aD1cXFwiMjUwcHhcXFwiPtCT0LvQsNCy0L3Ri9C5INGB0L7Qv9C10YDQvdC40LogXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIsIFxcXCLQrdCy0LXRgNGC0L7QvVxcXCIsINCx0YvQuyDRgdGE0L7RgNC80LjRgNC+0LLQsNC9INCyIDE4Nzgg0LPQvtC00YMg0JTQttC+0L3QvtC8INCl0L7Qu9C00LjQvdCz0L7QvCwg0LzQtdGB0YLQvdGL0Lwg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9C10Lwg0Lgg0LHRg9C00YPRidC40Lwg0LzRjdGA0L7QvCDQm9C40LLQtdGA0L/Rg9C70Y8uXFxyXFxuXFxyXFxuICAgICAgICDQntC90Lgg0L3QsNGH0LDQu9C4INC40LPRgNCw0YLRjCDQvdCwIFxcXCLQrdC90YTQuNC70LQg0KDQvtGD0LRcXFwiIOKAlCDQv9C+0LvQtSwg0LDRgNC10L3QtNC+0LLQsNC90L3QvtC8INGDINC/0LjQstC+0LLQsNGA0LAg0L/QviDQuNC80LXQvdC4INCU0LbQvtC9INCe0YDRgNC10LvQuy4g0JrQsNC6INGC0L7Qu9GM0LrQviBcXFwi0K3QstC10YDRgtC+0L1cXFwiINCy0YHRgtCw0Lsg0L3QsCDQvdC+0LPQuCDQpdC+0LvQtNC40L3QsyDQv9GA0LjRgdGC0YPQv9C40Lsg0Log0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0YMg0YTRg9GC0LHQvtC70YzQvdGL0YUg0YLRgNC40LHRg9C9INC90LAgXFxcItCt0L3RhNC40LvQtNC1XFxcIi4g0J7QtNC90LDQutC+INC/0L7RgdC70LUg0LLQvtC30L3QuNC60YjQuNGFINCyIDE4OTIg0LPQvtC00YMg0YDQsNC30L3QvtCz0LvQsNGB0LjQuSDQutC70YPQsSDRgNCw0YHQv9Cw0LvRgdGPINC90LAg0LTQstC1INCz0YDRg9C/0L/Riy4g0J7QtNC90LAg0LjQtyDQs9GA0YPQv9C/INC/0YDQuNC90Y/Qu9CwINGA0LXRiNC10L3QuNC1INC/0LXRgNC10LXRhdCw0YLRjCDQvdCwIFxcXCLQk9GD0LTQuNGB0L7QvSDQn9Cw0YDQulxcXCIsINCyINGC0L4g0LLRgNC10LzRjyDQutCw0Log0L7RgdGC0LDQstGI0LjQtdGB0Y8sINCy0L4g0LPQu9Cw0LLQtSDRgSDQpdC+0LvQtNC40L3Qs9C+0LwsINC+0YHQvdC+0LLQsNC70Lgg0L3QsCBcXFwi0K3QvdGE0LjQu9C0INCg0L7Rg9C0XFxcIiDQvdC+0LLRi9C5INGE0YPRgtCx0L7Qu9GM0L3Ri9C5INC60LvRg9CxIC0gXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIuINCl0L7Qu9C00LjQvdCzINC90LDQt9C90LDRh9C40Lsg0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDRgdCy0L7QtdCz0L4g0LTRgNGD0LPQsCwg0JTQttC+0L3QsCDQnNCw0LrQutC10L3Rgywg0LrQvtGC0L7RgNGL0Lkg0YHRgNCw0LfRgyDQvtGC0L/RgNCw0LLQuNC70YHRjyDQsiDQqNC+0YLQu9Cw0L3QtNC40Y4g0L3QsNCx0LjRgNCw0YLRjCDQutC+0LzQsNC90LTRgyDQuNCz0YDQvtC60L7Qsi4g0J/QvtGB0LvQtSDQs9C+0LTQsCDRgNCw0LHQvtGC0Ysg0JzQsNC60LrQtdC90LAg0YDQtdGI0LjQuywg0YfRgtC+INC90LDRgdGC0LDQu9C+INCy0YDQtdC80Y8g0L/QvtC00LDRgtGMINC30LDRj9Cy0LrRgyDQvdCwINCy0YHRgtGD0L/Qu9C10L3QuNC1INCyINCk0YPRgtCx0L7Qu9GM0L3Rg9GOINC70LjQs9GDLlxcclxcblxcclxcbiAgICAgICAg0KPQttC1INC/0L7RgdC70LUg0L/QtdGA0LLQvtCz0L4g0YHQtdC30L7QvdCwINCyINC70LjQs9C1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC/0L7QtNC90Y/Qu9GB0Y8g0LIg0LLRi9GB0YjQuNC5INC00LjQstC40LfQuNC+0L0sINC+0LTQvdCw0LrQviDQvtC9INC/0L4t0L/RgNC10LbQvdC10LzRgyDQvtGB0YLQsNCy0LDQu9GB0Y8g0LIg0YLQtdC90Lgg0YHQstC+0LjRhSDRgdC+0YHQtdC00LXQuSDQuNC3IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIiwg0LAg0LHQvtC70YzRiNC40L3RgdGC0LLQviDQvNC10YHRgtC90YvRhSDQttC40YLQtdC70LXQuSDQvtGC0LrQsNC30YvQstCw0LvQuNGB0Ywg0YXQvtC00LjRgtGMINC90LAg0LzQsNGC0YfQuCDQutC+0LzQsNC90LTRiywg0LLRgdC1INC40LPRgNC+0LrQuCDQutC+0YLQvtGA0L7QuSDQsdGL0LvQuCDRiNC+0YLQu9Cw0L3QtNGG0LDQvNC4LiDQn9C10YDQstGL0Lkg0YHQtdC30L7QvSDQv9GA0L7RiNC10Lsg0L3QtdGD0LTQsNGH0L3Qviwg0Lgg0LrQu9GD0LEg0LLRi9Cx0YvQuyDQstC+INCS0YLQvtGA0L7QuSDQtNC40LLQuNC30LjQvtC9LiDQnNCw0LrQutC10L3QsCDQv9C+0LrQu9GP0LvRgdGPINCy0LXRgNC90YPRgtGM0YHRjyDQsiDQstGL0YHRiNGD0Y4g0LvQuNCz0YMg0YfQtdGA0LXQtyDQtNCy0LXQvdCw0LTRhtCw0YLRjCDQvNC10YHRj9GG0LXQsiwg0YfRgtC+INC4INC/0YDQvtC40LfQvtGI0LvQviDQsdC70LDQs9C+0LTQsNGA0Y8g0LXQs9C+INGG0LXQu9C10YPRgdGC0YDQtdC80LvQtdC90L3QvtGB0YLQuCDQuCDQvdCw0YHRgtC+0LnRh9C40LLQvtGB0YLQuCwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRh9C10LzQv9C40L7QvdC+0Lwg0LLRgtC+0YDQvtCz0L4g0LTQuNCy0LjQt9C40L7QvdCwINC4INC/0YDQvtC00LLQuNCz0LDQtdGC0YHRjyDQsiDQv9C10YDQstGL0LkuINCd0LAg0Y3RgtC+0YIg0YDQsNC3INC+0L3QuCDQt9Cw0LLQtdGA0YjQuNC70Lgg0YHQtdC30L7QvSDQvdCwINC90LDQtNC10LbQvdC+0Lwg0L/Rj9GC0L7QvCDQvNC10YHRgtC1LCDQstGL0YjQtSBcXFwi0K3QstC10YDRgtC+0L3QsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQn9C10YDQstGL0Lkg0YfQtdC80L/QuNC+0L3RgdC60LjQuSDRgtC40YLRg9C7IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INCyINGB0LXQt9C+0L3QtSAxOTAwLzAxLiDQp9C10YDQtdC3INC00LLQsCDQs9C+0LTQsCDQv9C+0YHQu9C1INGN0YLQvtCz0L4gXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstGL0LHRi9C70Lgg0LjQtyDQstGL0YHRiNC10Lkg0LvQuNCz0LgsINC90L4g0LLQtdGA0L3Rg9C70LjRgdGMINGC0YPQtNCwINGB0L/Rg9GB0YLRjyDQs9C+0LQg0Lgg0LIg0YLQvtC8INGB0LXQt9C+0L3QtSDQstC90L7QstGMINGB0YLQsNC70Lgg0L/QvtCx0LXQtNC40YLQtdC70Y/QvNC4INGH0LXQvNC/0LjQvtC90LDRgtCwLiDQkiDQutCw0YfQtdGB0YLQstC1INC90LDQs9GA0LDQtNGLINGA0YPQutC+0LLQvtC00YHRgtCy0L4g0LrQu9GD0LHQsCDQv9GA0LjQvdGP0LvQviDRgNC10YjQtdC90LjQtSDQv9C+0YHRgtGA0L7QuNGC0Ywg0LTQu9GPINCx0L7Qu9C10LvRjNGJ0LjQutC+0LIg0L3QvtCy0YPRjiDRgtGA0LjQsdGD0L3RgywgXFxcItCh0L/QuNC+0L0g0JrQvtC/XFxcIiwg0L/QvtC30LbQtSDRgdGC0LDQstGI0YPRjiDQu9C10LPQtdC90LTQsNGA0L3QvtC5LiDQotCw0LrQvtC1INC90LDQt9Cy0LDQvdC40LUg0YLRgNC40LHRg9C90LAg0L/QvtC70YPRh9C40LvQsCDQsiDRh9C10YHRgtGMINGF0L7Qu9C80LAsINGA0LDRgdC/0L7Qu9C+0LbQtdC90L3QvtCz0L4g0LIg0Y7QttC90L4t0LDRhNGA0LjQutCw0L3RgdC60L7QuSDQv9GA0L7QstC40L3RhtC40Lgg0J3QsNGC0LDQuywg0LPQtNC1INCy0L4g0LLRgNC10LzRjyDQstGC0L7RgNC+0Lkg0LDQvdCz0LvQvi3QsdGD0YDRgdC60L7QuSDQstC+0LnQvdGLINC80LXRgNGB0LjRgdCw0LnQtNGB0LrQuNC5INC/0L7Qu9C6INC/0L7QvdC10YEg0LHQvtC70YzRiNC40LUg0L/QvtGC0LXRgNC4LiDQkiDQv9C10YDQtdCy0L7QtNC1INGBINCw0YTRgNC40LrQsNCw0L3RgSBcXFwi0YHQv9C40L7QvSDQutC+0L9cXFwiINC+0LfQvdCw0YfQsNC10YIgXFxcItC80LXRgdGC0L4sINC00LDRjtGJ0LXQtSDRhdC+0YDQvtGI0LjQuSDQvtCx0LfQvtGAXFxcIi4g0JIgMTkyOCDQs9C+0LTRgyDRgtGA0LjQsdGD0L3QsCDQsdGL0LvQsCDRgNCw0YHRiNC40YDQtdC90LAg0Lgg0L7QsdGA0LXQu9CwINC60YDRi9GI0YMsINC90LDQtNC10LbQvdC+INC30LDRidC40YnQsNCy0YjRg9GOINC+0YIg0L3QtdC/0L7Qs9C+0LTRiyAzMCAwMDAg0LHQvtC70LXQu9GM0YnQuNC60L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCf0L7RgdC70LUg0J/QtdGA0LLQvtC5INC80LjRgNC+0LLQvtC5INCy0L7QudC90YsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0Lsg0L7QsdC70LDQtNCw0YLQtdC70LXQvCDQtdGJ0LUg0LTQstGD0YUg0YfQtdC80L/QuNC+0L3RgdC60LjRhSDRgtC40YLRg9C70L7Qsiwg0L3QviDQv9C+0YHQu9C1INCS0YLQvtGA0L7QuSDQvNC40YDQvtCy0L7QuSDQvdCw0YfQsNC70YHRjyDRgdC/0LDQtCDQuNCz0YDQvtCy0L7QuSDRhNC+0YDQvNGLLCDRhdC+0YLRjyDQsiAxOTUwINCz0L7QtNGDIFxcXCLQutGA0LDRgdC90YvQvFxcXCIg0LLRgdC1INC20LUg0YPQtNCw0LvQvtGB0Ywg0LLRi9C50YLQuCDQsiDRhNC40L3QsNC7INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4LCDQs9C00LUg0L7QvdC4INGD0YHRgtGD0L/QuNC70LggXFxcItCQ0YDRgdC10L3QsNC70YNcXFwiLiDQodC10LfQvtC9IDE5NTMvNTQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNCy0LXRgNGI0LjQuyDQvdCwINC/0L7RgdC70LXQtNC90LXQvCDQvNC10YHRgtC1INC4INCy0YvQsdGL0Lsg0LjQtyDQv9C10YDQstC+0LPQviDQtNC40LLQuNC30LjQvtC90LAuINCf0L7RgdC70LUg0L3QtdGB0LrQvtC70YzQutC40YUg0L3QtdGD0LTQsNGH0L3Ri9GFINC70LXRgiDQvdCwINC/0L7QvNC+0YnRjCDQutC70YPQsdGDINC/0YDQuNGI0LXQuyDQkdC40LvQuyDQqNC10L3QutC70LguINCe0L0g0LHRi9C7INC90LDQt9C90LDRh9C10L0g0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDQsiAxOTU5INCz0L7QtNGDINC4INC30LAg0YHQu9C10LTRg9GO0YnQuNC1INGH0LXRgtGL0YDQvdCw0LTRhtCw0YLRjCDQu9C10YIg0YHQstC+0LXQuSDRgNCw0LHQvtGC0Ysg0L/RgNC10LLRgNCw0YLQuNC7IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCyINCy0LXQu9C40YfQsNC50YjQuNC5INC60LvRg9CxINCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0YTRg9GC0LHQvtC70LAuINCX0LAg0L/QtdGA0LLRi9C1INC00LLQtdC90LDQtNGG0LDRgtGMINC80LXRgdGP0YbQtdCyINC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstCwINC00LLQsNC00YbQsNGC0Ywg0YfQtdGC0YvRgNC1INC40LPRgNC+0LrQsCDQv9C+0LrQuNC90YPQu9C4INC60L7QvNCw0L3QtNGDLiDQkiDRgdC10LfQvtC90LUgMTk2My82NCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQsiDRiNC10YHRgtC+0Lkg0YDQsNC3INGB0YLQsNC7INGH0LXQvNC/0LjQvtC90L7QvCDQstGL0YHRiNC10Lkg0LvQuNCz0LgsINCwINCyINGB0LvQtdC00YPRjtGJ0LXQvCDQs9C+0LTRgyDQutC+0LvQu9C10LrRhtC40Y8g0YLRgNC+0YTQtdC10LIg0L/QvtC/0L7Qu9C90LjQu9Cw0YHRjCDQutGD0LHQutC+0Lwg0JDQvdCz0LvQuNC4LCDQsdC70LDQs9C+0LTQsNGA0Y8g0L/QvtCx0LXQtNC1INC90LDQtCBcXFwi0JvQuNC00YFcXFwiINCyINGE0LjQvdCw0LvQtSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y8uINCd0L4g0L/QvtCx0LXQtNC90LDRjyDRgdC10YDQuNGPINC90LAg0Y3RgtC+0Lwg0L3QtSDQt9Cw0LrQvtC90YfQuNC70LDRgdGMLCDQsiDRgdC10LfQvtC90LUgMTk2NS82NiBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0LLRi9C40LPRgNCw0LvQuCDQs9C70LDQstC90YvQuSDRgtC40YLRg9C7INC70LjQs9C4LlxcclxcblxcclxcbiAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5INGC0YDQvtGE0LXQuSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQv9C+0LvRg9GH0LjQuyDQu9C40YjRjCDRgdC/0YPRgdGC0Y8g0YHQtdC80Ywg0LvQtdGCLCDQsiDRgdC10LfQvtC90LUgMTk3Mi83Mywg0L3QsCDRjdGC0L7RgiDRgNCw0Lcg0JrRg9Cx0L7QuiDQo9CV0KTQkCwg0LAg0YHQv9GD0YHRgtGPINC10YnQtSDQs9C+0LQgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC70Lgg0L7QsdC70LDQtNCw0YLQtdC70Y/QvNC4INC60YPQsdC60LAg0JDQvdCz0LvQuNC4LiDQn9C+0YHQu9C1INGN0YLQvtCz0L4g0KjQtdC90LrQu9C4INC90LXQvtC20LjQtNCw0L3QvdC+INGA0LXRiNC40Lsg0LfQsNCy0LXRgNGI0LjRgtGMINC60LDRgNGM0LXRgNGDINC4INC/0LXRgNC10LTQsNC7INC/0L7Qu9C90L7QvNC+0YfQuNGPINGB0LLQvtC10Lkg0L/RgNCw0LLQvtC5INGA0YPQutC1IOKAlCDQkdC+0LHRgyDQn9C10LnRgdC70LguINCT0YDQvtC80LrQuNGFINC/0L7QsdC10LQg0L3QtSDQv9GA0LjRiNC70L7RgdGMINC00L7Qu9Cz0L4g0LbQtNCw0YLRjCwg0YPQttC1INC90LAg0LLRgtC+0YDQvtC5INCz0L7QtCDRgNCw0LHQvtGC0Ysg0L3QvtCy0L7Qs9C+INGC0YDQtdC90LXRgNCwLCDQsiDRgdC10LfQvtC90LUgMTk3NS83NiwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0YfQtdC80L/QuNC+0L3QsNGCINC4INCa0YPQsdC+0Log0KPQldCk0JAuINCn0LXRgNC10Lcg0LPQvtC0IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQu9C4INGH0LXQvNC/0LjQvtC90LDQvNC4INC70LjQs9C4LCDQt9Cw0LLQvtC10LLQsNC70Lgg0JrRg9Cx0L7QuiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7Qsiwg0L7QsdGL0LPRgNCw0LIg0LIg0YTQuNC90LDQu9C1IFxcXCLQkdC+0YDRg9GB0YHQuNGOINCc0LXQvdGF0LXQvdCz0LvQsNC00LHQsNGFXFxcIiwg0L3QviDQsiDRhNC40L3QsNC70YzQvdC+0Lwg0LzQsNGC0YfQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDRg9GB0YLRg9C/0LjQu9C4IFxcXCLQnNCw0L3Rh9C10YHRgtC10YAg0K7QvdCw0LnRgtC10LRcXFwiINGB0L4g0YHRh9C10YLQvtC8IDI6MS4g0JIg0YHQtdC30L7QvdC1IDE5NzcvNzggXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0Lsg0L/QtdGA0LLRi9C8INCx0YDQuNGC0LDQvdGB0LrQuNC8INC60LvRg9Cx0L7QvCwg0LrQvtC80YMg0YPQtNCw0LvQvtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQt9Cy0LDQvdC40LUg0LXQstGA0L7Qv9C10LnRgdC60L7Qs9C+INGH0LXQvNC/0LjQvtC90LAsINC+0LTQtdGA0LbQsNCyINC/0L7QsdC10LTRgyDQsiDRhNC40L3QsNC70LUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGPINC90LDQtCDQsdC10LvRjNCz0LjQudGB0LrQuNC8INC60LvRg9Cx0L7QvCBcXFwi0JHRgNGO0LPQs9C1XFxcIiDRgdC+INGB0YfQtdGC0L7QvCAxOjAuXFxyXFxuXFxyXFxuICAgICAgICDQl9Cw0YLQtdC8INC00LLQsCDQs9C+0LTQsCDQv9C+0LTRgNGP0LQsINCyINGB0LXQt9C+0L3QsNGFIDE5NzgvNzkg0LggMTk3OS84MCwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0YfQtdC80L/QuNC+0L3QvtC8INGB0YLRgNCw0L3Riy4gMTk4MSDQs9C+0LQg0YHRgtCw0Lsg0L7Rh9C10YDQtdC00L3QvtC5INGP0YDQutC+0Lkg0YHRgtGA0LDQvdC40YbQtdC5INCyINC40YHRgtC+0YDQuNC4INC60LvRg9Cx0LAsINCyINGC0YDQtdGC0LjQuSDRgNCw0Lcg0LIg0YHQstC+0LXQuSDQuNGB0YLQvtGA0LjQuCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINGB0YLQsNC90L7QstGP0YLRgdGPINC+0LHQu9Cw0LTQsNGC0LXQu9GP0LzQuCDQmtGD0LHQutCwINC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtC00LXRgNC20LDQsiDQv9C+0LHQtdC00YMg0L3QsNC0INC80LDQtNGA0LjQtNGB0LrQuNC8IFxcXCLQoNC10LDQu9C+0LxcXFwiINCyINGE0LjQvdCw0LvQtSDRgtGD0YDQvdC40YDQsCwg0LAg0YLQsNC60LbQtSDQstGL0LjQs9GA0YvQstCw0Y7RgiDQmtGD0LHQvtC6INCb0LjQs9C4LiDQkiDRgdC10LfQvtC90LDRhSAxOTgxLzgyINC4IDE5ODIvODMgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNCy0L7QtdCy0YvQstCw0LXRgiDQtdGJ0LUg0LTQstCwINCz0LvQsNCy0L3Ri9GFINGE0YPRgtCx0L7Qu9GM0L3Ri9GFINGC0YDQvtGE0LXRjyDRgdGC0YDQsNC90YssINC/0L7RgdC70LUg0YfQtdCz0L4g0J/QtdC50YHQu9C4INC/0YDQuNC90LjQvNCw0LXRgiDRgNC10YjQtdC90LjQtSDRg9C50YLQuCDQvdCwINC/0LXQvdGB0LjRji4g0JfQsCDQtNC10LLRj9GC0Ywg0LvQtdGCINC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstCwINC60LvRg9Cx0L7QvCDQtdC80YMg0YjQtdGB0YLRjCDRgNCw0Lcg0L/RgNC40YHRg9C20LTQsNC70L7RgdGMINC30LLQsNC90LjQtSBcXFwi0JvRg9GH0YjQuNC5INGC0YDQtdC90LXRgCDQs9C+0LTQsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQndCwINC/0L7RgdGCINCz0LvQsNCy0L3QvtCz0L4g0YLRgNC10L3QtdGA0LAg0LfQsNGB0YLRg9C/0LjQuyDQlNC20L4g0KTRjdCz0LDQvSwg0Lgg0LIg0L/QtdGA0LLRi9C5INC20LUg0LPQvtC0INC/0L7QtCDQtdCz0L4g0YDRg9C60L7QstC+0LTRgdGC0LLQvtC8INC60LvRg9CxINCy0YvQuNCz0YDQsNC7INGH0LXQvNC/0LjQvtC90LDRgiDQkNC90LPQu9C40LgsINCa0YPQsdC+0Log0JvQuNCz0Lgg0Lgg0JrRg9Cx0L7QuiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7Qsiwg0L7QsdGL0LPRgNCw0LIgXFxcItCg0L7QvNGDXFxcIiDQsiDQmNGC0LDQu9C40LguINCh0LvQtdC00YPRjtGJ0LjQuSDRgdC10LfQvtC9INCx0YvQuyDQvtC80YDQsNGH0LXQvSDRgdGC0YDQsNGI0L3QvtC5INGC0YDQsNCz0LXQtNC40LXQuS4g0JLQviDQstGA0LXQvNGPINGE0LjQvdCw0LvQsCDQmtGD0LHQutCwINC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyINC/0YDQvtGC0LjQsiBcXFwi0K7QstC10L3RgtGD0YHQsFxcXCIg0L3QsCDRgdGC0LDQtNC40L7QvdC1IFxcXCLQrdC50LfQtdC70YxcXFwiINCy0L7Qt9C90LjQutC70Lgg0LHQtdGB0L/QvtGA0Y/QtNC60LguINCf0LXRgNC10LrRgNGL0YLQuNC1INC90LAg0YHRgtCw0LTQuNC+0L3QtSDRgNGD0YXQvdGD0LvQviDQuCDRg9C90LXRgdC70L4g0YEg0YHQvtCx0L7QuSDQttC40LfQvdC4IDM4INCx0L7Qu9C10LvRjNGJ0LjQutC+0LIg0LjRgtCw0LvRjNGP0L3RgdC60L7Qs9C+INC60LvRg9Cx0LAuINCSINC60L7QvdC10YfQvdC+0Lwg0YHRh9C10YLQtSDQvtCx0LvQsNC00LDRgtC10LvQtdC8INGC0YDQvtGE0LXRjyDRgdGC0LDQuyBcXFwi0K7QstC10L3RgtGD0YFcXFwiLCDQsCDQsNC90LPQu9C40LnRgdC60LjQvCDQutC70YPQsdCw0Lwg0L3QsCDQvdC10L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C5INGB0YDQvtC6INC30LDQv9GA0LXRgtC40LvQuCDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINC10LLRgNC+0L/QtdC50YHQutC40YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUuXFxyXFxuXFxyXFxuICAgICAgICDQkiAxOTg2INCz0L7QtNGDINCa0LXQvdC90Lgg0JTQsNC70LPQu9C40Ygg0LHRi9C7INC90LDQt9C90LDRh9C10L0g0LjQs9GA0LDRjtGJ0LjQvCDRgtGA0LXQvdC10YDQvtC8LiDQkiDRjdGC0L7QvCDQttC1INGB0LXQt9C+0L3QtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDRh9C10LzQv9C40L7QvdCw0YIg0Lgg0JrRg9Cx0L7QuiDQkNC90LPQu9C40LguINCSINGB0LXQt9C+0L3QtSAxOTg3Lzg4IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQvdC+0LLRj9GC0YHRjyDRh9C10LzQv9C40L7QvdCw0LzQuCDRgdGC0YDQsNC90YssINC+0LTQvdCw0LrQviDQsiDRhNC40L3QsNC70LUg0JrRg9Cx0LrQsCDQkNC90LPQu9C40Lgg0YPRgdGC0YPQv9Cw0Y7RgiBcXFwi0KPQuNC80LHQu9C00L7QvdGDXFxcIi4g0KHQtdC30L7QvSAxOTg4Lzg5INGB0YLQsNC7INGF0YPQtNGI0LjQvCDQsiDQuNGB0YLQvtGA0LjQuCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIi4g0JLQviDQstGA0LXQvNGPINC/0L7Qu9GD0YTQuNC90LDQu9GM0L3QvtCz0L4g0LzQsNGC0YfQsCDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDQv9GA0L7RgtC40LIgXFxcItCd0L7RgtGC0LjQvdCz0LXQvCDQpNC+0YDQtdGB0YJcXFwiINC90LAg0YHRgtCw0LTQuNC+0L3QtSBcXFwi0KXQuNC70LvRgdCx0L7RgNC+XFxcIiA5NiDQsdC+0LvQtdC70YzRidC40LrQvtCyIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC/0L7Qs9C40LHQu9C4INCyINGA0LXQt9GD0LvRjNGC0LDRgtC1INC/0LXRgNC10L/QvtC70L3QtdC90LjRjyDRgtGA0LjQsdGD0L3RiyBcXFwi0JvQtdC/0L/QuNC90LMg0JvQtdC50L1cXFwiLiDQn9C+0LfQttC1IFxcXCLQmtGA0LDRgdC90YvQtVxcXCIg0LLRi9GI0LvQuCDQsiDRhNC40L3QsNC7LCDQs9C00LUg0LLRgdGC0YDQtdGC0LjQu9C40YHRjCDRgSBcXFwi0K3QstC10YDRgtC+0L3QvtC8XFxcIi4g0J/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDQvNCw0YLRh9CwINCx0L7Qu9C10LvRjNGJ0LjQutC4INC+0LHQtdC40YUg0LrQvtC80LDQvdC0INC/0LXQu9C4IFxcXCJZb3Ugd2lsbCBuZXZlciB3YWxrIGFsb25lXFxcIiDQuCDQv9GA0L7QstC10LvQuCDQvNC40L3Rg9GC0YMg0LzQvtC70YfQsNC90LjRjywg0LIg0L/QsNC80Y/RgtGMINC+INC/0L7Qs9C40LHRiNC40YUg0L3QsCBcXFwi0KXQuNC70LvRgdCx0L7RgNC+XFxcIi4gXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L/QvtCx0LXQtNC40Lsg0YHQviDRgdGH0LXRgtC+0LwgMzoyINCx0LvQsNCz0L7QtNCw0YDRjyDQtNCy0YPQvCDQs9C+0LvQsNC8LCDQt9Cw0LHQuNGC0YvQvCDQstGL0YjQtdC00YjQuNC8INC90LAg0LfQsNC80LXQvdGDINCY0LDQvdC+0Lwg0KDQsNGI0LXQvC4g0JPQu9Cw0LLQvdGL0Lkg0YLRgNC+0YTQtdC5INC70LjQs9C4INGC0LDQutC20LUg0LHRi9C7INC/0YDQsNC60YLQuNGH0LXRgdC60Lgg0LIg0YDRg9C60LDRhSDRgyBcXFwi0LrRgNCw0YHQvdGL0YVcXFwiLCDRh9GC0L7QsdGLINGN0YLQvtC80YMg0L/QvtC80LXRiNCw0YLRjCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIg0L3Rg9C20L3QviDQsdGL0LvQviDQstGL0LjQs9GA0LDRgtGMINC90LAgXFxcItCt0L3RhNC40LvQtNC1XFxcIiDRgSDQv9GA0LXQuNC80YPRidC10YHRgtCy0L7QvCDQsiDQtNCy0LAg0LzRj9GH0LAuINCaINC60L7QvdGG0YMg0YDQtdGI0LDRjtGJ0LXQs9C+INC80LDRgtGH0LAgXFxcItCQ0YDRgdC10L3QsNC7XFxcIiDQstC10Lsg0LIg0YHRh9C10YLQtSAxOjAsINC90L4g0LPQvtC7INCc0LDQudC60LvQsCDQotC+0LzQsNGB0LAsINC30LDQsdC40YLRi9C5INGD0LbQtSDQsiDQtNC+0LHQsNCy0LvQtdC90L3QvtC1INCy0YDQtdC80Y8sINC/0L7RhdC+0YDQvtC90LjQuyDQvdCw0LTQtdC20LTRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDQvdCwINC+0YfQtdGA0LXQtNC90L7QuSDRgtGA0L7RhNC10LnQvdGL0Lkg0LTRg9Cx0LvRjC4g0J/QvtGB0LvQtSDQvtC60L7QvdGH0LDQvdC40Y8g0YHQtdC30L7QvdCwINCa0LXQvdC90Lgg0JTQsNC70LPQu9C40Ygg0L7RgdGC0LDQstC40Lsg0YHQstC+0Lkg0L/QvtGB0YIsINC+0LHRitGP0YHQvdC40LIg0Y3RgtC+INGI0L7QutC40YDQvtCy0LDQstGI0LXQtSDQvNC90L7Qs9C40YUg0YDQtdGI0LXQvdC40LUg0L3QtdGA0LLQvdGL0Lwg0L/QtdGA0LXQvdCw0L/RgNGP0LbQtdC90LjQtdC8LlxcclxcblxcclxcbiAgICAgICAg0JLRgNC10LzQtdC90L3QviDQt9Cw0LzQtdC90LjRgtGMINCU0LDQu9Cz0LvQuNGI0LAg0LHRi9C7INC/0YDQuNC30LLQsNC9INCg0L7QvdC90Lgg0JzQvtGA0LDQvSwg0L/RgNC10LbQtNC1INGH0LXQvCDQsiDQsNC/0YDQtdC70LUgMTk5MSDQs9C+0LTQsCDQvdCwINC/0L7RgdGCINCz0LvQsNCy0L3QvtCz0L4g0YLRgNC10L3QtdGA0LAg0L3QtSDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQk9GA0Y3QvCDQodGD0L3QtdGB0YEuINCe0L0g0L/RgNC40LLQtdC7INCyINC60L7QvNCw0L3QtNGDINC80L3QvtC20LXRgdGC0LLQviDQvdC+0LLRi9GFINC40LPRgNC+0LrQvtCyLCDQvdC+INC10LPQviDRgdGC0YDQvtCz0LjQuSDRgdGC0LjQu9GMINGA0LDQsdC+0YLRiyDQvdC1INC/0L7Qu9GM0LfQvtCy0LDQu9GB0Y8g0L/QvtC/0YPQu9GP0YDQvdC+0YHRgtGM0Y4g0Lgg0L3QtSDQv9C+0LzQvtCzINC60L7QvNCw0L3QtNC1INC/0L7QstGC0L7RgNC40YLRjCDRg9GB0L/QtdGFINC/0YDQvtGI0LvRi9GFINC70LXRgi4g0J3QsNGH0LjQvdCw0Y8g0YEg0Y3RgNGLINCh0YPQvdC90LXRgdCwINC4INC00L4g0YHQuNGFINC/0L7RgCDQutC70YPQsSDQv9GA0LXRgdC70LXQtNGD0LXRgiDQvNC90L7QttC10YHRgtCy0L4g0L/RgNC+0LHQu9C10LwuXFxyXFxuXFxyXFxuICAgICAgICDQoNC+0Lkg0K3QstCw0L3RgSDQsiDRgdCy0L7QuSDQv9C10YDQstGL0Lkg0L/QvtC70L3Ri9C5INGB0LXQt9C+0L0g0YMg0YDRg9C70Y8g0LrQu9GD0LHQsCwg0LIgMTk5NSDQs9C+0LTRgywg0LLRi9C40LPRgNCw0Lsg0JrRg9Cx0L7QuiDQm9C40LPQuC4g0J3QtdGB0LzQvtGC0YDRjyDQvdCwINGC0L4sINGH0YLQviDQtdC80YMg0YPQtNCw0LvQvtGB0Ywg0L/QvtGB0YLRgNC+0LjRgtGMINC40L3RgtC10YDQtdGB0L3Rg9GOINC60L7QvNCw0L3QtNGDINC80L7Qu9C+0LTRi9GFINC40LPRgNC+0LrQvtCyLCDQvNC90L7Qs9C40LUg0LjQtyDQutC+0YLQvtGA0YvRhSDQv9GA0LjRiNC70Lgg0LjQtyDRjtC90L7RiNC10YHQutC+0Lkg0LrQvtC80LDQvdC00YsgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIsINC90LjQutCw0LrQuNGFINGB0LXRgNGM0LXQt9C90YvRhSDQv9C+0LHQtdC0INC10LzRgyDQvtC00LXRgNC20LDRgtGMINC90LUg0YPQtNCw0LvQvtGB0YwuINCR0L7Qu9C10LvRjNGJ0LjQutC4INC4INGA0YPQutC+0LLQvtC00YHRgtCy0L4g0YLRgNC10LHQvtCy0LDQu9C4INCz0YDQvtC80LrQuNGFINGD0YHQv9C10YXQvtCyLCDQuCDQsiAxOTk4INCz0L7QtNGDINCyINC60LvRg9CxINCx0YvQuyDQv9GA0LjQs9C70LDRiNC10L0g0JbQtdGA0LDRgCDQo9C70YzQtSwg0LrQvtGC0L7RgNGL0Lkg0LTQvtC70LbQtdC9INCx0YvQuyDRgNCw0LfQtNC10LvQuNGC0Ywg0YLRgNC10L3QtdGA0YHQutC+0LUg0LrRgNC10YHQu9C+INGBINCg0L7QtdC8INCt0LLQsNC90YHQvtC8LiDQntC/0YvRgiDRgdC+0LLQvNC10YHRgtC90L7QuSDRgNCw0LHQvtGC0Ysg0L7QutCw0LfQsNC70YHRjyDQvdC10YPQtNCw0YfQvdGL0LwsINC4INCt0LLQsNC90YEg0L/QvtC60LjQvdGD0Lsg0LrQu9GD0LEsINC/0L7Qu9C+0LbQuNCyINGC0LXQvCDRgdCw0LzRi9C8INC60L7QvdC10YYgMzUg0L/QtdGA0LjQvtC00YMg0L/RgNC10LTQsNC90L3QvtC5INGB0LvRg9C20LHRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GOXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCj0LvRjNC1INC90LDRh9Cw0Lsg0YDQsNC30LLQuNCy0LDRgtGMINGB0L7RgdGC0LDQsiDQutC70LzQsNC90LTRiywg0L/RgNC40LPQu9Cw0YjQsNGPINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQvdC10LjQt9Cy0LXRgdGC0L3Ri9GFINC40LPRgNC+0LrQvtCyLCDQv9GA0Lgg0Y3RgtC+0Lwg0LXQs9C+INGB0L7QstC10YDRiNC10L3QvdC+INC90LUg0L/Rg9Cz0LDQu9C4INC60YDQuNGC0LjRh9C10YHQutC40LUg0L7RgtC30YvQstGLINGB0YDQtdC00YHRgtCyINC80LDRgdGB0L7QstC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LguINCV0LzRgyDRg9C00LDQu9C+0YHRjCDQt9C90LDRh9C40YLQtdC70YzQvdC+INGD0LvRg9GH0YjQuNGC0Ywg0LjQs9GA0YMg0LrQvtC80LDQvdC00Ysg0LIg0L7QsdC+0YDQvtC90LUsINC30LAg0YfRgtC+INCyIDIwMDEg0LPQvtC00YMg0L7QvSDQsdGL0Lsg0LLQvtC30L3QsNCz0YDQsNC20LTQtdC9INC/0Y/RgtGM0Y4g0YLRgNC+0YTQtdGP0LzQuCwg0LAgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L3QtSDQv9C+0YLQtdGA0L/QtdC7INC90Lgg0L7QtNC90L7Qs9C+INC/0L7RgNCw0LbQtdC90LjRjyDQsiDQutGD0LHQutC+0LLRi9GFINGB0L7RgNC10LLQvdC+0LLQsNC90LjRj9GFINGC0L7Qs9C+INGB0LXQt9C+0L3QsCDQuCDQutCy0LDQu9C40YTQuNGG0LjRgNC+0LLQsNC70YHRjyDQsiDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIuXFxyXFxuXFxyXFxuICAgICAgICDQndCwINGB0LvQtdC00YPRjtGJ0LjQuSDQs9C+0LQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YHQtdGA0YzQtdC30L3QviDQv9GA0LXRgtC10L3QtNC+0LLQsNC7INC90LAg0L/QvtCx0LXQtNGDINCyINCf0YDQtdC80YzQtdGALdC70LjQs9C1INC4INCyINGC0L4g0LbQtSDQstGA0LXQvNGPINC90LXQv9C70L7RhdC+INGB0LXQsdGPINC/0YDQvtGP0LLQuNC7INCyINCb0LjQs9C1INGH0LXQvNC/0LjQvtC90L7Qsiwg0LTQvtCx0YDQsNCy0YjQuNGB0Ywg0LTQviDRh9C10YLQstC10YDRgtGM0YTQuNC90LDQu9CwINGB0L7RgNC10LLQvdC+0LLQsNC90LjRjywg0LPQtNC1INGD0YHRgtGD0L/QuNC7INC70LXQstC10YDQutGD0LfQtdC90YHQutC+0LzRgyBcXFwi0JHQsNC50LXRgNGDXFxcIiwg0LLRi9GI0LXQtNGI0LXQvNGDINCyINC40YLQvtCz0LUg0LIg0YTQuNC90LDQuyDRgtGD0YDQvdC40YDQsC5cXHJcXG5cXHJcXG4gICAgICAgINCY0Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgdC+INC30LTQvtGA0L7QstGM0LXQvCDQltC10YDQsNGA0LAg0KPQu9GM0LUsINCx0L7Qu9GM0YjRg9GOINGH0LDRgdGC0Ywg0YHQu9C10LTRg9GO0YnQtdCz0L4g0YHQtdC30L7QvdCwINC60L7QvNCw0L3QtNC+0Lkg0YTQsNC60YLQuNGH0LXRgdC60Lgg0YDRg9C60L7QstC+0LTQuNC7INCk0LjQuyDQotC+0LzQv9GB0L7QvSwg0L3QviDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQstC+0LXQvCDQsdGD0YLRgNGD0LzQvtCy0YHQutC+0LzRgyDQv9GA0L7RiNC70L7QvNGDINC10LzRgyDRg9C00LDQu9C+0YHRjCDRg9GB0L/QtdGI0L3QviDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDRjdGC0L7QuSDQt9Cw0LTQsNGH0LXQuS4g0JIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNC90Y/QuyDQstGC0L7RgNC+0LUg0LzQtdGB0YLQviwg0YPRgdGC0YPQv9C40LIg0LvQuNGI0YwgXFxcItCQ0YDRgdC10L3QsNC70YNcXFwiLCDQuCDQstC90L7QstGMINC/0L7Qu9GD0YfQuNC7INC/0YPRgtC10LLQutGDINCyINCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCh0LXQt9C+0L0gMjAwMy8wNCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQtdGA0YjQuNC7INC90LAg0YfQtdGC0LLQtdGA0YLQvtC8INC80LXRgdGC0LUsINC/0L7Qu9GD0YfQuNCyINGC0LXQvCDRgdCw0LzRi9C8INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/RgNC40L3Rj9GC0Ywg0YPRh9Cw0YHRgtC40LUg0LIg0JvQuNCz0LUg0KfQtdC80L/QuNC+0L3QvtCyINGB0LvQtdC00YPRjtGJ0LXQs9C+INGB0LXQt9C+0L3QsC4g0KDRg9C60L7QstC+0LTRgdGC0LLQviDQutC70YPQsdCwINGA0LXRiNC40LvQviwg0YfRgtC+INC90LDRgdGC0LDQu9CwINC/0L7RgNCwINC/0LXRgNC10LzQtdC9LiDQndC+0LLRi9C8INCz0LvQsNCy0L3Ri9C8INGC0YDQtdC90LXRgNC+0Lwg0LHRi9C7INC90LDQt9C90LDRh9C10L0g0KDQsNGE0LDRjdC70Ywg0JHQtdC90LjRgtC10YEsINCwINCj0LvRjNC1INGB0L7Qs9C70LDRgdC40LvRgdGPINC/0L7QutC40L3Rg9GC0Ywg0LrQu9GD0LEuXFxyXFxuXFxyXFxuICAgICAgICDQkdC10L3QuNGC0LXRgSDQvdC1INGB0YLQsNC7INGC0YDQsNGC0LjRgtGMINCy0YDQtdC80Y8g0L3QsCDQv9C+0LjRgdC60Lgg0LTQu9GPINGB0LXQsdGPINC90L7QstGL0YUg0L/QvtC80L7RidC90LjQutC+0LIsINCwINC+0YHRgtCw0LLQuNC7INC90LAg0YHQstC+0LjRhSDQtNC+0LvQttC90L7RgdGC0Y/RhSDQpNC40LvQsCDQotC+0LzQv9GB0L7QvdCwLCDQodGN0LzQvNC4INCb0Lgg0Lgg0JTQttC+INCa0L7RgNGA0LjQs9Cw0L3QsC4g0JLQvdC10LfQsNC/0L3QviBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstC10YDQvdGD0LvRgdGPINC6INCw0YLQsNC60YPRjtGJ0LXQvNGDINGB0YLQuNC70Y4g0LjQs9GA0Ysg0YEg0LHQvtC70YzRiNC40Lwg0LrQvtC70LjRh9C10YHRgtCy0L7QvCDQv9C10YDQtdC00LDRhywg0L3QsCDRgNCw0LTQvtGB0YLRjCDQsdC+0LvQtdC70YzRidC40LrQsNC8INC4INC60YDQuNGC0LjQutCw0LwsINC4INGB0YLQsNC7INC/0YDQvtGP0LLQu9GP0YLRjCDQvdCw0LzQtdC60Lgg0L3QsCDQvNC90L7Qs9C+0L7QsdC10YnQsNGO0YnQtdC1INCx0YPQtNGD0YnQtdC1LiDQkiDQutC+0L3RhtC1INGB0LXQt9C+0L3QsCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIg0LIg0L7QtNC90L7QvCDQuNC3INGB0LDQvNGL0YUg0LfQsNGF0LLQsNGC0YvQstCw0Y7RidC40YUg0YTQuNC90LDQu9C+0LIg0LIg0LjRgdGC0L7RgNC40Lgg0YLRg9GA0L3QuNGA0LAuXFxyXFxuXFxyXFxuICAgICAgICDQoNGD0LrQvtCy0L7QtNGB0YLQstC+INC60LvRg9Cx0LAsINCyINC70LjRhtC1INCw0LzQtdGA0LjQutCw0L3RgdC60LjRhSDQstC70LDQtNC10LvRjNGG0LXQsiDQlNC20L7RgNC20LAg0JbQuNC70LvQtdGC0YLQsCDQuCDQotC+0LzQsCDQpdC40LrRgdCwLCDQtNCw0LLQuNC70L4g0L3QsCDQkdC10L3QuNGC0LXRgdCwINGBINGC0YDQtdCx0L7QstCw0L3QuNC10Lwg0L3QtdC80LXQtNC70LXQvdC90L7Qs9C+INGD0YHQv9C10YXQsCDQsiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtS4g0KDQsNGB0LrQvtC7INC/0YDQvtC40LfQvtGI0LXQuywg0LrQvtCz0LTQsCDRgtGA0LXQvdC10YDRgyDQsdGL0LvQviDQvtGC0LrQsNC30LDQvdC+INCyINGB0YDQtdC00YHRgtCy0LDRhSDQvdCwINGD0YHQuNC70LXQvdC40LUg0YHQvtGB0YLQsNCy0LAuXFxyXFxuXFxyXFxuICAgICAgICDQm9C10YLQvtC8IDIwMTAg0LPQvtC00LAg0JHQtdC90LjRgtC10YHQsCDRgdC80LXQvdC40Lsg0KDQvtC5INCl0L7QtNC20YHQvtC9LCDQutC+0YLQvtGA0L7QvNGDINC30LAg0YLQviDQvdC10L/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtC1INCy0YDQtdC80Y8sINGH0YLQviDQvtC9INC/0YDQvtCx0YvQuyDRgyDRgNGD0LvRjyDQutC70YPQsdCwLCDRgtCw0Log0L3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LLQvtC10LLQsNGC0Ywg0LvRjtCx0L7QstGMINCx0L7Qu9C10LvRjNGJ0LjQutC+0LIuINCa0LvRg9CxLCDRgtC10Lwg0LLRgNC10LzQtdC90LXQvCwg0L/Ri9GC0LDQu9GB0Y8g0YDQsNC30L7RgNCy0LDRgtGMINCy0YHQtSDRgdCy0Y/Qt9C4INGBINCw0LzQtdGA0LjQutCw0L3RgdC60LjQvNC4INGF0L7Qt9GP0LXQstCw0LzQuC5cXHJcXG5cXHJcXG4gICAgICAgINCSINC60L7QvdGG0LUg0LrQvtC90YbQvtCyLCDQsdC70LDQs9C+0LTQsNGA0Y8g0YPRgdC40LvQuNGP0Lwg0L/RgNC10LfQuNC00LXQvdGC0LAg0LrQu9GD0LHQsCwg0JzQsNGA0YLQuNC90LAg0JHRgNC+0YLQvtC90LAsINC/0L7Rj9Cy0LjQu9GB0Y8g0L3QvtCy0YvQuSDQv9C+0LrRg9C/0LDRgtC10LvRjCwg0Lgg0YHQtNC10LvQutCwINC/0L4g0L/RgNC+0LTQsNC20LUgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0YHQvtGB0YLQvtGP0LvQsNGB0YwsINC90LXRgdC80L7RgtGA0Y8g0L3QsCDQstGB0LUg0YHRg9C00LXQsdC90YvQtSDQuNGB0LrQuCwg0L/Ri9GC0LDQstGI0LjQtdGB0Y8g0L/QvtC80LXRiNCw0YLRjCDQtdC1INC+0YHRg9GJ0LXRgdGC0LLQu9C10L3QuNGOLiDQkiDQvtC60YLRj9Cx0YDQtSAyMDEwINC60LvRg9CxINC/0L7Qv9GA0L7RidCw0LvRgdGPINGBINCl0LjQutGB0L7QvCDQuCDQltC40LvQu9C10YLRgtC+0Lwg0Lgg0LLRgdGC0YDQtdGC0LjQuyDQvdC+0LLQvtCz0L4g0LLQu9Cw0LTQtdC70YzRhtCwLCDQlNC20L7QvdCwINCT0LXQvdGA0LgsINGH0YzRjyDQutC+0LzQv9Cw0L3QuNGPIE5FVlMg0YPQttC1INC40LzQtdC70LAg0YPRgdC/0LXRiNC90YvQuSDQvtC/0YvRgiDRgNCw0LHQvtGC0Ysg0YEg0LHQvtGB0YLQvtC90YHQutC+0Lkg0LHQtdC50YHQsdC+0LvRjNC90L7QuSDQutC+0LzQsNC90LTQvtC5IFxcXCLQoNC10LQg0KHQvtC60YFcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KXQvtC00LbRgdC+0L0g0L3QtSDQvdCw0LTQvtC70LPQviDQt9Cw0LTQtdGA0LbQsNC70YHRjyDQsiDQutC70YPQsdC1LCDQv9C+0YHQu9C1INGD0LbQsNGB0L3QvtCz0L4g0L3QsNGH0LDQu9CwINGB0LXQt9C+0L3QsCAyMDEwLzExLCDQsiDRj9C90LLQsNGA0LUg0L7QvSDRgdC+0LPQu9Cw0YHQuNC70YHRjyDQv9C+0LrQuNC90YPRgtGMINGB0LLQvtC5INC/0L7RgdGCLCDQuCDQtdCz0L4g0LzQtdGB0YLQviDQstGA0LXQvNC10L3QvdC+INC30LDQvdGP0Lsg0JrQtdC90L3QuCDQlNCw0LvQs9C70YLRiCwg0YfRjNC1INC40LzRjyDQuiDRgtC+0LzRgyDQstGA0LXQvNC10L3QuCDQstGB0LUg0YfQsNGJ0LUg0YHRgtCw0LvQuCDQstGB0L/QvtC80LjQvdCw0YLRjCDQsdC+0LvQtdC70YzRidC40LrQuC5cXHJcXG5cXHJcXG4gICAgICAgINCU0LDQu9Cz0LvQuNGIINCx0YvRgdGC0YDQviDQstGB0LXQu9C40Lsg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDQutC+0LzQsNC90LTRgywg0LjQt9Cx0LDQstC40LvRgdGPINC+0YIg0L3QtdC90YPQttC90YvRhSDQuNCz0YDQvtC60L7Qsiwg0LLQutC70Y7Rh9Cw0Y8g0Lgg0YHQv9C+0YDQvdGL0Lkg0L/QtdGA0LXRhdC+0LQg0KTQtdGA0L3QsNC90LTQviDQotC+0YDRgNC10YHQsCDQsiBcXFwi0KfQtdC70YHQuFxcXCIsINC/0YDQuNC+0LHRgNC10Lsg0JvRg9C40YHQsCDQodGD0LDRgNC10YHQsCDQuCDQrdC90LTQuCDQmtGN0YDRgNC+0LvQu9CwINC00LvRjyDQv9C+0YHRgtGA0L7QtdC90LjRjyDQvdC+0LLQvtC5INC70LjQvdC40Lgg0LDRgtCw0LrQuC4g0JrQu9GD0LEg0YHQu9C+0LLQvdC+INC30LDQvdC+0LLQviDRgNC+0LTQuNC70YHRjyDQuCDQstC30LvQtdGC0LXQuyDQvdCwINC60YDRi9C70YzRj9GFLiDQkiDQutC+0L3RhtC1INGB0LXQt9C+0L3QsCDQlNCw0LvQs9C70LjRiCDQv9C+0LTQv9C40YHQsNC7INGBIFxcXCLQm9C40LLQtdGA0L/Rg9C70LXQvFxcXCIg0YLRgNC10YXQu9C10YLQvdC40Lkg0LrQvtC90YLRgNCw0LrRgi5cXHJcXG5cXHJcXG4gICAgICAgINCe0YHQvdC+0LLQvdC+0Lkg0YbQtdC70YzRjiDQutC70YPQsdCwINCx0YvQu9C+INCy0L7Qt9Cy0YDQsNGJ0LXQvdC40LUg0LIg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyLCDQt9CwINGB0LLQvtC5INC/0LXRgNCy0YvQuSDQv9C+0LvQvdGL0Lkg0YHQtdC30L7QvSDQsiDQutC70YPQsdC1INCU0LDQu9Cz0LTQuNGI0YMg0LTQvtGB0YLQuNGH0Ywg0LXQtSDQvdC1INGD0LTQsNC70L7RgdGMLCDQuNC3LdC30LAg0LTQvtGB0YLQsNGC0L7Rh9C90L4g0L3QtdGB0YLQsNCx0LjQu9GM0L3Ri9GFINCy0YvRgdGC0YPQv9C70LXQvdC40Lkg0LrQvtC80LDQvdC00Ysg0LIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUuINCSINC40YLQvtCz0LUg0LrQu9GD0LEg0YTQuNC90LjRiNC40YDQvtCy0LDQuyDQvdCwINCy0L7RgdGM0LzQvtC8INC80LXRgdGC0LUg0LIg0YLQsNCx0LvQuNGG0LUsINC90LjQttC1INGB0LLQvtC10LPQviDQvtGB0L3QvtCy0L3QvtCz0L4g0LrQvtC90LrRg9GA0LXQvdGC0LAsIFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCi0LXQvCDQvdC1INC80LXQvdC10LUsIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGF0L7RgNC+0YjQviDQv9GA0L7Rj9Cy0LjQuyDRgdC10LHRjyDQsiDQutGD0LHQutC+0LLRi9GFINGB0L7RgNC10LLQvdC+0LLQsNC90LjRj9GFLiDQkiDRhNC10LLRgNCw0LvQtSAyMDEyINCz0L7QtNCwIFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLRi9C40LPRgNCw0LvQuCDQmtGD0LHQvtC6INCb0LjQs9C4LCDQvtCx0YvQs9GA0LDQsiBcXFwi0JrQsNGA0LTQuNGE0YRcXFwiINCyINGB0LXRgNC40Lgg0L/QtdC90LDQu9GM0YLQuCwg0LHQu9Cw0LPQvtC00LDRgNGPINGH0LXQvNGDINC/0L7Qu9GD0YfQuNC7INC/0YPRgtC10LLQutGDINCyINCb0LjQs9GDINCV0LLRgNC+0L/Riy4g0JAg0LIg0LzQsNC1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC4IFxcXCLQp9C10LvRgdC4XFxcIiDQstGB0YLRgNC10YLQuNC70LjRgdGMINCyINGE0LjQvdCw0LvQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCwg0L7QtNC90LDQutC+INGD0LTQsNGH0LAg0L7QutCw0LfQsNC70LDRgdGMINC90LAg0YHRgtC+0YDQvtC90LUg0LvQvtC90LTQvtC90YHQutC+0LPQviDQutC70YPQsdCwLlxcclxcblxcclxcbiAgICAgICAg0J3QtdGB0LzQvtGC0YDRjyDQvdCwINGD0YHQv9C10YXQuCDQsiDQutGD0LHQutC+0LLRi9GFINGC0YPRgNC90LjRgNCw0YUsINCyINC60L7QvdGG0LUg0YHQtdC30L7QvdCwINCU0LDQu9Cz0LvQuNGIINCx0YvQuyDRg9Cy0L7Qu9C10L0sINCwINC10LPQviDQvNC10YHRgtC+INC30LDQvdGP0Lsg0LzQvtC70L7QtNC+0Lkg0YHQtdCy0LXRgNC+0LjRgNC70LDQvdC00YHQutC40Lkg0YLRgNC10L3QtdGALCDQkdGA0LXQvdC00LDQvSDQoNC+0LTQttC10YDRgSwg0L/QvtC60L7RgNC40LLRiNC40Lkg0Log0YLQvtC80YMg0LLRgNC10LzQtdC90Lgg0LLRgdC10YUg0YHQstC+0LXQuSDRgNCw0LHQvtGC0L7QuSDRgSDQtNC+0YHRgtCw0YLQvtGH0L3QviDRgdC60YDQvtC80L3Ri9C8IFxcXCLQodGD0L7QvdGB0Lgg0KHQuNGC0LhcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KDQvtC00LbQtdGA0YEg0L/RgNC40YjQtdC7INGBINGA0LXRiNC40LzQvtGB0YLRjNGOINGD0YHRgtCw0L3QvtCy0LjRgtGMINCyINC60LvRg9Cx0LUg0L3QvtCy0YPRjiDRhNC40LvQvtGB0L7RhNC40Y4sINC/0YDQuNCy0LjRgtGMINC60L7QvNCw0L3QtNC1INC90L7QstGL0Lkg0YHRgtC40LvRjCDQuNCz0YDRiywg0L/RgNC4INGN0YLQvtC8INC90LUg0YLQtdGA0Y/Rjywg0LrQsNC6INC+0L0g0YPRgtCy0LXRgNC20LTQsNC7LCDRgdCy0Y/Qt9C4INGBINC40YHRgtC+0YDQuNC10LkuINChINGB0L7QsdC+0Lkg0LjQtyBcXFwi0KHRg9C+0L3RgdC4XFxcIiDQvtC9INC30LDRhdCy0LDRgtC40Lsg0YHQstC+0LjRhSDQsNGB0YHQuNGB0YLQtdC90YLQvtCyINC4INC/0L7Qu9GD0LfQsNGJ0LjRgtC90LjQutCwINCU0LbQviDQkNC70LvQtdC90LAuINCe0LTQvdCw0LrQviwg0LjQty3Qt9CwINC/0YDQvtCy0L7QtNC40LLRiNC10LPQvtGB0Y8g0LIg0YLQviDQstGA0LXQvNGPINGH0LXQvNC/0LjQvtC90LDRgtCwINCV0LLRgNC+0L/Riywg0YLRgNC10L3QtdGAINCy0L/QtdGA0LLRi9C1INGD0LLQuNC00LXQuyDQstGB0Y4g0YHQstC+0Y4g0LrQvtC80LDQvdC00YMg0LIg0YHQsdC+0YDQtSDRgtC+0LvRjNC60L4g0Log0L3QsNGH0LDQu9GDINGB0LXQt9C+0L3QsC4g0JIg0YHQtdC30L7QvdC1IDIwMTIvMTMgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9GB0YLRg9C/0LDQuyDQutGA0LDQudC90LUg0L3QtdGB0YLQsNCx0LjQu9GM0L3Qviwg0L/QvtC60LDQt9Cw0LIg0YXRg9C00YjQuNC5INC30LAg0L/QvtGB0LvQtdC00L3QuNC1INGB0YLQviDQu9C10YIg0YHRgtCw0YDRgiDRgdC10LfQvtC90LAuINCa0YDRg9C/0L3Ri9C1INC/0L7QsdC10LTRiyDRgdC80LXQvdGP0LvQuCDQvdC10L7QttC40LTQsNC90L3Ri9C1INCx0LXQt9Cy0L7Qu9GM0L3Ri9C1INC/0L7RgNCw0LbQtdC90LjRjy4g0JLQviDQstGA0LXQvNGPINC30LjQvNC90LXQs9C+INGC0YDQsNC90YHRhNC10YDQvdC+0LPQviDQvtC60L3QsCDQoNC+0LTQttC10YDRgdGDINGD0LTQsNC70L7RgdGMINGD0YHQuNC70LjRgtGMINC60L7QvNCw0L3QtNGDINC00LLRg9C80Y8g0L/RgNC40L7QsdGA0LXRgtC10L3QuNGP0LzQuDog0LDQvdCz0LvQuNC50YHQutC40Lwg0L3QsNC/0LDQtNCw0Y7RidC40Lwg0JTRjdC90LjQtdC70L7QvCDQodGC0LDRgNGA0LjQtNC20LXQvCDQuCDQsdC70LDQt9C40LvRjNGG0LXQvCDQpNC40LvQu9C40L/Qv9C1INCa0L7Rg9GC0LjQvdGM0L4uINCSINC40YLQvtCz0LUg0LrQvtC80LDQvdC00LAg0LfQsNCy0LXRgNGI0LjQu9CwINGB0LXQt9C+0L0g0L3QsCDRgdC10LTRjNC80L7QvCDQvNC10YHRgtC1LCDQstC90L7QstGMINC90LjQttC1IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCX0LjQvNC+0LkgMjAxMyDQstC10YLQtdGA0LDQvSDQutC70YPQsdCwINCU0LbQtdC50LzQuCDQmtCw0YDRgNCw0LPQtdGAINC+0LHRitGP0LLQuNC7INC+INC30LDQstC10YDRiNC10L3QuNC4INGB0LLQvtC10Lkg0LrQsNGA0YzQtdGA0Ysg0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiLiAxOSDQvNCw0Y8g0L7QvSDQv9GA0L7QstC10Lsg0YHQstC+0Lkg0L/QvtGB0LvQtdC00L3QuNC5INC+0YTQuNGG0LjQsNC70YzQvdGL0Lkg0LzQsNGC0Ycg0LIg0LrRgNCw0YHQvdC+0Lkg0YTRg9GC0LHQvtC70LrQtSDQsiDQv9C+0LHQtdC00L3QvtC8INC00LvRjyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDQvNCw0YLRh9C1INC/0YDQvtGC0LjQsiBcXFwi0JrRg9C40L3QtyDQn9Cw0YDQuiDQoNC10LnQvdC00LbQtdGA0YFcXFwiLlxcclxcbiAgICA8L2Rpdj48aHIgLz48aT5cXHJcXG4gICAgICAgINCY0YHRgtC+0YfQvdC40Lo6IGxmY29ubGluZS5jb21cXHJcXG4gICAgICAgINCf0LXRgNC10LLQvtC0OiB0YXMtbi1yXFxyXFxuICAgIDwvaT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL2NsdWItaGlzdG9yeS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiPHJ1bGVzPlwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3J1bGVzLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0NvbXBvbmVudCB7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ydWxlcy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPHA+PGZvbnQgY29sb3I9XFxcInJlZFxcXCI+PGI+0JTQsNC90L3Ri9C1INC/0YDQsNCy0LjQu9CwINC90LUg0L/QvtC00LvQtdC20LDRgiDQvtCx0YHRg9C20LTQtdC90LjRjiDQuCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGLINC00LvRjyDQstGL0L/QvtC70L3QtdC90LjRjyDQstGB0LXQvNC4INCx0LXQtyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INC/0L7RgNGC0LDQu9CwINGA0LDQvdCz0L7QvCDQvtGCINC/0YDQvtGB0YLQvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC00L4g0LzQvtC00LXRgNCw0YLQvtGA0LAgKNCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YsgLSDQutCw0Log0LvQuNGG0LAsINGN0YLQuCDQv9GA0LDQstC40LvQsCDRg9GB0YLQsNC90LDQstC70LjQstCw0Y7RidC40LUgLSDQv9C+0YHRgtGD0L/QsNGO0YIg0L/QviDRgdCy0L7QtdC80YMg0YPRgdC80L7RgtGA0LXQvdC40Y4pLiDQldGB0LvQuCDQstCw0Lwg0L3QtSDQvdGA0LDQstGP0YLRgdGPINGN0YLQuCDQv9GA0LDQstC40LvQsCDQuCDQstGLINGF0L7RgtC40YLQtSDQtNC70Y8g0YHQtdCx0Y8g0LTRgNGD0LPQuNC1INC/0YDQsNCy0LjQu9CwIC0g0LLRiyDQstGB0LXQs9C00LAg0LzQvtC20LXRgtC1INGB0L7Qt9C00LDRgtGMINGB0LLQvtC5INGB0L7QsdGB0YLQstC10L3QvdGL0Lkg0YHQsNC50YIg0Lgg0LTQtdC70LDRgtGMINGC0LDQvCDQstGB0LUsINGH0YLQviDQstCw0Lwg0L3RgNCw0LLQuNGC0YHRjy48L2I+PC9mb250PiA8L3A+XFxyXFxuICAgIDxwPtCf0YDQsNCy0LjQu9CwINCy0LLQvtC00Y/RgtGB0Y8g0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LrQvtC80YTQvtGA0YLQvdC+0Lkg0Lgg0LrQvtC90YHRgtGA0YPQutGC0LjQstC90L7QuSDQsNGC0LzQvtGB0YTQtdGA0Ysg0L7QsdGJ0LXQvdC40Y8uINCV0YHQu9C4INCS0LDRgSDQvdC1INGD0YHRgtGA0LDQuNCy0LDQtdGCINGD0YHRgtCw0L3QvtCy0LvQtdC90L3QsNGPINGE0L7RgNC80LAg0L7QsdGJ0LXQvdC40Y8sINCy0L7Qt9C00LXRgNC20LjRgtC10YHRjCDQvtGCINGD0YfQsNGB0YLQuNGPINCyINC00LDQvdC90L7QuSDQutC+0L3RhNC10YDQtdC90YbQuNC4LjwvcD5cXHJcXG4gICAgPHA+PGI+SS4g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS48L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0KDQtdCz0LjRgdGC0YDQuNGA0YPRj9GB0Ywg0L3QsCDRhNC+0YDRg9C80LUsINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgdC+0LPQu9Cw0YjQsNC10YLRgdGPINCy0YvQv9C+0LvQvdGP0YLRjCDQtNCw0L3QvdGL0LUg0J/RgNCw0LLQuNC70LAuPC9saT5cXHJcXG4gICAgICAgIDxsaT7QlNC70Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQvdCwINGE0L7RgNGD0LzQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LTQvtC70LbQtdC9INC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDQtNC10LnRgdGC0LLRg9GO0YnQuNC5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLiDQnNGLINCz0LDRgNCw0L3RgtC40YDRg9C10Lwg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtGMINGD0LrQsNC30LDQvdC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCS0YvQsdC+0YAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gKG5pY2tuYW1lKSDRj9Cy0LvRj9C10YLRgdGPINCy0LDRiNC40Lwg0LjRgdC60LvRjtGH0LjRgtC10LvRjNC90YvQvCDQv9GA0LDQstC+0LwuINCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC+0YHRgtCw0LLQu9GP0LXRgiDQt9CwINGB0L7QsdC+0Lkg0L/RgNCw0LLQviDQv9GA0LjQvdGP0YLRjCDQvNC10YDRiyDQuiDQv9GA0LXQutGA0LDRidC10L3QuNGOINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIG5pY2tuYW1lLCDQtdGB0LvQuCDQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0L3QsNGA0YPRiNCw0LXRgiDQvtCx0YnQtdC/0YDQuNC90Y/RgtGL0LUg0LzQvtGA0LDQu9GM0L3Ri9C1INC4INGN0YLQuNGH0LXRgdC60LjQtSDQvdC+0YDQvNGLINC40LvQuCDRj9Cy0LvRj9C10YLRgdGPINC+0YHQutC+0YDQsdC40YLQtdC70YzQvdGL0Lwg0LTQu9GPINC00YDRg9Cz0LjRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDRhNC+0YDRg9C80LAuINCX0LDQv9GA0LXRidC10L3QsCDRgNC10LPQuNGB0YLRgNCw0YbQuNGPIG5pY2tuYW1lLCDRgdGF0L7QttC40YUg0YEg0YPQttC1INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQvNC4INC00L4g0YHRgtC10L/QtdC90LgsINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LLQstC10YHRgtC4INCyINC30LDQsdC70YPQttC00LXQvdC40LUg0LTRgNGD0LPQuNGFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INGE0L7RgNGD0LzQsC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCX0LDQv9GA0LXRidC10L3QsCDQvdC10L7QtNC90L7QutGA0LDRgtC90LDRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNGPINC+0LTQvdC40Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LwsINCy0L3QtSDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YbQtdC70LXQuSwg0YEg0LrQvtGC0L7RgNGL0LzQuCDRgtCw0LrQsNGPINGA0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/RgNC+0LLQvtC00LjRgtGB0Y8uINCU0LDQvdC90L7QtSDQvdCw0YDRg9GI0LXQvdC40LUg0Y/QstC70Y/QtdGC0YHRjyDQutGA0LDQudC90LUg0YHQtdGA0YzQtdC30L3Ri9C8INC4INCy0LXQtNC10YIg0Log0LHQu9C+0LrQuNGA0L7QstCw0L3QuNGOINCy0YHQtdGFINGD0YfQtdGC0L3Ri9GFINC30LDQv9C40YHQtdC5LiDQldGB0LvQuCDQstCw0Lwg0L3QtSDQvdGA0LDQstC40YLRgdGPINC90LjQuiwg0L3QsNC/0LjRiNC40YLQtSDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40Lkg0YDQsNC30LTQtdC7INGE0L7RgNGD0LzQsCDQuNC70Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDRgy48L2xpPlxcclxcbiAgICAgICAgPGxpPtCV0YHQu9C4INCy0Ysg0L3QtSDQv9GA0L7Rj9Cy0LvRj9C10YLQtSDQsNC60YLQuNCy0L3QvtGB0YLRjCDQvdCwINGE0L7RgNGD0LzQtSDQsiDRgtC10YfQtdC90LjQtSDQtNC70LjRgtC10LvRjNC90L7Qs9C+INCy0YDQtdC80LXQvdC4LCDQstCw0YjQsCDRg9GH0LXRgtC90LDRjyDQt9Cw0L/QuNGB0Ywg0LzQvtC20LXRgiDQsdGL0YLRjCDRg9C00LDQu9C10L3QsC48L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD48Yj5JSS4g0J3QsCDQpNC+0YDRg9C80LUgPGZvbnQgY29sb3I9XFxcInJlZFxcXCI+0LfQsNC/0YDQtdGJ0LXQvdC+PC9mb250Pjo8L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC90LXQvdC+0YDQvNCw0YLQuNCy0L3Rg9GOINC70LXQutGB0LjQutGDINCyINC70Y7QsdGL0YUg0LXRkSDQv9GA0L7Rj9Cy0LvQtdC90LjRj9GFLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDRgdC+0LrRgNCw0YnQtdC90L3Rg9GOINC40LvQuCDQt9Cw0LzQtdC90LXQvdC90YPRjiDCq9C30LLQtdC30LTQvtGH0LrQsNC80LjCuyAo0LjQu9C4INC00YDRg9Cz0LjQvNC4INGB0LjQvNCy0L7Qu9Cw0LzQuCksINC90LAg0YDRg9GB0YHQutC+0LwsINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUsINC70LjQsdC+INGC0YDQsNC90YHQu9C40YLQtS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YssINGA0LDQvdC10LUg0L7QsdGB0YPQttC00LDQstGI0LjQtdGB0Y8g0LIg0KTQvtGA0YPQvNC1LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y8sINC90LUg0LjQvNC10Y7RidC40LUg0L7RgtC90L7RiNC10L3QuNGPINC6INC+0LHRgdGD0LbQtNCw0LXQvNC+0Lkg0YLQtdC80LUgKNC+0YTRhNGC0L7Qv9C40LopLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINCyINC60L7RgtC+0YDRi9GFINCx0L7Qu9C10LUg0L/QvtC70L7QstC40L3RiyDQstGB0LXQuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQvdCw0L/QuNGB0LDQvdC+INCX0JDQk9Cb0JDQktCd0KvQnNCYINCR0KPQmtCS0JDQnNCYLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiywg0LjQvNC10Y7RidC40LUg0LIg0L3QsNC30LLQsNC90LjQuCDRg9C60YDQsNGI0LXQvdC40Y8gKMKrPT09LS0t0JzQvtGPINGC0LXQvNCwLS0tPT09wrspLCDQvdC1INC+0YLRgNCw0LbQsNGO0YnQuNC1INGB0YPRgtGMINCy0L7Qv9GA0L7RgdCwICjCq9Cf0L7RgdC80L7RgtGA0Lgg0YHRjtC00LDCuyDQuNC70LggwqtmZGdsO2ZqZGdsO2ZkamdsZ2ZkwrspLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDRgSDQvtCx0YDQsNGJ0LXQvdC40LXQvCDQuiDQutC+0L3QutGA0LXRgtC90L7QvNGDINGD0YfQsNGB0YLQvdC40LrRgyDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JTRg9Cx0LvQuNGA0L7QstCw0YLRjCDRgtC10LzRiywg0YLQviDQtdGB0YLRjCDRgNCw0LfQvNC10YnQsNGC0Ywg0L7QtNC40L3QsNC60L7QstGL0LUg0YHQvtC+0LHRidC10L3QuNGPINCyINGA0LDQt9C90YvRhSDRgNCw0LfQtNC10LvQsNGFINCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qp9GA0LXQt9C80LXRgNC90L7QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQs9GA0LDRhNC40YfQtdGB0LrQuNGFINGB0LzQsNC50LvQuNC60L7QsiDQsiDRgdC+0L7QsdGJ0LXQvdC40LggKNCx0L7Qu9C10LUg0YLRgNC10YUg0L/QvtC00YDRj9C0KSDQuNC70Lgg0L/QvtC70L3QvtGB0YLRjNGOINGB0L7RgdGC0L7Rj9GJ0LXQtSDRgtC+0LvRjNC60L4g0LjQtyDRgdC80LDQudC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GD0LHQu9C40LrQsNGG0LjRjyDQv9C+0YHRgtC+0LIsINC90LUg0L3QtdGB0YPRidC40YUg0LfQvdCw0YfQuNGC0LXQu9GM0L3QvtC5INGB0LzRi9GB0LvQvtCy0L7QuSDQvdCw0LPRgNGD0LfQutC4ICjRhNC70YPQtCkuINCX0LDQv9GA0LXRidCw0LXRgtGB0Y8g0L/QuNGB0LDRgtGMINC60L7RgNC+0YLQutC40LUg0LHQtdGB0YHQvNGL0YHQu9C10L3QvdGL0LUg0L/QvtGB0YLRiyDRgtC40L/QsCBcXFwi0JbQltCe0KjQrFxcXCIg0LjQu9C4IFxcXCLQn9CY0KjQmCDQldCp0J5cXFwiLCDQsCDRgtCw0LrQttC1LCDRgdC+0YHRgtC+0Y/RidC40LUg0LjQtyDQvtC00L3QuNGFINGB0LzQsNC50LvQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0LLRgtC+0YDRj9GO0YnQuNGF0YHRjyDRgdC40LzQstC+0LvQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INCyINGB0L7QvtCx0YnQtdC90LjRj9GFINC60YDQsNGB0L3QvtCz0L4g0YbQstC10YLQsCDigJMg0Y3RgtC+INC/0YDQuNCy0LjQu9C10LPQuNGPINC80L7QtNC10YDQsNGC0L7RgNC+0LIg0Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCv0LfRi9C6INGB0LDQudGC0LAt0KDQo9Ch0KHQmtCY0Jku0JHRg9C00YzRgtC1INC00L7QsdGA0Yss0L/QuNGI0LjRgtC1INC90LAg0L3QtdC8LtCa0L7QstC10YDQutCw0L3QuNC1INGB0LvQvtCyINC4INC/0YDQtdC00L3QsNC80LXRgNC10L3QvdC+0LUg0LjQt9Cy0YDQsNGJ0LXQvdC40LUg0L7RgNGE0L7Qs9GA0LDRhNC40Lgg0YDRg9GB0YHQutC+0LPQviDRj9C30YvQutCwLCDQsCDRgtCw0LrQttC1INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70LDRgtC40L3QuNGG0YsgKNGC0YDQsNC90YHQu9C40YLQsCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KbQuNGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0LXQtNGL0LTRg9GJ0LjRhSDRgdC+0L7QsdGJ0LXQvdC40LksINC10YHQu9C4INCyINGN0YLQvtC8INC90LXRgiDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCAo0YTQu9C10LnQvCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCz0YDRg9Cx0YvQtSwg0L3QtdGG0LXQvdC30YPRgNC90YvQtSDQstGL0YDQsNC20LXQvdC40Y8g0Lgg0L7RgdC60L7RgNCx0LvQtdC90LjRjyDQsiDQu9GO0LHQvtC5INGE0L7RgNC80LUuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLINC4INGB0L7QvtCx0YnQtdC90LjRjywg0YHQvtC00LXRgNC20LDRidC40LUg0YDQtdC60LvQsNC80L3Rg9GOLCDQsNC90YLQuNGA0LXQutC70LDQvNC90YPRjiDQuNC70Lgg0LrQvtC80LzQtdGA0YfQtdGB0LrRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLCDQsCDRgtCw0Log0LbQtSDRgdGB0YvQu9C60Lgg0L3QsCDRgdCw0LnRgtGLINGBINGG0LXQu9GM0Y4g0L/QvtCy0YvRiNC10L3QuNGPINC40YUg0L/QvtGB0LXRidCw0LXQvNC+0YHRgtC4LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtC00L7Qu9C20LDRgtGMINC+0LHRgdGD0LbQtNCw0YLRjCDQstC+0L/RgNC+0YHRiyDQuNC3INGC0LXQvCwg0LfQsNC60YDRi9GC0YvRhSDQuNC70Lgg0YPQtNCw0LvQtdC90L3Ri9GFINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10LkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0LLQvtGG0LjRgNC+0LLQsNGC0Ywg0LrQvtC90YTQu9C40LrRgtGLINGBINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj9C80Lgg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINC/0YDQvtGC0LjQstC+0YDQtdGH0LDRidC40LUg0JrQvtC90YHRgtC40YLRg9GG0LjQuCDQuCDQt9Cw0LrQvtC90L7QtNCw0YLQtdC70YzRgdGC0LLRgyDQoNCkLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1INGB0YLQsNGC0YPRgdCwINC40LvQuCDQv9C+0LTQv9C40YHQuCDQvdC10YbQtdC90LfRg9GA0L3Ri9C1INC40LvQuCDRgNGD0LPQsNGC0LXQu9GM0L3Ri9C1INGB0LvQvtCy0LAsINCwINGC0LDQuiDQttC1INC30LDQstC10LTQvtC80L4g0L3QtdC00L7RgdGC0L7QstC10YDQvdGD0Y4g0LjQvdGE0L7RgNC80LDRhtC40Y4uICjQndCw0L/RgNC40LzQtdGALCDQv9C40YHQsNGC0Ywg0LIg0YHRgtCw0YLRg9GB0LUgwqvQnNC+0LTQtdGA0LDRgtC+0YDCuywg0LrQvtCz0LTQsCDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0JLRiyDRgtCw0LrQvtCy0YvQvCDQvdC1INGP0LLQu9GP0LXRgtC10YHRjCkuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAg0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDQv9C+0LTQv9C40YHQuCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L3QtSDQsdC+0LvQtdC1IDIt0YUg0YHRgtGA0L7Rh9C10Log0Lgg0L3QtSDQsdC+0LvQtdC1IDIwMCDRgdC40LzQstC+0LvQvtCyLiDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAtIFxcXCIyXFxcIi4g0J/QvtC00L/QuNGB0Ywg0L3QtSDQtNC+0LvQttC90LAg0YHQvtC00LXRgNC20LDRgtGMINGC0LXQutGB0YLQsCwg0LLRi9C00LXQu9C10L3QvdC+0LPQviDQutGA0LDRgdC90YvQvCDRhtCy0LXRgtC+0LwuINCg0LDQt9C80LXRgCDQutCw0YDRgtC40L3QutC4INCyINCy0LDRiNC10Lkg0L/QvtC00L/QuNGB0Lgg0LTQvtC70LbQtdC9INGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/RgtGMINGB0LvQtdC00YPRjtGJ0LjQvCDRgtGA0LXQsdC+0LLQsNC90LjRj9C8OlxcclxcbiAgICAgICAgICAgIC0g0YDQsNC30LzQtdGAIC0g0L3QtSDQsdC+0LvQtdC1IDM1MNGFNjAg0L/QuNC60YHQtdC70LXQuSDRgdGD0LzQvNCw0YDQvdC+XFxyXFxuICAgICAgICAgICAgLSDQvtCx0YrQtdC8IC0g0L3QtSDQsdC+0LvQtdC1IDQwINC60LEg0YHRg9C80LzQsNGA0L3QvlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0LrQsNGH0LXRgdGC0LLQtSDQsNCy0LDRgtCw0YDQsCwg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0LjQu9C4INCyINC60LDRh9C10YHRgtCy0LUg0LLQu9C+0LbQtdC90LjQtSDQsiDRgdC+0L7QsdGJ0LXQvdC40Y8g0LrQsNGA0YLQuNC90LrQuCDQv9C+0YDQvdC+0LPRgNCw0YTQuNGH0LXRgdC60L7Qs9C+LCDRjdC60YHRgtGA0LXQvNC40YHRgtGB0LrQvtCz0L4g0LjQu9C4INC+0YHQutC+0YDQsdC40YLQtdC70YzQvdC+0LPQviDRhdCw0YDQsNC60YLQtdGA0LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0L/QsNCz0LDQvdC00LjRgNC+0LLQsNGC0Ywg0LvRjtCx0YvQtSDQvdCw0YDQutC+0YLQuNGH0LXRgdC60LjQtSDQuCDQv9GB0LjRhdC+0YLRgNC+0L/QvdGL0LUg0LLQtdGJ0LXRgdGC0LLQsCDQuCDQvtCx0YDQsNC3INC20LjQt9C90LgsINGB0LLRj9C30LDQvdC90YvQuSDRgSDRg9C/0L7RgtGA0LXQsdC70LXQvdC40LXQvCDQtNCw0L3QvdGL0YUg0LLQtdGJ0LXRgdGC0LIsINCwINGC0LDQuiDQttC1INC/0YDQvtC/0LDQs9Cw0L3QtNC40YDQvtCy0LDRgtGMINGB0YPQuNGG0LjQtCwg0YDQsNGB0L7QstGD0Y4g0Lgg0YDQtdC70LjQs9C40L7Qt9C90YPRjiDQvdC10L3QsNCy0LjRgdGC0YwsINGE0LDRiNC40LfQvCDQuCDQvdCw0YbQuNC30LwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LfQsNCy0LXQtNC+0LzQviDQv9C+0YXQvtC20LjRhSDQvdC40LrQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCS0YvQv9GA0LDRiNC40LLQsNC90LjQtSDQv9GA0LjQsdCw0LLQu9C10L3QuNGPINGA0LXQv9GD0YLQsNGG0LjQuCwg0LAg0YLQsNC6INC20LUg0L/QvtC00L3QuNC80LDRgtGMINC40LvQuCDRgdC90LjQttCw0YLRjCDRgNC10L/Rg9GC0LDRhtC40Y4g0LHQtdC3INC/0YDQuNGH0LjQvdGLLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCe0LHRgdGD0LbQtNCw0YLRjCDQtNC10LnRgdGC0LLQuNGPINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INCyINGA0LDQt9C00LXQu9Cw0YUg0KTQvtGA0YPQvNCwLiDQldGB0LvQuCDQktGLINC90LXQtNC+0LLQvtC70YzQvdGLINC00LXQudGB0YLQstC40Y/QvNC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4LCDRgtC+INCy0YvRgdC60LDQt9GL0LLQsNC50YLQtSDRgdCy0L7QuCDQv9GA0LXRgtC10L3Qt9C40Lgg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC/LiA0LjEtNC4yINC90LDRgdGC0L7Rj9GJ0LjRhSDQn9GA0LDQstC40LsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCf0KEgKNCf0LXRgNGB0L7QvdCw0LvRjNC90YvQtSDQodC+0L7QsdGJ0LXQvdC40Y8pINC00LvRjyDQvNCw0YHRgdC+0LLQvtC5INGA0LDRgdGB0YvQu9C60Lgg0LjQvdGE0L7RgNC80LDRhtC40Lgg0LvRjtCx0L7Qs9C+INGA0L7QtNCwICjRgNC10LrQu9Cw0LzQsCwgXFxcItC/0LjRgdGM0LzQsCDRgdGH0LDRgdGC0YzRj1xcXCIg0Lgg0YIu0L8uKSA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCd0LDRgNGD0YjQsNGC0Ywg0LDQstGC0L7RgNGB0LrQuNC1INC/0YDQsNCy0LAgKNGD0LrQsNC30YvQstCw0LnRgtC1INGB0YHRi9C70LrQuCDQvdCwINCQ0JLQotCe0KDQkCAo0LjRgdGC0L7Rh9C90LjQuiksINC+0YLQutGD0LTQsCDQsdGL0LvQuCDQstC30Y/RgtGLINCy0YvQu9C+0LbQtdC90L3Ri9C1INGB0YLQsNGC0YzQuCkg0LjQu9C4INGF0L7RgtGPINCx0Ysg0L/QuNGI0LjRgtC1LCDRh9GC0L4g0LDQstGC0L7RgNGB0YLQstC+INC/0YDQuNC90LDQtNC70LXQttC40YIg0L3QtSDQktCw0LwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KPQutCw0LfQsNC90LjQtSDQsiDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0L/QvtC00L/QuNGB0LgsINC4INC00YDRg9Cz0LjRhSDQv9C+0LvRj9GFIFVSTCDQsNC00YDQtdGB0L7QsiDQutC+0LzQvNC10YDRh9C10YHQutC40YUg0LjQvdGC0LXRgNC90LXRgi3Qv9GA0L7QtdC60YLQvtCyLCDRgSDRhtC10LvRjNGOINGA0LXQutC70LDQvNGLINC4INC/0L7QstGL0YjQtdC90LjRjyDQuNC90LTQtdC60YHQsCDRhtC40YLQuNGA0L7QstCw0L3QuNGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7RgdC+0LHQvtC5INC00L7Qs9C+0LLQvtGA0LXQvdC90L7RgdGC0Lgg0YEg0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuSDQv9C+0YDRgtCw0LvQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QntGB0LrQvtGA0LHQu9C10L3QuNC1INC40LPRgNC+0LrQvtCyINC60LvRg9Cx0LAs0YLRgNC10L3QtdGA0YHQutC+0LPQviDRiNGC0LDQsdCwLNCwINGC0LDQutC20LUg0LTRgNGD0LPQuNGFINC60LvRg9Cx0L7QsiDQuCDQuNGFINC40LPRgNC+0LrQvtCyLtCS0YvRgNCw0LbQtdC90LjQtSDRgdCy0L7QtdC5INC90LXQv9GA0LjRj9C30L3QuCDQtNC+0L/Rg9GB0YLQuNC80L4s0L3QviDQsiDRgNCw0LzQutCw0YUg0LTQvtC/0YPRgdGC0LjQvNC+0LPQviA8L2xpPlxcclxcblxcclxcbiAgICAgICAgPGxpPtCf0YPQsdC70LjRh9C90L4g0L/RgNC10LTRitGP0LLQu9GP0YLRjCDQv9GA0LXRgtC10L3Qt9C40Lgg0Lgg0L7QsdGB0YPQttC00LDRgtGMINC00LXQudGB0YLQstC40Y8g0L/QtdGA0LXQstC+0LTRh9C40LrQvtCyINC4INGA0LXQtNCw0LrRgtC+0YDQvtCyINGB0LDQudGC0LAuINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDRgNC10YHRg9GA0YHQsCwg0L3QtdGB0L7Qs9C70LDRgdC90YvQtSDRgSDQv9GD0LHQu9C40LrQsNGG0LjRj9C80Lgg0L/QtdGA0LXQstC+0LTQvtCyINGB0YLQsNGC0LXQuSDQuCDQvNCw0YLQtdGA0LjQsNC70L7QsiDQvNC+0LPRg9GCINCy0YvRgdC60LDQt9Cw0YLRjCDRgdCy0L7RkSDQvdC10YHQvtCz0LvQsNGB0LjQtSDQsiDQu9C40YfQvdC+0Lwg0YHQvtC+0LHRidC10L3QuNC4INC40LvQuCDQsiDRgtC10LzQtSDQvdCwINGE0L7RgNGD0LzQtSDRgdCw0LnRgtCwIC0gPGI+0JbQsNC70L7QsdGLPC9iPi4gPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+PGI+SUlJLiDQntCx0YnQuNC1INGA0LXQutC+0LzQtdC90LTQsNGG0LjQuCDQviDRgdC+0LLQtdGC0YsuIDwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QndC1INC+0LHRgNCw0YnQsNC50YLQtSDQstC90LjQvNCw0L3QuNGPINC90LAg0YXRg9C70LjQs9Cw0L3QvtCyLiDQndC1INC+0YLQstC10YfQsNC50YLQtSDQuNC8LCDQtNCw0LbQtSDQtdGB0LvQuCDQktGLINGB0YfQuNGC0LDQtdGC0LUsINGH0YLQviDQktCw0YEg0L7RgdC60L7RgNCx0LjQu9C4LCDQvdC1INC/0L7QtNC00LDQstCw0LnRgtC10YHRjCDQvdCwINC/0YDQvtCy0L7QutCw0YbQuNC4LiDQlNC+0YHRgtCw0YLQvtGH0L3QviDRgdC+0L7QsdGJ0LjRgtGMINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INC+0LEg0L7RgdC60L7RgNCx0LvQtdC90LjQuCDQuCDQstC40L3QvtCy0L3Ri9C1INCx0YPQtNGD0YIg0L3QsNC60LDQt9Cw0L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QkiDRgtC+0Lwg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQktGLINGB0YfQuNGC0LDQtdGC0LUsINGH0YLQviDQvdCw0YDRg9GI0LXQvdGLINCf0YDQsNCy0LjQu9CwINCk0L7RgNGD0LzQsCwg0L/QvtGB0YLQsNGA0LDQudGC0LXRgdGMINGB0YDQsNC30YMg0LbQtSDRgdC+0L7QsdGJ0LjRgtGMINC+0LEg0Y3RgtC+0Lwg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lgg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0YLQsNGA0LDQudGC0LXRgdGMINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINGB0L7QvtCx0YnQtdC90LjRj9GFINC20LDRgNCz0L7QvSwg0YIu0LouINC90LXQutC+0YLQvtGA0YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0LzQvtCz0YPRgiDQvdC1INC/0YDQsNCy0LjQu9GM0L3QviDQtdCz0L4g0YDQsNGB0YLQvtC70LrQvtCy0LDRgtGMLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/QvtGB0YLQsNGA0LDQudGC0LXRgdGMINC90LUg0L/QuNGB0LDRgtGMINCx0LXQt9C+0YHQvdC+0LLQsNGC0LXQu9GM0L3Ri9C1INGD0YLQstC10YDQttC00LXQvdC40Y8sINCwINGC0LDQuiDQttC1INGB0L7QvtCx0YnQtdC90LjRjyDRgtC40L/QsCDCq9Cy0YvQutC40L3RjCDRjdGC0YMg0LHRj9C60YMsINC/0L7RgdGC0LDQstGMINGF0L7RgNC+0YjRg9GOINCy0LXRidGMwrsuINCV0YHQu9C4INGN0YLQviDQktCw0YjQtSDQu9C40YfQvdC+INC80L3QtdC90LjQtSwg0L3QtSDQt9Cw0LHRg9C00YzRgtC1INGB0L7QvtCx0YnQuNGC0Ywg0L7QsSDRjdGC0L7QvCDQt9Cw0YDQsNC90LXQtSDigJMg0L/RgNC+0YHRgtC+0LPQviDCq9CY0JzQpdCewrsgKNC+0YIg0LDQvdCz0LsuIOKAnGltaG/igJ0sINGH0YLQviDQsiDQv9C10YDQtdCy0L7QtNC1INC+0LfQvdCw0YfQsNC10YIgwqvQv9C+INC80L7QtdC80YMg0YHQutGA0L7QvNC90L7QvNGDINC80L3QtdC90LjRjsK7KSDQsdGD0LTQtdGCINC00L7RgdGC0LDRgtC+0YfQvdC+LiDQn9C+0LzQvdC40YLQtSwg0YfRgtC+INC/0L7RgdC70LUg0L3QtdGB0LrQvtC70YzQutC40YUg0L3QtdCw0YDQs9GD0LzQtdC90YLQuNGA0L7QstCw0L3QvdGL0YUg0YPRgtCy0LXRgNC20LTQtdC90LjQuSwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC/0YDQvtGB0YLQviDQv9C10YDQtdGB0YLQsNC90YPRgiDQktCw0Lwg0LTQvtCy0LXRgNGP0YLRjC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0LXQttC00LUg0YfQtdC8INGB0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRgywg0YPQsdC10LTQuNGC0LXRgdGMLCDRh9GC0L4g0JLRiyDRgdC+0LfQtNCw0LXRgtC1INC10ZEg0LIg0L3Rg9C20L3QvtC8INCg0LDQt9C00LXQu9C1INCk0L7RgNGD0LzQsC4g0J/QvtC80L3QuNGC0LUsINGH0YLQviDRgtC10LzRiywg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0YLQtdC80LDRgtC40LrQtSDQoNCw0LfQtNC10LvQsCwg0LHRg9C00YPRgiDQu9C40LHQviDRg9C00LDQu9C10L3Riywg0LvQuNCx0L4g0L/QtdGA0LXQvdC10YHQtdC90Ysg0LIg0LTRgNGD0LPQvtC5INCg0LDQt9C00LXQuyDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0YfRgtC40YLQtSDRgtC10LzRgyDRhtC10LvQuNC60L7QvCEg0J/QvtGB0YLRiyDQsiDRgdC10YDQtdC00LjQvdC1INGC0LXQvNGLIC0gXFxcItCQINC+INGH0LXQvCDRjdGC0L4g0LLRiywg0LA/IFxcXCIg0LjQu9C4IFxcXCLQotCw0Log0Y8g0L3QtSDQv9C+0L3Rj9C7IC0g0L7RgtC60YPQtNCwINC60LDRh9Cw0YLRjD9cXFwiINC30LDQv9GA0LXRidC10L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC00LXQu9Cw0YLRjCDQs9GA0LDQvNC80LDRgtC40YfQtdGB0LrQuNGFINC+0YjQuNCx0L7QuiDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDigJMg0Y3RgtC+INGB0L7Qt9C00LDRgdGCINC90LXQs9Cw0YLQuNCy0L3QvtC1INCy0L/QtdGH0LDRgtC70LXQvdC40LUg0L4g0LLQsNGBLjwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPjxiPklWLiDQntGC0L3QvtGI0LXQvdC40Y8g0LzQtdC20LTRgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10LkuPC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCSINGB0LLQvtC40YUg0LTQtdC50YHRgtCy0LjRj9GFINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINGE0L7RgNGD0LzQsCDRgNGD0LrQvtCy0L7QtNGB0YLQstGD0LXRgtGB0Y8g0LfQtNGA0LDQstGL0Lwg0YHQvNGL0YHQu9C+0Lwg0Lgg0LLQvdGD0YLRgNC10L3QvdC40LzQuCDQv9GA0LDQstC40LvQsNC80Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0YTQvtGA0YPQvNC+0LwuPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICDQntCx0YHRg9C20LTQtdC90LjQtSDQtNC10LnRgdGC0LLQuNC5INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4ICjQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0LIg0Lgg0LzQvtC00LXRgNCw0YLQvtGA0L7QsiDRhNC+0YDRg9C80LApINC60LDRgtC10LPQvtGA0LjRh9C10YHQutC4INC30LDQv9GA0LXRidCw0LXRgtGB0Y8g0LIg0LvRjtCx0YvRhSDRhNC+0YDRg9C80LDRhSDQuCDRgtC10LzQsNGFLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0YHQv9C10YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0YTQvtGA0YPQvNCwIC0gPGI+0JbQsNC70L7QsdGLPC9iPi48YnI+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD7QkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQvtGB0YLQsNCy0LvRj9C10YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0LjQt9C80LXQvdGP0YLRjCDQv9GA0LDQstC40LvQsCDQsdC10Lcg0YPQstC10LTQvtC80LvQtdC90LjQtdC8INC+0LEg0Y3RgtC+0Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0YTQvtGA0YPQvNCwLiDQktGB0LUg0LjQt9C80LXQvdC10L3QuNGPINC4INC90L7QstCw0YbQuNC4INC90LAg0YTQvtGA0YPQvNC1INC/0YDQvtC40LfQstC+0LTRj9GC0YHRjyDRgSDRg9GH0LXRgtC+0Lwg0LzQvdC10L3QuNC5INC4INC40L3RgtC10YDQtdGB0L7QsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS48L3A+XFxyXFxuICAgIDxwIGFsaWduPVxcXCJyaWdodFxcXCI+PGI+0KEg0YPQstCw0LbQtdC90LjQtdC8LCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDRgdCw0LnRgtCwLjwvYj48L3A+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ydWxlcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSBmcm9tIFwiLi4vYWRtaW4vYWRtaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJpZ2h0LXNpZGViYXJcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9yaWdodFNpZGViYXIuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpZ2h0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcm9sZXM6IElSb2xlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFkbWluU2VydmljZSwgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVwbFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAudXBkYXRlRXBsVGFibGUoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJcIikpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9yaWdodFNpZGViYXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZG1pblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImFkbWluL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBHZXRBbGwgPSAoKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxOZXdzPj4gPT4ge1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHB1YmxpYyBHZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TmV3cz4gPT4ge1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgdXBkYXRlRXBsVGFibGUgPSAoKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcInVwZGF0ZVRhYmxlL1wiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2FkbWluLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29udGFpbmVyLWZsdWlkXFxcIiB1aS12aWV3PVxcXCJyaWdodENvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wtc3gtMTJcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj48YSAoY2xpY2spPVxcXCJ1cGRhdGVFcGxUYWJsZSgpXFxcIj7QntCx0L3QvtCy0LjRgtGMINGC0LDQsdC70LjRhtGDPC9hPjwvc3Bhbj5cXHJcXG4gICAgPGVwbC10YWJsZT48L2VwbC10YWJsZT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ydW1TZWN0aW9uUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiZm9ydW1cIiwgY29tcG9uZW50OiBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50IH0sIFxyXG4gICAvLyB7IHBhdGg6IFwiY29uZmlybUVtYWlsXCIsIGNvbXBvbmVudDogQ29uZmlybUVtYWlsQ29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9mb3J1bVNlY3Rpb24ubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZm9ydW1TZWN0aW9uLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2luZGV4LnRzIiwiaW1wb3J0IHsgRm9ydW1TdWJzZWN0aW9uIH0gZnJvbSBcIi4uL2ZvcnVtU3Vic2VjdGlvbi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcnVtU2VjdGlvbiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc3Vic2VjdGlvbnM6IEZvcnVtU3Vic2VjdGlvbltdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBGb3J1bVNlY3Rpb24gfSBmcm9tIFwiLi9mb3J1bVNlY3Rpb24ubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcnVtU2VjdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImZvcnVtU2VjdGlvbi9cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgPSAoKTogT2JzZXJ2YWJsZTxGb3J1bVNlY3Rpb25bXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgIH07XHJcblxyXG4gICAgLy8gcHVibGljIEdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZXdzPiA9PiB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgLy8gIGNyZWF0ZSA9IChpdGVtOiBGb3J1bVNlY3Rpb24pOiBPYnNlcnZhYmxlPFNpZ251cD4gPT4ge1xyXG4gIC8vICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsICsgXCJyZWdpc3Rlci9cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAvLyAgIH07XHJcblxyXG4gICAgLy8gY29uZmlybUVtYWlsID0gKHVzZXJJZDogbnVtYmVyLCBjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgIC8vICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYGNvbmZpcm1FbWFpbD91c2VySWQ9JHt1c2VySWR9JmNvZGU9JHtjb2RlfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvLyB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3J1bVNlY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZm9ydW1TZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ydW1TZWN0aW9uIH0gZnJvbSBcIi4vZm9ydW1TZWN0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZm9ydW1TZWN0aW9uLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW1zOiBGb3J1bVNlY3Rpb25bXTtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBGb3J1bVNlY3Rpb25TZXJ2aWNlLCBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5pdGVtcyA9IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJcIikpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiICpuZ0Zvcj1cXFwibGV0IHNlY3Rpb24gb2YgaXRlbXNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGFuZ2VyXFxcIiAqbmdJZj1cXFwic2VjdGlvbi5zdWJzZWN0aW9ucy5sZW5ndGggPiAwIHx8IHJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJzZWN0aW9uLm5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiB1aS1zcmVmPVxcXCJzdWJzZWN0aW9uRWRpdCh7c2VjdGlvbklkOiBzZWN0aW9uLmlkfSlcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC00YHQtdC60YbQuNGOPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiIFtoaWRkZW5dPVxcXCJzZWN0aW9uLnN1YnNlY3Rpb25zLmxlbmd0aCAhPSAwXFxcIiBuZy1jbGljaz1cXFwidm0ucmVtb3ZlU2VjdGlvbigkaW5kZXgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS1kaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPjwvIS0tZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgKm5nRm9yPVxcXCJsZXQgc3Vic2VjdGlvbiBvZiBzZWN0aW9uLnN1YnNlY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJzdWJzZWN0aW9uKHtpZDogc3Vic2VjdGlvbi5pZH0pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJzdWJzZWN0aW9uLm5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic21hbGxcXFwiIFt0ZXh0Q29udGVudF09XFxcInN1YnNlY3Rpb24uZGVzY3JpcHRpb25cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YSBuZy1jbGljaz1cXFwidm0uYWRkU2VjdGlvbigpXFxcIj7QlNC+0LHQsNCy0LjRgtGMINGB0LXQutGG0LjRjjwvYT5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJhZGRTZWN0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+QENvbW1vbk1lc3NhZ2VzLkFkZFNlY3Rpb248L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJhZGRTZWN0aW9uXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3U2VjdGlvbk5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj5AQ29sb25zTWVzc2FnZXMuU2VjdGlvbk5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5ld1NlY3Rpb25OYW1lXFxcIiBuZy1tb2RlbD1cXFwidm0uc2VjdGlvbk5hbWVcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJhZGRTZWN0aW9uLiRpbnZhbGlkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQ2FuY2VsPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcIm1vZGFsRGVsZXRlQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+QENvbW1vbk1lc3NhZ2VzLkRlbGV0ZUNvbmZpcm1hdGlvbjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIEBDb21tb25NZXNzYWdlcy5EZWxldGU/XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj5AQ29tbW9uTWVzc2FnZXMuRGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj5AQ29tbW9uTWVzc2FnZXMuQ2FuY2VsPC9idXR0b24+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgV2lzaExpc3RDb21wb25lbnQsIFdpc2hFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXNoUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwid2lzaFwiLCBjb21wb25lbnQ6IFdpc2hMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwid2lzaC86aWQvZWRpdFwiLCBjb21wb25lbnQ6IFdpc2hFZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL3dpc2gubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2lzaFR5cGUubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2lzaC1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93aXNoLWVkaXQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dpc2guc2VydmljZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgV2lzaCB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5tb2RlbC50cyIsImV4cG9ydCBjbGFzcyBXaXNoVHlwZSB7XHJcbiAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaFR5cGUubW9kZWwudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2lzaCB9IGZyb20gXCIuL3dpc2gubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lzaFNlcnZpY2UgfSBmcm9tIFwiLi93aXNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ3aXNoLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93aXNoLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtczogV2lzaFtdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogV2lzaFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1sncGFnZSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSArcGFyYW1zWydwYWdlJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gK3BhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgIC8vICAgIHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ3VzZXJOYW1lJ107XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPFdpc2g+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy9sZXQgZmlsdGVycyA9IG5ldyBNYXRlcmlhbEZpbHRlcnMoKTtcclxuICAgICAgICAvL2ZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICAvL2ZpbHRlcnMubWF0ZXJpYWxUeXBlID0gXCJOZXdzXCI7XHJcbiAgICAgICAgLy9maWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICAvL2ZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRBbGwoKS8vYnVnXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIGxvYWQgbGlzdCB3aXNoXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlQ2xhc3MoaSkge1xyXG4gICAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1kYW5nZXJcIjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtd2FybmluZ1wiO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1pbmZvXCI7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgV2lzaCwgV2lzaFR5cGUgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpc2hTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJ3aXNoL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRBbGwgPSAoKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxXaXNoPj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgR2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFdpc2g+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ3JlYXRlID0gKGl0ZW06IFdpc2gpOiBPYnNlcnZhYmxlPFdpc2g+ID0+IHtcclxuICAgICAgICAvLyB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBVcGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBXaXNoKTogT2JzZXJ2YWJsZTxXaXNoPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgRGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEdldFR5cGVzID0gKCk6IE9ic2VydmFibGU8V2lzaFR5cGVbXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJ0eXBlcy9cIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2guc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+LS0+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy93aXNoJywgMCwgJ2VkaXQnXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiICpuZ0Zvcj1cXFwibGV0IHdpc2ggb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIiBbbmdDbGFzc109XFxcImdldFR5cGVDbGFzcyh3aXNoLnR5cGUpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3dpc2gnLCB3aXNoLmlkLCAnZWRpdCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJ3aXNoLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCIgc2VjdXJlZD1cXFwiQWRtaW5GdWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cXFwidm0uZGVsZXRlKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJ3aXNoLm1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwid2lzaC50eXBlTmFtZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDwhLS11aWItcGFnaW5hdGlvbiBuZy1zaG93PVxcXCJ2bS50b3RhbEl0ZW1zID4gdm0uaXRlbVBlclBhZ2VcXFwiIHRvdGFsLWl0ZW1zPVxcXCJ2bS50b3RhbEl0ZW1zXFxcIiBuZy1tb2RlbD1cXFwidm0ucGFnZVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5nb1RvUGFnZSgpXFxcIj48LyEtLXVpYi1wYWdpbmF0aW9uLS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFdpc2ggfSBmcm9tIFwiLi93aXNoLm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpc2hUeXBlIH0gZnJvbSBcIi4vd2lzaFR5cGUubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lzaFNlcnZpY2UgfSBmcm9tIFwiLi93aXNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwid2lzaC1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXNoRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgdHlwZXM6IFdpc2hUeXBlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBXaXNoU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0aXRsZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMDApXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAndHlwZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLkdldFNpbmdsZSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBnZXQgIG5ld3NcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IFdpc2goKTtcclxuICAgICAgICBtb2RlbC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgbW9kZWwubWVzc2FnZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLnRpdGxlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInRpdGxlXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLnR5cGUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widHlwZVwiXS52YWx1ZTsgXHJcblxyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UuVXBkYXRlKHRoaXMuaWQsIG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiByZXMgPSBkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLkNyZWF0ZShtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4gcmVzID0gZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2lzaFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVHlwZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRUeXBlcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnR5cGVzID0gZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBjb2wtbWQtMTJcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5hbWU9XFxcImVkaXRXaXNoXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0KLQuNC/OjwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuZXdzQ2F0ZWdvcnlJZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3R5cGUnXVxcXCI+PC9zZWxlY3Q+LS0+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndHlwZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVxcXCJ0eXBlLmlkXFxcIiAqbmdGb3I9XFxcImxldCB0eXBlIG9mIHR5cGVzXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ0eXBlLm5hbWVcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7Qt9C00LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGVyaWFsQ29tbWVudFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudFwiLCBjb21wb25lbnQ6IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnQvbGlzdFwiLCBjb21wb25lbnQ6IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnQvbGlzdC86cGFnZVwiLCBjb21wb25lbnQ6IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnQvbGlzdC86cGFnZS86Y2F0ZWdvcnlJZFwiLCBjb21wb25lbnQ6IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgfSxcclxuICAgLy8geyBwYXRoOiBcIm5ld3MvOmlkXCIsIGNvbXBvbmVudDogTmV3c0RldGFpbENvbXBvbmVudCB9LFxyXG4gIC8vICB7IHBhdGg6IFwibmV3cy86aWQvZWRpdFwiLCBjb21wb25lbnQ6IE5ld3NFZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbW1lbnQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGFkZGl0aW9uVGltZTogRGF0ZTtcclxuICAgIGF1dGhvclVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBhdXRob3JJZDogbnVtYmVyO1xyXG4gICAgcGhvdG86IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGFuc3dlcjogc3RyaW5nO1xyXG4gICAgbWF0ZXJpYWxJZDogbnVtYmVyO1xyXG4gICAgY2hpbGRyZW46IE1hdGVyaWFsQ29tbWVudFtdO1xyXG4gICAgaXNWZXJpZmllZDogYm9vbGVhbjtcclxuICAgIHBhcmVudElkOiBudW1iZXI7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50Lm1vZGVsLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnQgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50U2VydmljZSB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYXRlcmlhbENvbW1lbnQtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXRlbXM6IE1hdGVyaWFsQ29tbWVudFtdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAgIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0ZXJpYWxDb21tZW50U2VydmljZTogTWF0ZXJpYWxDb21tZW50U2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlKSB7XHJcbiAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IG5ld1VybCA9IGBtYXRlcmlhbENvbW1lbnQvbGlzdC8ke3RoaXMucGFnZX1gO1xyXG4gICAgIC8vICAgaWYgKHRoaXMuY2F0ZWdvcnlJZCkge1xyXG4gICAgLy8gICAgICAgIG5ld1VybCA9IGAke25ld1VybH0vJHt0aGlzLmNhdGVnb3J5SWR9YDtcclxuICAgIC8vICAgIH1cclxuICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbCh0aGlzLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIGxvYWQgY29tbWVudCBsaXRzXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPE1hdGVyaWFsQ29tbWVudD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcmlmeShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2VcclxuICAgICAgICAgICAgLnZlcmlmeSh0aGlzLml0ZW1zW2luZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHJlc3VsdCA9IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmlzVmVyaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcbiAgICAvLyAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbaW5kZXhdLmlkKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhLFxyXG4gICAgLy8gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgIC8vICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVtb3ZlIGNhdGVnb3J5dVwiKSk7XHJcbiAgICAvLyAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50IH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tbWVudFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGVyaWFsQ29tbWVudC9cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgPSAocGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxNYXRlcmlhbENvbW1lbnQ+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBwYWdlKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRBbGxCeU1hdGVyaWFsID0gKHBhZ2U6IG51bWJlciwgaWQ6IG51bWJlcik6IE9ic2VydmFibGU8UGFnZWFibGU8TWF0ZXJpYWxDb21tZW50Pj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJtYXRlcmlhbC9cIiArIGlkICsgXCIvbGlzdC9cIiArIHBhZ2UpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxNYXRlcmlhbENvbW1lbnQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogTWF0ZXJpYWxDb21tZW50KTogT2JzZXJ2YWJsZTxNYXRlcmlhbENvbW1lbnQ+ID0+IHsgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCArIFwiTmV3cy9cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IE1hdGVyaWFsQ29tbWVudCk6IE9ic2VydmFibGU8TWF0ZXJpYWxDb21tZW50PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2ZXJpZnkgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJ2ZXJpZnkvXCIgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDwhLS1kaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiB1aS1zcmVmPVxcXCJ3aXNoRWRpdCgpXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2LS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBjb21tZW50IG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgbmctY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBjb21tZW50LmF1dGhvcklkXVxcXCI+PHNwYW4gW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5hdXRob3JVc2VyTmFtZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIiAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtoaWRkZW5dPVxcXCJjb21tZW50LmlzVmVyaWZpZWRcXFwiIChjbGljayk9XFxcInZlcmlmeShpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2tcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJjb21tZW50Lm1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5hZGRpdGlvblRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50IH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWVudHNcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21tZW50U2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXRlbXM6IE1hdGVyaWFsQ29tbWVudFtdID0gW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gICAgY29tbWVudEZvcm06IEZvcm1Hcm91cDtcclxuICAgIC8vc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIG1hdGVyaWFsSWQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNhbkNvbW1lbnRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0ZXJpYWxDb21tZW50U2VydmljZTogTWF0ZXJpYWxDb21tZW50U2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlXHJcbiAgICAgICAgLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikgeyAgIFxyXG4gICAgfSAgIFxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7ICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpOyBcclxuXHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoWyAvL3RvZG8gY29tcG9zZUFTeW5jPz9cclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwYWdlQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAvLyAgbGV0IG5ld1VybCA9IGBtYXRlcmlhbENvbW1lbnQvbGlzdC8ke3RoaXMucGFnZX1gO1xyXG4gICAgICAgIC8vICAgaWYgKHRoaXMuY2F0ZWdvcnlJZCkge1xyXG4gICAgICAgIC8vICAgICAgICBuZXdVcmwgPSBgJHtuZXdVcmx9LyR7dGhpcy5jYXRlZ29yeUlkfWA7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgIC8vICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUobmV3VXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxCeU1hdGVyaWFsKHRoaXMucGFnZSwgdGhpcy5tYXRlcmlhbElkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPE1hdGVyaWFsQ29tbWVudD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBNYXRlcmlhbENvbW1lbnQoKTtcclxuICAgICAgICBjb21tZW50Lm1lc3NhZ2UgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICBjb21tZW50Lm1hdGVyaWFsSWQgPSB0aGlzLm1hdGVyaWFsSWQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmNyZWF0ZShjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0ucGF0Y2hWYWx1ZShcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2hpZGVNb2RhbCgpOiB2b2lkIHtcclxuICAgIC8vICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vdmVyaWZ5KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vICAgIGxldCByZXN1bHQ7XHJcbiAgICAvLyAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2VcclxuICAgIC8vICAgICAgICAudmVyaWZ5KHRoaXMuaXRlbXNbaW5kZXhdLmlkKVxyXG4gICAgLy8gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiByZXN1bHQgPSBkYXRhLFxyXG4gICAgLy8gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgIC8vICAgICAgICAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmlzVmVyaWZpZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL3Nob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAvLyAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vZGVsZXRlKCkge1xyXG4gICAgLy8gICAgbGV0IHJlc3VsdDtcclxuICAgIC8vICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgIC8vICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAvLyAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgIC8vICAgICAgICAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICApO1xyXG4gICAgLy99XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PtCa0L7QvNC80LXQvdGC0LDRgNC40Lg6IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW1zLmxlbmd0aFxcXCI+PC9zcGFuPjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIlxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBpdGVtc1xcXCI+XFxyXFxuICAgIDxtYXRlcmlhbENvbW1lbnQtZGV0YWlsIFtpdGVtXT1cXFwiY29tbWVudFxcXCIgW2RlZXBdPVxcXCIwXFxcIiBbbWF0ZXJpYWxJZF09XFxcIm1hdGVyaWFsSWRcXFwiIFtjYW5Db21tZW50YXJ5XT1cXFwiY2FuQ29tbWVudGFyeVxcXCI+PC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsPlxcclxcbjwvZGl2Plxcclxcblxcclxcbjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJjb21tZW50Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoY29tbWVudEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIiAqbmdJZj1cXFwiY2FuQ29tbWVudGFyeSAmJiByb2xlcy5pc0xvZ2luZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC04XFxcIiByb3dzPVxcXCI2XFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBjZW50ZXItYmxvY2tcXFwiIFtkaXNhYmxlZF09XFxcIiFjb21tZW50Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXMgJiYgdG90YWxJdGVtcyA+IGl0ZW1zUGVyUGFnZVxcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudCB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWF0ZXJpYWxDb21tZW50LWRldGFpbFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW06IE1hdGVyaWFsQ29tbWVudDtcclxuICAgIEBJbnB1dCgpIGRlZXA6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNhbkNvbW1lbnRhcnk6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBtYXRlcmlhbElkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBwYXJlbnQ6IE1hdGVyaWFsQ29tbWVudDtcclxuXHJcbiAgICBjb21tZW50Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSBvbGRDb3B5IDogTWF0ZXJpYWxDb21tZW50O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJhZGRDb21tZW50TW9kYWxcIikgYWRkQ29tbWVudE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJlZGl0Q29tbWVudE1vZGFsXCIpIGVkaXRDb21tZW50TW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgLy8gcGFnZTogbnVtYmVyID0gMTtcclxuICAgLy8gaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgIC8vIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgLy8gIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0ZXJpYWxDb21tZW50U2VydmljZTogTWF0ZXJpYWxDb21tZW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FkZENvbW1lbnRNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRDb21tZW50TW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpOiB2b2lkIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRWRpdE1vZGFsKCkgeyAgXHJcbiAgICAgICAgdGhpcy5lZGl0Q29tbWVudE1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmNsZWFuQ29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb21tZW50KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMuZ2V0Q29tbWVudCgpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5jcmVhdGUoY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5jaGlsZHJlbi5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbW1lbnRNb2RhbC5oaWRlKCk7ICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5jaGlsZHJlbi5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5wYXJlbnRJZCA9IHRoaXMucGFyZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucGFyZW50SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VkaXRNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUodGhpcy5pdGVtKTtcclxuICAgICAgICB0aGlzLmVkaXRDb21tZW50TW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLmdldENvbW1lbnQoKTtcclxuICAgICAgICBjb21tZW50LmFuc3dlciA9IHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJhbnN3ZXJcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLnVwZGF0ZSh0aGlzLml0ZW0uaWQsIGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBjb21tZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb21tZW50KCk6IE1hdGVyaWFsQ29tbWVudCB7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLml0ZW07XHJcbiAgICAgICAgY29tbWVudC5tZXNzYWdlID0gdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhbkNvbnRyb2xzKCk6IHZvaWQgeyAgICBcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wiYW5zd2VyXCJdLnBhdGNoVmFsdWUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC17e2RlZXB9fSBjb2wtc20tb2Zmc2V0LXt7ZGVlcH19IGNvbW1lbnQgY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBpdGVtLmF1dGhvcklkXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hdXRob3JVc2VyTmFtZVxcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzbWFsbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hZGRpdGlvblRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uYXV0aG9ySWQpXFxcIiAoY2xpY2spPVxcXCJzaG93RWRpdE1vZGFsKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+IDwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3JcXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+IDwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJhdmF0YXItbWVkaXVtXFxcIiBzcmM9XFxcInt7aXRlbS5waG90b319XFxcIiBhbHQ9XFxcInt7aXRlbS5hdXRob3JVc2VyTmFtZX19XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxwIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJpdGVtLmFuc3dlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tM1xcXCI+0J7RgtCy0LXRgjo8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFuc3dlclxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyXFxcIiAqbmdJZj1cXFwiIXJvbGVzLmlzU2VsZihpdGVtLmF1dGhvcklkKSAmJiBjYW5Db21tZW50YXJ5XFxcIj5cXHJcXG4gICAgICAgIDxhIChjbGljayk9XFxcInNob3dBZGRDb21tZW50TW9kYWwoKVxcXCI+0J7RgtCy0LXRgtC40YLRjDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuXFxcIj5cXHJcXG4gICAgPG1hdGVyaWFsQ29tbWVudC1kZXRhaWwgW2l0ZW1dPVxcXCJjaGlsZFxcXCIgW2RlZXBdPVxcXCJkZWVwID4gNiA/IDcgOiBkZWVwKzFcXFwiIFttYXRlcmlhbElkXT1cXFwibWF0ZXJpYWxJZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJjYW5Db21tZW50YXJ5XFxcIiBbcGFyZW50XT1cXFwiaXRlbVxcXCI+PC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2FkZENvbW1lbnRNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40Lk8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4gICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFkZENvbW1lbnQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2VkaXRDb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInJvbGVzLmlzRWRpdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snYW5zd2VyJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PiAgICBcXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZWRpdCgpXFxcIj7QntCx0L3QvtCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNYXRjaExpc3RDb21wb25lbnQsIE1hdGNoRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJtYXRjaC86aWQvZWRpdFwiLCBjb21wb25lbnQ6IE1hdGNoRWRpdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGNoXCIsIGNvbXBvbmVudDogTWF0Y2hMaXN0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbWF0Y2guc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRjaC1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRjaC1lZGl0LmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tIFwiLi9tYXRjaC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRjaFR5cGUgfSBmcm9tIFwiLi9tYXRjaFR5cGUubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiOyAgICAgXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXRjaFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGNoL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0QWxsID0gKGZpbHRlcnM6IE1hdGVyaWFsRmlsdGVycyk6IE9ic2VydmFibGU8UGFnZWFibGU8TmV3cz4+ID0+IHtcclxuICAgIC8vICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vfTtcclxuXHJcbiAgICBnZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TWF0Y2g+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogTWF0Y2gpOiBPYnNlcnZhYmxlPE1hdGNoPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogTWF0Y2gpOiBPYnNlcnZhYmxlPE1hdGNoPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAgZ2V0VHlwZXMgPSAoKTogT2JzZXJ2YWJsZTxNYXRjaFR5cGU+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwiL2dldFR5cGVzXCIpXHJcbiAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gXCIuL21hdGNoLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gXCIuL21hdGNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbi8vaW1wb3J0IHsgVXNlckZpbHRlcnMgfSBmcm9tIFwiLi91c2VyRmlsdGVycy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYXRjaC1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0Y2gtbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGNoTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbXM6IE1hdGNoW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRjaFNlcnZpY2U6IE1hdGNoU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wicGFnZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gIHRoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAgICAgLy8gIHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ3VzZXJOYW1lJ107XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPE1hdGNoPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vbGV0IGZpbHRlcnMgPSBuZXcgVXNlckZpbHRlcnMoKTtcclxuICAgICAgICAvLy8vICBmaWx0ZXJzLmNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgLy8vLyAgZmlsdGVycy5tYXRlcmlhbFR5cGUgPSBcIk5ld3NcIjtcclxuICAgICAgICAvL2ZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIC8vZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICAvL3RoaXMudXNlclNlcnZpY2VcclxuICAgICAgICAvLyAgICAuR2V0QWxsKGZpbHRlcnMpXHJcbiAgICAgICAgLy8gICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAvLyAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgLy8gICAgKCkgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPiA8IS10b2RvIG1hZ2ljIG51bWJlci0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbWF0Y2gnLCAwLCAnZWRpdCcgXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwiY2x1YkVkaXQoe2lkOiBpdGVtLmlkfSlcXFwiPjxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubmFtZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cXFwidm0uZGVsZXRlKCRpbmRleClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZW5nbGlzaE5hbWVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2l0ZW0ubG9nb319XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8IS0tPHVpYi1wYWdpbmF0aW9uIG5nLXNob3c9XFxcInZtLnRvdGFsSXRlbXMgPiB2bS5pdGVtUGVyUGFnZVxcXCIgdG90YWwtaXRlbXM9XFxcInZtLnRvdGFsSXRlbXNcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wYWdlXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmdvVG9QYWdlKClcXFwiPjwvdWliLXBhZ2luYXRpb24+LS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgTWF0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2x1YlNlcnZpY2UgfSBmcm9tIFwiLi4vY2x1Yi9pbmRleFwiO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gXCIuL21hdGNoLm1vZGVsXCI7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwiLi4vY2x1Yi9jbHViLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1hdGNoLWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRjaC1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF0Y2hFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGNsdWJzOiBDbHViW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRjaFNlcnZpY2U6IE1hdGNoU2VydmljZSwgICAgICBcclxuICAgICAgICBwcml2YXRlIGNsdWJTZXJ2aWNlOiBDbHViU2VydmljZSwgICAgICBcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbHViU2VydmljZS5nZXRCeU5hbWUoXCJcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VDbHVicyhkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGxldCBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hTZXJ2aWNlLnVwZGF0ZSh0aGlzLmlkLCBuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UuY3JlYXRlKG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShkYXRhOiBNYXRjaCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlRm9ybSgpOiBNYXRjaCB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgTWF0Y2goKTtcclxuICAgICAgICBpdGVtLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBpdGVtLmNsdWJJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJjbHViSWRcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5pc0hvbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiaXNIb21lXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uZGF0ZVRpbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZGF0ZVRpbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS50eXBlSWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widHlwZUlkXCJdLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRGb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2NsdWJJZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2lzSG9tZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2RhdGVUaW1lJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAndHlwZUlkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUNsdWJzKGl0ZW1zOiBDbHViW10pIHtcclxuICAgICAgICB0aGlzLmNsdWJzID0gaXRlbXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBNYXRjaCB7XHJcbiAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICAgaXNIb21lOiBib29sZWFuO1xyXG4gICAgICAgICBjbHViSWQ6IG51bWJlcjtcclxuICAgICAgICAgY2x1Yk5hbWU6IHN0cmluZztcclxuICAgICAgICAgZGF0ZVRpbWU6IERhdGU7XHJcbiAgICAgICAgIHR5cGVJZDogbnVtYmVyO1xyXG4gICAgICAgICB0eXBlTmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+Q9C+0L/QtdGA0L3QuNC6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGF1dG9jb21wbGV0ZSBuZy1tb2RlbD1cXFwidm0uaXRlbS5jbHViTmFtZVxcXCIgbmFtZT1cXFwiY2x1Yk5hbWVcXFwiIGF0dHItcGxhY2Vob2xkZXI9XFxcItCS0LLQtdC00LjRgtC1INC60LvRg9CxLi4uXFxcIiBjbGljay1hY3RpdmF0aW9uPVxcXCJ0cnVlXFxcIiBkYXRhPVxcXCJ2bS5jbHVic1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24tdHlwZT1cXFwidm0udXBkYXRlQ2x1YnNcXFwiIHZhbGlkYXRpb249XFxcIm1heF9sZW46MzB8cmVxdWlyZWRcXFwiPjwvYXV0b2NvbXBsZXRlPi0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmtCw0YLQtdCz0L7RgNC40Y86PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjYXRlZ29yeUlkXFxcIiBuZy1tb2RlbD1cXFwidm0uaXRlbS50eXBlSWRcXFwiIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwib25Ub3BcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaXNIb21lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4g0JTQvtC80LAgPCEtLXRvZG8gYWRkIHN3aXRjaGVyLS0+IFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmFtZT1cXFwiZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1yZWFkb25seT1cXFwidHJ1ZVxcXCIgc2hvdy1idXR0b24tYmFyPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1aWItZGF0ZXBpY2tlci1wb3B1cD1cXFwiZGQvTU1NTS95eXl5XFxcIiBuZy1tb2RlbD1cXFwidm0uaXRlbS5kYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XFxcInZtLnN0YXR1cy5vcGVuZWRcXFwiIGRhdGVwaWNrZXItb3B0aW9ucz1cXFwidm0uZGF0ZU9wdGlvbnNcXFwiIGNsb3NlLXRleHQ9XFxcItCX0LDQutGA0YvRgtGMXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdC1pbnB1dC1mb3JtYXRzPVxcXCJhbHRJbnB1dEZvcm1hdHNcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB2YS10b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbigpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IHVpYi10aW1lcGlja2VyIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLnRpbWVcXFwiIG5nLWNoYW5nZT1cXFwidm0udGltZUNoYW5nZWQoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91ci1zdGVwPVxcXCIxXFxcIiBtaW51dGUtc3RlcD1cXFwiMVxcXCIgc2hvdy1tZXJpZGlhbj1cXFwiZmFsc2VcXFwiIHNob3ctc3Bpbm5lcnM9XFxcImZhbHNlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIXZtLml0ZW0uZGF0ZVxcXCI+PC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItYXV0by1jb21wbGV0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1hdXRvLWNvbXBsZXRlXCJcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tIFwiLi9hZG1pbi5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VwbFRhYmxlLmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSBmcm9tIFwiLi9hZG1pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZXBsLXRhYmxlXCIsXHJcbiAgICAvL3RlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC9hZG1pbi9lcGxUYWJsZS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGxUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG5cclxuICAgIC8vICAgIHRoaXMuc2VydmljZVxyXG4gICAgLy8gICAgICAgIC51cGRhdGVFcGxUYWJsZSgpXHJcbiAgICAvLyAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vaWYgdHJ1ZSB1cGRhdGVcclxuICAgIC8vICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgIC8vICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIlwiKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9lcGxUYWJsZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlIGNvbC14cy0xMiBvdmVyZmxvd2FibGVcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QmtC+0LzQsNC90LTQsDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCYPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0JI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QnTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCfPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Ky8tPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0J48L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5Pjx0cj48dGQ+MTwvdGQ+PHRkPtCb0LjQstC10YDQv9GD0LvRjFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+ODwvdGQ+PHRkPjI8L3RkPjx0ZD4xPC90ZD48dGQ+MTY8L3RkPjx0ZD4yNjwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjI8L3RkPjx0ZD7Qp9C10LvRgdC4XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD44PC90ZD48dGQ+MTwvdGQ+PHRkPjI8L3RkPjx0ZD4xNzwvdGQ+PHRkPjI1PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MzwvdGQ+PHRkPtCc0LDQvdGH0LXRgdGC0LXRgCDQodC40YLQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NzwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+MTU8L3RkPjx0ZD4yNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjQ8L3RkPjx0ZD7QkNGA0YHQtdC90LDQu1xcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NzwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+MTM8L3RkPjx0ZD4yNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjU8L3RkPjx0ZD7QotC+0YLRgtC10L3RhdGN0LxcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjU8L3RkPjx0ZD42PC90ZD48dGQ+MDwvdGQ+PHRkPjk8L3RkPjx0ZD4yMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjY8L3RkPjx0ZD7QnNCw0L3Rh9C10YHRgtC10YAg0K7QvdCw0LnRgtC10LRcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjU8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD4xODwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjc8L3RkPjx0ZD7QrdCy0LXRgNGC0L7QvVxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+MjwvdGQ+PHRkPjE4PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+ODwvdGQ+PHRkPtCj0L7RgtGE0L7RgNC0XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD40PC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD4tNDwvdGQ+PHRkPjE1PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+OTwvdGQ+PHRkPtCR0LXRgNC90LvQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NDwvdGQ+PHRkPjI8L3RkPjx0ZD41PC90ZD48dGQ+LTQ8L3RkPjx0ZD4xNDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEwPC90ZD48dGQ+0KHQsNGD0YLQs9C10LzQv9GC0L7QvVxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+MDwvdGQ+PHRkPjEzPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTE8L3RkPjx0ZD7QktC10YHRgiDQkdGA0L7QvNCy0LjRh1xcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+LTM8L3RkPjx0ZD4xMzwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEyPC90ZD48dGQ+0KHRgtC+0Log0KHQuNGC0LhcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD40PC90ZD48dGQ+NDwvdGQ+PHRkPi01PC90ZD48dGQ+MTM8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMzwvdGQ+PHRkPtCR0L7RgNC90LzRg9GCXFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjU8L3RkPjx0ZD4tMzwvdGQ+PHRkPjEyPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTQ8L3RkPjx0ZD7Qm9C10YHRgtC10YBcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+NTwvdGQ+PHRkPi01PC90ZD48dGQ+MTI8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNTwvdGQ+PHRkPtCc0LjQtNC70YHQsdGA0L5cXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjI8L3RkPjx0ZD41PC90ZD48dGQ+NDwvdGQ+PHRkPi0yPC90ZD48dGQ+MTE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNjwvdGQ+PHRkPtCa0YDQuNGB0YLQsNC7INCf0Y3Qu9Cw0YFcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4yPC90ZD48dGQ+NjwvdGQ+PHRkPi0zPC90ZD48dGQ+MTE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNzwvdGQ+PHRkPtCS0LXRgdGCINCl0Y3QvFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjI8L3RkPjx0ZD42PC90ZD48dGQ+LTk8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE4PC90ZD48dGQ+0KXQsNC70LtcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4xPC90ZD48dGQ+NzwvdGQ+PHRkPi0xNDwvdGQ+PHRkPjEwPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTk8L3RkPjx0ZD7QodGD0L7QvdGB0LhcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjE8L3RkPjx0ZD4yPC90ZD48dGQ+ODwvdGQ+PHRkPi0xMTwvdGQ+PHRkPjU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4yMDwvdGQ+PHRkPtCh0LDQvdC00LXRgNC70LXQvdC0XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjg8L3RkPjx0ZD4tMTI8L3RkPjx0ZD41PC90ZD48L3RyPlxcclxcbjwvdGJvZHk+PC90YWJsZT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9lcGxUYWJsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=