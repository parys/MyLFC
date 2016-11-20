import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule, Title } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";             
import * as newsCategory from "./newsCategory/index";
import { AuthGuard, AuthService } from "./auth/index";
import { HttpWrapper, LocalStorageMine, SecuredDirective, RolesCheckedService, GlobalValidators } from "./shared/index";
import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index"; 
import * as account from "./account/index";
import * as club from "./club/index";
import * as match from "./match/index";                       
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { ClubHistoryComponent, RulesComponent, RightSidebarComponent } from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule } from "ng2-bootstrap/ng2-bootstrap";
import { FileUploadModule } from "ng2-file-upload/ng2-file-upload";

@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule,
        FileUploadModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        ModalModule,
        Ng2AutoCompleteModule,
        PaginationModule,
        ReactiveFormsModule,
        routing],
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
        AppComponent,
        ClubHistoryComponent,
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
        RightSidebarComponent,
        RulesComponent,
        SecuredDirective,
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
        AdminService,
        appRoutingProviders,
        AuthGuard,
        AuthService,
        Configuration,
        ForumSectionService,
        HttpWrapper,
        GlobalValidators,
        { provide: LocalStorageMine, useClass: LocalStorageMine },
        MaterialCommentService,
        NewsService,
        PmService,
        RolesCheckedService,
        Title,
        UserService,
        WishService
    ]
})
export class AppModule { }