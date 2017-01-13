import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { Configuration } from "./app.constants";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";
import * as materialCategory from "./materialCategory/index";
import * as auth from "./auth/index";
import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index";
import * as account from "./account/index";
import * as chat from "./chat/index";
import * as club from "./club/index";
import * as forumSubsection from "./forumSubsection/index";
import * as forumMessage from "./forumMessage/index";
import * as forumTheme from "./forumTheme/index";
import * as home from "./home/index";
import * as image from "./image/index";
import * as match from "./match/index";
import * as player from "./player/index";
import * as roleGroup from "./roleGroup/index";
import * as season from "./season/index";
import * as shared from "./shared/index";
import * as tineMceEditor from "./tinyMceEditor/index";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import * as pm from "./pm/index";
import * as wish from "./wish/index";
import * as materialComment from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule, TabsModule } from "ng2-bootstrap";
import { ReCaptchaModule } from "angular2-recaptcha";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        DatepickerModule.forRoot(),
        FormsModule,
        ModalModule.forRoot(),
        Ng2AutoCompleteModule,
        PaginationModule.forRoot(),
        ReactiveFormsModule,
        TabsModule.forRoot(),
        RouterModule.forRoot(routes),
        ReCaptchaModule
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
        forumMessage.ForumMessageAdditionComponent,
        forumSubsection.ForumSubsectionEditComponent,
        forumSubsection.ForumSubsectionListComponent,
        forumTheme.ForumThemeEditComponent,
        forumTheme.ForumThemeListComponent,
        home.AboutClubComponent,
        home.CoachTeamComponent,
        home.ClubHistoryComponent,
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
        player.PlayerStatisticsComponent,
        pm.PmDetailComponent,
        pm.PmEditComponent,
        pm.PmListComponent,
        pm.PmReplyComponent,
        roleGroup.RoleGroupListComponent,
        season.SeasonEplTableComponent,
        shared.RecaptchaComponent,
        tineMceEditor.FullEditorComponent,
        tineMceEditor.MediumEditorComponent,
        wish.WishEditComponent,
        wish.WishListComponent,
        AppComponent,
        EplTableComponent,
        ForumSectionListComponent,
        NewsListComponent,
        NewsDetailComponent,
        NewsEditComponent,
        UserDetailComponent,
        UserListComponent
    ], // components and directives
    bootstrap: [AppComponent], // root component
    providers: [// services  
        auth.AuthService,
        auth.RoleGuard,
        auth.UnSignedGuard,
        account.AccountService,
        account.AccountValidators,
        chat.ChatMessageService,
        club.ClubService,
        forumMessage.ForumMessageService,
        forumSubsection.ForumSubsectionService,
        forumTheme.ForumThemeService,
        image.ImageService,
        match.MatchService,
        materialCategory.MaterialCategoryService,
        materialComment.MaterialCommentService,
        pm.PmService,
        roleGroup.RoleGroupService,
        shared.HttpWrapper,
        shared.GlobalValidators,
        shared.LocalStorageService,
        shared.RolesCheckedService,
        wish.WishService,
        AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        ForumSectionService,
        { provide: shared.LocalStorage, useFactory: () => (window) ? window.localStorage : {} },
        NewsService,
        Title,
        UserService
    ]
})
export class AppModule { }