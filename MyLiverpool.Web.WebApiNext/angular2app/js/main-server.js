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

	module.exports = "<div class=\"container-fluid\">\r\n    <div>\r\n        <!--ng-if=\"vm.page > 0\">-->\r\n        <!--form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\"\r\n                    ng-model=\"vm.categoryId\"\r\n                    ng-options=\"category.id as category.name for category in vm.categories\" ng-change=\"vm.changeCategoryId()\"></select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <input class=\"form-control\" ng-model=\"vm.userName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\"/> <!--todo magic number--\r\n        </div>\r\n        </form-->\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"\" *ngIf=\"!item.pending || roles.isEditor\">\r\n            <div class=\"flex-vertical-center\">\r\n                <a [routerLink]=\"['/news', item.id]\" class=\"col-xs-9 col-sm-9\"><h4 [textContent]=\"item.title\"></h4></a>\r\n                <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                    <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                    <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                </span>\r\n            </div>\r\n            <div class=\"\">\r\n                <img class=\"img-thumbnail news-mini center-block\" alt=\"\" [src]=\"item.photoPath\" />\r\n            </div>\r\n            <div class=\"\">\r\n                <i> <span [innerHTML]=\"item.brief\"></span></i>\r\n            </div>\r\n            <div class=\"col-sx-12 col-sm-12\">\r\n                <ul class=\"list-inline small small-offset\">\r\n                    <li class=\"\">Категория:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/news/list', page, item.categoryId ]\" [textContent]=\"item.categoryName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Время добавления:</li>\r\n                    <li class=\"\" [textContent]=\"item.additionTime\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Просмотры</li>\r\n                    <li class=\"\" [textContent]=\"item.reads\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Автор:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/user', item.userId ]\" [textContent]=\"item.userName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Комментарии:</li>\r\n                    <li class=\"\" [textContent]=\"item.commentsCount\"></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination\">\r\n        <!--<pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>-->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

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

	module.exports = "<div>\r\n    <a secured=\"newsFull\" [routerLink]=\"['/newsCategory', 0, 'edit']\">Создать категорию</a>\r\n    <ul>\r\n        <li *ngFor=\"let category of items; let i = index;\">\r\n            <a [routerLink]=\"['/news/list', 1, category.id ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </a>\r\n            <!--->a secured=\"newsStart\" [routerLink]=\"['/news/list', page, item.categoryId ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </!--a-->\r\n            <a [routerLink]=\"['/newsCategory', category.id, 'edit']\"> <span class=\"glyphicon glyphicon-pencil\">newsStart</span></a>\r\n            <a *ngIf=\"category.itemsCount == 0\" (click)=\"delete(i)\"> <span class=\"glyphicon glyphicon-trash\">newsFull</span></a>\r\n        </li>\r\n    </ul>\r\n</div>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjRiY2U4OTQ4ZGFlMTFjZDM3NzUiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbC1zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaHR0cFdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3NlY3VyZWQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvZ2xvYmFsVmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzRmlsdGVycy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvc2lnbnVwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Mucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0ucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ob21lLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2FkbWluLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaFR5cGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWF1dG8tY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9CLENBQUM7QUFDekQsd0NBQTBCLENBQWtCLENBQUM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLFFBQVEsRUFBRSxhQUFhO2NBQzFCO2FBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztpQkFFdEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztVQUNKLENBQUMsQ0FBQztTQUVILE1B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Q0FBQztxQkFDaEMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQztxQkFDOUIsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQzdCLENBQUMsQ0FBQztLQUNQLENBQUM7S0FFTyx1Q0FBVSxHQUFsQixVQUFtQixLQUFhO1NBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCLENBQUM7S0F2Rkw7U0FBQyxnQkFBUyxDQUFDO2FBQ1AsUUFBUSxFQUFFLFlBQVk7YUFDdEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsR0FBNkIsQ0FBQztVQUNuRCxDQUFDOzsyQkFBQTtLQXFGRix5QkFBQztBQUFELEVBQUM7QUFuRlksMkJBQWtCLHFCQW1GOUI7Ozs7Ozs7O0FDakdEO0tBQUE7S0FRQSxDQUFDO0tBQUQsWUFBQztBQUFELEVBQUM7QUFSWSxjQUFLLFFBUWpCOzs7Ozs7O0FDUkQsc2xHOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLDhCQUFjLEdBQWlCLENBQUM7QUFDaEMsOEJBQWMsR0FBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckMsa0NBQWtDLENBQWUsQ0FBQztBQVlsRDtLQUVJO0tBQ0EsQ0FBQztLQUVELG9DQUFRLEdBQVI7S0FVQSxDQUFDO0tBckJMO1NBQUMsZ0JBQVMsQ0FBQzthQUNQLFFBQVEsRUFBRSxXQUFXO2FBRXJCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQTJCLENBQUM7VUFDakQsQ0FBQzs7MEJBQUE7S0FrQkYsd0JBQUM7QUFBRCxFQUFDO0FBaEJZLDBCQUFpQixvQkFnQjdCOzs7Ozs7O0FDNUJELDRoRiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qc1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI0YmNlODk0OGRhZTExY2QzNzc1IiwiaW1wb3J0IFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiO1xyXG5pbXBvcnQgXCJ6b25lLmpzXCI7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjsgXHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSk6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IFwiPGFwcD48L2FwcD5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbi8vaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3NoYXJlZC9sb2NhbC1zdG9yYWdlXCI7ICAgICBcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRpbmcsIGFwcFJvdXRpbmdQcm92aWRlcnMgfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE5ld3NFZGl0Q29tcG9uZW50LCBOZXdzRGV0YWlsQ29tcG9uZW50LCBOZXdzTGlzdENvbXBvbmVudCwgTmV3c1NlcnZpY2UgfSBmcm9tIFwiLi9uZXdzL2luZGV4XCI7ICAgICAgICAgICAgIFxyXG5pbXBvcnQgKiBhcyBuZXdzQ2F0ZWdvcnkgZnJvbSBcIi4vbmV3c0NhdGVnb3J5L2luZGV4XCI7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCwgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2luZGV4XCI7XHJcbmltcG9ydCB7IEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQsIEZvcnVtU2VjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3J1bVNlY3Rpb24vaW5kZXhcIjsgXHJcbmltcG9ydCAqIGFzIGFjY291bnQgZnJvbSBcIi4vYWNjb3VudC9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBjbHViIGZyb20gXCIuL2NsdWIvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgbWF0Y2ggZnJvbSBcIi4vbWF0Y2gvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gXCIuL3NoYXJlZC9pbmRleFwiOyAgICAgICAgICAgICAgICAgICAgIFxyXG5pbXBvcnQgeyBVc2VyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci91c2VyLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbUxpc3RDb21wb25lbnQsIFBtRGV0YWlsQ29tcG9uZW50LCBQbUVkaXRDb21wb25lbnQsIFBtU2VydmljZSB9IGZyb20gXCIuL3BtL2luZGV4XCI7XHJcbmltcG9ydCB7IENsdWJIaXN0b3J5Q29tcG9uZW50LCBSdWxlc0NvbXBvbmVudCwgUmlnaHRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBXaXNoTGlzdENvbXBvbmVudCwgV2lzaFNlcnZpY2UsIFdpc2hFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vd2lzaC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LCBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlLCBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50LCBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTmcyQXV0b0NvbXBsZXRlTW9kdWxlIH0gZnJvbSBcIm5nMi1hdXRvLWNvbXBsZXRlXCI7XHJcbmltcG9ydCB7IEFkbWluU2VydmljZSwgRXBsVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi9hZG1pbi9pbmRleFwiO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kdWxlLCBNb2RhbE1vZHVsZSwgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgICAgIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBOZ01vZHVsZSwgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5dLFxyXG4gICAgICAgIERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAvLyAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBNb2RhbE1vZHVsZSxcclxuICAgICAgICBOZzJBdXRvQ29tcGxldGVNb2R1bGUsXHJcbiAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIHJvdXRpbmdcclxuICAgIF0sIFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgYWNjb3VudC5BY2NvdW50U2lnbmluQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuQWNjb3VudFNpZ251cENvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuQ29uZmlybUVtYWlsQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5SZXNldFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCxcclxuICAgICAgICBjbHViLkNsdWJFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIGNsdWIuQ2x1Ykxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgbmV3c0NhdGVnb3J5Lk5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgbmV3c0NhdGVnb3J5Lk5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgc2hhcmVkLlNlY3VyZWREaXJlY3RpdmUsXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIENsdWJIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgICAgIEVwbFRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgbWF0Y2guTWF0Y2hFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIG1hdGNoLk1hdGNoTGlzdENvbXBvbmVudCxcclxuICAgICAgICBNYXRlcmlhbENvbW1lbnREZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCxcclxuICAgICAgICBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE5ld3NMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE5ld3NEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTmV3c0VkaXRDb21wb25lbnQsXHJcbiAgICAgICAgUG1EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgUG1FZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIFBtTGlzdENvbXBvbmVudCxcclxuICAgICAgICBSaWdodFNpZGViYXJDb21wb25lbnQsXHJcbiAgICAgICAgUnVsZXNDb21wb25lbnQsXHJcbiAgICAgICAgVXNlckRldGFpbENvbXBvbmVudCxcclxuICAgICAgICBVc2VyTGlzdENvbXBvbmVudCxcclxuICAgICAgICBXaXNoRWRpdENvbXBvbmVudCxcclxuICAgICAgICBXaXNoTGlzdENvbXBvbmVudF0sICAgLy8gY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlc1xyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSwgICAgIC8vIHJvb3QgY29tcG9uZW50XHJcbiAgICBwcm92aWRlcnM6IFsgLy8gc2VydmljZXNcclxuICAgICAgICBhY2NvdW50LkFjY291bnRTZXJ2aWNlLCBcclxuICAgICAgICBjbHViLkNsdWJTZXJ2aWNlLFxyXG4gICAgICAgIG1hdGNoLk1hdGNoU2VydmljZSxcclxuICAgICAgICBuZXdzQ2F0ZWdvcnkuTmV3c0NhdGVnb3J5U2VydmljZSxcclxuICAgICAgICBzaGFyZWQuSHR0cFdyYXBwZXIsXHJcbiAgICAgICAgc2hhcmVkLkdsb2JhbFZhbGlkYXRvcnMsXHJcbiAgICAgICAgc2hhcmVkLkxvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgc2hhcmVkLlJvbGVzQ2hlY2tlZFNlcnZpY2UsXHJcbiAgICAgICAgQWRtaW5TZXJ2aWNlLFxyXG4gICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnMsXHJcbiAgICAgICAgQXV0aEd1YXJkLFxyXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIENvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgRm9ydW1TZWN0aW9uU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IExvY2FsU3RvcmFnZSwgdXNlRmFjdG9yeTogKCkgPT4gKHdpbmRvdykgPyB3aW5kb3cubG9jYWxTdG9yYWdlIDoge319LFxyXG4gICAgICAgIE1hdGVyaWFsQ29tbWVudFNlcnZpY2UsXHJcbiAgICAgICAgTmV3c1NlcnZpY2UsXHJcbiAgICAgICAgUG1TZXJ2aWNlLFxyXG4gICAgICAgIFRpdGxlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIFdpc2hTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE9wYXF1ZVRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhbFN0b3JhZ2UgPSBuZXcgT3BhcXVlVG9rZW4oXCJsb2NhbFN0b3JhZ2VcIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2xvY2FsLXN0b3JhZ2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9yb2xlcy1jaGVja2VkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVJvbGVzIH0gZnJvbSBcIi4vc2hhcmVkL3JvbGVzLmludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHBcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRpdGxlU2VydmljZTogVGl0bGUpIHsgLy90b2RvIG5lZWQgdG8gbW9yZSBlbGVnYW50IGRlY2lzaW9uXHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICAvLyBZb3UgbmVlZCB0aGlzIHNtYWxsIGhhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggYXBwbGljYXRpb24gcm9vdCB2aWV3IGNvbnRhaW5lciByZWZcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYgPSB2aWV3Q29udGFpbmVyUmVmOyBcclxuICAgICAgICB0aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCLQk9C70LDQstC90LDRj1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoLmxvZ291dCgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjsgXHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIEh0dHBXcmFwcGVyLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiOyBcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICByb2xlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBodHRwMTogSHR0cCwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWRTZXJ2aWNlOiBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHsgIFxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzQWNjZXNzVG9rZW4oKSkgeyBcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IGxvY2FsU3RvcmFnZS5nZXRSb2xlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gbG9jYWxTdG9yYWdlLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVSb2xlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTg7XCIpO1xyXG4gICAgICAgIGxldCBwZXJhbXMgPSBgZ3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfSZjbGllbnRfaWQ9Y2xpZW50X2lkM2A7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cDEucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyICsgXCJjb25uZWN0L3Rva2VuXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJhbXMsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VMb2dpbkFuc3dlcihkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuX2JvZHkgPT09IFwidW5jb25maXJtZWRfZW1haWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdW5jb25maXJtZWRFbWFpbFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VXNlcklkKCkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSAgICAgIFxyXG5cclxuICAgIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmVBdXRoVG9rZW5zKCk7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb2xlc0NoZWNrZWRTZXJ2aWNlLmNoZWNrUm9sZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1VzZXJJblJvbGUocm9sZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9sZXMuZmluZCh4ID0+IHgudG9Mb3dlckNhc2UoKSA9PT0gcm9sZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VMb2dpbkFuc3dlcihpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2Uuc2V0QXV0aFRva2VucyhpdGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUm9sZXMoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IGl0ZW0uX2JvZHkuc3BsaXQoXCIsIFwiKTtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRSb2xlcyh0aGlzLnJvbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcInJvbGVcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VSb2xlcyhkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJvbGVzQ2hlY2tlZFNlcnZpY2UuY2hlY2tSb2xlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFVzZXJJZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJ1c2VyL2dldElkXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmlkID0gK0pTT04ucGFyc2UoZGF0YS50ZXh0KCkpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldFVzZXJJZCh0aGlzLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSb2xlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSBcIi4vcGFnZWFibGUubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaHR0cFdyYXBwZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjsgIFxyXG5leHBvcnQgKiBmcm9tIFwiLi9zZWN1cmVkLmRpcmVjdGl2ZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb2xlcy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm9sZXMtY2hlY2tlZC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsb2JhbFZhbGlkYXRvcnNcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgUGFnZWFibGU8VD4ge1xyXG4gICAgbGlzdDogVFtdO1xyXG4gICAgcGFnZU5vOiBudW1iZXI7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBpdGVtUGVyUGFnZTogbnVtYmVyO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBXcmFwcGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBcclxuICAgICAgICAsIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHVwZGF0ZUhlYWRlcnMoKTogSGVhZGVycyB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2UuaGFzQWNjZXNzVG9rZW4oKSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIixcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldEFjY2Vzc1Rva2VuV2l0aFR5cGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh1cmwpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5odHRwLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy51cGRhdGVIZWFkZXJzKCksXHJcbiAgICAgICAgICAgIGJvZHk6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLnVwZGF0ZUhlYWRlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXQodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLnVwZGF0ZUhlYWRlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSh1cmwpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy51cGRhdGVIZWFkZXJzKCksXHJcbiAgICAgICAgICAgIGJvZHk6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9odHRwV3JhcHBlci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBpc0Jyb3dzZXIsIGlzTm9kZSB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjsgICAgICAgICAgIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7IFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IFN0b3JhZ2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoaXNCcm93c2VyICYmICFsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgTG9jYWwgU3RvcmFnZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNBY2Nlc3NUb2tlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJhY2Nlc3NfdG9rZW5cIikgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjZXNzVG9rZW5XaXRoVHlwZSgpOiBzdHJpbmcgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0KFwidG9rZW5fdHlwZVwiKX0gJHt0aGlzLmdldChcImFjY2Vzc190b2tlblwiKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoXCJyb2xlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gK3RoaXMuZ2V0KFwidXNlcklkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVJvbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwicm9sZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXV0aFRva2VucygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInRva2VuX3R5cGVcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJleHBpcmVzX2luXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwicmVmcmVzaF90b2tlblwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcInJvbGVzXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwidXNlcklkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF1dGhUb2tlbnMoaXRlbTogYW55KTogYm9vbGVhbiB7ICAgIC8vdG9kbyBzZXQgdHlwZSBoZXJlIGFuZCBiZWxvd1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoaXRlbS5fYm9keSk7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJ0b2tlbl90eXBlXCIsIHJlc3BvbnNlLnRva2VuX3R5cGUpO1xyXG4gICAgICAgIHRoaXMuc2V0KFwiYWNjZXNzX3Rva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJleHBpcmVzX2luXCIsIHJlc3BvbnNlLmV4cGlyZXNfaW4pO1xyXG4gICAgICAgIHRoaXMuc2V0KFwicmVmcmVzaF90b2tlblwiLCByZXNwb25zZS5yZWZyZXNoX3Rva2VuKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb2xlcyhyb2xlczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRPYmplY3QoXCJyb2xlc1wiLCByb2xlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcklkKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRPYmplY3QoXCJ1c2VySWRcIiwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeUFkZFZpZXdGb3JOZXdzKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldChgbWF0ZXJpYWwke2lkfWApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KGBtYXRlcmlhbCR7aWR9YCwgXCIxXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE9iamVjdChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9iamVjdChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvbG9jYWxTdG9yYWdlLnNlcnZpY2UudHMiLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiBcIltzZWN1cmVkXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN1cmVkRGlyZWN0aXZlIHtcclxuICAgIEBIb3N0QmluZGluZyhcImhpZGRlblwiKVxyXG4gICAgaGlkZVJvdXRlckxpbms6IGJvb2xlYW47XHJcbiAgICByb3V0ZXJMaW5rOiBhbnk7XHJcbiAgICBASW5wdXQoKSBzZWN1cmVkOiBhbnk7XHJcblxyXG4gICAgcm91dGVQYXJhbXM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAvLyAgIHRoaXMuYXV0aFNlcnZpY2UudXNlclNpZ251cCQuc3Vic2NyaWJlKGl0ZW0gPT4gdGhpcy5jaGVja1JpZ2h0cygpKTtcclxuICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UudXNlclNpZ251cCQuc3Vic2NyaWJlKGl0ZW0gPT4gdGhpcy5jaGVja1JpZ2h0cyhpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gICAgdmFyIGluc3RydWN0aW9uID0gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUodGhpcy5yb3V0ZVBhcmFtcyk7XHJcbiAgICAvLyAgICB2YXIgZGF0YSA9IGluc3RydWN0aW9uLmNvbXBvbmVudC5yb3V0ZURhdGEuZGF0YTtcclxuICAgIC8vICAgIHRoaXMuaGlkZVJvdXRlckxpbmsgPSB0aGlzLnNob3VsZEJlSGlkZGVuKGRhdGEpO1xyXG4gIC8vICAgICAgY29uc29sZS5sb2codGhpcy5zZWN1cmVkKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKDEpO2ZcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBob3cgdG8gZ2V0IGFjY2VzcyB0byB0aGlzIHByaXZhdGUgdmFyaWFibGU/XHJcbiAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlckxpbmsuX25hdmlnYXRpb25JbnN0cnVjdGlvbi5jb21wb25lbnQucm91dGVEYXRhLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tSaWdodHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUmlnaHRzKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuc2VjdXJlZCkge1xyXG4gICAgICAgICAgIC8vIHJlc3VsdCA9IHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIC8vIHJlc3VsdCA9IHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VySW5Sb2xlKHRoaXMuc2VjdXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3NlY3VyZWQuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IFxyXG5pbXBvcnQgeyBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2Uuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9sZXNDaGVja2VkU2VydmljZSB7XHJcblxyXG4gICAgY2hlY2tlZFJvbGVzOiBJUm9sZXMgPSB7XHJcbiAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcclxuICAgICAgICBpc0VkaXRvcjogZmFsc2UsXHJcbiAgICAgICAgaXNOZXdzbWFrZXI6IGZhbHNlLFxyXG4gICAgICAgIGlzTW9kZXJhdG9yOiBmYWxzZSxcclxuICAgICAgICBpc01haW5Nb2RlcmF0b3I6IGZhbHNlLFxyXG4gICAgICAgIGlzQWRtaW5Bc3Npc3RhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGlzU2VsZjogdXNlcklkID0+IHRoaXMuaXNTZWxmKHVzZXJJZClcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXTsgICAgICAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrUm9sZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1JvbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRSb2xlcygpO1xyXG4gICAgICAgIGlmICghdGhpcy5yb2xlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tFZGl0b3IoKTtcclxuICAgICAgICB0aGlzLmNoZWNrTmV3c21ha2VyKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja01vZGVyYXRvcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNYWluTW9kZXJhdG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0FkbWluQXNzaXN0YW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0VkaXRvcigpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIk5ld3NGdWxsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzRWRpdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja05ld3NtYWtlcigpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIk5ld3NTdGFydFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc05ld3NtYWtlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tNb2RlcmF0b3IoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1JvbGUoXCJVc2VyU3RhcnRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNNb2RlcmF0b3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrTWFpbk1vZGVyYXRvcigpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIlVzZXJGdWxsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTWFpbk1vZGVyYXRvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tBZG1pbkFzc2lzdGFudCgpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIkFkbWluU3RhcnRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNBZG1pbkFzc2lzdGFudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tSb2xlKHJvbGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJvbGVzLmZpbmQoeCA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHJvbGUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NlbGYoYXV0aG9ySWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB1c2VySWQgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRVc2VySWQoKTtcclxuICAgICAgICByZXR1cm4gKHVzZXJJZCA9PT0gYXV0aG9ySWQpOyAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdsb2JhbFZhbGlkYXRvcnMge1xyXG5cclxuICAgIHN0YXRpYyBtYWlsRm9ybWF0KGNvbnRyb2w6IEZvcm1Db250cm9sKTogSVZhbGlkYXRpb25SZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IEVNQUlMX1JFR0VYUCA9IC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2k7XHJcblxyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBcIlwiICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgXCJpbmNvcnJlY3RNYWlsRm9ybWF0XCI6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hdGNoaW5nUGFzc3dvcmRzKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuICAgICAgICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVZhbGlkYXRpb25SZXN1bHQge1xyXG4gICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9nbG9iYWxWYWxpZGF0b3JzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHB1YmxpYyBTZXJ2ZXI6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDoxNjY5L1wiO1xyXG4gICAgcHVibGljIEFwaVVybDogc3RyaW5nID0gXCJhcGkvdjEvXCI7XHJcbiAgICBwdWJsaWMgU2VydmVyV2l0aEFwaVVybCA9IHRoaXMuU2VydmVyICsgdGhpcy5BcGlVcmw7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29uc3RhbnRzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcCBcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGNvbC14cy0zIGNvbC1zbS0zIGxpc3QtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgIDxsaT48YSBpZD1cXFwiYmFjay10b3BcXFwiIGhyZWY9XFxcIiNcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+0JLQstC10YDRhTwvYT48L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCJhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvc3Bhbj4g0KfQuNGC0LDRgtGMINC7L9GBIDwhLS0oPHNwYW4gbmctYmluZD1cXFwidm0udW5yZWFkUG1Db3VudFxcXCI+PC9zcGFuPiktLT48L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcIiFhdXRoLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhY2NvdW50LXNpZ25pbj48L2FjY291bnQtc2lnbmluPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiIWF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mb3Jnb3RQYXNzd29yZCddXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcImJvdHRvbVxcXCIgdGl0bGU9XFxcItCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiIWF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zaWdudXAnXVxcXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcImF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJ1c2VySW5mbyh7aWQ6IHZtLnVzZXJJZCgpfSlcXFwiIGNsYXNzPVxcXCJwYWRkaW5nMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibmF2LWF2YXRhclxcXCIgbmctc3JjPVxcXCJ7JHJvb3QudXNlckltYWdlfX1cXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwidXNlckluZm8oe2lkOiB2bS51c2VySWQoKX0pXFxcIj7QnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ291dCgpXFxcIj7QktGL0LnRgtC4PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgdG9wNTBcXFwiPlxcclxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3Agcm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiLm5hdmJhci1jb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy8nXVxcXCIgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+0J3QsNC30LLQsNC90LjQtSDRgdCw0LnRgtCwPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy8nXVxcXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBAaWYgKFVzZXIuSXNJblJvbGUoXFxcIkFkbWluRnVsbFxcXCIpKVxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gQEh0bWwuQWN0aW9uTGluayhDb21tb25NZXNzYWdlcy5Sb2xlcywgXFxcIkluZGV4XFxcIiwgXFxcIlJvbGVcXFwiKSA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICB9KkAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL2ZvcnVtJ11cXFwiPtCk0L7RgNGD0Lw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDFdXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QndC+0LLQvtGB0YLQuDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJyb2xlcy5pc05ld3NtYWtlclxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgMCwgJ2VkaXQnXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeSddXFxcIj7QmtCw0YLQtdCz0L7RgNC40Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwiYmxvZygpXFxcIiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QkdC70L7Qs9C4PGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxpIG5nLWlmPVxcXCJ2bS5pc0F1dGhvcigpXFxcIj48YSB1aS1zcmVmPVxcXCJibG9nRWRpdCgpXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9hPjwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHVpLXNyZWY9XFxcImJsb2dDYXRlZ29yaWVzKClcXFwiPtCa0LDRgtC10LPQvtGA0LjQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7QpNCaINCb0LjQstC10YDQv9GD0LvRjDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1Ykhpc3RvcnknXVxcXCI+0JjRgdGC0L7RgNC40Y88L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiXFxcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70LggPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaS0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyL2xpc3QnLCAxXVxcXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLS9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWwtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL21hdGVyaWFsQ29tbWVudCddXFxcIj7QmtC+0LzQvNC10L3RgtCw0YDQuNC4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08bGk+IDxhIG5nLWlmPVxcXCJ2bS5pc05ld3NtYWtlcigpIHx8IHZtLmlzQXV0aG9yKClcXFwiIHVpLXNyZWY9XFxcImltYWdlcyh7cGF0aDogJ2NvbnRlbnQnfSlcXFwiPtCY0LfQvtCx0YDQsNC20LXQvdC40Y88L2E+PC9saT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPiA8YSBbcm91dGVyTGlua109XFxcIlsnL2NsdWInXVxcXCI+0JrQu9GD0LHRizwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbWF0Y2gnXVxcXCI+0JzQsNGC0YfQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcnVsZXMnXVxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj7Qn9GA0LDQstC40LvQsDwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJiZy1zdWNjZXNzXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93aXNoJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPtCf0L7QttC10LvQsNC90LjRjzwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgdGVtcG9yYXJ5XFxyXFxuICAgICAgICAgICAgPHNwYW4gbmctYmluZD1cXFwiJHJvb3Qucm9sZXNcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYm9keS1jb250ZW50IHJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IG5jeS1icmVhZGNydW1iPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS1wdXNoLTMgY29sLXNtLTYgY29udGFpbmVyLWZsdWlkXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogI2Y1ZGViM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTx1aWItYWxlcnQgY2xhc3M9XFxcInJvd1xcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkcm9vdC5hbGVydHNcXFwiIGRpc21pc3Mtb24tdGltZW91dD1cXFwiNTAwMFxcXCIgdHlwZT1cXFwie2FsZXJ0LnR5cGV9fVxcXCIgY2xvc2U9XFxcImNsb3NlQWxlcnQoJGluZGV4KVxcXCIgbmctYmluZD1cXFwiYWxlcnQubXNnXFxcIj48L3VpYi1hbGVydD4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiIHVpLXZpZXcgYXV0b3Njcm9sbD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiIHVpLXZpZXc9XFxcIm5ld3NGZWVkXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIiB1aS12aWV3PVxcXCJibG9nc0ZlZWRcXFwiPjwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLXB1bGwtNiBjb2wtc20tMyBjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtIGFsZXJ0LWluZm8gcm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyPtCt0LrRgdC10YLQtdGAIDwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9ydS9mL2Y3L0V4ZXRlcl9DaXR5X0xvZ28ucG5nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA0NXB0XFxcIj4zOjA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLW1kLSBhbGVydC1kYW5nZXIgcm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4g0JvRg9GH0YjQuNC5INC40LPRgNC+0Log0LzQsNGC0YfQsCDRgSDQrdC60YHQtdGC0LXRgNC+0LwgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vd3d3Lm15bGl2ZXJwb29sLnJ1L2ltYWdlcy9QbGF5ZXJzL1NxdWFkMTItMTMvSm9lX0FsbGVuLnBuZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQlNC20L4g0JDQu9C70LXQvVxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInJvd1xcXCI+PC9zZWN0aW9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8cmlnaHQtc2lkZWJhcj48L3JpZ2h0LXNpZGViYXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiYm90dG9tIGNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8cD4mY29weTsgQERhdGVUaW1lLk5vdy5ZZWFyIC0gQENvbW1vbk1lc3NhZ2VzLlNpdGVUaXRsZUFkZHJlc3M8L3A+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZXdzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL25ld3MvaW5kZXhcIjtcclxuaW1wb3J0IHsgYXV0aFJvdXRlcywgYXV0aFByb3ZpZGVycyB9IGZyb20gXCIuL2F1dGgvYXV0aC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IGFjY291bnRSb3V0ZXMgfSBmcm9tIFwiLi9hY2NvdW50L2FjY291bnQucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBjbHViUm91dGVzIH0gZnJvbSBcIi4vY2x1Yi9jbHViLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgbmV3c0NhdGVnb3J5Um91dGVzIH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IG5ld3NSb3V0ZXMgfSBmcm9tIFwiLi9uZXdzL25ld3Mucm91dGluZ1wiO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVzIH0gZnJvbSBcIi4vdXNlci91c2VyLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgcG1Sb3V0ZXMgfSBmcm9tIFwiLi9wbS9wbS5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IGhvbWVSb3V0ZXMgfSBmcm9tIFwiLi9ob21lL2hvbWUucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBmb3J1bVNlY3Rpb25Sb3V0ZXMgfSBmcm9tIFwiLi9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgd2lzaFJvdXRlcyB9IGZyb20gXCIuL3dpc2gvd2lzaC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IG1hdGVyaWFsQ29tbWVudFJvdXRlcyB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBtYXRjaFJvdXRlcyB9IGZyb20gXCIuL21hdGNoL21hdGNoLnJvdXRpbmdcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgLi4uYWNjb3VudFJvdXRlcyxcclxuICAgIC4uLmF1dGhSb3V0ZXMsXHJcbiAgICAuLi5jbHViUm91dGVzLFxyXG4gICAgLi4uZm9ydW1TZWN0aW9uUm91dGVzLFxyXG4gICAgLi4uaG9tZVJvdXRlcyxcclxuICAgIC4uLm1hdGNoUm91dGVzLFxyXG4gICAgLi4ubWF0ZXJpYWxDb21tZW50Um91dGVzLFxyXG4gICAgLi4ubmV3c0NhdGVnb3J5Um91dGVzLFxyXG4gICAgLi4ubmV3c1JvdXRlcyxcclxuICAgIC4uLnBtUm91dGVzLFxyXG4gICAgLi4udXNlclJvdXRlcyxcclxuICAgIC4uLndpc2hSb3V0ZXMsXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTmV3c0xpc3RDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJvdXRpbmdQcm92aWRlcnM6IGFueVtdID0gW1xyXG4gICAgYXV0aFByb3ZpZGVyc1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FwcC5yb3V0ZXMudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9uZXdzLWRldGFpbC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLWVkaXQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3MubW9kZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy5zZXJ2aWNlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tIFwiLi9uZXdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tIFwiLi9uZXdzLm1vZGVsXCI7ICAgICAgICAgICAgICAgIFxyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMsIExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXdzLWRldGFpbFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3MtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3c0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW06IE5ld3M7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGU7XHJcbiAgICBAVmlld0NoaWxkKFwiYWN0aXZhdGVNb2RhbFwiKSBhY3RpdmF0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge1xyXG4gICAgICAgLy8gdGhpcy50aXRsZSA9IHRcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG5cclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWN0aXZhdGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZS5hY3RpdmF0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoaXRlbTogTmV3cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoaXRlbS50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRWaWV3KCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuaXRlbS5pZDtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlLnRyeUFkZFZpZXdGb3JOZXdzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZFZpZXcoaWQpLnN1YnNjcmliZShkYXRhID0+IGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL25ld3MubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbEZpbHRlcnMgfSBmcm9tIFwiLi9uZXdzRmlsdGVycy5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmV3c1NlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm1hdGVyaWFsL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCA9IChmaWx0ZXJzOk1hdGVyaWFsRmlsdGVycyk6IE9ic2VydmFibGU8UGFnZWFibGU8TmV3cz4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJzKSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZXdzPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IE5ld3MpOiBPYnNlcnZhYmxlPE5ld3M+ID0+IHtcclxuICAgICAgIC8vIHZhciB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHsgSXRlbU5hbWU6IGl0ZW0gfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsICsgXCJOZXdzL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogTmV3cyk6IE9ic2VydmFibGU8TmV3cz4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkVmlldyA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImFkZFZpZXcvXCIgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgYWN0aXZhdGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJhY3RpdmF0ZS9cIiArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiXFxcIiAqbmdJZj1cXFwiaXRlbVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWRhbmdlciBmbGV4LXZlcnRpY2FsLWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS50aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tMyBwdWxsLXJpZ2h0XFxcIiAqbmdJZj1cXFwicm9sZXMuaXNFZGl0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0udXNlcklkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtoaWRkZW5dPVxcXCIhaXRlbS5wZW5kaW5nIHx8ICFyb2xlcy5pc0VkaXRvclxcXCIgKGNsaWNrKT1cXFwic2hvd0FjdGl2YXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MnLCBpdGVtLmlkLCAnZWRpdCddXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8YXJ0aWNsZSBbaW5uZXJIVE1MXT1cXFwiaXRlbS5tZXNzYWdlXFxcIj48L2FydGljbGU+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC13YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7Qn9GA0L7RgdC80L7RgtGA0Ys6PC9sYWJlbD4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5yZWFkc1xcXCI+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0JjRgdGC0L7Rh9C90LjQujo8L2xhYmVsPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnNvdXJjZVxcXCI+PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+0JTQsNGC0LAg0LTQvtCx0LDQstC70LXQvdC40Y86PC9sYWJlbD4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5hZGRpdGlvblRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7QmtCw0YLQtdCz0L7RgNC40Y86PC9sYWJlbD4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCAxLCBpdGVtLmNhdGVnb3J5SWQgXVxcXCI+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uY2F0ZWdvcnlOYW1lXFxcIj48L3NwYW4+IDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxjb21tZW50cyBbbWF0ZXJpYWxJZF09XFxcIml0ZW0uaWRcXFwiIFtjYW5Db21tZW50YXJ5XT1cXFwiaXRlbS5jYW5Db21tZW50YXJ5XFxcIj48L2NvbW1lbnRzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2FjdGl2YXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmF0ZSgpXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiAgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tIFwiLi9uZXdzLm1vZGVsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbEZpbHRlcnMgfSBmcm9tIFwiLi9uZXdzRmlsdGVycy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3cy1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1saXN0LmNvbXBvbmVudC5odG1sXCIpLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbXM6IE5ld3NbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gICAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImFjdGl2YXRlTW9kYWxcIikgYWN0aXZhdGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c1NlcnZpY2U6IE5ld3NTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FjdGl2YXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgICAgIGxldCBuZXdzID0gdGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XTtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKG5ld3MuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG5cclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wicGFnZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gK3BhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gK3BhcmFtc1tcImNhdGVnb3J5SWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBwYXJhbXNbXCJ1c2VyTmFtZVwiXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IG5ld1VybCA9IGBuZXdzL2xpc3QvJHt0aGlzLnBhZ2V9YDtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgICAgIG5ld1VybCA9IGAke25ld1VybH0vJHt0aGlzLmNhdGVnb3J5SWR9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUobmV3VXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxOZXdzPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBuZXcgTWF0ZXJpYWxGaWx0ZXJzKCk7XHJcbiAgICAgICAgZmlsdGVycy5jYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yeUlkO1xyXG4gICAgICAgIGZpbHRlcnMubWF0ZXJpYWxUeXBlID0gXCJOZXdzXCI7XHJcbiAgICAgICAgZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoZmlsdGVycylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgLy8gIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBNYXRlcmlhbEZpbHRlcnMge1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBtYXRlcmlhbFR5cGU6IHN0cmluZzsgLy8xIC0gbmV3cywgMiAtIGJsb2dcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3c0ZpbHRlcnMubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDwhLS1uZy1pZj1cXFwidm0ucGFnZSA+IDBcXFwiPi0tPlxcclxcbiAgICAgICAgPCEtLWZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5jYXRlZ29yeUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwiY2F0ZWdvcnkuaWQgYXMgY2F0ZWdvcnkubmFtZSBmb3IgY2F0ZWdvcnkgaW4gdm0uY2F0ZWdvcmllc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VDYXRlZ29yeUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0udXNlck5hbWVcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlVc2VyTmFtZSgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItLVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0tLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIiAqbmdJZj1cXFwiIWl0ZW0ucGVuZGluZyB8fCByb2xlcy5pc0VkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MnLCBpdGVtLmlkXVxcXCIgY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIj48aDQgW3RleHRDb250ZW50XT1cXFwiaXRlbS50aXRsZVxcXCI+PC9oND48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tMyBwdWxsLXJpZ2h0XFxcIiAqbmdJZj1cXFwicm9sZXMuaXNFZGl0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0udXNlcklkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiIWl0ZW0ucGVuZGluZyB8fCAhcm9sZXMuaXNFZGl0b3JcXFwiIChjbGljayk9XFxcInNob3dBY3RpdmF0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWctdGh1bWJuYWlsIG5ld3MtbWluaSBjZW50ZXItYmxvY2tcXFwiIGFsdD1cXFwiXFxcIiBbc3JjXT1cXFwiaXRlbS5waG90b1BhdGhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGk+IDxzcGFuIFtpbm5lckhUTUxdPVxcXCJpdGVtLmJyaWVmXFxcIj48L3NwYW4+PC9pPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zeC0xMiBjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtaW5saW5lIHNtYWxsIHNtYWxsLW9mZnNldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCBwYWdlLCBpdGVtLmNhdGVnb3J5SWQgXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5jYXRlZ29yeU5hbWVcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCS0YDQtdC80Y8g0LTQvtCx0LDQstC70LXQvdC40Y86PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFkZGl0aW9uVGltZVxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7Qn9GA0L7RgdC80L7RgtGA0Ys8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucmVhZHNcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JDQstGC0L7RgDo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIGl0ZW0udXNlcklkIF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udXNlck5hbWVcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lg6PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNvbW1lbnRzQ291bnRcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgPCEtLTxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtc1xcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dFRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdFRleHQ9XFxcIjFcXFwiIGxhc3RUZXh0PVxcXCJ0b3RhbEl0ZW1zL2l0ZW1zUGVyUGFnZVxcXCI+PC9wYWdpbmF0aW9uPi0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNhY3RpdmF0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZhdGUoKVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tIFwiLi9uZXdzLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeVNlcnZpY2UgfSBmcm9tIFwiLi4vbmV3c0NhdGVnb3J5L2luZGV4XCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeSB9IGZyb20gXCIuLi9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ld3MtZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3MtZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGNhdGVnb3JpZXM6IE5ld3NDYXRlZ29yeVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c1NlcnZpY2U6IE5ld3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbmV3c0NhdGVnb3J5U2VydmljZTogTmV3c0NhdGVnb3J5U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZS5nZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZUNhdGVnb3JpZXMoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgbmV3c0l0ZW0gPSB0aGlzLnBhcnNlRm9ybSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLnVwZGF0ZSh0aGlzLmlkLCBuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGRhdGE6IE5ld3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUZvcm0oKTogTmV3cyB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgTmV3cygpO1xyXG4gICAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGl0ZW0uY2F0ZWdvcnlJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJjYXRlZ29yeUlkXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widGl0bGVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5icmllZiA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJicmllZlwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLm1lc3NhZ2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnNvdXJjZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJzb3VyY2VcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5waG90byA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJwaG90b1wiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnBlbmRpbmcgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wicGVuZGluZ1wiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmNhbkNvbW1lbnRhcnkgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2FuQ29tbWVudGFyeVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLm9uVG9wID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm9uVG9wXCJdLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRGb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2NhdGVnb3J5SWQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICd0aXRsZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2JyaWVmJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3NvdXJjZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW10pXSxcclxuICAgICAgICAgICAgJ3Bob3RvJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnY2FuQ29tbWVudGFyeSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ29uVG9wJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAncGVuZGluZyc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VDYXRlZ29yaWVzKGl0ZW1zOiBOZXdzQ2F0ZWdvcnlbXSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGl0ZW1zO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIE5ld3Mge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhZGRpdGlvblRpbWU6IERhdGU7XHJcbiAgICBwcml2YXRlIGNvbW1lbnRzQ291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBicmllZjogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkczogbnVtYmVyO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBwaG90bzogc3RyaW5nOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHBlbmRpbmc6IGJvb2xlYW47XHJcbiAgICBvblRvcDogYm9vbGVhbjtcclxuICAgIGNhbkNvbW1lbnRhcnk6IGJvb2xlYW47XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MubW9kZWwudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkuc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnkgfSBmcm9tIFwiLi9OZXdzQ2F0ZWdvcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZXdzQ2F0ZWdvcnlTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJuZXdzQ2F0ZWdvcnkvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsID0gKCk6IE9ic2VydmFibGU8TmV3c0NhdGVnb3J5W10+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5ld3NDYXRlZ29yeT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBOZXdzQ2F0ZWdvcnkpOiBPYnNlcnZhYmxlPE5ld3NDYXRlZ29yeT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IE5ld3NDYXRlZ29yeSk6IE9ic2VydmFibGU8TmV3c0NhdGVnb3J5PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnkgfSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5U2VydmljZSB9IGZyb20gXCIuL25ld3NDYXRlZ29yeS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ld3NDYXRlZ29yeS1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NDYXRlZ29yeUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE5ld3NDYXRlZ29yeVNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ25hbWUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldFNpbmdsZSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTmV3c0NhdGVnb3J5KCk7XHJcbiAgICAgICAgbW9kZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIG1vZGVsLm5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5kZXNjcmlwdGlvbiA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJkZXNjcmlwdGlvblwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS51cGRhdGUodGhpcy5pZCwgbW9kZWwpLnN1YnNjcmliZShkYXRhID0+IHJlcyA9IGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UuY3JlYXRlKG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiByZXMgPSBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBOZXdzQ2F0ZWdvcnkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGl0ZW1zQ291bnQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5Lm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyduYW1lJ11cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0J7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJyaWVmXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCe0YLQv9GA0LDQstC40YLRjFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeSB9IGZyb20gXCIuL25ld3NDYXRlZ29yeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3c0NhdGVnb3J5LWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW1zOiBOZXdzQ2F0ZWdvcnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3NDYXRlZ29yeVNlcnZpY2U6IE5ld3NDYXRlZ29yeVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCLQmtCw0YLQtdCz0L7RgNC40LhcIik7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUobW9kZWw6IE5ld3NDYXRlZ29yeVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG1vZGVsOyBcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmV3c0NhdGVnb3J5U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1tpbmRleF0uaWQpLnN1YnNjcmliZShkYXRhID0+IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGEgc2VjdXJlZD1cXFwibmV3c0Z1bGxcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3c0NhdGVnb3J5JywgMCwgJ2VkaXQnXVxcXCI+0KHQvtC30LTQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOPC9hPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgY2F0ZWdvcnkgb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDEsIGNhdGVnb3J5LmlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5uYW1lXFxcIj48L3NwYW4+IFs8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjYXRlZ29yeS5pdGVtc0NvdW50XFxcIj48L3NwYW4+XVxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8IS0tLT5hIHNlY3VyZWQ9XFxcIm5ld3NTdGFydFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzL2xpc3QnLCBwYWdlLCBpdGVtLmNhdGVnb3J5SWQgXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lm5hbWVcXFwiPjwvc3Bhbj4gWzxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lml0ZW1zQ291bnRcXFwiPjwvc3Bhbj5dXFxyXFxuICAgICAgICAgICAgPC8hLS1hLS0+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzQ2F0ZWdvcnknLCBjYXRlZ29yeS5pZCwgJ2VkaXQnXVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+bmV3c1N0YXJ0PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICA8YSAqbmdJZj1cXFwiY2F0ZWdvcnkuaXRlbXNDb3VudCA9PSAwXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoaSlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+bmV3c0Z1bGw8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCI+XFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGVkaXRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmtCw0YLQtdCz0L7RgNC40Y86PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjYXRlZ29yeUlkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snY2F0ZWdvcnlJZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1xcXCIgdmFsdWU9XFxcInt7Y2F0ZWdvcnkuaWR9fVxcXCI+e3tjYXRlZ29yeS5uYW1lfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCd0LDQt9Cy0LDQvdC40LU6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWFyay1pdC11cCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJicmllZlxcXCIgcm93cz1cXFwiNFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ2JyaWVmJ11cXFwiPiA8L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQotC10LrRgdGCINC90L7QstC+0YHRgtC4OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIHJvd3M9XFxcIjZcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPiA8L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmNGB0YLQvtGH0L3QuNC6OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzb3VyY2VcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydzb3VyY2UnXVxcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQk9C70LDQstC90L7QtSDRhNC+0YLQvjo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGhvdG9QYXRoXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sncGhvdG8nXVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIiB1aS12aWV3PVxcXCJmaWxlc1xcXCIgYXV0b3Njcm9sbD1cXFwiZmFsc2VcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJjYW5Db21tZW50YXJ5XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snY2FuQ29tbWVudGFyeSddXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2hlY2tlZCAvPiDQoNCw0LfRgNC10YjQuNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwib25Ub3BcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydvblRvcCddXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4g0J3QsNCy0LXRgNGF0YNcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInBlbmRpbmdcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydwZW5kaW5nJ11cXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiDQntGC0LvQvtC20LXQvdCwXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXV0aEd1YXJkLCBBdXRoU2VydmljZSB9ICAgICAgZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNpZ251cENvbXBvbmVudCB9IGZyb20gXCIuLi9hY2NvdW50L2FjY291bnQtc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhSb3V0ZXM6IFJvdXRlcyA9IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbl07XHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xyXG4gICAgQXV0aEd1YXJkLFxyXG4gICAgQXV0aFNlcnZpY2VcclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLFxyXG4gICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIFJvdXRlclN0YXRlU25hcHNob3QgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9ICAgICAgIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgYXR0ZW1wdGVkIFVSTCBmb3IgcmVkaXJlY3RpbmdcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZGlyZWN0VXJsID0gc3RhdGUudXJsO1xyXG5cclxuICAgICAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgbG9naW4gcGFnZVxyXG4gICAgICAvLyAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbnVwJ10pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2lnbnVwQ29tcG9uZW50LCBDb25maXJtRW1haWxDb21wb25lbnQsIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LCBVbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50LCBSZXNldFBhc3N3b3JkQ29tcG9uZW50LCBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWNjb3VudFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcInNpZ251cFwiLCBjb21wb25lbnQ6IEFjY291bnRTaWdudXBDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjb25maXJtRW1haWxcIiwgY29tcG9uZW50OiBDb25maXJtRW1haWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJmb3Jnb3RQYXNzd29yZFwiLCBjb21wb25lbnQ6IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwidW5jb25maXJtZWRFbWFpbFwiLCBjb21wb25lbnQ6IFVuY29uZmlybWVkRW1haWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJyZXNldFBhc3N3b3JkXCIsIGNvbXBvbmVudDogUmVzZXRQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNoYW5nZVBhc3N3b3JkXCIsIGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vYWNjb3VudC1zaWduaW4uY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FjY291bnQtc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maXJtRW1haWwuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yZXNldFBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7ICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWNjb3VudC1zaWduaW5cIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ3VzZXJOYW1lJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChyYTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW1widXNlck5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW1wicGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJsb2dpbkZvcm0xXFxcIiBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiIHJvbGU9XFxcImZvcm1cXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiA4cHg7XFxcIiBbZm9ybUdyb3VwXT1cXFwibG9naW5Gb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChsb2dpbkZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwibG9naW5Gb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JvQvtCz0LjQvVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwibG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QsNGA0L7Qu9GMXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWxvZ2luRm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCS0L7QudGC0LhcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNpZ251cCB9IGZyb20gXCIuL3NpZ251cC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhY2NvdW50LXNpZ251cFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2FjY291bnQtc2lnbnVwLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IFtcIjEyM1wiLCBWYWxpZGF0b3JzLmNvbXBvc2UoWyAvL3RvZG8gY29tcG9zZUFTeW5jPz9cclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJhbmRyZXdfcGFyeXNAdHV0LmJ5XCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgLCBHbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFtcIjEyM3F3ZSFRXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFtcIjEyM3F3ZSFRXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2Z1bGxOYW1lJzogW1wiMTIzXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLF0pXSxcclxuICAgICAgICAgICAgJ2JpcnRoZGF5JzogW1wiMTAvMTAvMjAxNVwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNpZ251cCA9IG5ldyBTaWdudXAoKTtcclxuICAgICAgICBzaWdudXAudXNlck5hbWUgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcInVzZXJOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5lbWFpbCA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLnBhc3N3b3JkID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuY29uZmlybVBhc3N3b3JkID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJjb25maXJtUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmZ1bGxOYW1lID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJmdWxsTmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuYmlydGhkYXkgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImJpcnRoZGF5XCJdLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5jcmVhdGUoc2lnbnVwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge30sLy90b2RvIHRoaXMuaWQgPSBkYXRhLmlkfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbnVwLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTaWdudXAge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gICAgYmlydGhkYXk6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvc2lnbnVwLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IFNpZ251cCB9IGZyb20gXCIuL3NpZ251cC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkIH0gZnJvbSBcIi4vcmVzZXRQYXNzd29yZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuL2NoYW5nZVBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiYWNjb3VudC9cIjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogU2lnbnVwKTogT2JzZXJ2YWJsZTxTaWdudXA+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwgKyBcInJlZ2lzdGVyL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uZmlybUVtYWlsID0gKHVzZXJJZDogbnVtYmVyLCBjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGBjb25maXJtRW1haWw/dXNlcklkPSR7dXNlcklkfSZjb2RlPSR7Y29kZX1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3Jnb3RQYXNzd29yZCA9IChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgZm9yZ290UGFzc3dvcmQ/ZW1haWw9JHtlbWFpbH1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXNlbmRDb25maXJtRW1haWwgPSAoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYHJlc2VuZENvbmZpcm1FbWFpbD9lbWFpbD0ke2VtYWlsfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2V0UGFzc3dvcmQgPSAobW9kZWw6IFJlc2V0UGFzc3dvcmQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFjdGlvblVybCArIGByZXNldFBhc3N3b3JkYCwgbW9kZWwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZVBhc3N3b3JkID0gKG1vZGVsOiBDaGFuZ2VQYXNzd29yZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYWN0aW9uVXJsICsgYGNoYW5nZVBhc3N3b3JkYCwgbW9kZWwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIHRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgW2Zvcm1Hcm91cF09XFxcInJlZ2lzdGVyRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocmVnaXN0ZXJGb3JtLnZhbHVlKVxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCb0L7Qs9C40L08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLnVzZXJuYW1lXFxcIiBpZD1cXFwidXNlck5hbWVcXFwiIGRlYm91bmNlPVxcXCI1MDAwXFxcIiB2YWxpZGF0aW9uPVxcXCJyZW1vdGU6dm0udXNlck5hbWVVbmlxdWUoKTphbHQ90J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0LvQvtCz0LjQvdC+0Lwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCfG1pbl9sZW46M3xtYXhfbGVuOjMwfHJlcXVpcmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAtLT4gIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ3VzZXJOYW1lJ11cXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtGH0YLQvtCy0YvQuSDQsNC00YDQtdGBPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgZGVib3VuY2U9XFxcIjUwMDBcXFwiIHZhbGlkYXRpb249XFxcInJlbW90ZTp2bS5lbWFpbFVuaXF1ZSgpOmFsdD3Qn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDQsNC00YDQtdGB0L7QvCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJyZXF1aXJlZHxlbWFpbHxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgLS0+ICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwidm0ucmVnaXN0ZXJGb3JtLnBhc3N3b3JkXFxcIiBmcmllbmRseS1uYW1lPVxcXCLQn9Cw0YDQvtC70YxcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0ucGFzc3dvcmRcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1pbl9sZW46NlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgLS0+ICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICA8IS0tICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJpdGVtLmNvbmZpcm1QYXNzd29yZFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWR8bWF0Y2g6dm0ucmVnaXN0ZXJGb3JtLnBhc3N3b3JkLFBhc3N3b3JkMnxtaW5fbGVuOjZcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAtLT4gICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIC8+IFxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC70L3QvtC1INC40LzRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJmdWxsTmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uZnVsbE5hbWVcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkfG1pbl9sZW46MlxcXCIvPlxcclxcbiAgICAgICAgICAgLS0+ICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snZnVsbE5hbWUnXVxcXCIgIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjzwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGF0ZXBpY2tlciAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydiaXJ0aGRheSddXFxcIj48L2RhdGVwaWNrZXI+IFxcclxcbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgbmFtZT1cXFwiYmlydGhkYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctcmVhZG9ubHk9XFxcInRydWVcXFwiIHNob3ctYnV0dG9uLWJhcj1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdWliLWRhdGVwaWNrZXItcG9wdXA9XFxcImRkL01NTU0veXl5eVxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uYmlydGhkYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3Blbj1cXFwidm0uc3RhdHVzLm9wZW5lZFxcXCIgZGF0ZXBpY2tlci1vcHRpb25zPVxcXCJ2bS5kYXRlT3B0aW9uc1xcXCIgY2xvc2UtdGV4dD1cXFwi0JfQsNC60YDRi9GC0YxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0LWlucHV0LWZvcm1hdHM9XFxcImFsdElucHV0Rm9ybWF0c1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgc3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuIHZhLXRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLm9wZW4oKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3BhblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxyXFxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1snYmlydGhkYXknXVxcXCIgdHlwZT1cXFwidGV4dFxcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhcmVnaXN0ZXJGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbnVwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImVtYWlsLWNvbmZpcm1hdGlvblwiLFxyXG4gICAgdGVtcGxhdGU6IFwiPHNwYW4gW2hpZGRlbl09JyFyZXN1bHQnPtCS0LDRiCDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDRg9GB0L/QtdGI0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LiDQnNC+0LbQtdGC0LUg0LLQvtC50YLQuCDQuCDQsdGL0YLRjCDQutCw0Log0LTQvtC80LAuPC9zcGFuPlwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJ1c2VySWRcIl07XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gcGFyYW1zW1wiY29kZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5jb25maXJtRW1haWwoaWQsIGNvZGUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5yZXN1bHQgPSBkYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY29uZmlybUVtYWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9ycyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZm9yZ290LXBhc3N3b3JkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3Jnb3RGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgZmluaXNoOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQocmE6IGFueSk6IHZvaWQgeyAgICAgXHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuZm9yZ290Rm9ybS5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHRoaXMuZW1haWwpLnN1YnNjcmliZShkYXRhID0+IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpbmlzaCA9IHRydWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvaDE+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJmb3Jnb3RFbWFpbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImZvcmdvdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGZvcmdvdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsQWRkcmVzc1xcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxBZGRyZXNzXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJmb3Jnb3RGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWZvcmdvdEZvcm0udmFsaWRcXFwiIHZhbHVlPVxcXCLQntGC0L/RgNCw0LLQuNGC0YxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmQgfSBmcm9tIFwiLi9yZXNldFBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJlc2V0LXBhc3N3b3JkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmVzZXRQYXNzd29yZC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICByZXNldEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGZpbmlzaDogYm9vbGVhbjtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSBwYXJhbXNbXCJjb2RlXCJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVzZXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9ycy5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICB9LCB7IHZhbGlkYXRvcjogR2xvYmFsVmFsaWRhdG9ycy5tYXRjaGluZ1Bhc3N3b3JkcyhcInBhc3N3b3JkXCIsIFwiY29uZmlybVBhc3N3b3JkXCIpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQocmE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXNldFBhc3N3b3JkID0gbmV3IFJlc2V0UGFzc3dvcmQoKTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZC5lbWFpbCA9IHRoaXMucmVzZXRGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZC5wYXNzd29yZCA9IHRoaXMucmVzZXRGb3JtLmNvbnRyb2xzW1wicGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZC5jb25maXJtUGFzc3dvcmQgPSB0aGlzLnJlc2V0Rm9ybS5jb250cm9sc1tcImNvbmZpcm1QYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVzZXRQYXNzd29yZChyZXNldFBhc3N3b3JkKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkIHtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwicmVzZXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwicmVzZXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChyZXNldEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwcmUgKm5nSWY9XFxcInJlc2V0Rm9ybS5lcnJvcnNcXFwiPnt7cmVzZXRGb3JtLmVycm9ycyB8IGpzb259fTwvcHJlPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsQWRkcmVzc1xcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVzZXRGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZXNldEZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQvdC+0LLQvtCz0L4g0L/QsNGA0L7Qu9GPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZXNldEZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhcmVzZXRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCf0L7QvNC10L3Rj9GC0Ywg0L/QsNGA0L7Qu9GMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjsgICAgICAgIFxyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiOyAgICBcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9ycyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tIFwiLi9jaGFuZ2VQYXNzd29yZC5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdvbGRQYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICdjb25maXJtUGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldXHJcbiAgICAgICAgfSwgeyB2YWxpZGF0b3I6IEdsb2JhbFZhbGlkYXRvcnMubWF0Y2hpbmdQYXNzd29yZHMoXCJuZXdQYXNzd29yZFwiLCBcImNvbmZpcm1QYXNzd29yZFwiKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChyYTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IENoYW5nZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgbW9kZWwub2xkUGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5jb250cm9sc1tcIm9sZFBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLm5ld1Bhc3N3b3JkID0gdGhpcy5wYXNzd29yZEZvcm0uY29udHJvbHNbXCJuZXdQYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5jb25maXJtUGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5jb250cm9sc1tcImNvbmZpcm1QYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlUGFzc3dvcmQobW9kZWwpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGF0IHRvZG8/XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj7QmNC30LzQtdC90LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIFtmb3JtR3JvdXBdPVxcXCJwYXNzd29yZEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHBhc3N3b3JkRm9ybS52YWx1ZSlcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCh0YLQsNGA0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJvbGRQYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWydvbGRQYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwibmV3UGFzc3dvcmRcXFwiIFtmb3JtQ29udHJvbF09XFxcInBhc3N3b3JkRm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QndC+0LLRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtkaXNhYmxlZF09XFxcIiFwYXNzd29yZEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JjQt9C80LXQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jaGFuZ2VQYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ1bmNvbmZpcm1lZEVtYWlsXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdW5jb25maXJtZWRGb3JtOiBGb3JtR3JvdXA7IFxyXG4gICAgZmluaXNoOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51bmNvbmZpcm1lZEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygxMjExKTtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLnVuY29uZmlybWVkRm9ybS5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZXNlbmRDb25maXJtRW1haWwoZW1haWwpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvTwvaDE+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJ1bmNvbmZpcm1lZEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJ1bmNvbmZpcm1lZEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiICpuZ0lmPVxcXCIhZmluaXNoXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInVuY29uZmlybWVkRm9ybS5jb250cm9sc1snZW1haWwnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhdW5jb25maXJtZWRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7Qn9C10YDQtdGB0LvQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmaW5pc2hcXFwiPtCf0LjRgdGM0LzQviDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2x1Ykxpc3RDb21wb25lbnQsIENsdWJFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbHViUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiY2x1Yi86aWQvZWRpdFwiLCBjb21wb25lbnQ6IENsdWJFZGl0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY2x1YlwiLCBjb21wb25lbnQ6IENsdWJMaXN0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL2NsdWIuc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jbHViLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NsdWItZWRpdC5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIsIFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcIi4vY2x1Yi5tb2RlbFwiOyAgICAgICAgIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2x1YlNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcImNsdWIvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsID0gKHBhZ2UpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPENsdWI+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgbGlzdC8ke3BhZ2V9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENsdWI+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogQ2x1Yik6IE9ic2VydmFibGU8Q2x1Yj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IENsdWIpOiBPYnNlcnZhYmxlPENsdWI+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEJ5TmFtZSA9ICh0eXBlZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbHViW10+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGAvZ2V0Q2x1YnNCeU5hbWUvJHt0eXBlZH1gKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcIi4vY2x1Yi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDbHViU2VydmljZSB9IGZyb20gXCIuL2NsdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbi8vaW1wb3J0IHsgVXNlckZpbHRlcnMgfSBmcm9tIFwiLi91c2VyRmlsdGVycy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjbHViLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jbHViLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbHViTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbXM6IENsdWJbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgLy9jYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IG51bGw7IFxyXG4gICAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsdWJTZXJ2aWNlOiBDbHViU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgICAgIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgICAgICB0aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCLQmtC70YPQsdGLXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgdGhpcy5jYXRlZ29yeUlkID0gK3BhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgICAvLyAgdGhpcy51c2VyTmFtZSA9IHBhcmFtc1sndXNlck5hbWUnXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXhdLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vbGV0IGZpbHRlcnMgPSBuZXcgVXNlckZpbHRlcnMoKTtcclxuICAgICAgICAvLy8vICBmaWx0ZXJzLmNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgLy8vLyAgZmlsdGVycy5tYXRlcmlhbFR5cGUgPSBcIk5ld3NcIjtcclxuICAgICAgICAvL2ZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIC8vZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwodGhpcy5wYWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBsZXQgbmV3VXJsID0gYGNsdWIvbGlzdC8ke3RoaXMucGFnZX1gO1xyXG4gICAgICAgIC8vaWYgKHRoaXMuY2F0ZWdvcnlJZCkge1xyXG4gICAgICAgLy8gICAgIG5ld1VybCA9IGAke25ld1VybH0vJHt0aGlzLmNhdGVnb3J5SWR9YDtcclxuICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPENsdWI+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+LS1cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXJcXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViJywgMCwgJ2VkaXQnXVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1YicsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubmFtZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZW5nbGlzaE5hbWVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhclxcXCIgc3JjPVxcXCJ7e2l0ZW0ubG9nb319XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXNcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dFRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdFRleHQ9XFxcIjFcXFwiIGxhc3RUZXh0PVxcXCJ0b3RhbEl0ZW1zL2l0ZW1zUGVyUGFnZVxcXCI+PC9wYWdpbmF0aW9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IENsdWJTZXJ2aWNlIH0gZnJvbSBcIi4vY2x1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwiLi9jbHViLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFJvbGVzQ2hlY2tlZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNsdWItZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENsdWJFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbTogQ2x1YjtcclxuICAgIHVwbG9hZEZpbGU6IGFueTtcclxuICAgIGhhc0Jhc2VEcm9wWm9uZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTsgXHJcbiAgICB1cGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2x1YlNlcnZpY2U6IENsdWJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IG5ldyBDbHViKCk7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQutC70YPQsdCwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2x1YlNlcnZpY2UuZ2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJlbmdsaXNoTmFtZVwiXS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGxvYWQoKSB7ICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnVwbG9hZGVyLnF1ZXVlWzBdLm9uQ29tcGxldGUgPSAocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImxvZ29cIl0ucGF0Y2hWYWx1ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgbmV3c0l0ZW0gPSB0aGlzLnBhcnNlRm9ybSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLnVwZGF0ZSh0aGlzLmlkLCBuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbHViU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21OdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU9wdGlvbnMobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoe1xyXG4gICAgICAgICAgICB1cmw6IGAvYXBpL3YxL3VwbG9hZC9jbHViTG9nby8ke25hbWV9YCxcclxuICAgICAgICAgICAgYXV0aFRva2VuOiB0aGlzLmxvY2FsU3RvcmFnZS5nZXRBY2Nlc3NUb2tlbldpdGhUeXBlKCksXHJcbiAgICAgICAgICAgIC8vICBhbGxvd2VkRmlsZVR5cGU6IFtcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIl0sXHJcbiAgICAgICAgICAgIGF1dG9VcGxvYWQ6IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZ1wiXSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShkYXRhOiBDbHViKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VGb3JtKCk6IENsdWIge1xyXG4gICAgICAgIGxldCBpdGVtID0gbmV3IENsdWIoKTtcclxuICAgICAgICBpdGVtLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBpdGVtLmVuZ2xpc2hOYW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImVuZ2xpc2hOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ubG9nbyA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJsb2dvXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ubmFtZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJuYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uc3RhZGl1bSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJzdGFkaXVtXCJdLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRGb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VuZ2xpc2hOYW1lJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV0sXHJcbiAgICAgICAgICAgICdsb2dvJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnbmFtZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnc3RhZGl1bSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgQ2x1YiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW5nbGlzaE5hbWU6IHN0cmluZztcclxuICAgIHN0YWRpdW06IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC/0LXRgNC90LjQujwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYW1lXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhclxcXCIgc3JjPVxcXCJ7e2VkaXRGb3JtPy5jb250cm9sc1snbG9nbyddLnZhbHVlfX1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJsb2dvXFxcIiBub3ZhbGlkYXRlIHJlYWRvbmx5IC8+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cXFwidXBsb2FkZXJcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS5jb250cm9sc1snZW5nbGlzaE5hbWUnXS52YWxpZFxcXCIvPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbaGlkZGVuXT1cXFwiIXRoaXMudXBsb2FkZXI/LnF1ZXVlXFxcIiAoY2xpY2spPVxcXCJ1cGxvYWQoKVxcXCI+0JfQsNCz0YDRg9C30LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCd0LDQt9Cy0LDQvdC40LUg0LrQu9GD0LHQsCDQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImVuZ2xpc2hOYW1lXFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodGC0LDQtNC40L7QvTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGFkaXVtXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge05ld3NDYXRlZ29yeUxpc3RDb21wb25lbnR9IGZyb20gXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05ld3NDYXRlZ29yeUVkaXRDb21wb25lbnR9IGZyb20gXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgY29uc3QgbmV3c0NhdGVnb3J5Um91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICduZXdzQ2F0ZWdvcnknLCBjb21wb25lbnQ6IE5ld3NDYXRlZ29yeUxpc3RDb21wb25lbnQgfSwgLy90b2RvLCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gIH1cclxuICAgIHsgcGF0aDogJ25ld3NDYXRlZ29yeS86aWQvZWRpdCcsIGNvbXBvbmVudDogTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5ld3NMaXN0Q29tcG9uZW50LCBOZXdzRGV0YWlsQ29tcG9uZW50LCBOZXdzRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c1JvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIm5ld3NcIiwgY29tcG9uZW50OiBOZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvbGlzdFwiLCBjb21wb25lbnQ6IE5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy9saXN0LzpwYWdlXCIsIGNvbXBvbmVudDogTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzL2xpc3QvOnBhZ2UvOmNhdGVnb3J5SWRcIiwgY29tcG9uZW50OiBOZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvOmlkXCIsIGNvbXBvbmVudDogTmV3c0RldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBOZXdzRWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnJvdXRpbmcudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vdXNlci1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgY29uc3QgdXNlclJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAndXNlcicsIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvbGlzdCcsIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvbGlzdC86cGFnZScsIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvbGlzdC86cGFnZS86dXNlck5hbWUnLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VyLzppZCcsIGNvbXBvbmVudDogVXNlckRldGFpbENvbXBvbmVudCB9XHJcbiAgLy8gIHsgcGF0aDogJ25ld3MvOmlkL2VkaXQnLCBjb21wb25lbnQ6IE5ld3NFZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIucm91dGluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInVzZXItZGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vdXNlci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtOiBVc2VyO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLkdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShpdGVtOiBVc2VyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0h0dHBXcmFwcGVyfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHtVc2VyRmlsdGVyc30gZnJvbSBcIi4vdXNlckZpbHRlcnMubW9kZWxcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZWFibGV9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgJ3VzZXIvJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QWxsID0gKGZpbHRlcnM6IFVzZXJGaWx0ZXJzKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxVc2VyPj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxVc2VyPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIENyZWF0ZSA9IChpdGVtOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiA9PiB7XHJcbiAgICAgICAgdmFyIHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoeyBJdGVtTmFtZTogaXRlbSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogVXNlcik6IE9ic2VydmFibGU8VXNlcj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIERlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiAqbmdJZj1cXFwiaXRlbVxcXCI+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udXNlck5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIFtoaWRkZW5dPVxcXCIhcm9sZXMuaXNMb2dpbmVkIHx8IHJvbGVzLmlzU2VsZihpdGVtLmlkKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwid3BtKHsgdXNlck5hbWU6IGl0ZW0udXNlck5hbWUgfSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8L2gyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhclxcXCIgc3JjPVxcXCJ7e2l0ZW0ucGhvdG99fVxcXCIgYWx0PVxcXCJ7e2l0ZW0udXNlck5hbWV9fVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJyb2xlcy5pc1NlbGYoaXRlbS5pZCkgfHwgcm9sZXMuaXNNb2RlcmF0b3JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiIG5nZi1zZWxlY3Q9XFxcInZtLnVwbG9hZEZpbGVzKCRmaWxlLCAkaW52YWxpZEZpbGVzKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XFxcImltYWdlLypcXFwiIG5nZi1tYXgtaGVpZ2h0PVxcXCIxMDAwXFxcIiBuZ2YtbWF4LXNpemU9XFxcIjFNQlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQntCx0L3QvtCy0LjRgtGMINCw0LLQsNGC0LDRgFxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwicm9sZXMuaXNTZWxmKGl0ZW0uaWQpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2hhbmdlUGFzc3dvcmQnXVxcXCI+0JjQt9C80LXQvdC40YLRjCDQv9Cw0YDQvtC70Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLWRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcInZtLmVyckZpbGUuJGVycm9yXFxcIiBuZy1iaW5kPVxcXCJ2bS5lcnJGaWxlLiRlcnJvclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwidm0uZXJyRmlsZS4kZXJyb3JQYXJhbVxcXCIgbmctYmluZD1cXFwidm0uZXJyRmlsZS4kZXJyb3JQYXJhbVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2dyZXNzXFxcIiBuZy1zaG93PVxcXCJmLnByb2dyZXNzID49IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ3aWR0aDp7e2YucHJvZ3Jlc3N9fSVcXFwiIG5nLWJpbmQ9XFxcImYucHJvZ3Jlc3MgKyAnJSdcXFwiPjwvIS0tc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qm9C+0LPQuNC9PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnVzZXJOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLmlkKVxcXCIgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JfQsNCx0LDQvdC40YLRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1zaG93PVxcXCIhaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0Y1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtaW49XFxcIjBcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcItCa0L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiaXRlbS5iYW5EYXlzQ291bnRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOCBjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgbmctY2xpY2s9XFxcInZtLmJhbigpXFxcIiBuZ0Rpc2FibGVkPVxcXCJpdGVtLmJhbkRheXNDb3VudCA8PSAwXFxcIj7Ql9Cw0LHQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiIFtoaWRkZW5dPVxcXCJpdGVtLmxvY2tvdXRFbmREYXRlVXRjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy04IGNvbC1zbS04IGZsZXgtdmVydGljYWwtY2VudGVyXFxcIiAqbmdJZj1cXFwiaXRlbS5sb2Nrb3V0RW5kRGF0ZVV0Y1xcXCI+0JDQutGC0LjQstC90L7RgdGC0Ywg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC90LAg0LTQviA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmxvY2tvdXRFbmREYXRlVXRjIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBzZWN1cmVkPVxcXCInVXNlcnNGdWxsJ1xcXCIgbmctY2xpY2s9XFxcInZtLnVuYmFuKClcXFwiPtCh0L3Rj9GC0Ywg0LHQsNC9PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0JPRgNGD0L/Qv9CwOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJvbGVHcm91cE5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgc2VjdXJlZD1cXFwiJ0FkbWluU3RhcnQnXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuZXdzQ2F0ZWdvcnlJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcIml0ZW0ucm9sZUdyb3VwSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInJvbGVHcm91cC5pZCBhcyByb2xlR3JvdXAubmFtZSBmb3Igcm9sZUdyb3VwIGluIHZtLnJvbGVHcm91cHNcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmVkaXRSb2xlKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW2hpZGRlbl09XFxcIiFyb2xlcy5pc1NlbGYgfHwgIXJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgW2hpZGRlbl09XFxcIiFpdGVtLmVtYWlsQ29uZmlybWVkXFxcIj7Qn9C+0YfRgtCwPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWwgdGV4dC1kYW5nZXJcXFwiIHVpYi10b29sdGlwPVxcXCLQn9C+0YfRgtCwINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvdCwXFxcIiBbaGlkZGVuXT1cXFwiaXRlbS5lbWFpbENvbmZpcm1lZFxcXCI+0J/QvtGH0YLQsDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uZW1haWxcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0YHQu9C10LTQvdC40Lkg0LLRhdC+0LQgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5sYXN0TW9kaWZpZWRPbiB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7QlNCw0YLQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5yZWdpc3RyYXRpb25EYXRlIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiaXRlbS5mdWxsTmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0LvQvdC+0LUg0LjQvNGPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5mdWxsTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiaXRlbS5iaXJ0aGRheVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7QlNC10L3RjCDRgNC+0LbQtNC10L3QuNGPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5iaXJ0aGRheSB8IGRhdGU6J2xvbmdEYXRlJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiaXRlbS5nZW5kZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QvtC7PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgKm5nSWY9XFxcIml0ZW0uZ2VuZGVyXFxcIj7QlNC10LLRg9GI0LrQsDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgKm5nSWY9XFxcIiFpdGVtLmdlbmRlclxcXCI+0J/QsNGA0LXQvdGMPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIml0ZW0ubmV3c0NvdW50ID4gMFxcXCI+PGEgdWktc3JlZj1cXFwibmV3cyh7IHBhZ2U6IDEsIHVzZXJOYW1lOiBpdGVtLnVzZXJOYW1lfSlcXFwiPtCd0L7QstC+0YHRgtC4KDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubmV3c0NvdW50XFxcIj48L3NwYW4+KTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiaXRlbS5ibG9nc0NvdW50ID4gMFxcXCI+PGEgdWktc3JlZj1cXFwiYmxvZyh7cGFnZTogMSwgdXNlck5hbWU6IGl0ZW0udXNlck5hbWV9KVxcXCI+0JHQu9C+0LPQuCg8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmJsb2dzQ291bnRcXFwiPjwvc3Bhbj4pPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPCEtLXNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwiY2hhbmdlUm9sZUNvbmZpcm1hdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YDQvtC70Lg8L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICDQmNC30LzQtdC90LjRgtGMP1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+0JjQt9C80LXQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvIS0tc2NyaXB0PlxcclxcblxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcImJhbkNvbmZpcm1hdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgINCX0LDQsdCw0L3QuNGC0Yw/XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj7Ql9Cw0LHQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+LS0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyRmlsdGVycyB9IGZyb20gXCIuL3VzZXJGaWx0ZXJzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInVzZXItbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtczogVXNlcltdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gIHRoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAgIC8vICB0aGlzLnVzZXJOYW1lID0gcGFyYW1zWyd1c2VyTmFtZSddO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxVc2VyPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gbmV3IFVzZXJGaWx0ZXJzKCk7XHJcbiAgICAgIC8vICBmaWx0ZXJzLmNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgIC8vICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIGZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIGZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZVxyXG4gICAgICAgICAgICAuR2V0QWxsKGZpbHRlcnMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFVzZXJGaWx0ZXJzIHtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyRmlsdGVycy5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWNvbmRlbnNlZFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0J/QvtGB0LvQtdC00L3QuNC5INCy0YXQvtC0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCb0L7Qs9C40L08L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0JTQsNGC0LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7Qk9GA0YPQv9C/0LA8L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgaXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcInVzZXIubGFzdE1vZGlmaWVkIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgdXNlci5pZCBdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcIm1pbmktYXZhdGFyXFxcIiBzcmM9XFxcInt7dXNlci5waG90b319XFxcIiBhbHQ9XFxcInt7dXNlci51c2VyTmFtZX19XFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwidXNlci51c2VyTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiB1aWItdG9vbHRpcD1cXFwi0J/QvtGH0YLQsCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QsFxcXCIgW2hpZGRlbl09XFxcInVzZXIuZW1haWxDb25maXJtZWRcXFwiPiAqPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgbmctc2hvdz1cXFwibG9nZ2VkSW4oKSAmJiB2bS5pc05vdFNlbGYodXNlci5pZCwgdXNlcklkKCkpXFxcIiB1aS1zcmVmPVxcXCJ3cG0oeyB1c2VyTmFtZTogdXNlci51c2VyTmFtZSB9KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLnJlZ2lzdHJhdGlvbkRhdGUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwidXNlci5yb2xlR3JvdXBOYW1lXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5jaG9zZW5Sb2xlR3JvdXBJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJyb2xlR3JvdXAuaWQgYXMgcm9sZUdyb3VwLm5hbWUgZm9yIHJvbGVHcm91cCBpbiB2bS5yb2xlR3JvdXBzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVJvbGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJVc2VyTmFtZVxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVVzZXJOYW1lKClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQm9C+0LPQuNC9XFxcIiAvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDwhLS0+dWliLXBhZ2luYXRpb24gbmctc2hvdz1cXFwidm0udG90YWxJdGVtcyA+IHZtLml0ZW1QZXJQYWdlXFxcIiB0b3RhbC1pdGVtcz1cXFwidm0udG90YWxJdGVtc1xcXCIgbmctbW9kZWw9XFxcInZtLnBhZ2VOb1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5nb1RvUGFnZSgpXFxcIj48LyEtLXVpYi1wYWdpbmF0aW9uLS0tPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBtTGlzdENvbXBvbmVudCwgUG1EZXRhaWxDb21wb25lbnQsIFBtRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG1Sb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJwbVwiLCBjb21wb25lbnQ6IFBtTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBtLzppZFwiLCBjb21wb25lbnQ6IFBtRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicG0vOmlkL2VkaXRcIiwgY29tcG9uZW50OiBQbUVkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9wbS5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbS1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BtLWVkaXQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BtLnNlcnZpY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBQbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgc2VuZGVySWQ6IG51bWJlcjtcclxuICAgIHNlbmRlcjogc3RyaW5nO1xyXG4gICAgcmVjZWl2ZXJJZDogbnVtYmVyO1xyXG4gICAgcmVjZWl2ZXI6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzZW50VGltZTogRGF0ZTtcclxuICAgIGlzUmVhZDogYm9vbGVhbjtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5tb2RlbC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUG0gfSBmcm9tIFwiLi9wbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQbVNlcnZpY2UgfSBmcm9tIFwiLi9wbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBtLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9wbS1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZWNlaXZlZDogUG1bXTtcclxuICAgIHNlbnQ6IFBtW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbVNlcnZpY2U6IFBtU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucG1TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRBbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShtb2RlbDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBtb2RlbC5yZWNlaXZlZDtcclxuICAgICAgICB0aGlzLnNlbnQgPSBtb2RlbC5zZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcclxuICAgICAgICAvL3RoaXMubmV3c0NhdGVnb3J5U2VydmljZS5EZWxldGUodGhpcy5pdGVtc1tpbmRleF0uaWQpLnN1YnNjcmliZShkYXRhID0+IGRhdGEsXHJcbiAgICAgICAgLy8gICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgIC8vICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyByZW1vdmUgY2F0ZWdvcnl1XCIpKTtcclxuICAgICAgICAvL3RoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcbmltcG9ydCB7IFBtIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcInBtL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRBbGwgPSAoKTogT2JzZXJ2YWJsZTxQbVtdPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgR2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFBtPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIENyZWF0ZSA9IChpdGVtOiBQbSk6IE9ic2VydmFibGU8UG0+ID0+IHtcclxuICAgICAgIC8vIHZhciB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHsgSXRlbU5hbWU6IGl0ZW0gfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IFBtKTogT2JzZXJ2YWJsZTxQbT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIERlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPG1kLXRhYi1ncm91cCBbc2VsZWN0ZWRJbmRleF09XFxcIjBcXFwiPlxcclxcbiAgICAgICAgPG1kLXRhYj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICDQn9C+0LvRg9GH0LXQvdC90YvQtVxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1jb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCX0LDQs9C+0LvQvtCy0L7QujwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCe0YLQv9GA0LDQstC40YLQtdC70Yw8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QlNCw0YLQsCDQv9C+0LvRg9GH0LXQvdC40Y88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiByZWNlaXZlZDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcImkgKyAxXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIG1lc3NhZ2UuaWRdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiICpuZ0lmPVxcXCIhbWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgbWVzc2FnZS5zZW5kZXJJZF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2Uuc2VuZGVyVXNlck5hbWVcXFwiPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnNlbnRUaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L21kLXRhYj5cXHJcXG4gICAgICAgIDxtZC10YWI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIG1kLXRhYi1sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LvQtdC90L3Ri9C1XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JfQsNCz0L7Qu9C+0LLQvtC6PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0J/QvtC70YPRh9Cw0YLQtdC70Yw8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QlNCw0YLQsCDQvtGC0L/RgNCw0LLQutC4PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2Ygc2VudDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcImkgKyAxXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbScsIG1lc3NhZ2UuaWRdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiICpuZ0lmPVxcXCIhbWVzc2FnZS5pc1JlYWRcXFwiIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2UudGl0bGVcXFwiPjwvYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgbWVzc2FnZS5yZWNlaXZlcklkXVxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5yZWNlaXZlclVzZXJOYW1lXFxcIj48L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5zZW50VGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC9tZC10YWI+XFxyXFxuICAgICAgICA8PG1kLXRhYj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgMCwgJ2VkaXQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQndCw0L/QuNGB0LDRgtGMINGB0L7QvtCx0YnQtdC90YzQutGDXFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC9tZC10YWI+XFxyXFxuICAgIDwvbWQtdGFiLWdyb3VwPlxcclxcbjwvZGl2Pi0tPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgUG0gfSBmcm9tIFwiLi9wbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQbVNlcnZpY2UgfSBmcm9tIFwiLi9wbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBtLWRldGFpbFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtOiBQbTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBtU2VydmljZTogUG1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnBtU2VydmljZS5HZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoaXRlbTogUG0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgZm9ybS1ob3Jpem9udGFsIG1hcmdpbi10b3AtbWlkZGxlXFxcIiAqbmdJZj1cXFwiaXRlbVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkaXNhYmxlZCB2YWx1ZT1cXFwie3tpdGVtLnJlY2VpdmVyfX1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGlzYWJsZWQgdmFsdWU9XFxcInt7aXRlbS50aXRsZX19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRpc2FibGVkIHJvd3M9XFxcIjRcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tYSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgMCwgJ2VkaXQnLCB7dXNlcm5hbWU6IGl0ZW0ucmVjZWl2ZXIsIHVzZXJJZDogaXRlbS5pZH1dXFxcIiA+0J7RgtCy0LXRgtC40YLRjDwvIWEtLT5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgMCwgJ2VkaXQnXVxcXCIgPtCe0YLQstC10YLQuNGC0Yw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjsgIFxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjsgICBcclxuaW1wb3J0IHsgUG0gfSBmcm9tIFwiLi9wbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQbVNlcnZpY2UgfSBmcm9tIFwiLi9wbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBtLWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9wbS1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIG15U291cmNlID0gW1wiYXIxXCIsIFwiYXIyXCIsIFwiM2RzYVwiXTtcclxuICAgIHVzZXJzID0gXCIvYXBpL3VzZXIvR2V0VXNlck5hbWVzP3R5cGVkPTprZXl3b3JkXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBQbVNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ3JlY2VpdmVyJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy90aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIC8vaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgLkdldFNpbmdsZSh0aGlzLmlkKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKSxcclxuICAgICAgICAgICAgLy8gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBnZXQgIG5ld3NcIikpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAvL30pO1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcm5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgLy8gIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlcm5hbWUodXNlcjogYW55KSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKHsgcmVjZWl2ZXI6IHVzZXIuaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJuYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUpO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlLmRhdGFbXCJ1c2VybmFtZVwiXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLmRhdGFbXCJ1c2VybmFtZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBQbSgpO1xyXG4gICAgICAgIG1vZGVsLnJlY2VpdmVySWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wicmVjZWl2ZXJcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwudGl0bGUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widGl0bGVcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwubWVzc2FnZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5zZXJ2aWNlLkNyZWF0ZShtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wbVwiXSk7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBjb2wtbWQtMTJcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5hbWU9XFxcIndyaXRlUG1cXFwiICBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICA8aDI+0J3QsNC/0LjRgdCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40LU8L2gyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0J/QvtC70YPRh9Cw0YLQtdC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tcCBjbGFzcz1cXFwidGV4dC1kYW5nZXIgY29sLW1kLW9mZnNldC0yXFxcIiBuZy1pZj1cXFwidm0uZXJyb3JNZXNzYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBuZy1iaW5kPVxcXCJ2bS5lcnJvck1lc3NhZ2VcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8LyFwLS0+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2VkKT1cXFwidXBkYXRlVXNlcm5hbWUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgYXV0by1jb21wbGV0ZSBuYW1lPVxcXCJyZWNlaXZlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydyZWNlaXZlciddXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XFxcInVzZXJzXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgbWluLWNoYXJzPVxcXCIyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgYXR0ci1wbGFjZWhvbGRlcj1cXFwi0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvS4uLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eS1uYW1lPVxcXCJ1c2VybmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCX0LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3RpdGxlJ11cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2x1Ykhpc3RvcnlDb21wb25lbnQsIFJ1bGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBob21lUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiY2x1Ykhpc3RvcnlcIiwgY29tcG9uZW50OiBDbHViSGlzdG9yeUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInJ1bGVzXCIsIGNvbXBvbmVudDogUnVsZXNDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vY2x1Yi1oaXN0b3J5LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmlnaHRTaWRlYmFyLmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCI8Y2x1Yi1oaXN0b3J5PlwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NsdWItaGlzdG9yeS5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2x1Ykhpc3RvcnlDb21wb25lbnQge1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgPGltZyBhbHQ9XFxcIlxcXCIgc3R5bGU9XFxcImJvcmRlcjogM3B4IHNvbGlkICNjY2M7bWFyZ2luOjAgMTVweCAxNXB4IDA7XFxcIiBzcmM9XFxcImh0dHA6Ly9waWN0dXJlcy5mb290eW1hZC5uZXQvdXBsb2FkLzM0Mi82OTA1MC0xLmpwZ1xcXCIgYWxpZ249XFxcImxlZnRcXFwiIHdpZHRoPVxcXCIyNTBweFxcXCI+0JPQu9Cw0LLQvdGL0Lkg0YHQvtC/0LXRgNC90LjQuiBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiwgXFxcItCt0LLQtdGA0YLQvtC9XFxcIiwg0LHRi9C7INGB0YTQvtGA0LzQuNGA0L7QstCw0L0g0LIgMTg3OCDQs9C+0LTRgyDQlNC20L7QvdC+0Lwg0KXQvtC70LTQuNC90LPQvtC8LCDQvNC10YHRgtC90YvQvCDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70LXQvCDQuCDQsdGD0LTRg9GJ0LjQvCDQvNGN0YDQvtC8INCb0LjQstC10YDQv9GD0LvRjy5cXHJcXG5cXHJcXG4gICAgICAgINCe0L3QuCDQvdCw0YfQsNC70Lgg0LjQs9GA0LDRgtGMINC90LAgXFxcItCt0L3RhNC40LvQtCDQoNC+0YPQtFxcXCIg4oCUINC/0L7Qu9C1LCDQsNGA0LXQvdC00L7QstCw0L3QvdC+0Lwg0YMg0L/QuNCy0L7QstCw0YDQsCDQv9C+INC40LzQtdC90Lgg0JTQttC+0L0g0J7RgNGA0LXQu9C7LiDQmtCw0Log0YLQvtC70YzQutC+IFxcXCLQrdCy0LXRgNGC0L7QvVxcXCIg0LLRgdGC0LDQuyDQvdCwINC90L7Qs9C4INCl0L7Qu9C00LjQvdCzINC/0YDQuNGB0YLRg9C/0LjQuyDQuiDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLRgyDRhNGD0YLQsdC+0LvRjNC90YvRhSDRgtGA0LjQsdGD0L0g0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiLiDQntC00L3QsNC60L4g0L/QvtGB0LvQtSDQstC+0LfQvdC40LrRiNC40YUg0LIgMTg5MiDQs9C+0LTRgyDRgNCw0LfQvdC+0LPQu9Cw0YHQuNC5INC60LvRg9CxINGA0LDRgdC/0LDQu9GB0Y8g0L3QsCDQtNCy0LUg0LPRgNGD0L/Qv9GLLiDQntC00L3QsCDQuNC3INCz0YDRg9C/0L8g0L/RgNC40L3Rj9C70LAg0YDQtdGI0LXQvdC40LUg0L/QtdGA0LXQtdGF0LDRgtGMINC90LAgXFxcItCT0YPQtNC40YHQvtC9INCf0LDRgNC6XFxcIiwg0LIg0YLQviDQstGA0LXQvNGPINC60LDQuiDQvtGB0YLQsNCy0YjQuNC10YHRjywg0LLQviDQs9C70LDQstC1INGBINCl0L7Qu9C00LjQvdCz0L7QvCwg0L7RgdC90L7QstCw0LvQuCDQvdCwIFxcXCLQrdC90YTQuNC70LQg0KDQvtGD0LRcXFwiINC90L7QstGL0Lkg0YTRg9GC0LHQvtC70YzQvdGL0Lkg0LrQu9GD0LEgLSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIi4g0KXQvtC70LTQuNC90LMg0L3QsNC30L3QsNGH0LjQuyDQs9C70LDQstC90YvQvCDRgtGA0LXQvdC10YDQvtC8INGB0LLQvtC10LPQviDQtNGA0YPQs9CwLCDQlNC20L7QvdCwINCc0LDQutC60LXQvdGDLCDQutC+0YLQvtGA0YvQuSDRgdGA0LDQt9GDINC+0YLQv9GA0LDQstC40LvRgdGPINCyINCo0L7RgtC70LDQvdC00LjRjiDQvdCw0LHQuNGA0LDRgtGMINC60L7QvNCw0L3QtNGDINC40LPRgNC+0LrQvtCyLiDQn9C+0YHQu9C1INCz0L7QtNCwINGA0LDQsdC+0YLRiyDQnNCw0LrQutC10L3QsCDRgNC10YjQuNC7LCDRh9GC0L4g0L3QsNGB0YLQsNC70L4g0LLRgNC10LzRjyDQv9C+0LTQsNGC0Ywg0LfQsNGP0LLQutGDINC90LAg0LLRgdGC0YPQv9C70LXQvdC40LUg0LIg0KTRg9GC0LHQvtC70YzQvdGD0Y4g0LvQuNCz0YMuXFxyXFxuXFxyXFxuICAgICAgICDQo9C20LUg0L/QvtGB0LvQtSDQv9C10YDQstC+0LPQviDRgdC10LfQvtC90LAg0LIg0LvQuNCz0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L/QvtC00L3Rj9C70YHRjyDQsiDQstGL0YHRiNC40Lkg0LTQuNCy0LjQt9C40L7QvSwg0L7QtNC90LDQutC+INC+0L0g0L/Qvi3Qv9GA0LXQttC90LXQvNGDINC+0YHRgtCw0LLQsNC70YHRjyDQsiDRgtC10L3QuCDRgdCy0L7QuNGFINGB0L7RgdC10LTQtdC5INC40LcgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLCDQsCDQsdC+0LvRjNGI0LjQvdGB0YLQstC+INC80LXRgdGC0L3Ri9GFINC20LjRgtC10LvQtdC5INC+0YLQutCw0LfRi9Cy0LDQu9C40YHRjCDRhdC+0LTQuNGC0Ywg0L3QsCDQvNCw0YLRh9C4INC60L7QvNCw0L3QtNGLLCDQstGB0LUg0LjQs9GA0L7QutC4INC60L7RgtC+0YDQvtC5INCx0YvQu9C4INGI0L7RgtC70LDQvdC00YbQsNC80LguINCf0LXRgNCy0YvQuSDRgdC10LfQvtC9INC/0YDQvtGI0LXQuyDQvdC10YPQtNCw0YfQvdC+LCDQuCDQutC70YPQsSDQstGL0LHRi9C7INCy0L4g0JLRgtC+0YDQvtC5INC00LjQstC40LfQuNC+0L0uINCc0LDQutC60LXQvdCwINC/0L7QutC70Y/Qu9GB0Y8g0LLQtdGA0L3Rg9GC0YzRgdGPINCyINCy0YvRgdGI0YPRjiDQu9C40LPRgyDRh9C10YDQtdC3INC00LLQtdC90LDQtNGG0LDRgtGMINC80LXRgdGP0YbQtdCyLCDRh9GC0L4g0Lgg0L/RgNC+0LjQt9C+0YjQu9C+INCx0LvQsNCz0L7QtNCw0YDRjyDQtdCz0L4g0YbQtdC70LXRg9GB0YLRgNC10LzQu9C10L3QvdC+0YHRgtC4INC4INC90LDRgdGC0L7QudGH0LjQstC+0YHRgtC4LCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstC90L7QstGMINGB0YLQsNC90L7QstC40YLRgdGPINGH0LXQvNC/0LjQvtC90L7QvCDQstGC0L7RgNC+0LPQviDQtNC40LLQuNC30LjQvtC90LAg0Lgg0L/RgNC+0LTQstC40LPQsNC10YLRgdGPINCyINC/0LXRgNCy0YvQuS4g0J3QsCDRjdGC0L7RgiDRgNCw0Lcg0L7QvdC4INC30LDQstC10YDRiNC40LvQuCDRgdC10LfQvtC9INC90LAg0L3QsNC00LXQttC90L7QvCDQv9GP0YLQvtC8INC80LXRgdGC0LUsINCy0YvRiNC1IFxcXCLQrdCy0LXRgNGC0L7QvdCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCf0LXRgNCy0YvQuSDRh9C10LzQv9C40L7QvdGB0LrQuNC5INGC0LjRgtGD0LsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0LIg0YHQtdC30L7QvdC1IDE5MDAvMDEuINCn0LXRgNC10Lcg0LTQstCwINCz0L7QtNCwINC/0L7RgdC70LUg0Y3RgtC+0LPQviBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0YvQsdGL0LvQuCDQuNC3INCy0YvRgdGI0LXQuSDQu9C40LPQuCwg0L3QviDQstC10YDQvdGD0LvQuNGB0Ywg0YLRg9C00LAg0YHQv9GD0YHRgtGPINCz0L7QtCDQuCDQsiDRgtC+0Lwg0YHQtdC30L7QvdC1INCy0L3QvtCy0Ywg0YHRgtCw0LvQuCDQv9C+0LHQtdC00LjRgtC10LvRj9C80Lgg0YfQtdC80L/QuNC+0L3QsNGC0LAuINCSINC60LDRh9C10YHRgtCy0LUg0L3QsNCz0YDQsNC00Ysg0YDRg9C60L7QstC+0LTRgdGC0LLQviDQutC70YPQsdCwINC/0YDQuNC90Y/Qu9C+INGA0LXRiNC10L3QuNC1INC/0L7RgdGC0YDQvtC40YLRjCDQtNC70Y8g0LHQvtC70LXQu9GM0YnQuNC60L7QsiDQvdC+0LLRg9GOINGC0YDQuNCx0YPQvdGDLCBcXFwi0KHQv9C40L7QvSDQmtC+0L9cXFwiLCDQv9C+0LfQttC1INGB0YLQsNCy0YjRg9GOINC70LXQs9C10L3QtNCw0YDQvdC+0LkuINCi0LDQutC+0LUg0L3QsNC30LLQsNC90LjQtSDRgtGA0LjQsdGD0L3QsCDQv9C+0LvRg9GH0LjQu9CwINCyINGH0LXRgdGC0Ywg0YXQvtC70LzQsCwg0YDQsNGB0L/QvtC70L7QttC10L3QvdC+0LPQviDQsiDRjtC20L3Qvi3QsNGE0YDQuNC60LDQvdGB0LrQvtC5INC/0YDQvtCy0LjQvdGG0LjQuCDQndCw0YLQsNC7LCDQs9C00LUg0LLQviDQstGA0LXQvNGPINCy0YLQvtGA0L7QuSDQsNC90LPQu9C+LdCx0YPRgNGB0LrQvtC5INCy0L7QudC90Ysg0LzQtdGA0YHQuNGB0LDQudC00YHQutC40Lkg0L/QvtC70Log0L/QvtC90LXRgSDQsdC+0LvRjNGI0LjQtSDQv9C+0YLQtdGA0LguINCSINC/0LXRgNC10LLQvtC00LUg0YEg0LDRhNGA0LjQutCw0LDQvdGBIFxcXCLRgdC/0LjQvtC9INC60L7Qv1xcXCIg0L7Qt9C90LDRh9Cw0LXRgiBcXFwi0LzQtdGB0YLQviwg0LTQsNGO0YnQtdC1INGF0L7RgNC+0YjQuNC5INC+0LHQt9C+0YBcXFwiLiDQkiAxOTI4INCz0L7QtNGDINGC0YDQuNCx0YPQvdCwINCx0YvQu9CwINGA0LDRgdGI0LjRgNC10L3QsCDQuCDQvtCx0YDQtdC70LAg0LrRgNGL0YjRgywg0L3QsNC00LXQttC90L4g0LfQsNGJ0LjRidCw0LLRiNGD0Y4g0L7RgiDQvdC10L/QvtCz0L7QtNGLIDMwIDAwMCDQsdC+0LvQtdC70YzRidC40LrQvtCyLlxcclxcblxcclxcbiAgICAgICAg0J/QvtGB0LvQtSDQn9C10YDQstC+0Lkg0LzQuNGA0L7QstC+0Lkg0LLQvtC50L3RiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQuyDQvtCx0LvQsNC00LDRgtC10LvQtdC8INC10YnQtSDQtNCy0YPRhSDRh9C10LzQv9C40L7QvdGB0LrQuNGFINGC0LjRgtGD0LvQvtCyLCDQvdC+INC/0L7RgdC70LUg0JLRgtC+0YDQvtC5INC80LjRgNC+0LLQvtC5INC90LDRh9Cw0LvRgdGPINGB0L/QsNC0INC40LPRgNC+0LLQvtC5INGE0L7RgNC80YssINGF0L7RgtGPINCyIDE5NTAg0LPQvtC00YMgXFxcItC60YDQsNGB0L3Ri9C8XFxcIiDQstGB0LUg0LbQtSDRg9C00LDQu9C+0YHRjCDQstGL0LnRgtC4INCyINGE0LjQvdCw0Lsg0JrRg9Cx0LrQsCDQkNC90LPQu9C40LgsINCz0LTQtSDQvtC90Lgg0YPRgdGC0YPQv9C40LvQuCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIuINCh0LXQt9C+0L0gMTk1My81NCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQtdGA0YjQuNC7INC90LAg0L/QvtGB0LvQtdC00L3QtdC8INC80LXRgdGC0LUg0Lgg0LLRi9Cx0YvQuyDQuNC3INC/0LXRgNCy0L7Qs9C+INC00LjQstC40LfQuNC+0L3QsC4g0J/QvtGB0LvQtSDQvdC10YHQutC+0LvRjNC60LjRhSDQvdC10YPQtNCw0YfQvdGL0YUg0LvQtdGCINC90LAg0L/QvtC80L7RidGMINC60LvRg9Cx0YMg0L/RgNC40YjQtdC7INCR0LjQu9C7INCo0LXQvdC60LvQuC4g0J7QvSDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQs9C70LDQstC90YvQvCDRgtGA0LXQvdC10YDQvtC8INCyIDE5NTkg0LPQvtC00YMg0Lgg0LfQsCDRgdC70LXQtNGD0Y7RidC40LUg0YfQtdGC0YvRgNC90LDQtNGG0LDRgtGMINC70LXRgiDRgdCy0L7QtdC5INGA0LDQsdC+0YLRiyDQv9GA0LXQstGA0LDRgtC40LsgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LIg0LLQtdC70LjRh9Cw0LnRiNC40Lkg0LrQu9GD0LEg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRhNGD0YLQsdC+0LvQsC4g0JfQsCDQv9C10YDQstGL0LUg0LTQstC10L3QsNC00YbQsNGC0Ywg0LzQtdGB0Y/RhtC10LIg0LXQs9C+INGA0YPQutC+0LLQvtC00YHRgtCy0LAg0LTQstCw0LTRhtCw0YLRjCDRh9C10YLRi9GA0LUg0LjQs9GA0L7QutCwINC/0L7QutC40L3Rg9C70Lgg0LrQvtC80LDQvdC00YMuINCSINGB0LXQt9C+0L3QtSAxOTYzLzY0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCyINGI0LXRgdGC0L7QuSDRgNCw0Lcg0YHRgtCw0Lsg0YfQtdC80L/QuNC+0L3QvtC8INCy0YvRgdGI0LXQuSDQu9C40LPQuCwg0LAg0LIg0YHQu9C10LTRg9GO0YnQtdC8INCz0L7QtNGDINC60L7Qu9C70LXQutGG0LjRjyDRgtGA0L7RhNC10LXQsiDQv9C+0L/QvtC70L3QuNC70LDRgdGMINC60YPQsdC60L7QvCDQkNC90LPQu9C40LgsINCx0LvQsNCz0L7QtNCw0YDRjyDQv9C+0LHQtdC00LUg0L3QsNC0IFxcXCLQm9C40LTRgVxcXCIg0LIg0YTQuNC90LDQu9C1INGB0L7RgNC10LLQvdC+0LLQsNC90LjRjy4g0J3QviDQv9C+0LHQtdC00L3QsNGPINGB0LXRgNC40Y8g0L3QsCDRjdGC0L7QvCDQvdC1INC30LDQutC+0L3Rh9C40LvQsNGB0YwsINCyINGB0LXQt9C+0L3QtSAxOTY1LzY2IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDQstGL0LjQs9GA0LDQu9C4INCz0LvQsNCy0L3Ri9C5INGC0LjRgtGD0Lsg0LvQuNCz0LguXFxyXFxuXFxyXFxuICAgICAgICDQodC70LXQtNGD0Y7RidC40Lkg0YLRgNC+0YTQtdC5IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC/0L7Qu9GD0YfQuNC7INC70LjRiNGMINGB0L/Rg9GB0YLRjyDRgdC10LzRjCDQu9C10YIsINCyINGB0LXQt9C+0L3QtSAxOTcyLzczLCDQvdCwINGN0YLQvtGCINGA0LDQtyDQmtGD0LHQvtC6INCj0JXQpNCQLCDQsCDRgdC/0YPRgdGC0Y8g0LXRidC1INCz0L7QtCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0YHRgtCw0LvQuCDQvtCx0LvQsNC00LDRgtC10LvRj9C80Lgg0LrRg9Cx0LrQsCDQkNC90LPQu9C40LguINCf0L7RgdC70LUg0Y3RgtC+0LPQviDQqNC10L3QutC70Lgg0L3QtdC+0LbQuNC00LDQvdC90L4g0YDQtdGI0LjQuyDQt9Cw0LLQtdGA0YjQuNGC0Ywg0LrQsNGA0YzQtdGA0YMg0Lgg0L/QtdGA0LXQtNCw0Lsg0L/QvtC70L3QvtC80L7Rh9C40Y8g0YHQstC+0LXQuSDQv9GA0LDQstC+0Lkg0YDRg9C60LUg4oCUINCR0L7QsdGDINCf0LXQudGB0LvQuC4g0JPRgNC+0LzQutC40YUg0L/QvtCx0LXQtCDQvdC1INC/0YDQuNGI0LvQvtGB0Ywg0LTQvtC70LPQviDQttC00LDRgtGMLCDRg9C20LUg0L3QsCDQstGC0L7RgNC+0Lkg0LPQvtC0INGA0LDQsdC+0YLRiyDQvdC+0LLQvtCz0L4g0YLRgNC10L3QtdGA0LAsINCyINGB0LXQt9C+0L3QtSAxOTc1Lzc2LCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDRh9C10LzQv9C40L7QvdCw0YIg0Lgg0JrRg9Cx0L7QuiDQo9CV0KTQkC4g0KfQtdGA0LXQtyDQs9C+0LQgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC70Lgg0YfQtdC80L/QuNC+0L3QsNC80Lgg0LvQuNCz0LgsINC30LDQstC+0LXQstCw0LvQuCDQmtGD0LHQvtC6INC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtCx0YvQs9GA0LDQsiDQsiDRhNC40L3QsNC70LUgXFxcItCR0L7RgNGD0YHRgdC40Y4g0JzQtdC90YXQtdC90LPQu9Cw0LTQsdCw0YVcXFwiLCDQvdC+INCyINGE0LjQvdCw0LvRjNC90L7QvCDQvNCw0YLRh9C1INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4INGD0YHRgtGD0L/QuNC70LggXFxcItCc0LDQvdGH0LXRgdGC0LXRgCDQrtC90LDQudGC0LXQtFxcXCIg0YHQviDRgdGH0LXRgtC+0LwgMjoxLiDQkiDRgdC10LfQvtC90LUgMTk3Ny83OCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQuyDQv9C10YDQstGL0Lwg0LHRgNC40YLQsNC90YHQutC40Lwg0LrQu9GD0LHQvtC8LCDQutC+0LzRgyDRg9C00LDQu9C+0YHRjCDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINC30LLQsNC90LjQtSDQtdCy0YDQvtC/0LXQudGB0LrQvtCz0L4g0YfQtdC80L/QuNC+0L3QsCwg0L7QtNC10YDQttCw0LIg0L/QvtCx0LXQtNGDINCyINGE0LjQvdCw0LvQtSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y8g0L3QsNC0INCx0LXQu9GM0LPQuNC50YHQutC40Lwg0LrQu9GD0LHQvtC8IFxcXCLQkdGA0Y7Qs9Cz0LVcXFwiINGB0L4g0YHRh9C10YLQvtC8IDE6MC5cXHJcXG5cXHJcXG4gICAgICAgINCX0LDRgtC10Lwg0LTQstCwINCz0L7QtNCwINC/0L7QtNGA0Y/QtCwg0LIg0YHQtdC30L7QvdCw0YUgMTk3OC83OSDQuCAxOTc5LzgwLCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRh9C10LzQv9C40L7QvdC+0Lwg0YHRgtGA0LDQvdGLLiAxOTgxINCz0L7QtCDRgdGC0LDQuyDQvtGH0LXRgNC10LTQvdC+0Lkg0Y/RgNC60L7QuSDRgdGC0YDQsNC90LjRhtC10Lkg0LIg0LjRgdGC0L7RgNC40Lgg0LrQu9GD0LHQsCwg0LIg0YLRgNC10YLQuNC5INGA0LDQtyDQsiDRgdCy0L7QtdC5INC40YHRgtC+0YDQuNC4IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0YHRgtCw0L3QvtCy0Y/RgtGB0Y8g0L7QsdC70LDQtNCw0YLQtdC70Y/QvNC4INCa0YPQsdC60LAg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIsINC+0LTQtdGA0LbQsNCyINC/0L7QsdC10LTRgyDQvdCw0LQg0LzQsNC00YDQuNC00YHQutC40LwgXFxcItCg0LXQsNC70L7QvFxcXCIg0LIg0YTQuNC90LDQu9C1INGC0YPRgNC90LjRgNCwLCDQsCDRgtCw0LrQttC1INCy0YvQuNCz0YDRi9Cy0LDRjtGCINCa0YPQsdC+0Log0JvQuNCz0LguINCSINGB0LXQt9C+0L3QsNGFIDE5ODEvODIg0LggMTk4Mi84MyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0LLQvtC10LLRi9Cy0LDQtdGCINC10YnQtSDQtNCy0LAg0LPQu9Cw0LLQvdGL0YUg0YTRg9GC0LHQvtC70YzQvdGL0YUg0YLRgNC+0YTQtdGPINGB0YLRgNCw0L3Riywg0L/QvtGB0LvQtSDRh9C10LPQviDQn9C10LnRgdC70Lgg0L/RgNC40L3QuNC80LDQtdGCINGA0LXRiNC10L3QuNC1INGD0LnRgtC4INC90LAg0L/QtdC90YHQuNGOLiDQl9CwINC00LXQstGP0YLRjCDQu9C10YIg0LXQs9C+INGA0YPQutC+0LLQvtC00YHRgtCy0LAg0LrQu9GD0LHQvtC8INC10LzRgyDRiNC10YHRgtGMINGA0LDQtyDQv9GA0LjRgdGD0LbQtNCw0LvQvtGB0Ywg0LfQstCw0L3QuNC1IFxcXCLQm9GD0YfRiNC40Lkg0YLRgNC10L3QtdGAINCz0L7QtNCwXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCd0LAg0L/QvtGB0YIg0LPQu9Cw0LLQvdC+0LPQviDRgtGA0LXQvdC10YDQsCDQt9Cw0YHRgtGD0L/QuNC7INCU0LbQviDQpNGN0LPQsNC9LCDQuCDQsiDQv9C10YDQstGL0Lkg0LbQtSDQs9C+0LQg0L/QvtC0INC10LPQviDRgNGD0LrQvtCy0L7QtNGB0YLQstC+0Lwg0LrQu9GD0LEg0LLRi9C40LPRgNCw0Lsg0YfQtdC80L/QuNC+0L3QsNGCINCQ0L3Qs9C70LjQuCwg0JrRg9Cx0L7QuiDQm9C40LPQuCDQuCDQmtGD0LHQvtC6INC10LLRgNC+0L/QtdC50YHQutC40YUg0YfQtdC80L/QuNC+0L3QvtCyLCDQvtCx0YvQs9GA0LDQsiBcXFwi0KDQvtC80YNcXFwiINCyINCY0YLQsNC70LjQuC4g0KHQu9C10LTRg9GO0YnQuNC5INGB0LXQt9C+0L0g0LHRi9C7INC+0LzRgNCw0YfQtdC9INGB0YLRgNCw0YjQvdC+0Lkg0YLRgNCw0LPQtdC00LjQtdC5LiDQktC+INCy0YDQtdC80Y8g0YTQuNC90LDQu9CwINCa0YPQsdC60LAg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIg0L/RgNC+0YLQuNCyIFxcXCLQrtCy0LXQvdGC0YPRgdCwXFxcIiDQvdCwINGB0YLQsNC00LjQvtC90LUgXFxcItCt0LnQt9C10LvRjFxcXCIg0LLQvtC30L3QuNC60LvQuCDQsdC10YHQv9C+0YDRj9C00LrQuC4g0J/QtdGA0LXQutGA0YvRgtC40LUg0L3QsCDRgdGC0LDQtNC40L7QvdC1INGA0YPRhdC90YPQu9C+INC4INGD0L3QtdGB0LvQviDRgSDRgdC+0LHQvtC5INC20LjQt9C90LggMzgg0LHQvtC70LXQu9GM0YnQuNC60L7QsiDQuNGC0LDQu9GM0Y/QvdGB0LrQvtCz0L4g0LrQu9GD0LHQsC4g0JIg0LrQvtC90LXRh9C90L7QvCDRgdGH0LXRgtC1INC+0LHQu9Cw0LTQsNGC0LXQu9C10Lwg0YLRgNC+0YTQtdGPINGB0YLQsNC7IFxcXCLQrtCy0LXQvdGC0YPRgVxcXCIsINCwINCw0L3Qs9C70LjQudGB0LrQuNC8INC60LvRg9Cx0LDQvCDQvdCwINC90LXQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lkg0YHRgNC+0Log0LfQsNC/0YDQtdGC0LjQu9C4INGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y/RhS5cXHJcXG5cXHJcXG4gICAgICAgINCSIDE5ODYg0LPQvtC00YMg0JrQtdC90L3QuCDQlNCw0LvQs9C70LjRiCDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQuNCz0YDQsNGO0YnQuNC8INGC0YDQtdC90LXRgNC+0LwuINCSINGN0YLQvtC8INC20LUg0YHQtdC30L7QvdC1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INGH0LXQvNC/0LjQvtC90LDRgiDQuCDQmtGD0LHQvtC6INCQ0L3Qs9C70LjQuC4g0JIg0YHQtdC30L7QvdC1IDE5ODcvODggXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINGB0YLQsNC90L7QstGP0YLRgdGPINGH0LXQvNC/0LjQvtC90LDQvNC4INGB0YLRgNCw0L3Riywg0L7QtNC90LDQutC+INCyINGE0LjQvdCw0LvQtSDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCDRg9GB0YLRg9C/0LDRjtGCIFxcXCLQo9C40LzQsdC70LTQvtC90YNcXFwiLiDQodC10LfQvtC9IDE5ODgvODkg0YHRgtCw0Lsg0YXRg9C00YjQuNC8INCyINC40YHRgtC+0YDQuNC4IFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiLiDQktC+INCy0YDQtdC80Y8g0L/QvtC70YPRhNC40L3QsNC70YzQvdC+0LPQviDQvNCw0YLRh9CwINCa0YPQsdC60LAg0JDQvdCz0LvQuNC4INC/0YDQvtGC0LjQsiBcXFwi0J3QvtGC0YLQuNC90LPQtdC8INCk0L7RgNC10YHRglxcXCIg0L3QsCDRgdGC0LDQtNC40L7QvdC1IFxcXCLQpdC40LvQu9GB0LHQvtGA0L5cXFwiIDk2INCx0L7Qu9C10LvRjNGJ0LjQutC+0LIgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0L/QvtCz0LjQsdC70Lgg0LIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0L/QtdGA0LXQv9C+0LvQvdC10L3QuNGPINGC0YDQuNCx0YPQvdGLIFxcXCLQm9C10L/Qv9C40L3QsyDQm9C10LnQvVxcXCIuINCf0L7Qt9C20LUgXFxcItCa0YDQsNGB0L3Ri9C1XFxcIiDQstGL0YjQu9C4INCyINGE0LjQvdCw0LssINCz0LTQtSDQstGB0YLRgNC10YLQuNC70LjRgdGMINGBIFxcXCLQrdCy0LXRgNGC0L7QvdC+0LxcXFwiLiDQn9C10YDQtdC0INC90LDRh9Cw0LvQvtC8INC80LDRgtGH0LAg0LHQvtC70LXQu9GM0YnQuNC60Lgg0L7QsdC10LjRhSDQutC+0LzQsNC90LQg0L/QtdC70LggXFxcIllvdSB3aWxsIG5ldmVyIHdhbGsgYWxvbmVcXFwiINC4INC/0YDQvtCy0LXQu9C4INC80LjQvdGD0YLRgyDQvNC+0LvRh9Cw0L3QuNGPLCDQsiDQv9Cw0LzRj9GC0Ywg0L4g0L/QvtCz0LjQsdGI0LjRhSDQvdCwIFxcXCLQpdC40LvQu9GB0LHQvtGA0L5cXFwiLiBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQv9C+0LHQtdC00LjQuyDRgdC+INGB0YfQtdGC0L7QvCAzOjIg0LHQu9Cw0LPQvtC00LDRgNGPINC00LLRg9C8INCz0L7Qu9Cw0LwsINC30LDQsdC40YLRi9C8INCy0YvRiNC10LTRiNC40Lwg0L3QsCDQt9Cw0LzQtdC90YMg0JjQsNC90L7QvCDQoNCw0YjQtdC8LiDQk9C70LDQstC90YvQuSDRgtGA0L7RhNC10Lkg0LvQuNCz0Lgg0YLQsNC60LbQtSDQsdGL0Lsg0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQsiDRgNGD0LrQsNGFINGDIFxcXCLQutGA0LDRgdC90YvRhVxcXCIsINGH0YLQvtCx0Ysg0Y3RgtC+0LzRgyDQv9C+0LzQtdGI0LDRgtGMIFxcXCLQkNGA0YHQtdC90LDQu9GDXFxcIiDQvdGD0LbQvdC+INCx0YvQu9C+INCy0YvQuNCz0YDQsNGC0Ywg0L3QsCBcXFwi0K3QvdGE0LjQu9C00LVcXFwiINGBINC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvtC8INCyINC00LLQsCDQvNGP0YfQsC4g0Jog0LrQvtC90YbRgyDRgNC10YjQsNGO0YnQtdCz0L4g0LzQsNGC0YfQsCBcXFwi0JDRgNGB0LXQvdCw0LtcXFwiINCy0LXQuyDQsiDRgdGH0LXRgtC1IDE6MCwg0L3QviDQs9C+0Lsg0JzQsNC50LrQu9CwINCi0L7QvNCw0YHQsCwg0LfQsNCx0LjRgtGL0Lkg0YPQttC1INCyINC00L7QsdCw0LLQu9C10L3QvdC+0LUg0LLRgNC10LzRjywg0L/QvtGF0L7RgNC+0L3QuNC7INC90LDQtNC10LbQtNGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC90LAg0L7Rh9C10YDQtdC00L3QvtC5INGC0YDQvtGE0LXQudC90YvQuSDQtNGD0LHQu9GMLiDQn9C+0YHQu9C1INC+0LrQvtC90YfQsNC90LjRjyDRgdC10LfQvtC90LAg0JrQtdC90L3QuCDQlNCw0LvQs9C70LjRiCDQvtGB0YLQsNCy0LjQuyDRgdCy0L7QuSDQv9C+0YHRgiwg0L7QsdGK0Y/RgdC90LjQsiDRjdGC0L4g0YjQvtC60LjRgNC+0LLQsNCy0YjQtdC1INC80L3QvtCz0LjRhSDRgNC10YjQtdC90LjQtSDQvdC10YDQstC90YvQvCDQv9C10YDQtdC90LDQv9GA0Y/QttC10L3QuNC10LwuXFxyXFxuXFxyXFxuICAgICAgICDQktGA0LXQvNC10L3QvdC+INC30LDQvNC10L3QuNGC0Ywg0JTQsNC70LPQu9C40YjQsCDQsdGL0Lsg0L/RgNC40LfQstCw0L0g0KDQvtC90L3QuCDQnNC+0YDQsNC9LCDQv9GA0LXQttC00LUg0YfQtdC8INCyINCw0L/RgNC10LvQtSAxOTkxINCz0L7QtNCwINC90LAg0L/QvtGB0YIg0LPQu9Cw0LLQvdC+0LPQviDRgtGA0LXQvdC10YDQsCDQvdC1INCx0YvQuyDQvdCw0LfQvdCw0YfQtdC9INCT0YDRjdC8INCh0YPQvdC10YHRgS4g0J7QvSDQv9GA0LjQstC10Lsg0LIg0LrQvtC80LDQvdC00YMg0LzQvdC+0LbQtdGB0YLQstC+INC90L7QstGL0YUg0LjQs9GA0L7QutC+0LIsINC90L4g0LXQs9C+INGB0YLRgNC+0LPQuNC5INGB0YLQuNC70Ywg0YDQsNCx0L7RgtGLINC90LUg0L/QvtC70YzQt9C+0LLQsNC70YHRjyDQv9C+0L/Rg9C70Y/RgNC90L7RgdGC0YzRjiDQuCDQvdC1INC/0L7QvNC+0LMg0LrQvtC80LDQvdC00LUg0L/QvtCy0YLQvtGA0LjRgtGMINGD0YHQv9C10YUg0L/RgNC+0YjQu9GL0YUg0LvQtdGCLiDQndCw0YfQuNC90LDRjyDRgSDRjdGA0Ysg0KHRg9C90L3QtdGB0LAg0Lgg0LTQviDRgdC40YUg0L/QvtGAINC60LvRg9CxINC/0YDQtdGB0LvQtdC00YPQtdGCINC80L3QvtC20LXRgdGC0LLQviDQv9GA0L7QsdC70LXQvC5cXHJcXG5cXHJcXG4gICAgICAgINCg0L7QuSDQrdCy0LDQvdGBINCyINGB0LLQvtC5INC/0LXRgNCy0YvQuSDQv9C+0LvQvdGL0Lkg0YHQtdC30L7QvSDRgyDRgNGD0LvRjyDQutC70YPQsdCwLCDQsiAxOTk1INCz0L7QtNGDLCDQstGL0LjQs9GA0LDQuyDQmtGD0LHQvtC6INCb0LjQs9C4LiDQndC10YHQvNC+0YLRgNGPINC90LAg0YLQviwg0YfRgtC+INC10LzRgyDRg9C00LDQu9C+0YHRjCDQv9C+0YHRgtGA0L7QuNGC0Ywg0LjQvdGC0LXRgNC10YHQvdGD0Y4g0LrQvtC80LDQvdC00YMg0LzQvtC70L7QtNGL0YUg0LjQs9GA0L7QutC+0LIsINC80L3QvtCz0LjQtSDQuNC3INC60L7RgtC+0YDRi9GFINC/0YDQuNGI0LvQuCDQuNC3INGO0L3QvtGI0LXRgdC60L7QuSDQutC+0LzQsNC90LTRiyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiwg0L3QuNC60LDQutC40YUg0YHQtdGA0YzQtdC30L3Ri9GFINC/0L7QsdC10LQg0LXQvNGDINC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDRg9C00LDQu9C+0YHRjC4g0JHQvtC70LXQu9GM0YnQuNC60Lgg0Lgg0YDRg9C60L7QstC+0LTRgdGC0LLQviDRgtGA0LXQsdC+0LLQsNC70Lgg0LPRgNC+0LzQutC40YUg0YPRgdC/0LXRhdC+0LIsINC4INCyIDE5OTgg0LPQvtC00YMg0LIg0LrQu9GD0LEg0LHRi9C7INC/0YDQuNCz0LvQsNGI0LXQvSDQltC10YDQsNGAINCj0LvRjNC1LCDQutC+0YLQvtGA0YvQuSDQtNC+0LvQttC10L0g0LHRi9C7INGA0LDQt9C00LXQu9C40YLRjCDRgtGA0LXQvdC10YDRgdC60L7QtSDQutGA0LXRgdC70L4g0YEg0KDQvtC10Lwg0K3QstCw0L3RgdC+0LwuINCe0L/Ri9GCINGB0L7QstC80LXRgdGC0L3QvtC5INGA0LDQsdC+0YLRiyDQvtC60LDQt9Cw0LvRgdGPINC90LXRg9C00LDRh9C90YvQvCwg0Lgg0K3QstCw0L3RgSDQv9C+0LrQuNC90YPQuyDQutC70YPQsSwg0L/QvtC70L7QttC40LIg0YLQtdC8INGB0LDQvNGL0Lwg0LrQvtC90LXRhiAzNSDQv9C10YDQuNC+0LTRgyDQv9GA0LXQtNCw0L3QvdC+0Lkg0YHQu9GD0LbQsdGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y5cXFwiLlxcclxcblxcclxcbiAgICAgICAg0KPQu9GM0LUg0L3QsNGH0LDQuyDRgNCw0LfQstC40LLQsNGC0Ywg0YHQvtGB0YLQsNCyINC60LvQvNCw0L3QtNGLLCDQv9GA0LjQs9C70LDRiNCw0Y8g0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC90LXQuNC30LLQtdGB0YLQvdGL0YUg0LjQs9GA0L7QutC+0LIsINC/0YDQuCDRjdGC0L7QvCDQtdCz0L4g0YHQvtCy0LXRgNGI0LXQvdC90L4g0L3QtSDQv9GD0LPQsNC70Lgg0LrRgNC40YLQuNGH0LXRgdC60LjQtSDQvtGC0LfRi9Cy0Ysg0YHRgNC10LTRgdGC0LIg0LzQsNGB0YHQvtCy0L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC4g0JXQvNGDINGD0LTQsNC70L7RgdGMINC30L3QsNGH0LjRgtC10LvRjNC90L4g0YPQu9GD0YfRiNC40YLRjCDQuNCz0YDRgyDQutC+0LzQsNC90LTRiyDQsiDQvtCx0L7RgNC+0L3QtSwg0LfQsCDRh9GC0L4g0LIgMjAwMSDQs9C+0LTRgyDQvtC9INCx0YvQuyDQstC+0LfQvdCw0LPRgNCw0LbQtNC10L0g0L/Rj9GC0YzRjiDRgtGA0L7RhNC10Y/QvNC4LCDQsCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQvdC1INC/0L7RgtC10YDQv9C10Lsg0L3QuCDQvtC00L3QvtCz0L4g0L/QvtGA0LDQttC10L3QuNGPINCyINC60YPQsdC60L7QstGL0YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUg0YLQvtCz0L4g0YHQtdC30L7QvdCwINC4INC60LLQsNC70LjRhNC40YbQuNGA0L7QstCw0LvRgdGPINCyINCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7Qsi5cXHJcXG5cXHJcXG4gICAgICAgINCd0LAg0YHQu9C10LTRg9GO0YnQuNC5INCz0L7QtCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRgdC10YDRjNC10LfQvdC+INC/0YDQtdGC0LXQvdC00L7QstCw0Lsg0L3QsCDQv9C+0LHQtdC00YMg0LIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUg0Lgg0LIg0YLQviDQttC1INCy0YDQtdC80Y8g0L3QtdC/0LvQvtGF0L4g0YHQtdCx0Y8g0L/RgNC+0Y/QstC40Lsg0LIg0JvQuNCz0LUg0YfQtdC80L/QuNC+0L3QvtCyLCDQtNC+0LHRgNCw0LLRiNC40YHRjCDQtNC+INGH0LXRgtCy0LXRgNGC0YzRhNC40L3QsNC70LAg0YHQvtGA0LXQstC90L7QstCw0L3QuNGPLCDQs9C00LUg0YPRgdGC0YPQv9C40Lsg0LvQtdCy0LXRgNC60YPQt9C10L3RgdC60L7QvNGDIFxcXCLQkdCw0LnQtdGA0YNcXFwiLCDQstGL0YjQtdC00YjQtdC80YMg0LIg0LjRgtC+0LPQtSDQsiDRhNC40L3QsNC7INGC0YPRgNC90LjRgNCwLlxcclxcblxcclxcbiAgICAgICAg0JjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGB0L4g0LfQtNC+0YDQvtCy0YzQtdC8INCW0LXRgNCw0YDQsCDQo9C70YzQtSwg0LHQvtC70YzRiNGD0Y4g0YfQsNGB0YLRjCDRgdC70LXQtNGD0Y7RidC10LPQviDRgdC10LfQvtC90LAg0LrQvtC80LDQvdC00L7QuSDRhNCw0LrRgtC40YfQtdGB0LrQuCDRgNGD0LrQvtCy0L7QtNC40Lsg0KTQuNC7INCi0L7QvNC/0YHQvtC9LCDQvdC+INCx0LvQsNCz0L7QtNCw0YDRjyDRgdCy0L7QtdC8INCx0YPRgtGA0YPQvNC+0LLRgdC60L7QvNGDINC/0YDQvtGI0LvQvtC80YMg0LXQvNGDINGD0LTQsNC70L7RgdGMINGD0YHQv9C10YjQvdC+INGB0L/RgNCw0LLQuNGC0YzRgdGPINGBINGN0YLQvtC5INC30LDQtNCw0YfQtdC5LiDQkiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQt9Cw0L3Rj9C7INCy0YLQvtGA0L7QtSDQvNC10YHRgtC+LCDRg9GB0YLRg9C/0LjQsiDQu9C40YjRjCBcXFwi0JDRgNGB0LXQvdCw0LvRg1xcXCIsINC4INCy0L3QvtCy0Ywg0L/QvtC70YPRh9C40Lsg0L/Rg9GC0LXQstC60YMg0LIg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyLlxcclxcblxcclxcbiAgICAgICAg0KHQtdC30L7QvSAyMDAzLzA0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC30LDQstC10YDRiNC40Lsg0L3QsCDRh9C10YLQstC10YDRgtC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70YPRh9C40LIg0YLQtdC8INGB0LDQvNGL0Lwg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9GA0LjQvdGP0YLRjCDRg9GH0LDRgdGC0LjQtSDQsiDQm9C40LPQtSDQp9C10LzQv9C40L7QvdC+0LIg0YHQu9C10LTRg9GO0YnQtdCz0L4g0YHQtdC30L7QvdCwLiDQoNGD0LrQvtCy0L7QtNGB0YLQstC+INC60LvRg9Cx0LAg0YDQtdGI0LjQu9C+LCDRh9GC0L4g0L3QsNGB0YLQsNC70LAg0L/QvtGA0LAg0L/QtdGA0LXQvNC10L0uINCd0L7QstGL0Lwg0LPQu9Cw0LLQvdGL0Lwg0YLRgNC10L3QtdGA0L7QvCDQsdGL0Lsg0L3QsNC30L3QsNGH0LXQvSDQoNCw0YTQsNGN0LvRjCDQkdC10L3QuNGC0LXRgSwg0LAg0KPQu9GM0LUg0YHQvtCz0LvQsNGB0LjQu9GB0Y8g0L/QvtC60LjQvdGD0YLRjCDQutC70YPQsS5cXHJcXG5cXHJcXG4gICAgICAgINCR0LXQvdC40YLQtdGBINC90LUg0YHRgtCw0Lsg0YLRgNCw0YLQuNGC0Ywg0LLRgNC10LzRjyDQvdCwINC/0L7QuNGB0LrQuCDQtNC70Y8g0YHQtdCx0Y8g0L3QvtCy0YvRhSDQv9C+0LzQvtGJ0L3QuNC60L7Qsiwg0LAg0L7RgdGC0LDQstC40Lsg0L3QsCDRgdCy0L7QuNGFINC00L7Qu9C20L3QvtGB0YLRj9GFINCk0LjQu9CwINCi0L7QvNC/0YHQvtC90LAsINCh0Y3QvNC80Lgg0JvQuCDQuCDQlNC20L4g0JrQvtGA0YDQuNCz0LDQvdCwLiDQktC90LXQt9Cw0L/QvdC+IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0LXRgNC90YPQu9GB0Y8g0Log0LDRgtCw0LrRg9GO0YnQtdC80YMg0YHRgtC40LvRjiDQuNCz0YDRiyDRgSDQsdC+0LvRjNGI0LjQvCDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INC/0LXRgNC10LTQsNGHLCDQvdCwINGA0LDQtNC+0YHRgtGMINCx0L7Qu9C10LvRjNGJ0LjQutCw0Lwg0Lgg0LrRgNC40YLQuNC60LDQvCwg0Lgg0YHRgtCw0Lsg0L/RgNC+0Y/QstC70Y/RgtGMINC90LDQvNC10LrQuCDQvdCwINC80L3QvtCz0L7QvtCx0LXRidCw0Y7RidC10LUg0LHRg9C00YPRidC10LUuINCSINC60L7QvdGG0LUg0YHQtdC30L7QvdCwIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7QsiDQsiDQvtC00L3QvtC8INC40Lcg0YHQsNC80YvRhSDQt9Cw0YXQstCw0YLRi9Cy0LDRjtGJ0LjRhSDRhNC40L3QsNC70L7QsiDQsiDQuNGB0YLQvtGA0LjQuCDRgtGD0YDQvdC40YDQsC5cXHJcXG5cXHJcXG4gICAgICAgINCg0YPQutC+0LLQvtC00YHRgtCy0L4g0LrQu9GD0LHQsCwg0LIg0LvQuNGG0LUg0LDQvNC10YDQuNC60LDQvdGB0LrQuNGFINCy0LvQsNC00LXQu9GM0YbQtdCyINCU0LbQvtGA0LbQsCDQltC40LvQu9C10YLRgtCwINC4INCi0L7QvNCwINCl0LjQutGB0LAsINC00LDQstC40LvQviDQvdCwINCR0LXQvdC40YLQtdGB0LAg0YEg0YLRgNC10LHQvtCy0LDQvdC40LXQvCDQvdC10LzQtdC00LvQtdC90L3QvtCz0L4g0YPRgdC/0LXRhdCwINCyINCf0YDQtdC80YzQtdGALdC70LjQs9C1LiDQoNCw0YHQutC+0Lsg0L/RgNC+0LjQt9C+0YjQtdC7LCDQutC+0LPQtNCwINGC0YDQtdC90LXRgNGDINCx0YvQu9C+INC+0YLQutCw0LfQsNC90L4g0LIg0YHRgNC10LTRgdGC0LLQsNGFINC90LAg0YPRgdC40LvQtdC90LjQtSDRgdC+0YHRgtCw0LLQsC5cXHJcXG5cXHJcXG4gICAgICAgINCb0LXRgtC+0LwgMjAxMCDQs9C+0LTQsCDQkdC10L3QuNGC0LXRgdCwINGB0LzQtdC90LjQuyDQoNC+0Lkg0KXQvtC00LbRgdC+0L0sINC60L7RgtC+0YDQvtC80YMg0LfQsCDRgtC+INC90LXQv9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0LUg0LLRgNC10LzRjywg0YfRgtC+INC+0L0g0L/RgNC+0LHRi9C7INGDINGA0YPQu9GPINC60LvRg9Cx0LAsINGC0LDQuiDQvdC1INGD0LTQsNC70L7RgdGMINC30LDQstC+0LXQstCw0YLRjCDQu9GO0LHQvtCy0Ywg0LHQvtC70LXQu9GM0YnQuNC60L7Qsi4g0JrQu9GD0LEsINGC0LXQvCDQstGA0LXQvNC10L3QtdC8LCDQv9GL0YLQsNC70YHRjyDRgNCw0LfQvtGA0LLQsNGC0Ywg0LLRgdC1INGB0LLRj9C30Lgg0YEg0LDQvNC10YDQuNC60LDQvdGB0LrQuNC80Lgg0YXQvtC30Y/QtdCy0LDQvNC4LlxcclxcblxcclxcbiAgICAgICAg0JIg0LrQvtC90YbQtSDQutC+0L3RhtC+0LIsINCx0LvQsNCz0L7QtNCw0YDRjyDRg9GB0LjQu9C40Y/QvCDQv9GA0LXQt9C40LTQtdC90YLQsCDQutC70YPQsdCwLCDQnNCw0YDRgtC40L3QsCDQkdGA0L7RgtC+0L3QsCwg0L/QvtGP0LLQuNC70YHRjyDQvdC+0LLRi9C5INC/0L7QutGD0L/QsNGC0LXQu9GMLCDQuCDRgdC00LXQu9C60LAg0L/QviDQv9GA0L7QtNCw0LbQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDRgdC+0YHRgtC+0Y/Qu9Cw0YHRjCwg0L3QtdGB0LzQvtGC0YDRjyDQvdCwINCy0YHQtSDRgdGD0LTQtdCx0L3Ri9C1INC40YHQutC4LCDQv9GL0YLQsNCy0YjQuNC10YHRjyDQv9C+0LzQtdGI0LDRgtGMINC10LUg0L7RgdGD0YnQtdGB0YLQstC70LXQvdC40Y4uINCSINC+0LrRgtGP0LHRgNC1IDIwMTAg0LrQu9GD0LEg0L/QvtC/0YDQvtGJ0LDQu9GB0Y8g0YEg0KXQuNC60YHQvtC8INC4INCW0LjQu9C70LXRgtGC0L7QvCDQuCDQstGB0YLRgNC10YLQuNC7INC90L7QstC+0LPQviDQstC70LDQtNC10LvRjNGG0LAsINCU0LbQvtC90LAg0JPQtdC90YDQuCwg0YfRjNGPINC60L7QvNC/0LDQvdC40Y8gTkVWUyDRg9C20LUg0LjQvNC10LvQsCDRg9GB0L/QtdGI0L3Ri9C5INC+0L/Ri9GCINGA0LDQsdC+0YLRiyDRgSDQsdC+0YHRgtC+0L3RgdC60L7QuSDQsdC10LnRgdCx0L7Qu9GM0L3QvtC5INC60L7QvNCw0L3QtNC+0LkgXFxcItCg0LXQtCDQodC+0LrRgVxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQpdC+0LTQttGB0L7QvSDQvdC1INC90LDQtNC+0LvQs9C+INC30LDQtNC10YDQttCw0LvRgdGPINCyINC60LvRg9Cx0LUsINC/0L7RgdC70LUg0YPQttCw0YHQvdC+0LPQviDQvdCw0YfQsNC70LAg0YHQtdC30L7QvdCwIDIwMTAvMTEsINCyINGP0L3QstCw0YDQtSDQvtC9INGB0L7Qs9C70LDRgdC40LvRgdGPINC/0L7QutC40L3Rg9GC0Ywg0YHQstC+0Lkg0L/QvtGB0YIsINC4INC10LPQviDQvNC10YHRgtC+INCy0YDQtdC80LXQvdC90L4g0LfQsNC90Y/QuyDQmtC10L3QvdC4INCU0LDQu9Cz0LvRgtGILCDRh9GM0LUg0LjQvNGPINC6INGC0L7QvNGDINCy0YDQtdC80LXQvdC4INCy0YHQtSDRh9Cw0YnQtSDRgdGC0LDQu9C4INCy0YHQv9C+0LzQuNC90LDRgtGMINCx0L7Qu9C10LvRjNGJ0LjQutC4LlxcclxcblxcclxcbiAgICAgICAg0JTQsNC70LPQu9C40Ygg0LHRi9GB0YLRgNC+INCy0YHQtdC70LjQuyDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINC60L7QvNCw0L3QtNGDLCDQuNC30LHQsNCy0LjQu9GB0Y8g0L7RgiDQvdC10L3Rg9C20L3Ri9GFINC40LPRgNC+0LrQvtCyLCDQstC60LvRjtGH0LDRjyDQuCDRgdC/0L7RgNC90YvQuSDQv9C10YDQtdGF0L7QtCDQpNC10YDQvdCw0L3QtNC+INCi0L7RgNGA0LXRgdCwINCyIFxcXCLQp9C10LvRgdC4XFxcIiwg0L/RgNC40L7QsdGA0LXQuyDQm9GD0LjRgdCwINCh0YPQsNGA0LXRgdCwINC4INCt0L3QtNC4INCa0Y3RgNGA0L7Qu9C70LAg0LTQu9GPINC/0L7RgdGC0YDQvtC10L3QuNGPINC90L7QstC+0Lkg0LvQuNC90LjQuCDQsNGC0LDQutC4LiDQmtC70YPQsSDRgdC70L7QstC90L4g0LfQsNC90L7QstC+INGA0L7QtNC40LvRgdGPINC4INCy0LfQu9C10YLQtdC7INC90LAg0LrRgNGL0LvRjNGP0YUuINCSINC60L7QvdGG0LUg0YHQtdC30L7QvdCwINCU0LDQu9Cz0LvQuNGIINC/0L7QtNC/0LjRgdCw0Lsg0YEgXFxcItCb0LjQstC10YDQv9GD0LvQtdC8XFxcIiDRgtGA0LXRhdC70LXRgtC90LjQuSDQutC+0L3RgtGA0LDQutGCLlxcclxcblxcclxcbiAgICAgICAg0J7RgdC90L7QstC90L7QuSDRhtC10LvRjNGOINC60LvRg9Cx0LAg0LHRi9C70L4g0LLQvtC30LLRgNCw0YnQtdC90LjQtSDQsiDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIsINC30LAg0YHQstC+0Lkg0L/QtdGA0LLRi9C5INC/0L7Qu9C90YvQuSDRgdC10LfQvtC9INCyINC60LvRg9Cx0LUg0JTQsNC70LPQtNC40YjRgyDQtNC+0YHRgtC40YfRjCDQtdC1INC90LUg0YPQtNCw0LvQvtGB0YwsINC40Lct0LfQsCDQtNC+0YHRgtCw0YLQvtGH0L3QviDQvdC10YHRgtCw0LHQuNC70YzQvdGL0YUg0LLRi9GB0YLRg9C/0LvQtdC90LjQuSDQutC+0LzQsNC90LTRiyDQsiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtS4g0JIg0LjRgtC+0LPQtSDQutC70YPQsSDRhNC40L3QuNGI0LjRgNC+0LLQsNC7INC90LAg0LLQvtGB0YzQvNC+0Lwg0LzQtdGB0YLQtSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QuNC20LUg0YHQstC+0LXQs9C+INC+0YHQvdC+0LLQvdC+0LPQviDQutC+0L3QutGD0YDQtdC90YLQsCwgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0KLQtdC8INC90LUg0LzQtdC90LXQtSwgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0YXQvtGA0L7RiNC+INC/0YDQvtGP0LLQuNC7INGB0LXQsdGPINCyINC60YPQsdC60L7QstGL0YUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGP0YUuINCSINGE0LXQstGA0LDQu9C1IDIwMTIg0LPQvtC00LAgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstGL0LjQs9GA0LDQu9C4INCa0YPQsdC+0Log0JvQuNCz0LgsINC+0LHRi9Cz0YDQsNCyIFxcXCLQmtCw0YDQtNC40YTRhFxcXCIg0LIg0YHQtdGA0LjQuCDQv9C10L3QsNC70YzRgtC4LCDQsdC70LDQs9C+0LTQsNGA0Y8g0YfQtdC80YMg0L/QvtC70YPRh9C40Lsg0L/Rg9GC0LXQstC60YMg0LIg0JvQuNCz0YMg0JXQstGA0L7Qv9GLLiDQkCDQsiDQvNCw0LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LggXFxcItCn0LXQu9GB0LhcXFwiINCy0YHRgtGA0LXRgtC40LvQuNGB0Ywg0LIg0YTQuNC90LDQu9C1INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4LCDQvtC00L3QsNC60L4g0YPQtNCw0YfQsCDQvtC60LDQt9Cw0LvQsNGB0Ywg0L3QsCDRgdGC0L7RgNC+0L3QtSDQu9C+0L3QtNC+0L3RgdC60L7Qs9C+INC60LvRg9Cx0LAuXFxyXFxuXFxyXFxuICAgICAgICDQndC10YHQvNC+0YLRgNGPINC90LAg0YPRgdC/0LXRhdC4INCyINC60YPQsdC60L7QstGL0YUg0YLRg9GA0L3QuNGA0LDRhSwg0LIg0LrQvtC90YbQtSDRgdC10LfQvtC90LAg0JTQsNC70LPQu9C40Ygg0LHRi9C7INGD0LLQvtC70LXQvSwg0LAg0LXQs9C+INC80LXRgdGC0L4g0LfQsNC90Y/QuyDQvNC+0LvQvtC00L7QuSDRgdC10LLQtdGA0L7QuNGA0LvQsNC90LTRgdC60LjQuSDRgtGA0LXQvdC10YAsINCR0YDQtdC90LTQsNC9INCg0L7QtNC20LXRgNGBLCDQv9C+0LrQvtGA0LjQstGI0LjQuSDQuiDRgtC+0LzRgyDQstGA0LXQvNC10L3QuCDQstGB0LXRhSDRgdCy0L7QtdC5INGA0LDQsdC+0YLQvtC5INGBINC00L7RgdGC0LDRgtC+0YfQvdC+INGB0LrRgNC+0LzQvdGL0LwgXFxcItCh0YPQvtC90YHQuCDQodC40YLQuFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQoNC+0LTQttC10YDRgSDQv9GA0LjRiNC10Lsg0YEg0YDQtdGI0LjQvNC+0YHRgtGM0Y4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LIg0LrQu9GD0LHQtSDQvdC+0LLRg9GOINGE0LjQu9C+0YHQvtGE0LjRjiwg0L/RgNC40LLQuNGC0Ywg0LrQvtC80LDQvdC00LUg0L3QvtCy0YvQuSDRgdGC0LjQu9GMINC40LPRgNGLLCDQv9GA0Lgg0Y3RgtC+0Lwg0L3QtSDRgtC10YDRj9GPLCDQutCw0Log0L7QvSDRg9GC0LLQtdGA0LbQtNCw0LssINGB0LLRj9C30Lgg0YEg0LjRgdGC0L7RgNC40LXQuS4g0KEg0YHQvtCx0L7QuSDQuNC3IFxcXCLQodGD0L7QvdGB0LhcXFwiINC+0L0g0LfQsNGF0LLQsNGC0LjQuyDRgdCy0L7QuNGFINCw0YHRgdC40YHRgtC10L3RgtC+0LIg0Lgg0L/QvtC70YPQt9Cw0YnQuNGC0L3QuNC60LAg0JTQttC+INCQ0LvQu9C10L3QsC4g0J7QtNC90LDQutC+LCDQuNC3LdC30LAg0L/RgNC+0LLQvtC00LjQstGI0LXQs9C+0YHRjyDQsiDRgtC+INCy0YDQtdC80Y8g0YfQtdC80L/QuNC+0L3QsNGC0LAg0JXQstGA0L7Qv9GLLCDRgtGA0LXQvdC10YAg0LLQv9C10YDQstGL0LUg0YPQstC40LTQtdC7INCy0YHRjiDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQsiDRgdCx0L7RgNC1INGC0L7Qu9GM0LrQviDQuiDQvdCw0YfQsNC70YMg0YHQtdC30L7QvdCwLiDQkiDRgdC10LfQvtC90LUgMjAxMi8xMyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0YHRgtGD0L/QsNC7INC60YDQsNC50L3QtSDQvdC10YHRgtCw0LHQuNC70YzQvdC+LCDQv9C+0LrQsNC30LDQsiDRhdGD0LTRiNC40Lkg0LfQsCDQv9C+0YHQu9C10LTQvdC40LUg0YHRgtC+INC70LXRgiDRgdGC0LDRgNGCINGB0LXQt9C+0L3QsC4g0JrRgNGD0L/QvdGL0LUg0L/QvtCx0LXQtNGLINGB0LzQtdC90Y/Qu9C4INC90LXQvtC20LjQtNCw0L3QvdGL0LUg0LHQtdC30LLQvtC70YzQvdGL0LUg0L/QvtGA0LDQttC10L3QuNGPLiDQktC+INCy0YDQtdC80Y8g0LfQuNC80L3QtdCz0L4g0YLRgNCw0L3RgdGE0LXRgNC90L7Qs9C+INC+0LrQvdCwINCg0L7QtNC20LXRgNGB0YMg0YPQtNCw0LvQvtGB0Ywg0YPRgdC40LvQuNGC0Ywg0LrQvtC80LDQvdC00YMg0LTQstGD0LzRjyDQv9GA0LjQvtCx0YDQtdGC0LXQvdC40Y/QvNC4OiDQsNC90LPQu9C40LnRgdC60LjQvCDQvdCw0L/QsNC00LDRjtGJ0LjQvCDQlNGN0L3QuNC10LvQvtC8INCh0YLQsNGA0YDQuNC00LbQtdC8INC4INCx0LvQsNC30LjQu9GM0YbQtdC8INCk0LjQu9C70LjQv9C/0LUg0JrQvtGD0YLQuNC90YzQvi4g0JIg0LjRgtC+0LPQtSDQutC+0LzQsNC90LTQsCDQt9Cw0LLQtdGA0YjQuNC70LAg0YHQtdC30L7QvSDQvdCwINGB0LXQtNGM0LzQvtC8INC80LXRgdGC0LUsINCy0L3QvtCy0Ywg0L3QuNC20LUgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0JfQuNC80L7QuSAyMDEzINCy0LXRgtC10YDQsNC9INC60LvRg9Cx0LAg0JTQttC10LnQvNC4INCa0LDRgNGA0LDQs9C10YAg0L7QsdGK0Y/QstC40Lsg0L4g0LfQsNCy0LXRgNGI0LXQvdC40Lgg0YHQstC+0LXQuSDQutCw0YDRjNC10YDRiyDQvdCwIFxcXCLQrdC90YTQuNC70LTQtVxcXCIuIDE5INC80LDRjyDQvtC9INC/0YDQvtCy0LXQuyDRgdCy0L7QuSDQv9C+0YHQu9C10LTQvdC40Lkg0L7RhNC40YbQuNCw0LvRjNC90YvQuSDQvNCw0YLRhyDQsiDQutGA0LDRgdC90L7QuSDRhNGD0YLQsdC+0LvQutC1INCyINC/0L7QsdC10LTQvdC+0Lwg0LTQu9GPIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINC80LDRgtGH0LUg0L/RgNC+0YLQuNCyIFxcXCLQmtGD0LjQvdC3INCf0LDRgNC6INCg0LXQudC90LTQttC10YDRgVxcXCIuXFxyXFxuICAgIDwvZGl2PjxociAvPjxpPlxcclxcbiAgICAgICAg0JjRgdGC0L7Rh9C90LjQujogbGZjb25saW5lLmNvbVxcclxcbiAgICAgICAg0J/QtdGA0LXQstC+0LQ6IHRhcy1uLXJcXHJcXG4gICAgPC9pPlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCI8cnVsZXM+XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcnVsZXMuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVzQ29tcG9uZW50IHtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICA8cD48Zm9udCBjb2xvcj1cXFwicmVkXFxcIj48Yj7QlNCw0L3QvdGL0LUg0L/RgNCw0LLQuNC70LAg0L3QtSDQv9C+0LTQu9C10LbQsNGCINC+0LHRgdGD0LbQtNC10L3QuNGOINC4INC+0LHRj9C30LDRgtC10LvRjNC90Ysg0LTQu9GPINCy0YvQv9C+0LvQvdC10L3QuNGPINCy0YHQtdC80Lgg0LHQtdC3INC40YHQutC70Y7Rh9C10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj9C80Lgg0L/QvtGA0YLQsNC70LAg0YDQsNC90LPQvtC8INC+0YIg0L/RgNC+0YHRgtC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LTQviDQvNC+0LTQtdGA0LDRgtC+0YDQsCAo0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDRiyAtINC60LDQuiDQu9C40YbQsCwg0Y3RgtC4INC/0YDQsNCy0LjQu9CwINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDRjtGJ0LjQtSAtINC/0L7RgdGC0YPQv9Cw0Y7RgiDQv9C+INGB0LLQvtC10LzRgyDRg9GB0LzQvtGC0YDQtdC90LjRjikuINCV0YHQu9C4INCy0LDQvCDQvdC1INC90YDQsNCy0Y/RgtGB0Y8g0Y3RgtC4INC/0YDQsNCy0LjQu9CwINC4INCy0Ysg0YXQvtGC0LjRgtC1INC00LvRjyDRgdC10LHRjyDQtNGA0YPQs9C40LUg0L/RgNCw0LLQuNC70LAgLSDQstGLINCy0YHQtdCz0LTQsCDQvNC+0LbQtdGC0LUg0YHQvtC30LTQsNGC0Ywg0YHQstC+0Lkg0YHQvtCx0YHRgtCy0LXQvdC90YvQuSDRgdCw0LnRgiDQuCDQtNC10LvQsNGC0Ywg0YLQsNC8INCy0YHQtSwg0YfRgtC+INCy0LDQvCDQvdGA0LDQstC40YLRgdGPLjwvYj48L2ZvbnQ+IDwvcD5cXHJcXG4gICAgPHA+0J/RgNCw0LLQuNC70LAg0LLQstC+0LTRj9GC0YHRjyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQutC+0LzRhNC+0YDRgtC90L7QuSDQuCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3QvtC5INCw0YLQvNC+0YHRhNC10YDRiyDQvtCx0YnQtdC90LjRjy4g0JXRgdC70Lgg0JLQsNGBINC90LUg0YPRgdGC0YDQsNC40LLQsNC10YIg0YPRgdGC0LDQvdC+0LLQu9C10L3QvdCw0Y8g0YTQvtGA0LzQsCDQvtCx0YnQtdC90LjRjywg0LLQvtC30LTQtdGA0LbQuNGC0LXRgdGMINC+0YIg0YPRh9Cw0YHRgtC40Y8g0LIg0LTQsNC90L3QvtC5INC60L7QvdGE0LXRgNC10L3RhtC40LguPC9wPlxcclxcbiAgICA8cD48Yj5JLiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LjwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QoNC10LPQuNGB0YLRgNC40YDRg9GP0YHRjCDQvdCwINGE0L7RgNGD0LzQtSwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGB0L7Qs9C70LDRiNCw0LXRgtGB0Y8g0LLRi9C/0L7Qu9C90Y/RgtGMINC00LDQvdC90YvQtSDQn9GA0LDQstC40LvQsC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCU0LvRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC90LAg0YTQvtGA0YPQvNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQtNC+0LvQttC10L0g0L/RgNC10LTQvtGB0YLQsNCy0LjRgtGMINC00LXQudGB0YLQstGD0Y7RidC40Lkg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YsuINCc0Ysg0LPQsNGA0LDQvdGC0LjRgNGD0LXQvCDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Ywg0YPQutCw0LfQsNC90L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LjwvbGk+XFxyXFxuICAgICAgICA8bGk+0JLRi9Cx0L7RgCDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAobmlja25hbWUpINGP0LLQu9GP0LXRgtGB0Y8g0LLQsNGI0LjQvCDQuNGB0LrQu9GO0YfQuNGC0LXQu9GM0L3Ri9C8INC/0YDQsNCy0L7QvC4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L7RgdGC0LDQstC70Y/QtdGCINC30LAg0YHQvtCx0L7QuSDQv9GA0LDQstC+INC/0YDQuNC90Y/RgtGMINC80LXRgNGLINC6INC/0YDQtdC60YDQsNGJ0LXQvdC40Y4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gbmlja25hbWUsINC10YHQu9C4INC10LPQviDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQvdCw0YDRg9GI0LDQtdGCINC+0LHRidC10L/RgNC40L3Rj9GC0YvQtSDQvNC+0YDQsNC70YzQvdGL0LUg0Lgg0Y3RgtC40YfQtdGB0LrQuNC1INC90L7RgNC80Ysg0LjQu9C4INGP0LLQu9GP0LXRgtGB0Y8g0L7RgdC60L7RgNCx0LjRgtC10LvRjNC90YvQvCDQtNC70Y8g0LTRgNGD0LPQuNGFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INGE0L7RgNGD0LzQsC4g0JfQsNC/0YDQtdGJ0LXQvdCwINGA0LXQs9C40YHRgtGA0LDRhtC40Y8gbmlja25hbWUsINGB0YXQvtC20LjRhSDRgSDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC80Lgg0LTQviDRgdGC0LXQv9C10L3QuCwg0LrQvtGC0L7RgNGL0LUg0LzQvtCz0YPRgiDQstCy0LXRgdGC0Lgg0LIg0LfQsNCx0LvRg9C20LTQtdC90LjQtSDQtNGA0YPQs9C40YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0YTQvtGA0YPQvNCwLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0JfQsNC/0YDQtdGJ0LXQvdCwINC90LXQvtC00L3QvtC60YDQsNGC0L3QsNGPINGA0LXQs9C40YHRgtGA0LDRhtC40Y8g0L7QtNC90LjQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCwg0LLQvdC1INC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDRhtC10LvQtdC5LCDRgSDQutC+0YLQvtGA0YvQvNC4INGC0LDQutCw0Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9GA0L7QstC+0LTQuNGC0YHRjy4g0JTQsNC90L3QvtC1INC90LDRgNGD0YjQtdC90LjQtSDRj9Cy0LvRj9C10YLRgdGPINC60YDQsNC50L3QtSDRgdC10YDRjNC10LfQvdGL0Lwg0Lgg0LLQtdC00LXRgiDQuiDQsdC70L7QutC40YDQvtCy0LDQvdC40Y4g0LLRgdC10YUg0YPRh9C10YLQvdGL0YUg0LfQsNC/0LjRgdC10LkuINCV0YHQu9C4INCy0LDQvCDQvdC1INC90YDQsNCy0LjRgtGB0Y8g0L3QuNC6LCDQvdCw0L/QuNGI0LjRgtC1INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQuSDRgNCw0LfQtNC10Lsg0YTQvtGA0YPQvNCwINC40LvQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNGDLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0JXRgdC70Lgg0LLRiyDQvdC1INC/0YDQvtGP0LLQu9GP0LXRgtC1INCw0LrRgtC40LLQvdC+0YHRgtGMINC90LAg0YTQvtGA0YPQvNC1INCyINGC0LXRh9C10L3QuNC1INC00LvQuNGC0LXQu9GM0L3QvtCz0L4g0LLRgNC10LzQtdC90LgsINCy0LDRiNCwINGD0YfQtdGC0L3QsNGPINC30LDQv9C40YHRjCDQvNC+0LbQtdGCINCx0YvRgtGMINGD0LTQsNC70LXQvdCwLjwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPjxiPklJLiDQndCwINCk0L7RgNGD0LzQtSA8Zm9udCBjb2xvcj1cXFwicmVkXFxcIj7Qt9Cw0L/RgNC10YnQtdC90L48L2ZvbnQ+OjwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L3QtdC90L7RgNC80LDRgtC40LLQvdGD0Y4g0LvQtdC60YHQuNC60YMg0LIg0LvRjtCx0YvRhSDQtdGRINC/0YDQvtGP0LLQu9C10L3QuNGP0YUsINCyINGC0L7QvCDRh9C40YHQu9C1INGB0L7QutGA0LDRidC10L3QvdGD0Y4g0LjQu9C4INC30LDQvNC10L3QtdC90L3Rg9GOIMKr0LfQstC10LfQtNC+0YfQutCw0LzQuMK7ICjQuNC70Lgg0LTRgNGD0LPQuNC80Lgg0YHQuNC80LLQvtC70LDQvNC4KSwg0L3QsCDRgNGD0YHRgdC60L7QvCwg0LDQvdCz0LvQuNC50YHQutC+0Lwg0Y/Qt9GL0LrQtSwg0LvQuNCx0L4g0YLRgNCw0L3RgdC70LjRgtC1LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiywg0YDQsNC90LXQtSDQvtCx0YHRg9C20LTQsNCy0YjQuNC10YHRjyDQsiDQpNC+0YDRg9C80LUuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGB0L7QvtCx0YnQtdC90LjRjywg0L3QtSDQuNC80LXRjtGJ0LjQtSDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0L7QsdGB0YPQttC00LDQtdC80L7QuSDRgtC10LzQtSAo0L7RhNGE0YLQvtC/0LjQuikuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLINC4INGB0L7QvtCx0YnQtdC90LjRjywg0LIg0LrQvtGC0L7RgNGL0YUg0LHQvtC70LXQtSDQv9C+0LvQvtCy0LjQvdGLINCy0YHQtdC5INC40L3RhNC+0YDQvNCw0YbQuNC4INC90LDQv9C40YHQsNC90L4g0JfQkNCT0JvQkNCS0J3Qq9Cc0Jgg0JHQo9Ca0JLQkNCc0JguIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLLCDQuNC80LXRjtGJ0LjQtSDQsiDQvdCw0LfQstCw0L3QuNC4INGD0LrRgNCw0YjQtdC90LjRjyAowqs9PT0tLS3QnNC+0Y8g0YLQtdC80LAtLS09PT3CuyksINC90LUg0L7RgtGA0LDQttCw0Y7RidC40LUg0YHRg9GC0Ywg0LLQvtC/0YDQvtGB0LAgKMKr0J/QvtGB0LzQvtGC0YDQuCDRgdGO0LTQsMK7INC40LvQuCDCq2ZkZ2w7ZmpkZ2w7ZmRqZ2xnZmTCuykuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLINGBINC+0LHRgNCw0YnQtdC90LjQtdC8INC6INC60L7QvdC60YDQtdGC0L3QvtC80YMg0YPRh9Cw0YHRgtC90LjQutGDINCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QlNGD0LHQu9C40YDQvtCy0LDRgtGMINGC0LXQvNGLLCDRgtC+INC10YHRgtGMINGA0LDQt9C80LXRidCw0YLRjCDQvtC00LjQvdCw0LrQvtCy0YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0LIg0YDQsNC30L3Ri9GFINGA0LDQt9C00LXQu9Cw0YUg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCn0YDQtdC30LzQtdGA0L3QvtC1INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INCz0YDQsNGE0LjRh9C10YHQutC40YUg0YHQvNCw0LnQu9C40LrQvtCyINCyINGB0L7QvtCx0YnQtdC90LjQuCAo0LHQvtC70LXQtSDRgtGA0LXRhSDQv9C+0LTRgNGP0LQpINC40LvQuCDQv9C+0LvQvdC+0YHRgtGM0Y4g0YHQvtGB0YLQvtGP0YnQtdC1INGC0L7Qu9GM0LrQviDQuNC3INGB0LzQsNC50LvQvtCyLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YPQsdC70LjQutCw0YbQuNGPINC/0L7RgdGC0L7Qsiwg0L3QtSDQvdC10YHRg9GJ0LjRhSDQt9C90LDRh9C40YLQtdC70YzQvdC+0Lkg0YHQvNGL0YHQu9C+0LLQvtC5INC90LDQs9GA0YPQt9C60LggKNGE0LvRg9C0KS4g0JfQsNC/0YDQtdGJ0LDQtdGC0YHRjyDQv9C40YHQsNGC0Ywg0LrQvtGA0L7RgtC60LjQtSDQsdC10YHRgdC80YvRgdC70LXQvdC90YvQtSDQv9C+0YHRgtGLINGC0LjQv9CwIFxcXCLQltCW0J7QqNCsXFxcIiDQuNC70LggXFxcItCf0JjQqNCYINCV0KnQnlxcXCIsINCwINGC0LDQutC20LUsINGB0L7RgdGC0L7Rj9GJ0LjQtSDQuNC3INC+0LTQvdC40YUg0YHQvNCw0LnQu9C+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINGB0L7QvtCx0YnQtdC90LjRj9GFINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7QstGC0L7RgNGP0Y7RidC40YXRgdGPINGB0LjQvNCy0L7Qu9C+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg0LrRgNCw0YHQvdC+0LPQviDRhtCy0LXRgtCwIOKAkyDRjdGC0L4g0L/RgNC40LLQuNC70LXQs9C40Y8g0LzQvtC00LXRgNCw0YLQvtGA0L7QsiDQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0K/Qt9GL0Log0YHQsNC50YLQsC3QoNCj0KHQodCa0JjQmS7QkdGD0LTRjNGC0LUg0LTQvtCx0YDRiyzQv9C40YjQuNGC0LUg0L3QsCDQvdC10Lwu0JrQvtCy0LXRgNC60LDQvdC40LUg0YHQu9C+0LIg0Lgg0L/RgNC10LTQvdCw0LzQtdGA0LXQvdC90L7QtSDQuNC30LLRgNCw0YnQtdC90LjQtSDQvtGA0YTQvtCz0YDQsNGE0LjQuCDRgNGD0YHRgdC60L7Qs9C+INGP0LfRi9C60LAsINCwINGC0LDQutC20LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LvQsNGC0LjQvdC40YbRiyAo0YLRgNCw0L3RgdC70LjRgtCwKS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QptC40YLQuNGA0L7QstCw0L3QuNC1INC/0YDQtdC00YvQtNGD0YnQuNGFINGB0L7QvtCx0YnQtdC90LjQuSwg0LXRgdC70Lgg0LIg0Y3RgtC+0Lwg0L3QtdGCINC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4ICjRhNC70LXQudC8KS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LPRgNGD0LHRi9C1LCDQvdC10YbQtdC90LfRg9GA0L3Ri9C1INCy0YvRgNCw0LbQtdC90LjRjyDQuCDQvtGB0LrQvtGA0LHQu9C10L3QuNGPINCyINC70Y7QsdC+0Lkg0YTQvtGA0LzQtS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0Lgg0YHQvtC+0LHRidC10L3QuNGPLCDRgdC+0LTQtdGA0LbQsNGJ0LjQtSDRgNC10LrQu9Cw0LzQvdGD0Y4sINCw0L3RgtC40YDQtdC60LvQsNC80L3Rg9GOINC40LvQuCDQutC+0LzQvNC10YDRh9C10YHQutGD0Y4g0LjQvdGE0L7RgNC80LDRhtC40Y4sINCwINGC0LDQuiDQttC1INGB0YHRi9C70LrQuCDQvdCwINGB0LDQudGC0Ysg0YEg0YbQtdC70YzRjiDQv9C+0LLRi9GI0LXQvdC40Y8g0LjRhSDQv9C+0YHQtdGJ0LDQtdC80L7RgdGC0LguIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC+0LTQvtC70LbQsNGC0Ywg0L7QsdGB0YPQttC00LDRgtGMINCy0L7Qv9GA0L7RgdGLINC40Lcg0YLQtdC8LCDQt9Cw0LrRgNGL0YLRi9GFINC40LvQuCDRg9C00LDQu9C10L3QvdGL0YUg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0L7QstC+0YbQuNGA0L7QstCw0YLRjCDQutC+0L3RhNC70LjQutGC0Ysg0YEg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLINC4INGB0L7QvtCx0YnQtdC90LjRjywg0L/RgNC+0YLQuNCy0L7RgNC10YfQsNGJ0LjQtSDQmtC+0L3RgdGC0LjRgtGD0YbQuNC4INC4INC30LDQutC+0L3QvtC00LDRgtC10LvRjNGB0YLQstGDINCg0KQuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINC60LDRh9C10YHRgtCy0LUg0YHRgtCw0YLRg9GB0LAg0LjQu9C4INC/0L7QtNC/0LjRgdC4INC90LXRhtC10L3Qt9GD0YDQvdGL0LUg0LjQu9C4INGA0YPQs9Cw0YLQtdC70YzQvdGL0LUg0YHQu9C+0LLQsCwg0LAg0YLQsNC6INC20LUg0LfQsNCy0LXQtNC+0LzQviDQvdC10LTQvtGB0YLQvtCy0LXRgNC90YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRji4gKNCd0LDQv9GA0LjQvNC10YAsINC/0LjRgdCw0YLRjCDQsiDRgdGC0LDRgtGD0YHQtSDCq9Cc0L7QtNC10YDQsNGC0L7RgMK7LCDQutC+0LPQtNCwINC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDQktGLINGC0LDQutC+0LLRi9C8INC90LUg0Y/QstC70Y/QtdGC0LXRgdGMKS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINC/0L7QtNC/0LjRgdC4INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INCx0L7Qu9C10LUgMi3RhSDRgdGC0YDQvtGH0LXQuiDQuCDQvdC1INCx0L7Qu9C10LUgMjAwINGB0LjQvNCy0L7Qu9C+0LIuINCc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIC0gXFxcIjJcXFwiLiDQn9C+0LTQv9C40YHRjCDQvdC1INC00L7Qu9C20L3QsCDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQtdC60YHRgtCwLCDQstGL0LTQtdC70LXQvdC90L7Qs9C+INC60YDQsNGB0L3Ri9C8INGG0LLQtdGC0L7QvC4g0KDQsNC30LzQtdGAINC60LDRgNGC0LjQvdC60Lgg0LIg0LLQsNGI0LXQuSDQv9C+0LTQv9C40YHQuCDQtNC+0LvQttC10L0g0YPQtNC+0LLQu9C10YLQstC+0YDRj9GC0Ywg0YHQu9C10LTRg9GO0YnQuNC8INGC0YDQtdCx0L7QstCw0L3QuNGP0Lw6XFxyXFxuICAgICAgICAgICAgLSDRgNCw0LfQvNC10YAgLSDQvdC1INCx0L7Qu9C10LUgMzUw0YU2MCDQv9C40LrRgdC10LvQtdC5INGB0YPQvNC80LDRgNC90L5cXHJcXG4gICAgICAgICAgICAtINC+0LHRitC10LwgLSDQvdC1INCx0L7Qu9C10LUgNDAg0LrQsSDRgdGD0LzQvNCw0YDQvdC+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1INCw0LLQsNGC0LDRgNCwLCDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQuNC70Lgg0LIg0LrQsNGH0LXRgdGC0LLQtSDQstC70L7QttC10L3QuNC1INCyINGB0L7QvtCx0YnQtdC90LjRjyDQutCw0YDRgtC40L3QutC4INC/0L7RgNC90L7Qs9GA0LDRhNC40YfQtdGB0LrQvtCz0L4sINGN0LrRgdGC0YDQtdC80LjRgdGC0YHQutC+0LPQviDQuNC70Lgg0L7RgdC60L7RgNCx0LjRgtC10LvRjNC90L7Qs9C+INGF0LDRgNCw0LrRgtC10YDQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0L7Qv9Cw0LPQsNC90LTQuNGA0L7QstCw0YLRjCDQu9GO0LHRi9C1INC90LDRgNC60L7RgtC40YfQtdGB0LrQuNC1INC4INC/0YHQuNGF0L7RgtGA0L7Qv9C90YvQtSDQstC10YnQtdGB0YLQstCwINC4INC+0LHRgNCw0Lcg0LbQuNC30L3QuCwg0YHQstGP0LfQsNC90L3Ri9C5INGBINGD0L/QvtGC0YDQtdCx0LvQtdC90LjQtdC8INC00LDQvdC90YvRhSDQstC10YnQtdGB0YLQsiwg0LAg0YLQsNC6INC20LUg0L/RgNC+0L/QsNCz0LDQvdC00LjRgNC+0LLQsNGC0Ywg0YHRg9C40YbQuNC0LCDRgNCw0YHQvtCy0YPRjiDQuCDRgNC10LvQuNCz0LjQvtC30L3Rg9GOINC90LXQvdCw0LLQuNGB0YLRjCwg0YTQsNGI0LjQt9C8INC4INC90LDRhtC40LfQvC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQt9Cw0LLQtdC00L7QvNC+INC/0L7RhdC+0LbQuNGFINC90LjQutC+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JLRi9C/0YDQsNGI0LjQstCw0L3QuNC1INC/0YDQuNCx0LDQstC70LXQvdC40Y8g0YDQtdC/0YPRgtCw0YbQuNC4LCDQsCDRgtCw0Log0LbQtSDQv9C+0LTQvdC40LzQsNGC0Ywg0LjQu9C4INGB0L3QuNC20LDRgtGMINGA0LXQv9GD0YLQsNGG0LjRjiDQsdC10Lcg0L/RgNC40YfQuNC90YsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J7QsdGB0YPQttC00LDRgtGMINC00LXQudGB0YLQstC40Y8g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lgg0LIg0YDQsNC30LTQtdC70LDRhSDQpNC+0YDRg9C80LAuINCV0YHQu9C4INCS0Ysg0L3QtdC00L7QstC+0LvRjNC90Ysg0LTQtdC50YHRgtCy0LjRj9C80Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LgsINGC0L4g0LLRi9GB0LrQsNC30YvQstCw0LnRgtC1INGB0LLQvtC4INC/0YDQtdGC0LXQvdC30LjQuCDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lgg0YEg0L8uIDQuMS00LjIg0L3QsNGB0YLQvtGP0YnQuNGFINCf0YDQsNCy0LjQuy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0J/QoSAo0J/QtdGA0YHQvtC90LDQu9GM0L3Ri9C1INCh0L7QvtCx0YnQtdC90LjRjykg0LTQu9GPINC80LDRgdGB0L7QstC+0Lkg0YDQsNGB0YHRi9C70LrQuCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQu9GO0LHQvtCz0L4g0YDQvtC00LAgKNGA0LXQutC70LDQvNCwLCBcXFwi0L/QuNGB0YzQvNCwINGB0YfQsNGB0YLRjNGPXFxcIiDQuCDRgi7Qvy4pIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J3QsNGA0YPRiNCw0YLRjCDQsNCy0YLQvtGA0YHQutC40LUg0L/RgNCw0LLQsCAo0YPQutCw0LfRi9Cy0LDQudGC0LUg0YHRgdGL0LvQutC4INC90LAg0JDQktCi0J7QoNCQICjQuNGB0YLQvtGH0L3QuNC6KSwg0L7RgtC60YPQtNCwINCx0YvQu9C4INCy0LfRj9GC0Ysg0LLRi9C70L7QttC10L3QvdGL0LUg0YHRgtCw0YLRjNC4KSDQuNC70Lgg0YXQvtGC0Y8g0LHRiyDQv9C40YjQuNGC0LUsINGH0YLQviDQsNCy0YLQvtGA0YHRgtCy0L4g0L/RgNC40L3QsNC00LvQtdC20LjRgiDQvdC1INCS0LDQvC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qo9C60LDQt9Cw0L3QuNC1INCyINC40LzQtdC90Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQv9C+0LTQv9C40YHQuCwg0Lgg0LTRgNGD0LPQuNGFINC/0L7Qu9GP0YUgVVJMINCw0LTRgNC10YHQvtCyINC60L7QvNC80LXRgNGH0LXRgdC60LjRhSDQuNC90YLQtdGA0L3QtdGCLdC/0YDQvtC10LrRgtC+0LIsINGBINGG0LXQu9GM0Y4g0YDQtdC60LvQsNC80Ysg0Lgg0L/QvtCy0YvRiNC10L3QuNGPINC40L3QtNC10LrRgdCwINGG0LjRgtC40YDQvtCy0LDQvdC40Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtGB0L7QsdC+0Lkg0LTQvtCz0L7QstC+0YDQtdC90L3QvtGB0YLQuCDRgSDQkNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5INC/0L7RgNGC0LDQu9CwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCe0YHQutC+0YDQsdC70LXQvdC40LUg0LjQs9GA0L7QutC+0LIg0LrQu9GD0LHQsCzRgtGA0LXQvdC10YDRgdC60L7Qs9C+INGI0YLQsNCx0LAs0LAg0YLQsNC60LbQtSDQtNGA0YPQs9C40YUg0LrQu9GD0LHQvtCyINC4INC40YUg0LjQs9GA0L7QutC+0LIu0JLRi9GA0LDQttC10L3QuNC1INGB0LLQvtC10Lkg0L3QtdC/0YDQuNGP0LfQvdC4INC00L7Qv9GD0YHRgtC40LzQvizQvdC+INCyINGA0LDQvNC60LDRhSDQtNC+0L/Rg9GB0YLQuNC80L7Qs9C+IDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICA8bGk+0J/Rg9Cx0LvQuNGH0L3QviDQv9GA0LXQtNGK0Y/QstC70Y/RgtGMINC/0YDQtdGC0LXQvdC30LjQuCDQuCDQvtCx0YHRg9C20LTQsNGC0Ywg0LTQtdC50YHRgtCy0LjRjyDQv9C10YDQtdCy0L7QtNGH0LjQutC+0LIg0Lgg0YDQtdC00LDQutGC0L7RgNC+0LIg0YHQsNC50YLQsC4g0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INGA0LXRgdGD0YDRgdCwLCDQvdC10YHQvtCz0LvQsNGB0L3Ri9C1INGBINC/0YPQsdC70LjQutCw0YbQuNGP0LzQuCDQv9C10YDQtdCy0L7QtNC+0LIg0YHRgtCw0YLQtdC5INC4INC80LDRgtC10YDQuNCw0LvQvtCyINC80L7Qs9GD0YIg0LLRi9GB0LrQsNC30LDRgtGMINGB0LLQvtGRINC90LXRgdC+0LPQu9Cw0YHQuNC1INCyINC70LjRh9C90L7QvCDRgdC+0L7QsdGJ0LXQvdC40Lgg0LjQu9C4INCyINGC0LXQvNC1INC90LAg0YTQvtGA0YPQvNC1INGB0LDQudGC0LAgLSA8Yj7QltCw0LvQvtCx0Ys8L2I+LiA8L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD48Yj5JSUkuINCe0LHRidC40LUg0YDQtdC60L7QvNC10L3QtNCw0YbQuNC4INC+INGB0L7QstC10YLRiy4gPC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCd0LUg0L7QsdGA0LDRidCw0LnRgtC1INCy0L3QuNC80LDQvdC40Y8g0L3QsCDRhdGD0LvQuNCz0LDQvdC+0LIuINCd0LUg0L7RgtCy0LXRh9Cw0LnRgtC1INC40LwsINC00LDQttC1INC10YHQu9C4INCS0Ysg0YHRh9C40YLQsNC10YLQtSwg0YfRgtC+INCS0LDRgSDQvtGB0LrQvtGA0LHQuNC70LgsINC90LUg0L/QvtC00LTQsNCy0LDQudGC0LXRgdGMINC90LAg0L/RgNC+0LLQvtC60LDRhtC40LguINCU0L7RgdGC0LDRgtC+0YfQvdC+INGB0L7QvtCx0YnQuNGC0Ywg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lgg0L7QsSDQvtGB0LrQvtGA0LHQu9C10L3QuNC4INC4INCy0LjQvdC+0LLQvdGL0LUg0LHRg9C00YPRgiDQvdCw0LrQsNC30LDQvdGLLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCSINGC0L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INCS0Ysg0YHRh9C40YLQsNC10YLQtSwg0YfRgtC+INC90LDRgNGD0YjQtdC90Ysg0J/RgNCw0LLQuNC70LAg0KTQvtGA0YPQvNCwLCDQv9C+0YHRgtCw0YDQsNC50YLQtdGB0Ywg0YHRgNCw0LfRgyDQttC1INGB0L7QvtCx0YnQuNGC0Ywg0L7QsSDRjdGC0L7QvCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHRgtCw0YDQsNC50YLQtdGB0Ywg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg0LbQsNGA0LPQvtC9LCDRgi7Qui4g0L3QtdC60L7RgtC+0YDRi9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQvNC+0LPRg9GCINC90LUg0L/RgNCw0LLQuNC70YzQvdC+INC10LPQviDRgNCw0YHRgtC+0LvQutC+0LLQsNGC0YwuPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9C+0YHRgtCw0YDQsNC50YLQtdGB0Ywg0L3QtSDQv9C40YHQsNGC0Ywg0LHQtdC30L7RgdC90L7QstCw0YLQtdC70YzQvdGL0LUg0YPRgtCy0LXRgNC20LTQtdC90LjRjywg0LAg0YLQsNC6INC20LUg0YHQvtC+0LHRidC10L3QuNGPINGC0LjQv9CwIMKr0LLRi9C60LjQvdGMINGN0YLRgyDQsdGP0LrRgywg0L/QvtGB0YLQsNCy0Ywg0YXQvtGA0L7RiNGD0Y4g0LLQtdGJ0YzCuy4g0JXRgdC70Lgg0Y3RgtC+INCS0LDRiNC1INC70LjRh9C90L4g0LzQvdC10L3QuNC1LCDQvdC1INC30LDQsdGD0LTRjNGC0LUg0YHQvtC+0LHRidC40YLRjCDQvtCxINGN0YLQvtC8INC30LDRgNCw0L3QtdC1IOKAkyDQv9GA0L7RgdGC0L7Qs9C+IMKr0JjQnNCl0J7CuyAo0L7RgiDQsNC90LPQuy4g4oCcaW1ob+KAnSwg0YfRgtC+INCyINC/0LXRgNC10LLQvtC00LUg0L7Qt9C90LDRh9Cw0LXRgiDCq9C/0L4g0LzQvtC10LzRgyDRgdC60YDQvtC80L3QvtC80YMg0LzQvdC10L3QuNGOwrspINCx0YPQtNC10YIg0LTQvtGB0YLQsNGC0L7Rh9C90L4uINCf0L7QvNC90LjRgtC1LCDRh9GC0L4g0L/QvtGB0LvQtSDQvdC10YHQutC+0LvRjNC60LjRhSDQvdC10LDRgNCz0YPQvNC10L3RgtC40YDQvtCy0LDQvdC90YvRhSDRg9GC0LLQtdGA0LbQtNC10L3QuNC5LCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L/RgNC+0YHRgtC+INC/0LXRgNC10YHRgtCw0L3Rg9GCINCS0LDQvCDQtNC+0LLQtdGA0Y/RgtGMLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQtdC20LTQtSDRh9C10Lwg0YHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGDLCDRg9Cx0LXQtNC40YLQtdGB0YwsINGH0YLQviDQktGLINGB0L7Qt9C00LDQtdGC0LUg0LXRkSDQsiDQvdGD0LbQvdC+0Lwg0KDQsNC30LTQtdC70LUg0KTQvtGA0YPQvNCwLiDQn9C+0LzQvdC40YLQtSwg0YfRgtC+INGC0LXQvNGLLCDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQtSDRgtC10LzQsNGC0LjQutC1INCg0LDQt9C00LXQu9CwLCDQsdGD0LTRg9GCINC70LjQsdC+INGD0LTQsNC70LXQvdGLLCDQu9C40LHQviDQv9C10YDQtdC90LXRgdC10L3RiyDQsiDQtNGA0YPQs9C+0Lkg0KDQsNC30LTQtdC7INCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0L7Rh9GC0LjRgtC1INGC0LXQvNGDINGG0LXQu9C40LrQvtC8ISDQn9C+0YHRgtGLINCyINGB0LXRgNC10LTQuNC90LUg0YLQtdC80YsgLSBcXFwi0JAg0L4g0YfQtdC8INGN0YLQviDQstGLLCDQsD8gXFxcIiDQuNC70LggXFxcItCi0LDQuiDRjyDQvdC1INC/0L7QvdGP0LsgLSDQvtGC0LrRg9C00LAg0LrQsNGH0LDRgtGMP1xcXCIg0LfQsNC/0YDQtdGJ0LXQvdGLLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0YLQsNGA0LDQudGC0LXRgdGMINC90LUg0LTQtdC70LDRgtGMINCz0YDQsNC80LzQsNGC0LjRh9C10YHQutC40YUg0L7RiNC40LHQvtC6INCyINGB0L7QvtCx0YnQtdC90LjRj9GFIOKAkyDRjdGC0L4g0YHQvtC30LTQsNGB0YIg0L3QtdCz0LDRgtC40LLQvdC+0LUg0LLQv9C10YfQsNGC0LvQtdC90LjQtSDQviDQstCw0YEuPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+PGI+SVYuINCe0YLQvdC+0YjQtdC90LjRjyDQvNC10LbQtNGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj9C80Lgg0Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuS48L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0JIg0YHQstC+0LjRhSDQtNC10LnRgdGC0LLQuNGP0YUg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0YTQvtGA0YPQvNCwINGA0YPQutC+0LLQvtC00YHRgtCy0YPQtdGC0YHRjyDQt9C00YDQsNCy0YvQvCDRgdC80YvRgdC70L7QvCDQuCDQstC90YPRgtGA0LXQvdC90LjQvNC4INC/0YDQsNCy0LjQu9Cw0LzQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDRhNC+0YDRg9C80L7QvC48L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgINCe0LHRgdGD0LbQtNC10L3QuNC1INC00LXQudGB0YLQstC40Lkg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LggKNCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7QsiDQuCDQvNC+0LTQtdGA0LDRgtC+0YDQvtCyINGE0L7RgNGD0LzQsCkg0LrQsNGC0LXQs9C+0YDQuNGH0LXRgdC60Lgg0LfQsNC/0YDQtdGJ0LDQtdGC0YHRjyDQsiDQu9GO0LHRi9GFINGE0L7RgNGD0LzQsNGFINC4INGC0LXQvNCw0YUsINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDRgdC/0LXRhtC40LDQu9C40LfQuNGA0L7QstCw0L3QvdC+0LPQviDRhNC+0YDRg9C80LAgLSA8Yj7QltCw0LvQvtCx0Ys8L2I+Ljxicj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPtCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC+0YHRgtCw0LLQu9GP0LXRgiDQt9CwINGB0L7QsdC+0Lkg0L/RgNCw0LLQviDQuNC30LzQtdC90Y/RgtGMINC/0YDQsNCy0LjQu9CwINCx0LXQtyDRg9Cy0LXQtNC+0LzQu9C10L3QuNC10Lwg0L7QsSDRjdGC0L7QvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDRhNC+0YDRg9C80LAuINCS0YHQtSDQuNC30LzQtdC90LXQvdC40Y8g0Lgg0L3QvtCy0LDRhtC40Lgg0L3QsCDRhNC+0YDRg9C80LUg0L/RgNC+0LjQt9Cy0L7QtNGP0YLRgdGPINGBINGD0YfQtdGC0L7QvCDQvNC90LXQvdC40Lkg0Lgg0LjQvdGC0LXRgNC10YHQvtCyINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LjwvcD5cXHJcXG4gICAgPHAgYWxpZ249XFxcInJpZ2h0XFxcIj48Yj7QoSDRg9Cy0LDQttC10L3QuNC10LwsINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINGB0LDQudGC0LAuPC9iPjwvcD5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFkbWluU2VydmljZSB9IGZyb20gXCIuLi9hZG1pbi9hZG1pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicmlnaHQtc2lkZWJhclwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3JpZ2h0U2lkZWJhci5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlnaHRTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByb2xlczogSVJvbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQWRtaW5TZXJ2aWNlLCBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRXBsVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC51cGRhdGVFcGxUYWJsZSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIlwiKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkbWluU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiYWRtaW4vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIEdldEFsbCA9ICgpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPE5ld3M+PiA9PiB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gcHVibGljIEdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZXdzPiA9PiB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICB1cGRhdGVFcGxUYWJsZSA9ICgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwidXBkYXRlVGFibGUvXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vYWRtaW4uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb250YWluZXItZmx1aWRcXFwiIHVpLXZpZXc9XFxcInJpZ2h0Q29udGFpbmVyXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImNvbC1zeC0xMlxcXCIgKm5nSWY9XFxcInJvbGVzLmlzQWRtaW5Bc3Npc3RhbnRcXFwiPjxhIChjbGljayk9XFxcInVwZGF0ZUVwbFRhYmxlKClcXFwiPtCe0LHQvdC+0LLQuNGC0Ywg0YLQsNCx0LvQuNGG0YM8L2E+PC9zcGFuPlxcclxcbiAgICA8ZXBsLXRhYmxlPjwvZXBsLXRhYmxlPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3J1bVNlY3Rpb25Sb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJmb3J1bVwiLCBjb21wb25lbnQ6IEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQgfSwgXHJcbiAgIC8vIHsgcGF0aDogXCJjb25maXJtRW1haWxcIiwgY29tcG9uZW50OiBDb25maXJtRW1haWxDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24ucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL2ZvcnVtU2VjdGlvbi5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9mb3J1bVNlY3Rpb24uc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vaW5kZXgudHMiLCJpbXBvcnQgeyBGb3J1bVN1YnNlY3Rpb24gfSBmcm9tIFwiLi4vZm9ydW1TdWJzZWN0aW9uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ydW1TZWN0aW9uIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzdWJzZWN0aW9uczogRm9ydW1TdWJzZWN0aW9uW107XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IEZvcnVtU2VjdGlvbiB9IGZyb20gXCIuL2ZvcnVtU2VjdGlvbi5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ydW1TZWN0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiZm9ydW1TZWN0aW9uL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCA9ICgpOiBPYnNlcnZhYmxlPEZvcnVtU2VjdGlvbltdPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgfTtcclxuXHJcbiAgICAvLyBwdWJsaWMgR2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5ld3M+ID0+IHtcclxuICAgIC8vICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAvLyAgY3JlYXRlID0gKGl0ZW06IEZvcnVtU2VjdGlvbik6IE9ic2VydmFibGU8U2lnbnVwPiA9PiB7XHJcbiAgLy8gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwgKyBcInJlZ2lzdGVyL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuIC8vICAgfTtcclxuXHJcbiAgICAvLyBjb25maXJtRW1haWwgPSAodXNlcklkOiBudW1iZXIsIGNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgY29uZmlybUVtYWlsP3VzZXJJZD0ke3VzZXJJZH0mY29kZT0ke2NvZGV9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcnVtU2VjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3J1bVNlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3J1bVNlY3Rpb24gfSBmcm9tIFwiLi9mb3J1bVNlY3Rpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJmb3J1bVNlY3Rpb24tbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXRlbXM6IEZvcnVtU2VjdGlvbltdO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEZvcnVtU2VjdGlvblNlcnZpY2UsIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLml0ZW1zID0gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIlwiKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCIgKm5nRm9yPVxcXCJsZXQgc2VjdGlvbiBvZiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJzZWN0aW9uLnN1YnNlY3Rpb25zLmxlbmd0aCA+IDAgfHwgcm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcInNlY3Rpb24ubmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIHVpLXNyZWY9XFxcInN1YnNlY3Rpb25FZGl0KHtzZWN0aW9uSWQ6IHNlY3Rpb24uaWR9KVxcXCI+0JTQvtCx0LDQstC40YLRjCDQv9C+0LTRgdC10LrRhtC40Y48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCIgW2hpZGRlbl09XFxcInNlY3Rpb24uc3Vic2VjdGlvbnMubGVuZ3RoICE9IDBcXFwiIG5nLWNsaWNrPVxcXCJ2bS5yZW1vdmVTZWN0aW9uKCRpbmRleClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+PC8hLS1kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiAqbmdGb3I9XFxcImxldCBzdWJzZWN0aW9uIG9mIHNlY3Rpb24uc3Vic2VjdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBsaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcInN1YnNlY3Rpb24oe2lkOiBzdWJzZWN0aW9uLmlkfSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcInN1YnNlY3Rpb24ubmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzbWFsbFxcXCIgW3RleHRDb250ZW50XT1cXFwic3Vic2VjdGlvbi5kZXNjcmlwdGlvblxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxhIG5nLWNsaWNrPVxcXCJ2bS5hZGRTZWN0aW9uKClcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0YHQtdC60YbQuNGOPC9hPlxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9uZy10ZW1wbGF0ZVxcXCIgaWQ9XFxcImFkZFNlY3Rpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5AQ29tbW9uTWVzc2FnZXMuQWRkU2VjdGlvbjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImFkZFNlY3Rpb25cXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdTZWN0aW9uTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPkBDb2xvbnNNZXNzYWdlcy5TZWN0aW9uTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmV3U2VjdGlvbk5hbWVcXFwiIG5nLW1vZGVsPVxcXCJ2bS5zZWN0aW9uTmFtZVxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImFkZFNlY3Rpb24uJGludmFsaWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPkBDb21tb25NZXNzYWdlcy5BZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPkBDb21tb25NZXNzYWdlcy5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwibW9kYWxEZWxldGVDb25maXJtYXRpb24uaHRtbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5AQ29tbW9uTWVzc2FnZXMuRGVsZXRlQ29uZmlybWF0aW9uPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgQENvbW1vbk1lc3NhZ2VzLkRlbGV0ZT9cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPkBDb21tb25NZXNzYWdlcy5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPkBDb21tb25NZXNzYWdlcy5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBXaXNoTGlzdENvbXBvbmVudCwgV2lzaEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpc2hSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJ3aXNoXCIsIGNvbXBvbmVudDogV2lzaExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ3aXNoLzppZC9lZGl0XCIsIGNvbXBvbmVudDogV2lzaEVkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vd2lzaC5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93aXNoVHlwZS5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93aXNoLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dpc2gtZWRpdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2lzaC5zZXJ2aWNlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBXaXNoIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIFdpc2hUeXBlIHtcclxuICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoVHlwZS5tb2RlbC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXaXNoIH0gZnJvbSBcIi4vd2lzaC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaXNoU2VydmljZSB9IGZyb20gXCIuL3dpc2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIndpc2gtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lzaExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW1zOiBXaXNoW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBXaXNoU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zWydwYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICtwYXJhbXNbJ3BhZ2UnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zWydjYXRlZ29yeUlkJ107XHJcbiAgICAgICAgLy8gICAgdGhpcy51c2VyTmFtZSA9IHBhcmFtc1sndXNlck5hbWUnXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8V2lzaD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvL2xldCBmaWx0ZXJzID0gbmV3IE1hdGVyaWFsRmlsdGVycygpO1xyXG4gICAgICAgIC8vZmlsdGVycy5jYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yeUlkO1xyXG4gICAgICAgIC8vZmlsdGVycy5tYXRlcmlhbFR5cGUgPSBcIk5ld3NcIjtcclxuICAgICAgICAvL2ZpbHRlcnMudXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgIC8vZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbCgpLy9idWdcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgbG9hZCBsaXN0IHdpc2hcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGVDbGFzcyhpKSB7XHJcbiAgICAgICAgc3dpdGNoIChpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLWRhbmdlclwiO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC13YXJuaW5nXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLWluZm9cIjtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBXaXNoLCBXaXNoVHlwZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lzaFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIndpc2gvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEFsbCA9ICgpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPFdpc2g+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBHZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8V2lzaD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBDcmVhdGUgPSAoaXRlbTogV2lzaCk6IE9ic2VydmFibGU8V2lzaD4gPT4ge1xyXG4gICAgICAgIC8vIHZhciB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHsgSXRlbU5hbWU6IGl0ZW0gfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IFdpc2gpOiBPYnNlcnZhYmxlPFdpc2g+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBEZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgR2V0VHlwZXMgPSAoKTogT2JzZXJ2YWJsZTxXaXNoVHlwZVtdPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcInR5cGVzL1wiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4tLT4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3dpc2gnLCAwLCAnZWRpdCddXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgd2lzaCBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0VHlwZUNsYXNzKHdpc2gudHlwZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCcsIHdpc2guaWQsICdlZGl0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIndpc2gudGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb2wteHMtMSBjb2wtc20tMSBwdWxsLXJpZ2h0XFxcIiBzZWN1cmVkPVxcXCJBZG1pbkZ1bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJ2bS5kZWxldGUoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIndpc2gubWVzc2FnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJ3aXNoLnR5cGVOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLXVpYi1wYWdpbmF0aW9uIG5nLXNob3c9XFxcInZtLnRvdGFsSXRlbXMgPiB2bS5pdGVtUGVyUGFnZVxcXCIgdG90YWwtaXRlbXM9XFxcInZtLnRvdGFsSXRlbXNcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wYWdlXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmdvVG9QYWdlKClcXFwiPjwvIS0tdWliLXBhZ2luYXRpb24tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgV2lzaCB9IGZyb20gXCIuL3dpc2gubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lzaFR5cGUgfSBmcm9tIFwiLi93aXNoVHlwZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaXNoU2VydmljZSB9IGZyb20gXCIuL3dpc2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ3aXNoLWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93aXNoLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpc2hFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICB0eXBlczogV2lzaFR5cGVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFdpc2hTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3RpdGxlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0eXBlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuR2V0U2luZ2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIGdldCAgbmV3c1wiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgV2lzaCgpO1xyXG4gICAgICAgIG1vZGVsLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBtb2RlbC5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwudGl0bGUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1widGl0bGVcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwudHlwZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0eXBlXCJdLnZhbHVlOyBcclxuXHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5VcGRhdGUodGhpcy5pZCwgbW9kZWwpLnN1YnNjcmliZShkYXRhID0+IHJlcyA9IGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UuQ3JlYXRlKG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiByZXMgPSBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93aXNoXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLkdldFR5cGVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMudHlwZXMgPSBkYXRhKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGNvbC1tZC0xMlxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwiZWRpdFdpc2hcXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Ql9Cw0LPQvtC70L7QstC+0Lo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj7QotC40L86PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5ld3NDYXRlZ29yeUlkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndHlwZSddXFxcIj48L3NlbGVjdD4tLT5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0eXBlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XFxcInR5cGUuaWRcXFwiICpuZ0Zvcj1cXFwibGV0IHR5cGUgb2YgdHlwZXNcXFwiIFt0ZXh0Q29udGVudF09XFxcInR5cGUubmFtZVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtC30LTQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWF0ZXJpYWxDb21tZW50Um91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50XCIsIGNvbXBvbmVudDogTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudC9saXN0XCIsIGNvbXBvbmVudDogTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudC9saXN0LzpwYWdlXCIsIGNvbXBvbmVudDogTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm1hdGVyaWFsQ29tbWVudC9saXN0LzpwYWdlLzpjYXRlZ29yeUlkXCIsIGNvbXBvbmVudDogTWF0ZXJpYWxDb21tZW50TGlzdENvbXBvbmVudCB9LFxyXG4gICAvLyB7IHBhdGg6IFwibmV3cy86aWRcIiwgY29tcG9uZW50OiBOZXdzRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgLy8gIHsgcGF0aDogXCJuZXdzLzppZC9lZGl0XCIsIGNvbXBvbmVudDogTmV3c0VkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L2luZGV4LnRzIiwiZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tbWVudCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgYWRkaXRpb25UaW1lOiBEYXRlO1xyXG4gICAgYXV0aG9yVXNlck5hbWU6IHN0cmluZztcclxuICAgIGF1dGhvcklkOiBudW1iZXI7XHJcbiAgICBwaG90bzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgYW5zd2VyOiBzdHJpbmc7XHJcbiAgICBtYXRlcmlhbElkOiBudW1iZXI7XHJcbiAgICBjaGlsZHJlbjogTWF0ZXJpYWxDb21tZW50W107XHJcbiAgICBpc1ZlcmlmaWVkOiBib29sZWFuO1xyXG4gICAgcGFyZW50SWQ6IG51bWJlcjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQubW9kZWwudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudCB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1hdGVyaWFsQ29tbWVudC1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpdGVtczogTWF0ZXJpYWxDb21tZW50W107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gICAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlOiBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UpIHtcclxuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBsZXQgbmV3VXJsID0gYG1hdGVyaWFsQ29tbWVudC9saXN0LyR7dGhpcy5wYWdlfWA7XHJcbiAgICAgLy8gICBpZiAodGhpcy5jYXRlZ29yeUlkKSB7XHJcbiAgICAvLyAgICAgICAgbmV3VXJsID0gYCR7bmV3VXJsfS8ke3RoaXMuY2F0ZWdvcnlJZH1gO1xyXG4gICAgLy8gICAgfVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKHRoaXMucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgbG9hZCBjb21tZW50IGxpdHNcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8TWF0ZXJpYWxDb21tZW50Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZ5KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAudmVyaWZ5KHRoaXMuaXRlbXNbaW5kZXhdLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gcmVzdWx0ID0gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0uaXNWZXJpZmllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUluZGV4XS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1JbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlbGV0ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcclxuICAgIC8vICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5kZWxldGUodGhpcy5pdGVtc1tpbmRleF0uaWQpLnN1YnNjcmliZShkYXRhID0+IGRhdGEsXHJcbiAgICAvLyAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgLy8gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyByZW1vdmUgY2F0ZWdvcnl1XCIpKTtcclxuICAgIC8vICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnQgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwV3JhcHBlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21tZW50U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwibWF0ZXJpYWxDb21tZW50L1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCA9IChwYWdlOiBudW1iZXIpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPE1hdGVyaWFsQ29tbWVudD4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIHBhZ2UpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEFsbEJ5TWF0ZXJpYWwgPSAocGFnZTogbnVtYmVyLCBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxNYXRlcmlhbENvbW1lbnQ+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcIm1hdGVyaWFsL1wiICsgaWQgKyBcIi9saXN0L1wiICsgcGFnZSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE1hdGVyaWFsQ29tbWVudD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBNYXRlcmlhbENvbW1lbnQpOiBPYnNlcnZhYmxlPE1hdGVyaWFsQ29tbWVudD4gPT4geyAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsICsgXCJOZXdzL1wiLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogTWF0ZXJpYWxDb21tZW50KTogT2JzZXJ2YWJsZTxNYXRlcmlhbENvbW1lbnQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZlcmlmeSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcInZlcmlmeS9cIiArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPCEtLWRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4gPCEtLXRvZG8gbWFnaWMgbnVtYmVyLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHVpLXNyZWY9XFxcIndpc2hFZGl0KClcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXYtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiICpuZ0Zvcj1cXFwibGV0IGNvbW1lbnQgb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIiBuZy1jbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIGNvbW1lbnQuYXV0aG9ySWRdXFxcIj48c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJjb21tZW50LmF1dGhvclVzZXJOYW1lXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc01vZGVyYXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW2hpZGRlbl09XFxcImNvbW1lbnQuaXNWZXJpZmllZFxcXCIgKGNsaWNrKT1cXFwidmVyaWZ5KGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93RGVsZXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcImNvbW1lbnQubWVzc2FnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJjb21tZW50LmFkZGl0aW9uVGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8cGFnaW5hdGlvbiAqbmdJZj1cXFwiaXRlbXNcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dFRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdFRleHQ9XFxcIjFcXFwiIGxhc3RUZXh0PVxcXCJ0b3RhbEl0ZW1zL2l0ZW1zUGVyUGFnZVxcXCI+PC9wYWdpbmF0aW9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnQgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50U2VydmljZSB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21tZW50c1wiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGVyaWFsQ29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbW1lbnRTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpdGVtczogTWF0ZXJpYWxDb21tZW50W10gPSBbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgICBjb21tZW50Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgLy9zZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgbWF0ZXJpYWxJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY2FuQ29tbWVudGFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlOiBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2VcclxuICAgICAgICAsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7ICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlczsgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7IFxyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbIC8vdG9kbyBjb21wb3NlQVN5bmM/P1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV1cclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhZ2VDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBldmVudC5wYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIC8vICBsZXQgbmV3VXJsID0gYG1hdGVyaWFsQ29tbWVudC9saXN0LyR7dGhpcy5wYWdlfWA7XHJcbiAgICAgICAgLy8gICBpZiAodGhpcy5jYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgLy8gICAgICAgIG5ld1VybCA9IGAke25ld1VybH0vJHt0aGlzLmNhdGVnb3J5SWR9YDtcclxuICAgICAgICAvLyAgICB9XHJcbiAgICAgLy8gICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbEJ5TWF0ZXJpYWwodGhpcy5wYWdlLCB0aGlzLm1hdGVyaWFsSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8TWF0ZXJpYWxDb21tZW50Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gbmV3IE1hdGVyaWFsQ29tbWVudCgpO1xyXG4gICAgICAgIGNvbW1lbnQubWVzc2FnZSA9IHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIGNvbW1lbnQubWF0ZXJpYWxJZCA9IHRoaXMubWF0ZXJpYWxJZDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuY3JlYXRlKGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgLy8gICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIC8vICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy92ZXJpZnkoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gICAgbGV0IHJlc3VsdDtcclxuICAgIC8vICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgLy8gICAgICAgIC52ZXJpZnkodGhpcy5pdGVtc1tpbmRleF0uaWQpXHJcbiAgICAvLyAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHJlc3VsdCA9IGRhdGEsXHJcbiAgICAvLyAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgLy8gICAgICAgICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0uaXNWZXJpZmllZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcclxuICAgIC8vICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9kZWxldGUoKSB7XHJcbiAgICAvLyAgICBsZXQgcmVzdWx0O1xyXG4gICAgLy8gICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXhdLmlkKVxyXG4gICAgLy8gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgIC8vICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgLy8gICAgICAgICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1JbmRleCwgMSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICk7XHJcbiAgICAvL31cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+0JrQvtC80LzQtdC90YLQsNGA0LjQuDogPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbXMubGVuZ3RoXFxcIj48L3NwYW4+PC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiXFxcIiAqbmdGb3I9XFxcImxldCBjb21tZW50IG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgPG1hdGVyaWFsQ29tbWVudC1kZXRhaWwgW2l0ZW1dPVxcXCJjb21tZW50XFxcIiBbZGVlcF09XFxcIjBcXFwiIFttYXRlcmlhbElkXT1cXFwibWF0ZXJpYWxJZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJjYW5Db21tZW50YXJ5XFxcIj48L21hdGVyaWFsQ29tbWVudC1kZXRhaWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImNvbW1lbnRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChjb21tZW50Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiICpuZ0lmPVxcXCJjYW5Db21tZW50YXJ5ICYmIHJvbGVzLmlzTG9naW5lZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLThcXFwiIHJvd3M9XFxcIjZcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGNlbnRlci1ibG9ja1xcXCIgW2Rpc2FibGVkXT1cXFwiIWNvbW1lbnRGb3JtLnZhbGlkXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtcyAmJiB0b3RhbEl0ZW1zID4gaXRlbXNQZXJQYWdlXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHRUZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3RUZXh0PVxcXCIxXFxcIiBsYXN0VGV4dD1cXFwidG90YWxJdGVtcy9pdGVtc1BlclBhZ2VcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50IH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYXRlcmlhbENvbW1lbnQtZGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgaXRlbTogTWF0ZXJpYWxDb21tZW50O1xyXG4gICAgQElucHV0KCkgZGVlcDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY2FuQ29tbWVudGFyeTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIG1hdGVyaWFsSWQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHBhcmVudDogTWF0ZXJpYWxDb21tZW50O1xyXG5cclxuICAgIGNvbW1lbnRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIG9sZENvcHkgOiBNYXRlcmlhbENvbW1lbnQ7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImFkZENvbW1lbnRNb2RhbFwiKSBhZGRDb21tZW50TW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZChcImVkaXRDb21tZW50TW9kYWxcIikgZWRpdENvbW1lbnRNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAvLyBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAvLyBpdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgLy8gdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAvLyAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRlcmlhbENvbW1lbnRTZXJ2aWNlOiBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdhbnN3ZXInOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWRkQ29tbWVudE1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCk6IHZvaWQgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWVudE1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmhpZGVFZGl0TW9kYWwoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVFZGl0TW9kYWwoKSB7ICBcclxuICAgICAgICB0aGlzLmVkaXRDb21tZW50TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYW5Db250cm9scygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbW1lbnQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdGhpcy5nZXRDb21tZW50KCk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmNyZWF0ZShjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmNoaWxkcmVuLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tbWVudE1vZGFsLmhpZGUoKTsgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5kZWxldGUodGhpcy5pdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnBhcmVudElkID0gdGhpcy5wYXJlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5wYXJlbnRJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RWRpdE1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh0aGlzLml0ZW0pO1xyXG4gICAgICAgIHRoaXMuZWRpdENvbW1lbnRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMuZ2V0Q29tbWVudCgpO1xyXG4gICAgICAgIGNvbW1lbnQuYW5zd2VyID0gdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UudXBkYXRlKHRoaXMuaXRlbS5pZCwgY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVFZGl0TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbW1lbnQoKTogTWF0ZXJpYWxDb21tZW50IHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMuaXRlbTtcclxuICAgICAgICBjb21tZW50Lm1lc3NhZ2UgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFuQ29udHJvbHMoKTogdm9pZCB7ICAgIFxyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnBhdGNoVmFsdWUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJhbnN3ZXJcIl0ucGF0Y2hWYWx1ZShcIlwiKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wiYW5zd2VyXCJdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LXt7ZGVlcH19IGNvbC1zbS1vZmZzZXQte3tkZWVwfX0gY29tbWVudCBjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdXNlcicsIGl0ZW0uYXV0aG9ySWRdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmF1dGhvclVzZXJOYW1lXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNtYWxsXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFkZGl0aW9uVGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJyb2xlcy5pc01vZGVyYXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS5hdXRob3JJZClcXFwiIChjbGljayk9XFxcInNob3dFZGl0TW9kYWwoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj4gPC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJyb2xlcy5pc01vZGVyYXRvclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj4gPC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImF2YXRhci1tZWRpdW1cXFwiIHNyYz1cXFwie3tpdGVtLnBob3RvfX1cXFwiIGFsdD1cXFwie3tpdGVtLmF1dGhvclVzZXJOYW1lfX1cXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHAgW3RleHRDb250ZW50XT1cXFwiaXRlbS5tZXNzYWdlXFxcIj48L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIml0ZW0uYW5zd2VyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zXFxcIj7QntGC0LLQtdGCOjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYW5zd2VyXFxcIj48L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTJcXFwiICpuZ0lmPVxcXCIhcm9sZXMuaXNTZWxmKGl0ZW0uYXV0aG9ySWQpICYmIGNhbkNvbW1lbnRhcnlcXFwiPlxcclxcbiAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0FkZENvbW1lbnRNb2RhbCgpXFxcIj7QntGC0LLQtdGC0LjRgtGMPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW5cXFwiPlxcclxcbiAgICA8bWF0ZXJpYWxDb21tZW50LWRldGFpbCBbaXRlbV09XFxcImNoaWxkXFxcIiBbZGVlcF09XFxcImRlZXAgPiA2ID8gNyA6IGRlZXArMVxcXCIgW21hdGVyaWFsSWRdPVxcXCJtYXRlcmlhbElkXFxcIiBbY2FuQ29tbWVudGFyeV09XFxcImNhbkNvbW1lbnRhcnlcXFwiIFtwYXJlbnRdPVxcXCJpdGVtXFxcIj48L21hdGVyaWFsQ29tbWVudC1kZXRhaWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjYWRkQ29tbWVudE1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgIDwvZGl2PiAgICBcXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWRkQ29tbWVudCgpXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZWRpdENvbW1lbnRNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbZm9ybUNvbnRyb2xdPVxcXCJjb21tZW50Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwicm9sZXMuaXNFZGl0b3JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydhbnN3ZXInXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJlZGl0KClcXFwiPtCe0LHQvdC+0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1hdGNoTGlzdENvbXBvbmVudCwgTWF0Y2hFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIm1hdGNoLzppZC9lZGl0XCIsIGNvbXBvbmVudDogTWF0Y2hFZGl0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0Y2hcIiwgY29tcG9uZW50OiBNYXRjaExpc3RDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9tYXRjaC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGNoLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGNoLWVkaXQuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gXCIuL21hdGNoLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGNoVHlwZSB9IGZyb20gXCIuL21hdGNoVHlwZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7ICAgICBcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hdGNoU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwibWF0Y2gvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXRBbGwgPSAoZmlsdGVyczogTWF0ZXJpYWxGaWx0ZXJzKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxOZXdzPj4gPT4ge1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZmlsdGVycykpKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy99O1xyXG5cclxuICAgIGdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxNYXRjaD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBNYXRjaCk6IE9ic2VydmFibGU8TWF0Y2g+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBNYXRjaCk6IE9ic2VydmFibGU8TWF0Y2g+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5hY3Rpb25VcmwgKyBpZCwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvVXBkYXRlKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICBnZXRUeXBlcyA9ICgpOiBPYnNlcnZhYmxlPE1hdGNoVHlwZT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCIvZ2V0VHlwZXNcIilcclxuICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSBcIi4vbWF0Y2gubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0Y2hTZXJ2aWNlIH0gZnJvbSBcIi4vbWF0Y2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuLy9pbXBvcnQgeyBVc2VyRmlsdGVycyB9IGZyb20gXCIuL3VzZXJGaWx0ZXJzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1hdGNoLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF0Y2hMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtczogTWF0Y2hbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGNoU2VydmljZTogTWF0Y2hTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgdGhpcy5jYXRlZ29yeUlkID0gK3BhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgICAvLyAgdGhpcy51c2VyTmFtZSA9IHBhcmFtc1sndXNlck5hbWUnXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8TWF0Y2g+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy9sZXQgZmlsdGVycyA9IG5ldyBVc2VyRmlsdGVycygpO1xyXG4gICAgICAgIC8vLy8gIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICAvLy8vICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIC8vZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgLy9maWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIC8vdGhpcy51c2VyU2VydmljZVxyXG4gICAgICAgIC8vICAgIC5HZXRBbGwoZmlsdGVycylcclxuICAgICAgICAvLyAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgIC8vICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAvLyAgICAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+IDwhLXRvZG8gbWFnaWMgbnVtYmVyLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9tYXRjaCcsIDAsICdlZGl0JyBdXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJjbHViRWRpdCh7aWQ6IGl0ZW0uaWR9KVxcXCI+PHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5uYW1lXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJ2bS5kZWxldGUoJGluZGV4KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiaXRlbS5lbmdsaXNoTmFtZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7aXRlbS5sb2dvfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDwhLS08dWliLXBhZ2luYXRpb24gbmctc2hvdz1cXFwidm0udG90YWxJdGVtcyA+IHZtLml0ZW1QZXJQYWdlXFxcIiB0b3RhbC1pdGVtcz1cXFwidm0udG90YWxJdGVtc1xcXCIgbmctbW9kZWw9XFxcInZtLnBhZ2VcXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC91aWItcGFnaW5hdGlvbj4tLT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBDbHViU2VydmljZSB9IGZyb20gXCIuLi9jbHViL2luZGV4XCI7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSBcIi4vbWF0Y2gubW9kZWxcIjsgICAgICAgICAgICAgICAgICAgICAgICBcclxuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCIuLi9jbHViL2NsdWIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWF0Y2gtZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRjaEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY2x1YnM6IENsdWJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGNoU2VydmljZTogTWF0Y2hTZXJ2aWNlLCAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY2x1YlNlcnZpY2U6IENsdWJTZXJ2aWNlLCAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLmdldEJ5TmFtZShcIlwiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZUNsdWJzKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHsgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IG5ld3NJdGVtID0gdGhpcy5wYXJzZUZvcm0oKTtcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU2VydmljZS5jcmVhdGUobmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGRhdGE6IE1hdGNoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VGb3JtKCk6IE1hdGNoIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBNYXRjaCgpO1xyXG4gICAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGl0ZW0uY2x1YklkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNsdWJJZFwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmlzSG9tZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJpc0hvbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5kYXRlVGltZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJkYXRlVGltZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnR5cGVJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0eXBlSWRcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnY2x1YklkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnaXNIb21lJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnZGF0ZVRpbWUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICd0eXBlSWQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlQ2x1YnMoaXRlbXM6IENsdWJbXSkge1xyXG4gICAgICAgIHRoaXMuY2x1YnMgPSBpdGVtcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIE1hdGNoIHtcclxuICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgICBpc0hvbWU6IGJvb2xlYW47XHJcbiAgICAgICAgIGNsdWJJZDogbnVtYmVyO1xyXG4gICAgICAgICBjbHViTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICBkYXRlVGltZTogRGF0ZTtcclxuICAgICAgICAgdHlwZUlkOiBudW1iZXI7XHJcbiAgICAgICAgIHR5cGVOYW1lOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChlZGl0Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj5D0L7Qv9C10YDQvdC40Lo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08YXV0b2NvbXBsZXRlIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLmNsdWJOYW1lXFxcIiBuYW1lPVxcXCJjbHViTmFtZVxcXCIgYXR0ci1wbGFjZWhvbGRlcj1cXFwi0JLQstC10LTQuNGC0LUg0LrQu9GD0LEuLi5cXFwiIGNsaWNrLWFjdGl2YXRpb249XFxcInRydWVcXFwiIGRhdGE9XFxcInZtLmNsdWJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbi10eXBlPVxcXCJ2bS51cGRhdGVDbHVic1xcXCIgdmFsaWRhdGlvbj1cXFwibWF4X2xlbjozMHxyZXF1aXJlZFxcXCI+PC9hdXRvY29tcGxldGU+LS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNhdGVnb3J5SWRcXFwiIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLnR5cGVJZFxcXCIgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJvblRvcFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpc0hvbWVcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiDQlNC+0LzQsCA8IS0tdG9kbyBhZGQgc3dpdGNoZXItLT4gXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QlNCw0YLQsDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBuYW1lPVxcXCJkYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBzaG93LWJ1dHRvbi1iYXI9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYi1kYXRlcGlja2VyLXBvcHVwPVxcXCJkZC9NTU1NL3l5eXlcXFwiIG5nLW1vZGVsPVxcXCJ2bS5pdGVtLmRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3Blbj1cXFwidm0uc3RhdHVzLm9wZW5lZFxcXCIgZGF0ZXBpY2tlci1vcHRpb25zPVxcXCJ2bS5kYXRlT3B0aW9uc1xcXCIgY2xvc2UtdGV4dD1cXFwi0JfQsNC60YDRi9GC0YxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0LWlucHV0LWZvcm1hdHM9XFxcImFsdElucHV0Rm9ybWF0c1xcXCIgbmctY2xpY2s9XFxcInZtLm9wZW4oKVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuIHZhLXRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vcGVuKClcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgdWliLXRpbWVwaWNrZXIgbmctbW9kZWw9XFxcInZtLml0ZW0udGltZVxcXCIgbmctY2hhbmdlPVxcXCJ2bS50aW1lQ2hhbmdlZCgpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICBob3VyLXN0ZXA9XFxcIjFcXFwiIG1pbnV0ZS1zdGVwPVxcXCIxXFxcIiBzaG93LW1lcmlkaWFuPVxcXCJmYWxzZVxcXCIgc2hvdy1zcGlubmVycz1cXFwiZmFsc2VcXFwiIG5nLWRpc2FibGVkPVxcXCIhdm0uaXRlbS5kYXRlXFxcIj48L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1hdXRvLWNvbXBsZXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWF1dG8tY29tcGxldGVcIlxuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gXCIuL2FkbWluLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZXBsVGFibGUuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFkbWluU2VydmljZSB9IGZyb20gXCIuL2FkbWluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlcGwtdGFibGVcIixcclxuICAgIC8vdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sJylcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9lcGxUYWJsZS5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVwbFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIC8vICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcblxyXG4gICAgLy8gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAvLyAgICAgICAgLnVwZGF0ZUVwbFRhYmxlKClcclxuICAgIC8vICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9pZiB0cnVlIHVwZGF0ZVxyXG4gICAgLy8gICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgLy8gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiXCIpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLXJlc3BvbnNpdmUgY29sLXhzLTEyIG92ZXJmbG93YWJsZVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCa0L7QvNCw0L3QtNCwPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0Jg8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QkjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCdPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0J88L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD4rLy08L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QnjwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+PHRyPjx0ZD4xPC90ZD48dGQ+0JvQuNCy0LXRgNC/0YPQu9GMXFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD44PC90ZD48dGQ+MjwvdGQ+PHRkPjE8L3RkPjx0ZD4xNjwvdGQ+PHRkPjI2PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MjwvdGQ+PHRkPtCn0LXQu9GB0LhcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjg8L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjE3PC90ZD48dGQ+MjU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4zPC90ZD48dGQ+0JzQsNC90YfQtdGB0YLQtdGAINCh0LjRgtC4XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD43PC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD4xNTwvdGQ+PHRkPjI0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NDwvdGQ+PHRkPtCQ0YDRgdC10L3QsNC7XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD43PC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD4xMzwvdGQ+PHRkPjI0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NTwvdGQ+PHRkPtCi0L7RgtGC0LXQvdGF0Y3QvFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjY8L3RkPjx0ZD4wPC90ZD48dGQ+OTwvdGQ+PHRkPjIxPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NjwvdGQ+PHRkPtCc0LDQvdGH0LXRgdGC0LXRgCDQrtC90LDQudGC0LXQtFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjE4PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+NzwvdGQ+PHRkPtCt0LLQtdGA0YLQvtC9XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD41PC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD4yPC90ZD48dGQ+MTg8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD44PC90ZD48dGQ+0KPQvtGC0YTQvtGA0LRcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjQ8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPi00PC90ZD48dGQ+MTU8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD45PC90ZD48dGQ+0JHQtdGA0L3Qu9C4XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD40PC90ZD48dGQ+MjwvdGQ+PHRkPjU8L3RkPjx0ZD4tNDwvdGQ+PHRkPjE0PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTA8L3RkPjx0ZD7QodCw0YPRgtCz0LXQvNC/0YLQvtC9XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPjQ8L3RkPjx0ZD4wPC90ZD48dGQ+MTM8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMTwvdGQ+PHRkPtCS0LXRgdGCINCR0YDQvtC80LLQuNGHXFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPjQ8L3RkPjx0ZD4tMzwvdGQ+PHRkPjEzPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTI8L3RkPjx0ZD7QodGC0L7QuiDQodC40YLQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjQ8L3RkPjx0ZD40PC90ZD48dGQ+LTU8L3RkPjx0ZD4xMzwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjEzPC90ZD48dGQ+0JHQvtGA0L3QvNGD0YJcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+NTwvdGQ+PHRkPi0zPC90ZD48dGQ+MTI8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xNDwvdGQ+PHRkPtCb0LXRgdGC0LXRgFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD41PC90ZD48dGQ+LTU8L3RkPjx0ZD4xMjwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE1PC90ZD48dGQ+0JzQuNC00LvRgdCx0YDQvlxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MjwvdGQ+PHRkPjU8L3RkPjx0ZD40PC90ZD48dGQ+LTI8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE2PC90ZD48dGQ+0JrRgNC40YHRgtCw0Lsg0J/RjdC70LDRgVxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjI8L3RkPjx0ZD42PC90ZD48dGQ+LTM8L3RkPjx0ZD4xMTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE3PC90ZD48dGQ+0JLQtdGB0YIg0KXRjdC8XFxyXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MjwvdGQ+PHRkPjY8L3RkPjx0ZD4tOTwvdGQ+PHRkPjExPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTg8L3RkPjx0ZD7QpdCw0LvQu1xcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjE8L3RkPjx0ZD43PC90ZD48dGQ+LTE0PC90ZD48dGQ+MTA8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xOTwvdGQ+PHRkPtCh0YPQvtC90YHQuFxcclxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MTwvdGQ+PHRkPjI8L3RkPjx0ZD44PC90ZD48dGQ+LTExPC90ZD48dGQ+NTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjIwPC90ZD48dGQ+0KHQsNC90LTQtdGA0LvQtdC90LRcXHJcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjE8L3RkPjx0ZD4yPC90ZD48dGQ+ODwvdGQ+PHRkPi0xMjwvdGQ+PHRkPjU8L3RkPjwvdHI+XFxyXFxuPC90Ym9keT48L3RhYmxlPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==