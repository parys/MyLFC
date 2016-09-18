import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from "./app.routes";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { Configuration } from "./app.constants";

import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { AccountSignupComponent } from "./account/account-signup.component";
import { NewsService } from "./news/shared/news.service";
//import { TranslateModule } from 'ng2-translate';
import {NewsEditComponent} from "./news/news-edit/news-edit.component";
import { NewsCategoryService } from "./newsCategory/shared/newsCategory.service";
import { AccountSigninComponent } from "./account/account-signin.component";
import { HttpWrapper } from "./shared/httpWrapper";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { LocalStorageMine } from "./shared/localStorage";
import { SecuredDirective } from "./shared/secured.directive";
import { AccountService } from "./account/account.service";
import { NewsCategoryListComponent } from "./newsCategory/newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory/newsCategory-edit.component";
//import {SecuredLinkComponent} from "./shared/securedLink.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],       // module dependencies RouterModule.forRoot(routes, { useHash: true })
    declarations: [
        AccountSigninComponent,
        AccountSignupComponent,
        AppComponent,
        NewsCategoryEditComponent,
        NewsCategoryListComponent,
        NewsListComponent,
        NewsDetailComponent,
        NewsEditComponent,
        SecuredDirective],   // components and directives
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
        NewsCategoryService
        ]               
})
export class AppModule { }