"use strict";
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
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_universal_1 = require("angular2-universal");
var http_1 = require("@angular/http");
var local_storage_1 = require("./shared/local-storage");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var app_constants_1 = require("./app.constants");
var index_1 = require("./news/index");
var newsCategory = require("./newsCategory/index");
var index_2 = require("./auth/index");
var index_3 = require("./forumSection/index");
var account = require("./account/index");
var club = require("./club/index");
var match = require("./match/index");
var shared = require("./shared/index");
var user_detail_component_1 = require("./user/user-detail.component");
var user_service_1 = require("./user/user.service");
var user_list_component_1 = require("./user/user-list.component");
var index_4 = require("./pm/index");
var index_5 = require("./home/index");
var index_6 = require("./wish/index");
var index_7 = require("./materialComment/index");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var index_8 = require("./admin/index");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
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