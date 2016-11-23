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
	    return AppModule;
	}());
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
	            index_6.WishListComponent
	        ],
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
	    __metadata("design:paramtypes", [])
	], AppModule);
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
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: "app",
	        template: __webpack_require__(21)
	    }),
	    __metadata("design:paramtypes", [router_1.Router,
	        auth_service_1.AuthService,
	        roles_checked_service_1.RolesCheckedService,
	        core_1.ViewContainerRef,
	        platform_browser_1.Title])
	], AppComponent);
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
	    return AuthService;
	}());
	AuthService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [index_1.HttpWrapper, http_1.Http, index_1.LocalStorageService,
	        index_1.RolesCheckedService, router_1.Router, app_constants_1.Configuration])
	], AuthService);
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
	    return HttpWrapper;
	}());
	HttpWrapper = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http,
	        localStorage_service_1.LocalStorageService])
	], HttpWrapper);
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
	    return LocalStorageService;
	}());
	LocalStorageService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], LocalStorageService);
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
	    return SecuredDirective;
	}());
	__decorate([
	    core_1.HostBinding("hidden"),
	    __metadata("design:type", Boolean)
	], SecuredDirective.prototype, "hideRouterLink", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SecuredDirective.prototype, "secured", void 0);
	SecuredDirective = __decorate([
	    core_1.Directive({
	        selector: "[secured]"
	    }),
	    __metadata("design:paramtypes", [router_1.Router, core_1.ElementRef])
	], SecuredDirective);
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
	    return RolesCheckedService;
	}());
	RolesCheckedService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [localStorage_service_1.LocalStorageService])
	], RolesCheckedService);
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
	    return GlobalValidators;
	}());
	GlobalValidators = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], GlobalValidators);
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
	    return Configuration;
	}());
	Configuration = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], Configuration);
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
	    return NewsDetailComponent;
	}());
	__decorate([
	    core_1.ViewChild("activateModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], NewsDetailComponent.prototype, "activateModal", void 0);
	__decorate([
	    core_1.ViewChild("deleteModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], NewsDetailComponent.prototype, "deleteModal", void 0);
	NewsDetailComponent = __decorate([
	    core_1.Component({
	        selector: "news-detail",
	        template: __webpack_require__(28)
	    }),
	    __metadata("design:paramtypes", [news_service_1.NewsService,
	        router_1.ActivatedRoute,
	        index_1.LocalStorageService,
	        index_1.RolesCheckedService,
	        router_1.Router,
	        platform_browser_1.Title])
	], NewsDetailComponent);
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
	    return NewsService;
	}());
	NewsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], NewsService);
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
	    return NewsListComponent;
	}());
	__decorate([
	    core_1.ViewChild("activateModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], NewsListComponent.prototype, "activateModal", void 0);
	__decorate([
	    core_1.ViewChild("deleteModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], NewsListComponent.prototype, "deleteModal", void 0);
	NewsListComponent = __decorate([
	    core_1.Component({
	        selector: "news-list",
	        template: __webpack_require__(32),
	        changeDetection: core_1.ChangeDetectionStrategy.Default
	    }),
	    __metadata("design:paramtypes", [news_service_1.NewsService, router_1.ActivatedRoute, common_1.Location,
	        index_1.RolesCheckedService, core_1.ChangeDetectorRef])
	], NewsListComponent);
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
	                    forms_1.Validators.required
	                ])],
	            'title': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'brief': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'message': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'source': ["", forms_1.Validators.compose([])],
	            'photo': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'canCommentary': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'onTop': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'pending': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])]
	        });
	    };
	    NewsEditComponent.prototype.parseCategories = function (items) {
	        this.categories = items;
	    };
	    return NewsEditComponent;
	}());
	NewsEditComponent = __decorate([
	    core_1.Component({
	        selector: "news-edit",
	        template: __webpack_require__(42)
	    }),
	    __metadata("design:paramtypes", [news_service_1.NewsService,
	        index_1.NewsCategoryService,
	        router_1.ActivatedRoute,
	        router_1.Router,
	        forms_1.FormBuilder])
	], NewsEditComponent);
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
	    return NewsCategoryService;
	}());
	NewsCategoryService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], NewsCategoryService);
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
	    return NewsCategoryEditComponent;
	}());
	NewsCategoryEditComponent = __decorate([
	    core_1.Component({
	        selector: "newsCategory-edit",
	        template: __webpack_require__(39)
	    }),
	    __metadata("design:paramtypes", [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
	], NewsCategoryEditComponent);
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
	    return NewsCategoryListComponent;
	}());
	NewsCategoryListComponent = __decorate([
	    core_1.Component({
	        selector: "newsCategory-list",
	        template: __webpack_require__(41)
	    }),
	    __metadata("design:paramtypes", [newsCategory_service_1.NewsCategoryService,
	        platform_browser_1.Title])
	], NewsCategoryListComponent);
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
	    return AuthGuard;
	}());
	AuthGuard = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
	], AuthGuard);
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
	                    forms_1.Validators.required
	                ])],
	            'password': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])]
	        });
	    };
	    AccountSigninComponent.prototype.onSubmit = function (ra) {
	        this.userName = this.loginForm.controls["userName"].value;
	        this.password = this.loginForm.controls["password"].value;
	        var result = this.authService.login(this.userName, this.password);
	    };
	    return AccountSigninComponent;
	}());
	AccountSigninComponent = __decorate([
	    core_1.Component({
	        selector: "account-signin",
	        template: __webpack_require__(49)
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService, forms_1.FormBuilder])
	], AccountSigninComponent);
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
	                    forms_1.Validators.required, forms_1.Validators.minLength(3)
	                ])],
	            'email': ["andrew_parys@tut.by", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6), , index_1.GlobalValidators.mailFormat
	                ])],
	            'password': ["123qwe!Q", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
	            'confirmPassword': ["123qwe!Q", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
	            'fullName': ["123", forms_1.Validators.compose([
	                    forms_1.Validators.required,
	                ])],
	            'birthday': ["10/10/2015", forms_1.Validators.compose([
	                    forms_1.Validators.required,
	                ])]
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
	    return AccountSignupComponent;
	}());
	AccountSignupComponent = __decorate([
	    core_1.Component({
	        selector: "account-signup",
	        template: __webpack_require__(53)
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
	], AccountSignupComponent);
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
	    return AccountService;
	}());
	AccountService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
	], AccountService);
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
	    return ConfirmEmailComponent;
	}());
	ConfirmEmailComponent = __decorate([
	    core_1.Component({
	        selector: "email-confirmation",
	        template: "<span [hidden]='!result'>Ваш адрес электронной почты успешно подтвержден. Можете войти и быть как дома.</span>"
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router])
	], ConfirmEmailComponent);
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
	                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
	                ])]
	        });
	    };
	    ForgotPasswordComponent.prototype.onSubmit = function (ra) {
	        this.email = this.forgotForm.controls["email"].value;
	        this.service.forgotPassword(this.email).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
	        this.finish = true;
	    };
	    return ForgotPasswordComponent;
	}());
	ForgotPasswordComponent = __decorate([
	    core_1.Component({
	        selector: "forgot-password",
	        template: __webpack_require__(56)
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
	], ForgotPasswordComponent);
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
	                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
	                ])],
	            'password': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
	            'confirmPassword': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
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
	    return ResetPasswordComponent;
	}());
	ResetPasswordComponent = __decorate([
	    core_1.Component({
	        selector: "reset-password",
	        template: __webpack_require__(59)
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
	], ResetPasswordComponent);
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
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
	            'newPassword': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])],
	            'confirmPassword': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.minLength(6)
	                ])]
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
	    return ChangePasswordComponent;
	}());
	ChangePasswordComponent = __decorate([
	    core_1.Component({
	        selector: "change-password",
	        template: __webpack_require__(62)
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
	], ChangePasswordComponent);
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
	                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
	                ])]
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
	    return UnconfirmedEmailComponent;
	}());
	UnconfirmedEmailComponent = __decorate([
	    core_1.Component({
	        selector: "unconfirmedEmail",
	        template: __webpack_require__(64)
	    }),
	    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
	], UnconfirmedEmailComponent);
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
	    return ClubService;
	}());
	ClubService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
	], ClubService);
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
	    return ClubListComponent;
	}());
	__decorate([
	    core_1.ViewChild("deleteModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ClubListComponent.prototype, "deleteModal", void 0);
	ClubListComponent = __decorate([
	    core_1.Component({
	        selector: "club-list",
	        template: __webpack_require__(69)
	    }),
	    __metadata("design:paramtypes", [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location,
	        platform_browser_1.Title])
	], ClubListComponent);
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
	                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
	                ])],
	            'logo': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'name': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
	                ])],
	            'stadium': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
	                ])]
	        });
	    };
	    return ClubEditComponent;
	}());
	ClubEditComponent = __decorate([
	    core_1.Component({
	        selector: "club-edit",
	        template: __webpack_require__(73)
	    }),
	    __metadata("design:paramtypes", [club_service_1.ClubService,
	        router_1.ActivatedRoute,
	        router_1.Router,
	        index_1.LocalStorageService,
	        forms_1.FormBuilder,
	        platform_browser_1.Title])
	], ClubEditComponent);
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
	    return UserDetailComponent;
	}());
	UserDetailComponent = __decorate([
	    core_1.Component({
	        selector: "user-detail",
	        template: __webpack_require__(79)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute,
	        index_1.RolesCheckedService])
	], UserDetailComponent);
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
	    return UserService;
	}());
	UserService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], UserService);
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
	    return UserListComponent;
	}());
	UserListComponent = __decorate([
	    core_1.Component({
	        selector: "user-list",
	        template: __webpack_require__(82)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
	], UserListComponent);
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
	    return PmListComponent;
	}());
	PmListComponent = __decorate([
	    core_1.Component({
	        selector: "pm-list",
	        template: __webpack_require__(88)
	    }),
	    __metadata("design:paramtypes", [pm_service_1.PmService])
	], PmListComponent);
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
	    return PmService;
	}());
	PmService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], PmService);
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
	    return PmDetailComponent;
	}());
	PmDetailComponent = __decorate([
	    core_1.Component({
	        selector: "pm-detail",
	        template: __webpack_require__(90)
	    }),
	    __metadata("design:paramtypes", [pm_service_1.PmService, router_1.ActivatedRoute])
	], PmDetailComponent);
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
	    return PmEditComponent;
	}());
	PmEditComponent = __decorate([
	    core_1.Component({
	        selector: "pm-edit",
	        template: __webpack_require__(92)
	    }),
	    __metadata("design:paramtypes", [pm_service_1.PmService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
	], PmEditComponent);
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
	    return ClubHistoryComponent;
	}());
	ClubHistoryComponent = __decorate([
	    core_1.Component({
	        selector: "<club-history>",
	        template: __webpack_require__(96)
	    }),
	    __metadata("design:paramtypes", [])
	], ClubHistoryComponent);
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
	    return RulesComponent;
	}());
	RulesComponent = __decorate([
	    core_1.Component({
	        selector: "<rules>",
	        template: __webpack_require__(98)
	    }),
	    __metadata("design:paramtypes", [])
	], RulesComponent);
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
	    return RightSidebarComponent;
	}());
	RightSidebarComponent = __decorate([
	    core_1.Component({
	        selector: "right-sidebar",
	        template: __webpack_require__(101)
	    }),
	    __metadata("design:paramtypes", [admin_service_1.AdminService, index_1.RolesCheckedService])
	], RightSidebarComponent);
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
	    return AdminService;
	}());
	AdminService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
	], AdminService);
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
	    return ForumSectionService;
	}());
	ForumSectionService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
	], ForumSectionService);
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
	    return ForumSectionListComponent;
	}());
	ForumSectionListComponent = __decorate([
	    core_1.Component({
	        selector: "forumSection-list",
	        template: __webpack_require__(107)
	    }),
	    __metadata("design:paramtypes", [forumSection_service_1.ForumSectionService, index_1.RolesCheckedService])
	], ForumSectionListComponent);
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
	    return WishListComponent;
	}());
	WishListComponent = __decorate([
	    core_1.Component({
	        selector: "wish-list",
	        template: __webpack_require__(114)
	    }),
	    __metadata("design:paramtypes", [wish_service_1.WishService, router_1.ActivatedRoute])
	], WishListComponent);
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
	    return WishService;
	}());
	WishService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], WishService);
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
	    return WishEditComponent;
	}());
	WishEditComponent = __decorate([
	    core_1.Component({
	        selector: "wish-edit",
	        template: __webpack_require__(116)
	    }),
	    __metadata("design:paramtypes", [wish_service_1.WishService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
	], WishEditComponent);
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
	    return MaterialCommentListComponent;
	}());
	__decorate([
	    core_1.ViewChild("deleteModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], MaterialCommentListComponent.prototype, "deleteModal", void 0);
	MaterialCommentListComponent = __decorate([
	    core_1.Component({
	        selector: "materialComment-list",
	        template: __webpack_require__(122)
	    }),
	    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
	], MaterialCommentListComponent);
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
	    return MaterialCommentService;
	}());
	MaterialCommentService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], MaterialCommentService);
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
	                    forms_1.Validators.required, forms_1.Validators.minLength(3)
	                ])]
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
	    return MaterialCommentSectionComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], MaterialCommentSectionComponent.prototype, "materialId", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], MaterialCommentSectionComponent.prototype, "canCommentary", void 0);
	MaterialCommentSectionComponent = __decorate([
	    core_1.Component({
	        selector: "comments",
	        template: __webpack_require__(124)
	    }),
	    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService,
	        forms_1.FormBuilder])
	], MaterialCommentSectionComponent);
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
	                    forms_1.Validators.required
	                ])],
	            'answer': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])]
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
	    return MaterialCommentDetailComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", materialComment_model_1.MaterialComment)
	], MaterialCommentDetailComponent.prototype, "item", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], MaterialCommentDetailComponent.prototype, "deep", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], MaterialCommentDetailComponent.prototype, "canCommentary", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], MaterialCommentDetailComponent.prototype, "materialId", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", materialComment_model_1.MaterialComment)
	], MaterialCommentDetailComponent.prototype, "parent", void 0);
	__decorate([
	    core_1.ViewChild("addCommentModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], MaterialCommentDetailComponent.prototype, "addCommentModal", void 0);
	__decorate([
	    core_1.ViewChild("editCommentModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], MaterialCommentDetailComponent.prototype, "editCommentModal", void 0);
	__decorate([
	    core_1.ViewChild("deleteModal"),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], MaterialCommentDetailComponent.prototype, "deleteModal", void 0);
	MaterialCommentDetailComponent = __decorate([
	    core_1.Component({
	        selector: "materialComment-detail",
	        template: __webpack_require__(126)
	    }),
	    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService,
	        common_1.Location,
	        index_1.RolesCheckedService,
	        forms_1.FormBuilder])
	], MaterialCommentDetailComponent);
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
	    return MatchService;
	}());
	MatchService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
	], MatchService);
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
	    return MatchListComponent;
	}());
	MatchListComponent = __decorate([
	    core_1.Component({
	        selector: "match-list",
	        template: __webpack_require__(131)
	    }),
	    __metadata("design:paramtypes", [match_service_1.MatchService, router_1.ActivatedRoute])
	], MatchListComponent);
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
	                    forms_1.Validators.required
	                ])],
	            'isHome': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'dateTime': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])],
	            'typeId': ["", forms_1.Validators.compose([
	                    forms_1.Validators.required
	                ])]
	        });
	    };
	    MatchEditComponent.prototype.parseClubs = function (items) {
	        this.clubs = items;
	    };
	    return MatchEditComponent;
	}());
	MatchEditComponent = __decorate([
	    core_1.Component({
	        selector: "match-edit",
	        template: __webpack_require__(134)
	    }),
	    __metadata("design:paramtypes", [index_1.MatchService,
	        index_2.ClubService,
	        router_1.ActivatedRoute,
	        router_1.Router,
	        forms_1.FormBuilder])
	], MatchEditComponent);
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
	    return EplTableComponent;
	}());
	EplTableComponent = __decorate([
	    core_1.Component({
	        selector: "epl-table",
	        template: __webpack_require__(138)
	    }),
	    __metadata("design:paramtypes", [])
	], EplTableComponent);
	exports.EplTableComponent = EplTableComponent;


/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-condensed table-striped table-responsive col-xs-12 overflowable\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Команда</th>\r\n            <th>И</th>\r\n            <th>В</th>\r\n            <th>Н</th>\r\n            <th>П</th>\r\n            <th>+/-</th>\r\n            <th>О</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody><tr><td>1</td><td>Ливерпуль\n</td><td>11</td><td>8</td><td>2</td><td>1</td><td>16</td><td>26</td></tr>\r\n<tr><td>2</td><td>Челси\n</td><td>11</td><td>8</td><td>1</td><td>2</td><td>17</td><td>25</td></tr>\r\n<tr><td>3</td><td>Манчестер Сити\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>15</td><td>24</td></tr>\r\n<tr><td>4</td><td>Арсенал\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>13</td><td>24</td></tr>\r\n<tr><td>5</td><td>Тоттенхэм\n</td><td>11</td><td>5</td><td>6</td><td>0</td><td>9</td><td>21</td></tr>\r\n<tr><td>6</td><td>Манчестер Юнайтед\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>3</td><td>18</td></tr>\r\n<tr><td>7</td><td>Эвертон\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>2</td><td>18</td></tr>\r\n<tr><td>8</td><td>Уотфорд\n</td><td>11</td><td>4</td><td>3</td><td>4</td><td>-4</td><td>15</td></tr>\r\n<tr><td>9</td><td>Бернли\n</td><td>11</td><td>4</td><td>2</td><td>5</td><td>-4</td><td>14</td></tr>\r\n<tr><td>10</td><td>Саутгемптон\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>0</td><td>13</td></tr>\r\n<tr><td>11</td><td>Вест Бромвич\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-3</td><td>13</td></tr>\r\n<tr><td>12</td><td>Сток Сити\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-5</td><td>13</td></tr>\r\n<tr><td>13</td><td>Борнмут\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-3</td><td>12</td></tr>\r\n<tr><td>14</td><td>Лестер\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-5</td><td>12</td></tr>\r\n<tr><td>15</td><td>Мидлсбро\n</td><td>11</td><td>2</td><td>5</td><td>4</td><td>-2</td><td>11</td></tr>\r\n<tr><td>16</td><td>Кристал Пэлас\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-3</td><td>11</td></tr>\r\n<tr><td>17</td><td>Вест Хэм\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-9</td><td>11</td></tr>\r\n<tr><td>18</td><td>Халл\n</td><td>11</td><td>3</td><td>1</td><td>7</td><td>-14</td><td>10</td></tr>\r\n<tr><td>19</td><td>Суонси\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-11</td><td>5</td></tr>\r\n<tr><td>20</td><td>Сандерленд\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-12</td><td>5</td></tr>\r\n</tbody></table>";

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjIyNDgwZjAyOGI2NDc0MDFlNmYiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYm9vdC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbC1zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3BhZ2VhYmxlLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvaHR0cFdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL3NlY3VyZWQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcm9sZXMtY2hlY2tlZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvZ2xvYmFsVmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzRmlsdGVycy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hdXRoL2F1dGgucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQtc2lnbmluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvc2lnbnVwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LXNpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3VuY29uZmlybWVkRW1haWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9jbHViL2NsdWItZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Mucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0ucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ob21lLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3J1bGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9ob21lL3JpZ2h0U2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2FkbWluLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaFR5cGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLWF1dG8tY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhcjJhcHAvYXBwL2FkbWluL2VwbFRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLFFBQVEsRUFBRSxhQUFhO2NBQzFCO2FBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztpQkFFdEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztVQUNKLENBQUMsQ0FBQztTQUVILE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFrQixjQUFNLGVBQVEsQ0FBQyxlQUFlLENB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QVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkMsQ0FBQztLQUVPLHFDQUFTLEdBQWpCO1NBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7U0FDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBRW5ELE1BQU0sQ0FBQyxJQUFJLENB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Q0FBQztNQUNuRCxDQUFDO3NDQVNvQyxvQkFBWTtTQUNyQixtQkFBVztTQUNqQix1QkFBYztTQUNiLGVBQU07U0FDRCxtQkFBVzt1QkF3RXZDO0FBbkZZLGdEQUFrQjs7Ozs7Ozs7QUNkL0I7S0FBQTtLQVFBLENBQUM7S0FBRCxZQUFDO0FBQUQsRUFBQztBQVJELHVCQVFDOzs7Ozs7O0FDUkQsc2xHOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLG9DQUFnQztBQUNoQyxvQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHJDLHFDQUFrRDtBQVlsRDtLQUVJO0tBQ0EsQ0FBQztLQUVELG9DQUFRLEdBQVI7S0FVQSxDQUFDO0tBQ0wsd0JBQUM7QUFBRCxFQUFDO0FBaEJEO0tBTkMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxXQUFXO1NBRXJCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQTJCLENBQUM7TUFDakQsQ0FBQzs7c0JBa0JEO0FBaEJZLDhDQUFpQjs7Ozs7OztBQ1o5QixvL0UiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanNcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMjI0ODBmMDI4YjY0NzQwMWU2ZiIsImltcG9ydCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIjtcclxuaW1wb3J0IFwiem9uZS5qc1wiO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7IFxyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiBcIjxhcHA+PC9hcHA+XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG4vL2ltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRpdGxlLCBCcm93c2VyTW9kdWxlLCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSwgTk9ERV9IVFRQX1BST1ZJREVSUyB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2hhcmVkL2xvY2FsLXN0b3JhZ2VcIjsgICAgIFxyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgcm91dGluZywgYXBwUm91dGluZ1Byb3ZpZGVycyB9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTmV3c0VkaXRDb21wb25lbnQsIE5ld3NEZXRhaWxDb21wb25lbnQsIE5ld3NMaXN0Q29tcG9uZW50LCBOZXdzU2VydmljZSB9IGZyb20gXCIuL25ld3MvaW5kZXhcIjsgICAgICAgICAgICAgXHJcbmltcG9ydCAqIGFzIG5ld3NDYXRlZ29yeSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkvaW5kZXhcIjtcclxuaW1wb3J0IHsgQXV0aEd1YXJkLCBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGgvaW5kZXhcIjtcclxuaW1wb3J0IHsgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCwgRm9ydW1TZWN0aW9uU2VydmljZSB9IGZyb20gXCIuL2ZvcnVtU2VjdGlvbi9pbmRleFwiOyBcclxuaW1wb3J0ICogYXMgYWNjb3VudCBmcm9tIFwiLi9hY2NvdW50L2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIGNsdWIgZnJvbSBcIi4vY2x1Yi9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBtYXRjaCBmcm9tIFwiLi9tYXRjaC9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBzaGFyZWQgZnJvbSBcIi4vc2hhcmVkL2luZGV4XCI7ICAgICAgICAgICAgICAgICAgICAgXHJcbmltcG9ydCB7IFVzZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi91c2VyL3VzZXItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci91c2VyLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBtTGlzdENvbXBvbmVudCwgUG1EZXRhaWxDb21wb25lbnQsIFBtRWRpdENvbXBvbmVudCwgUG1TZXJ2aWNlIH0gZnJvbSBcIi4vcG0vaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2x1Ykhpc3RvcnlDb21wb25lbnQsIFJ1bGVzQ29tcG9uZW50LCBSaWdodFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2luZGV4XCI7XHJcbmltcG9ydCB7IFdpc2hMaXN0Q29tcG9uZW50LCBXaXNoU2VydmljZSwgV2lzaEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi93aXNoL2luZGV4XCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQsIE1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQsIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC9pbmRleFwiO1xyXG5pbXBvcnQgeyBOZzJBdXRvQ29tcGxldGVNb2R1bGUgfSBmcm9tIFwibmcyLWF1dG8tY29tcGxldGVcIjtcclxuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlLCBFcGxUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL2FkbWluL2luZGV4XCI7XHJcbmltcG9ydCB7IERhdGVwaWNrZXJNb2R1bGUsIE1vZGFsTW9kdWxlLCBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAgICAgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIE5nTW9kdWxlLCBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLl0sXHJcbiAgICAgICAgRGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgIC8vICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIE1vZGFsTW9kdWxlLFxyXG4gICAgICAgIE5nMkF1dG9Db21wbGV0ZU1vZHVsZSxcclxuICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZ1xyXG4gICAgXSwgXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBhY2NvdW50LkFjY291bnRTaWduaW5Db21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5BY2NvdW50U2lnbnVwQ29tcG9uZW50LFxyXG4gICAgICAgIGFjY291bnQuQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5Db25maXJtRW1haWxDb21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5Gb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBhY2NvdW50LlJlc2V0UGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgICAgYWNjb3VudC5VbmNvbmZpcm1lZEVtYWlsQ29tcG9uZW50LFxyXG4gICAgICAgIGNsdWIuQ2x1YkVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgY2x1Yi5DbHViTGlzdENvbXBvbmVudCxcclxuICAgICAgICBuZXdzQ2F0ZWdvcnkuTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCxcclxuICAgICAgICBuZXdzQ2F0ZWdvcnkuTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCxcclxuICAgICAgICBzaGFyZWQuU2VjdXJlZERpcmVjdGl2ZSxcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQ2x1Ykhpc3RvcnlDb21wb25lbnQsXHJcbiAgICAgICAgRXBsVGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCxcclxuICAgICAgICBtYXRjaC5NYXRjaEVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgbWF0Y2guTWF0Y2hMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVyaWFsQ29tbWVudERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgTmV3c0xpc3RDb21wb25lbnQsXHJcbiAgICAgICAgTmV3c0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBOZXdzRWRpdENvbXBvbmVudCxcclxuICAgICAgICBQbURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBQbUVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgUG1MaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFJpZ2h0U2lkZWJhckNvbXBvbmVudCxcclxuICAgICAgICBSdWxlc0NvbXBvbmVudCxcclxuICAgICAgICBVc2VyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFdpc2hFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIFdpc2hMaXN0Q29tcG9uZW50XSwgICAvLyBjb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLCAgICAgLy8gcm9vdCBjb21wb25lbnRcclxuICAgIHByb3ZpZGVyczogWyAvLyBzZXJ2aWNlc1xyXG4gICAgICAgIGFjY291bnQuQWNjb3VudFNlcnZpY2UsIFxyXG4gICAgICAgIGNsdWIuQ2x1YlNlcnZpY2UsXHJcbiAgICAgICAgbWF0Y2guTWF0Y2hTZXJ2aWNlLFxyXG4gICAgICAgIG5ld3NDYXRlZ29yeS5OZXdzQ2F0ZWdvcnlTZXJ2aWNlLFxyXG4gICAgICAgIHNoYXJlZC5IdHRwV3JhcHBlcixcclxuICAgICAgICBzaGFyZWQuR2xvYmFsVmFsaWRhdG9ycyxcclxuICAgICAgICBzaGFyZWQuTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBzaGFyZWQuUm9sZXNDaGVja2VkU2VydmljZSxcclxuICAgICAgICBBZG1pblNlcnZpY2UsXHJcbiAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyxcclxuICAgICAgICBBdXRoR3VhcmQsXHJcbiAgICAgICAgQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlndXJhdGlvbixcclxuICAgICAgICBGb3J1bVNlY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYWxTdG9yYWdlLCB1c2VGYWN0b3J5OiAoKSA9PiAod2luZG93KSA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiB7fX0sXHJcbiAgICAgICAgTWF0ZXJpYWxDb21tZW50U2VydmljZSxcclxuICAgICAgICBOZXdzU2VydmljZSxcclxuICAgICAgICBQbVNlcnZpY2UsXHJcbiAgICAgICAgVGl0bGUsXHJcbiAgICAgICAgVXNlclNlcnZpY2UsXHJcbiAgICAgICAgV2lzaFNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgT3BhcXVlVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZSA9IG5ldyBPcGFxdWVUb2tlbihcImxvY2FsU3RvcmFnZVwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvbG9jYWwtc3RvcmFnZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgZW5hYmxlUHJvZE1vZGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3JvbGVzLWNoZWNrZWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUm9sZXMgfSBmcm9tIFwiLi9zaGFyZWQvcm9sZXMuaW50ZXJmYWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlOiBUaXRsZSkgeyAvL3RvZG8gbmVlZCB0byBtb3JlIGVsZWdhbnQgZGVjaXNpb25cclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIC8vIFlvdSBuZWVkIHRoaXMgc21hbGwgaGFjayBpbiBvcmRlciB0byBjYXRjaCBhcHBsaWNhdGlvbiByb290IHZpZXcgY29udGFpbmVyIHJlZlxyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7IFxyXG4gICAgICAgIHRpdGxlU2VydmljZS5zZXRUaXRsZShcItCT0LvQsNCy0L3QsNGPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyBcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSHR0cFdyYXBwZXIsIExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7IFxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGlzTG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGh0dHAxOiBIdHRwLCBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZFNlcnZpY2U6IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikgeyAgXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNBY2Nlc3NUb2tlbigpKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gbG9jYWxTdG9yYWdlLmdldFJvbGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZVJvbGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcblxyXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtODtcIik7XHJcbiAgICAgICAgbGV0IHBlcmFtcyA9IGBncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JmNsaWVudF9pZD1jbGllbnRfaWQzYDtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwMS5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXIgKyBcImNvbm5lY3QvdG9rZW5cIixcclxuICAgICAgICAgICAgICAgIHBlcmFtcyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZUxvZ2luQW5zd2VyKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5fYm9keSA9PT0gXCJ1bmNvbmZpcm1lZF9lbWFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi91bmNvbmZpcm1lZEVtYWlsXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRVc2VySWQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ICAgICAgXHJcblxyXG4gICAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUF1dGhUb2tlbnMoKTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvbGVzQ2hlY2tlZFNlcnZpY2UuY2hlY2tSb2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVXNlckluUm9sZShyb2xlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlcy5maW5kKHggPT4geC50b0xvd2VyQ2FzZSgpID09PSByb2xlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUxvZ2luQW5zd2VyKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZS5zZXRBdXRoVG9rZW5zKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VSb2xlcyhpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICB0aGlzLnJvbGVzID0gaXRlbS5fYm9keS5zcGxpdChcIiwgXCIpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldFJvbGVzKHRoaXMucm9sZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Um9sZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwicm9sZVwiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVJvbGVzKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMucm9sZXNDaGVja2VkU2VydmljZS5jaGVja1JvbGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlcklkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcInVzZXIvZ2V0SWRcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuaWQgPSArSlNPTi5wYXJzZShkYXRhLnRleHQoKSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0VXNlcklkKHRoaXMuaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJvbGVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tIFwiLi9wYWdlYWJsZS5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9odHRwV3JhcHBlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sb2NhbFN0b3JhZ2Uuc2VydmljZVwiOyAgXHJcbmV4cG9ydCAqIGZyb20gXCIuL3NlY3VyZWQuZGlyZWN0aXZlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvbGVzLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb2xlcy1jaGVja2VkLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xvYmFsVmFsaWRhdG9yc1wiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBQYWdlYWJsZTxUPiB7XHJcbiAgICBsaXN0OiBUW107XHJcbiAgICBwYWdlTm86IG51bWJlcjtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGl0ZW1QZXJQYWdlOiBudW1iZXI7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvcGFnZWFibGUubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2Uuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFdyYXBwZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICAgICAgICwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgdXBkYXRlSGVhZGVycygpOiBIZWFkZXJzIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZS5oYXNBY2Nlc3NUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW5XaXRoVHlwZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHVybCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmh0dHAuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMudXBkYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMudXBkYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKHVybCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLnVwZGF0ZUhlYWRlcnMoKSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2h0dHBXcmFwcGVyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzQnJvd3NlciwgaXNOb2RlIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiOyAgICAgICAgICAgXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHsgXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogU3RvcmFnZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgIWxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBMb2NhbCBTdG9yYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0FjY2Vzc1Rva2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChcImFjY2Vzc190b2tlblwiKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2Nlc3NUb2tlbldpdGhUeXBlKCk6IHN0cmluZyB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXQoXCJ0b2tlbl90eXBlXCIpfSAke3RoaXMuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9sZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdChcInJvbGVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiArdGhpcy5nZXQoXCJ1c2VySWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUm9sZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJyb2xlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBdXRoVG9rZW5zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwidG9rZW5fdHlwZVwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShcImV4cGlyZXNfaW5cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJyZWZyZXNoX3Rva2VuXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKFwicm9sZXNcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoXCJ1c2VySWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXV0aFRva2VucyhpdGVtOiBhbnkpOiBib29sZWFuIHsgICAgLy90b2RvIHNldCB0eXBlIGhlcmUgYW5kIGJlbG93XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShpdGVtLl9ib2R5KTtcclxuICAgICAgICB0aGlzLnNldChcInRva2VuX3R5cGVcIiwgcmVzcG9uc2UudG9rZW5fdHlwZSk7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJhY2Nlc3NfdG9rZW5cIiwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICB0aGlzLnNldChcImV4cGlyZXNfaW5cIiwgcmVzcG9uc2UuZXhwaXJlc19pbik7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJyZWZyZXNoX3Rva2VuXCIsIHJlc3BvbnNlLnJlZnJlc2hfdG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvbGVzKHJvbGVzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldE9iamVjdChcInJvbGVzXCIsIHJvbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySWQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldE9iamVjdChcInVzZXJJZFwiLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QWRkVmlld0Zvck5ld3MoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0KGBtYXRlcmlhbCR7aWR9YCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoYG1hdGVyaWFsJHtpZH1gLCBcIjFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm47XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0T2JqZWN0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2JqZWN0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyIsImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6IFwiW3NlY3VyZWRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3VyZWREaXJlY3RpdmUge1xyXG4gICAgQEhvc3RCaW5kaW5nKFwiaGlkZGVuXCIpXHJcbiAgICBoaWRlUm91dGVyTGluazogYm9vbGVhbjtcclxuICAgIHJvdXRlckxpbms6IGFueTtcclxuICAgIEBJbnB1dCgpIHNlY3VyZWQ6IGFueTtcclxuXHJcbiAgICByb3V0ZVBhcmFtczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgIC8vICAgdGhpcy5hdXRoU2VydmljZS51c2VyU2lnbnVwJC5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLmNoZWNrUmlnaHRzKCkpO1xyXG4gICAgICAgLy8gdGhpcy5hdXRoU2VydmljZS51c2VyU2lnbnVwJC5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLmNoZWNrUmlnaHRzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyAgICB2YXIgaW5zdHJ1Y3Rpb24gPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSh0aGlzLnJvdXRlUGFyYW1zKTtcclxuICAgIC8vICAgIHZhciBkYXRhID0gaW5zdHJ1Y3Rpb24uY29tcG9uZW50LnJvdXRlRGF0YS5kYXRhO1xyXG4gICAgLy8gICAgdGhpcy5oaWRlUm91dGVyTGluayA9IHRoaXMuc2hvdWxkQmVIaWRkZW4oZGF0YSk7XHJcbiAgLy8gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3VyZWQpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coMSk7ZlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIGhvdyB0byBnZXQgYWNjZXNzIHRvIHRoaXMgcHJpdmF0ZSB2YXJpYWJsZT9cclxuICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVyTGluay5fbmF2aWdhdGlvbkluc3RydWN0aW9uLmNvbXBvbmVudC5yb3V0ZURhdGEuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1JpZ2h0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tSaWdodHMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5zZWN1cmVkKSB7XHJcbiAgICAgICAgICAgLy8gcmVzdWx0ID0gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgLy8gcmVzdWx0ID0gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJJblJvbGUodGhpcy5zZWN1cmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9zaGFyZWQvc2VjdXJlZC5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgXHJcbmltcG9ydCB7IElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0NoZWNrZWRTZXJ2aWNlIHtcclxuXHJcbiAgICBjaGVja2VkUm9sZXM6IElSb2xlcyA9IHtcclxuICAgICAgICBpc0xvZ2luZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlzRWRpdG9yOiBmYWxzZSxcclxuICAgICAgICBpc05ld3NtYWtlcjogZmFsc2UsXHJcbiAgICAgICAgaXNNb2RlcmF0b3I6IGZhbHNlLFxyXG4gICAgICAgIGlzTWFpbk1vZGVyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgaXNBZG1pbkFzc2lzdGFudDogZmFsc2UsXHJcbiAgICAgICAgaXNTZWxmOiB1c2VySWQgPT4gdGhpcy5pc1NlbGYodXNlcklkKVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdOyAgICAgICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSb2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUm9sZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMubG9jYWxTdG9yYWdlLmdldFJvbGVzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvbGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTG9naW5lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0VkaXRvcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tOZXdzbWFrZXIoKTtcclxuICAgICAgICB0aGlzLmNoZWNrTW9kZXJhdG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja01haW5Nb2RlcmF0b3IoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQWRtaW5Bc3Npc3RhbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRWRpdG9yKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiTmV3c0Z1bGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNFZGl0b3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrTmV3c21ha2VyKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiTmV3c1N0YXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFJvbGVzLmlzTmV3c21ha2VyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja01vZGVyYXRvcigpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUm9sZShcIlVzZXJTdGFydFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc01vZGVyYXRvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tNYWluTW9kZXJhdG9yKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiVXNlckZ1bGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUm9sZXMuaXNNYWluTW9kZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0FkbWluQXNzaXN0YW50KCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSb2xlKFwiQWRtaW5TdGFydFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRSb2xlcy5pc0FkbWluQXNzaXN0YW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1JvbGUocm9sZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9sZXMuZmluZCh4ID0+IHgudG9Mb3dlckNhc2UoKSA9PT0gcm9sZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2VsZihhdXRob3JJZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMubG9jYWxTdG9yYWdlLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIHJldHVybiAodXNlcklkID09PSBhdXRob3JJZCk7ICAgICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3NoYXJlZC9yb2xlcy1jaGVja2VkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsVmFsaWRhdG9ycyB7XHJcblxyXG4gICAgc3RhdGljIG1haWxGb3JtYXQoY29udHJvbDogRm9ybUNvbnRyb2wpOiBJVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICAgICAgY29uc3QgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IFwiXCIgJiYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDw9IDUgfHwgIUVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBcImluY29ycmVjdE1haWxGb3JtYXRcIjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKGdyb3VwOiBGb3JtR3JvdXApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvc2hhcmVkL2dsb2JhbFZhbGlkYXRvcnMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcHVibGljIFNlcnZlcjogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjE2NjkvXCI7XHJcbiAgICBwdWJsaWMgQXBpVXJsOiBzdHJpbmcgPSBcImFwaS92MS9cIjtcclxuICAgIHB1YmxpYyBTZXJ2ZXJXaXRoQXBpVXJsID0gdGhpcy5TZXJ2ZXIgKyB0aGlzLkFwaVVybDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIG5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wIFxcXCI+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgY29sLXhzLTMgY29sLXNtLTMgbGlzdC1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgPGxpPjxhIGlkPVxcXCJiYWNrLXRvcFxcXCIgaHJlZj1cXFwiI1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj7QktCy0LXRgNGFPC9hPjwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nSWY9XFxcImF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wbSddXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVxcXCI+PC9zcGFuPiDQp9C40YLQsNGC0Ywg0Lsv0YEgPCEtLSg8c3BhbiBuZy1iaW5kPVxcXCJ2bS51bnJlYWRQbUNvdW50XFxcIj48L3NwYW4+KS0tPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiIWF1dGguaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgPGFjY291bnQtc2lnbmluPjwvYWNjb3VudC1zaWduaW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCIhYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2ZvcmdvdFBhc3N3b3JkJ11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwiYm90dG9tXFxcIiB0aXRsZT1cXFwi0JfQsNCx0YvQu9C4INC/0LDRgNC+0LvRjD9cXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0lmPVxcXCIhYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3NpZ251cCddXFxcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSAqbmdJZj1cXFwiYXV0aC5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcInVzZXJJbmZvKHtpZDogdm0udXNlcklkKCl9KVxcXCIgY2xhc3M9XFxcInBhZGRpbmcwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJuYXYtYXZhdGFyXFxcIiBuZy1zcmM9XFxcInskcm9vdC51c2VySW1hZ2V9fVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJ1c2VySW5mbyh7aWQ6IHZtLnVzZXJJZCgpfSlcXFwiPtCc0L7QuSDQv9GA0L7RhNC40LvRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPtCS0YvQudGC0Lg8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiB0b3A1MFxcXCI+XFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcCByb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIubmF2YmFyLWNvbGxhcHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnLyddXFxcIiBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIj7QndCw0LfQstCw0L3QuNC1INGB0LDQudGC0LA8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnLyddXFxcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIEBpZiAoVXNlci5Jc0luUm9sZShcXFwiQWRtaW5GdWxsXFxcIikpXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgPGxpPiBASHRtbC5BY3Rpb25MaW5rKENvbW1vbk1lc3NhZ2VzLlJvbGVzLCBcXFwiSW5kZXhcXFwiLCBcXFwiUm9sZVxcXCIpIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIH0qQC0tPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZm9ydW0nXVxcXCI+0KTQvtGA0YPQvDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgMV1cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJcXFwiPtCd0L7QstC+0YHRgtC4PGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcInJvbGVzLmlzTmV3c21ha2VyXFxcIj48YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MnLCAwLCAnZWRpdCddXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3c0NhdGVnb3J5J11cXFwiPtCa0LDRgtC10LPQvtGA0LjQuDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJibG9nKClcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJcXFwiPtCR0LvQvtCz0Lg8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGkgbmctaWY9XFxcInZtLmlzQXV0aG9yKClcXFwiPjxhIHVpLXNyZWY9XFxcImJsb2dFZGl0KClcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2E+PC9saT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgdWktc3JlZj1cXFwiYmxvZ0NhdGVnb3JpZXMoKVxcXCI+0JrQsNGC0LXQs9C+0YDQuNC4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJcXFwiPtCk0Jog0JvQuNCy0LXRgNC/0YPQu9GMPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViSGlzdG9yeSddXFxcIj7QmNGB0YLQvtGA0LjRjzwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJcXFwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXIvbGlzdCcsIDFdXFxcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tL2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bC0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbWF0ZXJpYWxDb21tZW50J11cXFwiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxsaT4gPGEgbmctaWY9XFxcInZtLmlzTmV3c21ha2VyKCkgfHwgdm0uaXNBdXRob3IoKVxcXCIgdWktc3JlZj1cXFwiaW1hZ2VzKHtwYXRoOiAnY29udGVudCd9KVxcXCI+0JjQt9C+0LHRgNCw0LbQtdC90LjRjzwvYT48L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2x1YiddXFxcIj7QmtC70YPQsdGLPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tYXRjaCddXFxcIj7QnNCw0YLRh9C4PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ydWxlcyddXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPtCf0YDQsNCy0LjQu9CwPC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImJnLXN1Y2Nlc3NcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnL3dpc2gnXVxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtaW5mb1xcXCI+0J/QvtC20LXQu9Cw0L3QuNGPPC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICB0ZW1wb3JhcnlcXHJcXG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kPVxcXCIkcm9vdC5yb2xlc1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgIDwvaGVhZGVyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib2R5LWNvbnRlbnQgcm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgbmN5LWJyZWFkY3J1bWI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLXB1c2gtMyBjb2wtc20tNiBjb250YWluZXItZmx1aWRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkZWIzXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPHVpYi1hbGVydCBjbGFzcz1cXFwicm93XFxcIiBuZy1yZXBlYXQ9XFxcImFsZXJ0IGluICRyb290LmFsZXJ0c1xcXCIgZGlzbWlzcy1vbi10aW1lb3V0PVxcXCI1MDAwXFxcIiB0eXBlPVxcXCJ7YWxlcnQudHlwZX19XFxcIiBjbG9zZT1cXFwiY2xvc2VBbGVydCgkaW5kZXgpXFxcIiBuZy1iaW5kPVxcXCJhbGVydC5tc2dcXFwiPjwvdWliLWFsZXJ0Pi0tPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgdWktdmlldyBhdXRvc2Nyb2xsPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCIgdWktdmlldz1cXFwibmV3c0ZlZWRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiIHVpLXZpZXc9XFxcImJsb2dzRmVlZFxcXCI+PC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tcHVsbC02IGNvbC1zbS0zIGNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1tZC0gYWxlcnQtaW5mbyByb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDI+0K3QutGB0LXRgtC10YAgPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL3J1L2YvZjcvRXhldGVyX0NpdHlfTG9nby5wbmdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDQ1cHRcXFwiPjM6MDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtbWQtIGFsZXJ0LWRhbmdlciByb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPiDQm9GD0YfRiNC40Lkg0LjQs9GA0L7QuiDQvNCw0YLRh9CwINGBINCt0LrRgdC10YLQtdGA0L7QvCA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZWNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHA6Ly93d3cubXlsaXZlcnBvb2wucnUvaW1hZ2VzL1BsYXllcnMvU3F1YWQxMi0xMy9Kb2VfQWxsZW4ucG5nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCU0LbQviDQkNC70LvQtdC9XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwicm93XFxcIj48L3NlY3Rpb24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxyaWdodC1zaWRlYmFyPjwvcmlnaHQtc2lkZWJhcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxociAvPlxcclxcbiAgICA8Zm9vdGVyIGNsYXNzPVxcXCJib3R0b20gY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxwPiZjb3B5OyBARGF0ZVRpbWUuTm93LlllYXIgLSBAQ29tbW9uTWVzc2FnZXMuU2l0ZVRpdGxlQWRkcmVzczwvcD5cXHJcXG4gICAgPC9mb290ZXI+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5ld3NMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbmV3cy9pbmRleFwiO1xyXG5pbXBvcnQgeyBhdXRoUm91dGVzLCBhdXRoUHJvdmlkZXJzIH0gZnJvbSBcIi4vYXV0aC9hdXRoLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgYWNjb3VudFJvdXRlcyB9IGZyb20gXCIuL2FjY291bnQvYWNjb3VudC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IGNsdWJSb3V0ZXMgfSBmcm9tIFwiLi9jbHViL2NsdWIucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBuZXdzQ2F0ZWdvcnlSb3V0ZXMgfSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgbmV3c1JvdXRlcyB9IGZyb20gXCIuL25ld3MvbmV3cy5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXMgfSBmcm9tIFwiLi91c2VyL3VzZXIucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBwbVJvdXRlcyB9IGZyb20gXCIuL3BtL3BtLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgaG9tZVJvdXRlcyB9IGZyb20gXCIuL2hvbWUvaG9tZS5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IGZvcnVtU2VjdGlvblJvdXRlcyB9IGZyb20gXCIuL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24ucm91dGluZ1wiO1xyXG5pbXBvcnQgeyB3aXNoUm91dGVzIH0gZnJvbSBcIi4vd2lzaC93aXNoLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgbWF0ZXJpYWxDb21tZW50Um91dGVzIH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSBcIi4vbWF0Y2gvbWF0Y2gucm91dGluZ1wiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICAuLi5hY2NvdW50Um91dGVzLFxyXG4gICAgLi4uYXV0aFJvdXRlcyxcclxuICAgIC4uLmNsdWJSb3V0ZXMsXHJcbiAgICAuLi5mb3J1bVNlY3Rpb25Sb3V0ZXMsXHJcbiAgICAuLi5ob21lUm91dGVzLFxyXG4gICAgLi4ubWF0Y2hSb3V0ZXMsXHJcbiAgICAuLi5tYXRlcmlhbENvbW1lbnRSb3V0ZXMsXHJcbiAgICAuLi5uZXdzQ2F0ZWdvcnlSb3V0ZXMsXHJcbiAgICAuLi5uZXdzUm91dGVzLFxyXG4gICAgLi4ucG1Sb3V0ZXMsXHJcbiAgICAuLi51c2VyUm91dGVzLFxyXG4gICAgLi4ud2lzaFJvdXRlcyxcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBOZXdzTGlzdENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXHJcbiAgICBhdXRoUHJvdmlkZXJzXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXBwLnJvdXRlcy50cyIsImV4cG9ydCAqIGZyb20gXCIuL25ld3MtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3MtZWRpdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy5tb2RlbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLnNlcnZpY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gXCIuL25ld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL25ld3MubW9kZWxcIjsgICAgICAgICAgICAgICAgXHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcywgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ld3MtZGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbTogTmV3cztcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJhY3RpdmF0ZU1vZGFsXCIpIGFjdGl2YXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSwgICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XHJcbiAgICAgICAvLyB0aGlzLnRpdGxlID0gdFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBY3RpdmF0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFjdGl2YXRlKHRoaXMuaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZS5kZWxldGUodGhpcy5pdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShpdGVtOiBOZXdzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShpdGVtLnRpdGxlKTtcclxuICAgICAgICB0aGlzLmFkZFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5pdGVtLmlkO1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2UudHJ5QWRkVmlld0Zvck5ld3MoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkVmlldyhpZCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4vbmV3cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsRmlsdGVycyB9IGZyb20gXCIuL25ld3NGaWx0ZXJzLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZXdzU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwibWF0ZXJpYWwvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsID0gKGZpbHRlcnM6TWF0ZXJpYWxGaWx0ZXJzKTogT2JzZXJ2YWJsZTxQYWdlYWJsZTxOZXdzPj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5ld3M+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGUgPSAoaXRlbTogTmV3cyk6IE9ic2VydmFibGU8TmV3cz4gPT4ge1xyXG4gICAgICAgLy8gdmFyIHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoeyBJdGVtTmFtZTogaXRlbSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwgKyBcIk5ld3MvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBOZXdzKTogT2JzZXJ2YWJsZTxOZXdzPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRWaWV3ID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwiYWRkVmlldy9cIiArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhY3RpdmF0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImFjdGl2YXRlL1wiICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiICpuZ0lmPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtZGFuZ2VyIGZsZXgtdmVydGljYWwtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy05IGNvbC1zbS05XFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zIHB1bGwtcmlnaHRcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS51c2VySWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW2hpZGRlbl09XFxcIiFpdGVtLnBlbmRpbmcgfHwgIXJvbGVzLmlzRWRpdG9yXFxcIiAoY2xpY2spPVxcXCJzaG93QWN0aXZhdGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2tcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWQsICdlZGl0J11cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgIDxhcnRpY2xlIFtpbm5lckhUTUxdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCf0YDQvtGB0LzQvtGC0YDRizo8L2xhYmVsPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJlYWRzXFxcIj48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7QmNGB0YLQvtGH0L3QuNC6OjwvbGFiZWw+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uc291cmNlXFxcIj48L3NwYW4+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbD7QlNCw0YLQsCDQtNC+0LHQsNCy0LvQtdC90LjRjzo8L2xhYmVsPiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmFkZGl0aW9uVGltZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPtCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPiA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIDEsIGl0ZW0uY2F0ZWdvcnlJZCBdXFxcIj4gPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5jYXRlZ29yeU5hbWVcXFwiPjwvc3Bhbj4gPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGNvbW1lbnRzIFttYXRlcmlhbElkXT1cXFwiaXRlbS5pZFxcXCIgW2NhbkNvbW1lbnRhcnldPVxcXCJpdGVtLmNhbkNvbW1lbnRhcnlcXFwiPjwvY29tbWVudHM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjYWN0aXZhdGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2YXRlKClcXFwiPtCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uICB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tIFwiLi9uZXdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL25ld3MubW9kZWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsRmlsdGVycyB9IGZyb20gXCIuL25ld3NGaWx0ZXJzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXdzLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWxcIiksXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtczogTmV3c1tdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiYWN0aXZhdGVNb2RhbFwiKSBhY3RpdmF0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWN0aXZhdGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICAgICAgbGV0IG5ld3MgPSB0aGlzLml0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXhdO1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWN0aXZhdGUobmV3cy5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld3MucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXhdLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1JbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJwYWdlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSArcGFyYW1zW1wicGFnZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zW1wiY2F0ZWdvcnlJZFwiXTtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHBhcmFtc1tcInVzZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBsZXQgbmV3VXJsID0gYG5ld3MvbGlzdC8ke3RoaXMucGFnZX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgICAgICAgICAgbmV3VXJsID0gYCR7bmV3VXJsfS8ke3RoaXMuY2F0ZWdvcnlJZH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShuZXdVcmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPE5ld3M+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmlsdGVycyA9IG5ldyBNYXRlcmlhbEZpbHRlcnMoKTtcclxuICAgICAgICBmaWx0ZXJzLmNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgZmlsdGVycy5tYXRlcmlhbFR5cGUgPSBcIk5ld3NcIjtcclxuICAgICAgICBmaWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICBmaWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbChmaWx0ZXJzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAvLyAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIE1hdGVyaWFsRmlsdGVycyB7XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIG1hdGVyaWFsVHlwZTogc3RyaW5nOyAvLzEgLSBuZXdzLCAyIC0gYmxvZ1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzRmlsdGVycy5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPCEtLW5nLWlmPVxcXCJ2bS5wYWdlID4gMFxcXCI+LS0+XFxyXFxuICAgICAgICA8IS0tZm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNhdGVnb3J5SWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJjYXRlZ29yeS5pZCBhcyBjYXRlZ29yeS5uYW1lIGZvciBjYXRlZ29yeSBpbiB2bS5jYXRlZ29yaWVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZUNhdGVnb3J5SWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS51c2VyTmFtZVxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVVzZXJOYW1lKClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQm9C+0LPQuNC9XFxcIi8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0tXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybS0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiICpuZ0lmPVxcXCIhaXRlbS5wZW5kaW5nIHx8IHJvbGVzLmlzRWRpdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LXZlcnRpY2FsLWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cycsIGl0ZW0uaWRdXFxcIiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTlcXFwiPjxoNCBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L2g0PjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zIHB1bGwtcmlnaHRcXFwiICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvciB8fCByb2xlcy5pc1NlbGYoaXRlbS51c2VySWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtoaWRkZW5dPVxcXCIhaXRlbS5wZW5kaW5nIHx8ICFyb2xlcy5pc0VkaXRvclxcXCIgKGNsaWNrKT1cXFwic2hvd0FjdGl2YXRlTW9kYWwoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzJywgaXRlbS5pZCwgJ2VkaXQnXVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd0RlbGV0ZU1vZGFsKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy10aHVtYm5haWwgbmV3cy1taW5pIGNlbnRlci1ibG9ja1xcXCIgYWx0PVxcXCJcXFwiIFtzcmNdPVxcXCJpdGVtLnBob3RvUGF0aFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aT4gPHNwYW4gW2lubmVySFRNTF09XFxcIml0ZW0uYnJpZWZcXFwiPjwvc3Bhbj48L2k+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXN4LTEyIGNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC1pbmxpbmUgc21hbGwgc21hbGwtb2Zmc2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QmtCw0YLQtdCz0L7RgNC40Y86PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj48YSBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIHBhZ2UsIGl0ZW0uY2F0ZWdvcnlJZCBdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmNhdGVnb3J5TmFtZVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JLRgNC10LzRjyDQtNC+0LHQsNCy0LvQtdC90LjRjzo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lXFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPnw8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPtCf0YDQvtGB0LzQvtGC0YDRizwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5yZWFkc1xcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj7QkNCy0YLQvtGAOjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgaXRlbS51c2VySWQgXVxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+fDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlxcXCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuDo8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uY29tbWVudHNDb3VudFxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgICAgICA8IS0tPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zXFxcIiBbdG90YWxJdGVtc109XFxcInRvdGFsSXRlbXNcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFsobmdNb2RlbCldPVxcXCJwYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjdcXFwiIChwYWdlQ2hhbmdlZCk9XFxcInBhZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+LS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2FjdGl2YXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0JDQutGC0LjQstC40YDQvtCy0LDRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmF0ZSgpXFxcIj7QkNC60YLQuNCy0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIFtjb25maWddPVxcXCJ7YmFja2Ryb3A6ICdzdGF0aWMnfVxcXCJcXHJcXG4gICAgIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj7Qo9C00LDQu9C40YLRjD88L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tIFwiLi9uZXdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL25ld3MubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5U2VydmljZSB9IGZyb20gXCIuLi9uZXdzQ2F0ZWdvcnkvaW5kZXhcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5IH0gZnJvbSBcIi4uL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3cy1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbmV3cy1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3c0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcmllczogTmV3c0NhdGVnb3J5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBuZXdzQ2F0ZWdvcnlTZXJ2aWNlOiBOZXdzQ2F0ZWdvcnlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdzU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlQ2F0ZWdvcmllcyhkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGxldCBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c1NlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmNyZWF0ZShuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoZGF0YTogTmV3cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlRm9ybSgpOiBOZXdzIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBOZXdzKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaXRlbS5jYXRlZ29yeUlkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImNhdGVnb3J5SWRcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmJyaWVmID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImJyaWVmXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ubWVzc2FnZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uc291cmNlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInNvdXJjZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLnBob3RvID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInBob3RvXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucGVuZGluZyA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJwZW5kaW5nXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uY2FuQ29tbWVudGFyeSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJjYW5Db21tZW50YXJ5XCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0ub25Ub3AgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wib25Ub3BcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnlJZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3RpdGxlJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnYnJpZWYnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnc291cmNlJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXSldLFxyXG4gICAgICAgICAgICAncGhvdG8nOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdjYW5Db21tZW50YXJ5JzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICAnb25Ub3AnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdwZW5kaW5nJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUNhdGVnb3JpZXMoaXRlbXM6IE5ld3NDYXRlZ29yeVtdKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gaXRlbXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3MtZWRpdC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgTmV3cyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFkZGl0aW9uVGltZTogRGF0ZTtcclxuICAgIHByaXZhdGUgY29tbWVudHNDb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGJyaWVmOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRzOiBudW1iZXI7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIHBob3RvOiBzdHJpbmc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcGVuZGluZzogYm9vbGVhbjtcclxuICAgIG9uVG9wOiBib29sZWFuO1xyXG4gICAgY2FuQ29tbWVudGFyeTogYm9vbGVhbjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3MvbmV3cy5tb2RlbC50cyIsImV4cG9ydCAqIGZyb20gXCIuL25ld3NDYXRlZ29yeS5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25ld3NDYXRlZ29yeS1lZGl0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeSB9IGZyb20gXCIuL05ld3NDYXRlZ29yeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ld3NDYXRlZ29yeVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyBcIm5ld3NDYXRlZ29yeS9cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgPSAoKTogT2JzZXJ2YWJsZTxOZXdzQ2F0ZWdvcnlbXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TmV3c0NhdGVnb3J5PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IE5ld3NDYXRlZ29yeSk6IE9ic2VydmFibGU8TmV3c0NhdGVnb3J5PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogTmV3c0NhdGVnb3J5KTogT2JzZXJ2YWJsZTxOZXdzQ2F0ZWdvcnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeSB9IGZyb20gXCIuL25ld3NDYXRlZ29yeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3c0NhdGVnb3J5LWVkaXRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9uZXdzQ2F0ZWdvcnktZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTmV3c0NhdGVnb3J5U2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbmFtZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0U2luZ2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZWRpdEZvcm0ucGF0Y2hWYWx1ZShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBOZXdzQ2F0ZWdvcnkoKTtcclxuICAgICAgICBtb2RlbC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgbW9kZWwubmFtZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJuYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLmRlc2NyaXB0aW9uID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImRlc2NyaXB0aW9uXCJdLnZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmlkLCBtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4gcmVzID0gZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5jcmVhdGUobW9kZWwpLnN1YnNjcmliZShkYXRhID0+IHJlcyA9IGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIE5ld3NDYXRlZ29yeSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbXNDb3VudDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnkubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidG9wMjBcXFwiPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+0J3QsNC30LLQsNC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ25hbWUnXVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj7QntC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYnJpZWZcXFwiIHJvd3M9XFxcIjRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiB2YWx1ZT1cXFwi0J7RgtC/0YDQsNCy0LjRgtGMXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV3c0NhdGVnb3J5IH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ld3NDYXRlZ29yeVNlcnZpY2UgfSBmcm9tIFwiLi9uZXdzQ2F0ZWdvcnkuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXdzQ2F0ZWdvcnktbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXRlbXM6IE5ld3NDYXRlZ29yeVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c0NhdGVnb3J5U2VydmljZTogTmV3c0NhdGVnb3J5U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShcItCa0LDRgtC10LPQvtGA0LjQuFwiKTtcclxuICAgICAgICB0aGlzLm5ld3NDYXRlZ29yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShtb2RlbDogTmV3c0NhdGVnb3J5W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gbW9kZWw7IFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW2luZGV4XS5pZCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbmV3c0NhdGVnb3J5L25ld3NDYXRlZ29yeS1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8YSBzZWN1cmVkPVxcXCJuZXdzRnVsbFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9uZXdzQ2F0ZWdvcnknLCAwLCAnZWRpdCddXFxcIj7QodC+0LfQtNCw0YLRjCDQutCw0YLQtdCz0L7RgNC40Y48L2E+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBjYXRlZ29yeSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cy9saXN0JywgMSwgY2F0ZWdvcnkuaWQgXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lm5hbWVcXFwiPjwvc3Bhbj4gWzxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNhdGVnb3J5Lml0ZW1zQ291bnRcXFwiPjwvc3Bhbj5dXFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwhLS0tPmEgc2VjdXJlZD1cXFwibmV3c1N0YXJ0XFxcIiBbcm91dGVyTGlua109XFxcIlsnL25ld3MvbGlzdCcsIHBhZ2UsIGl0ZW0uY2F0ZWdvcnlJZCBdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkubmFtZVxcXCI+PC9zcGFuPiBbPHNwYW4gW3RleHRDb250ZW50XT1cXFwiY2F0ZWdvcnkuaXRlbXNDb3VudFxcXCI+PC9zcGFuPl1cXHJcXG4gICAgICAgICAgICA8LyEtLWEtLT5cXHJcXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL25ld3NDYXRlZ29yeScsIGNhdGVnb3J5LmlkLCAnZWRpdCddXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXFxcIj5uZXdzU3RhcnQ8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJjYXRlZ29yeS5pdGVtc0NvdW50ID09IDBcXFwiIChjbGljayk9XFxcImRlbGV0ZShpKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIj5uZXdzRnVsbDwvc3Bhbj48L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL25ld3NDYXRlZ29yeS9uZXdzQ2F0ZWdvcnktbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZWRpdEZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCa0LDRgtC10LPQvtGA0LjRjzo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNhdGVnb3J5SWRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydjYXRlZ29yeUlkJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXFxcIiB2YWx1ZT1cXFwie3tjYXRlZ29yeS5pZH19XFxcIj57e2NhdGVnb3J5Lm5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0J3QsNC30LLQsNC90LjQtTo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPiDQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXJrLWl0LXVwIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJyaWVmXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snYnJpZWYnXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCi0LXQutGB0YIg0L3QvtCy0L7RgdGC0Lg6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgcm93cz1cXFwiNlxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+IDwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCY0YHRgtC+0YfQvdC40Lo6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNvdXJjZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3NvdXJjZSddXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMiBjb2wtc20tMlxcXCI+INCT0LvQsNCy0L3QvtC1INGE0L7RgtC+OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaG90b1BhdGhcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydwaG90byddXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIHVpLXZpZXc9XFxcImZpbGVzXFxcIiBhdXRvc2Nyb2xsPVxcXCJmYWxzZVxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImNhbkNvbW1lbnRhcnlcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWydjYW5Db21tZW50YXJ5J11cXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkIC8+INCg0LDQt9GA0LXRiNC40YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC4XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJvblRvcFxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ29uVG9wJ11cXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiDQndCw0LLQtdGA0YXRg1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicGVuZGluZ1xcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3BlbmRpbmcnXVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+INCe0YLQu9C+0LbQtdC90LBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvbmV3cy9uZXdzLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQsIEF1dGhTZXJ2aWNlIH0gICAgICBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FjY291bnQvYWNjb3VudC1zaWdudXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFJvdXRlczogUm91dGVzID0gWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXTtcclxuZXhwb3J0IGNvbnN0IGF1dGhQcm92aWRlcnMgPSBbXHJcbiAgICBBdXRoR3VhcmQsXHJcbiAgICBBdXRoU2VydmljZVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvYXV0aC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2F1dGgvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsXHJcbiAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgUm91dGVyU3RhdGVTbmFwc2hvdCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhdHRlbXB0ZWQgVVJMIGZvciByZWRpcmVjdGluZ1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPSBzdGF0ZS51cmw7XHJcblxyXG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHRoZSBsb2dpbiBwYWdlXHJcbiAgICAgIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnRTaWdudXBDb21wb25lbnQsIENvbmZpcm1FbWFpbENvbXBvbmVudCwgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsIFVuY29uZmlybWVkRW1haWxDb21wb25lbnQsIFJlc2V0UGFzc3dvcmRDb21wb25lbnQsIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2NvdW50Um91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwic2lnbnVwXCIsIGNvbXBvbmVudDogQWNjb3VudFNpZ251cENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNvbmZpcm1FbWFpbFwiLCBjb21wb25lbnQ6IENvbmZpcm1FbWFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImZvcmdvdFBhc3N3b3JkXCIsIGNvbXBvbmVudDogRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ1bmNvbmZpcm1lZEVtYWlsXCIsIGNvbXBvbmVudDogVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInJlc2V0UGFzc3dvcmRcIiwgY29tcG9uZW50OiBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY2hhbmdlUGFzc3dvcmRcIiwgY29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9hY2NvdW50LXNpZ25pbi5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYWNjb3VudC1zaWdudXAuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpcm1FbWFpbC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZm9yZ290UGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjsgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhY2NvdW50LXNpZ25pblwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2FjY291bnQtc2lnbmluLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndXNlck5hbWUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHJhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbXCJ1c2VyTmFtZVwiXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWduaW4uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImxvZ2luRm9ybTFcXFwiIGNsYXNzPVxcXCJmb3JtLWlubGluZVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDhweDtcXFwiIFtmb3JtR3JvdXBdPVxcXCJsb2dpbkZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGxvZ2luRm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ3VzZXJOYW1lJ11cXFwiIHBsYWNlaG9sZGVyPVxcXCLQm9C+0LPQuNC9XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9Cw0YDQvtC70YxcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhbG9naW5Gb3JtLnZhbGlkXFxcIiB2YWx1ZT1cXFwi0JLQvtC50YLQuFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWduaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2lnbnVwIH0gZnJvbSBcIi4vc2lnbnVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFjY291bnQtc2lnbnVwXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYWNjb3VudC1zaWdudXAuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcclxuICAgIGlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ3VzZXJOYW1lJzogW1wiMTIzXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbIC8vdG9kbyBjb21wb3NlQVN5bmM/P1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV0sXHJcbiAgICAgICAgICAgICdlbWFpbCc6IFtcImFuZHJld19wYXJ5c0B0dXQuYnlcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCAsIEdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW1wiMTIzcXdlIVFcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogW1wiMTIzcXdlIVFcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICAnZnVsbE5hbWUnOiBbXCIxMjNcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXSldLFxyXG4gICAgICAgICAgICAnYmlydGhkYXknOiBbXCIxMC8xMC8yMDE1XCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc2lnbnVwID0gbmV3IFNpZ251cCgpO1xyXG4gICAgICAgIHNpZ251cC51c2VyTmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1widXNlck5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgc2lnbnVwLmVtYWlsID0gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAucGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5jb25maXJtUGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImNvbmZpcm1QYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICBzaWdudXAuZnVsbE5hbWUgPSB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sc1tcImZ1bGxOYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIHNpZ251cC5iaXJ0aGRheSA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzW1wiYmlydGhkYXlcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2VcclxuICAgICAgICAgICAgLmNyZWF0ZShzaWdudXApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7fSwvL3RvZG8gdGhpcy5pZCA9IGRhdGEuaWR9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWdudXAuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFNpZ251cCB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9zaWdudXAubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgU2lnbnVwIH0gZnJvbSBcIi4vc2lnbnVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmQgfSBmcm9tIFwiLi9yZXNldFBhc3N3b3JkLm1vZGVsXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4vY2hhbmdlUGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJhY2NvdW50L1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBTaWdudXApOiBPYnNlcnZhYmxlPFNpZ251cD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCArIFwicmVnaXN0ZXIvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25maXJtRW1haWwgPSAodXNlcklkOiBudW1iZXIsIGNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYGNvbmZpcm1FbWFpbD91c2VySWQ9JHt1c2VySWR9JmNvZGU9JHtjb2RlfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkID0gKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGBmb3Jnb3RQYXNzd29yZD9lbWFpbD0ke2VtYWlsfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2VuZENvbmZpcm1FbWFpbCA9IChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBgcmVzZW5kQ29uZmlybUVtYWlsP2VtYWlsPSR7ZW1haWx9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzZXRQYXNzd29yZCA9IChtb2RlbDogUmVzZXRQYXNzd29yZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYWN0aW9uVXJsICsgYHJlc2V0UGFzc3dvcmRgLCBtb2RlbCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hhbmdlUGFzc3dvcmQgPSAobW9kZWw6IENoYW5nZVBhc3N3b3JkKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hY3Rpb25VcmwgKyBgY2hhbmdlUGFzc3dvcmRgLCBtb2RlbCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2FjY291bnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTIgdG9wMjBcXFwiPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBbZm9ybUdyb3VwXT1cXFwicmVnaXN0ZXJGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdChyZWdpc3RlckZvcm0udmFsdWUpXFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JvQvtCz0LjQvTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0udXNlcm5hbWVcXFwiIGlkPVxcXCJ1c2VyTmFtZVxcXCIgZGVib3VuY2U9XFxcIjUwMDBcXFwiIHZhbGlkYXRpb249XFxcInJlbW90ZTp2bS51c2VyTmFtZVVuaXF1ZSgpOmFsdD3Qn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDQu9C+0LPQuNC90L7QvCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJ8bWluX2xlbjozfG1heF9sZW46MzB8cmVxdWlyZWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIC0tPiAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1sndXNlck5hbWUnXVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0YfRgtC+0LLRi9C5INCw0LTRgNC10YE8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5lbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBkZWJvdW5jZT1cXFwiNTAwMFxcXCIgdmFsaWRhdGlvbj1cXFwicmVtb3RlOnZtLmVtYWlsVW5pcXVlKCk6YWx0PdCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INCw0LTRgNC10YHQvtC8INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgnJlcXVpcmVkfGVtYWlsfG1pbl9sZW46NlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAtLT4gIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2VtYWlsJ11cXFwiIHR5cGU9XFxcImVtYWlsXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJ2bS5yZWdpc3RlckZvcm0ucGFzc3dvcmRcXFwiIGZyaWVuZGx5LW5hbWU9XFxcItCf0LDRgNC+0LvRjFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5wYXNzd29yZFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWR8bWluX2xlbjo2XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAtLT4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlZ2lzdGVyRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgIDwhLS0gICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcIml0ZW0uY29uZmlybVBhc3N3b3JkXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZHxtYXRjaDp2bS5yZWdpc3RlckZvcm0ucGFzc3dvcmQsUGFzc3dvcmQyfG1pbl9sZW46NlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgIC0tPiAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgLz4gXFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0LvQvdC+0LUg0LjQvNGPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZ1bGxOYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5mdWxsTmFtZVxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWR8bWluX2xlbjoyXFxcIi8+XFxyXFxuICAgICAgICAgICAtLT4gICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydmdWxsTmFtZSddXFxcIiAgdHlwZT1cXFwidGV4dFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIDxkYXRlcGlja2VyICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2JpcnRoZGF5J11cXFwiPjwvZGF0ZXBpY2tlcj4gXFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbGlkYXRpb249XFxcInJlcXVpcmVkXFxcIiBuYW1lPVxcXCJiaXJ0aGRheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1yZWFkb25seT1cXFwidHJ1ZVxcXCIgc2hvdy1idXR0b24tYmFyPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1aWItZGF0ZXBpY2tlci1wb3B1cD1cXFwiZGQvTU1NTS95eXl5XFxcIiBbKG5nTW9kZWwpXT1cXFwiaXRlbS5iaXJ0aGRheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpcy1vcGVuPVxcXCJ2bS5zdGF0dXMub3BlbmVkXFxcIiBkYXRlcGlja2VyLW9wdGlvbnM9XFxcInZtLmRhdGVPcHRpb25zXFxcIiBjbG9zZS10ZXh0PVxcXCLQl9Cw0LrRgNGL0YLRjFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQtaW5wdXQtZm9ybWF0cz1cXFwiYWx0SW5wdXRGb3JtYXRzXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICBzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG4gdmEtdG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbigpXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cXHJcXG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydiaXJ0aGRheSddXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtkaXNhYmxlZF09XFxcIiFyZWdpc3RlckZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvYWNjb3VudC1zaWdudXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZW1haWwtY29uZmlybWF0aW9uXCIsXHJcbiAgICB0ZW1wbGF0ZTogXCI8c3BhbiBbaGlkZGVuXT0nIXJlc3VsdCc+0JLQsNGIINCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINGD0YHQv9C10YjQvdC+INC/0L7QtNGC0LLQtdGA0LbQtNC10L0uINCc0L7QttC10YLQtSDQstC+0LnRgtC4INC4INCx0YvRgtGMINC60LDQuiDQtNC+0LzQsC48L3NwYW4+XCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcInVzZXJJZFwiXTtcclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBwYXJhbXNbXCJjb2RlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmNvbmZpcm1FbWFpbChpZCwgY29kZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnJlc3VsdCA9IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWNjb3VudC9jb25maXJtRW1haWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gXCIuL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJmb3Jnb3QtcGFzc3dvcmRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9mb3Jnb3RQYXNzd29yZC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcmdvdEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBmaW5pc2g6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZvcmdvdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChyYTogYW55KTogdm9pZCB7ICAgICBcclxuICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy5mb3Jnb3RGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7ICAgICAgICBcclxuICAgICAgICB0aGlzLnNlcnZpY2UuZm9yZ290UGFzc3dvcmQodGhpcy5lbWFpbCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmluaXNoID0gdHJ1ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImZvcmdvdEVtYWlsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZm9yZ290Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoZm9yZ290Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxBZGRyZXNzXFxcIj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbEFkZHJlc3NcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcImZvcmdvdEZvcm0uY29udHJvbHNbJ2VtYWlsJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZm9yZ290Rm9ybS52YWxpZFxcXCIgdmFsdWU9XFxcItCe0YLQv9GA0LDQstC40YLRjFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiLi9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9ycyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZCB9IGZyb20gXCIuL3Jlc2V0UGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicmVzZXQtcGFzc3dvcmRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHJlc2V0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgZmluaXNoOiBib29sZWFuO1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHBhcmFtc1tcImNvZGVcIl07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VtYWlsJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3JzLm1haWxGb3JtYXRdKV0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgICdjb25maXJtUGFzc3dvcmQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgIH0sIHsgdmFsaWRhdG9yOiBHbG9iYWxWYWxpZGF0b3JzLm1hdGNoaW5nUGFzc3dvcmRzKFwicGFzc3dvcmRcIiwgXCJjb25maXJtUGFzc3dvcmRcIikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChyYTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc2V0UGFzc3dvcmQgPSBuZXcgUmVzZXRQYXNzd29yZCgpO1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQuY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmVtYWlsID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLnBhc3N3b3JkID0gdGhpcy5yZXNldEZvcm0uY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZTtcclxuICAgICAgICByZXNldFBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucmVzZXRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZXNldFBhc3N3b3JkKHJlc2V0UGFzc3dvcmQpLnN1YnNjcmliZShkYXRhID0+IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpbmlzaCA9IHRydWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBuYW1lPVxcXCJyZXNldEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJyZXNldEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KHJlc2V0Rm9ybS52YWx1ZSlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHByZSAqbmdJZj1cXFwicmVzZXRGb3JtLmVycm9yc1xcXCI+e3tyZXNldEZvcm0uZXJyb3JzIHwganNvbn19PC9wcmU+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxBZGRyZXNzXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJyZXNldEZvcm0uY29udHJvbHNbJ2VtYWlsJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXFxcIj7QndC+0LLRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlc2V0Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC90L7QstC+0LPQviDQv9Cw0YDQvtC70Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFtmb3JtQ29udHJvbF09XFxcInJlc2V0Rm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtkaXNhYmxlZF09XFxcIiFyZXNldEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J/QvtC80LXQvdGP0YLRjCDQv9Cw0YDQvtC70Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiOyAgICAgICAgXHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7ICAgIFxyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3JzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuL2NoYW5nZVBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNoYW5nZS1wYXNzd29yZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ29sZFBhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ25ld1Bhc3N3b3JkJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV1cclxuICAgICAgICB9LCB7IHZhbGlkYXRvcjogR2xvYmFsVmFsaWRhdG9ycy5tYXRjaGluZ1Bhc3N3b3JkcyhcIm5ld1Bhc3N3b3JkXCIsIFwiY29uZmlybVBhc3N3b3JkXCIpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHJhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmQoKTtcclxuICAgICAgICBtb2RlbC5vbGRQYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wib2xkUGFzc3dvcmRcIl0udmFsdWU7XHJcbiAgICAgICAgbW9kZWwubmV3UGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRm9ybS5jb250cm9sc1tcIm5ld1Bhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIG1vZGVsLmNvbmZpcm1QYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGb3JtLmNvbnRyb2xzW1wiY29uZmlybVBhc3N3b3JkXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VQYXNzd29yZChtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3doYXQgdG9kbz9cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIHtcclxuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPtCY0LfQvNC10L3QtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgW2Zvcm1Hcm91cF09XFxcInBhc3N3b3JkRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQocGFzc3dvcmRGb3JtLnZhbHVlKVxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0KHRgtCw0YDRi9C5INC/0LDRgNC+0LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcIm9sZFBhc3N3b3JkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJwYXNzd29yZEZvcm0uY29udHJvbHNbJ29sZFBhc3N3b3JkJ11cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Yw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJuZXdQYXNzd29yZFxcXCIgW2Zvcm1Db250cm9sXT1cXFwicGFzc3dvcmRGb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJwYXNzd29yZEZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2Rpc2FibGVkXT1cXFwiIXBhc3N3b3JkRm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QmNC30LzQtdC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9hY2NvdW50L2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInVuY29uZmlybWVkRW1haWxcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi91bmNvbmZpcm1lZEVtYWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVW5jb25maXJtZWRFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1bmNvbmZpcm1lZEZvcm06IEZvcm1Hcm91cDsgXHJcbiAgICBmaW5pc2g6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVuY29uZmlybWVkRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW1haWwnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvcnMubWFpbEZvcm1hdF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDEyMTEpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IHRoaXMudW5jb25maXJtZWRGb3JtLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnJlc2VuZENvbmZpcm1FbWFpbChlbWFpbCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9PC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcInVuY29uZmlybWVkRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgW2Zvcm1Hcm91cF09XFxcInVuY29uZmlybWVkRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCIgKm5nSWY9XFxcIiFmaW5pc2hcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgW2Zvcm1Db250cm9sXT1cXFwidW5jb25maXJtZWRGb3JtLmNvbnRyb2xzWydlbWFpbCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiF1bmNvbmZpcm1lZEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCf0LXRgNC10YHQu9Cw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImZpbmlzaFxcXCI+0J/QuNGB0YzQvNC+INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2FjY291bnQvdW5jb25maXJtZWRFbWFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDbHViTGlzdENvbXBvbmVudCwgQ2x1YkVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsdWJSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJjbHViLzppZC9lZGl0XCIsIGNvbXBvbmVudDogQ2x1YkVkaXRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjbHViXCIsIGNvbXBvbmVudDogQ2x1Ykxpc3RDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vY2x1Yi5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NsdWItbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY2x1Yi1lZGl0LmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciwgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwiLi9jbHViLm1vZGVsXCI7ICAgICAgICAgXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbHViU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwiY2x1Yi9cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgPSAocGFnZSk6IE9ic2VydmFibGU8UGFnZWFibGU8Q2x1Yj4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGBsaXN0LyR7cGFnZX1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q2x1Yj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZSA9IChpdGVtOiBDbHViKTogT2JzZXJ2YWJsZTxDbHViPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aW9uVXJsLCBKU09OLnN0cmluZ2lmeShpdGVtKSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogQ2x1Yik6IE9ic2VydmFibGU8Q2x1Yj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0QnlOYW1lID0gKHR5cGVkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENsdWJbXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgYC9nZXRDbHVic0J5TmFtZS8ke3R5cGVkfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwiLi9jbHViLm1vZGVsXCI7XHJcbmltcG9ydCB7IENsdWJTZXJ2aWNlIH0gZnJvbSBcIi4vY2x1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuLy9pbXBvcnQgeyBVc2VyRmlsdGVycyB9IGZyb20gXCIuL3VzZXJGaWx0ZXJzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNsdWItbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NsdWItbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENsdWJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBpdGVtczogQ2x1YltdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICAvL2NhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gbnVsbDsgXHJcbiAgICBAVmlld0NoaWxkKFwiZGVsZXRlTW9kYWxcIikgZGVsZXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2x1YlNlcnZpY2U6IENsdWJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlU2VydmljZS5zZXRUaXRsZShcItCa0LvRg9Cx0YtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICtwYXJhbXNbXCJwYWdlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICB0aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zWydjYXRlZ29yeUlkJ107XHJcbiAgICAgICAgICAgIC8vICB0aGlzLnVzZXJOYW1lID0gcGFyYW1zWyd1c2VyTmFtZSddO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy9sZXQgZmlsdGVycyA9IG5ldyBVc2VyRmlsdGVycygpO1xyXG4gICAgICAgIC8vLy8gIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgICAvLy8vICBmaWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIC8vZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgLy9maWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbCh0aGlzLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCBuZXdVcmwgPSBgY2x1Yi9saXN0LyR7dGhpcy5wYWdlfWA7XHJcbiAgICAgICAgLy9pZiAodGhpcy5jYXRlZ29yeUlkKSB7XHJcbiAgICAgICAvLyAgICAgbmV3VXJsID0gYCR7bmV3VXJsfS8ke3RoaXMuY2F0ZWdvcnlJZH1gO1xyXG4gICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcGFyc2VQYWdlYWJsZShwYWdlYWJsZTogUGFnZWFibGU8Q2x1Yj4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmUgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4tLVxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclRleHRcXFwiIG5nLW1vZGVsLW9wdGlvbnM9XFxcIntkZWJvdW5jZTogMTAwMH1cXFwiIG5nLWNoYW5nZT1cXFwidm0uZmlsdGVyQnlUZXh0KClcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INCyINGC0LXQutGB0YLQtSDQv9C+0LbQtdC70LDQvdC40LlcXFwiIC8+IDwhLS10b2RvIG1hZ2ljIG51bWJlclxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NsdWInLCAwLCAnZWRpdCddXFxcIj7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jbHViJywgaXRlbS5pZCwgJ2VkaXQnXVxcXCI+PHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5uYW1lXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiaXRlbS5lbmdsaXNoTmFtZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyXFxcIiBzcmM9XFxcInt7aXRlbS5sb2dvfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtc1xcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgQ2x1YlNlcnZpY2UgfSBmcm9tIFwiLi9jbHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCIuL2NsdWIubW9kZWxcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgUm9sZXNDaGVja2VkU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2x1Yi1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2x1Yi1lZGl0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2x1YkVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBpdGVtOiBDbHViO1xyXG4gICAgdXBsb2FkRmlsZTogYW55O1xyXG4gICAgaGFzQmFzZURyb3Bab25lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyBcclxuICAgIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjbHViU2VydmljZTogQ2x1YlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gbmV3IENsdWIoKTtcclxuICAgICAgICB0aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC60LvRg9Cx0LBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHViU2VydmljZS5nZXRTaW5nbGUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImVuZ2xpc2hOYW1lXCJdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwbG9hZCgpIHsgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBsb2FkZXIucXVldWVbMF0ub25Db21wbGV0ZSA9IChyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibG9nb1wiXS5wYXRjaFZhbHVlKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci51cGxvYWRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGxldCBuZXdzSXRlbSA9IHRoaXMucGFyc2VGb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2x1YlNlcnZpY2UudXBkYXRlKHRoaXMuaWQsIG5ld3NJdGVtKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuaWQpLC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld3NcIiwgZGF0YS5pZF0pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsdWJTZXJ2aWNlLmNyZWF0ZShuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbU51bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlT3B0aW9ucyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvdjEvdXBsb2FkL2NsdWJMb2dvLyR7bmFtZX1gLFxyXG4gICAgICAgICAgICBhdXRoVG9rZW46IHRoaXMubG9jYWxTdG9yYWdlLmdldEFjY2Vzc1Rva2VuV2l0aFR5cGUoKSxcclxuICAgICAgICAgICAgLy8gIGFsbG93ZWRGaWxlVHlwZTogW1wianBnXCIsIFwianBlZ1wiLCBcInBuZ1wiXSxcclxuICAgICAgICAgICAgYXV0b1VwbG9hZDogZmFsc2VcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBhbGxvd2VkRXh0ZW5zaW9uczogW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBnXCJdLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGRhdGE6IENsdWIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUZvcm0oKTogQ2x1YiB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgQ2x1YigpO1xyXG4gICAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGl0ZW0uZW5nbGlzaE5hbWUgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiZW5nbGlzaE5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5sb2dvID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImxvZ29cIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgaXRlbS5zdGFkaXVtID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInN0YWRpdW1cIl0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZW5nbGlzaE5hbWUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgJ2xvZ28nOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICduYW1lJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV0sXHJcbiAgICAgICAgICAgICdzdGFkaXVtJzogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1lZGl0LmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBDbHViIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbmdsaXNoTmFtZTogc3RyaW5nO1xyXG4gICAgc3RhZGl1bTogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvY2x1Yi9jbHViLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGVkaXRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodC+0L/QtdGA0L3QuNC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hbWVcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyXFxcIiBzcmM9XFxcInt7ZWRpdEZvcm0/LmNvbnRyb2xzWydsb2dvJ10udmFsdWV9fVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImxvZ29cXFwiIG5vdmFsaWRhdGUgcmVhZG9ubHkgLz5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgbmcyRmlsZVNlbGVjdCBbdXBsb2FkZXJdPVxcXCJ1cGxvYWRlclxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRGb3JtLmNvbnRyb2xzWydlbmdsaXNoTmFtZSddLnZhbGlkXFxcIi8+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtoaWRkZW5dPVxcXCIhdGhpcy51cGxvYWRlcj8ucXVldWVcXFwiIChjbGljayk9XFxcInVwbG9hZCgpXFxcIj7Ql9Cw0LPRgNGD0LfQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0J3QsNC30LLQsNC90LjQtSDQutC70YPQsdCwINC90LAg0LDQvdCz0LvQuNC50YHQutC+0Lw8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidGl0bGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZW5nbGlzaE5hbWVcXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0YLQsNC00LjQvtC9PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YWRpdW1cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2NsdWIvY2x1Yi1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5LWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3c0NhdGVnb3J5RWRpdENvbXBvbmVudH0gZnJvbSBcIi4vbmV3c0NhdGVnb3J5LWVkaXQuY29tcG9uZW50XCI7XHJcbmV4cG9ydCBjb25zdCBuZXdzQ2F0ZWdvcnlSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ25ld3NDYXRlZ29yeScsIGNvbXBvbmVudDogTmV3c0NhdGVnb3J5TGlzdENvbXBvbmVudCB9LCAvL3RvZG8sIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSAgfVxyXG4gICAgeyBwYXRoOiAnbmV3c0NhdGVnb3J5LzppZC9lZGl0JywgY29tcG9uZW50OiBOZXdzQ2F0ZWdvcnlFZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzQ2F0ZWdvcnkvbmV3c0NhdGVnb3J5LnJvdXRpbmcudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmV3c0xpc3RDb21wb25lbnQsIE5ld3NEZXRhaWxDb21wb25lbnQsIE5ld3NFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwibmV3c1wiLCBjb21wb25lbnQ6IE5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy9saXN0XCIsIGNvbXBvbmVudDogTmV3c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJuZXdzL2xpc3QvOnBhZ2VcIiwgY29tcG9uZW50OiBOZXdzTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm5ld3MvbGlzdC86cGFnZS86Y2F0ZWdvcnlJZFwiLCBjb21wb25lbnQ6IE5ld3NMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy86aWRcIiwgY29tcG9uZW50OiBOZXdzRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibmV3cy86aWQvZWRpdFwiLCBjb21wb25lbnQ6IE5ld3NFZGl0Q29tcG9uZW50IH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9uZXdzL25ld3Mucm91dGluZy50cyIsImltcG9ydCB7IFJvdXRlcyB9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1VzZXJEZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL3VzZXItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi91c2VyLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCBjb25zdCB1c2VyUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICd1c2VyJywgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci9saXN0JywgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci9saXN0LzpwYWdlJywgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndXNlci9saXN0LzpwYWdlLzp1c2VyTmFtZScsIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3VzZXIvOmlkJywgY29tcG9uZW50OiBVc2VyRGV0YWlsQ29tcG9uZW50IH1cclxuICAvLyAgeyBwYXRoOiAnbmV3cy86aWQvZWRpdCcsIGNvbXBvbmVudDogTmV3c0VkaXRDb21wb25lbnQgfVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3VzZXIvdXNlci5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidXNlci1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi91c2VyLWRldGFpbC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW06IFVzZXI7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuR2V0U2luZ2xlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2UoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKGl0ZW06IFVzZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7SHR0cFdyYXBwZXJ9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQge1VzZXJGaWx0ZXJzfSBmcm9tIFwiLi91c2VyRmlsdGVycy5tb2RlbFwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHtQYWdlYWJsZX0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwV3JhcHBlciwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VcmwgPSBjb25maWd1cmF0aW9uLlNlcnZlcldpdGhBcGlVcmwgKyAndXNlci8nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRBbGwgPSAoZmlsdGVyczogVXNlckZpbHRlcnMpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPFVzZXI+PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcImxpc3QvXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZmlsdGVycykpKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgR2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFVzZXI+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ3JlYXRlID0gKGl0ZW06IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+ID0+IHtcclxuICAgICAgICB2YXIgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7IEl0ZW1OYW1lOiBpdGVtIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBVcGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgRGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwge307XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiICpuZ0lmPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS51c2VyTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gW2hpZGRlbl09XFxcIiFyb2xlcy5pc0xvZ2luZWQgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uaWQpXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSB1aS1zcmVmPVxcXCJ3cG0oeyB1c2VyTmFtZTogaXRlbS51c2VyTmFtZSB9KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvaDI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyXFxcIiBzcmM9XFxcInt7aXRlbS5waG90b319XFxcIiBhbHQ9XFxcInt7aXRlbS51c2VyTmFtZX19XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInJvbGVzLmlzU2VsZihpdGVtLmlkKSB8fCByb2xlcy5pc01vZGVyYXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgbmdmLXNlbGVjdD1cXFwidm0udXBsb2FkRmlsZXMoJGZpbGUsICRpbnZhbGlkRmlsZXMpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCIgbmdmLW1heC1oZWlnaHQ9XFxcIjEwMDBcXFwiIG5nZi1tYXgtc2l6ZT1cXFwiMU1CXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCe0LHQvdC+0LLQuNGC0Ywg0LDQstCw0YLQsNGAXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJyb2xlcy5pc1NlbGYoaXRlbS5pZClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jaGFuZ2VQYXNzd29yZCddXFxcIj7QmNC30LzQtdC90LjRgtGMINC/0LDRgNC+0LvRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwidm0uZXJyRmlsZS4kZXJyb3JcXFwiIG5nLWJpbmQ9XFxcInZtLmVyckZpbGUuJGVycm9yXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJ2bS5lcnJGaWxlLiRlcnJvclBhcmFtXFxcIiBuZy1iaW5kPVxcXCJ2bS5lcnJGaWxlLiRlcnJvclBhcmFtXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIG5nLXNob3c9XFxcImYucHJvZ3Jlc3MgPj0gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIndpZHRoOnt7Zi5wcm9ncmVzc319JVxcXCIgbmctYmluZD1cXFwiZi5wcm9ncmVzcyArICclJ1xcXCI+PC8hLS1zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCb0L7Qs9C40L08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0udXNlck5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwicm9sZXMuaXNNb2RlcmF0b3IgfHwgcm9sZXMuaXNTZWxmKGl0ZW0uaWQpXFxcIiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Ql9Cw0LHQsNC90LjRgtGMPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLXNob3c9XFxcIiFpdGVtLmxvY2tvdXRFbmREYXRlVXRjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cXFwiMFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJpdGVtLmJhbkRheXNDb3VudFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy04IGNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwidm0uYmFuKClcXFwiIG5nRGlzYWJsZWQ9XFxcIml0ZW0uYmFuRGF5c0NvdW50IDw9IDBcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCIgW2hpZGRlbl09XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTggY29sLXNtLTggZmxleC12ZXJ0aWNhbC1jZW50ZXJcXFwiICpuZ0lmPVxcXCJpdGVtLmxvY2tvdXRFbmREYXRlVXRjXFxcIj7QkNC60YLQuNCy0L3QvtGB0YLRjCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0L3QsCDQtNC+IDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ubG9ja291dEVuZERhdGVVdGMgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHNlY3VyZWQ9XFxcIidVc2Vyc0Z1bGwnXFxcIiBuZy1jbGljaz1cXFwidm0udW5iYW4oKVxcXCI+0KHQvdGP0YLRjCDQsdCw0L08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qk9GA0YPQv9C/0LA6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0ucm9sZUdyb3VwTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBzZWN1cmVkPVxcXCInQWRtaW5TdGFydCdcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5ld3NDYXRlZ29yeUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwiaXRlbS5yb2xlR3JvdXBJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwicm9sZUdyb3VwLmlkIGFzIHJvbGVHcm91cC5uYW1lIGZvciByb2xlR3JvdXAgaW4gdm0ucm9sZUdyb3Vwc1xcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIG5nLWNoYW5nZT1cXFwidm0uZWRpdFJvbGUoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIXJvbGVzLmlzU2VsZiB8fCAhcm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBbaGlkZGVuXT1cXFwiIWl0ZW0uZW1haWxDb25maXJtZWRcXFwiPtCf0L7Rh9GC0LA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTIgY29udHJvbC1sYWJlbCB0ZXh0LWRhbmdlclxcXCIgdWliLXRvb2x0aXA9XFxcItCf0L7Rh9GC0LAg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LBcXFwiIFtoaWRkZW5dPVxcXCJpdGVtLmVtYWlsQ29uZmlybWVkXFxcIj7Qn9C+0YfRgtCwPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5lbWFpbFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7RgdC70LXQtNC90LjQuSDQstGF0L7QtCA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmxhc3RNb2RpZmllZE9uIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LDRgtCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lg8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLnJlZ2lzdHJhdGlvbkRhdGUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCf0L7Qu9C90L7QtSDQuNC80Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmZ1bGxOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmJpcnRoZGF5XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y88L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmJpcnRoZGF5IHwgZGF0ZTonbG9uZ0RhdGUnXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLmdlbmRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj7Qn9C+0Ls8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAqbmdJZj1cXFwiaXRlbS5nZW5kZXJcXFwiPtCU0LXQstGD0YjQutCwPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAqbmdJZj1cXFwiIWl0ZW0uZ2VuZGVyXFxcIj7Qn9Cw0YDQtdC90Yw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiaXRlbS5uZXdzQ291bnQgPiAwXFxcIj48YSB1aS1zcmVmPVxcXCJuZXdzKHsgcGFnZTogMSwgdXNlck5hbWU6IGl0ZW0udXNlck5hbWV9KVxcXCI+0J3QvtCy0L7RgdGC0LgoPHNwYW4gW3RleHRDb250ZW50XT1cXFwiaXRlbS5uZXdzQ291bnRcXFwiPjwvc3Bhbj4pPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT58PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJpdGVtLmJsb2dzQ291bnQgPiAwXFxcIj48YSB1aS1zcmVmPVxcXCJibG9nKHtwYWdlOiAxLCB1c2VyTmFtZTogaXRlbS51c2VyTmFtZX0pXFxcIj7QkdC70L7Qs9C4KDxzcGFuIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYmxvZ3NDb3VudFxcXCI+PC9zcGFuPik8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48IS0tc2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJjaGFuZ2VSb2xlQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgNC+0LvQuDwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgINCY0LfQvNC10L3QuNGC0Yw/XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5vaygpXFxcIj7QmNC30LzQtdC90LjRgtGMPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbCgpXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC8hLS1zY3JpcHQ+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwiYmFuQ29uZmlybWF0aW9uLmh0bWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+PC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAg0JfQsNCx0LDQvdC40YLRjD9cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLm9rKClcXFwiPtCX0LDQsdCw0L3QuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uY2FuY2VsKClcXFwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD4tLT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJGaWx0ZXJzIH0gZnJvbSBcIi4vdXNlckZpbHRlcnMubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidXNlci1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vdXNlci1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW1zOiBVc2VyW107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICtwYXJhbXNbXCJwYWdlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgdGhpcy5jYXRlZ29yeUlkID0gK3BhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgLy8gIHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ3VzZXJOYW1lJ107XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUGFnZWFibGUocGFnZWFibGU6IFBhZ2VhYmxlPFVzZXI+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBuZXcgVXNlckZpbHRlcnMoKTtcclxuICAgICAgLy8gIGZpbHRlcnMuY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcnlJZDtcclxuICAgICAgLy8gIGZpbHRlcnMubWF0ZXJpYWxUeXBlID0gXCJOZXdzXCI7XHJcbiAgICAgICAgZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgZmlsdGVycy5wYWdlID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5HZXRBbGwoZmlsdGVycylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXItbGlzdC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgVXNlckZpbHRlcnMge1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC91c2VyL3VzZXJGaWx0ZXJzLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtY29uZGVuc2VkXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7Qn9C+0YHQu9C10LTQvdC40Lkg0LLRhdC+0LQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+0JvQvtCz0LjQvTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD7QlNCw0YLQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPtCT0YDRg9C/0L/QsDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHkgKm5nRm9yPVxcXCJsZXQgdXNlciBvZiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCIgW3RleHRDb250ZW50XT1cXFwidXNlci5sYXN0TW9kaWZpZWQgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCB1c2VyLmlkIF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibWluaS1hdmF0YXJcXFwiIHNyYz1cXFwie3t1c2VyLnBob3RvfX1cXFwiIGFsdD1cXFwie3t1c2VyLnVzZXJOYW1lfX1cXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLnVzZXJOYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiIHVpYi10b29sdGlwPVxcXCLQn9C+0YfRgtCwINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvdCwXFxcIiBbaGlkZGVuXT1cXFwidXNlci5lbWFpbENvbmZpcm1lZFxcXCI+ICo8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBuZy1zaG93PVxcXCJsb2dnZWRJbigpICYmIHZtLmlzTm90U2VsZih1c2VyLmlkLCB1c2VySWQoKSlcXFwiIHVpLXNyZWY9XFxcIndwbSh7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lIH0pXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJcXFwiIFt0ZXh0Q29udGVudF09XFxcInVzZXIucmVnaXN0cmF0aW9uRGF0ZSB8IGRhdGU6J21lZGl1bSdcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJ1c2VyLnJvbGVHcm91cE5hbWVcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNob3NlblJvbGVHcm91cElkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInJvbGVHcm91cC5pZCBhcyByb2xlR3JvdXAubmFtZSBmb3Igcm9sZUdyb3VwIGluIHZtLnJvbGVHcm91cHNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlUm9sZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmZpbHRlclVzZXJOYW1lXFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VXNlck5hbWUoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCb0L7Qs9C40L1cXFwiIC8+IDwhLS10b2RvIG1hZ2ljIG51bWJlci0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLT51aWItcGFnaW5hdGlvbiBuZy1zaG93PVxcXCJ2bS50b3RhbEl0ZW1zID4gdm0uaXRlbVBlclBhZ2VcXFwiIHRvdGFsLWl0ZW1zPVxcXCJ2bS50b3RhbEl0ZW1zXFxcIiBuZy1tb2RlbD1cXFwidm0ucGFnZU5vXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmdvVG9QYWdlKClcXFwiPjwvIS0tdWliLXBhZ2luYXRpb24tLS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvdXNlci91c2VyLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUG1MaXN0Q29tcG9uZW50LCBQbURldGFpbENvbXBvbmVudCwgUG1FZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbVJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcInBtXCIsIGNvbXBvbmVudDogUG1MaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicG0vOmlkXCIsIGNvbXBvbmVudDogUG1EZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJwbS86aWQvZWRpdFwiLCBjb21wb25lbnQ6IFBtRWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0ucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL3BtLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BtLWxpc3QuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BtLWRldGFpbC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG0tZWRpdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG0uc2VydmljZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL2luZGV4LnRzIiwiZXhwb3J0IGNsYXNzIFBtIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBzZW5kZXJJZDogbnVtYmVyO1xyXG4gICAgc2VuZGVyOiBzdHJpbmc7XHJcbiAgICByZWNlaXZlcklkOiBudW1iZXI7XHJcbiAgICByZWNlaXZlcjogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHNlbnRUaW1lOiBEYXRlO1xyXG4gICAgaXNSZWFkOiBib29sZWFuO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL3BtL3BtLm1vZGVsLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBQbSB9IGZyb20gXCIuL3BtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBtU2VydmljZSB9IGZyb20gXCIuL3BtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicG0tbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BtLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHJlY2VpdmVkOiBQbVtdO1xyXG4gICAgc2VudDogUG1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBtU2VydmljZTogUG1TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wbVNlcnZpY2VcclxuICAgICAgICAgICAgLkdldEFsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlKG1vZGVsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZCA9IG1vZGVsLnJlY2VpdmVkO1xyXG4gICAgICAgIHRoaXMuc2VudCA9IG1vZGVsLnNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGVsZXRlXCIpO1xyXG4gICAgICAgIC8vdGhpcy5uZXdzQ2F0ZWdvcnlTZXJ2aWNlLkRlbGV0ZSh0aGlzLml0ZW1zW2luZGV4XS5pZCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSxcclxuICAgICAgICAvLyAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgLy8gICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIHJlbW92ZSBjYXRlZ29yeXVcIikpO1xyXG4gICAgICAgIC8vdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgUG0gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBtU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwicG0vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEFsbCA9ICgpOiBPYnNlcnZhYmxlPFBtW10+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBHZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8UG0+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ3JlYXRlID0gKGl0ZW06IFBtKTogT2JzZXJ2YWJsZTxQbT4gPT4ge1xyXG4gICAgICAgLy8gdmFyIHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoeyBJdGVtTmFtZTogaXRlbSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogUG0pOiBPYnNlcnZhYmxlPFBtPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHRoaXMuYWN0aW9uVXJsICsgaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1VwZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgRGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8bWQtdGFiLWdyb3VwIFtzZWxlY3RlZEluZGV4XT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQtdC90L3Ri9C1XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JfQsNCz0L7Qu9C+0LLQvtC6PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0J7RgtC/0YDQsNCy0LjRgtC10LvRjDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCU0LDRgtCwINC/0L7Qu9GD0YfQtdC90LjRjzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIHJlY2VpdmVkOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwiaSArIDFcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgbWVzc2FnZS5pZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgKm5nSWY9XFxcIiFtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9iPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBtZXNzYWdlLnNlbmRlcklkXVxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS5zZW5kZXJVc2VyTmFtZVxcXCI+PC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFt0ZXh0Q29udGVudF09XFxcIm1lc3NhZ2Uuc2VudFRpbWUgfCBkYXRlOidtZWRpdW0nXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvbWQtdGFiPlxcclxcbiAgICAgICAgPG1kLXRhYj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgbWQtdGFiLWxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQu9C10L3QvdGL0LVcXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItY29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Ql9Cw0LPQvtC70L7QstC+0Lo8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCU0LDRgtCwINC+0YLQv9GA0LDQstC60Lg8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBzZW50OyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgW3RleHRDb250ZW50XT1cXFwiaSArIDFcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3BtJywgbWVzc2FnZS5pZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgKm5nSWY9XFxcIiFtZXNzYWdlLmlzUmVhZFxcXCIgW3RleHRDb250ZW50XT1cXFwibWVzc2FnZS50aXRsZVxcXCI+PC9iPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm1lc3NhZ2UuaXNSZWFkXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnL3VzZXInLCBtZXNzYWdlLnJlY2VpdmVySWRdXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnJlY2VpdmVyVXNlck5hbWVcXFwiPjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbdGV4dENvbnRlbnRdPVxcXCJtZXNzYWdlLnNlbnRUaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L21kLXRhYj5cXHJcXG4gICAgICAgIDw8bWQtdGFiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBtZC10YWItbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCAwLCAnZWRpdCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCd0LDQv9C40YHQsNGC0Ywg0YHQvtC+0LHRidC10L3RjNC60YNcXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L21kLXRhYj5cXHJcXG4gICAgPC9tZC10YWItZ3JvdXA+XFxyXFxuPC9kaXY+LS0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBQbSB9IGZyb20gXCIuL3BtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBtU2VydmljZSB9IGZyb20gXCIuL3BtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicG0tZGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcG0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW06IFBtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcG1TZXJ2aWNlOiBQbVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMucG1TZXJ2aWNlLkdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZShpdGVtOiBQbSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1kZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiBmb3JtLWhvcml6b250YWwgbWFyZ2luLXRvcC1taWRkbGVcXFwiICpuZ0lmPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCf0L7Qu9GD0YfQsNGC0LXQu9GMPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRpc2FibGVkIHZhbHVlPVxcXCJ7e2l0ZW0ucmVjZWl2ZXJ9fVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCX0LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkaXNhYmxlZCB2YWx1ZT1cXFwie3tpdGVtLnRpdGxlfX1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGlzYWJsZWQgcm93cz1cXFwiNFxcXCIgW3RleHRDb250ZW50XT1cXFwiaXRlbS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS1hIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCAwLCAnZWRpdCcsIHt1c2VybmFtZTogaXRlbS5yZWNlaXZlciwgdXNlcklkOiBpdGVtLmlkfV1cXFwiID7QntGC0LLQtdGC0LjRgtGMPC8hYS0tPlxcclxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcG0nLCAwLCAnZWRpdCddXFxcIiA+0J7RgtCy0LXRgtC40YLRjDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyAgXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiOyAgIFxyXG5pbXBvcnQgeyBQbSB9IGZyb20gXCIuL3BtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBtU2VydmljZSB9IGZyb20gXCIuL3BtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicG0tZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3BtLWVkaXQuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIFBtRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgbXlTb3VyY2UgPSBbXCJhcjFcIiwgXCJhcjJcIiwgXCIzZHNhXCJdO1xyXG4gICAgdXNlcnMgPSBcIi9hcGkvdXNlci9HZXRVc2VyTmFtZXM/dHlwZWQ9OmtleXdvcmRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFBtU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAncmVjZWl2ZXInOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICd0aXRsZSc6IFtcclxuICAgICAgICAgICAgICAgIFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICdtZXNzYWdlJzogW1xyXG4gICAgICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMClcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL3RoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5pZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAuR2V0U2luZ2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIGdldCAgbmV3c1wiKSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIC8vfSk7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VybmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAvLyAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VybmFtZSh1c2VyOiBhbnkpIHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoeyByZWNlaXZlcjogdXNlci5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcm5hbWUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGUuZGF0YVtcInVzZXJuYW1lXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuZGF0YVtcInVzZXJuYW1lXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IFBtKCk7XHJcbiAgICAgICAgbW9kZWwucmVjZWl2ZXJJZCA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJyZWNlaXZlclwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC5tZXNzYWdlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLnNlcnZpY2UuQ3JlYXRlKG1vZGVsKS5zdWJzY3JpYmUoZGF0YSA9PiBkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BtXCJdKTtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9wbS9wbS1lZGl0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGNvbC1tZC0xMlxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwid3JpdGVQbVxcXCIgIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgIDxoMj7QndCw0L/QuNGB0LDRgtGMINGB0L7QvtCx0YnQtdC90LjQtTwvaDI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXFxcIj7Qn9C+0LvRg9GH0LDRgtC10LvRjDwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS1wIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlciBjb2wtbWQtb2Zmc2V0LTJcXFwiIG5nLWlmPVxcXCJ2bS5lcnJvck1lc3NhZ2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIG5nLWJpbmQ9XFxcInZtLmVycm9yTWVzc2FnZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvIXAtLT5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVxcXCJ1cGRhdGVVc2VybmFtZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBhdXRvLWNvbXBsZXRlIG5hbWU9XFxcInJlY2VpdmVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3JlY2VpdmVyJ11cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cXFwidXNlcnNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBtaW4tY2hhcnM9XFxcIjJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICBhdHRyLXBsYWNlaG9sZGVyPVxcXCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9Li4uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5LW5hbWU9XFxcInVzZXJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlxcXCI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInRpdGxlXFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXVxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiByb3dzPVxcXCI0XFxcIiBbZm9ybUNvbnRyb2xdPVxcXCJlZGl0Rm9ybS5jb250cm9sc1snbWVzc2FnZSddXFxcIj4gPC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvcG0vcG0tZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDbHViSGlzdG9yeUNvbXBvbmVudCwgUnVsZXNDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJjbHViSGlzdG9yeVwiLCBjb21wb25lbnQ6IENsdWJIaXN0b3J5Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicnVsZXNcIiwgY29tcG9uZW50OiBSdWxlc0NvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9ob21lLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9jbHViLWhpc3RvcnkuY29tcG9uZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bGVzLmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yaWdodFNpZGViYXIuY29tcG9uZW50XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIjxjbHViLWhpc3Rvcnk+XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2x1Yi1oaXN0b3J5LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbHViSGlzdG9yeUNvbXBvbmVudCB7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8aW1nIGFsdD1cXFwiXFxcIiBzdHlsZT1cXFwiYm9yZGVyOiAzcHggc29saWQgI2NjYzttYXJnaW46MCAxNXB4IDE1cHggMDtcXFwiIHNyYz1cXFwiaHR0cDovL3BpY3R1cmVzLmZvb3R5bWFkLm5ldC91cGxvYWQvMzQyLzY5MDUwLTEuanBnXFxcIiBhbGlnbj1cXFwibGVmdFxcXCIgd2lkdGg9XFxcIjI1MHB4XFxcIj7Qk9C70LDQstC90YvQuSDRgdC+0L/QtdGA0L3QuNC6IFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiLCBcXFwi0K3QstC10YDRgtC+0L1cXFwiLCDQsdGL0Lsg0YHRhNC+0YDQvNC40YDQvtCy0LDQvSDQsiAxODc4INCz0L7QtNGDINCU0LbQvtC90L7QvCDQpdC+0LvQtNC40L3Qs9C+0LwsINC80LXRgdGC0L3Ri9C8INC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvQtdC8INC4INCx0YPQtNGD0YnQuNC8INC80Y3RgNC+0Lwg0JvQuNCy0LXRgNC/0YPQu9GPLlxcclxcblxcclxcbiAgICAgICAg0J7QvdC4INC90LDRh9Cw0LvQuCDQuNCz0YDQsNGC0Ywg0L3QsCBcXFwi0K3QvdGE0LjQu9C0INCg0L7Rg9C0XFxcIiDigJQg0L/QvtC70LUsINCw0YDQtdC90LTQvtCy0LDQvdC90L7QvCDRgyDQv9C40LLQvtCy0LDRgNCwINC/0L4g0LjQvNC10L3QuCDQlNC20L7QvSDQntGA0YDQtdC70LsuINCa0LDQuiDRgtC+0LvRjNC60L4gXFxcItCt0LLQtdGA0YLQvtC9XFxcIiDQstGB0YLQsNC7INC90LAg0L3QvtCz0Lgg0KXQvtC70LTQuNC90LMg0L/RgNC40YHRgtGD0L/QuNC7INC6INGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstGDINGE0YPRgtCx0L7Qu9GM0L3Ri9GFINGC0YDQuNCx0YPQvSDQvdCwIFxcXCLQrdC90YTQuNC70LTQtVxcXCIuINCe0LTQvdCw0LrQviDQv9C+0YHQu9C1INCy0L7Qt9C90LjQutGI0LjRhSDQsiAxODkyINCz0L7QtNGDINGA0LDQt9C90L7Qs9C70LDRgdC40Lkg0LrQu9GD0LEg0YDQsNGB0L/QsNC70YHRjyDQvdCwINC00LLQtSDQs9GA0YPQv9C/0YsuINCe0LTQvdCwINC40Lcg0LPRgNGD0L/QvyDQv9GA0LjQvdGP0LvQsCDRgNC10YjQtdC90LjQtSDQv9C10YDQtdC10YXQsNGC0Ywg0L3QsCBcXFwi0JPRg9C00LjRgdC+0L0g0J/QsNGA0LpcXFwiLCDQsiDRgtC+INCy0YDQtdC80Y8g0LrQsNC6INC+0YHRgtCw0LLRiNC40LXRgdGPLCDQstC+INCz0LvQsNCy0LUg0YEg0KXQvtC70LTQuNC90LPQvtC8LCDQvtGB0L3QvtCy0LDQu9C4INC90LAgXFxcItCt0L3RhNC40LvQtCDQoNC+0YPQtFxcXCIg0L3QvtCy0YvQuSDRhNGD0YLQsdC+0LvRjNC90YvQuSDQutC70YPQsSAtIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiLiDQpdC+0LvQtNC40L3QsyDQvdCw0LfQvdCw0YfQuNC7INCz0LvQsNCy0L3Ri9C8INGC0YDQtdC90LXRgNC+0Lwg0YHQstC+0LXQs9C+INC00YDRg9Cz0LAsINCU0LbQvtC90LAg0JzQsNC60LrQtdC90YMsINC60L7RgtC+0YDRi9C5INGB0YDQsNC30YMg0L7RgtC/0YDQsNCy0LjQu9GB0Y8g0LIg0KjQvtGC0LvQsNC90LTQuNGOINC90LDQsdC40YDQsNGC0Ywg0LrQvtC80LDQvdC00YMg0LjQs9GA0L7QutC+0LIuINCf0L7RgdC70LUg0LPQvtC00LAg0YDQsNCx0L7RgtGLINCc0LDQutC60LXQvdCwINGA0LXRiNC40LssINGH0YLQviDQvdCw0YHRgtCw0LvQviDQstGA0LXQvNGPINC/0L7QtNCw0YLRjCDQt9Cw0Y/QstC60YMg0L3QsCDQstGB0YLRg9C/0LvQtdC90LjQtSDQsiDQpNGD0YLQsdC+0LvRjNC90YPRjiDQu9C40LPRgy5cXHJcXG5cXHJcXG4gICAgICAgINCj0LbQtSDQv9C+0YHQu9C1INC/0LXRgNCy0L7Qs9C+INGB0LXQt9C+0L3QsCDQsiDQu9C40LPQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQv9C+0LTQvdGP0LvRgdGPINCyINCy0YvRgdGI0LjQuSDQtNC40LLQuNC30LjQvtC9LCDQvtC00L3QsNC60L4g0L7QvSDQv9C+LdC/0YDQtdC20L3QtdC80YMg0L7RgdGC0LDQstCw0LvRgdGPINCyINGC0LXQvdC4INGB0LLQvtC40YUg0YHQvtGB0LXQtNC10Lkg0LjQtyBcXFwi0K3QstC10YDRgtC+0L3QsFxcXCIsINCwINCx0L7Qu9GM0YjQuNC90YHRgtCy0L4g0LzQtdGB0YLQvdGL0YUg0LbQuNGC0LXQu9C10Lkg0L7RgtC60LDQt9GL0LLQsNC70LjRgdGMINGF0L7QtNC40YLRjCDQvdCwINC80LDRgtGH0Lgg0LrQvtC80LDQvdC00YssINCy0YHQtSDQuNCz0YDQvtC60Lgg0LrQvtGC0L7RgNC+0Lkg0LHRi9C70Lgg0YjQvtGC0LvQsNC90LTRhtCw0LzQuC4g0J/QtdGA0LLRi9C5INGB0LXQt9C+0L0g0L/RgNC+0YjQtdC7INC90LXRg9C00LDRh9C90L4sINC4INC60LvRg9CxINCy0YvQsdGL0Lsg0LLQviDQktGC0L7RgNC+0Lkg0LTQuNCy0LjQt9C40L7QvS4g0JzQsNC60LrQtdC90LAg0L/QvtC60LvRj9C70YHRjyDQstC10YDQvdGD0YLRjNGB0Y8g0LIg0LLRi9GB0YjRg9GOINC70LjQs9GDINGH0LXRgNC10Lcg0LTQstC10L3QsNC00YbQsNGC0Ywg0LzQtdGB0Y/RhtC10LIsINGH0YLQviDQuCDQv9GA0L7QuNC30L7RiNC70L4g0LHQu9Cw0LPQvtC00LDRgNGPINC10LPQviDRhtC10LvQtdGD0YHRgtGA0LXQvNC70LXQvdC90L7RgdGC0Lgg0Lgg0L3QsNGB0YLQvtC50YfQuNCy0L7RgdGC0LgsIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0L3QvtCy0Ywg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0YfQtdC80L/QuNC+0L3QvtC8INCy0YLQvtGA0L7Qs9C+INC00LjQstC40LfQuNC+0L3QsCDQuCDQv9GA0L7QtNCy0LjQs9Cw0LXRgtGB0Y8g0LIg0L/QtdGA0LLRi9C5LiDQndCwINGN0YLQvtGCINGA0LDQtyDQvtC90Lgg0LfQsNCy0LXRgNGI0LjQu9C4INGB0LXQt9C+0L0g0L3QsCDQvdCw0LTQtdC20L3QvtC8INC/0Y/RgtC+0Lwg0LzQtdGB0YLQtSwg0LLRi9GI0LUgXFxcItCt0LLQtdGA0YLQvtC90LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0J/QtdGA0LLRi9C5INGH0LXQvNC/0LjQvtC90YHQutC40Lkg0YLQuNGC0YPQuyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQstGL0LjQs9GA0LDQuyDQsiDRgdC10LfQvtC90LUgMTkwMC8wMS4g0KfQtdGA0LXQtyDQtNCy0LAg0LPQvtC00LAg0L/QvtGB0LvQtSDRjdGC0L7Qs9C+IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLRi9Cx0YvQu9C4INC40Lcg0LLRi9GB0YjQtdC5INC70LjQs9C4LCDQvdC+INCy0LXRgNC90YPQu9C40YHRjCDRgtGD0LTQsCDRgdC/0YPRgdGC0Y8g0LPQvtC0INC4INCyINGC0L7QvCDRgdC10LfQvtC90LUg0LLQvdC+0LLRjCDRgdGC0LDQu9C4INC/0L7QsdC10LTQuNGC0LXQu9GP0LzQuCDRh9C10LzQv9C40L7QvdCw0YLQsC4g0JIg0LrQsNGH0LXRgdGC0LLQtSDQvdCw0LPRgNCw0LTRiyDRgNGD0LrQvtCy0L7QtNGB0YLQstC+INC60LvRg9Cx0LAg0L/RgNC40L3Rj9C70L4g0YDQtdGI0LXQvdC40LUg0L/QvtGB0YLRgNC+0LjRgtGMINC00LvRjyDQsdC+0LvQtdC70YzRidC40LrQvtCyINC90L7QstGD0Y4g0YLRgNC40LHRg9C90YMsIFxcXCLQodC/0LjQvtC9INCa0L7Qv1xcXCIsINC/0L7Qt9C20LUg0YHRgtCw0LLRiNGD0Y4g0LvQtdCz0LXQvdC00LDRgNC90L7QuS4g0KLQsNC60L7QtSDQvdCw0LfQstCw0L3QuNC1INGC0YDQuNCx0YPQvdCwINC/0L7Qu9GD0YfQuNC70LAg0LIg0YfQtdGB0YLRjCDRhdC+0LvQvNCwLCDRgNCw0YHQv9C+0LvQvtC20LXQvdC90L7Qs9C+INCyINGO0LbQvdC+LdCw0YTRgNC40LrQsNC90YHQutC+0Lkg0L/RgNC+0LLQuNC90YbQuNC4INCd0LDRgtCw0LssINCz0LTQtSDQstC+INCy0YDQtdC80Y8g0LLRgtC+0YDQvtC5INCw0L3Qs9C70L4t0LHRg9GA0YHQutC+0Lkg0LLQvtC50L3RiyDQvNC10YDRgdC40YHQsNC50LTRgdC60LjQuSDQv9C+0LvQuiDQv9C+0L3QtdGBINCx0L7Qu9GM0YjQuNC1INC/0L7RgtC10YDQuC4g0JIg0L/QtdGA0LXQstC+0LTQtSDRgSDQsNGE0YDQuNC60LDQsNC90YEgXFxcItGB0L/QuNC+0L0g0LrQvtC/XFxcIiDQvtC30L3QsNGH0LDQtdGCIFxcXCLQvNC10YHRgtC+LCDQtNCw0Y7RidC10LUg0YXQvtGA0L7RiNC40Lkg0L7QsdC30L7RgFxcXCIuINCSIDE5Mjgg0LPQvtC00YMg0YLRgNC40LHRg9C90LAg0LHRi9C70LAg0YDQsNGB0YjQuNGA0LXQvdCwINC4INC+0LHRgNC10LvQsCDQutGA0YvRiNGDLCDQvdCw0LTQtdC20L3QviDQt9Cw0YnQuNGJ0LDQstGI0YPRjiDQvtGCINC90LXQv9C+0LPQvtC00YsgMzAgMDAwINCx0L7Qu9C10LvRjNGJ0LjQutC+0LIuXFxyXFxuXFxyXFxuICAgICAgICDQn9C+0YHQu9C1INCf0LXRgNCy0L7QuSDQvNC40YDQvtCy0L7QuSDQstC+0LnQvdGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGB0YLQsNC7INC+0LHQu9Cw0LTQsNGC0LXQu9C10Lwg0LXRidC1INC00LLRg9GFINGH0LXQvNC/0LjQvtC90YHQutC40YUg0YLQuNGC0YPQu9C+0LIsINC90L4g0L/QvtGB0LvQtSDQktGC0L7RgNC+0Lkg0LzQuNGA0L7QstC+0Lkg0L3QsNGH0LDQu9GB0Y8g0YHQv9Cw0LQg0LjQs9GA0L7QstC+0Lkg0YTQvtGA0LzRiywg0YXQvtGC0Y8g0LIgMTk1MCDQs9C+0LTRgyBcXFwi0LrRgNCw0YHQvdGL0LxcXFwiINCy0YHQtSDQttC1INGD0LTQsNC70L7RgdGMINCy0YvQudGC0Lgg0LIg0YTQuNC90LDQuyDQmtGD0LHQutCwINCQ0L3Qs9C70LjQuCwg0LPQtNC1INC+0L3QuCDRg9GB0YLRg9C/0LjQu9C4IFxcXCLQkNGA0YHQtdC90LDQu9GDXFxcIi4g0KHQtdC30L7QvSAxOTUzLzU0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC30LDQstC10YDRiNC40Lsg0L3QsCDQv9C+0YHQu9C10LTQvdC10Lwg0LzQtdGB0YLQtSDQuCDQstGL0LHRi9C7INC40Lcg0L/QtdGA0LLQvtCz0L4g0LTQuNCy0LjQt9C40L7QvdCwLiDQn9C+0YHQu9C1INC90LXRgdC60L7Qu9GM0LrQuNGFINC90LXRg9C00LDRh9C90YvRhSDQu9C10YIg0L3QsCDQv9C+0LzQvtGJ0Ywg0LrQu9GD0LHRgyDQv9GA0LjRiNC10Lsg0JHQuNC70Lsg0KjQtdC90LrQu9C4LiDQntC9INCx0YvQuyDQvdCw0LfQvdCw0YfQtdC9INCz0LvQsNCy0L3Ri9C8INGC0YDQtdC90LXRgNC+0Lwg0LIgMTk1OSDQs9C+0LTRgyDQuCDQt9CwINGB0LvQtdC00YPRjtGJ0LjQtSDRh9C10YLRi9GA0L3QsNC00YbQsNGC0Ywg0LvQtdGCINGB0LLQvtC10Lkg0YDQsNCx0L7RgtGLINC/0YDQtdCy0YDQsNGC0LjQuyBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQsiDQstC10LvQuNGH0LDQudGI0LjQuSDQutC70YPQsSDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGE0YPRgtCx0L7Qu9CwLiDQl9CwINC/0LXRgNCy0YvQtSDQtNCy0LXQvdCw0LTRhtCw0YLRjCDQvNC10YHRj9GG0LXQsiDQtdCz0L4g0YDRg9C60L7QstC+0LTRgdGC0LLQsCDQtNCy0LDQtNGG0LDRgtGMINGH0LXRgtGL0YDQtSDQuNCz0YDQvtC60LAg0L/QvtC60LjQvdGD0LvQuCDQutC+0LzQsNC90LTRgy4g0JIg0YHQtdC30L7QvdC1IDE5NjMvNjQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LIg0YjQtdGB0YLQvtC5INGA0LDQtyDRgdGC0LDQuyDRh9C10LzQv9C40L7QvdC+0Lwg0LLRi9GB0YjQtdC5INC70LjQs9C4LCDQsCDQsiDRgdC70LXQtNGD0Y7RidC10Lwg0LPQvtC00YMg0LrQvtC70LvQtdC60YbQuNGPINGC0YDQvtGE0LXQtdCyINC/0L7Qv9C+0LvQvdC40LvQsNGB0Ywg0LrRg9Cx0LrQvtC8INCQ0L3Qs9C70LjQuCwg0LHQu9Cw0LPQvtC00LDRgNGPINC/0L7QsdC10LTQtSDQvdCw0LQgXFxcItCb0LjQtNGBXFxcIiDQsiDRhNC40L3QsNC70LUg0YHQvtGA0LXQstC90L7QstCw0L3QuNGPLiDQndC+INC/0L7QsdC10LTQvdCw0Y8g0YHQtdGA0LjRjyDQvdCwINGN0YLQvtC8INC90LUg0LfQsNC60L7QvdGH0LjQu9Cw0YHRjCwg0LIg0YHQtdC30L7QvdC1IDE5NjUvNjYgXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDQstC90L7QstGMINCy0YvQuNCz0YDQsNC70Lgg0LPQu9Cw0LLQvdGL0Lkg0YLQuNGC0YPQuyDQu9C40LPQuC5cXHJcXG5cXHJcXG4gICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuSDRgtGA0L7RhNC10LkgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0L/QvtC70YPRh9C40Lsg0LvQuNGI0Ywg0YHQv9GD0YHRgtGPINGB0LXQvNGMINC70LXRgiwg0LIg0YHQtdC30L7QvdC1IDE5NzIvNzMsINC90LAg0Y3RgtC+0YIg0YDQsNC3INCa0YPQsdC+0Log0KPQldCk0JAsINCwINGB0L/Rg9GB0YLRjyDQtdGJ0LUg0LPQvtC0IFxcXCLQutGA0LDRgdC90YvQtVxcXCIg0LLQvdC+0LLRjCDRgdGC0LDQu9C4INC+0LHQu9Cw0LTQsNGC0LXQu9GP0LzQuCDQutGD0LHQutCwINCQ0L3Qs9C70LjQuC4g0J/QvtGB0LvQtSDRjdGC0L7Qs9C+INCo0LXQvdC60LvQuCDQvdC10L7QttC40LTQsNC90L3QviDRgNC10YjQuNC7INC30LDQstC10YDRiNC40YLRjCDQutCw0YDRjNC10YDRgyDQuCDQv9C10YDQtdC00LDQuyDQv9C+0LvQvdC+0LzQvtGH0LjRjyDRgdCy0L7QtdC5INC/0YDQsNCy0L7QuSDRgNGD0LrQtSDigJQg0JHQvtCx0YMg0J/QtdC50YHQu9C4LiDQk9GA0L7QvNC60LjRhSDQv9C+0LHQtdC0INC90LUg0L/RgNC40YjQu9C+0YHRjCDQtNC+0LvQs9C+INC20LTQsNGC0YwsINGD0LbQtSDQvdCwINCy0YLQvtGA0L7QuSDQs9C+0LQg0YDQsNCx0L7RgtGLINC90L7QstC+0LPQviDRgtGA0LXQvdC10YDQsCwg0LIg0YHQtdC30L7QvdC1IDE5NzUvNzYsIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvQuNCz0YDQsNC7INGH0LXQvNC/0LjQvtC90LDRgiDQuCDQmtGD0LHQvtC6INCj0JXQpNCQLiDQp9C10YDQtdC3INCz0L7QtCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0YHRgtCw0LvQuCDRh9C10LzQv9C40L7QvdCw0LzQuCDQu9C40LPQuCwg0LfQsNCy0L7QtdCy0LDQu9C4INCa0YPQsdC+0Log0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIsINC+0LHRi9Cz0YDQsNCyINCyINGE0LjQvdCw0LvQtSBcXFwi0JHQvtGA0YPRgdGB0LjRjiDQnNC10L3RhdC10L3Qs9C70LDQtNCx0LDRhVxcXCIsINC90L4g0LIg0YTQuNC90LDQu9GM0L3QvtC8INC80LDRgtGH0LUg0JrRg9Cx0LrQsCDQkNC90LPQu9C40Lgg0YPRgdGC0YPQv9C40LvQuCBcXFwi0JzQsNC90YfQtdGB0YLQtdGAINCu0L3QsNC50YLQtdC0XFxcIiDRgdC+INGB0YfQtdGC0L7QvCAyOjEuINCSINGB0LXQt9C+0L3QtSAxOTc3Lzc4IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGB0YLQsNC7INC/0LXRgNCy0YvQvCDQsdGA0LjRgtCw0L3RgdC60LjQvCDQutC70YPQsdC+0LwsINC60L7QvNGDINGD0LTQsNC70L7RgdGMINC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0LfQstCw0L3QuNC1INC10LLRgNC+0L/QtdC50YHQutC+0LPQviDRh9C10LzQv9C40L7QvdCwLCDQvtC00LXRgNC20LDQsiDQv9C+0LHQtdC00YMg0LIg0YTQuNC90LDQu9C1INGB0L7RgNC10LLQvdC+0LLQsNC90LjRjyDQvdCw0LQg0LHQtdC70YzQs9C40LnRgdC60LjQvCDQutC70YPQsdC+0LwgXFxcItCR0YDRjtCz0LPQtVxcXCIg0YHQviDRgdGH0LXRgtC+0LwgMTowLlxcclxcblxcclxcbiAgICAgICAg0JfQsNGC0LXQvCDQtNCy0LAg0LPQvtC00LAg0L/QvtC00YDRj9C0LCDQsiDRgdC10LfQvtC90LDRhSAxOTc4Lzc5INC4IDE5NzkvODAsIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGB0YLQsNC90L7QstC40YLRgdGPINGH0LXQvNC/0LjQvtC90L7QvCDRgdGC0YDQsNC90YsuIDE5ODEg0LPQvtC0INGB0YLQsNC7INC+0YfQtdGA0LXQtNC90L7QuSDRj9GA0LrQvtC5INGB0YLRgNCw0L3QuNGG0LXQuSDQsiDQuNGB0YLQvtGA0LjQuCDQutC70YPQsdCwLCDQsiDRgtGA0LXRgtC40Lkg0YDQsNC3INCyINGB0LLQvtC10Lkg0LjRgdGC0L7RgNC40LggXFxcItC60YDQsNGB0L3Ri9C1XFxcIiDRgdGC0LDQvdC+0LLRj9GC0YHRjyDQvtCx0LvQsNC00LDRgtC10LvRj9C80Lgg0JrRg9Cx0LrQsCDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7Qsiwg0L7QtNC10YDQttCw0LIg0L/QvtCx0LXQtNGDINC90LDQtCDQvNCw0LTRgNC40LTRgdC60LjQvCBcXFwi0KDQtdCw0LvQvtC8XFxcIiDQsiDRhNC40L3QsNC70LUg0YLRg9GA0L3QuNGA0LAsINCwINGC0LDQutC20LUg0LLRi9C40LPRgNGL0LLQsNGO0YIg0JrRg9Cx0L7QuiDQm9C40LPQuC4g0JIg0YHQtdC30L7QvdCw0YUgMTk4MS84MiDQuCAxOTgyLzgzIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC30LDQstC+0LXQstGL0LLQsNC10YIg0LXRidC1INC00LLQsCDQs9C70LDQstC90YvRhSDRhNGD0YLQsdC+0LvRjNC90YvRhSDRgtGA0L7RhNC10Y8g0YHRgtGA0LDQvdGLLCDQv9C+0YHQu9C1INGH0LXQs9C+INCf0LXQudGB0LvQuCDQv9GA0LjQvdC40LzQsNC10YIg0YDQtdGI0LXQvdC40LUg0YPQudGC0Lgg0L3QsCDQv9C10L3RgdC40Y4uINCX0LAg0LTQtdCy0Y/RgtGMINC70LXRgiDQtdCz0L4g0YDRg9C60L7QstC+0LTRgdGC0LLQsCDQutC70YPQsdC+0Lwg0LXQvNGDINGI0LXRgdGC0Ywg0YDQsNC3INC/0YDQuNGB0YPQttC00LDQu9C+0YHRjCDQt9Cy0LDQvdC40LUgXFxcItCb0YPRh9GI0LjQuSDRgtGA0LXQvdC10YAg0LPQvtC00LBcXFwiLlxcclxcblxcclxcbiAgICAgICAg0J3QsCDQv9C+0YHRgiDQs9C70LDQstC90L7Qs9C+INGC0YDQtdC90LXRgNCwINC30LDRgdGC0YPQv9C40Lsg0JTQttC+INCk0Y3Qs9Cw0L0sINC4INCyINC/0LXRgNCy0YvQuSDQttC1INCz0L7QtCDQv9C+0LQg0LXQs9C+INGA0YPQutC+0LLQvtC00YHRgtCy0L7QvCDQutC70YPQsSDQstGL0LjQs9GA0LDQuyDRh9C10LzQv9C40L7QvdCw0YIg0JDQvdCz0LvQuNC4LCDQmtGD0LHQvtC6INCb0LjQs9C4INC4INCa0YPQsdC+0Log0LXQstGA0L7Qv9C10LnRgdC60LjRhSDRh9C10LzQv9C40L7QvdC+0LIsINC+0LHRi9Cz0YDQsNCyIFxcXCLQoNC+0LzRg1xcXCIg0LIg0JjRgtCw0LvQuNC4LiDQodC70LXQtNGD0Y7RidC40Lkg0YHQtdC30L7QvSDQsdGL0Lsg0L7QvNGA0LDRh9C10L0g0YHRgtGA0LDRiNC90L7QuSDRgtGA0LDQs9C10LTQuNC10LkuINCS0L4g0LLRgNC10LzRjyDRhNC40L3QsNC70LAg0JrRg9Cx0LrQsCDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGH0LXQvNC/0LjQvtC90L7QsiDQv9GA0L7RgtC40LIgXFxcItCu0LLQtdC90YLRg9GB0LBcXFwiINC90LAg0YHRgtCw0LTQuNC+0L3QtSBcXFwi0K3QudC30LXQu9GMXFxcIiDQstC+0LfQvdC40LrQu9C4INCx0LXRgdC/0L7RgNGP0LTQutC4LiDQn9C10YDQtdC60YDRi9GC0LjQtSDQvdCwINGB0YLQsNC00LjQvtC90LUg0YDRg9GF0L3Rg9C70L4g0Lgg0YPQvdC10YHQu9C+INGBINGB0L7QsdC+0Lkg0LbQuNC30L3QuCAzOCDQsdC+0LvQtdC70YzRidC40LrQvtCyINC40YLQsNC70YzRj9C90YHQutC+0LPQviDQutC70YPQsdCwLiDQkiDQutC+0L3QtdGH0L3QvtC8INGB0YfQtdGC0LUg0L7QsdC70LDQtNCw0YLQtdC70LXQvCDRgtGA0L7RhNC10Y8g0YHRgtCw0LsgXFxcItCu0LLQtdC90YLRg9GBXFxcIiwg0LAg0LDQvdCz0LvQuNC50YHQutC40Lwg0LrQu9GD0LHQsNC8INC90LAg0L3QtdC+0L/RgNC10LTQtdC70LXQvdC90YvQuSDRgdGA0L7QuiDQt9Cw0L/RgNC10YLQuNC70Lgg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINGB0L7RgNC10LLQvdC+0LLQsNC90LjRj9GFLlxcclxcblxcclxcbiAgICAgICAg0JIgMTk4NiDQs9C+0LTRgyDQmtC10L3QvdC4INCU0LDQu9Cz0LvQuNGIINCx0YvQuyDQvdCw0LfQvdCw0YfQtdC9INC40LPRgNCw0Y7RidC40Lwg0YLRgNC10L3QtdGA0L7QvC4g0JIg0Y3RgtC+0Lwg0LbQtSDRgdC10LfQvtC90LUgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0YfQtdC80L/QuNC+0L3QsNGCINC4INCa0YPQsdC+0Log0JDQvdCz0LvQuNC4LiDQkiDRgdC10LfQvtC90LUgMTk4Ny84OCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0L3QvtCy0Ywg0YHRgtCw0L3QvtCy0Y/RgtGB0Y8g0YfQtdC80L/QuNC+0L3QsNC80Lgg0YHRgtGA0LDQvdGLLCDQvtC00L3QsNC60L4g0LIg0YTQuNC90LDQu9C1INCa0YPQsdC60LAg0JDQvdCz0LvQuNC4INGD0YHRgtGD0L/QsNGO0YIgXFxcItCj0LjQvNCx0LvQtNC+0L3Rg1xcXCIuINCh0LXQt9C+0L0gMTk4OC84OSDRgdGC0LDQuyDRhdGD0LTRiNC40Lwg0LIg0LjRgdGC0L7RgNC40LggXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIuINCS0L4g0LLRgNC10LzRjyDQv9C+0LvRg9GE0LjQvdCw0LvRjNC90L7Qs9C+INC80LDRgtGH0LAg0JrRg9Cx0LrQsCDQkNC90LPQu9C40Lgg0L/RgNC+0YLQuNCyIFxcXCLQndC+0YLRgtC40L3Qs9C10Lwg0KTQvtGA0LXRgdGCXFxcIiDQvdCwINGB0YLQsNC00LjQvtC90LUgXFxcItCl0LjQu9C70YHQsdC+0YDQvlxcXCIgOTYg0LHQvtC70LXQu9GM0YnQuNC60L7QsiBcXFwi0JvQuNCy0LXRgNC/0YPQu9GPXFxcIiDQv9C+0LPQuNCx0LvQuCDQsiDRgNC10LfRg9C70YzRgtCw0YLQtSDQv9C10YDQtdC/0L7Qu9C90LXQvdC40Y8g0YLRgNC40LHRg9C90YsgXFxcItCb0LXQv9C/0LjQvdCzINCb0LXQudC9XFxcIi4g0J/QvtC30LbQtSBcXFwi0JrRgNCw0YHQvdGL0LVcXFwiINCy0YvRiNC70Lgg0LIg0YTQuNC90LDQuywg0LPQtNC1INCy0YHRgtGA0LXRgtC40LvQuNGB0Ywg0YEgXFxcItCt0LLQtdGA0YLQvtC90L7QvFxcXCIuINCf0LXRgNC10LQg0L3QsNGH0LDQu9C+0Lwg0LzQsNGC0YfQsCDQsdC+0LvQtdC70YzRidC40LrQuCDQvtCx0LXQuNGFINC60L7QvNCw0L3QtCDQv9C10LvQuCBcXFwiWW91IHdpbGwgbmV2ZXIgd2FsayBhbG9uZVxcXCIg0Lgg0L/RgNC+0LLQtdC70Lgg0LzQuNC90YPRgtGDINC80L7Qu9GH0LDQvdC40Y8sINCyINC/0LDQvNGP0YLRjCDQviDQv9C+0LPQuNCx0YjQuNGFINC90LAgXFxcItCl0LjQu9C70YHQsdC+0YDQvlxcXCIuIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC/0L7QsdC10LTQuNC7INGB0L4g0YHRh9C10YLQvtC8IDM6MiDQsdC70LDQs9C+0LTQsNGA0Y8g0LTQstGD0Lwg0LPQvtC70LDQvCwg0LfQsNCx0LjRgtGL0Lwg0LLRi9GI0LXQtNGI0LjQvCDQvdCwINC30LDQvNC10L3RgyDQmNCw0L3QvtC8INCg0LDRiNC10LwuINCT0LvQsNCy0L3Ri9C5INGC0YDQvtGE0LXQuSDQu9C40LPQuCDRgtCw0LrQttC1INCx0YvQuyDQv9GA0LDQutGC0LjRh9C10YHQutC4INCyINGA0YPQutCw0YUg0YMgXFxcItC60YDQsNGB0L3Ri9GFXFxcIiwg0YfRgtC+0LHRiyDRjdGC0L7QvNGDINC/0L7QvNC10YjQsNGC0YwgXFxcItCQ0YDRgdC10L3QsNC70YNcXFwiINC90YPQttC90L4g0LHRi9C70L4g0LLRi9C40LPRgNCw0YLRjCDQvdCwIFxcXCLQrdC90YTQuNC70LTQtVxcXCIg0YEg0L/RgNC10LjQvNGD0YnQtdGB0YLQstC+0Lwg0LIg0LTQstCwINC80Y/Rh9CwLiDQmiDQutC+0L3RhtGDINGA0LXRiNCw0Y7RidC10LPQviDQvNCw0YLRh9CwIFxcXCLQkNGA0YHQtdC90LDQu1xcXCIg0LLQtdC7INCyINGB0YfQtdGC0LUgMTowLCDQvdC+INCz0L7QuyDQnNCw0LnQutC70LAg0KLQvtC80LDRgdCwLCDQt9Cw0LHQuNGC0YvQuSDRg9C20LUg0LIg0LTQvtCx0LDQstC70LXQvdC90L7QtSDQstGA0LXQvNGPLCDQv9C+0YXQvtGA0L7QvdC40Lsg0L3QsNC00LXQttC00YsgXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0L3QsCDQvtGH0LXRgNC10LTQvdC+0Lkg0YLRgNC+0YTQtdC50L3Ri9C5INC00YPQsdC70YwuINCf0L7RgdC70LUg0L7QutC+0L3Rh9Cw0L3QuNGPINGB0LXQt9C+0L3QsCDQmtC10L3QvdC4INCU0LDQu9Cz0LvQuNGIINC+0YHRgtCw0LLQuNC7INGB0LLQvtC5INC/0L7RgdGCLCDQvtCx0YrRj9GB0L3QuNCyINGN0YLQviDRiNC+0LrQuNGA0L7QstCw0LLRiNC10LUg0LzQvdC+0LPQuNGFINGA0LXRiNC10L3QuNC1INC90LXRgNCy0L3Ri9C8INC/0LXRgNC10L3QsNC/0YDRj9C20LXQvdC40LXQvC5cXHJcXG5cXHJcXG4gICAgICAgINCS0YDQtdC80LXQvdC90L4g0LfQsNC80LXQvdC40YLRjCDQlNCw0LvQs9C70LjRiNCwINCx0YvQuyDQv9GA0LjQt9Cy0LDQvSDQoNC+0L3QvdC4INCc0L7RgNCw0L0sINC/0YDQtdC20LTQtSDRh9C10Lwg0LIg0LDQv9GA0LXQu9C1IDE5OTEg0LPQvtC00LAg0L3QsCDQv9C+0YHRgiDQs9C70LDQstC90L7Qs9C+INGC0YDQtdC90LXRgNCwINC90LUg0LHRi9C7INC90LDQt9C90LDRh9C10L0g0JPRgNGN0Lwg0KHRg9C90LXRgdGBLiDQntC9INC/0YDQuNCy0LXQuyDQsiDQutC+0LzQsNC90LTRgyDQvNC90L7QttC10YHRgtCy0L4g0L3QvtCy0YvRhSDQuNCz0YDQvtC60L7Qsiwg0L3QviDQtdCz0L4g0YHRgtGA0L7Qs9C40Lkg0YHRgtC40LvRjCDRgNCw0LHQvtGC0Ysg0L3QtSDQv9C+0LvRjNC30L7QstCw0LvRgdGPINC/0L7Qv9GD0LvRj9GA0L3QvtGB0YLRjNGOINC4INC90LUg0L/QvtC80L7QsyDQutC+0LzQsNC90LTQtSDQv9C+0LLRgtC+0YDQuNGC0Ywg0YPRgdC/0LXRhSDQv9GA0L7RiNC70YvRhSDQu9C10YIuINCd0LDRh9C40L3QsNGPINGBINGN0YDRiyDQodGD0L3QvdC10YHQsCDQuCDQtNC+INGB0LjRhSDQv9C+0YAg0LrQu9GD0LEg0L/RgNC10YHQu9C10LTRg9C10YIg0LzQvdC+0LbQtdGB0YLQstC+INC/0YDQvtCx0LvQtdC8LlxcclxcblxcclxcbiAgICAgICAg0KDQvtC5INCt0LLQsNC90YEg0LIg0YHQstC+0Lkg0L/QtdGA0LLRi9C5INC/0L7Qu9C90YvQuSDRgdC10LfQvtC9INGDINGA0YPQu9GPINC60LvRg9Cx0LAsINCyIDE5OTUg0LPQvtC00YMsINCy0YvQuNCz0YDQsNC7INCa0YPQsdC+0Log0JvQuNCz0LguINCd0LXRgdC80L7RgtGA0Y8g0L3QsCDRgtC+LCDRh9GC0L4g0LXQvNGDINGD0LTQsNC70L7RgdGMINC/0L7RgdGC0YDQvtC40YLRjCDQuNC90YLQtdGA0LXRgdC90YPRjiDQutC+0LzQsNC90LTRgyDQvNC+0LvQvtC00YvRhSDQuNCz0YDQvtC60L7Qsiwg0LzQvdC+0LPQuNC1INC40Lcg0LrQvtGC0L7RgNGL0YUg0L/RgNC40YjQu9C4INC40Lcg0Y7QvdC+0YjQtdGB0LrQvtC5INC60L7QvNCw0L3QtNGLIFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiLCDQvdC40LrQsNC60LjRhSDRgdC10YDRjNC10LfQvdGL0YUg0L/QvtCx0LXQtCDQtdC80YMg0L7QtNC10YDQttCw0YLRjCDQvdC1INGD0LTQsNC70L7RgdGMLiDQkdC+0LvQtdC70YzRidC40LrQuCDQuCDRgNGD0LrQvtCy0L7QtNGB0YLQstC+INGC0YDQtdCx0L7QstCw0LvQuCDQs9GA0L7QvNC60LjRhSDRg9GB0L/QtdGF0L7Qsiwg0Lgg0LIgMTk5OCDQs9C+0LTRgyDQsiDQutC70YPQsSDQsdGL0Lsg0L/RgNC40LPQu9Cw0YjQtdC9INCW0LXRgNCw0YAg0KPQu9GM0LUsINC60L7RgtC+0YDRi9C5INC00L7Qu9C20LXQvSDQsdGL0Lsg0YDQsNC30LTQtdC70LjRgtGMINGC0YDQtdC90LXRgNGB0LrQvtC1INC60YDQtdGB0LvQviDRgSDQoNC+0LXQvCDQrdCy0LDQvdGB0L7QvC4g0J7Qv9GL0YIg0YHQvtCy0LzQtdGB0YLQvdC+0Lkg0YDQsNCx0L7RgtGLINC+0LrQsNC30LDQu9GB0Y8g0L3QtdGD0LTQsNGH0L3Ri9C8LCDQuCDQrdCy0LDQvdGBINC/0L7QutC40L3Rg9C7INC60LvRg9CxLCDQv9C+0LvQvtC20LjQsiDRgtC10Lwg0YHQsNC80YvQvCDQutC+0L3QtdGGIDM1INC/0LXRgNC40L7QtNGDINC/0YDQtdC00LDQvdC90L7QuSDRgdC70YPQttCx0YsgXFxcItCb0LjQstC10YDQv9GD0LvRjlxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQo9C70YzQtSDQvdCw0YfQsNC7INGA0LDQt9Cy0LjQstCw0YLRjCDRgdC+0YHRgtCw0LIg0LrQu9C80LDQvdC00YssINC/0YDQuNCz0LvQsNGI0LDRjyDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L3QtdC40LfQstC10YHRgtC90YvRhSDQuNCz0YDQvtC60L7Qsiwg0L/RgNC4INGN0YLQvtC8INC10LPQviDRgdC+0LLQtdGA0YjQtdC90L3QviDQvdC1INC/0YPQs9Cw0LvQuCDQutGA0LjRgtC40YfQtdGB0LrQuNC1INC+0YLQt9GL0LLRiyDRgdGA0LXQtNGB0YLQsiDQvNCw0YHRgdC+0LLQvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LiDQldC80YMg0YPQtNCw0LvQvtGB0Ywg0LfQvdCw0YfQuNGC0LXQu9GM0L3QviDRg9C70YPRh9GI0LjRgtGMINC40LPRgNGDINC60L7QvNCw0L3QtNGLINCyINC+0LHQvtGA0L7QvdC1LCDQt9CwINGH0YLQviDQsiAyMDAxINCz0L7QtNGDINC+0L0g0LHRi9C7INCy0L7Qt9C90LDQs9GA0LDQttC00LXQvSDQv9GP0YLRjNGOINGC0YDQvtGE0LXRj9C80LgsINCwIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC90LUg0L/QvtGC0LXRgNC/0LXQuyDQvdC4INC+0LTQvdC+0LPQviDQv9C+0YDQsNC20LXQvdC40Y8g0LIg0LrRg9Cx0LrQvtCy0YvRhSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y/RhSDRgtC+0LPQviDRgdC10LfQvtC90LAg0Lgg0LrQstCw0LvQuNGE0LjRhtC40YDQvtCy0LDQu9GB0Y8g0LIg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyLlxcclxcblxcclxcbiAgICAgICAg0J3QsCDRgdC70LXQtNGD0Y7RidC40Lkg0LPQvtC0IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINGB0LXRgNGM0LXQt9C90L4g0L/RgNC10YLQtdC90LTQvtCy0LDQuyDQvdCwINC/0L7QsdC10LTRgyDQsiDQn9GA0LXQvNGM0LXRgC3Qu9C40LPQtSDQuCDQsiDRgtC+INC20LUg0LLRgNC10LzRjyDQvdC10L/Qu9C+0YXQviDRgdC10LHRjyDQv9GA0L7Rj9Cy0LjQuyDQsiDQm9C40LPQtSDRh9C10LzQv9C40L7QvdC+0LIsINC00L7QsdGA0LDQstGI0LjRgdGMINC00L4g0YfQtdGC0LLQtdGA0YLRjNGE0LjQvdCw0LvQsCDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y8sINCz0LTQtSDRg9GB0YLRg9C/0LjQuyDQu9C10LLQtdGA0LrRg9C30LXQvdGB0LrQvtC80YMgXFxcItCR0LDQudC10YDRg1xcXCIsINCy0YvRiNC10LTRiNC10LzRgyDQsiDQuNGC0L7Qs9C1INCyINGE0LjQvdCw0Lsg0YLRg9GA0L3QuNGA0LAuXFxyXFxuXFxyXFxuICAgICAgICDQmNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YHQviDQt9C00L7RgNC+0LLRjNC10Lwg0JbQtdGA0LDRgNCwINCj0LvRjNC1LCDQsdC+0LvRjNGI0YPRjiDRh9Cw0YHRgtGMINGB0LvQtdC00YPRjtGJ0LXQs9C+INGB0LXQt9C+0L3QsCDQutC+0LzQsNC90LTQvtC5INGE0LDQutGC0LjRh9C10YHQutC4INGA0YPQutC+0LLQvtC00LjQuyDQpNC40Lsg0KLQvtC80L/RgdC+0L0sINC90L4g0LHQu9Cw0LPQvtC00LDRgNGPINGB0LLQvtC10Lwg0LHRg9GC0YDRg9C80L7QstGB0LrQvtC80YMg0L/RgNC+0YjQu9C+0LzRgyDQtdC80YMg0YPQtNCw0LvQvtGB0Ywg0YPRgdC/0LXRiNC90L4g0YHQv9GA0LDQstC40YLRjNGB0Y8g0YEg0Y3RgtC+0Lkg0LfQsNC00LDRh9C10LkuINCSINCf0YDQtdC80YzQtdGALdC70LjQs9C1IFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINC30LDQvdGP0Lsg0LLRgtC+0YDQvtC1INC80LXRgdGC0L4sINGD0YHRgtGD0L/QuNCyINC70LjRiNGMIFxcXCLQkNGA0YHQtdC90LDQu9GDXFxcIiwg0Lgg0LLQvdC+0LLRjCDQv9C+0LvRg9GH0LjQuyDQv9GD0YLQtdCy0LrRgyDQsiDQm9C40LPRgyDQp9C10LzQv9C40L7QvdC+0LIuXFxyXFxuXFxyXFxuICAgICAgICDQodC10LfQvtC9IDIwMDMvMDQgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LfQsNCy0LXRgNGI0LjQuyDQvdCwINGH0LXRgtCy0LXRgNGC0L7QvCDQvNC10YHRgtC1LCDQv9C+0LvRg9GH0LjQsiDRgtC10Lwg0YHQsNC80YvQvCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0YDQuNC90Y/RgtGMINGD0YfQsNGB0YLQuNC1INCyINCb0LjQs9C1INCn0LXQvNC/0LjQvtC90L7QsiDRgdC70LXQtNGD0Y7RidC10LPQviDRgdC10LfQvtC90LAuINCg0YPQutC+0LLQvtC00YHRgtCy0L4g0LrQu9GD0LHQsCDRgNC10YjQuNC70L4sINGH0YLQviDQvdCw0YHRgtCw0LvQsCDQv9C+0YDQsCDQv9C10YDQtdC80LXQvS4g0J3QvtCy0YvQvCDQs9C70LDQstC90YvQvCDRgtGA0LXQvdC10YDQvtC8INCx0YvQuyDQvdCw0LfQvdCw0YfQtdC9INCg0LDRhNCw0Y3Qu9GMINCR0LXQvdC40YLQtdGBLCDQsCDQo9C70YzQtSDRgdC+0LPQu9Cw0YHQuNC70YHRjyDQv9C+0LrQuNC90YPRgtGMINC60LvRg9CxLlxcclxcblxcclxcbiAgICAgICAg0JHQtdC90LjRgtC10YEg0L3QtSDRgdGC0LDQuyDRgtGA0LDRgtC40YLRjCDQstGA0LXQvNGPINC90LAg0L/QvtC40YHQutC4INC00LvRjyDRgdC10LHRjyDQvdC+0LLRi9GFINC/0L7QvNC+0YnQvdC40LrQvtCyLCDQsCDQvtGB0YLQsNCy0LjQuyDQvdCwINGB0LLQvtC40YUg0LTQvtC70LbQvdC+0YHRgtGP0YUg0KTQuNC70LAg0KLQvtC80L/RgdC+0L3QsCwg0KHRjdC80LzQuCDQm9C4INC4INCU0LbQviDQmtC+0YDRgNC40LPQsNC90LAuINCS0L3QtdC30LDQv9C90L4gXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLQtdGA0L3Rg9C70YHRjyDQuiDQsNGC0LDQutGD0Y7RidC10LzRgyDRgdGC0LjQu9GOINC40LPRgNGLINGBINCx0L7Qu9GM0YjQuNC8INC60L7Qu9C40YfQtdGB0YLQstC+0Lwg0L/QtdGA0LXQtNCw0YcsINC90LAg0YDQsNC00L7RgdGC0Ywg0LHQvtC70LXQu9GM0YnQuNC60LDQvCDQuCDQutGA0LjRgtC40LrQsNC8LCDQuCDRgdGC0LDQuyDQv9GA0L7Rj9Cy0LvRj9GC0Ywg0L3QsNC80LXQutC4INC90LAg0LzQvdC+0LPQvtC+0LHQtdGJ0LDRjtGJ0LXQtSDQsdGD0LTRg9GJ0LXQtS4g0JIg0LrQvtC90YbQtSDRgdC10LfQvtC90LAgXFxcItCb0LjQstC10YDQv9GD0LvRjFxcXCIg0LLRi9C40LPRgNCw0Lsg0JvQuNCz0YMg0KfQtdC80L/QuNC+0L3QvtCyINCyINC+0LTQvdC+0Lwg0LjQtyDRgdCw0LzRi9GFINC30LDRhdCy0LDRgtGL0LLQsNGO0YnQuNGFINGE0LjQvdCw0LvQvtCyINCyINC40YHRgtC+0YDQuNC4INGC0YPRgNC90LjRgNCwLlxcclxcblxcclxcbiAgICAgICAg0KDRg9C60L7QstC+0LTRgdGC0LLQviDQutC70YPQsdCwLCDQsiDQu9C40YbQtSDQsNC80LXRgNC40LrQsNC90YHQutC40YUg0LLQu9Cw0LTQtdC70YzRhtC10LIg0JTQttC+0YDQttCwINCW0LjQu9C70LXRgtGC0LAg0Lgg0KLQvtC80LAg0KXQuNC60YHQsCwg0LTQsNCy0LjQu9C+INC90LAg0JHQtdC90LjRgtC10YHQsCDRgSDRgtGA0LXQsdC+0LLQsNC90LjQtdC8INC90LXQvNC10LTQu9C10L3QvdC+0LPQviDRg9GB0L/QtdGF0LAg0LIg0J/RgNC10LzRjNC10YAt0LvQuNCz0LUuINCg0LDRgdC60L7QuyDQv9GA0L7QuNC30L7RiNC10LssINC60L7Qs9C00LAg0YLRgNC10L3QtdGA0YMg0LHRi9C70L4g0L7RgtC60LDQt9Cw0L3QviDQsiDRgdGA0LXQtNGB0YLQstCw0YUg0L3QsCDRg9GB0LjQu9C10L3QuNC1INGB0L7RgdGC0LDQstCwLlxcclxcblxcclxcbiAgICAgICAg0JvQtdGC0L7QvCAyMDEwINCz0L7QtNCwINCR0LXQvdC40YLQtdGB0LAg0YHQvNC10L3QuNC7INCg0L7QuSDQpdC+0LTQttGB0L7QvSwg0LrQvtGC0L7RgNC+0LzRgyDQt9CwINGC0L4g0L3QtdC/0YDQvtC00L7Qu9C20LjRgtC10LvRjNC90L7QtSDQstGA0LXQvNGPLCDRh9GC0L4g0L7QvSDQv9GA0L7QsdGL0Lsg0YMg0YDRg9C70Y8g0LrQu9GD0LHQsCwg0YLQsNC6INC90LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCy0L7QtdCy0LDRgtGMINC70Y7QsdC+0LLRjCDQsdC+0LvQtdC70YzRidC40LrQvtCyLiDQmtC70YPQsSwg0YLQtdC8INCy0YDQtdC80LXQvdC10LwsINC/0YvRgtCw0LvRgdGPINGA0LDQt9C+0YDQstCw0YLRjCDQstGB0LUg0YHQstGP0LfQuCDRgSDQsNC80LXRgNC40LrQsNC90YHQutC40LzQuCDRhdC+0LfRj9C10LLQsNC80LguXFxyXFxuXFxyXFxuICAgICAgICDQkiDQutC+0L3RhtC1INC60L7QvdGG0L7Qsiwg0LHQu9Cw0LPQvtC00LDRgNGPINGD0YHQuNC70LjRj9C8INC/0YDQtdC30LjQtNC10L3RgtCwINC60LvRg9Cx0LAsINCc0LDRgNGC0LjQvdCwINCR0YDQvtGC0L7QvdCwLCDQv9C+0Y/QstC40LvRgdGPINC90L7QstGL0Lkg0L/QvtC60YPQv9Cw0YLQtdC70YwsINC4INGB0LTQtdC70LrQsCDQv9C+INC/0YDQvtC00LDQttC1IFxcXCLQm9C40LLQtdGA0L/Rg9C70Y9cXFwiINGB0L7RgdGC0L7Rj9C70LDRgdGMLCDQvdC10YHQvNC+0YLRgNGPINC90LAg0LLRgdC1INGB0YPQtNC10LHQvdGL0LUg0LjRgdC60LgsINC/0YvRgtCw0LLRiNC40LXRgdGPINC/0L7QvNC10YjQsNGC0Ywg0LXQtSDQvtGB0YPRidC10YHRgtCy0LvQtdC90LjRji4g0JIg0L7QutGC0Y/QsdGA0LUgMjAxMCDQutC70YPQsSDQv9C+0L/RgNC+0YnQsNC70YHRjyDRgSDQpdC40LrRgdC+0Lwg0Lgg0JbQuNC70LvQtdGC0YLQvtC8INC4INCy0YHRgtGA0LXRgtC40Lsg0L3QvtCy0L7Qs9C+INCy0LvQsNC00LXQu9GM0YbQsCwg0JTQttC+0L3QsCDQk9C10L3RgNC4LCDRh9GM0Y8g0LrQvtC80L/QsNC90LjRjyBORVZTINGD0LbQtSDQuNC80LXQu9CwINGD0YHQv9C10YjQvdGL0Lkg0L7Qv9GL0YIg0YDQsNCx0L7RgtGLINGBINCx0L7RgdGC0L7QvdGB0LrQvtC5INCx0LXQudGB0LHQvtC70YzQvdC+0Lkg0LrQvtC80LDQvdC00L7QuSBcXFwi0KDQtdC0INCh0L7QutGBXFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCl0L7QtNC20YHQvtC9INC90LUg0L3QsNC00L7Qu9Cz0L4g0LfQsNC00LXRgNC20LDQu9GB0Y8g0LIg0LrQu9GD0LHQtSwg0L/QvtGB0LvQtSDRg9C20LDRgdC90L7Qs9C+INC90LDRh9Cw0LvQsCDRgdC10LfQvtC90LAgMjAxMC8xMSwg0LIg0Y/QvdCy0LDRgNC1INC+0L0g0YHQvtCz0LvQsNGB0LjQu9GB0Y8g0L/QvtC60LjQvdGD0YLRjCDRgdCy0L7QuSDQv9C+0YHRgiwg0Lgg0LXQs9C+INC80LXRgdGC0L4g0LLRgNC10LzQtdC90L3QviDQt9Cw0L3Rj9C7INCa0LXQvdC90Lgg0JTQsNC70LPQu9GC0YgsINGH0YzQtSDQuNC80Y8g0Log0YLQvtC80YMg0LLRgNC10LzQtdC90Lgg0LLRgdC1INGH0LDRidC1INGB0YLQsNC70Lgg0LLRgdC/0L7QvNC40L3QsNGC0Ywg0LHQvtC70LXQu9GM0YnQuNC60LguXFxyXFxuXFxyXFxuICAgICAgICDQlNCw0LvQs9C70LjRiCDQsdGL0YHRgtGA0L4g0LLRgdC10LvQuNC7INGD0LLQtdGA0LXQvdC90L7RgdGC0Ywg0LIg0LrQvtC80LDQvdC00YMsINC40LfQsdCw0LLQuNC70YHRjyDQvtGCINC90LXQvdGD0LbQvdGL0YUg0LjQs9GA0L7QutC+0LIsINCy0LrQu9GO0YfQsNGPINC4INGB0L/QvtGA0L3Ri9C5INC/0LXRgNC10YXQvtC0INCk0LXRgNC90LDQvdC00L4g0KLQvtGA0YDQtdGB0LAg0LIgXFxcItCn0LXQu9GB0LhcXFwiLCDQv9GA0LjQvtCx0YDQtdC7INCb0YPQuNGB0LAg0KHRg9Cw0YDQtdGB0LAg0Lgg0K3QvdC00Lgg0JrRjdGA0YDQvtC70LvQsCDQtNC70Y8g0L/QvtGB0YLRgNC+0LXQvdC40Y8g0L3QvtCy0L7QuSDQu9C40L3QuNC4INCw0YLQsNC60LguINCa0LvRg9CxINGB0LvQvtCy0L3QviDQt9Cw0L3QvtCy0L4g0YDQvtC00LjQu9GB0Y8g0Lgg0LLQt9C70LXRgtC10Lsg0L3QsCDQutGA0YvQu9GM0Y/RhS4g0JIg0LrQvtC90YbQtSDRgdC10LfQvtC90LAg0JTQsNC70LPQu9C40Ygg0L/QvtC00L/QuNGB0LDQuyDRgSBcXFwi0JvQuNCy0LXRgNC/0YPQu9C10LxcXFwiINGC0YDQtdGF0LvQtdGC0L3QuNC5INC60L7QvdGC0YDQsNC60YIuXFxyXFxuXFxyXFxuICAgICAgICDQntGB0L3QvtCy0L3QvtC5INGG0LXQu9GM0Y4g0LrQu9GD0LHQsCDQsdGL0LvQviDQstC+0LfQstGA0LDRidC10L3QuNC1INCyINCb0LjQs9GDINCn0LXQvNC/0LjQvtC90L7Qsiwg0LfQsCDRgdCy0L7QuSDQv9C10YDQstGL0Lkg0L/QvtC70L3Ri9C5INGB0LXQt9C+0L0g0LIg0LrQu9GD0LHQtSDQlNCw0LvQs9C00LjRiNGDINC00L7RgdGC0LjRh9GMINC10LUg0L3QtSDRg9C00LDQu9C+0YHRjCwg0LjQty3Qt9CwINC00L7RgdGC0LDRgtC+0YfQvdC+INC90LXRgdGC0LDQsdC40LvRjNC90YvRhSDQstGL0YHRgtGD0L/Qu9C10L3QuNC5INC60L7QvNCw0L3QtNGLINCyINCf0YDQtdC80YzQtdGALdC70LjQs9C1LiDQkiDQuNGC0L7Qs9C1INC60LvRg9CxINGE0LjQvdC40YjQuNGA0L7QstCw0Lsg0L3QsCDQstC+0YHRjNC80L7QvCDQvNC10YHRgtC1INCyINGC0LDQsdC70LjRhtC1LCDQvdC40LbQtSDRgdCy0L7QtdCz0L4g0L7RgdC90L7QstC90L7Qs9C+INC60L7QvdC60YPRgNC10L3RgtCwLCBcXFwi0K3QstC10YDRgtC+0L3QsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQotC10Lwg0L3QtSDQvNC10L3QtdC1LCBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDRhdC+0YDQvtGI0L4g0L/RgNC+0Y/QstC40Lsg0YHQtdCx0Y8g0LIg0LrRg9Cx0LrQvtCy0YvRhSDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40Y/RhS4g0JIg0YTQtdCy0YDQsNC70LUgMjAxMiDQs9C+0LTQsCBcXFwi0LrRgNCw0YHQvdGL0LVcXFwiINCy0YvQuNCz0YDQsNC70Lgg0JrRg9Cx0L7QuiDQm9C40LPQuCwg0L7QsdGL0LPRgNCw0LIgXFxcItCa0LDRgNC00LjRhNGEXFxcIiDQsiDRgdC10YDQuNC4INC/0LXQvdCw0LvRjNGC0LgsINCx0LvQsNCz0L7QtNCw0YDRjyDRh9C10LzRgyDQv9C+0LvRg9GH0LjQuyDQv9GD0YLQtdCy0LrRgyDQsiDQm9C40LPRgyDQldCy0YDQvtC/0YsuINCQINCyINC80LDQtSBcXFwi0JvQuNCy0LXRgNC/0YPQu9GMXFxcIiDQuCBcXFwi0KfQtdC70YHQuFxcXCIg0LLRgdGC0YDQtdGC0LjQu9C40YHRjCDQsiDRhNC40L3QsNC70LUg0JrRg9Cx0LrQsCDQkNC90LPQu9C40LgsINC+0LTQvdCw0LrQviDRg9C00LDRh9CwINC+0LrQsNC30LDQu9Cw0YHRjCDQvdCwINGB0YLQvtGA0L7QvdC1INC70L7QvdC00L7QvdGB0LrQvtCz0L4g0LrQu9GD0LHQsC5cXHJcXG5cXHJcXG4gICAgICAgINCd0LXRgdC80L7RgtGA0Y8g0L3QsCDRg9GB0L/QtdGF0Lgg0LIg0LrRg9Cx0LrQvtCy0YvRhSDRgtGD0YDQvdC40YDQsNGFLCDQsiDQutC+0L3RhtC1INGB0LXQt9C+0L3QsCDQlNCw0LvQs9C70LjRiCDQsdGL0Lsg0YPQstC+0LvQtdC9LCDQsCDQtdCz0L4g0LzQtdGB0YLQviDQt9Cw0L3Rj9C7INC80L7Qu9C+0LTQvtC5INGB0LXQstC10YDQvtC40YDQu9Cw0L3QtNGB0LrQuNC5INGC0YDQtdC90LXRgCwg0JHRgNC10L3QtNCw0L0g0KDQvtC00LbQtdGA0YEsINC/0L7QutC+0YDQuNCy0YjQuNC5INC6INGC0L7QvNGDINCy0YDQtdC80LXQvdC4INCy0YHQtdGFINGB0LLQvtC10Lkg0YDQsNCx0L7RgtC+0Lkg0YEg0LTQvtGB0YLQsNGC0L7Rh9C90L4g0YHQutGA0L7QvNC90YvQvCBcXFwi0KHRg9C+0L3RgdC4INCh0LjRgtC4XFxcIi5cXHJcXG5cXHJcXG4gICAgICAgINCg0L7QtNC20LXRgNGBINC/0YDQuNGI0LXQuyDRgSDRgNC10YjQuNC80L7RgdGC0YzRjiDRg9GB0YLQsNC90L7QstC40YLRjCDQsiDQutC70YPQsdC1INC90L7QstGD0Y4g0YTQuNC70L7RgdC+0YTQuNGOLCDQv9GA0LjQstC40YLRjCDQutC+0LzQsNC90LTQtSDQvdC+0LLRi9C5INGB0YLQuNC70Ywg0LjQs9GA0YssINC/0YDQuCDRjdGC0L7QvCDQvdC1INGC0LXRgNGP0Y8sINC60LDQuiDQvtC9INGD0YLQstC10YDQttC00LDQuywg0YHQstGP0LfQuCDRgSDQuNGB0YLQvtGA0LjQtdC5LiDQoSDRgdC+0LHQvtC5INC40LcgXFxcItCh0YPQvtC90YHQuFxcXCIg0L7QvSDQt9Cw0YXQstCw0YLQuNC7INGB0LLQvtC40YUg0LDRgdGB0LjRgdGC0LXQvdGC0L7QsiDQuCDQv9C+0LvRg9C30LDRidC40YLQvdC40LrQsCDQlNC20L4g0JDQu9C70LXQvdCwLiDQntC00L3QsNC60L4sINC40Lct0LfQsCDQv9GA0L7QstC+0LTQuNCy0YjQtdCz0L7RgdGPINCyINGC0L4g0LLRgNC10LzRjyDRh9C10LzQv9C40L7QvdCw0YLQsCDQldCy0YDQvtC/0YssINGC0YDQtdC90LXRgCDQstC/0LXRgNCy0YvQtSDRg9Cy0LjQtNC10Lsg0LLRgdGOINGB0LLQvtGOINC60L7QvNCw0L3QtNGDINCyINGB0LHQvtGA0LUg0YLQvtC70YzQutC+INC6INC90LDRh9Cw0LvRgyDRgdC10LfQvtC90LAuINCSINGB0LXQt9C+0L3QtSAyMDEyLzEzIFxcXCLQm9C40LLQtdGA0L/Rg9C70YxcXFwiINCy0YvRgdGC0YPQv9Cw0Lsg0LrRgNCw0LnQvdC1INC90LXRgdGC0LDQsdC40LvRjNC90L4sINC/0L7QutCw0LfQsNCyINGF0YPQtNGI0LjQuSDQt9CwINC/0L7RgdC70LXQtNC90LjQtSDRgdGC0L4g0LvQtdGCINGB0YLQsNGA0YIg0YHQtdC30L7QvdCwLiDQmtGA0YPQv9C90YvQtSDQv9C+0LHQtdC00Ysg0YHQvNC10L3Rj9C70Lgg0L3QtdC+0LbQuNC00LDQvdC90YvQtSDQsdC10LfQstC+0LvRjNC90YvQtSDQv9C+0YDQsNC20LXQvdC40Y8uINCS0L4g0LLRgNC10LzRjyDQt9C40LzQvdC10LPQviDRgtGA0LDQvdGB0YTQtdGA0L3QvtCz0L4g0L7QutC90LAg0KDQvtC00LbQtdGA0YHRgyDRg9C00LDQu9C+0YHRjCDRg9GB0LjQu9C40YLRjCDQutC+0LzQsNC90LTRgyDQtNCy0YPQvNGPINC/0YDQuNC+0LHRgNC10YLQtdC90LjRj9C80Lg6INCw0L3Qs9C70LjQudGB0LrQuNC8INC90LDQv9Cw0LTQsNGO0YnQuNC8INCU0Y3QvdC40LXQu9C+0Lwg0KHRgtCw0YDRgNC40LTQttC10Lwg0Lgg0LHQu9Cw0LfQuNC70YzRhtC10Lwg0KTQuNC70LvQuNC/0L/QtSDQmtC+0YPRgtC40L3RjNC+LiDQkiDQuNGC0L7Qs9C1INC60L7QvNCw0L3QtNCwINC30LDQstC10YDRiNC40LvQsCDRgdC10LfQvtC9INC90LAg0YHQtdC00YzQvNC+0Lwg0LzQtdGB0YLQtSwg0LLQvdC+0LLRjCDQvdC40LbQtSBcXFwi0K3QstC10YDRgtC+0L3QsFxcXCIuXFxyXFxuXFxyXFxuICAgICAgICDQl9C40LzQvtC5IDIwMTMg0LLQtdGC0LXRgNCw0L0g0LrQu9GD0LHQsCDQlNC20LXQudC80Lgg0JrQsNGA0YDQsNCz0LXRgCDQvtCx0YrRj9Cy0LjQuyDQviDQt9Cw0LLQtdGA0YjQtdC90LjQuCDRgdCy0L7QtdC5INC60LDRgNGM0LXRgNGLINC90LAgXFxcItCt0L3RhNC40LvQtNC1XFxcIi4gMTkg0LzQsNGPINC+0L0g0L/RgNC+0LLQtdC7INGB0LLQvtC5INC/0L7RgdC70LXQtNC90LjQuSDQvtGE0LjRhtC40LDQu9GM0L3Ri9C5INC80LDRgtGHINCyINC60YDQsNGB0L3QvtC5INGE0YPRgtCx0L7Qu9C60LUg0LIg0L/QvtCx0LXQtNC90L7QvCDQtNC70Y8gXFxcItCb0LjQstC10YDQv9GD0LvRj1xcXCIg0LzQsNGC0YfQtSDQv9GA0L7RgtC40LIgXFxcItCa0YPQuNC90Lcg0J/QsNGA0Log0KDQtdC50L3QtNC20LXRgNGBXFxcIi5cXHJcXG4gICAgPC9kaXY+PGhyIC8+PGk+XFxyXFxuICAgICAgICDQmNGB0YLQvtGH0L3QuNC6OiBsZmNvbmxpbmUuY29tXFxyXFxuICAgICAgICDQn9C10YDQtdCy0L7QtDogdGFzLW4tclxcclxcbiAgICA8L2k+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9jbHViLWhpc3RvcnkuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIjxydWxlcz5cIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9ydWxlcy5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZXNDb21wb25lbnQge1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxwPjxmb250IGNvbG9yPVxcXCJyZWRcXFwiPjxiPtCU0LDQvdC90YvQtSDQv9GA0LDQstC40LvQsCDQvdC1INC/0L7QtNC70LXQttCw0YIg0L7QsdGB0YPQttC00LXQvdC40Y4g0Lgg0L7QsdGP0LfQsNGC0LXQu9GM0L3RiyDQtNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LLRgdC10LzQuCDQsdC10Lcg0LjRgdC60LvRjtGH0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDQv9C+0YDRgtCw0LvQsCDRgNCw0L3Qs9C+0Lwg0L7RgiDQv9GA0L7RgdGC0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQtNC+INC80L7QtNC10YDQsNGC0L7RgNCwICjQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNGLIC0g0LrQsNC6INC70LjRhtCwLCDRjdGC0Lgg0L/RgNCw0LLQuNC70LAg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGO0YnQuNC1IC0g0L/QvtGB0YLRg9C/0LDRjtGCINC/0L4g0YHQstC+0LXQvNGDINGD0YHQvNC+0YLRgNC10L3QuNGOKS4g0JXRgdC70Lgg0LLQsNC8INC90LUg0L3RgNCw0LLRj9GC0YHRjyDRjdGC0Lgg0L/RgNCw0LLQuNC70LAg0Lgg0LLRiyDRhdC+0YLQuNGC0LUg0LTQu9GPINGB0LXQsdGPINC00YDRg9Cz0LjQtSDQv9GA0LDQstC40LvQsCAtINCy0Ysg0LLRgdC10LPQtNCwINC80L7QttC10YLQtSDRgdC+0LfQtNCw0YLRjCDRgdCy0L7QuSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C5INGB0LDQudGCINC4INC00LXQu9Cw0YLRjCDRgtCw0Lwg0LLRgdC1LCDRh9GC0L4g0LLQsNC8INC90YDQsNCy0LjRgtGB0Y8uPC9iPjwvZm9udD4gPC9wPlxcclxcbiAgICA8cD7Qn9GA0LDQstC40LvQsCDQstCy0L7QtNGP0YLRgdGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60L7QvNGE0L7RgNGC0L3QvtC5INC4INC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdC+0Lkg0LDRgtC80L7RgdGE0LXRgNGLINC+0LHRidC10L3QuNGPLiDQldGB0LvQuCDQktCw0YEg0L3QtSDRg9GB0YLRgNCw0LjQstCw0LXRgiDRg9GB0YLQsNC90L7QstC70LXQvdC90LDRjyDRhNC+0YDQvNCwINC+0LHRidC10L3QuNGPLCDQstC+0LfQtNC10YDQttC40YLQtdGB0Ywg0L7RgiDRg9GH0LDRgdGC0LjRjyDQsiDQtNCw0L3QvdC+0Lkg0LrQvtC90YTQtdGA0LXQvdGG0LjQuC48L3A+XFxyXFxuICAgIDxwPjxiPkkuINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkuPC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCg0LXQs9C40YHRgtGA0LjRgNGD0Y/RgdGMINC90LAg0YTQvtGA0YPQvNC1LCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YHQvtCz0LvQsNGI0LDQtdGC0YHRjyDQstGL0L/QvtC70L3Rj9GC0Ywg0LTQsNC90L3Ri9C1INCf0YDQsNCy0LjQu9CwLjwvbGk+XFxyXFxuICAgICAgICA8bGk+0JTQu9GPINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0L3QsCDRhNC+0YDRg9C80LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC00L7Qu9C20LXQvSDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0LTQtdC50YHRgtCy0YPRjtGJ0LjQuSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiy4g0JzRiyDQs9Cw0YDQsNC90YLQuNGA0YPQtdC8INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLRjCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LguPC9saT5cXHJcXG4gICAgICAgIDxsaT7QktGL0LHQvtGAINC40LzQtdC90Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIChuaWNrbmFtZSkg0Y/QstC70Y/QtdGC0YHRjyDQstCw0YjQuNC8INC40YHQutC70Y7Rh9C40YLQtdC70YzQvdGL0Lwg0L/RgNCw0LLQvtC8LiDQkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQvtGB0YLQsNCy0LvRj9C10YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0L/RgNC40L3Rj9GC0Ywg0LzQtdGA0Ysg0Log0L/RgNC10LrRgNCw0YnQtdC90LjRjiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBuaWNrbmFtZSwg0LXRgdC70Lgg0LXQs9C+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC90LDRgNGD0YjQsNC10YIg0L7QsdGJ0LXQv9GA0LjQvdGP0YLRi9C1INC80L7RgNCw0LvRjNC90YvQtSDQuCDRjdGC0LjRh9C10YHQutC40LUg0L3QvtGA0LzRiyDQuNC70Lgg0Y/QstC70Y/QtdGC0YHRjyDQvtGB0LrQvtGA0LHQuNGC0LXQu9GM0L3Ri9C8INC00LvRjyDQtNGA0YPQs9C40YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0YTQvtGA0YPQvNCwLiDQl9Cw0L/RgNC10YnQtdC90LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjyBuaWNrbmFtZSwg0YHRhdC+0LbQuNGFINGBINGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LzQuCDQtNC+INGB0YLQtdC/0LXQvdC4LCDQutC+0YLQvtGA0YvQtSDQvNC+0LPRg9GCINCy0LLQtdGB0YLQuCDQsiDQt9Cw0LHQu9GD0LbQtNC10L3QuNC1INC00YDRg9Cz0LjRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDRhNC+0YDRg9C80LAuPC9saT5cXHJcXG4gICAgICAgIDxsaT7Ql9Cw0L/RgNC10YnQtdC90LAg0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdCw0Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvtC00L3QuNC8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8LCDQstC90LUg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGG0LXQu9C10LksINGBINC60L7RgtC+0YDRi9C80Lgg0YLQsNC60LDRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0YDQvtCy0L7QtNC40YLRgdGPLiDQlNCw0L3QvdC+0LUg0L3QsNGA0YPRiNC10L3QuNC1INGP0LLQu9GP0LXRgtGB0Y8g0LrRgNCw0LnQvdC1INGB0LXRgNGM0LXQt9C90YvQvCDQuCDQstC10LTQtdGCINC6INCx0LvQvtC60LjRgNC+0LLQsNC90LjRjiDQstGB0LXRhSDRg9GH0LXRgtC90YvRhSDQt9Cw0L/QuNGB0LXQuS4g0JXRgdC70Lgg0LLQsNC8INC90LUg0L3RgNCw0LLQuNGC0YHRjyDQvdC40LosINC90LDQv9C40YjQuNGC0LUg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC5INGA0LDQt9C00LXQuyDRhNC+0YDRg9C80LAg0LjQu9C4INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YMuPC9saT5cXHJcXG4gICAgICAgIDxsaT7QldGB0LvQuCDQstGLINC90LUg0L/RgNC+0Y/QstC70Y/QtdGC0LUg0LDQutGC0LjQstC90L7RgdGC0Ywg0L3QsCDRhNC+0YDRg9C80LUg0LIg0YLQtdGH0LXQvdC40LUg0LTQu9C40YLQtdC70YzQvdC+0LPQviDQstGA0LXQvNC10L3QuCwg0LLQsNGI0LAg0YPRh9C10YLQvdCw0Y8g0LfQsNC/0LjRgdGMINC80L7QttC10YIg0LHRi9GC0Ywg0YPQtNCw0LvQtdC90LAuPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+PGI+SUkuINCd0LAg0KTQvtGA0YPQvNC1IDxmb250IGNvbG9yPVxcXCJyZWRcXFwiPtC30LDQv9GA0LXRidC10L3QvjwvZm9udD46PC9iPjwvcD5cXHJcXG4gICAgPG9sPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvdC10L3QvtGA0LzQsNGC0LjQstC90YPRjiDQu9C10LrRgdC40LrRgyDQsiDQu9GO0LHRi9GFINC10ZEg0L/RgNC+0Y/QstC70LXQvdC40Y/RhSwg0LIg0YLQvtC8INGH0LjRgdC70LUg0YHQvtC60YDQsNGJ0LXQvdC90YPRjiDQuNC70Lgg0LfQsNC80LXQvdC10L3QvdGD0Y4gwqvQt9Cy0LXQt9C00L7Rh9C60LDQvNC4wrsgKNC40LvQuCDQtNGA0YPQs9C40LzQuCDRgdC40LzQstC+0LvQsNC80LgpLCDQvdCwINGA0YPRgdGB0LrQvtC8LCDQsNC90LPQu9C40LnRgdC60L7QvCDRj9C30YvQutC1LCDQu9C40LHQviDRgtGA0LDQvdGB0LvQuNGC0LUuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHQvtC30LTQsNCy0LDRgtGMINGC0LXQvNGLLCDRgNCw0L3QtdC1INC+0LHRgdGD0LbQtNCw0LLRiNC40LXRgdGPINCyINCk0L7RgNGD0LzQtS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNGPLCDQvdC1INC40LzQtdGO0YnQuNC1INC+0YLQvdC+0YjQtdC90LjRjyDQuiDQvtCx0YHRg9C20LTQsNC10LzQvtC5INGC0LXQvNC1ICjQvtGE0YTRgtC+0L/QuNC6KS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0Lgg0YHQvtC+0LHRidC10L3QuNGPLCDQsiDQutC+0YLQvtGA0YvRhSDQsdC+0LvQtdC1INC/0L7Qu9C+0LLQuNC90Ysg0LLRgdC10Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0L3QsNC/0LjRgdCw0L3QviDQl9CQ0JPQm9CQ0JLQndCr0JzQmCDQkdCj0JrQktCQ0JzQmC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YssINC40LzQtdGO0YnQuNC1INCyINC90LDQt9Cy0LDQvdC40Lgg0YPQutGA0LDRiNC10L3QuNGPICjCqz09PS0tLdCc0L7RjyDRgtC10LzQsC0tLT09PcK7KSwg0L3QtSDQvtGC0YDQsNC20LDRjtGJ0LjQtSDRgdGD0YLRjCDQstC+0L/RgNC+0YHQsCAowqvQn9C+0YHQvNC+0YLRgNC4INGB0Y7QtNCwwrsg0LjQu9C4IMKrZmRnbDtmamRnbDtmZGpnbGdmZMK7KS4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0YEg0L7QsdGA0LDRidC10L3QuNC10Lwg0Log0LrQvtC90LrRgNC10YLQvdC+0LzRgyDRg9GH0LDRgdGC0L3QuNC60YMg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCU0YPQsdC70LjRgNC+0LLQsNGC0Ywg0YLQtdC80YssINGC0L4g0LXRgdGC0Ywg0YDQsNC30LzQtdGJ0LDRgtGMINC+0LTQuNC90LDQutC+0LLRi9C1INGB0L7QvtCx0YnQtdC90LjRjyDQsiDRgNCw0LfQvdGL0YUg0YDQsNC30LTQtdC70LDRhSDQpNC+0YDRg9C80LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KfRgNC10LfQvNC10YDQvdC+0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LPRgNCw0YTQuNGH0LXRgdC60LjRhSDRgdC80LDQudC70LjQutC+0LIg0LIg0YHQvtC+0LHRidC10L3QuNC4ICjQsdC+0LvQtdC1INGC0YDQtdGFINC/0L7QtNGA0Y/QtCkg0LjQu9C4INC/0L7Qu9C90L7RgdGC0YzRjiDRgdC+0YHRgtC+0Y/RidC10LUg0YLQvtC70YzQutC+INC40Lcg0YHQvNCw0LnQu9C+0LIuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/Rg9Cx0LvQuNC60LDRhtC40Y8g0L/QvtGB0YLQvtCyLCDQvdC1INC90LXRgdGD0YnQuNGFINC30L3QsNGH0LjRgtC10LvRjNC90L7QuSDRgdC80YvRgdC70L7QstC+0Lkg0L3QsNCz0YDRg9C30LrQuCAo0YTQu9GD0LQpLiDQl9Cw0L/RgNC10YnQsNC10YLRgdGPINC/0LjRgdCw0YLRjCDQutC+0YDQvtGC0LrQuNC1INCx0LXRgdGB0LzRi9GB0LvQtdC90L3Ri9C1INC/0L7RgdGC0Ysg0YLQuNC/0LAgXFxcItCW0JbQntCo0KxcXFwiINC40LvQuCBcXFwi0J/QmNCo0Jgg0JXQqdCeXFxcIiwg0LAg0YLQsNC60LbQtSwg0YHQvtGB0YLQvtGP0YnQuNC1INC40Lcg0L7QtNC90LjRhSDRgdC80LDQudC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0YHQuNC80LLQvtC70L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQutGA0LDRgdC90L7Qs9C+INGG0LLQtdGC0LAg4oCTINGN0YLQviDQv9GA0LjQstC40LvQtdCz0LjRjyDQvNC+0LTQtdGA0LDRgtC+0YDQvtCyINC4INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qr9C30YvQuiDRgdCw0LnRgtCwLdCg0KPQodCh0JrQmNCZLtCR0YPQtNGM0YLQtSDQtNC+0LHRgNGLLNC/0LjRiNC40YLQtSDQvdCwINC90LXQvC7QmtC+0LLQtdGA0LrQsNC90LjQtSDRgdC70L7QsiDQuCDQv9GA0LXQtNC90LDQvNC10YDQtdC90L3QvtC1INC40LfQstGA0LDRidC10L3QuNC1INC+0YDRhNC+0LPRgNCw0YTQuNC4INGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCwg0LAg0YLQsNC60LbQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQu9Cw0YLQuNC90LjRhtGLICjRgtGA0LDQvdGB0LvQuNGC0LApLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCm0LjRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC10LTRi9C00YPRidC40YUg0YHQvtC+0LHRidC10L3QuNC5LCDQtdGB0LvQuCDQsiDRjdGC0L7QvCDQvdC10YIg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LggKNGE0LvQtdC50LwpLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQs9GA0YPQsdGL0LUsINC90LXRhtC10L3Qt9GD0YDQvdGL0LUg0LLRi9GA0LDQttC10L3QuNGPINC4INC+0YHQutC+0YDQsdC70LXQvdC40Y8g0LIg0LvRjtCx0L7QuSDRhNC+0YDQvNC1LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCh0L7Qt9C00LDQstCw0YLRjCDRgtC10LzRiyDQuCDRgdC+0L7QsdGJ0LXQvdC40Y8sINGB0L7QtNC10YDQttCw0YnQuNC1INGA0LXQutC70LDQvNC90YPRjiwg0LDQvdGC0LjRgNC10LrQu9Cw0LzQvdGD0Y4g0LjQu9C4INC60L7QvNC80LXRgNGH0LXRgdC60YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRjiwg0LAg0YLQsNC6INC20LUg0YHRgdGL0LvQutC4INC90LAg0YHQsNC50YLRiyDRgSDRhtC10LvRjNGOINC/0L7QstGL0YjQtdC90LjRjyDQuNGFINC/0L7RgdC10YnQsNC10LzQvtGB0YLQuC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7Qn9GA0L7QtNC+0LvQttCw0YLRjCDQvtCx0YHRg9C20LTQsNGC0Ywg0LLQvtC/0YDQvtGB0Ysg0LjQtyDRgtC10LwsINC30LDQutGA0YvRgtGL0YUg0LjQu9C4INGD0LTQsNC70LXQvdC90YvRhSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtCy0L7RhtC40YDQvtCy0LDRgtGMINC60L7QvdGE0LvQuNC60YLRiyDRgSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4INCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80Ysg0Lgg0YHQvtC+0LHRidC10L3QuNGPLCDQv9GA0L7RgtC40LLQvtGA0LXRh9Cw0YnQuNC1INCa0L7QvdGB0YLQuNGC0YPRhtC40Lgg0Lgg0LfQsNC60L7QvdC+0LTQsNGC0LXQu9GM0YHRgtCy0YMg0KDQpC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdGC0LDRgtGD0YHQsCDQuNC70Lgg0L/QvtC00L/QuNGB0Lgg0L3QtdGG0LXQvdC30YPRgNC90YvQtSDQuNC70Lgg0YDRg9Cz0LDRgtC10LvRjNC90YvQtSDRgdC70L7QstCwLCDQsCDRgtCw0Log0LbQtSDQt9Cw0LLQtdC00L7QvNC+INC90LXQtNC+0YHRgtC+0LLQtdGA0L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLiAo0J3QsNC/0YDQuNC80LXRgCwg0L/QuNGB0LDRgtGMINCyINGB0YLQsNGC0YPRgdC1IMKr0JzQvtC00LXRgNCw0YLQvtGAwrssINC60L7Qs9C00LAg0L3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCS0Ysg0YLQsNC60L7QstGL0Lwg0L3QtSDRj9Cy0LvRj9C10YLQtdGB0YwpLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgINCc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YAg0L/QvtC00L/QuNGB0Lgg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LHQvtC70LXQtSAyLdGFINGB0YLRgNC+0YfQtdC6INC4INC90LUg0LHQvtC70LXQtSAyMDAg0YHQuNC80LLQvtC70L7Qsi4g0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgLSBcXFwiMlxcXCIuINCf0L7QtNC/0LjRgdGMINC90LUg0LTQvtC70LbQvdCwINGB0L7QtNC10YDQttCw0YLRjCDRgtC10LrRgdGC0LAsINCy0YvQtNC10LvQtdC90L3QvtCz0L4g0LrRgNCw0YHQvdGL0Lwg0YbQstC10YLQvtC8LiDQoNCw0LfQvNC10YAg0LrQsNGA0YLQuNC90LrQuCDQsiDQstCw0YjQtdC5INC/0L7QtNC/0LjRgdC4INC00L7Qu9C20LXQvSDRg9C00L7QstC70LXRgtCy0L7RgNGP0YLRjCDRgdC70LXQtNGD0Y7RidC40Lwg0YLRgNC10LHQvtCy0LDQvdC40Y/QvDpcXHJcXG4gICAgICAgICAgICAtINGA0LDQt9C80LXRgCAtINC90LUg0LHQvtC70LXQtSAzNTDRhTYwINC/0LjQutGB0LXQu9C10Lkg0YHRg9C80LzQsNGA0L3QvlxcclxcbiAgICAgICAgICAgIC0g0L7QsdGK0LXQvCAtINC90LUg0LHQvtC70LXQtSA0MCDQutCxINGB0YPQvNC80LDRgNC90L5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINC60LDRh9C10YHRgtCy0LUg0LDQstCw0YLQsNGA0LAsINGE0L7RgtC+0LPRgNCw0YTQuNC4INC40LvQuCDQsiDQutCw0YfQtdGB0YLQstC1INCy0LvQvtC20LXQvdC40LUg0LIg0YHQvtC+0LHRidC10L3QuNGPINC60LDRgNGC0LjQvdC60Lgg0L/QvtGA0L3QvtCz0YDQsNGE0LjRh9C10YHQutC+0LPQviwg0Y3QutGB0YLRgNC10LzQuNGB0YLRgdC60L7Qs9C+INC40LvQuCDQvtGB0LrQvtGA0LHQuNGC0LXQu9GM0L3QvtCz0L4g0YXQsNGA0LDQutGC0LXRgNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtC/0LDQs9Cw0L3QtNC40YDQvtCy0LDRgtGMINC70Y7QsdGL0LUg0L3QsNGA0LrQvtGC0LjRh9C10YHQutC40LUg0Lgg0L/RgdC40YXQvtGC0YDQvtC/0L3Ri9C1INCy0LXRidC10YHRgtCy0LAg0Lgg0L7QsdGA0LDQtyDQttC40LfQvdC4LCDRgdCy0Y/Qt9Cw0L3QvdGL0Lkg0YEg0YPQv9C+0YLRgNC10LHQu9C10L3QuNC10Lwg0LTQsNC90L3Ri9GFINCy0LXRidC10YHRgtCyLCDQsCDRgtCw0Log0LbQtSDQv9GA0L7Qv9Cw0LPQsNC90LTQuNGA0L7QstCw0YLRjCDRgdGD0LjRhtC40LQsINGA0LDRgdC+0LLRg9GOINC4INGA0LXQu9C40LPQuNC+0LfQvdGD0Y4g0L3QtdC90LDQstC40YHRgtGMLCDRhNCw0YjQuNC30Lwg0Lgg0L3QsNGG0LjQt9C8LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC30LDQstC10LTQvtC80L4g0L/QvtGF0L7QttC40YUg0L3QuNC60L7Qsi4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QktGL0L/RgNCw0YjQuNCy0LDQvdC40LUg0L/RgNC40LHQsNCy0LvQtdC90LjRjyDRgNC10L/Rg9GC0LDRhtC40LgsINCwINGC0LDQuiDQttC1INC/0L7QtNC90LjQvNCw0YLRjCDQuNC70Lgg0YHQvdC40LbQsNGC0Ywg0YDQtdC/0YPRgtCw0YbQuNGOINCx0LXQtyDQv9GA0LjRh9C40L3Riy4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QntCx0YHRg9C20LTQsNGC0Ywg0LTQtdC50YHRgtCy0LjRjyDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCDQsiDRgNCw0LfQtNC10LvQsNGFINCk0L7RgNGD0LzQsC4g0JXRgdC70Lgg0JLRiyDQvdC10LTQvtCy0L7Qu9GM0L3RiyDQtNC10LnRgdGC0LLQuNGP0LzQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCwg0YLQviDQstGL0YHQutCw0LfRi9Cy0LDQudGC0LUg0YHQstC+0Lgg0L/RgNC10YLQtdC90LfQuNC4INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQvy4gNC4xLTQuMiDQvdCw0YHRgtC+0Y/RidC40YUg0J/RgNCw0LLQuNC7LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQn9ChICjQn9C10YDRgdC+0L3QsNC70YzQvdGL0LUg0KHQvtC+0LHRidC10L3QuNGPKSDQtNC70Y8g0LzQsNGB0YHQvtCy0L7QuSDRgNCw0YHRgdGL0LvQutC4INC40L3RhNC+0YDQvNCw0YbQuNC4INC70Y7QsdC+0LPQviDRgNC+0LTQsCAo0YDQtdC60LvQsNC80LAsIFxcXCLQv9C40YHRjNC80LAg0YHRh9Cw0YHRgtGM0Y9cXFwiINC4INGCLtC/LikgPC9saT5cXHJcXG4gICAgICAgIDxsaT7QndCw0YDRg9GI0LDRgtGMINCw0LLRgtC+0YDRgdC60LjQtSDQv9GA0LDQstCwICjRg9C60LDQt9GL0LLQsNC50YLQtSDRgdGB0YvQu9C60Lgg0L3QsCDQkNCS0KLQntCg0JAgKNC40YHRgtC+0YfQvdC40LopLCDQvtGC0LrRg9C00LAg0LHRi9C70Lgg0LLQt9GP0YLRiyDQstGL0LvQvtC20LXQvdC90YvQtSDRgdGC0LDRgtGM0LgpINC40LvQuCDRhdC+0YLRjyDQsdGLINC/0LjRiNC40YLQtSwg0YfRgtC+INCw0LLRgtC+0YDRgdGC0LLQviDQv9GA0LjQvdCw0LTQu9C10LbQuNGCINC90LUg0JLQsNC8LiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCj0LrQsNC30LDQvdC40LUg0LIg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINC/0L7QtNC/0LjRgdC4LCDQuCDQtNGA0YPQs9C40YUg0L/QvtC70Y/RhSBVUkwg0LDQtNGA0LXRgdC+0LIg0LrQvtC80LzQtdGA0YfQtdGB0LrQuNGFINC40L3RgtC10YDQvdC10YIt0L/RgNC+0LXQutGC0L7Qsiwg0YEg0YbQtdC70YzRjiDRgNC10LrQu9Cw0LzRiyDQuCDQv9C+0LLRi9GI0LXQvdC40Y8g0LjQvdC00LXQutGB0LAg0YbQuNGC0LjRgNC+0LLQsNC90LjRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0YHQvtCx0L7QuSDQtNC+0LPQvtCy0L7RgNC10L3QvdC+0YHRgtC4INGBINCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10Lkg0L/QvtGA0YLQsNC70LAuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J7RgdC60L7RgNCx0LvQtdC90LjQtSDQuNCz0YDQvtC60L7QsiDQutC70YPQsdCwLNGC0YDQtdC90LXRgNGB0LrQvtCz0L4g0YjRgtCw0LHQsCzQsCDRgtCw0LrQttC1INC00YDRg9Cz0LjRhSDQutC70YPQsdC+0LIg0Lgg0LjRhSDQuNCz0YDQvtC60L7Qsi7QktGL0YDQsNC20LXQvdC40LUg0YHQstC+0LXQuSDQvdC10L/RgNC40Y/Qt9C90Lgg0LTQvtC/0YPRgdGC0LjQvNC+LNC90L4g0LIg0YDQsNC80LrQsNGFINC00L7Qv9GD0YHRgtC40LzQvtCz0L4gPC9saT5cXHJcXG5cXHJcXG4gICAgICAgIDxsaT7Qn9GD0LHQu9C40YfQvdC+INC/0YDQtdC00YrRj9Cy0LvRj9GC0Ywg0L/RgNC10YLQtdC90LfQuNC4INC4INC+0LHRgdGD0LbQtNCw0YLRjCDQtNC10LnRgdGC0LLQuNGPINC/0LXRgNC10LLQvtC00YfQuNC60L7QsiDQuCDRgNC10LTQsNC60YLQvtGA0L7QsiDRgdCw0LnRgtCwLiDQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0YDQtdGB0YPRgNGB0LAsINC90LXRgdC+0LPQu9Cw0YHQvdGL0LUg0YEg0L/Rg9Cx0LvQuNC60LDRhtC40Y/QvNC4INC/0LXRgNC10LLQvtC00L7QsiDRgdGC0LDRgtC10Lkg0Lgg0LzQsNGC0LXRgNC40LDQu9C+0LIg0LzQvtCz0YPRgiDQstGL0YHQutCw0LfQsNGC0Ywg0YHQstC+0ZEg0L3QtdGB0L7Qs9C70LDRgdC40LUg0LIg0LvQuNGH0L3QvtC8INGB0L7QvtCx0YnQtdC90LjQuCDQuNC70Lgg0LIg0YLQtdC80LUg0L3QsCDRhNC+0YDRg9C80LUg0YHQsNC50YLQsCAtIDxiPtCW0LDQu9C+0LHRizwvYj4uIDwvbGk+XFxyXFxuICAgIDwvb2w+XFxyXFxuICAgIDxwPjxiPklJSS4g0J7QsdGJ0LjQtSDRgNC10LrQvtC80LXQvdC00LDRhtC40Lgg0L4g0YHQvtCy0LXRgtGLLiA8L2I+PC9wPlxcclxcbiAgICA8b2w+XFxyXFxuICAgICAgICA8bGk+0J3QtSDQvtCx0YDQsNGJ0LDQudGC0LUg0LLQvdC40LzQsNC90LjRjyDQvdCwINGF0YPQu9C40LPQsNC90L7Qsi4g0J3QtSDQvtGC0LLQtdGH0LDQudGC0LUg0LjQvCwg0LTQsNC20LUg0LXRgdC70Lgg0JLRiyDRgdGH0LjRgtCw0LXRgtC1LCDRh9GC0L4g0JLQsNGBINC+0YHQutC+0YDQsdC40LvQuCwg0L3QtSDQv9C+0LTQtNCw0LLQsNC50YLQtdGB0Ywg0L3QsCDQv9GA0L7QstC+0LrQsNGG0LjQuC4g0JTQvtGB0YLQsNGC0L7Rh9C90L4g0YHQvtC+0LHRidC40YLRjCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCDQvtCxINC+0YHQutC+0YDQsdC70LXQvdC40Lgg0Lgg0LLQuNC90L7QstC90YvQtSDQsdGD0LTRg9GCINC90LDQutCw0LfQsNC90YsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0JIg0YLQvtC8INGB0LvRg9GH0LDQtSwg0LXRgdC70Lgg0JLRiyDRgdGH0LjRgtCw0LXRgtC1LCDRh9GC0L4g0L3QsNGA0YPRiNC10L3RiyDQn9GA0LDQstC40LvQsCDQpNC+0YDRg9C80LAsINC/0L7RgdGC0LDRgNCw0LnRgtC10YHRjCDRgdGA0LDQt9GDINC20LUg0YHQvtC+0LHRidC40YLRjCDQvtCxINGN0YLQvtC8INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4INCk0L7RgNGD0LzQsC4gPC9saT5cXHJcXG4gICAgICAgIDxsaT7QodGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRgdC+0L7QsdGJ0LXQvdC40Y/RhSDQttCw0YDQs9C+0L0sINGCLtC6LiDQvdC10LrQvtGC0L7RgNGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC80L7Qs9GD0YIg0L3QtSDQv9GA0LDQstC40LvRjNC90L4g0LXQs9C+INGA0LDRgdGC0L7Qu9C60L7QstCw0YLRjC48L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0L7RgdGC0LDRgNCw0LnRgtC10YHRjCDQvdC1INC/0LjRgdCw0YLRjCDQsdC10LfQvtGB0L3QvtCy0LDRgtC10LvRjNC90YvQtSDRg9GC0LLQtdGA0LbQtNC10L3QuNGPLCDQsCDRgtCw0Log0LbQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0YLQuNC/0LAgwqvQstGL0LrQuNC90Ywg0Y3RgtGDINCx0Y/QutGDLCDQv9C+0YHRgtCw0LLRjCDRhdC+0YDQvtGI0YPRjiDQstC10YnRjMK7LiDQldGB0LvQuCDRjdGC0L4g0JLQsNGI0LUg0LvQuNGH0L3QviDQvNC90LXQvdC40LUsINC90LUg0LfQsNCx0YPQtNGM0YLQtSDRgdC+0L7QsdGJ0LjRgtGMINC+0LEg0Y3RgtC+0Lwg0LfQsNGA0LDQvdC10LUg4oCTINC/0YDQvtGB0YLQvtCz0L4gwqvQmNCc0KXQnsK7ICjQvtGCINCw0L3Qs9C7LiDigJxpbWhv4oCdLCDRh9GC0L4g0LIg0L/QtdGA0LXQstC+0LTQtSDQvtC30L3QsNGH0LDQtdGCIMKr0L/QviDQvNC+0LXQvNGDINGB0LrRgNC+0LzQvdC+0LzRgyDQvNC90LXQvdC40Y7Cuykg0LHRg9C00LXRgiDQtNC+0YHRgtCw0YLQvtGH0L3Qvi4g0J/QvtC80L3QuNGC0LUsINGH0YLQviDQv9C+0YHQu9C1INC90LXRgdC60L7Qu9GM0LrQuNGFINC90LXQsNGA0LPRg9C80LXQvdGC0LjRgNC+0LLQsNC90L3Ri9GFINGD0YLQstC10YDQttC00LXQvdC40LksINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9GA0L7RgdGC0L4g0L/QtdGA0LXRgdGC0LDQvdGD0YIg0JLQsNC8INC00L7QstC10YDRj9GC0YwuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0J/RgNC10LbQtNC1INGH0LXQvCDRgdC+0LfQtNCw0LLQsNGC0Ywg0YLQtdC80YMsINGD0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INCS0Ysg0YHQvtC30LTQsNC10YLQtSDQtdGRINCyINC90YPQttC90L7QvCDQoNCw0LfQtNC10LvQtSDQpNC+0YDRg9C80LAuINCf0L7QvNC90LjRgtC1LCDRh9GC0L4g0YLQtdC80YssINC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC1INGC0LXQvNCw0YLQuNC60LUg0KDQsNC30LTQtdC70LAsINCx0YPQtNGD0YIg0LvQuNCx0L4g0YPQtNCw0LvQtdC90YssINC70LjQsdC+INC/0LXRgNC10L3QtdGB0LXQvdGLINCyINC00YDRg9Cz0L7QuSDQoNCw0LfQtNC10Lsg0KTQvtGA0YPQvNCwLiA8L2xpPlxcclxcbiAgICAgICAgPGxpPtCf0YDQvtGH0YLQuNGC0LUg0YLQtdC80YMg0YbQtdC70LjQutC+0LwhINCf0L7RgdGC0Ysg0LIg0YHQtdGA0LXQtNC40L3QtSDRgtC10LzRiyAtIFxcXCLQkCDQviDRh9C10Lwg0Y3RgtC+INCy0YssINCwPyBcXFwiINC40LvQuCBcXFwi0KLQsNC6INGPINC90LUg0L/QvtC90Y/QuyAtINC+0YLQutGD0LTQsCDQutCw0YfQsNGC0Yw/XFxcIiDQt9Cw0L/RgNC10YnQtdC90YsuIDwvbGk+XFxyXFxuICAgICAgICA8bGk+0KHRgtCw0YDQsNC50YLQtdGB0Ywg0L3QtSDQtNC10LvQsNGC0Ywg0LPRgNCw0LzQvNCw0YLQuNGH0LXRgdC60LjRhSDQvtGI0LjQsdC+0Log0LIg0YHQvtC+0LHRidC10L3QuNGP0YUg4oCTINGN0YLQviDRgdC+0LfQtNCw0YHRgiDQvdC10LPQsNGC0LjQstC90L7QtSDQstC/0LXRh9Cw0YLQu9C10L3QuNC1INC+INCy0LDRgS48L2xpPlxcclxcbiAgICA8L29sPlxcclxcbiAgICA8cD48Yj5JVi4g0J7RgtC90L7RiNC10L3QuNGPINC80LXQttC00YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDQuCDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5LjwvYj48L3A+XFxyXFxuICAgIDxvbD5cXHJcXG4gICAgICAgIDxsaT7QkiDRgdCy0L7QuNGFINC00LXQudGB0YLQstC40Y/RhSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDRhNC+0YDRg9C80LAg0YDRg9C60L7QstC+0LTRgdGC0LLRg9C10YLRgdGPINC30LTRgNCw0LLRi9C8INGB0LzRi9GB0LvQvtC8INC4INCy0L3Rg9GC0YDQtdC90L3QuNC80Lgg0L/RgNCw0LLQuNC70LDQvNC4INGD0L/RgNCw0LLQu9C10L3QuNGPINGE0L7RgNGD0LzQvtC8LjwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAg0J7QsdGB0YPQttC00LXQvdC40LUg0LTQtdC50YHRgtCy0LjQuSDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuCAo0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQvtCyINC4INC80L7QtNC10YDQsNGC0L7RgNC+0LIg0YTQvtGA0YPQvNCwKSDQutCw0YLQtdCz0L7RgNC40YfQtdGB0LrQuCDQt9Cw0L/RgNC10YnQsNC10YLRgdGPINCyINC70Y7QsdGL0YUg0YTQvtGA0YPQvNCw0YUg0Lgg0YLQtdC80LDRhSwg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INGB0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INGE0L7RgNGD0LzQsCAtIDxiPtCW0LDQu9C+0LHRizwvYj4uPGJyPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC9vbD5cXHJcXG4gICAgPHA+0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L7RgdGC0LDQstC70Y/QtdGCINC30LAg0YHQvtCx0L7QuSDQv9GA0LDQstC+INC40LfQvNC10L3Rj9GC0Ywg0L/RgNCw0LLQuNC70LAg0LHQtdC3INGD0LLQtdC00L7QvNC70LXQvdC40LXQvCDQvtCxINGN0YLQvtC8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INGE0L7RgNGD0LzQsC4g0JLRgdC1INC40LfQvNC10L3QtdC90LjRjyDQuCDQvdC+0LLQsNGG0LjQuCDQvdCwINGE0L7RgNGD0LzQtSDQv9GA0L7QuNC30LLQvtC00Y/RgtGB0Y8g0YEg0YPRh9C10YLQvtC8INC80L3QtdC90LjQuSDQuCDQuNC90YLQtdGA0LXRgdC+0LIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkuPC9wPlxcclxcbiAgICA8cCBhbGlnbj1cXFwicmlnaHRcXFwiPjxiPtChINGD0LLQsNC20LXQvdC40LXQvCwg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0YHQsNC50YLQsC48L2I+PC9wPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcnVsZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gZnJvbSBcIi4uL2FkbWluL2FkbWluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyaWdodC1zaWRlYmFyXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmlnaHRTaWRlYmFyLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaWdodFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBZG1pblNlcnZpY2UsIHByaXZhdGUgcm9sZXNDaGVja2VkOiBSb2xlc0NoZWNrZWRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFcGxUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUVwbFRhYmxlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiXCIpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2hvbWUvcmlnaHRTaWRlYmFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEh0dHBXcmFwcGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRtaW5TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJhZG1pbi9cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgR2V0QWxsID0gKCk6IE9ic2VydmFibGU8UGFnZWFibGU8TmV3cz4+ID0+IHtcclxuICAgIC8vICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBwdWJsaWMgR2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5ld3M+ID0+IHtcclxuICAgIC8vICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgaWQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIHVwZGF0ZUVwbFRhYmxlID0gKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJ1cGRhdGVUYWJsZS9cIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9hZG1pbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIGNvbnRhaW5lci1mbHVpZFxcXCIgdWktdmlldz1cXFwicmlnaHRDb250YWluZXJcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXN4LTEyXFxcIiAqbmdJZj1cXFwicm9sZXMuaXNBZG1pbkFzc2lzdGFudFxcXCI+PGEgKGNsaWNrKT1cXFwidXBkYXRlRXBsVGFibGUoKVxcXCI+0J7QsdC90L7QstC40YLRjCDRgtCw0LHQu9C40YbRgzwvYT48L3NwYW4+XFxyXFxuICAgIDxlcGwtdGFibGU+PC9lcGwtdGFibGU+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvaG9tZS9yaWdodFNpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcnVtU2VjdGlvbkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcnVtU2VjdGlvblJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImZvcnVtXCIsIGNvbXBvbmVudDogRm9ydW1TZWN0aW9uTGlzdENvbXBvbmVudCB9LCBcclxuICAgLy8geyBwYXRoOiBcImNvbmZpcm1FbWFpbFwiLCBjb21wb25lbnQ6IENvbmZpcm1FbWFpbENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvZm9ydW1TZWN0aW9uL2ZvcnVtU2VjdGlvbi5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vZm9ydW1TZWN0aW9uLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZvcnVtU2VjdGlvbi1saXN0LmNvbXBvbmVudFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9pbmRleC50cyIsImltcG9ydCB7IEZvcnVtU3Vic2VjdGlvbiB9IGZyb20gXCIuLi9mb3J1bVN1YnNlY3Rpb24vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3J1bVNlY3Rpb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN1YnNlY3Rpb25zOiBGb3J1bVN1YnNlY3Rpb25bXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24ubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vYXBwLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgRm9ydW1TZWN0aW9uIH0gZnJvbSBcIi4vZm9ydW1TZWN0aW9uLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3J1bVNlY3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJmb3J1bVNlY3Rpb24vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsID0gKCk6IE9ic2VydmFibGU8Rm9ydW1TZWN0aW9uW10+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICB9O1xyXG5cclxuICAgIC8vIHB1YmxpYyBHZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TmV3cz4gPT4ge1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIC8vIH07XHJcblxyXG4gIC8vICBjcmVhdGUgPSAoaXRlbTogRm9ydW1TZWN0aW9uKTogT2JzZXJ2YWJsZTxTaWdudXA+ID0+IHtcclxuICAvLyAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCArIFwicmVnaXN0ZXIvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gLy8gICB9O1xyXG5cclxuICAgIC8vIGNvbmZpcm1FbWFpbCA9ICh1c2VySWQ6IG51bWJlciwgY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIGBjb25maXJtRW1haWw/dXNlcklkPSR7dXNlcklkfSZjb2RlPSR7Y29kZX1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24uc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ydW1TZWN0aW9uU2VydmljZSB9IGZyb20gXCIuL2ZvcnVtU2VjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcnVtU2VjdGlvbiB9IGZyb20gXCIuL2ZvcnVtU2VjdGlvbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImZvcnVtU2VjdGlvbi1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3J1bVNlY3Rpb25MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpdGVtczogRm9ydW1TZWN0aW9uW107XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogRm9ydW1TZWN0aW9uU2VydmljZSwgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuaXRlbXMgPSBkYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiXCIpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL2ZvcnVtU2VjdGlvbi9mb3J1bVNlY3Rpb24tbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiAqbmdGb3I9XFxcImxldCBzZWN0aW9uIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRhbmdlclxcXCIgKm5nSWY9XFxcInNlY3Rpb24uc3Vic2VjdGlvbnMubGVuZ3RoID4gMCB8fCByb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwic2VjdGlvbi5uYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJyb2xlcy5pc0FkbWluQXNzaXN0YW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgdWktc3JlZj1cXFwic3Vic2VjdGlvbkVkaXQoe3NlY3Rpb25JZDogc2VjdGlvbi5pZH0pXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC/0L7QtNGB0LXQutGG0LjRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIiBbaGlkZGVuXT1cXFwic2VjdGlvbi5zdWJzZWN0aW9ucy5sZW5ndGggIT0gMFxcXCIgbmctY2xpY2s9XFxcInZtLnJlbW92ZVNlY3Rpb24oJGluZGV4KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj48LyEtLWRpdj4tLT5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiICpuZ0Zvcj1cXFwibGV0IHN1YnNlY3Rpb24gb2Ygc2VjdGlvbi5zdWJzZWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIGxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cXFwic3Vic2VjdGlvbih7aWQ6IHN1YnNlY3Rpb24uaWR9KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwic3Vic2VjdGlvbi5uYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNtYWxsXFxcIiBbdGV4dENvbnRlbnRdPVxcXCJzdWJzZWN0aW9uLmRlc2NyaXB0aW9uXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGEgbmctY2xpY2s9XFxcInZtLmFkZFNlY3Rpb24oKVxcXCI+0JTQvtCx0LDQstC40YLRjCDRgdC10LrRhtC40Y48L2E+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L25nLXRlbXBsYXRlXFxcIiBpZD1cXFwiYWRkU2VjdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkBDb21tb25NZXNzYWdlcy5BZGRTZWN0aW9uPC9oMz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgbmFtZT1cXFwiYWRkU2VjdGlvblxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld1NlY3Rpb25OYW1lXFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgY29udHJvbC1sYWJlbFxcXCI+QENvbG9uc01lc3NhZ2VzLlNlY3Rpb25OYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuZXdTZWN0aW9uTmFtZVxcXCIgbmctbW9kZWw9XFxcInZtLnNlY3Rpb25OYW1lXFxcIiB2YWxpZGF0aW9uPVxcXCJyZXF1aXJlZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWRkU2VjdGlvbi4kaW52YWxpZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvbmctdGVtcGxhdGVcXFwiIGlkPVxcXCJtb2RhbERlbGV0ZUNvbmZpcm1hdGlvbi5odG1sXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkBDb21tb25NZXNzYWdlcy5EZWxldGVDb25maXJtYXRpb248L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICBAQ29tbW9uTWVzc2FnZXMuRGVsZXRlP1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0ub2soKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWwoKVxcXCI+QENvbW1vbk1lc3NhZ2VzLkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9mb3J1bVNlY3Rpb24vZm9ydW1TZWN0aW9uLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFdpc2hMaXN0Q29tcG9uZW50LCBXaXNoRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgd2lzaFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIndpc2hcIiwgY29tcG9uZW50OiBXaXNoTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIndpc2gvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBXaXNoRWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnJvdXRpbmcudHMiLCJleHBvcnQgKiBmcm9tIFwiLi93aXNoLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dpc2hUeXBlLm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3dpc2gtbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vd2lzaC1lZGl0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93aXNoLnNlcnZpY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL2luZGV4LnRzIiwiZXhwb3J0IGNsYXNzIFdpc2gge1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gubW9kZWwudHMiLCJleHBvcnQgY2xhc3MgV2lzaFR5cGUge1xyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2hUeXBlLm1vZGVsLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdpc2ggfSBmcm9tIFwiLi93aXNoLm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpc2hTZXJ2aWNlIH0gZnJvbSBcIi4vd2lzaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwid2lzaC1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vd2lzaC1saXN0LmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgaXRlbXM6IFdpc2hbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFdpc2hTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gK3BhcmFtc1sncGFnZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9ICtwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAvLyAgICB0aGlzLnVzZXJOYW1lID0gcGFyYW1zWyd1c2VyTmFtZSddO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxXaXNoPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwYWdlYWJsZS5saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VhYmxlLnBhZ2VObztcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhZ2VhYmxlLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHBhZ2VhYmxlLnRvdGFsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vbGV0IGZpbHRlcnMgPSBuZXcgTWF0ZXJpYWxGaWx0ZXJzKCk7XHJcbiAgICAgICAgLy9maWx0ZXJzLmNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgLy9maWx0ZXJzLm1hdGVyaWFsVHlwZSA9IFwiTmV3c1wiO1xyXG4gICAgICAgIC8vZmlsdGVycy51c2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgLy9maWx0ZXJzLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAuR2V0QWxsKCkvL2J1Z1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBsb2FkIGxpc3Qgd2lzaFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZUNsYXNzKGkpIHtcclxuICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhbmVsLXdhcm5pbmdcIjtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicGFuZWwtaW5mb1wiO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwYW5lbC1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2FwcC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcbmltcG9ydCB7IFdpc2gsIFdpc2hUeXBlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXNoU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBXcmFwcGVyLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGNvbmZpZ3VyYXRpb24uU2VydmVyV2l0aEFwaVVybCArIFwid2lzaC9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QWxsID0gKCk6IE9ic2VydmFibGU8UGFnZWFibGU8V2lzaD4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEdldFNpbmdsZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxXaXNoPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIENyZWF0ZSA9IChpdGVtOiBXaXNoKTogT2JzZXJ2YWJsZTxXaXNoPiA9PiB7XHJcbiAgICAgICAgLy8gdmFyIHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoeyBJdGVtTmFtZTogaXRlbSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlID0gKGlkOiBudW1iZXIsIGl0ZW1Ub1VwZGF0ZTogV2lzaCk6IE9ic2VydmFibGU8V2lzaD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIERlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBHZXRUeXBlcyA9ICgpOiBPYnNlcnZhYmxlPFdpc2hUeXBlW10+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwidHlwZXMvXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWlubGluZSBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS50eXBlSWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctb3B0aW9ucz1cXFwidHlwZS5pZCBhcyB0eXBlLm5hbWUgZm9yIHR5cGUgaW4gdm0udHlwZXNcXFwiIG5nLWNoYW5nZT1cXFwidm0uY2hhbmdlVHlwZUlkKClcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPi0tPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvd2lzaCcsIDAsICdlZGl0J11cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCB3aXNoIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgW25nQ2xhc3NdPVxcXCJnZXRUeXBlQ2xhc3Mod2lzaC50eXBlKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy93aXNoJywgd2lzaC5pZCwgJ2VkaXQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cXFwid2lzaC50aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbC14cy0xIGNvbC1zbS0xIHB1bGwtcmlnaHRcXFwiIHNlY3VyZWQ9XFxcIkFkbWluRnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XFxcInZtLmRlbGV0ZShpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwid2lzaC5tZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcIndpc2gudHlwZU5hbWVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICA8IS0tdWliLXBhZ2luYXRpb24gbmctc2hvdz1cXFwidm0udG90YWxJdGVtcyA+IHZtLml0ZW1QZXJQYWdlXFxcIiB0b3RhbC1pdGVtcz1cXFwidm0udG90YWxJdGVtc1xcXCIgbmctbW9kZWw9XFxcInZtLnBhZ2VcXFwiIG5nLWNoYW5nZT1cXFwidm0uZ29Ub1BhZ2UoKVxcXCI+PC8hLS11aWItcGFnaW5hdGlvbi0tPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL3dpc2gvd2lzaC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBXaXNoIH0gZnJvbSBcIi4vd2lzaC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaXNoVHlwZSB9IGZyb20gXCIuL3dpc2hUeXBlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpc2hTZXJ2aWNlIH0gZnJvbSBcIi4vd2lzaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIndpc2gtZWRpdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3dpc2gtZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lzaEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZWRpdEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIHR5cGVzOiBXaXNoVHlwZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogV2lzaFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAndGl0bGUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzAwKVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJ3R5cGUnOiBbXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5HZXRTaW5nbGUodGhpcy5pZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgZ2V0ICBuZXdzXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBXaXNoKCk7XHJcbiAgICAgICAgbW9kZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIG1vZGVsLm1lc3NhZ2UgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50aXRsZSA9IHRoaXMuZWRpdEZvcm0uY29udHJvbHNbXCJ0aXRsZVwiXS52YWx1ZTtcclxuICAgICAgICBtb2RlbC50eXBlID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInR5cGVcIl0udmFsdWU7IFxyXG5cclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLlVwZGF0ZSh0aGlzLmlkLCBtb2RlbCkuc3Vic2NyaWJlKGRhdGEgPT4gcmVzID0gZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5DcmVhdGUobW9kZWwpLnN1YnNjcmliZShkYXRhID0+IHJlcyA9IGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3dpc2hcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVR5cGVzKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgICAuR2V0VHlwZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy50eXBlcyA9IGRhdGEpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvd2lzaC93aXNoLWVkaXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY29sLW1kLTEyXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuYW1lPVxcXCJlZGl0V2lzaFxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCX0LDQs9C+0LvQvtCy0L7QujwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3RpdGxlJ11cXFwiLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTIgY29sLXNtLTJcXFwiPtCi0LjQvzo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibmV3c0NhdGVnb3J5SWRcXFwiIFtmb3JtQ29udHJvbF09XFxcImVkaXRGb3JtLmNvbnRyb2xzWyd0eXBlJ11cXFwiPjwvc2VsZWN0Pi0tPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgW2Zvcm1Db250cm9sXT1cXFwiZWRpdEZvcm0uY29udHJvbHNbJ3R5cGUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gW3ZhbHVlXT1cXFwidHlwZS5pZFxcXCIgKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiB0eXBlc1xcXCIgW3RleHRDb250ZW50XT1cXFwidHlwZS5uYW1lXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFlZGl0Rm9ybS52YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj7QodC+0LfQtNCw0YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC93aXNoL3dpc2gtZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRlcmlhbENvbW1lbnRSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJtYXRlcmlhbENvbW1lbnRcIiwgY29tcG9uZW50OiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50L2xpc3RcIiwgY29tcG9uZW50OiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50L2xpc3QvOnBhZ2VcIiwgY29tcG9uZW50OiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWF0ZXJpYWxDb21tZW50L2xpc3QvOnBhZ2UvOmNhdGVnb3J5SWRcIiwgY29tcG9uZW50OiBNYXRlcmlhbENvbW1lbnRMaXN0Q29tcG9uZW50IH0sXHJcbiAgIC8vIHsgcGF0aDogXCJuZXdzLzppZFwiLCBjb21wb25lbnQ6IE5ld3NEZXRhaWxDb21wb25lbnQgfSxcclxuICAvLyAgeyBwYXRoOiBcIm5ld3MvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBOZXdzRWRpdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQuc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21tZW50IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBhZGRpdGlvblRpbWU6IERhdGU7XHJcbiAgICBhdXRob3JVc2VyTmFtZTogc3RyaW5nO1xyXG4gICAgYXV0aG9ySWQ6IG51bWJlcjtcclxuICAgIHBob3RvOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBhbnN3ZXI6IHN0cmluZztcclxuICAgIG1hdGVyaWFsSWQ6IG51bWJlcjtcclxuICAgIGNoaWxkcmVuOiBNYXRlcmlhbENvbW1lbnRbXTtcclxuICAgIGlzVmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgICBwYXJlbnRJZDogbnVtYmVyO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC5tb2RlbC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50IH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm9sZXNDaGVja2VkU2VydmljZSwgSVJvbGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWF0ZXJpYWxDb21tZW50LWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tbWVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW1zOiBNYXRlcmlhbENvbW1lbnRbXTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBpdGVtc1BlclBhZ2UgPSAxNTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIHJvbGVzOiBJUm9sZXM7XHJcbiAgICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGVyaWFsQ29tbWVudFNlcnZpY2U6IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZSkge1xyXG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gZXZlbnQucGFnZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCBuZXdVcmwgPSBgbWF0ZXJpYWxDb21tZW50L2xpc3QvJHt0aGlzLnBhZ2V9YDtcclxuICAgICAvLyAgIGlmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgIC8vICAgICAgICBuZXdVcmwgPSBgJHtuZXdVcmx9LyR7dGhpcy5jYXRlZ29yeUlkfWA7XHJcbiAgICAvLyAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUobmV3VXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGwodGhpcy5wYWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZVBhZ2VhYmxlKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwic3VjY2VzcyBsb2FkIGNvbW1lbnQgbGl0c1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxNYXRlcmlhbENvbW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnkoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC52ZXJpZnkodGhpcy5pdGVtc1tpbmRleF0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiByZXN1bHQgPSBkYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5pc1ZlcmlmaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtSW5kZXhdLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiByZXN1bHQgPSByZXMsXHJcbiAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIpO1xyXG4gICAgLy8gICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW1zW2luZGV4XS5pZCkuc3Vic2NyaWJlKGRhdGEgPT4gZGF0YSxcclxuICAgIC8vICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAvLyAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzIHJlbW92ZSBjYXRlZ29yeXVcIikpO1xyXG4gICAgLy8gICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgLy8gfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudCB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlYWJsZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFnZWFibGUubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cFdyYXBwZXIgfSBmcm9tIFwiLi4vc2hhcmVkL2h0dHBXcmFwcGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRlcmlhbENvbW1lbnQvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsID0gKHBhZ2U6IG51bWJlcik6IE9ic2VydmFibGU8UGFnZWFibGU8TWF0ZXJpYWxDb21tZW50Pj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWN0aW9uVXJsICsgXCJsaXN0L1wiICsgcGFnZSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0QWxsQnlNYXRlcmlhbCA9IChwYWdlOiBudW1iZXIsIGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPE1hdGVyaWFsQ29tbWVudD4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibWF0ZXJpYWwvXCIgKyBpZCArIFwiL2xpc3QvXCIgKyBwYWdlKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRTaW5nbGUgPSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TWF0ZXJpYWxDb21tZW50PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IE1hdGVyaWFsQ29tbWVudCk6IE9ic2VydmFibGU8TWF0ZXJpYWxDb21tZW50PiA9PiB7ICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpb25VcmwgKyBcIk5ld3MvXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgPSAoaWQ6IG51bWJlciwgaXRlbVRvVXBkYXRlOiBNYXRlcmlhbENvbW1lbnQpOiBPYnNlcnZhYmxlPE1hdGVyaWFsQ29tbWVudD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFjdGlvblVybCArIGlkKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgdmVyaWZ5ID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwidmVyaWZ5L1wiICsgaWQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8IS0tZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0udHlwZUlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW9wdGlvbnM9XFxcInR5cGUuaWQgYXMgdHlwZS5uYW1lIGZvciB0eXBlIGluIHZtLnR5cGVzXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmNoYW5nZVR5cGVJZCgpXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5maWx0ZXJUZXh0XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDEwMDB9XFxcIiBuZy1jaGFuZ2U9XFxcInZtLmZpbHRlckJ5VGV4dCgpXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQuiDQsiDRgtC10LrRgdGC0LUg0L/QvtC20LXQu9Cw0L3QuNC5XFxcIiAvPiA8IS0tdG9kbyBtYWdpYyBudW1iZXItPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgdWktc3JlZj1cXFwid2lzaEVkaXQoKVxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdi0tPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AyMFxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIG5nLWNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgY29tbWVudC5hdXRob3JJZF1cXFwiPjxzcGFuIFt0ZXh0Q29udGVudF09XFxcImNvbW1lbnQuYXV0aG9yVXNlck5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCIgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbaGlkZGVuXT1cXFwiY29tbWVudC5pc1ZlcmlmaWVkXFxcIiAoY2xpY2spPVxcXCJ2ZXJpZnkoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dEZWxldGVNb2RhbChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW3RleHRDb250ZW50XT1cXFwiY29tbWVudC5tZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFt0ZXh0Q29udGVudF09XFxcImNvbW1lbnQuYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgIDxwYWdpbmF0aW9uICpuZ0lmPVxcXCJpdGVtc1xcXCIgW3RvdGFsSXRlbXNdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW21heFNpemVdPVxcXCI3XFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0VGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0VGV4dD1cXFwiMVxcXCIgbGFzdFRleHQ9XFxcInRvdGFsSXRlbXMvaXRlbXNQZXJQYWdlXFxcIj48L3BhZ2luYXRpb24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0KPQtNCw0LvQuNGC0Yw/PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImRlbGV0ZSgpXFxcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZWFibGUgfSBmcm9tIFwiLi4vc2hhcmVkL3BhZ2VhYmxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tbWVudCB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vbWF0ZXJpYWxDb21tZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNvbW1lbnRzXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0ZXJpYWxDb21tZW50LXNlY3Rpb24uY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tbWVudFNlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW1zOiBNYXRlcmlhbENvbW1lbnRbXSA9IFtdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgcm9sZXM6IElSb2xlcztcclxuICAgIGNvbW1lbnRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICAvL3NlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBtYXRlcmlhbElkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBjYW5Db21tZW50YXJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGVyaWFsQ29tbWVudFNlcnZpY2U6IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvbGVzQ2hlY2tlZDogUm9sZXNDaGVja2VkU2VydmljZVxyXG4gICAgICAgICwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgICBcclxuICAgIH0gICBcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlc0NoZWNrZWQuY2hlY2tlZFJvbGVzOyAgICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgXHJcblxyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFsgLy90b2RvIGNvbXBvc2VBU3luYz8/XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXVxyXG4gICAgICAgIH0pOyAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGV2ZW50LnBhZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgLy8gIGxldCBuZXdVcmwgPSBgbWF0ZXJpYWxDb21tZW50L2xpc3QvJHt0aGlzLnBhZ2V9YDtcclxuICAgICAgICAvLyAgIGlmICh0aGlzLmNhdGVnb3J5SWQpIHtcclxuICAgICAgICAvLyAgICAgICAgbmV3VXJsID0gYCR7bmV3VXJsfS8ke3RoaXMuY2F0ZWdvcnlJZH1gO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAvLyAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKG5ld1VybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsQnlNYXRlcmlhbCh0aGlzLnBhZ2UsIHRoaXMubWF0ZXJpYWxJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucGFyc2VQYWdlYWJsZShkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxNYXRlcmlhbENvbW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHBhZ2VhYmxlLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZWFibGUucGFnZU5vO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFnZWFibGUuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcGFnZWFibGUudG90YWxJdGVtcztcclxuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgTWF0ZXJpYWxDb21tZW50KCk7XHJcbiAgICAgICAgY29tbWVudC5tZXNzYWdlID0gdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0udmFsdWU7XHJcbiAgICAgICAgY29tbWVudC5tYXRlcmlhbElkID0gdGhpcy5tYXRlcmlhbElkO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS5jcmVhdGUoY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnBhdGNoVmFsdWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge31cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9oaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAvLyAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gICAgdGhpcy5kZWxldGVNb2RhbC5oaWRlKCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL3ZlcmlmeShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyAgICBsZXQgcmVzdWx0O1xyXG4gICAgLy8gICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlXHJcbiAgICAvLyAgICAgICAgLnZlcmlmeSh0aGlzLml0ZW1zW2luZGV4XS5pZClcclxuICAgIC8vICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gcmVzdWx0ID0gZGF0YSxcclxuICAgIC8vICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAvLyAgICAgICAgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5pc1ZlcmlmaWVkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICApO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9zaG93RGVsZXRlTW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gICAgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgLy8gICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL2RlbGV0ZSgpIHtcclxuICAgIC8vICAgIGxldCByZXN1bHQ7XHJcbiAgICAvLyAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuZGVsZXRlKHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleF0uaWQpXHJcbiAgICAvLyAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gcmVzdWx0ID0gcmVzLFxyXG4gICAgLy8gICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAvLyAgICAgICAgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgKTtcclxuICAgIC8vfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj7QmtC+0LzQvNC10L3RgtCw0YDQuNC4OiA8c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtcy5sZW5ndGhcXFwiPjwvc3Bhbj48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJcXFwiICpuZ0Zvcj1cXFwibGV0IGNvbW1lbnQgb2YgaXRlbXNcXFwiPlxcclxcbiAgICA8bWF0ZXJpYWxDb21tZW50LWRldGFpbCBbaXRlbV09XFxcImNvbW1lbnRcXFwiIFtkZWVwXT1cXFwiMFxcXCIgW21hdGVyaWFsSWRdPVxcXCJtYXRlcmlhbElkXFxcIiBbY2FuQ29tbWVudGFyeV09XFxcImNhbkNvbW1lbnRhcnlcXFwiPjwvbWF0ZXJpYWxDb21tZW50LWRldGFpbD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiY29tbWVudEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGNvbW1lbnRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgKm5nSWY9XFxcImNhbkNvbW1lbnRhcnkgJiYgcm9sZXMuaXNMb2dpbmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIG1hcmstaXQtdXAgY2xhc3M9XFxcImNvbC1tZC1vZmZzZXQtMiBjb2wtbWQtOFxcXCIgcm93cz1cXFwiNlxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgY2VudGVyLWJsb2NrXFxcIiBbZGlzYWJsZWRdPVxcXCIhY29tbWVudEZvcm0udmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcIml0ZW1zICYmIHRvdGFsSXRlbXMgPiBpdGVtc1BlclBhZ2VcXFwiIFt0b3RhbEl0ZW1zXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgWyhuZ01vZGVsKV09XFxcInBhZ2VcXFwiIFttYXhTaXplXT1cXFwiN1xcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dFRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdFRleHQ9XFxcIjFcXFwiIGxhc3RUZXh0PVxcXCJ0b3RhbEl0ZW1zL2l0ZW1zUGVyUGFnZVxcXCI+PC9wYWdpbmF0aW9uPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGVyaWFsQ29tbWVudC9tYXRlcmlhbENvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbW1lbnQgfSBmcm9tIFwiLi9tYXRlcmlhbENvbW1lbnQubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tZW50U2VydmljZSB9IGZyb20gXCIuL21hdGVyaWFsQ29tbWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvbGVzQ2hlY2tlZFNlcnZpY2UsIElSb2xlcyB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1hdGVyaWFsQ29tbWVudC1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9tYXRlcmlhbENvbW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21tZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBpdGVtOiBNYXRlcmlhbENvbW1lbnQ7XHJcbiAgICBASW5wdXQoKSBkZWVwOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBjYW5Db21tZW50YXJ5OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgbWF0ZXJpYWxJZDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcGFyZW50OiBNYXRlcmlhbENvbW1lbnQ7XHJcblxyXG4gICAgY29tbWVudEZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgb2xkQ29weSA6IE1hdGVyaWFsQ29tbWVudDtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiYWRkQ29tbWVudE1vZGFsXCIpIGFkZENvbW1lbnRNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKFwiZWRpdENvbW1lbnRNb2RhbFwiKSBlZGl0Q29tbWVudE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJkZWxldGVNb2RhbFwiKSBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgIC8vIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgIC8vIGl0ZW1zUGVyUGFnZSA9IDE1O1xyXG4gICAvLyB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICByb2xlczogSVJvbGVzO1xyXG4gIC8vICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyAgQFZpZXdDaGlsZChcImRlbGV0ZU1vZGFsXCIpIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdGVyaWFsQ29tbWVudFNlcnZpY2U6IE1hdGVyaWFsQ29tbWVudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlc0NoZWNrZWQ6IFJvbGVzQ2hlY2tlZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVzQ2hlY2tlZC5jaGVja2VkUm9sZXM7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbWVzc2FnZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ2Fuc3dlcic6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBZGRDb21tZW50TW9kYWwoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWVudE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9kYWwoKTogdm9pZCB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGRDb21tZW50TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZUVkaXRNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVNb2RhbChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVkaXRNb2RhbCgpIHsgIFxyXG4gICAgICAgIHRoaXMuZWRpdENvbW1lbnRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhbkNvbnRyb2xzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29tbWVudCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLmdldENvbW1lbnQoKTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tbWVudFNlcnZpY2UuY3JlYXRlKGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uY2hpbGRyZW4ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5Db250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21tZW50TW9kYWwuaGlkZSgpOyAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbW1lbnRTZXJ2aWNlLmRlbGV0ZSh0aGlzLml0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHJlc3VsdCA9IHJlcyxcclxuICAgICAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucGFyZW50SWQgPSB0aGlzLnBhcmVudC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnBhcmVudElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1JbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFZGl0TW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0Q29tbWVudE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdGhpcy5nZXRDb21tZW50KCk7XHJcbiAgICAgICAgY29tbWVudC5hbnN3ZXIgPSB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wiYW5zd2VyXCJdLnZhbHVlO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21tZW50U2VydmljZS51cGRhdGUodGhpcy5pdGVtLmlkLCBjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gY29tbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUVkaXRNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29tbWVudCgpOiBNYXRlcmlhbENvbW1lbnQge1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gdGhpcy5pdGVtO1xyXG4gICAgICAgIGNvbW1lbnQubWVzc2FnZSA9IHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJtZXNzYWdlXCJdLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjb21tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYW5Db250cm9scygpOiB2b2lkIHsgICAgXHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcIm1lc3NhZ2VcIl0ucGF0Y2hWYWx1ZShcIlwiKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLmNvbnRyb2xzW1wibWVzc2FnZVwiXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5jb250cm9sc1tcImFuc3dlclwiXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0uY29udHJvbHNbXCJhbnN3ZXJcIl0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0ZXJpYWxDb21tZW50L21hdGVyaWFsQ29tbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC14cy1vZmZzZXQte3tkZWVwfX0gY29sLXNtLW9mZnNldC17e2RlZXB9fSBjb21tZW50IGNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy91c2VyJywgaXRlbS5hdXRob3JJZF1cXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYXV0aG9yVXNlck5hbWVcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic21hbGxcXFwiIFt0ZXh0Q29udGVudF09XFxcIml0ZW0uYWRkaXRpb25UaW1lIHwgZGF0ZTonbWVkaXVtJ1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMyBjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yIHx8IHJvbGVzLmlzU2VsZihpdGVtLmF1dGhvcklkKVxcXCIgKGNsaWNrKT1cXFwic2hvd0VkaXRNb2RhbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPiA8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvbGVzLmlzTW9kZXJhdG9yXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPiA8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiYXZhdGFyLW1lZGl1bVxcXCIgc3JjPVxcXCJ7e2l0ZW0ucGhvdG99fVxcXCIgYWx0PVxcXCJ7e2l0ZW0uYXV0aG9yVXNlck5hbWV9fVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8cCBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm1lc3NhZ2VcXFwiPjwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiaXRlbS5hbnN3ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTMgY29sLXNtLTNcXFwiPtCe0YLQstC10YI6PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOSBjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgW3RleHRDb250ZW50XT1cXFwiaXRlbS5hbnN3ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMlxcXCIgKm5nSWY9XFxcIiFyb2xlcy5pc1NlbGYoaXRlbS5hdXRob3JJZCkgJiYgY2FuQ29tbWVudGFyeVxcXCI+XFxyXFxuICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93QWRkQ29tbWVudE1vZGFsKClcXFwiPtCe0YLQstC10YLQuNGC0Yw8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlblxcXCI+XFxyXFxuICAgIDxtYXRlcmlhbENvbW1lbnQtZGV0YWlsIFtpdGVtXT1cXFwiY2hpbGRcXFwiIFtkZWVwXT1cXFwiZGVlcCA+IDYgPyA3IDogZGVlcCsxXFxcIiBbbWF0ZXJpYWxJZF09XFxcIm1hdGVyaWFsSWRcXFwiIFtjYW5Db21tZW50YXJ5XT1cXFwiY2FuQ29tbWVudGFyeVxcXCIgW3BhcmVudF09XFxcIml0ZW1cXFwiPjwvbWF0ZXJpYWxDb21tZW50LWRldGFpbD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNhZGRDb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBbY29uZmlnXT1cXFwie2JhY2tkcm9wOiAnc3RhdGljJ31cXFwiXFxyXFxuICAgICB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImhpZGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+0JTQvtCx0LDQstC40YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhZGRDb21tZW50KClcXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBic01vZGFsICNlZGl0Q29tbWVudE1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40Lk8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFtmb3JtQ29udHJvbF09XFxcImNvbW1lbnRGb3JtLmNvbnRyb2xzWydtZXNzYWdlJ11cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJyb2xlcy5pc0VkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2Zvcm1Db250cm9sXT1cXFwiY29tbWVudEZvcm0uY29udHJvbHNbJ2Fuc3dlciddXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj4gICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj7QntGC0LzQtdC90LA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImVkaXQoKVxcXCI+0J7QsdC90L7QstC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIlxcclxcbiAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJoaWRlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPtCj0LTQsNC70LjRgtGMPzwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiaGlkZU1vZGFsKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoKVxcXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRlcmlhbENvbW1lbnQvbWF0ZXJpYWxDb21tZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWF0Y2hMaXN0Q29tcG9uZW50LCBNYXRjaEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwibWF0Y2gvOmlkL2VkaXRcIiwgY29tcG9uZW50OiBNYXRjaEVkaXRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtYXRjaFwiLCBjb21wb25lbnQ6IE1hdGNoTGlzdENvbXBvbmVudCB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gXCIuL21hdGNoLnNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0Y2gtbGlzdC5jb21wb25lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWF0Y2gtZWRpdC5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9pbmRleC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9hcHAuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSBcIi4vbWF0Y2gubW9kZWxcIjtcclxuaW1wb3J0IHsgTWF0Y2hUeXBlIH0gZnJvbSBcIi4vbWF0Y2hUeXBlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwV3JhcHBlciB9IGZyb20gXCIuLi9zaGFyZWQvaHR0cFdyYXBwZXJcIjsgICAgIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGlvblVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFdyYXBwZXIsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gY29uZmlndXJhdGlvbi5TZXJ2ZXJXaXRoQXBpVXJsICsgXCJtYXRjaC9cIjtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldEFsbCA9IChmaWx0ZXJzOiBNYXRlcmlhbEZpbHRlcnMpOiBPYnNlcnZhYmxlPFBhZ2VhYmxlPE5ld3M+PiA9PiB7XHJcbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFjdGlvblVybCArIFwibGlzdC9cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJzKSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvL307XHJcblxyXG4gICAgZ2V0U2luZ2xlID0gKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE1hdGNoPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlID0gKGl0ZW06IE1hdGNoKTogT2JzZXJ2YWJsZTxNYXRjaD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGlvblVybCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZSA9IChpZDogbnVtYmVyLCBpdGVtVG9VcGRhdGU6IE1hdGNoKTogT2JzZXJ2YWJsZTxNYXRjaD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmFjdGlvblVybCArIGlkLCBKU09OLnN0cmluZ2lmeShpdGVtVG9VcGRhdGUpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG4gICAgIGdldFR5cGVzID0gKCk6IE9ic2VydmFibGU8TWF0Y2hUeXBlPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3Rpb25VcmwgKyBcIi9nZXRUeXBlc1wiKVxyXG4gICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZSA9IChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hY3Rpb25VcmwgKyBpZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2guc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tIFwiLi9tYXRjaC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tIFwiLi9tYXRjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VhYmxlIH0gZnJvbSBcIi4uL3NoYXJlZC9wYWdlYWJsZS5tb2RlbFwiO1xyXG4vL2ltcG9ydCB7IFVzZXJGaWx0ZXJzIH0gZnJvbSBcIi4vdXNlckZpbHRlcnMubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWF0Y2gtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL21hdGNoLWxpc3QuY29tcG9uZW50Lmh0bWxcIilcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRjaExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGl0ZW1zOiBNYXRjaFtdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTU7XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBjYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcInBhZ2VcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICtwYXJhbXNbXCJwYWdlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICB0aGlzLmNhdGVnb3J5SWQgPSArcGFyYW1zWydjYXRlZ29yeUlkJ107XHJcbiAgICAgICAgICAgIC8vICB0aGlzLnVzZXJOYW1lID0gcGFyYW1zWyd1c2VyTmFtZSddO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVBhZ2VhYmxlKHBhZ2VhYmxlOiBQYWdlYWJsZTxNYXRjaD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcGFnZWFibGUubGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlYWJsZS5wYWdlTm87XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYWdlYWJsZS5pdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBwYWdlYWJsZS50b3RhbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvL2xldCBmaWx0ZXJzID0gbmV3IFVzZXJGaWx0ZXJzKCk7XHJcbiAgICAgICAgLy8vLyAgZmlsdGVycy5jYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yeUlkO1xyXG4gICAgICAgIC8vLy8gIGZpbHRlcnMubWF0ZXJpYWxUeXBlID0gXCJOZXdzXCI7XHJcbiAgICAgICAgLy9maWx0ZXJzLnVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICAvL2ZpbHRlcnMucGFnZSA9IHRoaXMucGFnZTtcclxuXHJcbiAgICAgICAgLy90aGlzLnVzZXJTZXJ2aWNlXHJcbiAgICAgICAgLy8gICAgLkdldEFsbChmaWx0ZXJzKVxyXG4gICAgICAgIC8vICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlUGFnZWFibGUoZGF0YSksXHJcbiAgICAgICAgLy8gICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgIC8vICAgICgpID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taW5saW5lIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLnR5cGVJZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgbmctY2hhbmdlPVxcXCJ2bS5jaGFuZ2VUeXBlSWQoKVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZmlsdGVyVGV4dFxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAxMDAwfVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5maWx0ZXJCeVRleHQoKVxcXCIgcGxhY2Vob2xkZXI9XFxcItCf0L7QuNGB0Log0LIg0YLQtdC60YHRgtC1INC/0L7QttC10LvQsNC90LjQuVxcXCIgLz4gPCEtdG9kbyBtYWdpYyBudW1iZXItPlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnL21hdGNoJywgMCwgJ2VkaXQnIF1cXFwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcDIwXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XFxcImNsdWJFZGl0KHtpZDogaXRlbS5pZH0pXFxcIj48c3BhbiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29sLXhzLTEgY29sLXNtLTEgcHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XFxcInZtLmRlbGV0ZSgkaW5kZXgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBbdGV4dENvbnRlbnRdPVxcXCJpdGVtLmVuZ2xpc2hOYW1lXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tpdGVtLmxvZ299fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgPCEtLTx1aWItcGFnaW5hdGlvbiBuZy1zaG93PVxcXCJ2bS50b3RhbEl0ZW1zID4gdm0uaXRlbVBlclBhZ2VcXFwiIHRvdGFsLWl0ZW1zPVxcXCJ2bS50b3RhbEl0ZW1zXFxcIiBuZy1tb2RlbD1cXFwidm0ucGFnZVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5nb1RvUGFnZSgpXFxcIj48L3VpYi1wYWdpbmF0aW9uPi0tPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IENsdWJTZXJ2aWNlIH0gZnJvbSBcIi4uL2NsdWIvaW5kZXhcIjtcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tIFwiLi9tYXRjaC5tb2RlbFwiOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcIi4uL2NsdWIvY2x1Yi5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYXRjaC1lZGl0XCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbWF0Y2gtZWRpdC5jb21wb25lbnQuaHRtbFwiKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGNoRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGVkaXRGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBjbHViczogQ2x1YltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBjbHViU2VydmljZTogQ2x1YlNlcnZpY2UsICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hTZXJ2aWNlLmdldFNpbmdsZShpZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wYXJzZShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2x1YlNlcnZpY2UuZ2V0QnlOYW1lKFwiXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnBhcnNlQ2x1YnMoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4geyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgbmV3c0l0ZW0gPSB0aGlzLnBhcnNlRm9ybSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU2VydmljZS51cGRhdGUodGhpcy5pZCwgbmV3c0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5pZCksLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3c1wiLCBkYXRhLmlkXSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hTZXJ2aWNlLmNyZWF0ZShuZXdzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmlkKSwvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdzXCIsIGRhdGEuaWRdKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2UoZGF0YTogTWF0Y2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtLnBhdGNoVmFsdWUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUZvcm0oKTogTWF0Y2gge1xyXG4gICAgICAgIGxldCBpdGVtID0gbmV3IE1hdGNoKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaXRlbS5jbHViSWQgPSB0aGlzLmVkaXRGb3JtLmNvbnRyb2xzW1wiY2x1YklkXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0uaXNIb21lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImlzSG9tZVwiXS52YWx1ZTtcclxuICAgICAgICBpdGVtLmRhdGVUaW1lID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcImRhdGVUaW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGl0ZW0udHlwZUlkID0gdGhpcy5lZGl0Rm9ybS5jb250cm9sc1tcInR5cGVJZFwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdjbHViSWQnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdpc0hvbWUnOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgICdkYXRlVGltZSc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgJ3R5cGVJZCc6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VDbHVicyhpdGVtczogQ2x1YltdKSB7XHJcbiAgICAgICAgdGhpcy5jbHVicyA9IGl0ZW1zO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvbWF0Y2gvbWF0Y2gtZWRpdC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgTWF0Y2gge1xyXG4gICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgIGlzSG9tZTogYm9vbGVhbjtcclxuICAgICAgICAgY2x1YklkOiBudW1iZXI7XHJcbiAgICAgICAgIGNsdWJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgIGRhdGVUaW1lOiBEYXRlO1xyXG4gICAgICAgICB0eXBlSWQ6IG51bWJlcjtcclxuICAgICAgICAgdHlwZU5hbWU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYW5ndWxhcjJhcHAvYXBwL21hdGNoL21hdGNoLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZWRpdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KGVkaXRGb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcXFwiPkPQvtC/0LXRgNC90LjQujwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxhdXRvY29tcGxldGUgbmctbW9kZWw9XFxcInZtLml0ZW0uY2x1Yk5hbWVcXFwiIG5hbWU9XFxcImNsdWJOYW1lXFxcIiBhdHRyLXBsYWNlaG9sZGVyPVxcXCLQktCy0LXQtNC40YLQtSDQutC70YPQsS4uLlxcXCIgY2xpY2stYWN0aXZhdGlvbj1cXFwidHJ1ZVxcXCIgZGF0YT1cXFwidm0uY2x1YnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uLXR5cGU9XFxcInZtLnVwZGF0ZUNsdWJzXFxcIiB2YWxpZGF0aW9uPVxcXCJtYXhfbGVuOjMwfHJlcXVpcmVkXFxcIj48L2F1dG9jb21wbGV0ZT4tLT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yIGNvbC1zbS0yXFxcIj4g0JrQsNGC0LXQs9C+0YDQuNGPOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY2F0ZWdvcnlJZFxcXCIgbmctbW9kZWw9XFxcInZtLml0ZW0udHlwZUlkXFxcIiBuZy1vcHRpb25zPVxcXCJ0eXBlLmlkIGFzIHR5cGUubmFtZSBmb3IgdHlwZSBpbiB2bS50eXBlc1xcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtb2Zmc2V0LTIgY29sLXNtLW9mZnNldC0yIGNvbC14cy0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcIm9uVG9wXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImlzSG9tZVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+INCU0L7QvNCwIDwhLS10b2RvIGFkZCBzd2l0Y2hlci0tPiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcXFwiPtCU0LDRgtCwPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsaWRhdGlvbj1cXFwicmVxdWlyZWRcXFwiIG5hbWU9XFxcImRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctcmVhZG9ubHk9XFxcInRydWVcXFwiIHNob3ctYnV0dG9uLWJhcj1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdWliLWRhdGVwaWNrZXItcG9wdXA9XFxcImRkL01NTU0veXl5eVxcXCIgbmctbW9kZWw9XFxcInZtLml0ZW0uZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpcy1vcGVuPVxcXCJ2bS5zdGF0dXMub3BlbmVkXFxcIiBkYXRlcGlja2VyLW9wdGlvbnM9XFxcInZtLmRhdGVPcHRpb25zXFxcIiBjbG9zZS10ZXh0PVxcXCLQl9Cw0LrRgNGL0YLRjFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQtaW5wdXQtZm9ybWF0cz1cXFwiYWx0SW5wdXRGb3JtYXRzXFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbigpXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG4gdmEtdG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLm9wZW4oKVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiB1aWItdGltZXBpY2tlciBuZy1tb2RlbD1cXFwidm0uaXRlbS50aW1lXFxcIiBuZy1jaGFuZ2U9XFxcInZtLnRpbWVDaGFuZ2VkKClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXItc3RlcD1cXFwiMVxcXCIgbWludXRlLXN0ZXA9XFxcIjFcXFwiIHNob3ctbWVyaWRpYW49XFxcImZhbHNlXFxcIiBzaG93LXNwaW5uZXJzPVxcXCJmYWxzZVxcXCIgbmctZGlzYWJsZWQ9XFxcIiF2bS5pdGVtLmRhdGVcXFwiPjwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdEZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FuZ3VsYXIyYXBwL2FwcC9tYXRjaC9tYXRjaC1lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWF1dG8tY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItYXV0by1jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSBcIi4vYWRtaW4uc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lcGxUYWJsZS5jb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FuZ3VsYXIyYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gZnJvbSBcIi4vYWRtaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb2xlc0NoZWNrZWRTZXJ2aWNlLCBJUm9sZXMgfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImVwbC10YWJsZVwiLFxyXG4gICAgLy90ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2VwbFRhYmxlLmNvbXBvbmVudC5odG1sXCIpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXBsVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgLy8gICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZXNDaGVja2VkLmNoZWNrZWRSb2xlcztcclxuXHJcbiAgICAvLyAgICB0aGlzLnNlcnZpY2VcclxuICAgIC8vICAgICAgICAudXBkYXRlRXBsVGFibGUoKVxyXG4gICAgLy8gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIHRydWUgdXBkYXRlXHJcbiAgICAvLyAgICAgICAgfSxcclxuICAgIC8vICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAvLyAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJcIikpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZSBjb2wteHMtMTIgb3ZlcmZsb3dhYmxlXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD4jPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0JrQvtC80LDQvdC00LA8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QmDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCSPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+0J08L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD7QnzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPisvLTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPtCePC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT48dHI+PHRkPjE8L3RkPjx0ZD7Qm9C40LLQtdGA0L/Rg9C70YxcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjg8L3RkPjx0ZD4yPC90ZD48dGQ+MTwvdGQ+PHRkPjE2PC90ZD48dGQ+MjY8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4yPC90ZD48dGQ+0KfQtdC70YHQuFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+ODwvdGQ+PHRkPjE8L3RkPjx0ZD4yPC90ZD48dGQ+MTc8L3RkPjx0ZD4yNTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjM8L3RkPjx0ZD7QnNCw0L3Rh9C10YHRgtC10YAg0KHQuNGC0LhcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjc8L3RkPjx0ZD4zPC90ZD48dGQ+MTwvdGQ+PHRkPjE1PC90ZD48dGQ+MjQ8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD40PC90ZD48dGQ+0JDRgNGB0LXQvdCw0LtcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjc8L3RkPjx0ZD4zPC90ZD48dGQ+MTwvdGQ+PHRkPjEzPC90ZD48dGQ+MjQ8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD41PC90ZD48dGQ+0KLQvtGC0YLQtdC90YXRjdC8XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD41PC90ZD48dGQ+NjwvdGQ+PHRkPjA8L3RkPjx0ZD45PC90ZD48dGQ+MjE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD42PC90ZD48dGQ+0JzQsNC90YfQtdGB0YLQtdGAINCu0L3QsNC50YLQtdC0XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD41PC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD4zPC90ZD48dGQ+MTg8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD43PC90ZD48dGQ+0K3QstC10YDRgtC+0L1cXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjU8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjI8L3RkPjx0ZD4xODwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjg8L3RkPjx0ZD7Qo9C+0YLRhNC+0YDQtFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+NDwvdGQ+PHRkPjM8L3RkPjx0ZD40PC90ZD48dGQ+LTQ8L3RkPjx0ZD4xNTwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjk8L3RkPjx0ZD7QkdC10YDQvdC70LhcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjQ8L3RkPjx0ZD4yPC90ZD48dGQ+NTwvdGQ+PHRkPi00PC90ZD48dGQ+MTQ8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMDwvdGQ+PHRkPtCh0LDRg9GC0LPQtdC80L/RgtC+0L1cXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD40PC90ZD48dGQ+NDwvdGQ+PHRkPjA8L3RkPjx0ZD4xMzwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjExPC90ZD48dGQ+0JLQtdGB0YIg0JHRgNC+0LzQstC40YdcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD40PC90ZD48dGQ+NDwvdGQ+PHRkPi0zPC90ZD48dGQ+MTM8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xMjwvdGQ+PHRkPtCh0YLQvtC6INCh0LjRgtC4XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+NDwvdGQ+PHRkPjQ8L3RkPjx0ZD4tNTwvdGQ+PHRkPjEzPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTM8L3RkPjx0ZD7QkdC+0YDQvdC80YPRglxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MzwvdGQ+PHRkPjM8L3RkPjx0ZD41PC90ZD48dGQ+LTM8L3RkPjx0ZD4xMjwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE0PC90ZD48dGQ+0JvQtdGB0YLQtdGAXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MzwvdGQ+PHRkPjU8L3RkPjx0ZD4tNTwvdGQ+PHRkPjEyPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTU8L3RkPjx0ZD7QnNC40LTQu9GB0LHRgNC+XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4yPC90ZD48dGQ+NTwvdGQ+PHRkPjQ8L3RkPjx0ZD4tMjwvdGQ+PHRkPjExPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTY8L3RkPjx0ZD7QmtGA0LjRgdGC0LDQuyDQn9GN0LvQsNGBXFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MjwvdGQ+PHRkPjY8L3RkPjx0ZD4tMzwvdGQ+PHRkPjExPC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MTc8L3RkPjx0ZD7QktC10YHRgiDQpdGN0LxcXG48L3RkPjx0ZD4xMTwvdGQ+PHRkPjM8L3RkPjx0ZD4yPC90ZD48dGQ+NjwvdGQ+PHRkPi05PC90ZD48dGQ+MTE8L3RkPjwvdHI+XFxyXFxuPHRyPjx0ZD4xODwvdGQ+PHRkPtCl0LDQu9C7XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4zPC90ZD48dGQ+MTwvdGQ+PHRkPjc8L3RkPjx0ZD4tMTQ8L3RkPjx0ZD4xMDwvdGQ+PC90cj5cXHJcXG48dHI+PHRkPjE5PC90ZD48dGQ+0KHRg9C+0L3RgdC4XFxuPC90ZD48dGQ+MTE8L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjg8L3RkPjx0ZD4tMTE8L3RkPjx0ZD41PC90ZD48L3RyPlxcclxcbjx0cj48dGQ+MjA8L3RkPjx0ZD7QodCw0L3QtNC10YDQu9C10L3QtFxcbjwvdGQ+PHRkPjExPC90ZD48dGQ+MTwvdGQ+PHRkPjI8L3RkPjx0ZD44PC90ZD48dGQ+LTEyPC90ZD48dGQ+NTwvdGQ+PC90cj5cXHJcXG48L3Rib2R5PjwvdGFibGU+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyMmFwcC9hcHAvYWRtaW4vZXBsVGFibGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9