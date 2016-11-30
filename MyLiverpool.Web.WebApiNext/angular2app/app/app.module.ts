import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { MaterialModule } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { UniversalModule } from "angular2-universal";
import { LocalStorage } from "./shared/local-storage";     

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";             
import * as newsCategory from "./newsCategory/index";
import { AuthGuard, AuthService } from "./auth/index";
import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index"; 
import * as account from "./account/index";
import * as club from "./club/index";
import * as match from "./match/index";
import * as shared from "./shared/index";                     
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import * as home from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule, TabsModule } from "ng2-bootstrap/ng2-bootstrap";
import { FileUploadModule } from "ng2-file-upload/ng2-file-upload";

@NgModule({
    imports: [
        UniversalModule,     // Must be first import. This automatically imports NgModule, BrowserModule, HttpModule, and JsonpModule too.],
        DatepickerModule,
        FileUploadModule,
        FormsModule,
     //   MaterialModule.forRoot(),
        ModalModule,
        Ng2AutoCompleteModule,
        PaginationModule,
        ReactiveFormsModule,
        TabsModule,
        routing
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
        home.AboutClubComponent,
        home.CoachTeamComponent,
        home.ClubHistoryComponent,
        home.RightSidebarComponent,
        home.RulesComponent,
        home.SquadComponent,
        newsCategory.NewsCategoryEditComponent,
        newsCategory.NewsCategoryListComponent,
        shared.SecuredDirective,
        AppComponent,
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
        club.ClubService,
        match.MatchService,
        newsCategory.NewsCategoryService,
        shared.HttpWrapper,
        shared.GlobalValidators,
        shared.LocalStorageService,
        shared.RolesCheckedService,
        AdminService,
        appRoutingProviders,
        AuthGuard,
        AuthService,
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