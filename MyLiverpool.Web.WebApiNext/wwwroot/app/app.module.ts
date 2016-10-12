import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";

import { AccountSignupComponent } from "./account/account-signup.component";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";
import { NewsCategoryService } from "./newsCategory/shared/newsCategory.service";
import { AccountSigninComponent } from "./account/account-signin.component";
import { HttpWrapper } from "./shared/httpWrapper";
import { AuthGuard, AuthService } from "./auth/index";
import { LocalStorageMine, SecuredDirective } from "./shared/index";
import { AccountService } from "./account/account.service";
import { NewsCategoryListComponent } from "./newsCategory/newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory/newsCategory-edit.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { ClubHistoryComponent } from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { Ng2PaginationModule } from "ng2-pagination";
import { ModalModule } from "ng2-modal";
import { RolesCheckedService } from "./shared/index";
import { Pagination } from "ng2-bootstrap";
// import { Pagination } from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        ModalModule,
        Ng2AutoCompleteModule,
   //     Ng2PaginationModule,
        ReactiveFormsModule,
        routing],
    declarations: [
        AccountSigninComponent,
        AccountSignupComponent,
        AppComponent,
        ClubHistoryComponent,
        NewsCategoryEditComponent,
        NewsCategoryListComponent,
        NewsListComponent,
        NewsDetailComponent,
        NewsEditComponent,
    //    Pagination,
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
        NewsService,
        NewsCategoryService,
        PmService,
        RolesCheckedService,
        UserService,
        WishService
    ]
})
export class AppModule { }