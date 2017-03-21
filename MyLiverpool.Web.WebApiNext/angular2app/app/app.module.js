"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var index_1 = require("./forum/index");
var app_constants_1 = require("./app.constants");
var material = require("./material/index");
var index_2 = require("./editor/index");
var materialCategory = require("./materialCategory/index");
var auth = require("./auth/index");
var account = require("./account/index");
var chat = require("./chat/index");
var club = require("./club/index");
var home = require("./home/index");
var image = require("./image/index");
var match = require("./match/index");
var index_3 = require("./person/index");
var roleGroup = require("./roleGroup/index");
var season = require("./season/index");
var index_4 = require("./shared/index");
var user_detail_component_1 = require("./user/user-detail.component");
var user_service_1 = require("./user/user.service");
var user_list_component_1 = require("./user/user-list.component");
var pm = require("./pm/index");
var index_5 = require("./wish/index");
var materialComment = require("./materialComment/index");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var index_6 = require("./admin/index");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var datepicker_1 = require("ng2-bootstrap/datepicker");
var timepicker_1 = require("ng2-bootstrap/timepicker");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            index_2.EditorModule,
            http_1.HttpModule,
            datepicker_1.DatepickerModule.forRoot(),
            index_1.ForumModule,
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_auto_complete_1.Ng2AutoCompleteModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            index_3.PersonModule,
            router_1.RouterModule.forRoot(app_routes_1.routes),
            angular2_recaptcha_1.ReCaptchaModule,
            index_4.SharedModule,
            ng2_bootstrap_1.TabsModule.forRoot(),
            timepicker_1.TimepickerModule.forRoot(),
            index_5.WishModule
        ],
        declarations: [
            account.AccountSigninComponent,
            account.AccountSignupComponent,
            account.ChangePasswordComponent,
            account.ConfirmEmailComponent,
            account.ForgotPasswordComponent,
            account.ResetPasswordComponent,
            account.UnconfirmedEmailComponent,
            chat.MiniChatComponent,
            club.ClubEditComponent,
            club.ClubListComponent,
            home.AboutClubComponent,
            home.CoachTeamComponent,
            home.ClubHistoryComponent,
            home.NavbarComponent,
            home.RightSidebarComponent,
            home.RulesComponent,
            home.SquadComponent,
            image.ImageAdditionComponent,
            image.ImageDetailComponent,
            image.ImageListComponent,
            match.MatchCalendarComponent,
            match.MatchEditComponent,
            match.MatchListComponent,
            materialCategory.MaterialCategoryEditComponent,
            materialCategory.MaterialCategoryListComponent,
            materialComment.MaterialCommentDetailComponent,
            materialComment.MaterialCommentListComponent,
            materialComment.MaterialCommentSectionComponent,
            pm.PmDetailComponent,
            pm.PmEditComponent,
            pm.PmListComponent,
            pm.PmReplyComponent,
            roleGroup.RoleGroupListComponent,
            season.SeasonEplTableComponent,
            app_component_1.AppComponent,
            index_6.EplTableComponent,
            material.MaterialListComponent,
            material.MaterialDetailComponent,
            material.MaterialEditComponent,
            user_detail_component_1.UserDetailComponent,
            user_list_component_1.UserListComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            auth.AuthService,
            auth.RoleGuard,
            auth.UnSignedGuard,
            account.AccountService,
            account.AccountValidators,
            chat.ChatMessageService,
            club.ClubService,
            image.ImageService,
            match.MatchService,
            materialCategory.MaterialCategoryService,
            materialComment.MaterialCommentService,
            pm.PmService,
            roleGroup.RoleGroupService,
            index_6.AdminService,
            { provide: core_1.LOCALE_ID, useValue: "ru-RU" },
            app_constants_1.Configuration,
            material.MaterialService,
            platform_browser_1.Title,
            user_service_1.UserService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map