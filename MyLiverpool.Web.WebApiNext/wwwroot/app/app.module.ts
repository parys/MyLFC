import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";                                                                                                                          

import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";
import { NewsCategoryService } from "./newsCategory/shared/newsCategory.service";
import { HttpWrapper } from "./shared/httpWrapper";
import { AuthGuard, AuthService } from "./auth/index";
import { LocalStorageMine, SecuredDirective } from "./shared/index";
import { AccountSigninComponent, AccountSignupComponent, AccountService, ConfirmEmailComponent } from "./account/index";
import { NewsCategoryListComponent } from "./newsCategory/newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory/newsCategory-edit.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { ClubHistoryComponent } from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { RolesCheckedService } from "./shared/index";
import { DatepickerModule, ModalModule, PaginationModule } from "ng2-bootstrap/ng2-bootstrap";

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
        AccountSigninComponent,
        AccountSignupComponent,
        AppComponent,
        ConfirmEmailComponent,
        ClubHistoryComponent,
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
        SecuredDirective,
        UserDetailComponent,
        UserListComponent,
        WishEditComponent,
        WishListComponent],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [ // services
        AccountService,
        appRoutingProviders,
        AuthGuard,
        AuthService,
        Configuration,
        HttpWrapper,
        { provide: LocalStorageMine, useClass: LocalStorageMine },
        MaterialCommentService,
        NewsService,
        NewsCategoryService,
        PmService,
        RolesCheckedService,
        UserService,
        WishService
    ]
})
export class AppModule { }