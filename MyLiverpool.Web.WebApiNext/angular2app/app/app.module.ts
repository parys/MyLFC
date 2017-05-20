import { NgModule, LOCALE_ID } from "@angular/core";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { ForumModule } from "./forum/index";
import { Configuration } from "./app.constants";
import * as material from "./material/index";
import { EditorModule } from "./editor/index";
import * as materialCategory from "./materialCategory/index";
import * as auth from "./auth/index";
import * as account from "./account/index";
import * as chat from "./chat/index";
import * as club from "./club/index";
import * as home from "./home/index";
import * as image from "./image/index";
import * as match from "./match/index";
import { PersonModule } from "./person/index";
import * as roleGroup from "./roleGroup/index";
import * as season from "./season/index";
import { SharedModule } from "./shared/index";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import * as pm from "./pm/index";
import { WishModule } from "./wish/index";
import * as materialComment from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AdminService, EplTableComponent } from "./admin/index";
import { PaginationModule } from "ng2-bootstrap";
import { DatepickerModule } from "ng2-bootstrap/datepicker";
import { TimepickerModule } from "ng2-bootstrap/timepicker";
import { ReCaptchaModule } from "angular2-recaptcha";
import { Ng2BreadcrumbModule, BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";
import { BreadcrumbComponent } from "./shared/breadcrumb.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdDialogModule, MdSnackBarModule, MdButtonModule, MdInputModule } from '@angular/material';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        EditorModule,
        HttpModule,
        DatepickerModule.forRoot(),
        ForumModule,
        MdButtonModule,
        MdDialogModule,
        MdInputModule,
        MdSnackBarModule,
        MdTabsModule,
        Ng2AutoCompleteModule,
        Ng2BreadcrumbModule.forRoot(),
        PaginationModule.forRoot(),
        PersonModule,
        RouterModule.forRoot(routes),
        ReCaptchaModule,
        SharedModule,
        TimepickerModule.forRoot(),
        WishModule
    ],
    declarations: [
        account.AccountSigninComponent,
        account.AccountSignupComponent,
        account.ChangePasswordComponent,
        account.ConfirmEmailComponent,
        account.ForgotPasswordComponent,
        account.ResetPasswordComponent,
        account.UnconfirmedEmailComponent,
        BreadcrumbComponent,
        chat.MiniChatComponent,
        club.ClubEditComponent,
        club.ClubListComponent,
        home.AboutClubComponent,
        home.CoachTeamComponent,
        home.ClubHistoryComponent,
        home.NavbarComponent,
        home.SidebarLeftComponent,
        home.SidebarRightComponent,
        home.RulesComponent,
        home.SquadComponent,
        image.ImageAdditionComponent,
        image.ImageDetailComponent,
        image.ImageListComponent,
        match.MatchEditComponent,
        match.MatchListComponent,
        match.MatchCalendarComponent,
        materialCategory.MaterialCategoryEditComponent,
        materialCategory.MaterialCategoryListComponent,
        materialComment.MaterialCommentDetailComponent,
        materialComment.MaterialCommentListComponent,
        materialComment.MaterialCommentSectionComponent,
        pm.PmCounterComponent,
        pm.PmDetailComponent,
        pm.PmEditComponent,
        pm.PmListComponent,
        pm.PmReplyComponent,
        roleGroup.RoleGroupListComponent,
        season.SeasonCalendarComponent,
        season.SeasonEplTableComponent,
        season.SeasonEditComponent,
        season.SeasonListComponent,
        AppComponent,
        EplTableComponent,
        material.MaterialListComponent,
        material.MaterialDetailComponent,
        material.MaterialEditComponent,
        material.MaterialActivateDialogComponent,
        UserDetailComponent,
        UserListComponent
    ], // components and directives
    bootstrap: [
        AppComponent], // root component
entryComponents: [
 material.MaterialActivateDialogComponent,
],
    providers: [// services  
        auth.AuthService,
        auth.RoleGuard,
        auth.UnSignedGuard,
        account.AccountService,
        account.AccountValidators,
        BreadcrumbService,
        chat.ChatMessageService,
        club.ClubService,
        image.ImageService,
        match.MatchService,
        materialCategory.MaterialCategoryService,
        materialComment.MaterialCommentService,
        pm.PmService,
        roleGroup.RoleGroupService,
        season.SeasonService,
        AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        material.MaterialService,
        Title,
        UserService
    ]
})
export class AppModule { }