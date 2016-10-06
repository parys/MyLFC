import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { Configuration } from "./app.constants";

import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { AccountSignupComponent } from "./account/account-signup.component";
import { NewsService } from "./news/shared/news.service";
import { NewsEditComponent } from "./news/news-edit/news-edit.component";
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
import { Ng2AutoCompleteModule } from "ng2-auto-complete";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        Ng2AutoCompleteModule,
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
        PmDetailComponent,
        PmEditComponent,
        PmListComponent,
        SecuredDirective,
        UserDetailComponent,
        UserListComponent],   // components and directives
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
        UserService
    ]
})
export class AppModule { }