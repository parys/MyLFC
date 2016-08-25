"use strict";
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
const account_signup_component_1 = require("./account/account-signup/account-signup.component");
const news_service_1 = require("./news/shared/news.service");
const ng2_translate_1 = require('ng2-translate');
const news_edit_component_1 = require("./news/news-edit/news-edit.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing, ng2_translate_1.TranslateModule.forRoot()],
        declarations: [account_signup_component_1.AccountSignupComponent, app_component_1.AppComponent, news_list_component_1.NewsListComponent, news_detail_component_1.NewsDetailComponent, news_edit_component_1.NewsEditComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [news_service_1.NewsService, app_constants_1.Configuration, app_routes_1.appRoutingProviders] // services
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map