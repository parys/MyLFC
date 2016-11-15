"use strict";
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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var app_constants_1 = require("./app.constants");
var index_1 = require("./news/index");
var newsCategory_service_1 = require("./newsCategory/shared/newsCategory.service");
var index_2 = require("./auth/index");
var index_3 = require("./shared/index");
var index_4 = require("./forumSection/index");
var account = require("./account/index");
var match = require("./match/index");
var newsCategory_list_component_1 = require("./newsCategory/newsCategory-list.component");
var newsCategory_edit_component_1 = require("./newsCategory/newsCategory-edit.component");
var user_detail_component_1 = require("./user/user-detail.component");
var user_service_1 = require("./user/user.service");
var user_list_component_1 = require("./user/user-list.component");
var index_5 = require("./pm/index");
var index_6 = require("./home/index");
var index_7 = require("./wish/index");
var index_8 = require("./materialComment/index");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var index_9 = require("./shared/index");
var index_10 = require("./admin/index");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.DatepickerModule,
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
                app_component_1.AppComponent,
                index_6.ClubHistoryComponent,
                index_10.EplTableComponent,
                index_4.ForumSectionListComponent,
                match.MatchListComponent,
                index_8.MaterialCommentDetailComponent,
                index_8.MaterialCommentListComponent,
                index_8.MaterialCommentSectionComponent,
                newsCategory_edit_component_1.NewsCategoryEditComponent,
                newsCategory_list_component_1.NewsCategoryListComponent,
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
                index_10.AdminService,
                app_routes_1.appRoutingProviders,
                index_2.AuthGuard,
                index_2.AuthService,
                app_constants_1.Configuration,
                index_4.ForumSectionService,
                index_3.HttpWrapper,
                index_9.GlobalValidators,
                { provide: index_3.LocalStorageMine, useClass: index_3.LocalStorageMine },
                match.MatchService,
                index_8.MaterialCommentService,
                index_1.NewsService,
                newsCategory_service_1.NewsCategoryService,
                index_5.PmService,
                index_9.RolesCheckedService,
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