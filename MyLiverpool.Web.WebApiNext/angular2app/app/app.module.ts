import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule, Title } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";     

import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";
import { NewsCategoryService } from "./newsCategory/shared/newsCategory.service";
import { AuthGuard, AuthService } from "./auth/index";
import { HttpWrapper, LocalStorageMine, SecuredDirective } from "./shared/index";
import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index"; 
import * as account from "./account/index";
import * as club from "./club/index";
import * as match from "./match/index";
import { NewsCategoryListComponent } from "./newsCategory/newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory/newsCategory-edit.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { ClubHistoryComponent, RulesComponent, RightSidebarComponent } from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { RolesCheckedService, GlobalValidators } from "./shared/index";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule } from "ng2-bootstrap/ng2-bootstrap";
import { UPLOAD_DIRECTIVES } from "ng2-uploader/ng2-uploader";

@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule,
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
        AppComponent,
        ClubHistoryComponent,
        EplTableComponent,
        ForumSectionListComponent,
        match.MatchEditComponent,
        match.MatchListComponent,
        MaterialCommentDetailComponent,
        MaterialCommentListComponent,
        MaterialCommentSectionComponent,
        NewsCategoryEditComponent,
        NewsCategoryListComponent,
        NewsListComponent,
        NewsDetailComponent,
        NewsEditComponent,
        PmDetailComponent,
        PmEditComponent,
        PmListComponent,
        RightSidebarComponent,
        RulesComponent,
        SecuredDirective,
        UPLOAD_DIRECTIVES,
        UserDetailComponent,
        UserListComponent,
        WishEditComponent,
        WishListComponent],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [ // services
        account.AccountService, 
        club.ClubService,
        AdminService,
        appRoutingProviders,
        AuthGuard,
        AuthService,
        Configuration,
        ForumSectionService,
        HttpWrapper,
        GlobalValidators,
        { provide: LocalStorageMine, useClass: LocalStorageMine },
        match.MatchService,
        MaterialCommentService,
        NewsService,
        NewsCategoryService,
        PmService,
        RolesCheckedService,
        Title,
        UserService,
        WishService
    ]
})
export class AppModule { }