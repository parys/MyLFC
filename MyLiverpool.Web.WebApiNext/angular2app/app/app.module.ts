import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { Title } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UniversalModule } from "angular2-universal";
import { LocalStorage } from "./shared/local-storage";     

import { AppComponent }  from "./app.component";
import { routes, appRoutingProviders  } from "./app.routes";
import { Configuration } from "./app.constants";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";             
import * as newsCategory from "./newsCategory/index";
import { AuthGuard, AuthService } from "./auth/index";
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
import * as roleGroup from "./roleGroup/index";
import * as shared from "./shared/index";                     
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule, TabsModule } from "ng2-bootstrap";
import { BreadcrumbComponent } from "./shouldRemove/index";
import { FileUploadModule } from "ng2-file-upload/ng2-file-upload";

@NgModule({
    imports: [
        UniversalModule,     // Must be first import. This automatically imports NgModule, BrowserModule, HttpModule, and JsonpModule too.],
        DatepickerModule,
        FileUploadModule,
        FormsModule,
        ModalModule,
        Ng2AutoCompleteModule, 
        PaginationModule,
        ReactiveFormsModule,
        TabsModule,
        RouterModule.forRoot(routes, {})
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
        image.ImageListComponent,
        newsCategory.NewsCategoryEditComponent,
        newsCategory.NewsCategoryListComponent,
        AppComponent,
        BreadcrumbComponent,
        EplTableComponent,
        ForumSectionListComponent,
        match.MatchEditComponent,
        match.MatchListComponent,
        MaterialCommentDetailComponent,
        MaterialCommentListComponent,
        MaterialCommentSectionComponent,
        NewsListComponent,
        NewsDetailComponent,
        NewsEditComponent,
        PmDetailComponent,
        PmEditComponent,
        PmListComponent,
        UserDetailComponent,
        UserListComponent,
        WishEditComponent,
        WishListComponent],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [ // services
        account.AccountService, 
        chat.ChatMessageService,
        club.ClubService,
        forumMessage.ForumMessageService,
        forumSubsection.ForumSubsectionService,
        forumTheme.ForumThemeService,
        image.ImageService,
        match.MatchService,
        newsCategory.NewsCategoryService,
        roleGroup.RoleGroupService,
        shared.HttpWrapper,
        shared.GlobalValidators,
        shared.LocalStorageService,
        shared.RolesCheckedService,
        AdminService,
        appRoutingProviders,
        AuthGuard,
        AuthService,
     //   BreadcrumbService,
        Configuration,
        ForumSectionService,
        { provide: LocalStorage, useFactory: () => (window) ? window.localStorage : {}},
        MaterialCommentService,
        NewsService,
        PmService,
        Title,
        UserService,
        WishService
    ]
})
export class AppModule { }