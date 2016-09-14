"use strict";
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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const app_routes_1 = require("./app.routes");
const news_list_component_1 = require("./news/news-list/news-list.component");
const app_constants_1 = require("./app.constants");
const news_detail_component_1 = require("./news/news-detail/news-detail.component");
const account_signup_component_1 = require("./account/account-signup.component");
const news_service_1 = require("./news/shared/news.service");
//import { TranslateModule } from 'ng2-translate';
const news_edit_component_1 = require("./news/news-edit/news-edit.component");
const newsCategory_service_1 = require("./newsCategory/shared/newsCategory.service");
const account_signin_component_1 = require("./account/account-signin.component");
const httpWrapper_1 = require("./shared/httpWrapper");
const auth_guard_service_1 = require("./auth/auth-guard.service");
const auth_service_1 = require("./auth/auth.service");
const localStorage_1 = require("./shared/localStorage");
const secured_directive_1 = require("./shared/secured.directive");
const account_service_1 = require("./account/account.service");
//import {SecuredLinkComponent} from "./shared/securedLink.component";
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
        declarations: [
            account_signin_component_1.AccountSigninComponent,
            account_signup_component_1.AccountSignupComponent,
            app_component_1.AppComponent,
            news_list_component_1.NewsListComponent,
            news_detail_component_1.NewsDetailComponent,
            news_edit_component_1.NewsEditComponent,
            secured_directive_1.SecuredDirective],
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
            newsCategory_service_1.NewsCategoryService
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map