"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var news_list_component_1 = require("./news/news-list/news-list.component");
var app_constants_1 = require("./app.constants");
var news_detail_component_1 = require("./news/news-detail/news-detail.component");
var account_signup_component_1 = require("./account/account-signup.component");
var news_service_1 = require("./news/shared/news.service");
var news_edit_component_1 = require("./news/news-edit/news-edit.component");
var newsCategory_service_1 = require("./newsCategory/shared/newsCategory.service");
var account_signin_component_1 = require("./account/account-signin.component");
var httpWrapper_1 = require("./shared/httpWrapper");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var auth_service_1 = require("./auth/auth.service");
var localStorage_1 = require("./shared/localStorage");
var secured_directive_1 = require("./shared/secured.directive");
var account_service_1 = require("./account/account.service");
var newsCategory_list_component_1 = require("./newsCategory/newsCategory-list.component");
var newsCategory_edit_component_1 = require("./newsCategory/newsCategory-edit.component");
var user_detail_component_1 = require("./user/user-detail.component");
var user_service_1 = require("./user/user.service");
var user_list_component_1 = require("./user/user-list.component");
var pm_list_component_1 = require("./pm/pm-list.component");
var pm_service_1 = require("./pm/pm.service");
var material_1 = require("@angular/material");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot(),
                forms_1.ReactiveFormsModule,
                app_routes_1.routing],
            declarations: [
                account_signin_component_1.AccountSigninComponent,
                account_signup_component_1.AccountSignupComponent,
                app_component_1.AppComponent,
                newsCategory_edit_component_1.NewsCategoryEditComponent,
                newsCategory_list_component_1.NewsCategoryListComponent,
                news_list_component_1.NewsListComponent,
                news_detail_component_1.NewsDetailComponent,
                news_edit_component_1.NewsEditComponent,
                pm_list_component_1.PmListComponent,
                secured_directive_1.SecuredDirective,
                user_detail_component_1.UserDetailComponent,
                user_list_component_1.UserListComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                account_service_1.AccountService,
                app_routes_1.appRoutingProviders,
                auth_guard_service_1.AuthGuard,
                auth_service_1.AuthService,
                app_constants_1.Configuration,
                httpWrapper_1.HttpWrapper,
                { provide: localStorage_1.LocalStorageMine, useClass: localStorage_1.LocalStorageMine },
                news_service_1.NewsService,
                newsCategory_service_1.NewsCategoryService,
                pm_service_1.PmService,
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map